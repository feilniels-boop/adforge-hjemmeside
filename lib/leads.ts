import {
  adSpendOptions,
  biggestChallengeOptions,
  metaAdsStatusOptions,
} from "@/content/site";
import { getPool } from "./db";
import type { Pool } from "pg";

export type LeadPayload = {
  name: string;
  email: string;
  webshopUrl: string;
  productUrl: string;
  productDescription: string;
  metaAdsStatus: string;
  adSpend: string;
  biggestChallenge: string;
  message?: string;
};

const VALID_AD_SPEND = new Set<string>(adSpendOptions.map((o) => o.value));
const VALID_META = new Set<string>(metaAdsStatusOptions.map((o) => o.value));
const VALID_CHALLENGE = new Set<string>(
  biggestChallengeOptions.map((o) => o.value),
);

let tableReady = false;

async function migrateLegacyLeadsTable(pool: Pool) {
  await pool.query(`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = 'leads' AND column_name = 'website'
      ) THEN
        ALTER TABLE leads RENAME COLUMN website TO webshop_url;
      END IF;
    END $$;
  `);

  await pool.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(32) NOT NULL DEFAULT 'new';
  `);
  await pool.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS product_url TEXT NOT NULL DEFAULT '';
  `);
  await pool.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS product_description TEXT NOT NULL DEFAULT '';
  `);
  await pool.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS meta_ads_status VARCHAR(64) NOT NULL DEFAULT '';
  `);
  await pool.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS biggest_challenge VARCHAR(64) NOT NULL DEFAULT '';
  `);

  const { rows: needCol } = await pool.query<{ exists: boolean }>(
    `SELECT EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'leads' AND column_name = 'need_type'
    ) AS exists`,
  );
  if (needCol[0]?.exists) {
    await pool.query(`
      UPDATE leads SET
        product_url = COALESCE(NULLIF(TRIM(product_url), ''), NULLIF(TRIM(webshop_url), '')),
        product_description = COALESCE(
          NULLIF(TRIM(product_description), ''),
          NULLIF(TRIM(message), ''),
          'Indsendt før formular-opdatering'
        ),
        meta_ads_status = COALESCE(NULLIF(TRIM(meta_ads_status), ''), 'legacy'),
        biggest_challenge = COALESCE(NULLIF(TRIM(biggest_challenge), ''), 'legacy'),
        status = COALESCE(NULLIF(TRIM(status), ''), 'new');
    `);
    await pool.query(`ALTER TABLE leads DROP COLUMN IF EXISTS need_type`);
  }
}

async function ensureLeadsTable(pool: Pool) {
  if (tableReady) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      status VARCHAR(32) NOT NULL DEFAULT 'new',
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      webshop_url TEXT NOT NULL,
      product_url TEXT NOT NULL,
      product_description TEXT NOT NULL,
      meta_ads_status VARCHAR(64) NOT NULL,
      ad_spend VARCHAR(64) NOT NULL,
      biggest_challenge VARCHAR(64) NOT NULL,
      message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await migrateLegacyLeadsTable(pool);
  tableReady = true;
}

export function validateLeadPayload(
  body: unknown,
): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ugyldig forespørgsel." };
  }
  const o = body as Record<string, unknown>;

  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const webshopUrl =
    typeof o.webshopUrl === "string"
      ? o.webshopUrl.trim()
      : typeof o.website === "string"
        ? o.website.trim()
        : "";
  const productUrl = typeof o.productUrl === "string" ? o.productUrl.trim() : "";
  const productDescription =
    typeof o.productDescription === "string" ? o.productDescription.trim() : "";
  const metaAdsStatus =
    typeof o.metaAdsStatus === "string" ? o.metaAdsStatus.trim() : "";
  const adSpend = typeof o.adSpend === "string" ? o.adSpend.trim() : "";
  const biggestChallenge =
    typeof o.biggestChallenge === "string" ? o.biggestChallenge.trim() : "";
  const message =
    typeof o.message === "string" && o.message.trim()
      ? o.message.trim().slice(0, 5000)
      : undefined;

  if (!name || name.length > 200) {
    return { ok: false, error: "Navn er påkrævet." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Gyldig email er påkrævet." };
  }
  if (!webshopUrl || webshopUrl.length > 2000) {
    return { ok: false, error: "Webshop URL er påkrævet." };
  }
  if (!productUrl || productUrl.length > 2000) {
    return { ok: false, error: "Produkt URL er påkrævet." };
  }
  if (!productDescription || productDescription.length > 8000) {
    return { ok: false, error: "Beskriv hvad du sælger (feltet er påkrævet)." };
  }
  if (!VALID_META.has(metaAdsStatus)) {
    return { ok: false, error: "Vælg om du kører Meta ads." };
  }
  if (!VALID_AD_SPEND.has(adSpend)) {
    return { ok: false, error: "Vælg månedligt annonceforbrug." };
  }
  if (!VALID_CHALLENGE.has(biggestChallenge)) {
    return { ok: false, error: "Vælg største udfordring." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      webshopUrl,
      productUrl,
      productDescription,
      metaAdsStatus,
      adSpend,
      biggestChallenge,
      message,
    },
  };
}

export function leadLogSummary(lead: LeadPayload): string {
  const shop = lead.webshopUrl.replace(/^https?:\/\//i, "").split("/")[0];
  return `lead: nameLen=${lead.name.length} emailDomain=${lead.email.split("@")[1] ?? "?"} shop=${shop.slice(0, 64)} spend=${lead.adSpend} meta=${lead.metaAdsStatus}`;
}

export async function persistLead(lead: LeadPayload): Promise<void> {
  const pool = getPool();
  if (!pool) throw new Error("NO_DATABASE");
  await ensureLeadsTable(pool);
  await pool.query(
    `INSERT INTO leads (
      status, name, email, webshop_url, product_url, product_description,
      meta_ads_status, ad_spend, biggest_challenge, message
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      "new",
      lead.name,
      lead.email,
      lead.webshopUrl,
      lead.productUrl,
      lead.productDescription,
      lead.metaAdsStatus,
      lead.adSpend,
      lead.biggestChallenge,
      lead.message ?? null,
    ],
  );
}

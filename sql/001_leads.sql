-- PostgreSQL schema for leads (3 gratis koncepter flow).
-- The app also ensures this table exists and runs legacy migrations when needed.

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

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);

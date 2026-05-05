-- One-time migration if you already had the older "tilbud" leads table
-- (columns: website, need_type, etc.). Safe to run once on Railway Postgres.
-- The Next.js app also attempts the same steps automatically on boot.

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'leads' AND column_name = 'website'
  ) THEN
    ALTER TABLE leads RENAME COLUMN website TO webshop_url;
  END IF;
END $$;

ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(32) NOT NULL DEFAULT 'new';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS product_url TEXT NOT NULL DEFAULT '';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS product_description TEXT NOT NULL DEFAULT '';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS meta_ads_status VARCHAR(64) NOT NULL DEFAULT '';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS biggest_challenge VARCHAR(64) NOT NULL DEFAULT '';

UPDATE leads SET
  product_url = COALESCE(NULLIF(TRIM(product_url), ''), NULLIF(TRIM(webshop_url), '')),
  product_description = COALESCE(
    NULLIF(TRIM(product_description), ''),
    NULLIF(TRIM(message), ''),
    'Indsendt før formular-opdatering'
  ),
  meta_ads_status = COALESCE(NULLIF(TRIM(meta_ads_status), ''), 'legacy'),
  biggest_challenge = COALESCE(NULLIF(TRIM(biggest_challenge), ''), 'legacy')
WHERE EXISTS (
  SELECT 1 FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = 'leads' AND column_name = 'need_type'
);

ALTER TABLE leads DROP COLUMN IF EXISTS need_type;

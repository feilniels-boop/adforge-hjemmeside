import { Pool } from "pg";

let pool: Pool | null = null;

/**
 * Returns a shared Pool when DATABASE_URL is set, otherwise null.
 * Railway provides DATABASE_URL for PostgreSQL plugins.
 */
export function getPool(): Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!pool) {
    pool = new Pool({
      connectionString: url,
      max: 8,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
  }
  return pool;
}

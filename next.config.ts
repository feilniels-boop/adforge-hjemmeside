import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Keep Turbopack/build rooted to this app (parent Desktop lockfile workaround). */
const projectDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectDir,
  },
  images:
    process.env.NODE_ENV === "development"
      ? { unoptimized: true }
      : undefined,
};

export default nextConfig;

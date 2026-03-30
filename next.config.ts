import type { NextConfig } from "next";

/**
 * GitHub project Pages URLs look like: https://<user>.github.io/<repo>/
 * Set BASE_PATH=/<repo> when building for GitHub Actions deploy (see workflow).
 * Omit BASE_PATH for local dev at http://localhost:3000/
 */
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

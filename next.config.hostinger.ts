// Hostinger build config - use this for static export to Hostinger
// Run: NEXT_PUBLIC_BASE_PATH=/landing-page npx next build --config next.config.hostinger.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  output: "export",
  basePath: "/landing-page",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

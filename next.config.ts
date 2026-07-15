import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export للرفع على Hostinger
  output: "export",
  images: {
    unoptimized: true,
  },
  // مهم: عشان الروابط تشتغل صح على /landing-page
  basePath: "/landing-page",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

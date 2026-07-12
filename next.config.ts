import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // لا نستخدم output: "standalone" على Vercel لأنها تتعامل مع البناء تلقائياً
};

export default nextConfig;

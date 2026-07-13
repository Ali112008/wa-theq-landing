import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // تحسين الصور - تحويل تلقائي لـ AVIF و WebP
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // تحسين حجم الصور
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // ضغط HTML
  compress: true,
  // تحسين البناء
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

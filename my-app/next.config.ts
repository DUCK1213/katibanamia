import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for Vercel (supports serverless functions)
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  },
};

export default nextConfig;

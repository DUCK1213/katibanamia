import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  },
  // Turbopack configuration for Next.js 16
  turbopack: {},
  // Exclude Strapi backend from Next.js build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /KatibaNaMia/,
    };
    return config;
  },
  // Ensure KatibaNaMia is not processed
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Turbopack configuration for Next.js 16
  turbopack: {},
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@/components"],
  },
};

export default nextConfig;

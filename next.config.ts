import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // existing Next.js config
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
});

export default nextConfig;

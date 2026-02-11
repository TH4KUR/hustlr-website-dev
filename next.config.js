/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;

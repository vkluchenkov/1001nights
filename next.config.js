/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['content.1001nacht.art'],
  },
  output: 'standalone',
};

module.exports = nextConfig;

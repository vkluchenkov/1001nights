/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['content.1001nacht.art'],
  },
};

module.exports = nextConfig;

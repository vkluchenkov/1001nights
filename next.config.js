/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.1001nacht.art',
        port: '',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;

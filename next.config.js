/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*.amazonaws.com', 'github.com'],
  },
}

module.exports = nextConfig

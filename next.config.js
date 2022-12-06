/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*.amazonaws.com', 'github.com'],
  },
  env: {
    JWT_SECRET: 'CCE6D56A991B1BD8846E7825B5D8B'
  }  
}

module.exports = nextConfig

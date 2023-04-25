/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  swcMinify: true,
}

module.exports = nextConfig

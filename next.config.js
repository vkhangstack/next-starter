/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "build",
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // Notion
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig

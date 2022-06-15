/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['via.placeholder.com', 'images.pexels.com', 'images2.alphacoders.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig

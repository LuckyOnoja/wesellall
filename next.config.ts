/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
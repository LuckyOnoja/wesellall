import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
    turbopack: {
    root: __dirname,
  },
}

export default nextConfig;

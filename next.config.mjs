import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true, // Enable app directory support
  },
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
};

export default nextConfig;
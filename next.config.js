/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Keeps image optimization disabled
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          timeout: 15000,
        },
      },
    ],
  },
  // GitHub Pages-specific configurations
  basePath: process.env.NODE_ENV === 'production' ? '/kere-albert-portfolio' : '', // Change 'your-repo-name' to your repo's name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kere-albert-portfolio/' : '', // Same for assetPrefix
  trailingSlash: true, // Ensure URLs end with a trailing slash (e.g., /about/)
};

module.exports = nextConfig;


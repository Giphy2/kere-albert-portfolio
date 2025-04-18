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
  assetPrefix: '/', // ✅ Use leading slash
};

module.exports = nextConfig;

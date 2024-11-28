/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/cciweb',
  assetPrefix: '/cciweb',
};

module.exports = nextConfig;





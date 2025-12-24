/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-portfolio',
  assetPrefix: '/next-portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

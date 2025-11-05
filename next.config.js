/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                // enable static export
  images: { unoptimized: true },   // disable image optimization for static export
  basePath: isProd ? '/Portfolio' : '',  // GitHub Pages subpath
  assetPrefix: isProd ? '/Portfolio/' : '', // prefix assets for GitHub Pages
  trailingSlash: true,             // ensure URLs end with a slash
};

module.exports = nextConfig;

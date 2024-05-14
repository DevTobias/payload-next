/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',

  reactStrictMode: true,
  poweredByHeader: false,

  experimental: {
    typedRoutes: true,
  },
};

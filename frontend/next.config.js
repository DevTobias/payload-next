const { withPayload } = require('@payloadcms/next/withPayload');

/** @type {import('next').NextConfig} */
module.exports = withPayload({
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
});

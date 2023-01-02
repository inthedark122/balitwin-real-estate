/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "database"],
  },
};

module.exports = nextConfig;

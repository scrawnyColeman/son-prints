/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
};

module.exports = nextConfig;

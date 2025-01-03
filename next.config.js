/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.dummyjson.com",
      },
    ],
  },
  swcMinify: false,
};

module.exports = nextConfig;

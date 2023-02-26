/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.genshin.dev"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;

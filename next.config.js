/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,   // important for static hosting
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
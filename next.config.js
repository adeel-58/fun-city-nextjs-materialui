/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 enables static export
   images: {
    unoptimized: true,   // 👈 important for static hosting
  },
};

module.exports = nextConfig;

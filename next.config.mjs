/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Nécessaire pour Netlify (export statique ou via plugin next-on-netlify)
  trailingSlash: true,
};

export default nextConfig;
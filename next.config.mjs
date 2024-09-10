/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React's Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

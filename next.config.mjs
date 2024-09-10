/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React's Strict Mode
  images: {
    // domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

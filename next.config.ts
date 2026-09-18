import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "your-project.supabase.co",
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;

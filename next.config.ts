import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'makanit.ae',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;

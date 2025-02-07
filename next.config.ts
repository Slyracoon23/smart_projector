import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/static_website/index.html',
      }
    ];
  }
};

export default nextConfig;

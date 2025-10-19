import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    // If API base is configured, proxy /api/* to the backend to avoid CORS and 404s
    if (apiBase) {
      return [
        {
          source: "/api/:path*",
          destination: `${apiBase}/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;

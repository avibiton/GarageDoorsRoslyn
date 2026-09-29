import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

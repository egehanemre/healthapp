import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
      //todo
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;

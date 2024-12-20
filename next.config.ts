import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/portfolio/",
  images:{
    unoptimized: true,
  },
};

export default nextConfig;

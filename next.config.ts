import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/portfolio/",
  images:{
    unoptimized: false,
  },
};

export default nextConfig;

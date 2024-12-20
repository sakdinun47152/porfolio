import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/porfolio",
  assetPrefix: "/portfolio",
  images:{
    unoptimized: false,
  },
};

export default nextConfig;

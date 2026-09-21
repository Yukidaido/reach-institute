import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/reach-institute",
  assetPrefix: "/reach-institute/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

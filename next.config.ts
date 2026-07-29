import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/first-principles-vn" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/first-principles-vn/" : "",
  trailingSlash: true,
};

export default nextConfig;

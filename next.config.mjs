/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "picsum.photos", protocol: "https" },
      { hostname: "fastly.picsum.photos", protocol: "https" },
      { hostname: "cdn.prod.website-files.com", protocol: "https" },
      { hostname: "www.drdogood.health", protocol: "https" },
      { hostname: "www.montech.io", protocol: "https" },
      { hostname: "wordpress.gazelleplatform.com", protocol: "https" },
    ],
  },
  transpilePackages: ["shiki", "@shikijs/transformers", "@shikijs/core", "@shikijs/types"],
};

export default withMDX()(nextConfig);

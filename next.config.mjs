/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com", protocol: "https" }],
  },
};

export default withMDX()(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "i.scdn.co"],
  },
  env: {
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN:
      process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    NEXT_PUBLIC_SPOTIFY_CLIENT_KEYS:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_KEYS,
  },
};

module.exports = nextConfig;

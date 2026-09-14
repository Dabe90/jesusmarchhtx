import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/marches/tulsa", destination: "/tulsa", permanent: false },
      { source: "/friendswoodrally", destination: "/", permanent: false },
      { source: "/contact", destination: "/vision", permanent: false },
      { source: "/about", destination: "/newfamily", permanent: false },
      { source: "/events", destination: "/gallery", permanent: false },
      { source: "/terms-of-use", destination: "/programs", permanent: true },
      { source: "/support-us", destination: "/volunteer", permanent: true },
      { source: "/members-area", destination: "/getinvolved", permanent: false },
      { source: "/fullscreen-page", destination: "/", permanent: false },
      { source: "/popup-an06o", destination: "/getinvolved", permanent: false },
      { source: "/post", destination: "/blog", permanent: false },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thanks", "/api/"],
    },
    sitemap: "https://www.jesusmarchhtx.com/sitemap.xml",
  };
}

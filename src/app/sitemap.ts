import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jesusmarchhtx.com";
  const routes = [
    "",
    "/gallery",
    "/getinvolved",
    "/newfamily",
    "/vision",
    "/donate",
    "/therec",
    "/programs",
    "/jmnigeria",
    "/volunteer",
    "/schedule",
    "/privacy-policy",
    "/dd-cinemas",
    "/event-details",
    "/blog",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

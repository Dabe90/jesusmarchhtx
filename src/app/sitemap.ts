import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jesusmarchhtx.com";
  const routes = [
    "",
    "/tulsa",
    "/dc",
    "/gallery",
    "/getinvolved",
    "/newfamily",
    "/vision",
    "/donate",
    "/therec",
    "/programs",
    "/jmnigeria",
    "/marches/houston",
    "/marches/dc",
    "/marches/tulsa",
    "/marches/nigeria",
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

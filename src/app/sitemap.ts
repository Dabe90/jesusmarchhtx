import type { MetadataRoute } from "next";

const base = "https://www.jesusmarchhtx.com";

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/tulsa", priority: 0.9 },
  { path: "/dc", priority: 0.9 },
  { path: "/chapters", priority: 0.8 },
  { path: "/donate", priority: 0.8 },
  { path: "/getinvolved", priority: 0.8 },
  { path: "/programs", priority: 0.7 },
  { path: "/therec", priority: 0.7 },
  { path: "/gallery", priority: 0.7 },
  { path: "/vision", priority: 0.6 },
  { path: "/volunteer", priority: 0.6 },
  { path: "/schedule", priority: 0.6 },
  { path: "/newfamily", priority: 0.6 },
  { path: "/jmnigeria", priority: 0.6 },
  { path: "/marches/houston", priority: 0.6 },
  { path: "/marches/nigeria", priority: 0.5 },
  { path: "/event-details", priority: 0.4 },
  { path: "/dd-cinemas", priority: 0.4 },
  { path: "/blog", priority: 0.4 },
  { path: "/privacy-policy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/tulsa" || path === "/dc" ? "weekly" : "monthly",
    priority,
  }));
}

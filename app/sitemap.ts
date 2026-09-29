import type { MetadataRoute } from "next";

const baseUrl = "https://garagedoorsroslyn.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/repair", priority: 0.9 },
  { path: "/springs", priority: 0.9 },
  { path: "/openers", priority: 0.8 },
  { path: "/installation", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}

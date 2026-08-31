import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";
import { allRoutes } from "@/lib/route-index";

/**
 * XML sitemap, generated from the same route index the human sitemap page uses.
 * Draft entities are excluded upstream, so anything listed here is indexable.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((entry) => ({
    url: absolute(entry.href),
    lastModified: new Date(`${entry.updated}T00:00:00Z`),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

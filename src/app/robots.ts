import type { MetadataRoute } from "next";
import { absolute, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Nothing under /api/ is a page; keeping crawlers out of it saves crawl
        // budget on a site this size and avoids indexing generated OG images.
        disallow: ["/api/"],
      },
    ],
    sitemap: absolute("/sitemap.xml"),
    host: site.url,
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@/components"],
  },

  /**
   * Redirects from the URLs published on the current WordPress site.
   *
   * Every live URL found in the audit (the pages themselves plus the WordPress
   * sitemap entries) maps to its equivalent here, so nothing that is already
   * linked or indexed 404s at cutover. Permanent (308) because these moves are
   * final.
   */
  async redirects() {
    return [
      { source: "/marketing-engine", destination: "/platform/marketing-engine/", permanent: true },
      { source: "/lead-nurturing", destination: "/platform/lead-nurturing/", permanent: true },
      { source: "/founder", destination: "/company/founder/", permanent: true },
      { source: "/invest", destination: "/company/invest/", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy-policy/", permanent: true },
      // WordPress defaults and archive URLs that exist only because of the CMS.
      { source: "/hello-world", destination: "/blog/", permanent: true },
      { source: "/category/uncategorized", destination: "/blog/", permanent: true },
      { source: "/category/:slug", destination: "/blog/", permanent: true },
      { source: "/author/:slug", destination: "/company/about/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      // Listed explicitly: these are the four sitemap URLs the live WordPress
      // install actually publishes, and a same-segment wildcard is not routable.
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-category-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-users-1.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;

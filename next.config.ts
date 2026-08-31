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
   * Every live URL found in the audit maps to its equivalent, so nothing that is
   * already linked or indexed 404s at cutover. Permanent (308) because these
   * moves are final.
   *
   * Known behaviour: `trailingSlash: true` normalises a bare path before these
   * rules run, so an inbound link to `/founder` resolves in two hops
   * (`/founder` -> `/founder/` -> `/company/founder/`). The slashed form is a
   * single hop. Collapsing the bare form would mean setting
   * `skipTrailingSlashRedirect` and owning trailing-slash normalisation for the
   * whole site in middleware — a duplicate-content risk across 500 pages that is
   * not worth saving one hop, which search engines follow and consolidate.
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
      { source: "/category/:slug", destination: "/blog/", permanent: true },
      { source: "/author/:slug", destination: "/company/about/", permanent: true },
      // The four sitemap URLs the live WordPress install actually publishes.
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-category-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-users-1.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;

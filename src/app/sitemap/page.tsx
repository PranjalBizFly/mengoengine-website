import type { Metadata } from "next";

import { IndexHero } from "@/components/sections/page";
import { JsonLd } from "@/components/ui/primitives";
import { PageDirectory } from "@/components/sections/PageDirectory";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ecosystemCategory, pageDirectory } from "@/lib/directory";
import { totalPageCount } from "@/lib/route-index";

const PATH = routes.sitemapPage();
const CRUMBS = [{ label: "Sitemap", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — everything on this site",
  description:
    "The complete index of the Mengo website: platform, capabilities, solutions, industries, channels, asset formats, comparisons, resources, blog and glossary.",
  path: PATH,
  ogKicker: "Sitemap",
});

/**
 * The page directory.
 *
 * This route is both the human sitemap and the "Explore all pages" destination,
 * because they are the same thing and the site should not carry two indexes of
 * itself that can disagree. Its URL, heading and lead are unchanged; what is
 * new is that the list is searchable and filterable rather than a wall of
 * links.
 *
 * Categories and entries come from `fullDirectory()`, which reads the same
 * route index as the XML sitemap. Adding a page anywhere in the content layer
 * puts it here with no edit to this file.
 */
export default function SitemapPage() {
  const categories = pageDirectory();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS])} />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Sitemap"
        title="Everything on this site, in one place"
        lead="Generated from the same route index as the XML sitemap, so the two cannot drift apart. Useful if you would rather scan than navigate."
        count={`${totalPageCount()} pages`}
      />

      {/* Not the shared `Section`: its full vertical rhythm would drop the
          control bar most of a screen below the hero, and the bar is the first
          thing this page is for. */}
      <section className="bg-paper pb-section pt-8 text-graphite">
        <div className="container-page">
          <PageDirectory categories={categories} ecosystem={ecosystemCategory()} />
        </div>
      </section>
    </>
  );
}

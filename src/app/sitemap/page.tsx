import Link from "next/link";
import type { Metadata } from "next";

import { IndexHero } from "@/components/sections/page";
import { Eyebrow, JsonLd, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { routeGroups, totalPageCount } from "@/lib/route-index";

const PATH = routes.sitemapPage();
const CRUMBS = [{ label: "Sitemap", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — everything on this site",
  description:
    "The complete index of the Mengo website: platform, capabilities, solutions, industries, channels, asset formats, comparisons, resources, blog and glossary.",
  path: PATH,
  ogKicker: "Sitemap",
});

export default function SitemapPage() {
  const groups = routeGroups();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS])} />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Sitemap"
        title="Everything on this site, in one place"
        lead="Generated from the same route index as the XML sitemap, so the two cannot drift apart. Useful if you would rather scan than navigate."
        count={`${totalPageCount()} pages`}
      >
        <nav aria-label="Jump to section" className="mt-10 flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.heading}
              href={`#${group.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="inline-flex min-h-9 items-center rounded-full border border-paper-line px-3.5 text-fine font-medium text-graphite-soft transition-colors hover:border-lime-deep hover:text-lime-deep"
            >
              {group.heading}
            </a>
          ))}
        </nav>
      </IndexHero>

      <Section tone="paper">
        <div className="grid gap-14">
          {groups.map((group) => (
            <div
              key={group.heading}
              id={group.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="scroll-mt-[calc(var(--header-h)+2rem)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 rule-b pb-3">
                <h2 className="text-d4">
                  {group.href ? (
                    <Link href={group.href} className="transition-colors hover:text-lime-deep">
                      {group.heading}
                    </Link>
                  ) : (
                    group.heading
                  )}
                </h2>
                <Eyebrow>{group.entries.length} pages</Eyebrow>
              </div>
              <ul className="mt-5 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {group.entries.map((entry) => (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="block py-1 text-body leading-snug text-graphite-soft transition-colors hover:text-lime-deep"
                    >
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

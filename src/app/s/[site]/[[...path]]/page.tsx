import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SiteBlocks } from "@/components/subsite/blocks";
import { RelatedRail, SubSiteHero } from "@/components/subsite/chrome";
import { SubSiteSearch } from "@/components/subsite/search";
import { SubSiteSidebar } from "@/components/subsite/sidebar";
import { SubSitePrevNext } from "@/components/subsite/prev-next";
import { JsonLd } from "@/components/ui/primitives";
import { subsiteByKey, subsites } from "@/data/subdomains";
import { sitePath, type SitePage, type SubSite } from "@/lib/subdomains";
import { subsiteMetadata, subsiteSchema } from "@/seo/subdomain";

/**
 * Every page on every ecosystem site.
 *
 * One route, because the twelve sites share a content model: a page is a hero
 * plus typed blocks, and which composition it takes is declared per page rather
 * than per site. That is what keeps a hundred and forty pages from becoming a
 * hundred and forty files of near-identical JSX — the same reason the main site
 * renders four hundred marketing pages from a handful of templates.
 *
 * The variety the brief asks for lives in the data: five hero kinds, thirteen
 * block types, per-site navigation, and a sidebar that only the documentation
 * registers switch on.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(subsites).flatMap((subsite) =>
    subsite.pages.map((page) => ({
      site: subsite.key,
      // An optional catch-all wants `undefined` for the site's own front page
      // and an array of segments for everything else.
      path: page.path ? page.path.split("/") : undefined,
    })),
  );
}

function resolve(siteKey: string, pathSegments: string[] | undefined) {
  const subsite = subsiteByKey(siteKey);
  if (!subsite) return null;
  const path = (pathSegments ?? []).join("/");
  const page = subsite.pages.find((candidate) => candidate.path === path);
  return page ? { subsite, page } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string; path?: string[] }>;
}): Promise<Metadata> {
  const { site, path } = await params;
  const found = resolve(site, path);
  if (!found) return {};
  return subsiteMetadata(found.subsite, found.page);
}

export default async function SubSitePage({
  params,
}: {
  params: Promise<{ site: string; path?: string[] }>;
}) {
  const { site, path } = await params;
  const found = resolve(site, path);
  if (!found) notFound();
  const { subsite, page } = found;

  const isHome = page.path === "";
  // The trail is site then page. A page's `group` is a sidebar heading rather
  // than a route — giving it a crumb pointed it at the site home, which both
  // duplicated the parent link and gave two crumbs the same React key.
  const crumbs = isHome
    ? []
    : [
        { label: subsite.shortName, href: sitePath(subsite.key) },
        { label: page.navLabel ?? page.title, href: sitePath(subsite.key, page.path) },
      ];

  const withSidebar = Boolean(subsite.sidebar) && !isHome;

  return (
    <>
      <JsonLd data={subsiteSchema(subsite, page, crumbs)} />

      <SubSiteHero site={subsite.key} hero={page.hero} />

      {page.hero.kind === "search" ? (
        <SubSiteSearch subsite={subsite} placeholder={page.hero.placeholder} />
      ) : null}

      {crumbs.length > 0 ? (
        <div className="bg-paper pt-2">
          <Breadcrumbs
            crumbs={crumbs.map((crumb) => ({ label: crumb.label, href: crumb.href }))}
          />
        </div>
      ) : null}

      {withSidebar ? (
        <SidebarLayout subsite={subsite} page={page} />
      ) : (
        <SiteBlocks site={subsite.key} blocks={page.blocks} />
      )}

      <SubSitePrevNext subsite={subsite} page={page} />

      {page.related && page.related.length > 0 ? (
        <RelatedRail site={subsite.key} groups={page.related} />
      ) : null}
    </>
  );
}

/**
 * The documentation composition.
 *
 * Only the sites whose reader is navigating a corpus rather than reading a page
 * switch this on — docs, support and developers. Everywhere else a persistent
 * sidebar would be furniture: a careers page has nine siblings and a footer
 * that already lists them.
 */
function SidebarLayout({ subsite, page }: { subsite: SubSite; page: SitePage }) {
  return (
    <div className="bg-paper">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <SubSiteSidebar subsite={subsite} current={page.path} />
        <div className="min-w-0">
          {/* Blocks manage their own section grounds, which would fight a
              two-column shell. Inside the sidebar layout they run on one
              ground and are separated by rules instead. */}
          <SiteBlocks site={subsite.key} blocks={page.blocks} inline />
        </div>
      </div>
    </div>
  );
}


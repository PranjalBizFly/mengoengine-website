import type { Metadata } from "next";
import { siteUrl, type SitePage, type SubSite } from "@/lib/subdomains";
import { site as brand } from "@/lib/site";

/**
 * Metadata and structured data for the ecosystem sites.
 *
 * Separate from `@/seo/metadata` for one reason that matters: that builder
 * resolves canonicals against `site.url`, the apex. Every URL here belongs to a
 * different host, and emitting an apex canonical on a docs page would tell a
 * crawler that twelve sites are all duplicates of the marketing site. So this
 * module owns host-correct canonicals, Open Graph URLs and `WebSite` identity,
 * and leaves the main site's builder untouched.
 *
 * Titles are suffixed with the site name rather than the company name — "Rate
 * limits | Mengo Developers" tells a searcher which of the twelve destinations
 * they are about to open, which "| Mengo" does not.
 */

const MAX_DESCRIPTION = 165;

function clamp(text: string): string {
  if (text.length <= MAX_DESCRIPTION) return text;
  const cut = text.slice(0, MAX_DESCRIPTION);
  const boundary = cut.lastIndexOf(" ");
  return `${cut.slice(0, boundary > 80 ? boundary : MAX_DESCRIPTION).trimEnd()}…`;
}

export function subsiteMetadata(subsite: SubSite, page: SitePage): Metadata {
  const url = siteUrl(subsite.key, page.path);
  // A site front page usually names the site in its own title. Appending the
  // suffix regardless produced "Mengo Support — … | Mengo Support".
  const title =
    page.seoTitle.includes("|") || page.seoTitle.startsWith(subsite.name)
      ? page.seoTitle
      : `${page.seoTitle} | ${subsite.name}`;
  const description = clamp(page.seoDescription);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: subsite.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: brand.twitter,
      title,
      description,
    },
  };
}

/**
 * Structured data for an ecosystem page.
 *
 * `WebSite` identifies the subdomain as its own property that is part of the
 * Mengo organisation, and `BreadcrumbList` mirrors the visible trail. Nothing
 * else is emitted: schema types that assert facts — `Organization` with
 * employee counts, `Product` with offers, `FAQPage` on a page whose answers are
 * marked as awaiting approval — would be making claims this ecosystem is not in
 * a position to make.
 */
export function subsiteSchema(
  subsite: SubSite,
  page: SitePage,
  crumbs: { label: string; href: string }[],
) {
  const origin = siteUrl(subsite.key);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}#website`,
    url: origin,
    name: subsite.name,
    description: subsite.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: brand.legalName,
      url: `https://${brand.url.replace(/^https?:\/\//, "")}`,
    },
  };

  if (crumbs.length === 0) return website;

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: siteUrl(subsite.key, crumb.href.replace(/^\/s\/[^/]+\/?/, "")),
    })),
  };

  return [website, breadcrumbs];
}

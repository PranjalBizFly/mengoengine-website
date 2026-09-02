import { subsiteByKey, subsites } from "@/data/subdomains";
import { siteUrl } from "@/lib/subdomains";

/**
 * Per-host robots.txt.
 *
 * Points a crawler at this host's own sitemap rather than the apex's. Without
 * it every subdomain would serve the main site's robots file, whose sitemap
 * directive names a different host — which is not fatal but is exactly the kind
 * of misdirection that makes a crawler treat a subdomain as an afterthought.
 *
 * `/s/` is disallowed on every host. It is the internal rewrite prefix, and
 * although the middleware redirects it away on the apex, a crawler that finds
 * the path some other way should not index a URL that is an implementation
 * detail.
 */

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(subsites).map((site) => ({ site }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ site: string }> }) {
  const { site } = await params;
  const subsite = subsiteByKey(site);
  if (!subsite) return new Response("Not found", { status: 404 });

  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /s/",
    "",
    `Sitemap: ${siteUrl(subsite.key)}sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

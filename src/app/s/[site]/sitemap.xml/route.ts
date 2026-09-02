import { subsiteByKey, subsites } from "@/data/subdomains";
import { siteUrl } from "@/lib/subdomains";

/**
 * Per-host sitemap.
 *
 * Each ecosystem site gets its own, listing only its own pages at its own
 * origin. The alternative — every subdomain serving the main site's sitemap,
 * which is what happens if this route does not exist — would tell a crawler
 * that `docs.example.com` contains four hundred marketing pages that are not
 * reachable there, and would leave the ecosystem's own hundred and forty URLs
 * undeclared.
 *
 * The middleware rewrites `docs.example.com/sitemap.xml` here, which is why the
 * matcher lists that path explicitly: the general rule skips anything with a
 * file extension so static assets do not pay for a middleware hop.
 */

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(subsites).map((site) => ({ site }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ site: string }> }) {
  const { site } = await params;
  const subsite = subsiteByKey(site);
  if (!subsite) return new Response("Not found", { status: 404 });

  const today = new Date().toISOString().slice(0, 10);
  const urls = subsite.pages
    .map((page) => {
      const loc = siteUrl(subsite.key, page.path);
      // A site's front page is its most important URL; inner pages sit level
      // with each other rather than being ranked by a guess about importance.
      const priority = page.path === "" ? "1.0" : "0.7";
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${page.updated ?? today}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

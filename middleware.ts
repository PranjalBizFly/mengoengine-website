import { NextResponse, type NextRequest } from "next/server";
import { MAIN_DOMAIN, SITE_PREFIX, siteFromHost, siteUrl, type SiteKey } from "@/lib/subdomains";

/**
 * Host-based routing for the subdomain ecosystem.
 *
 * One deployment answers for the apex and for twelve subdomains. Which site a
 * request belongs to is decided by the `Host` header and nothing else — not a
 * query parameter, not a cookie, not a path the visitor could type. That is the
 * only identity that survives a shared link, a crawler and a cold cache.
 *
 * Two directions:
 *
 *   support.example.com/billing/  ->  rewrite  ->  /s/support/billing/
 *   example.com/s/support/billing/ -> redirect ->  support.example.com/billing/
 *
 * The rewrite is what serves the page; the redirect is what stops the same page
 * existing on two hosts. Without the second rule every subdomain page would be
 * reachable on the apex as well, which is both a duplicate-content problem
 * across roughly a hundred and forty URLs and a direct contradiction of the
 * architecture — `/about/` on the main site is not what the ecosystem means by
 * the about site.
 *
 * The apex itself never reaches either branch, so the existing site is
 * unaffected: for `example.com/platform/` this middleware falls through to
 * `NextResponse.next()` having done nothing.
 */

export const config = {
  /**
   * Everything except the framework's own paths and files with an extension.
   * Static assets and the image optimiser must not pay for a middleware hop,
   * and rewriting them would break `/_next/static` on a subdomain.
   */
  matcher: [
    "/((?!_next/|api/|.*\\.[\\w]+$).*)",
    // The rule above skips anything with a file extension so static assets do
    // not pay for a middleware hop. These two are the exception: a subdomain
    // has to serve its own sitemap and robots file rather than the apex's,
    // which means they must be rewritten like any other page.
    "/sitemap.xml",
    "/robots.txt",
  ],
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const site = siteFromHost(request.headers.get("host"));

  if (site) {
    // Already rewritten, or an internal request that resolved here: leave it.
    if (pathname.startsWith(`${SITE_PREFIX}/`)) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `${SITE_PREFIX}/${site}${pathname === "/" ? "/" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // On the apex the internal prefix is not a public URL. Send the visitor to
  // the host that owns the page rather than serving it here.
  //
  // Only from the real apex, though. On `localhost` and on preview hosts the
  // subdomain form does not resolve — nobody has DNS for `docs.<preview>.app`
  // — so redirecting there would make the entire ecosystem unreachable in
  // development and unreviewable in a preview deployment. On those hosts the
  // prefix is served in place, which is also what the browser QA gates drive.
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const onApex = host === MAIN_DOMAIN || host === `www.${MAIN_DOMAIN}`;

  if (onApex && pathname.startsWith(`${SITE_PREFIX}/`)) {
    const [, , key, ...rest] = pathname.split("/");
    if (isSiteKey(key)) {
      return NextResponse.redirect(new URL(siteUrl(key, rest.join("/")) + search), 308);
    }
  }

  return NextResponse.next();
}

const KEYS = new Set<string>([
  "support",
  "partners",
  "vendors",
  "affiliates",
  "developers",
  "docs",
  "status",
  "careers",
  "about",
  "investors",
  "media",
  "sustainability",
]);

/**
 * Declared here rather than imported as a value so the middleware bundle stays
 * free of the content model. Middleware runs on every matched request; it
 * should not pull twelve content files into the edge bundle to answer a
 * question about a string.
 */
function isSiteKey(value: string | undefined): value is SiteKey {
  return Boolean(value && KEYS.has(value));
}

"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Hides the site header and footer on routes that carry their own chrome.
 *
 * Campaign landing pages run reduced navigation by design — a mega menu on a
 * paid destination costs conversions. Rather than restructure every existing
 * route into a layout group to achieve that, this gates the shared chrome on
 * the one prefix that needs it.
 *
 * `/s/` is the subdomain ecosystem, which the middleware rewrites every
 * `support.*`, `docs.*` and sibling host into. Those pages carry their own
 * header and footer — a support centre wearing the main site's five-group mega
 * menu would be announcing that it is a section of the marketing site rather
 * than a destination. Suppressing it here rather than by giving the ecosystem
 * its own root layout keeps four hundred existing routes exactly where they are.
 */
const BARE_PREFIXES = ["/campaigns/", "/s/"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (BARE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null;
  return <>{children}</>;
}

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
 */
const BARE_PREFIXES = ["/campaigns/"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (BARE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null;
  return <>{children}</>;
}

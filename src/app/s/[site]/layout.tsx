import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SubSiteFooter, SubSiteHeader } from "@/components/subsite/chrome";
import { subsiteByKey } from "@/data/subdomains";

/**
 * Chrome for every ecosystem page.
 *
 * The root layout's `SiteChrome` suppresses the main site's header and footer
 * under this prefix, so this is the only chrome a subdomain page renders. It
 * sits at the `[site]` level rather than inside the page so that navigating
 * between pages on one host is a content swap rather than a header remount.
 */
export default async function SubSiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;
  const subsite = subsiteByKey(site);
  if (!subsite) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <SubSiteHeader subsite={subsite} />
      <div className="flex-1">{children}</div>
      <SubSiteFooter subsite={subsite} />
    </div>
  );
}

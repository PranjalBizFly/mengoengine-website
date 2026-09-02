import type { SiteKey, SubSite } from "@/lib/subdomains";

import { support } from "./support";
import { docs } from "./docs";
import { developers } from "./developers";
import { partners } from "./partners";
import { vendors } from "./vendors";
import { affiliates } from "./affiliates";
import { status } from "./status";
import { careers } from "./careers";
import { about } from "./about";
import { investors } from "./investors";
import { media } from "./media";
import { sustainability } from "./sustainability";

/**
 * The ecosystem register.
 *
 * Declaration order here is the order the footer and the sitemap walk the
 * sites, and each site's own `pages` array is the order its sidebar, its
 * previous/next rail and its sitemap entries follow. Ordering is content, so it
 * lives with the content rather than being re-derived in three places.
 */
export const subsites: Record<SiteKey, SubSite> = {
  support,
  partners,
  vendors,
  affiliates,
  developers,
  docs,
  status,
  careers,
  about,
  investors,
  media,
  sustainability,
};

export const allSubsites: SubSite[] = Object.values(subsites);

export function subsiteByKey(key: string): SubSite | undefined {
  return (subsites as Record<string, SubSite>)[key];
}

/** Every page in the ecosystem, flattened. Used by the sitemap and the audit. */
export function allSubsitePages(): { subsite: SubSite; page: SubSite["pages"][number] }[] {
  return allSubsites.flatMap((subsite) => subsite.pages.map((page) => ({ subsite, page })));
}

import { routes } from "@/lib/site";
import type { Cta, Entity, EntityKind } from "@/lib/types";

/**
 * The conversion path, declared once.
 *
 * Each page type has one appropriate next step, so templates ask this module
 * what to offer rather than hardcoding an intent and a label. A record can
 * override its kind's default by declaring `cta` in the data.
 *
 * Labels reuse the wording already running on mengoengine.com — "Join our
 * waitlist", "Try the Demo", "Invite Jainam to speak" — so the rebuild does not
 * quietly invent new CTA language.
 */

/** Default label per CTA type. A record may override it. */
const LABELS: Record<Cta["type"], string> = {
  waitlist: "Join our waitlist",
  demo: "Request a walkthrough",
  sales: "Talk to the team",
  expert: "Talk to an expert",
  download: "Get the resource",
  enquiry: "Send an enquiry",
  investor: "Investor enquiry",
  speaking: "Invite Jainam to speak",
  explore: "Explore",
  learn: "Learn more",
};

/**
 * The conversion path per page type.
 *
 * A product page asks for a walkthrough because the reader is evaluating; an
 * industry page asks for a conversation because their situation is specific; a
 * resource page offers the resource. Nothing asks for a signup where a question
 * is the more honest next step.
 */
const DEFAULTS: Record<EntityKind, Cta["type"]> = {
  product: "waitlist",
  feature: "waitlist",
  solution: "expert",
  industry: "expert",
  "use-case": "waitlist",
  channel: "waitlist",
  "asset-type": "waitlist",
  comparison: "expert",
  guide: "download",
  article: "waitlist",
  glossary: "waitlist",
  "case-study": "expert",
  campaign: "waitlist",
  company: "waitlist",
  legal: "enquiry",
};

/** CTA types that open the shared modal rather than navigating. */
const MODAL_TYPES = new Set<Cta["type"]>([
  "waitlist",
  "demo",
  "sales",
  "expert",
  "download",
  "enquiry",
  "investor",
  "speaking",
]);

export function isModalCta(type: Cta["type"]): boolean {
  return MODAL_TYPES.has(type);
}

export function ctaLabel(cta: Cta): string {
  return cta.label ?? LABELS[cta.type];
}

/** The CTA for an entity: its own if declared, otherwise its kind's default. */
export function defaultCta(entity: Entity): Cta {
  if (entity.cta) return entity.cta;
  return { type: DEFAULTS[entity.kind] };
}

/** The CTA for a page that is not an entity — a hub, or the homepage. */
export function ctaFor(type: Cta["type"], overrides: Partial<Cta> = {}): Cta {
  return { type, ...overrides };
}

/**
 * The secondary action offered alongside the primary CTA. Always navigation,
 * never a second form — two competing asks convert worse than one.
 */
export function secondaryFor(entity: Entity): { label: string; href: string } {
  switch (entity.kind) {
    case "product":
    case "feature":
      return { label: "Compare the alternatives", href: routes.compare() };
    case "solution":
    case "use-case":
      return { label: "See how Mengo works", href: routes.company("how-it-works") };
    case "industry":
      return { label: "Browse all industries", href: routes.industries() };
    case "guide":
      return { label: "More playbooks and frameworks", href: routes.resources() };
    case "article":
      return { label: "More writing", href: routes.blog() };
    case "comparison":
      return { label: "Who Mengo is for", href: routes.company("who-its-for") };
    case "glossary":
      return { label: "Browse the glossary", href: routes.glossary() };
    case "channel":
      return { label: "How channel ranking works", href: routes.feature("channel-ranking") };
    case "asset-type":
      return { label: "Browse the asset library", href: routes.assetTypes() };
    case "case-study":
      return { label: "More case studies", href: routes.caseStudies() };
    default:
      return { label: "See how Mengo works", href: routes.company("how-it-works") };
  }
}

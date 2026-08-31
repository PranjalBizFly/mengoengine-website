/**
 * Content model for the MengoEngine site.
 *
 * Every page type is driven by one of these shapes. Templates never contain
 * page-specific copy — they receive an entity and compose sections from it.
 */

export type Slug = string;

/** Shared by everything that becomes an indexable URL. */
export interface Indexable {
  slug: Slug;
  /** Used as the H1 and as the nav/link label unless `navLabel` overrides it. */
  title: string;
  navLabel?: string;
  /**
   * <title> tag. Optional: when omitted, `resolveMeta` derives one from the
   * entity's kind, title and summary. Uniqueness is enforced by `npm run check:seo`.
   */
  seoTitle?: string;
  /** Meta description, 120-165 chars. Derived from `summary` when omitted. */
  seoDescription?: string;
  /** Lead paragraph under the H1. */
  summary: string;
  /** ISO date, drives sitemap lastmod. */
  updated: string;
  /** Draft entities render but are excluded from the sitemap and set noindex. */
  status?: "published" | "draft";
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

export interface Bullet {
  label: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** A quantified claim. `source` is required so nothing unverifiable ships. */
export interface Metric {
  value: string;
  label: string;
  source: "product" | "methodology";
}

export type ContentBlock = { type: "text"; text: string } | { type: "list"; items: string[] };

export interface Section {
  heading: string;
  body?: string;
  bullets?: Bullet[];
  /**
   * Ordered prose/list blocks, for source documents that alternate between the
   * two. Used by the legal pages, which are reproduced faithfully.
   */
  blocks?: ContentBlock[];
}

/* ------------------------------------------------------------------ */
/* Page-type entities                                                  */
/* ------------------------------------------------------------------ */

export interface Product extends Indexable {
  kind: "product";
  /** One-line positioning used in nav, cards and the mega menu. */
  tagline: string;
  /** The job the product does, stated as the user would state it. */
  jobToBeDone: string;
  /** Ordered narrative of how the product works. Drives the process rail. */
  how: Step[];
  /** Feature slugs owned by this product. */
  features: Slug[];
  /** What comes out. Concrete artefacts, not benefits. */
  outputs: string[];
  /** What it connects to / expects as input. */
  inputs: string[];
  faqs: Faq[];
  related: { solutions: Slug[]; industries: Slug[]; useCases: Slug[] };
  accent: "lime" | "sage";
}

export interface Feature extends Indexable {
  kind: "feature";
  product: Slug;
  /** Short verb phrase for dense listings and the mega menu. */
  short: string;
  /** The problem this feature exists to remove. */
  problem: string;
  /** How Mengo handles it. */
  mechanism: string;
  detail: Bullet[];
  faqs: Faq[];
  relatedFeatures: Slug[];
}

export interface Solution extends Indexable {
  kind: "solution";
  /** Which axis of the solutions taxonomy this sits on. */
  axis: "goal" | "team" | "stage";
  /** The situation the reader is in. Opens the page. */
  situation: string;
  /** What breaks today, in their words. */
  frictions: string[];
  /** How the platform is applied to it. */
  approach: Step[];
  /** Signals the reader can check themselves. No fabricated customer stats. */
  outcomes: Bullet[];
  products: Slug[];
  features: Slug[];
  faqs: Faq[];
  related: { industries: Slug[]; useCases: Slug[] };
}

export interface Industry extends Indexable {
  kind: "industry";
  sector: "services" | "commerce" | "regulated" | "creator" | "b2b" | "local";
  /** Who is actually being sold to. */
  buyer: string;
  /** Typical purchase timeline — shapes the nurture recommendation. */
  cycle: string;
  /** Marketing realities specific to this industry. */
  realities: string[];
  /** Channels that carry weight here, in priority order. */
  channels: Slug[];
  /** Content formats that convert in this industry. */
  formats: string[];
  /** Objections the buyer raises before converting. */
  objections: Bullet[];
  /** Regulatory or platform constraints to respect. Empty when none apply. */
  constraints: string[];
  useCases: Slug[];
  solutions: Slug[];
  faqs: Faq[];
}

export interface UseCase extends Indexable {
  kind: "use-case";
  /** The trigger that makes someone look for this. */
  trigger: string;
  /** Before / after, stated operationally. */
  before: string;
  after: string;
  workflow: Step[];
  products: Slug[];
  features: Slug[];
  industries: Slug[];
  faqs: Faq[];
}

export interface Channel extends Indexable {
  kind: "channel";
  /** Platform-native mechanics that determine what works. */
  mechanics: string[];
  /** Asset types Mengo produces for this channel. */
  assets: Slug[];
  /** Cadence Mengo plans against. */
  cadence: string;
  /** What Mengo measures here. */
  signals: string[];
  industries: Slug[];
  faqs: Faq[];
}

export interface AssetType extends Indexable {
  kind: "asset-type";
  channel: Slug;
  /** Structural anatomy of the asset — this is the substance of the page. */
  anatomy: Bullet[];
  /** Inputs Mengo needs from the business to generate it well. */
  needs: string[];
  /** Length / format constraints. */
  spec: string;
}

export interface Comparison extends Indexable {
  kind: "comparison";
  /** Category of tool being compared against, never a named competitor claim. */
  against: string;
  /** Honest statement of what the alternative is genuinely good at. */
  theirStrength: string;
  /** Where Mengo differs structurally. */
  difference: Bullet[];
  /** Who should pick which. */
  chooseAlternative: string[];
  chooseMengo: string[];
  faqs: Faq[];
}

export interface Guide extends Indexable {
  kind: "guide";
  /** resource hub grouping */
  format: "playbook" | "framework" | "checklist" | "template";
  readingTime: number;
  sections: Section[];
  related: { features: Slug[]; industries: Slug[]; channels: Slug[] };
}

export interface Article extends Indexable {
  kind: "article";
  category:
    | "marketing-automation"
    | "content-automation"
    | "sales-automation"
    | "ai-cofounder"
    | "mengotalks";
  readingTime: number;
  published: string;
  sections: Section[];
  related: Slug[];
}

export interface GlossaryTerm extends Indexable {
  kind: "glossary";
  /** Plain-language definition, one sentence, used verbatim in the schema. */
  definition: string;
  /** Why it matters to a founder doing their own marketing. */
  why: string;
  /** How Mengo touches it, when it does. */
  inMengo?: string;
  seeAlso: Slug[];
}

export interface CompanyPage extends Indexable {
  kind: "company";
  sections: Section[];
}

export interface LegalPage extends Indexable {
  kind: "legal";
  effective: string;
  sections: Section[];
}

export type Entity =
  | Product
  | Feature
  | Solution
  | Industry
  | UseCase
  | Channel
  | AssetType
  | Comparison
  | Guide
  | Article
  | GlossaryTerm
  | CompanyPage
  | LegalPage;

export type EntityKind = Entity["kind"];

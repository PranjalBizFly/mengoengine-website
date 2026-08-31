import { absolute, routes, site } from "@/lib/site";
import type { Faq } from "@/lib/types";

/**
 * Structured data builders.
 *
 * Every builder returns a plain object that `<JsonLd>` serialises. Nothing here
 * asserts anything the visible page does not also say, which is both a Google
 * requirement and the honest way to do it.
 */

export interface Crumb {
  label: string;
  href: string;
}

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.productName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: absolute("/brand/mengo-mark.png"),
      width: 201,
      height: 230,
    },
    description: site.description,
    sameAs: site.social.map((s) => s.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absolute(c.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  published: string;
  modified: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": absolute(input.path) },
    datePublished: input.published,
    dateModified: input.modified,
    ...(input.section ? { articleSection: input.section } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { title: string; body: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  path: string;
  features: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    featureList: input.features,
    publisher: { "@id": ORG_ID },
  };
}

export function definedTermSchema(input: { name: string; definition: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: input.name,
    description: input.definition,
    url: absolute(input.path),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Mengo Marketing Glossary",
      url: absolute(routes.glossary()),
    },
  };
}

export function contactPageSchema(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function collectionSchema(input: {
  name: string;
  description: string;
  path: string;
  items: { label: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    isPartOf: { "@id": SITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.label,
        url: absolute(it.href),
      })),
    },
  };
}

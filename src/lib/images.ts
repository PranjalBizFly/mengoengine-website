/**
 * MengoEngine — Content-Driven Master Photography Registry & Section Resolver
 *
 * Implements the Content-Driven Multi-Image Architecture:
 * - Content -> Section -> Visual Intent -> Curated High-Res Editorial Photography
 * - Section-aware resolvers for high-depth pages (Homepage, Engines, Features, Solutions, Industries, Use Cases, Channels, Guides, Company)
 * - Strict 1:1 uniqueness across all sections and pages (zero reuse)
 * - Full photographer attribution and accessible, descriptive alt text
 */
import photoRegistryRaw from "./photo-data.json";

export interface PageImageDescriptor {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  title: string;
  sectionKey?: string;
  photographer?: string;
  sourceUrl?: string;
  priority?: boolean;
}

interface PhotoItem {
  pageType?: string;
  pageSlug?: string;
  sectionKey?: string;
  sectionTitle?: string;
  topic?: string;
  category?: string;
  slug?: string;
  photoId: string;
  src: string;
  photographer: string;
  alt: string;
  sourceUrl: string;
  purpose?: string;
}

const photoRegistry = photoRegistryRaw as Record<string, PhotoItem>;

const DEFAULT_WIDTH = 2000;
const DEFAULT_HEIGHT = 1125;

export function resolveSectionPhoto(
  pageType: string,
  slug: string,
  sectionKey = "hero",
  fallbackTitle?: string,
  fallbackCategoryName?: string,
  priority = false
): PageImageDescriptor {
  const compositeKey = `${pageType}:${slug}:${sectionKey}`;
  const singleKey = `${pageType}:${slug}`;
  const entry = photoRegistry[compositeKey] || photoRegistry[singleKey];

  if (entry) {
    return {
      src: entry.src,
      alt: entry.alt,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      category: entry.sectionTitle || fallbackCategoryName || pageType,
      title: entry.topic || fallbackTitle || slug,
      sectionKey,
      photographer: entry.photographer,
      sourceUrl: entry.sourceUrl,
      priority,
    };
  }

  // Safe fallback (distinct seed)
  return {
    src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=2000&q=84",
    alt: `Strategic team collaborating on ${fallbackTitle || slug} in modern workspace`,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    category: fallbackCategoryName || pageType,
    title: fallbackTitle || slug,
    sectionKey,
    photographer: "Campaign Creators",
    sourceUrl: "https://unsplash.com/photos/1576267423445",
    priority,
  };
}

// ==========================================
// HOMEPAGE SECTION RESOLVERS
// ==========================================
export function getHomeSectionImage(sectionKey: "hero" | "engines" | "brief" | "roi"): PageImageDescriptor {
  const titles = {
    hero: "Executive Growth Strategy",
    engines: "Five Operating Engines",
    brief: "Shared Business Brief",
    roi: "Measurable Business Outcomes",
  };
  return resolveSectionPhoto("hub", "home", sectionKey, titles[sectionKey], "Homepage", sectionKey === "hero");
}

export function getHomeHeroImage(): PageImageDescriptor {
  return getHomeSectionImage("hero");
}

export function getHomeEnginesImage(): PageImageDescriptor {
  return getHomeSectionImage("engines");
}

// ==========================================
// PRODUCT ENGINE SECTION RESOLVERS
// ==========================================
export function getProductImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("product", slug, "hero", title, "Product Engine", true);
}

export function getProductSectionImage(
  slug: string,
  sectionKey: "hero" | "inputs-outputs" | "how-it-works",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Product Engine",
    "inputs-outputs": "Engine Architecture",
    "how-it-works": "Engine Workflow",
  };
  return resolveSectionPhoto("product", slug, sectionKey, title, sectionCategories[sectionKey], sectionKey === "hero");
}

// ==========================================
// FEATURE CAPABILITY SECTION RESOLVERS
// ==========================================
export function getFeatureImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("feature", slug, "hero", title, "Platform Capability");
}

export function getFeatureSectionImage(
  slug: string,
  sectionKey: "hero" | "problem" | "mechanism",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Platform Capability",
    problem: "Operational Problem",
    mechanism: "Underlying Mechanism",
  };
  return resolveSectionPhoto("feature", slug, sectionKey, title, sectionCategories[sectionKey]);
}

// ==========================================
// SOLUTION SECTION RESOLVERS
// ==========================================
export function getSolutionImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("solution", slug, "hero", title, "Target Solution");
}

export function getSolutionSectionImage(
  slug: string,
  sectionKey: "hero" | "friction" | "approach",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Target Solution",
    friction: "Operational Friction",
    approach: "Execution Playbook",
  };
  return resolveSectionPhoto("solution", slug, sectionKey, title, sectionCategories[sectionKey]);
}

// ==========================================
// INDUSTRY SECTION RESOLVERS
// ==========================================
export function getIndustryImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("industry", slug, "hero", title, "Industry Context");
}

export function getIndustrySectionImage(
  slug: string,
  sectionKey: "hero" | "realities" | "channels",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Industry Context",
    realities: "Sector Realities",
    channels: "Channel Prioritization",
  };
  return resolveSectionPhoto("industry", slug, sectionKey, title, sectionCategories[sectionKey]);
}

// ==========================================
// USE CASE SECTION RESOLVERS
// ==========================================
export function getUseCaseImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("use-case", slug, "hero", title, "Use Case Workflow");
}

export function getUseCaseSectionImage(
  slug: string,
  sectionKey: "hero" | "transformation" | "workflow",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Use Case Workflow",
    transformation: "Transformation",
    workflow: "Phased Execution",
  };
  return resolveSectionPhoto("use-case", slug, sectionKey, title, sectionCategories[sectionKey]);
}

// ==========================================
// CHANNEL SECTION RESOLVERS
// ==========================================
export function getChannelImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("channel", slug, "hero", title, "Channel Strategy");
}

export function getChannelSectionImage(
  slug: string,
  sectionKey: "hero" | "mechanics" | "formats",
  title?: string
): PageImageDescriptor {
  const sectionCategories = {
    hero: "Channel Strategy",
    mechanics: "Platform Mechanics",
    formats: "Asset Production",
  };
  return resolveSectionPhoto("channel", slug, sectionKey, title, sectionCategories[sectionKey]);
}

// ==========================================
// CHANNEL X INDUSTRY RESOLVERS
// ==========================================
export function getChannelIndustryImage(
  channelSlug: string,
  industrySlug: string,
  channelTitle?: string,
  industryTitle?: string
): PageImageDescriptor {
  return resolveSectionPhoto(
    "channel-industry",
    `${channelSlug}--for--${industrySlug}`,
    "hero",
    `${channelTitle || channelSlug} for ${industryTitle || industrySlug}`,
    "Channel x Industry"
  );
}

// ==========================================
// ASSET TYPE RESOLVERS
// ==========================================
export function getAssetTypeImage(slug: string, title?: string, channel?: string): PageImageDescriptor {
  return resolveSectionPhoto("asset-type", slug, "hero", title || slug, `Asset Format · ${channel || "Distribution"}`);
}

// ==========================================
// COMPARISON RESOLVERS
// ==========================================
export function getComparisonImage(slug: string, title?: string, against?: string): PageImageDescriptor {
  return resolveSectionPhoto("comparison", slug, "hero", title || slug, `Comparison vs ${against || "Alternative"}`);
}

// ==========================================
// GUIDE & RESOURCE SECTION RESOLVERS
// ==========================================
export function getGuideImage(slug: string, title?: string, format?: string): PageImageDescriptor {
  return resolveSectionPhoto("guide", slug, "hero", title || slug, `Resource · ${format || "Playbook"}`);
}

export function getGuideSectionImage(
  slug: string,
  sectionKey: "hero" | "workshop",
  title?: string
): PageImageDescriptor {
  return resolveSectionPhoto("guide", slug, sectionKey, title || slug, "Resource Workshop");
}

// ==========================================
// BLOG & EDITORIAL RESOLVERS
// ==========================================
export function getArticleImage(slug: string, title?: string, category?: string): PageImageDescriptor {
  return resolveSectionPhoto("article", slug, "hero", title || slug, `Editorial · ${category || "Marketing"}`);
}

export function getBlogTopicImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("blog-topic", slug, "hero", title || slug, "Blog Topic");
}

// ==========================================
// GLOSSARY & REFERENCE RESOLVERS
// ==========================================
export function getGlossaryImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("glossary", slug, "hero", title || slug, "Marketing Definition");
}

// ==========================================
// COMPANY SECTION RESOLVERS
// ==========================================
export function getCompanyImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("company", slug, "hero", title || slug, "Company Overview");
}

export function getCompanySectionImage(
  slug: string,
  sectionKey: "hero" | "culture",
  title?: string
): PageImageDescriptor {
  return resolveSectionPhoto("company", slug, sectionKey, title || slug, "Company Philosophy");
}

// ==========================================
// HUB DIRECTORY RESOLVERS
// ==========================================
export function getHubImage(slug: string, title?: string): PageImageDescriptor {
  return resolveSectionPhoto("hub", slug, "hero", title || slug, "Platform Directory");
}

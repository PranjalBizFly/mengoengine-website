/** Global site constants and the canonical URL builder. */

export const site = {
  name: "Mengo",
  legalName: "Mengo Engine",
  productName: "MengoEngine",
  url: "https://mengoengine.com",
  tagline: "Your AI Co-founder",
  promise: "Build faster. Market smarter. Convert better.",
  description:
    "Mengo is the AI co-founder that runs your marketing. It turns a handful of business inputs into a year of strategy, content, campaigns and lead-nurturing flows — and keeps executing them.",
  locale: "en",
  twitter: "@MengoEngine",
  founderSite: "https://jainamjain.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/buildwithmengo" },
    { label: "X", href: "https://x.com/MengoEngine/" },
    { label: "Instagram", href: "https://www.instagram.com/buildwithmengo/" },
    { label: "Facebook", href: "https://www.facebook.com/buildwithmengo" },
    { label: "Threads", href: "https://www.threads.com/@buildwithmengo" },
    { label: "TikTok", href: "https://www.tiktok.com/@buildwithmengo" },
    { label: "Pinterest", href: "https://www.pinterest.com/buildwithmengo/" },
    { label: "Medium", href: "https://medium.com/@buildwithmengo" },
    { label: "Quora", href: "https://www.quora.com/profile/Buildwithmengo" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* URL architecture                                                    */
/*                                                                     */
/* Every internal link in the site is built here. Section segments are */
/* plural nouns, entity segments are the entity slug, and every path    */
/* ends in a trailing slash to match next.config trailingSlash: true.   */
/* ------------------------------------------------------------------ */

export const routes = {
  home: () => "/",

  platform: () => "/platform/",
  product: (slug: string) => `/platform/${slug}/`,

  features: () => "/features/",
  feature: (slug: string) => `/features/${slug}/`,

  solutions: () => "/solutions/",
  solution: (slug: string) => `/solutions/${slug}/`,

  industries: () => "/industries/",
  industry: (slug: string) => `/industries/${slug}/`,

  useCases: () => "/use-cases/",
  useCase: (slug: string) => `/use-cases/${slug}/`,

  channels: () => "/channels/",
  channel: (slug: string) => `/channels/${slug}/`,

  /** Channel × industry SEO landing pages. */
  channelForIndustry: (channel: string, industry: string) =>
    `/channels/${channel}/for/${industry}/`,

  assetTypes: () => "/asset-types/",
  assetType: (slug: string) => `/asset-types/${slug}/`,

  compare: () => "/compare/",
  comparison: (slug: string) => `/compare/${slug}/`,

  resources: () => "/resources/",
  guide: (slug: string) => `/resources/${slug}/`,

  glossary: () => "/glossary/",
  glossaryTerm: (slug: string) => `/glossary/${slug}/`,

  blog: () => "/blog/",
  blogCategory: (slug: string) => `/blog/topics/${slug}/`,
  article: (slug: string) => `/blog/${slug}/`,

  company: (slug: string) => `/company/${slug}/`,
  legal: (slug: string) => `/legal/${slug}/`,

  contact: () => "/contact/",
  waitlist: () => "/get-started/",
  invest: () => "/company/invest/",
  sitemapPage: () => "/sitemap/",
} as const;

/** Absolute URL for canonicals, Open Graph and schema. */
export function absolute(path: string): string {
  return `${site.url}${path}`;
}

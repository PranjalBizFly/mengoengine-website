import Link from "next/link";
import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { Eyebrow, JsonLd, RowLink, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { articles, articleCategories, articlesByCategory } from "@/data/articles";
import { PageVisual } from "@/components/ui/PageVisual";
import { getHubImage } from "@/lib/images";

const PATH = routes.blog();
const CRUMBS = [{ label: "Blog", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Writing on marketing systems, content and AI",
  description:
    "Opinionated pieces on why marketing stops, what AI actually changes, and how small teams build something that keeps running. Each argues one position rather than surveying a topic.",
  path: PATH,
  ogKicker: "Blog",
});

export default function BlogIndexPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS]),
          collectionSchema({
            name: "Mengo blog",
            description: "Writing on marketing systems, content and AI.",
            path: PATH,
            items: articles.map((a) => ({ label: a.title, href: routes.article(a.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Writing"
        title="One argument per piece"
        lead="Nobody needs another survey of a topic. Everything here takes a position, including the ones a reasonable person would disagree with — which is the point."
        count={`${articles.length} articles across ${articleCategories.length} topics`}
        backdrop={getHubImage("blog", "Editorial Publications")}
      >
        <nav aria-label="Topics" className="mt-10 flex flex-wrap gap-2">
          {articleCategories.map((category) => (
            <Link
              key={category.slug}
              href={routes.blogCategory(category.slug)}
              className="inline-flex min-h-10 items-center rounded-full border border-paper-line px-4 text-small font-medium text-graphite-soft transition-colors hover:border-lime-deep hover:text-lime-deep [.on-dark_&]:border-sage/30 [.on-dark_&]:text-sage [.on-dark_&]:hover:border-lime [.on-dark_&]:hover:text-lime"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </IndexHero>

      {/* Lead article gets editorial weight rather than being one card among many */}
      {lead ? (
        <Section tone="paper">
          <Link href={routes.article(lead.slug)} className="group grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <Eyebrow className="mb-5">Latest</Eyebrow>
              <h2 className="max-w-[18ch] text-d2 transition-colors group-hover:text-lime-deep" data-reveal>
                {lead.title}
              </h2>
            </div>
            <div className="self-end" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <p className="max-w-[46ch] text-lead text-graphite-soft">{lead.summary}</p>
              <p className="eyebrow mt-6">
                {formatDate(lead.published)} · {lead.readingTime} min read
              </p>
            </div>
          </Link>
        </Section>
      ) : null}

      <Section tone="warm">
        <Eyebrow>Everything else</Eyebrow>
        <div className="mt-8">
          {rest.map((article) => (
            <RowLink
              key={article.slug}
              href={routes.article(article.slug)}
              label={article.title}
              blurb={article.summary}
              meta={`${article.readingTime} min`}
            />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Eyebrow>By topic</Eyebrow>
        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {articleCategories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-h7 tracking-[-0.02em]">
                <Link href={routes.blogCategory(category.slug)} className="inline-block py-1 transition-colors hover:text-lime-deep">
                  {category.label}
                </Link>
              </h2>
              <p className="mt-2 text-small leading-relaxed text-graphite-soft">{category.blurb}</p>
              <p className="eyebrow mt-3">{articlesByCategory(category.slug).length} articles</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="One idea a week"
        title="Get the writing, not a sequence"
        body="Subscribe and you get one useful idea most weeks. If you would rather have the system than the reading, join the waitlist instead."
        secondary={{ label: "Read the playbooks", href: routes.resources() }}
      />
    </>
  );
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

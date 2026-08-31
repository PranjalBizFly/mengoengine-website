import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/page";
import { LongForm } from "@/components/sections/longform";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, JsonLd, RowLink, Section } from "@/components/ui/primitives";
import { entityMetadata } from "@/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { defaultCta } from "@/lib/cta";
import { link, firstSentence } from "@/lib/registry";
import { articles, articleBySlug, articleCategories, articlesByCategory } from "@/data/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ article: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article } = await params;
  const entity = articleBySlug.get(article);
  if (!entity) return {};
  const category = articleCategories.find((c) => c.slug === entity.category);
  return entityMetadata(entity, { type: "article", section: category?.label });
}

export default async function ArticlePage({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  const category = articleCategories.find((c) => c.slug === article.category);
  const path = routes.article(article.slug);
  const crumbs = [
    { label: "Blog", href: routes.blog() },
    ...(category ? [{ label: category.label, href: routes.blogCategory(category.slug) }] : []),
    { label: article.title, href: path },
  ];

  const moreInCategory = articlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          articleSchema({
            headline: article.title,
            description: article.summary,
            path,
            published: article.published,
            modified: article.updated,
            section: category?.label,
          }),
        ]}
      />

      {/* Articles get their own hero: narrow, centred on the argument */}
      <div className="bg-paper">
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-page pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="max-w-[52rem]">
            <Eyebrow className="mb-5">
              {category ? (
                <Link href={routes.blogCategory(category.slug)} className="inline-block py-1.5 transition-colors hover:text-lime-deep">
                  {category.label}
                </Link>
              ) : (
                "Article"
              )}
            </Eyebrow>
            <h1 className="text-d2" data-reveal>
              {article.title}
            </h1>
            <p
              className="mt-6 max-w-[52ch] text-lead text-graphite-soft"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {article.summary}
            </p>
            <p className="eyebrow mt-8">
              {formatDate(article.published)} · {article.readingTime} min read
            </p>
          </div>
        </div>
      </div>

      <LongForm sections={article.sections} contentsLabel="In this piece" />

      {moreInCategory.length > 0 ? (
        <Section tone="warm">
          <Eyebrow>More in {category?.label ?? "this topic"}</Eyebrow>
          <div className="mt-6">
            {moreInCategory.map((other) => (
              <RowLink
                key={other.slug}
                href={routes.article(other.slug)}
                label={other.title}
                blurb={firstSentence(other.summary)}
                meta={`${other.readingTime} min`}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="paper">
        <Eyebrow>Referenced here</Eyebrow>
        <div className="mt-6 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {resolveMixed(article.related).map((ref) => (
            <Link
              key={ref.href}
              href={ref.href}
              className="rule-t py-4 transition-colors hover:text-lime-deep"
            >
              <span className="block type-title text-h8">{ref.label}</span>
              <span className="mt-1 block text-small leading-relaxed text-graphite-soft">{ref.blurb}</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        action={defaultCta(article)}
        title="If this describes your situation"
        body="Mengo is the system version of what this piece argues for. Join our waitlist and tell us which part you would fix first."
        subject={article.title}
        secondary={{ label: "All writing", href: routes.blog() }}
      />
    </>
  );
}

/**
 * Article cross-references are written without a kind, because an argument
 * naturally points at a solution, a capability, a resource and another article
 * in the same breath. This resolves whichever kind the slug belongs to.
 */
function resolveMixed(slugs: string[]) {
  const kinds = ["solution", "feature", "guide", "article", "comparison", "glossary", "use-case", "industry", "company"] as const;
  return slugs.flatMap((slug) => {
    for (const kind of kinds) {
      const [found] = link(kind, [slug]);
      if (found) return [found];
    }
    return [];
  });
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

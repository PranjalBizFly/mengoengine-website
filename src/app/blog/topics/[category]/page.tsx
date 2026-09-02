import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { Eyebrow, JsonLd, RowLink, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema, collectionSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { articleCategories, articlesByCategory } from "@/data/articles";
import type { Article } from "@/lib/types";
import { PageVisual } from "@/components/ui/PageVisual";
import { getBlogTopicImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleCategories.map((c) => ({ category: c.slug }));
}

function findCategory(slug: string) {
  return articleCategories.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};
  const count = articlesByCategory(category.slug as Article["category"]).length;
  return pageMetadata({
    title: `${category.label} — ${count} articles`,
    description: category.blurb,
    path: routes.blogCategory(category.slug),
    ogKicker: "Blog topic",
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const path = routes.blogCategory(category.slug);
  const items = articlesByCategory(category.slug as Article["category"]);
  const crumbs = [
    { label: "Blog", href: routes.blog() },
    { label: category.label, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          collectionSchema({
            name: category.label,
            description: category.blurb,
            path,
            items: items.map((a) => ({ label: a.title, href: routes.article(a.slug) })),
          }),
        ]}
      />

      <IndexHero
        crumbs={crumbs}
        eyebrow="Blog topic"
        title={category.label}
        lead={category.blurb}
        count={`${items.length} articles`}
        visual={<PageVisual image={getBlogTopicImage(category.slug, category.label)} priority />}
      />

      <Section tone="paper">
        <div>
          {items.map((article) => (
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

      <Section tone="warm">
        <Eyebrow>Other topics</Eyebrow>
        <div className="mt-6">
          {articleCategories
            .filter((c) => c.slug !== category.slug)
            .map((other) => (
              <RowLink
                key={other.slug}
                href={routes.blogCategory(other.slug)}
                label={other.label}
                blurb={other.blurb}
                meta={`${articlesByCategory(other.slug as Article["category"]).length} articles`}
              />
            ))}
        </div>
      </Section>

      <CtaBand
        title="Reading is the cheap part"
        body="Mengo does the work described in these pieces from a guided brief, and keeps doing it during the weeks you would otherwise stop."
        secondary={{ label: "How it works", href: routes.company("how-it-works") }}
      />
    </>
  );
}

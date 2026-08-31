import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LongForm } from "@/components/sections/longform";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Eyebrow, JsonLd, Section } from "@/components/ui/primitives";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes, site } from "@/lib/site";
import { legalPages, legalPageBySlug } from "@/data/company";

export const dynamicParams = false;

export function generateStaticParams() {
  return legalPages.map((p) => ({ page: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const entity = legalPageBySlug.get(page);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Legal" });
}

export default async function LegalPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = legalPageBySlug.get(slug);
  if (!page) notFound();

  const crumbs = [
    { label: "Legal", href: routes.legal("privacy-policy") },
    { label: page.title, href: routes.legal(page.slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs])} />

      {/* Legal pages get a deliberately plain hero — no persuasion, just orientation */}
      <div className="bg-paper-warm">
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-page pb-10 pt-8 md:pb-14 md:pt-12">
          <Eyebrow className="mb-4">Legal</Eyebrow>
          <h1 className="text-d3">{page.title}</h1>
          <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-graphite-soft">{page.summary}</p>
          <p className="eyebrow mt-6">Effective {formatDate(page.effective)}</p>
        </div>
      </div>

      <LongForm sections={page.sections} contentsLabel="Sections" />

      <Section tone="warm">
        <Eyebrow>Other policies</Eyebrow>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {legalPages
            .filter((p) => p.slug !== page.slug)
            .map((other) => (
              <Link
                key={other.slug}
                href={routes.legal(other.slug)}
                className="text-[0.9375rem] text-graphite-soft transition-colors hover:text-lime-deep"
              >
                {other.title}
              </Link>
            ))}
        </div>
        <p className="mt-8 max-w-[52ch] text-[0.875rem] leading-relaxed text-graphite-soft">
          Questions about any of this can go through the{" "}
          <Link href={routes.contact()} className="underline decoration-lime-deep underline-offset-2">
            contact page
          </Link>
          . {site.legalName} is early-stage, and any section marked as to be confirmed will be completed before these
          terms are relied upon commercially.
        </p>
      </Section>
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

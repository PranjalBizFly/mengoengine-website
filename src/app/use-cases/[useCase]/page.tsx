import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DocumentHero, CtaBand, RelatedRail, Explainer } from "@/components/sections/page";
import { SectionNav } from "@/components/layout/SectionNav";
import { outline } from "@/lib/outline";
import { relatedGroups, mergeGroups } from "@/lib/depth";
import { Eyebrow, FaqList, Heading, JsonLd, ProcessRail, Section } from "@/components/ui/primitives";
import { LeadButton } from "@/components/forms/LeadModal";
import { Cta } from "@/components/forms/Cta";
import { entityMetadata } from "@/seo/metadata";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { ctaFor, defaultCta } from "@/lib/cta";
import { link } from "@/lib/registry";
import { useCases, useCaseBySlug } from "@/data/use-cases";
import { PageVisual } from "@/components/ui/PageVisual";
import { getUseCaseSectionImage } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((u) => ({ useCase: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ useCase: string }> }): Promise<Metadata> {
  const { useCase } = await params;
  const entity = useCaseBySlug.get(useCase);
  if (!entity) return {};
  return entityMetadata(entity, { section: "Use cases" });
}

export default async function UseCasePage({ params }: { params: Promise<{ useCase: string }> }) {
  const { useCase: slug } = await params;
  const useCase = useCaseBySlug.get(slug);
  if (!useCase) notFound();

  const path = routes.useCase(useCase.slug);
  const crumbs = [
    { label: "Use cases", href: routes.useCases() },
    { label: useCase.title, href: path },
  ];

  const sections = outline([
    Boolean(useCase.depth?.intro) && { id: "overview", label: "Overview" },
    { id: "before-after", label: "Without a system, with Mengo" },
    { id: "the-workflow", label: "The workflow" },
    Boolean(useCase.depth?.explain?.length) && { id: "why-it-is-hard", label: "Why it is hard" },
    { id: "questions", label: "Questions" },
  ]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ label: "Home", href: "/" }, ...crumbs]),
          howToSchema({ name: useCase.title, description: useCase.summary, steps: useCase.workflow }),
          faqSchema(useCase.faqs),
        ]}
      />

      <DocumentHero
        crumbs={crumbs}
        eyebrow="Use case"
        title={useCase.title}
        lead={useCase.summary}
        facts={[{ label: "What triggers this", value: useCase.trigger }]}
        actions={<Cta cta={ctaFor("waitlist")} />}
        backdrop={getUseCaseSectionImage(useCase.slug, "hero", useCase.title)}
      />

      <SectionNav items={sections} />

      {/* What this job actually involves, written for this job. */}
      <Explainer id="overview" tone="paper" intro={useCase.depth?.intro} />

      {/* Before / after — the one place in the system where a direct contrast earns its keep */}
      <Section id="before-after" photo={getUseCaseSectionImage(useCase.slug, "transformation", `Transformation: ${useCase.title}`)} photoLayout="panel">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <Eyebrow as="h2" className="mb-5">Without a system</Eyebrow>
            <p className="text-lead text-sage">{useCase.before}</p>
          </div>
          <div
            className="rule-t pt-8 md:border-t-0 md:border-l md:border-l-sage/25 md:pl-16 md:pt-0"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <Eyebrow as="h2" className="mb-5">With Mengo</Eyebrow>
            <p className="text-lead text-ink-invert">{useCase.after}</p>
          </div>
        </div>
      </Section>

      <Section id="the-workflow" photo={getUseCaseSectionImage(useCase.slug, "workflow", `Workflow: ${useCase.title}`)} photoLayout="inline">
        <Heading eyebrow="The workflow" title="How the job actually gets done" />
        <ProcessRail steps={useCase.workflow} />
      </Section>

      <Explainer
        id="why-it-is-hard"
        tone="warm"
        eyebrow="Why it is hard, and what you get"
        title="The part most attempts get wrong"
        sections={useCase.depth?.explain}
      />

      <Section id="questions" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Heading eyebrow="Questions" title={`About ${useCase.title.toLowerCase()}`} as="h2" size="d4" />
          <FaqList faqs={useCase.faqs} />
        </div>
      </Section>

      <RelatedRail
        tone="warm"
        groups={mergeGroups(
          [
            {
              heading: "Engines involved",
              links: link("product", useCase.products),
              seeAll: { label: "See the platform", href: routes.platform() },
            },
            {
              heading: "Capabilities used",
              links: link("feature", useCase.features),
              seeAll: { label: "All capabilities", href: routes.features() },
            },
            {
              heading: "Common in",
              links: link("industry", useCase.industries),
              seeAll: { label: "All industries", href: routes.industries() },
            },
          ],
          relatedGroups(useCase.depth, 1),
          4,
        )}
      />

      <CtaBand
        action={defaultCta(useCase)}
        close={useCase.depth?.close}
        title={useCase.title}
        body="Join our waitlist and name the job you need done first. Specific jobs are what set the build order."
        subject={useCase.title}
        secondary={{ label: "More use cases", href: routes.useCases() }}
      />
    </>
  );
}

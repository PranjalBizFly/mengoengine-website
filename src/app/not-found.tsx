import Link from "next/link";
import type { Metadata } from "next";

import { Eyebrow, RowLink, Section } from "@/components/ui/primitives";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | Mengo",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <div className="on-dark bg-forest text-sage">
        <div className="container-page py-24 md:py-32">
          <Eyebrow className="mb-6">404</Eyebrow>
          <h1 className="max-w-[16ch] text-d2 text-paper">This page is not where you expected it</h1>
          <p className="mt-6 max-w-[46ch] text-lead">
            It may have moved, or the link may be wrong. The sitemap lists everything on the site, and the routes below
            cover most of what people arrive looking for.
          </p>
          <Link
            href={routes.sitemapPage()}
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-lime px-6 text-[0.9375rem] font-semibold text-forest transition-colors hover:bg-lime-bright"
          >
            Browse the full sitemap
          </Link>
        </div>
      </div>

      <Section tone="paper">
        <Eyebrow>Most likely</Eyebrow>
        <div className="mt-6 grid gap-x-12 lg:grid-cols-2">
          <div>
            <RowLink href={routes.platform()} label="The platform" blurb="Five engines and what each one produces" />
            <RowLink href={routes.solutions()} label="Solutions" blurb="Start from what is actually broken" />
            <RowLink href={routes.industries()} label="Industries" blurb="How your market changes the plan" />
          </div>
          <div>
            <RowLink href={routes.resources()} label="Resources" blurb="Playbooks, frameworks and checklists" />
            <RowLink href={routes.blog()} label="Writing" blurb="One argument per piece" />
            <RowLink href={routes.contact()} label="Contact" blurb="Ask a person" />
          </div>
        </div>
      </Section>
    </>
  );
}

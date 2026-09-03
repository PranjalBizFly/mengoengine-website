import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { FooterColumns } from "@/components/layout/FooterNav";
import { ecosystemColumns, footerColumns, legalLinks } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * One footer for the entire site. It is the secondary navigation for a
 * five-hundred-page ecosystem, so it lists real routes rather than a token
 * five links.
 *
 * One architecture, not two stacked ones. The brand block, the site columns,
 * the ecosystem and the legal line are four registers of a single grid,
 * separated by the same hairline at the same rhythm and stepping down in
 * emphasis as they go — rather than a "top footer" and an unrelated second
 * footer bolted underneath it.
 *
 * The rule the structure enforces is one destination, one location. Anything
 * that lives on its own host appears in the ecosystem band and nowhere else;
 * `footerColumns` carries pages of this site only. That is why the Company
 * column has no "About" and no "Invest in Mengo" — both are subdomains, and
 * listing them twice was the duplication this footer existed to remove.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-forest text-sage">
      {/* A brand hairline across the top edge — the one place the lime is
          allowed to run the full width of the page. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-lime-deep)_18%,var(--color-lime)_50%,var(--color-lime-deep)_82%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(52%_70%_at_12%_0%,rgb(163_230_37/0.1),transparent_60%)]"
      />

      {/* Without JavaScript the accordion cannot open, so the lists it would
          collapse are shown instead. A footer that hides forty links from a
          reader who has scripting off is worse than a long one. */}
      <noscript>
        <style>{`.footer-links{display:block !important}`}</style>
      </noscript>

      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div data-reveal>
            <Logo tone="light" />
            <p className="mt-6 max-w-[24rem] text-body leading-relaxed">
              {site.tagline}. Mengo turns a short business brief into strategy, a year of calendar, the content that
              fills it and the follow-up that converts it.
            </p>
            <NewsletterSignup />
          </div>

          <FooterColumns columns={footerColumns} />
        </div>

        {/* The subdomain ecosystem: the single source of truth for every
            destination that is not a page of this site.

            Its own band, because these run on their own hosts — but on the
            same hairline and the same rhythm as everything above it, and set
            one step quieter, so it reads as the last register of this footer
            rather than as a second footer. Grouped by who the reader is
            rather than by what the destination is called: somebody looking
            for help does not know whether the answer is in "support" or
            "docs", but they do know they are a customer. */}
        <section className="mt-14 border-t border-sage/12 pt-10">
          <h2 className="eyebrow text-sage-dim">More from Mengo</h2>
          <nav
            aria-label="Mengo ecosystem"
            className="mt-7 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4"
            data-reveal-stagger
          >
            {ecosystemColumns.map((column) => (
              <div key={column.heading} data-reveal>
                <h3 className="eyebrow mb-4 text-sage-dim">{column.heading}</h3>
                <ul className="space-y-2.5">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="inline-block text-small leading-snug text-sage transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime motion-safe:hover:translate-x-0.5"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </section>

        <div className="mt-12 border-t border-sage/12 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {site.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    rel="me noopener"
                    target="_blank"
                    className="text-fine text-sage transition-colors hover:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-fine text-sage-dim">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-fine text-sage-dim">
            © {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

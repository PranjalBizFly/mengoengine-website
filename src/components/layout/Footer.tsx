import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { ecosystemColumns, footerColumns, legalLinks } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * One footer for the entire site. It is the secondary navigation for a 500-page
 * ecosystem, so it lists real routes rather than a token five links.
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
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <div data-reveal>
            <Logo tone="light" />
            <p className="mt-6 max-w-[24rem] text-body leading-relaxed">
              {site.tagline}. Mengo turns a short business brief into strategy, a year of calendar, the content that
              fills it and the follow-up that converts it.
            </p>
            <NewsletterSignup />
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-5"
            data-reveal-stagger
          >
            {footerColumns.map((column) => (
              <div key={column.heading} data-reveal>
                <p className="eyebrow mb-5">{column.heading}</p>
                <ul className="space-y-3">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-block text-small leading-snug text-sage transition-[color,transform] duration-300 ease-[var(--ease-out-expo)] hover:text-lime motion-safe:hover:translate-x-0.5"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* The subdomain ecosystem.
            Kept as its own band rather than folded into the five columns
            above, because these are separate destinations on their own hosts
            rather than more pages on this site — and because grouping them by
            reader (customer, business, technical, company) only reads as a
            grouping when it is visually one. */}
        <div className="mt-20 rule-t pt-12">
          <p className="eyebrow mb-8">More from Mengo</p>
          <nav
            aria-label="Mengo ecosystem"
            className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
            data-reveal-stagger
          >
            {ecosystemColumns.map((column) => (
              <div key={column.heading} data-reveal>
                <p className="eyebrow mb-4 text-sage-dim">{column.heading}</p>
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
        </div>

        <div className="mt-16 rule-t pt-10">
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

          <div className="mt-6 flex flex-col gap-4 text-fine text-sage-dim sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

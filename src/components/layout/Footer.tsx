import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { footerColumns, legalLinks } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * One footer for the entire site. It is the secondary navigation for a 500-page
 * ecosystem, so it lists real routes rather than a token five links.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-forest text-sage">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-[24rem] text-[0.9375rem] leading-relaxed">
              {site.tagline}. Mengo turns a short business brief into strategy, a year of calendar, the content that
              fills it and the follow-up that converts it.
            </p>
            <NewsletterSignup />
          </div>

          <nav aria-label="Footer" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="eyebrow mb-4">{column.heading}</p>
                <ul className="space-y-2.5">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.875rem] leading-snug text-sage transition-colors hover:text-lime"
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

        <div className="mt-16 rule-t pt-8">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  rel="me noopener"
                  target="_blank"
                  className="text-[0.8125rem] text-sage transition-colors hover:text-lime"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 text-[0.8125rem] text-sage-dim sm:flex-row sm:items-center sm:justify-between">
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

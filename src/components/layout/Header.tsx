"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { LeadButton } from "@/components/forms/LeadModal";
import { primaryNav, type NavGroup } from "@/lib/nav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SearchButton, SearchDialog, useSearchHotkey } from "@/components/search/SiteSearch";
import { EVENTS, track } from "@/lib/analytics";
import { routes } from "@/lib/site";

/**
 * Enterprise header for a large site.
 *
 * Desktop: a mega menu opened by hover or keyboard, one panel at a time, with
 * the whole panel inside the header's own stacking context so it can never be
 * clipped by page content. Mobile: a full-height panel with native disclosures,
 * which keeps the interaction accessible without a focus-trap implementation.
 */
export function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Route change closes everything. Without this, a menu link navigates and the
  // panel stays open over the new page.
  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const openSearch = useCallback(() => {
    // Search and the mega menu are both overlays; opening one closes the other.
    setOpenIndex(null);
    setMobileOpen(false);
    setSearchOpen(true);
    track(EVENTS.navOpen, { label: "search", source: pathname });
  }, [pathname]);

  useSearchHotkey(openSearch, searchOpen);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // One owner for the scroll lock. Two overlays each saving and restoring the
  // body's overflow would race: the second to mount captures the first's
  // "hidden" and puts it back on close, leaving the page permanently locked.
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenIndex(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    // A short delay so the pointer can cross the gap between trigger and panel.
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] ${
          condensed || openIndex !== null
            ? "border-b border-paper-line bg-paper/92 shadow-[0_10px_30px_-24px_rgb(2_32_24/0.5)]"
            : "border-b border-transparent bg-paper/70"
        }`}
        onMouseLeave={scheduleClose}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-ink-invert"
        >
          Skip to content
        </a>

        <div className="container-page flex h-(--header-h) flex-nowrap items-center justify-between gap-3 2xl:gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden min-w-0 lg:block">
            <ul className="flex flex-nowrap items-center">
              {/* Below 1280 the logo is the only Home affordance the row has space for. */}
              <li className="hidden xl:block">
                <Link
                  href={routes.home()}
                  aria-current={pathname === routes.home() ? "page" : undefined}
                  className={`type-nav relative inline-flex items-center whitespace-nowrap rounded-full px-2 py-2.5 transition-colors after:absolute after:inset-x-2 xl:px-3 xl:after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-lime-deep after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100 ${
                    pathname === routes.home()
                      ? "text-lime-deep"
                      : "text-graphite hover:text-lime-deep"
                  }`}
                >
                  Home
                </Link>
              </li>
              {primaryNav.map((group, index) => (
                <li key={group.label}>
                  {group.columns ? (
                    <button
                      type="button"
                      aria-expanded={openIndex === index}
                      aria-haspopup="true"
                      onMouseEnter={() => {
                        cancelClose();
                        setOpenIndex(index);
                      }}
                      onFocus={() => setOpenIndex(index)}
                      onClick={() => {
                        if (openIndex !== index) track(EVENTS.navOpen, { label: group.label, source: pathname });
                        setOpenIndex(openIndex === index ? null : index);
                      }}
                      className={`type-nav relative flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2.5 transition-colors after:absolute after:inset-x-2 xl:px-3 xl:after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-lime-deep after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100 ${
                        openIndex === index ? "text-lime-deep" : "text-graphite hover:text-lime-deep"
                      }`}
                    >
                      {group.label}
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        aria-hidden
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1l3.5 3.5L8 1" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={group.href}
                      className="type-nav inline-flex items-center whitespace-nowrap rounded-full px-2 py-2.5 text-graphite transition-colors hover:text-lime-deep xl:px-3"
                    >
                      {group.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            {/* Below 1280 the row is too narrow for the labelled search field and
                the standalone Contact link; both have compact stand-ins. */}
            <SearchButton onOpen={openSearch} variant="icon" className="xl:hidden" />
            <SearchButton onOpen={openSearch} className="hidden xl:flex" />
            <ThemeToggle />
            <Link
              href={routes.contact()}
              className="type-nav hidden whitespace-nowrap rounded-full px-3 py-2.5 text-graphite transition-colors hover:text-lime-deep xl:inline-flex xl:items-center"
            >
              Contact
            </Link>
            <LeadButton intent="waitlist" size="sm" className="shrink-0 whitespace-nowrap">
              Join our waitlist
            </LeadButton>
          </div>

          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <SearchButton onOpen={openSearch} variant="icon" />
            <ThemeToggle />
            <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => {
              if (!mobileOpen) track(EVENTS.navOpen, { label: "mobile menu", source: pathname });
              setMobileOpen((v) => !v);
            }}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-graphite"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-6" aria-hidden>
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        {openIndex !== null && primaryNav[openIndex].columns ? (
          <div
            className="mega-panel absolute inset-x-0 top-full hidden border-t border-paper-line bg-paper shadow-xl lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {/* Keyed on the open group so moving from one menu to the next
                re-runs the column stagger. The panel itself stays mounted, so
                only the contents resolve — the surface does not flash. */}
            <MegaPanel key={openIndex} group={primaryNav[openIndex]} />
          </div>
        ) : null}
      </header>

      {/* Mobile panel and search sit outside <header>: its backdrop-filter makes
          it the containing block for fixed descendants, which would collapse both
          overlays into the header's own 5rem box. */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-(--header-h) z-40 overflow-y-auto overscroll-contain border-t border-paper-line bg-paper lg:hidden"
      >
        <div className="container-page pb-10 pt-2">
          <Link
            href={routes.home()}
            aria-current={pathname === routes.home() ? "page" : undefined}
            className={`rule-b block py-4 type-title text-h7 ${
              pathname === routes.home() ? "text-lime-deep" : ""
            }`}
          >
            Home
          </Link>
          {primaryNav.map((group) => (
            <div key={group.label}>
              {group.columns ? (
                <details className="rule-b group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 type-title text-h7 [&::-webkit-details-marker]:hidden">
                    {group.label}
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 9 6"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="transition-transform duration-300 group-open:rotate-180"
                    >
                      <path d="M1 1l3.5 3.5L8 1" />
                    </svg>
                  </summary>
                  <div className="pb-5">
                    {group.columns.map((column) => (
                      <div key={column.heading} className="mb-5 last:mb-0">
                        <p className="eyebrow mb-2.5">{column.heading}</p>
                        <ul className="space-y-0.5">
                          {column.links.map((linkItem) => (
                            <li key={linkItem.href}>
                              <Link
                                href={linkItem.href}
                                className="block min-h-11 py-2.5 text-body text-graphite-soft transition-colors hover:text-lime-deep"
                              >
                                {linkItem.label}
                              </Link>
                            </li>
                          ))}
                          {column.seeAll ? (
                            <li>
                              <Link
                                href={column.seeAll.href}
                                className="block min-h-11 py-2.5 text-body font-semibold text-lime-deep"
                              >
                                {column.seeAll.label} →
                              </Link>
                            </li>
                          ) : null}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={group.href}
                  className="rule-b block py-4 type-title text-h7"
                >
                  {group.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-8 grid gap-3">
            <LeadButton intent="waitlist" className="w-full">
              Join our waitlist
            </LeadButton>
            <Link
              href={routes.contact()}
              className="flex min-h-11 items-center justify-center rounded-full border border-graphite/25 px-6 text-body font-semibold text-graphite"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function MegaPanel({ group }: { group: NavGroup }) {
  const columns = group.columns ?? [];
  return (
    <div className="container-page grid gap-x-8 gap-y-8 py-9 lg:grid-cols-[1fr_1fr_1fr_minmax(0,15rem)] xl:gap-x-10 xl:grid-cols-[1fr_1fr_1fr_minmax(0,17rem)]">
      {columns.map((column, index) => (
        <div
          key={column.heading}
          className="min-w-0"
          style={{ "--mega-index": String(index) } as React.CSSProperties}
        >
          <p className="eyebrow mb-4">
            {column.headingHref ? (
              <Link href={column.headingHref} className="transition-colors hover:text-lime-deep">
                {column.heading}
              </Link>
            ) : (
              column.heading
            )}
          </p>
          <ul className="space-y-0.5">
            {column.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group block rounded-lg px-2.5 py-2 -mx-2.5 transition-colors hover:bg-paper-warm">
                  <span className="block text-body font-medium text-graphite transition-colors group-hover:text-lime-deep">
                    {item.label}
                  </span>
                  {item.blurb ? (
                    <span className="mt-0.5 block text-fine leading-snug text-graphite-soft">{item.blurb}</span>
                  ) : null}
                </Link>
              </li>
            ))}
            {column.seeAll ? (
              <li>
                <Link
                  href={column.seeAll.href}
                  className="mt-2 -mx-2.5 block px-2.5 py-2 text-small font-semibold text-lime-deep transition-colors hover:text-graphite"
                >
                  {column.seeAll.label} →
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      ))}

      {group.feature ? (
        <div
          className="on-dark rounded-2xl bg-forest p-7"
          style={{ "--mega-index": String(columns.length) } as React.CSSProperties}
        >
          <p className="eyebrow">{group.feature.eyebrow}</p>
          <p className="mt-4 type-title text-h5 leading-tight text-ink-invert">
            {group.feature.title}
          </p>
          <p className="mt-3 text-small leading-relaxed text-sage">{group.feature.body}</p>
          <Link
            href={group.feature.href}
            className="mt-5 inline-flex items-center gap-1.5 text-small font-semibold text-lime transition-colors hover:text-lime-bright"
          >
            {group.feature.cta} →
          </Link>
        </div>
      ) : null}
    </div>
  );
}

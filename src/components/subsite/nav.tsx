"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainUrl, sitePath, type SubSite } from "@/lib/subdomains";

/**
 * Per-site primary navigation.
 *
 * Flat rather than a mega menu. These sites have between nine and fourteen
 * pages each, and a panel that opens to reveal three of them is theatre. Above
 * the large breakpoint every item is visible at once; below it the same list
 * becomes a sheet, which is the only place a disclosure earns its cost.
 *
 * Active state is computed from the pathname rather than passed down per link,
 * so a page reached by any route highlights the section it belongs to.
 */
export function SubSiteNav({ subsite }: { subsite: SubSite }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // A route change has to close the sheet; otherwise a tapped link navigates
  // and the panel stays open over the page it just loaded.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (path: string) => {
    const target = sitePath(subsite.key, path);
    return path === "" ? pathname === target : pathname.startsWith(target);
  };

  return (
    <>
      <nav aria-label={`${subsite.shortName} navigation`} className="hidden lg:block">
        <ul className="flex flex-nowrap items-center gap-0.5">
          {subsite.nav.map((item) => (
            <li key={item.path}>
              <Link
                href={sitePath(subsite.key, item.path)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`type-nav relative whitespace-nowrap rounded-full px-3 py-2.5 transition-colors after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-lime-deep after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100 ${
                  // The lime underline is the active signal. Lime lettering on
                  // the paper ground resolves to 2.93:1, which fails AA — the
                  // rule stays, the text stays readable.
                  isActive(item.path)
                    ? "font-semibold text-graphite after:scale-x-100"
                    : "text-graphite hover:text-lime-deep"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={mainUrl("/get-started/")}
              className="type-button inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-lime px-5 text-on-accent transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-lime-bright motion-safe:hover:-translate-y-0.5"
            >
              Join our waitlist
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="subsite-nav"
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-graphite lg:hidden"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="relative block h-3.5 w-6" aria-hidden>
          <span
            className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-transform duration-300 ease-[var(--ease-out-expo)] ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="subsite-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-(--header-h) z-40 overflow-y-auto overscroll-contain border-t border-paper-line bg-paper lg:hidden"
      >
        <div className="container-page pb-10 pt-2">
          <p className="eyebrow py-5">{subsite.name}</p>
          <ul>
            {subsite.nav.map((item) => (
              <li key={item.path}>
                <Link
                  href={sitePath(subsite.key, item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`rule-b block py-4 type-title text-h7 ${
                    isActive(item.path) ? "text-graphite underline decoration-lime decoration-2 underline-offset-[6px]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a
              href={mainUrl("/get-started/")}
              className="type-button flex min-h-12 items-center justify-center rounded-full bg-lime px-6 text-on-accent"
            >
              Join our waitlist
            </a>
            <a
              href={mainUrl("/")}
              className="flex min-h-12 items-center justify-center rounded-full border border-graphite/25 px-6 text-body font-semibold text-graphite"
            >
              Mengo main site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

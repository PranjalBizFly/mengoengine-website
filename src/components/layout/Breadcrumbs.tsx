import Link from "next/link";
import type { Crumb } from "@/seo/schema";

/**
 * Breadcrumbs are load-bearing on a site this size: they are how a visitor who
 * arrived from search understands where they landed. Rendered on every page
 * below the homepage, and mirrored into BreadcrumbList structured data.
 */
export function Breadcrumbs({ crumbs, tone = "paper" }: { crumbs: Crumb[]; tone?: "paper" | "forest" }) {
  if (crumbs.length === 0) return null;
  const trail = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] ${
          tone === "forest" ? "text-sage" : "text-graphite-soft"
        }`}
      >
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-medium">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className="transition-colors hover:text-lime-deep [.on-dark_&]:hover:text-lime">
                    {crumb.label}
                  </Link>
                  <span aria-hidden className="opacity-40">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

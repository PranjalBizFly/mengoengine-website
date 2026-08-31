"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLeadModal, type LeadIntent } from "@/components/forms/LeadModal";
import { buttonClass } from "@/components/ui/primitives";
import { ctaLabel, isModalCta } from "@/lib/cta";
import { EVENTS, track } from "@/lib/analytics";
import type { Cta as CtaData } from "@/lib/types";

/**
 * The one CTA component.
 *
 * Takes a CTA declared in content data and resolves it: modal types open the
 * shared lead modal with the right intent; navigation types render a link.
 * Either way the click is tracked with the same event shape, so a CTA never
 * needs to know how it will be measured.
 */
export function Cta({
  cta,
  subject,
  variant = "primary",
  className = "",
}: {
  cta: CtaData;
  /** What this CTA is about — carried into the form and the analytics event. */
  subject?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const { open } = useLeadModal();
  const pathname = usePathname();
  const label = ctaLabel(cta);

  if (!isModalCta(cta.type)) {
    const href = cta.href ?? "/";
    return (
      <Link
        href={href}
        className={buttonClass(variant, className)}
        onClick={() => track(EVENTS.ctaClick, { intent: cta.type, label, href, source: pathname, subject })}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonClass(variant, className)}
      onClick={() => {
        track(EVENTS.ctaClick, { intent: cta.type, label, source: pathname, subject });
        open(cta.type as LeadIntent, subject);
      }}
    >
      {label}
    </button>
  );
}

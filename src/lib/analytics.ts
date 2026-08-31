/**
 * Analytics event hooks.
 *
 * No analytics provider is configured, and adding one is not this layer's job.
 * `track` does two things a provider can be attached to later without touching
 * a single component:
 *
 *   1. pushes to `window.dataLayer`, which GTM reads if it is ever installed
 *   2. dispatches a `mengo:track` CustomEvent, which any script can listen for
 *
 * With neither present the call is a no-op costing one array push. Event names
 * are declared here rather than typed inline at call sites, so the taxonomy
 * stays consistent and greppable.
 */

export const EVENTS = {
  ctaClick: "cta_click",
  formOpen: "form_open",
  formSubmit: "form_submit",
  formSuccess: "form_success",
  formError: "form_error",
  formValidationError: "form_validation_error",
  resourceRequest: "resource_request",
  navOpen: "nav_open",
  navClick: "nav_click",
  faqOpen: "faq_open",
  themeChange: "theme_change",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

export interface EventPayload {
  /** CTA or form intent — waitlist, demo, expert, download… */
  intent?: string;
  /** Button or link text, so a click can be attributed without a selector. */
  label?: string;
  /** Path the interaction happened on. */
  source?: string;
  /** What the interaction was about — a product, an industry, a resource. */
  subject?: string | null;
  /** Destination for navigation events. */
  href?: string;
  /** Human-readable reason, for error events. Never a stack trace. */
  reason?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: EventName, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, at: new Date().toISOString() };

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(detail);
    window.dispatchEvent(new CustomEvent("mengo:track", { detail }));
  } catch {
    // Analytics must never break an interaction. If the push fails — a blocked
    // dataLayer, a locked-down browser — the user's action still completes.
  }
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Inline newsletter capture. Deliberately one field: every extra field on a
 * footer form costs more subscribers than the data it collects is worth.
 */
export function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const pathname = usePathname();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("company_website")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          intent: "newsletter",
          source: pathname,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="mt-8 max-w-[22rem] text-small leading-relaxed text-lime">
        You are subscribed. One useful idea, most weeks, and nothing else.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-[22rem]">
      <label htmlFor="footer-email" className="eyebrow">
        One idea a week
      </label>
      <div className="mt-3 flex gap-2">
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <input id="footer-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="min-h-11 w-full rounded-full border border-sage/30 bg-transparent px-4 text-small text-ink-invert outline-none transition-colors placeholder:text-sage-dim focus:border-lime"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-11 shrink-0 rounded-full bg-lime px-5 text-small font-semibold text-on-accent transition-colors hover:bg-lime-bright disabled:opacity-60"
        >
          {status === "sending" ? "…" : "Join"}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="mt-2 text-fine text-signal-error">
          That did not send. Please try again.
        </p>
      ) : (
        <p className="mt-2 text-fine text-sage-dim">No pitch sequence. Unsubscribe in one click.</p>
      )}
    </form>
  );
}

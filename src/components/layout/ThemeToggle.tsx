"use client";

import { useEffect, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";

/**
 * Light/dark toggle.
 *
 * Priority is explicit choice, then stored preference, then the OS setting,
 * then the site default (light). The stored value is only ever "light" or
 * "dark"; absence means "follow the system", which is why clearing it is a
 * meaningful state rather than a fallback.
 *
 * The applied theme is set before paint by the inline script in layout.tsx, so
 * this component never causes a flash — it only reflects and changes state.
 */

export const THEME_STORAGE_KEY = "mengo-theme";

/**
 * Runs before first paint, inlined in <head>. Kept deliberately tiny: one
 * storage read, one matchMedia check, one attribute write.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s==="dark"||(!s&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light");}catch(e){}})();`;

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);

    // Follow the OS while the visitor has not made an explicit choice.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next: Theme = event.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice still applies for this page.
    }
    setTheme(next);
    track(EVENTS.themeChange, { label: next });
  }

  // Before mount the rendered markup must match the server output, which cannot
  // know the theme. The icon is hidden from assistive tech until it is accurate.
  const label = mounted
    ? theme === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme"
    : "Switch colour theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-graphite-soft transition-colors hover:bg-paper-warm hover:text-graphite [.on-dark_&]:text-sage [.on-dark_&]:hover:bg-forest-600 [.on-dark_&]:hover:text-ink-invert ${className}`}
    >
      <span className="sr-only">{label}</span>
      {/* Sun and moon are swapped by CSS on the root attribute, so the icon is
          correct in the pre-hydration paint as well as after. */}
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
        className="hidden [:root[data-theme=light]_&]:block"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
      </svg>
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="hidden [:root[data-theme=dark]_&]:block"
      >
        <path d="M20.5 14.6A8.6 8.6 0 1 1 9.4 3.5a6.9 6.9 0 0 0 11.1 11.1Z" />
      </svg>
    </button>
  );
}

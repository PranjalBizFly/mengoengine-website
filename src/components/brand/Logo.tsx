import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import mark from "@/app/icon.png";

/**
 * The Mengo lockup: official mark plus wordmark.
 *
 * The mark is the brand asset as supplied. `tone` only changes the wordmark,
 * since the lime mark is legible on both the forest and paper surfaces.
 */
export function Logo({
  tone = "dark",
  href = "/",
  className = "",
}: {
  tone?: "dark" | "light";
  href?: string | null;
  className?: string;
}) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={mark}
        alt=""
        aria-hidden
        priority
        sizes="32px"
        className="h-7 w-auto md:h-8"
      />
      <span
        className={`font-display text-wordmark font-semibold tracking-[-0.04em] md:text-wordmark-lg ${
          tone === "light" ? "text-paper" : "text-forest"
        }`}
      >
        {site.name}
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label={`${site.name} — home`} className="inline-flex shrink-0 items-center">
      {inner}
    </Link>
  );
}

/** The mark alone, for tight spaces and as a quiet section device. */
export function Mark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={mark}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={`h-auto w-auto ${className}`}
      style={{ height: size }}
    />
  );
}

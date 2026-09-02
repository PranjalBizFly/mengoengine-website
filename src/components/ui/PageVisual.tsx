import Image from "next/image";
import type { PageImageDescriptor } from "@/lib/images";

export interface PageVisualProps {
  image: PageImageDescriptor;
  priority?: boolean;
  className?: string;
  caption?: string;
  aspectRatio?: "16/9" | "16/10" | "21/9" | "auto";
}

/**
 * Responsive, accessible Real Human Photography showcase component.
 *
 * Renders high-quality editorial photography with:
 * - Zero Layout Shift (intrinsic aspect ratio & fixed dimensions)
 * - Accessible, contextually relevant alt text
 * - Responsive sizing across mobile (320px) to 4K desktop (1920px+)
 * - Subtle enterprise border, subtle depth styling, and photographer attribution
 */
export function PageVisual({
  image,
  priority = false,
  className = "",
  caption,
  aspectRatio = "16/9",
}: PageVisualProps) {
  const aspectClass =
    aspectRatio === "21/9"
      ? "aspect-[21/9]"
      : aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : "aspect-[16/9]";

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-sage/20 bg-forest-800 shadow-2xl transition-all duration-300 hover:border-lime/40 [.on-dark_&]:border-sage/20 [.on-dark_&]:bg-forest-800 ${className}`}
      data-reveal
    >
      <div className={`relative ${aspectClass} w-full overflow-hidden`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 1600}
          height={image.height || 900}
          priority={priority || image.priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1440px) 1200px, 1600px"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
        {image.category ? (
          <div className="pointer-events-none absolute left-4 top-4 z-10 hidden rounded-full border border-white/20 bg-forest/70 px-3 py-1 text-fine font-medium text-ink-invert backdrop-blur-md sm:inline-block">
            {image.category}
          </div>
        ) : null}
      </div>
      {/* `forest-dark` and `forest-card` were never defined as colour tokens, so those
          utilities emitted nothing and the caption rendered as sage text on the page
          background at 2.49:1. It sits on a real dark panel now. */}
      {caption || image.photographer ? (
        <figcaption className="flex items-center justify-between gap-4 border-t border-sage/15 bg-forest px-4 py-2 text-fine text-ink-invert">
          <span className="min-w-0">{caption || image.title}</span>
          {image.photographer ? (
            <span className="shrink-0 text-sage">Photo: {image.photographer}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Compact Visual Card for sidebars, grids, or tight containers.
 */
export function PageVisualMini({
  image,
  priority = false,
  className = "",
}: {
  image: PageImageDescriptor;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-sage/20 bg-forest-800 shadow-lg ${className}`}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 1600}
          height={image.height || 900}
          priority={priority}
          sizes="(max-width: 640px) 100vw, 480px"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

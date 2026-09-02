import Image from "next/image";
import type { ReactNode } from "react";
import type { PageImageDescriptor } from "@/lib/images";

export interface PageVisualProps {
  image: PageImageDescriptor;
  priority?: boolean;
  className?: string;
  caption?: string;
  aspectRatio?: "16/9" | "16/10" | "21/9" | "4/3" | "3/4" | "1/1" | "auto";
  /** Drift the photograph against the scroll. Off for above-the-fold media. */
  parallax?: boolean;
  /** A caption card overlapping the lower-left corner. Used sparingly. */
  badge?: ReactNode;
}

const ASPECT: Record<NonNullable<PageVisualProps["aspectRatio"]>, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  auto: "",
};

/**
 * The site's photograph.
 *
 * A framed, rounded plate with a dark caption bar rather than a bare image:
 * the frame is what lets a photograph sit inside an editorial column without
 * reading as a screenshot. Attribution travels with the picture, so a caption
 * can never drift away from the image it credits.
 */
export function PageVisual({
  image,
  priority = false,
  className = "",
  caption,
  aspectRatio = "16/9",
  parallax = false,
  badge,
}: PageVisualProps) {
  return (
    <div className={`relative ${badge ? "pb-10 sm:pb-0" : ""} ${className}`}>
      <figure
        className="media-frame group border border-sage/15"
        data-reveal="media"
        {...(parallax ? { "data-parallax": "" } : {})}
      >
        <div className={`relative w-full overflow-hidden ${ASPECT[aspectRatio]}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 1600}
            height={image.height || 900}
            priority={priority || image.priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1440px) 1200px, 1600px"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
          />
          {image.category ? (
            <span className="pointer-events-none absolute left-5 top-5 z-10 hidden rounded-full border border-white/20 bg-forest/70 px-3.5 py-1.5 text-fine font-medium text-ink-invert backdrop-blur-md sm:inline-block">
              {image.category}
            </span>
          ) : null}
        </div>
        {/* `forest-dark` and `forest-card` were never defined as colour tokens, so those
            utilities emitted nothing and the caption rendered as sage text on the page
            background at 2.49:1. It sits on a real dark panel now. */}
        {caption || image.photographer ? (
          <figcaption className="flex items-center justify-between gap-4 border-t border-sage/15 bg-forest px-5 py-3 text-fine text-ink-invert">
            <span className="min-w-0">{caption || image.title}</span>
            {image.photographer ? (
              <span className="shrink-0 text-sage">Photo: {image.photographer}</span>
            ) : null}
          </figcaption>
        ) : null}
      </figure>

      {badge ? (
        <div className="media-badge relative z-10 -mt-8 ml-4 mr-6 px-5 py-4 sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0 sm:mr-0 sm:max-w-[19rem]">
          {badge}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Compact plate for sidebars, grids and tight containers.
 */
export function PageVisualMini({
  image,
  priority = false,
  className = "",
  aspectRatio = "16/9",
}: {
  image: PageImageDescriptor;
  priority?: boolean;
  className?: string;
  aspectRatio?: PageVisualProps["aspectRatio"];
}) {
  return (
    <div
      className={`media-frame group border border-sage/15 ${className}`}
      data-reveal="media"
    >
      <div className={`relative w-full overflow-hidden ${ASPECT[aspectRatio ?? "16/9"]}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 1600}
          height={image.height || 900}
          priority={priority}
          sizes="(max-width: 640px) 100vw, 480px"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

/**
 * The photograph used as a section ground rather than as an object in the
 * column — a full-bleed plate behind inverted type.
 *
 * The picture is painted at full strength and a directional wash is laid over
 * it, chosen for where the type actually sits. The band beneath paints an
 * opaque forest ground, so text still resolves against a real dark colour for
 * assistive technology and for the automated contrast pass while a reader sees
 * a photograph rather than a tint. The image keeps its alt text: it is the
 * section's illustration, not a texture.
 */
export function PhotoBackdrop({
  image,
  priority = false,
  parallax = true,
  scrim = "content",
  position,
}: {
  image: PageImageDescriptor;
  priority?: boolean;
  parallax?: boolean;
  /**
   * Where the frame is darkened:
   *   hero     near-opaque left, close to clear right — for a hero's one column
   *   start    dark across the left three quarters, for content held left
   *   end      the same, mirrored
   *   content  even wash, for type that sits anywhere in the frame
   *   panel    light wash, because a translucent panel carries the contrast
   *   bottom   lower edge only, for a band that carries just a caption
   */
  scrim?: "hero" | "start" | "end" | "content" | "panel" | "bottom";
  /** Focal point, when the subject is not centred. */
  position?: string;
}) {
  return (
    <div
      className="photo-band-media"
      data-scrim={scrim}
      {...(parallax ? { "data-parallax": "" } : {})}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 2000}
        height={image.height || 1125}
        priority={priority || image.priority}
        sizes="100vw"
        className="h-full w-full object-cover"
        {...(position ? { style: { objectPosition: position } } : {})}
      />
    </div>
  );
}

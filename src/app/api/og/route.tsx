import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Social card generator.
 *
 * Every page gets a distinct card without shipping 500 image files. Rendered on
 * demand and cached at the edge; the design is the brand lockup on the forest
 * ground with the page title set in the display scale.
 */

export const runtime = "edge";

const FOREST = "#022018";
const LIME = "#a3e625";
const SAGE = "#8fa396";
const PAPER = "#f6f7f3";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("t") ?? site.tagline).slice(0, 140);
  const kicker = (searchParams.get("k") ?? site.name).slice(0, 48);

  // Long titles step down a size rather than overflowing the card.
  const fontSize = title.length > 92 ? 52 : title.length > 60 ? 62 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: FOREST,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 40, height: 40, background: LIME, borderRadius: 10 }} />
          <div style={{ display: "flex", color: PAPER, fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", width: 1, height: 26, background: SAGE, opacity: 0.4, marginLeft: 8 }} />
          <div
            style={{
              display: "flex",
              color: SAGE,
              fontSize: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginLeft: 8,
            }}
          >
            {kicker}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: PAPER,
            fontSize,
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-0.035em",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: LIME, fontSize: 24, letterSpacing: "-0.01em" }}>{site.promise}</div>
          <div style={{ display: "flex", color: SAGE, fontSize: 22 }}>mengoengine.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

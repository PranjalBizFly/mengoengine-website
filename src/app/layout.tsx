import type { Metadata, Viewport } from "next";
import { Sora, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { BackToTop } from "@/components/layout/BackToTop";
import { THEME_INIT_SCRIPT } from "@/components/layout/ThemeToggle";
import { LeadModalProvider } from "@/components/forms/LeadModal";
import { RevealProvider } from "@/components/ui/RevealProvider";
import { JsonLd } from "@/components/ui/primitives";
import { organizationSchema, websiteSchema } from "@/seo/schema";
import { site } from "@/lib/site";

/**
 * Three families, each with a job: Sora sets display type, Instrument Sans
 * carries body and UI, Instrument Serif italic is reserved for editorial
 * emphasis. Subsets and weights are pinned to what the design system uses so
 * nothing is downloaded that never renders.
 */
const sora = Sora({
  subsets: ["latin"],
  // 600 only: nothing on the site renders Sora at any other weight, verified
  // by walking computed styles across every page type.
  weight: ["600"],
  variable: "--font-sora",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#022018",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies the stored or system theme before first paint. Inline and
            tiny by design: a deferred script would flash the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LeadModalProvider>
          <SiteChrome>
            <Header />
          </SiteChrome>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteChrome>
            <Footer />
          </SiteChrome>
        </LeadModalProvider>
        <BackToTop />
        <RevealProvider />
      </body>
    </html>
  );
}

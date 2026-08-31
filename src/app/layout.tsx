import type { Metadata, Viewport } from "next";
import { Sora, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  weight: ["400", "600", "700"],
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
    >
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LeadModalProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LeadModalProvider>
        <RevealProvider />
      </body>
    </html>
  );
}

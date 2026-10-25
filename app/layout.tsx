import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--hb-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--hb-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hardtobear.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2EFEA",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hard To Bear | Websites for pubs, garages and local trades",
  description:
    "Websites for pubs, garages, driving instructors and barbers. Fixed prices, live in seven days, and you change it by sending a text.",
  authors: [{ name: "Russell Westgarth" }],
  openGraph: {
    title: "Hard To Bear | Websites that pull a crowd",
    description: "Fixed prices, live in seven days, and you change it by sending a text.",
    url: siteUrl,
    siteName: "Hard To Bear",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

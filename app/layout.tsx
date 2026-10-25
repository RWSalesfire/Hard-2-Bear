import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// One family for the whole brand: Archivo, with its width axis for the wide display cuts.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--hb-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hardtobear.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hard To Bear | Websites for pubs, garages and local trades",
  description:
    "Websites for pubs, garages, driving instructors and barbers. Fixed prices, live in seven days, and you change it by sending a text.",
  authors: [{ name: "Russell Westgarth" }],
  openGraph: {
    title: "Hard To Bear | Straight-talking websites for local trades",
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
    <html lang="en-GB" className={archivo.variable}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

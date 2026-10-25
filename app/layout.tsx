import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Kalam } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-text",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chalk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hardtobear.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0a08",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hard To Bear | Websites for pubs, garages and local trades",
  description:
    "Websites for pubs, garages, driving instructors and barbers. Fixed prices, live in seven days, and you change it by sending a text.",
  authors: [{ name: "Russell Westgarth" }],
  openGraph: {
    title: "Hard To Bear | Websites for local trades",
    description:
      "Fixed prices, live in seven days, and you change it by sending a text.",
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
    <html lang="en-GB" className={`${hanken.variable} ${kalam.variable}`}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

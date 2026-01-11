import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Hard To Bear | No-BS Sales Consulting for SMEs | Russell Westgarth",
  description: "The truth about your sales team is hard to bear. Russell Westgarth helps SME sales leaders build process-driven sales operations that don't rely on superhero reps or blind hope.",
  keywords: ["sales consulting", "sales process", "SME sales", "sales leadership", "sales operations", "B2B sales", "sales training"],
  authors: [{ name: "Russell Westgarth" }],
  openGraph: {
    title: "Hard To Bear | No-BS Sales Consulting for SMEs",
    description: "Direct, honest sales consulting for SME leaders. Build a sales operation that actually scales.",
    url: "https://hardtobear.co.uk",
    siteName: "Hard To Bear",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard To Bear | No-BS Sales Consulting",
    description: "Direct, honest sales consulting for SME leaders who want structure, not hope.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

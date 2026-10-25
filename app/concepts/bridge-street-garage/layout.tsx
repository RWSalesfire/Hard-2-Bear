import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from 'next/font/google';
import './garage.css';

const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--gs-sans', display: 'swap' });
const cond = IBM_Plex_Sans_Condensed({ subsets: ['latin'], weight: ['500', '700'], variable: '--gs-cond', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--gs-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'Bridge Street Garage | Concept garage website by Hard To Bear',
  description: 'A concept website for an independent garage, made by Hard To Bear. Bridge Street Garage is not a real business.',
  robots: { index: false, follow: false },
};

export default function GarageLayout({ children }: { children: React.ReactNode }) {
  return <div className={`gs ${sans.variable} ${cond.variable} ${mono.variable}`}>{children}</div>;
}

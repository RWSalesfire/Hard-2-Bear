import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './lamplighter.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--lp-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--lp-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Lamplighter | Concept pub website by Hard To Bear',
  description: 'A concept website for a village pub, made by Hard To Bear. The Lamplighter is not a real pub.',
  robots: { index: false, follow: false },
};

export default function LamplighterLayout({ children }: { children: React.ReactNode }) {
  return <div className={`lp ${fraunces.variable} ${manrope.variable}`}>{children}</div>;
}

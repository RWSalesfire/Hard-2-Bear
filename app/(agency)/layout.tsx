import { Archivo } from 'next/font/google';

// Hard To Bear's own pages. The font lives here, not in the root layout,
// so client concept sites don't download a font they never use.
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--hb-sans',
  display: 'swap',
});

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  return <div className={`hb-root ${archivo.variable}`}>{children}</div>;
}

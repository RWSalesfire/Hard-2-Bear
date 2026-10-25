import type { MetadataRoute } from 'next';
import { TRADES } from '@/lib/trades';

const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://hardtobear.uk';

// Concept sites are left out on purpose: they're noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, priority: 1 }, ...TRADES.map((t) => ({ url: `${site}/${t.slug}`, priority: 0.8 }))];
}

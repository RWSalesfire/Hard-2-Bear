// The concept sites, shown on the homepage and the trade pages.
// Speed figures are the median of three Google Lighthouse mobile runs with real 4G and
// mid-range-phone throttling (devtools mode), October 2026. Re-measure after big changes.

export type Work = {
  slug: 'lamplighter' | 'garage';
  href: string;
  name: string;
  kind: string;
  /** The client's own colour, so the work reads as theirs. */
  bg: string;
  shots: string[];
  /** The clever bits, in a few words each. */
  does: string[];
  speed: { score: number; ready: string };
};

export const WORK: Work[] = [
  {
    slug: 'lamplighter',
    href: '/concepts/the-lamplighter',
    name: 'The Lamplighter',
    kind: 'a village pub',
    bg: '#8c2a1e',
    shots: ['lamplighter-home', 'lamplighter-menu', 'lamplighter-visit'],
    does: ['Turns itself dark at sunset', 'Counts down to last orders', '“Raining? The fire’s lit”', 'Vegan and gluten-free filters'],
    speed: { score: 92, ready: '2.3s' },
  },
  {
    slug: 'garage',
    href: '/concepts/bridge-street-garage',
    name: 'Bridge Street Garage',
    kind: 'an independent garage',
    bg: '#1f3a93',
    shots: ['garage-home', 'garage-card', 'garage-how'],
    does: ['Prices add up as you tick', 'Fixed-price stamp, no surprises', 'Sends the job card by text', 'MOT reminders'],
    speed: { score: 92, ready: '1.7s' },
  },
];

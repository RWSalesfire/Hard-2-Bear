'use client';

import { useState } from 'react';

type Mat = { name: string; price: string; per?: string; line: string; back: string[]; pick?: boolean };

const MATS: Mat[] = [
  {
    name: 'Starter',
    price: '£1,500',
    line: 'Up to five pages, with your Google listing sorted.',
    back: ['Up to 5 pages', 'Google Business Profile set up', 'Tap to call and directions', 'You send the words and photos', '2 rounds of changes'],
  },
  {
    name: 'Local Pro',
    price: '£2,400',
    line: 'We write it, and you can change menus and prices yourself.',
    back: ['Up to 8 pages', 'Words written for you', 'Menus, prices and hours you can edit', 'Google reviews on your site', '1 month of care included', '3 rounds of changes'],
    pick: true,
  },
  {
    name: 'Full Works',
    price: '£3,600',
    line: 'Bookings built in, events, and three months of care.',
    back: ['Up to 12 pages', 'Bookings linked to your system', 'Events and news', 'Unlimited changes for 30 days', '3 months of care included'],
  },
  {
    name: 'Care plan',
    price: '£50',
    per: 'a month',
    line: 'Text us a change and it’s live the same day.',
    back: ['Hosting and your domain', 'Security updates', 'Up to 30 minutes of changes a month', 'A monthly report of calls and bookings', 'About £1.64 a day'],
  },
];

export default function BeerMats() {
  const [flipped, setFlipped] = useState<boolean[]>(MATS.map(() => false));

  const flip = (i: number) => setFlipped((f) => f.map((v, j) => (j === i ? !v : v)));

  return (
    <ul className="mats">
      {MATS.map((m, i) => (
        <li key={m.name} className="mat-cell">
          <button
            type="button"
            className={`mat${m.pick ? ' mat--pick' : ''}`}
            aria-pressed={flipped[i]}
            onClick={() => flip(i)}
            aria-label={`${m.name}, ${m.price}${m.per ? ' ' + m.per : ''}. ${flipped[i] ? 'Showing what’s included. Turn back over' : 'Turn over to see what’s included'}`}
          >
            <span className="mat__inner">
              <span className="mat__face mat__face--front" aria-hidden={flipped[i]}>
                <span className="mat__name">{m.name}</span>
                <span className="mat__price">
                  {m.price}
                  {m.per && <small> {m.per}</small>}
                </span>
                <span className="mat__line">{m.line}</span>
                <span className="mat__turn">Turn it over</span>
              </span>
              <span className="mat__face mat__face--back" aria-hidden={!flipped[i]}>
                <span className="mat__list">
                  {m.back.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </span>
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

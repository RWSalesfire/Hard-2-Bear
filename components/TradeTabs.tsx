'use client';

import { useRef, useState } from 'react';

type Band = { q: string; what: string; note: string; pack: string };
type Trade = { id: string; name: string; also: string; intro: string; bands: Band[] };

export const TRADES: Trade[] = [
  {
    id: 'pubs',
    name: 'Pubs',
    also: 'and restaurants',
    intro: 'Built around the five things people ring a pub to ask.',
    bands: [
      { q: 'Open now?', what: 'Opening hours that match Google', note: 'Change them by text, same day', pack: 'Every package' },
      { q: 'What’s on?', what: 'Menu and specials you can change weekly', note: 'Kept in a Google Sheet you already know', pack: 'Local Pro' },
      { q: 'Can we book?', what: 'Table bookings through ResDiary or OpenTable', note: 'We plug into the one you use', pack: 'Full Works' },
      { q: 'Quiz night?', what: 'Events and sports fixtures', note: 'Posted to your Google profile too', pack: 'Full Works' },
      { q: 'Dogs allowed?', what: 'Beer garden, dogs, parking and access', note: 'The questions that tie up your phone', pack: 'Every package' },
    ],
  },
  {
    id: 'garages',
    name: 'Garages',
    also: 'and mechanics',
    intro: 'For people with a warning light on and no idea who to ring.',
    bands: [
      { q: 'Can you fix it?', what: 'Services with starting prices', note: 'MOT, servicing, tyres, diagnostics', pack: 'Every package' },
      { q: 'How much?', what: 'Quote requests with the registration', note: 'Lands on your phone as a text', pack: 'Local Pro' },
      { q: 'When can I come in?', what: 'MOT booking and reminders', note: 'Using the booking tool you already have', pack: 'Full Works' },
      { q: 'Any good?', what: 'Your Google reviews on your own site', note: 'Pulled in automatically', pack: 'Local Pro' },
      { q: 'Where are you?', what: 'Map, directions and opening hours', note: 'One tap to ring, one tap to get there', pack: 'Every package' },
    ],
  },
  {
    id: 'driving',
    name: 'Driving instructors',
    also: 'and driving schools',
    intro: 'You don’t have premises, so the site has to do the finding for you.',
    bands: [
      { q: 'How much?', what: 'Lesson prices and block deals', note: 'Manual and automatic', pack: 'Every package' },
      { q: 'Do you cover me?', what: 'A page for each town you teach in', note: 'So you show up in every one of them', pack: 'Local Pro' },
      { q: 'Any good?', what: 'Pass board and pupil reviews', note: 'With your pupils’ permission', pack: 'Local Pro' },
      { q: 'When can I start?', what: 'Lesson booking', note: 'Through Calendly or the app you use', pack: 'Full Works' },
      { q: 'Are you approved?', what: 'Your DVSA approved instructor details', note: 'Up front, where parents look', pack: 'Every package' },
    ],
  },
  {
    id: 'barbers',
    name: 'Barbers',
    also: 'and salons',
    intro: 'Most people decide on the walk past. The rest decide on their phone.',
    bands: [
      { q: 'Can I get in today?', what: 'A book now button on every screen', note: 'Through Fresha, Booksy or Treatwell', pack: 'Every package' },
      { q: 'How much?', what: 'Your price list', note: 'Change it by text', pack: 'Every package' },
      { q: 'Any good?', what: 'A gallery of your real cuts', note: 'Your photos, never stock', pack: 'Local Pro' },
      { q: 'Walk-ins?', what: 'Walk-in times and how the queue works', note: 'Fewer calls in the middle of a fade', pack: 'Every package' },
      { q: 'Who’s cutting?', what: 'The team, each with their own booking link', note: 'So regulars get their regular', pack: 'Full Works' },
    ],
  },
];

export default function TradeTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % TRADES.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + TRADES.length) % TRADES.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TRADES.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const trade = TRADES[active];

  return (
    <div className="trades__body">
      <div className="trades__tabs" role="tablist" aria-label="Trades" aria-orientation="vertical">
        {TRADES.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className="trades__tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <strong>{t.name}</strong>
            <span>{t.also}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${trade.id}`} aria-labelledby={`tab-${trade.id}`}>
        <p className="trades__intro">{trade.intro}</p>
        <ul className="trades__bands">
          {trade.bands.map((b) => (
            <li key={b.q} className="trades__band">
              <span className="trades__q">{b.q}</span>
              <span className="trades__what">
                <strong>{b.what}</strong>
                <span>{b.note}</span>
              </span>
              <span className="trades__pack">{b.pack}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

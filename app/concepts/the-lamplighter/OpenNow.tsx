'use client';

import { useEffect, useState } from 'react';
import { HOURS, KITCHEN_HOURS } from './data';

function fmt(mins: number) {
  const m = mins % (24 * 60);
  if (m === 0) return 'midnight';
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${mm ? `:${String(mm).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
}

/** UK time now, as day of week and minutes after midnight. */
function ukNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, mins: Number(get('hour')) * 60 + Number(get('minute')) };
}

function status() {
  const { day, mins } = ukNow();
  const today = HOURS[day];
  const yesterday = HOURS[(day + 6) % 7];
  if (yesterday.close > 24 * 60 && mins < yesterday.close - 24 * 60) {
    return { open: true, text: `Open now until ${fmt(yesterday.close)}` };
  }
  if (mins >= today.open && mins < today.close) return { open: true, text: `Open now until ${fmt(today.close)}` };
  if (mins < today.open) return { open: false, text: `Closed. Opens at ${fmt(today.open)} today` };
  const tomorrow = HOURS[(day + 1) % 7];
  return { open: false, text: `Closed. Opens ${fmt(tomorrow.open)} tomorrow` };
}

function kitchen() {
  const { day, mins } = ukNow();
  const slots = KITCHEN_HOURS[day];
  const now = slots.find(([o, c]) => mins >= o && mins < c);
  if (now) return `Kitchen open until ${fmt(now[1])}`;
  const next = slots.find(([o]) => mins < o);
  if (next) return `Kitchen opens at ${fmt(next[0])}`;
  return 'Kitchen closed for today';
}

export default function OpenNow() {
  const [s, setS] = useState<{ open: boolean; text: string; kitchen: string } | null>(null);
  useEffect(() => {
    const tick = () => setS({ ...status(), kitchen: kitchen() });
    tick();
    const t = window.setInterval(tick, 60_000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="lp-status" aria-live="polite">
      <p className={`lp-open${s ? (s.open ? ' is-open' : ' is-closed') : ''}`}>
        <span className="lp-open__dot" aria-hidden="true" />
        {s ? s.text : 'Open every day from 12'}
      </p>
      <p className="lp-kitchen">{s ? s.kitchen : 'Food served every day'}</p>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { HOURS } from './data';

function fmt(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${m ? `:${String(m).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
}

function status() {
  const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (t: string) => p.find((x) => x.type === t)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const mins = Number(get('hour')) * 60 + Number(get('minute'));
  const today = HOURS[day];
  if (today.open !== null && today.close !== null && mins >= today.open && mins < today.close) {
    const sameDay = mins < 10 * 60 && day !== 6;
    return { open: true, text: `Open now until ${fmt(today.close)}`, sub: sameDay ? 'Ring before 10 and we can usually look at it today' : 'Ring us, we’ll tell you the next free slot' };
  }
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7;
    const h = HOURS[d];
    if (h.open === null) continue;
    if (i === 0 && mins >= h.open) continue;
    const when = i === 0 ? 'today' : i === 1 ? 'tomorrow' : h.day;
    return { open: false, text: `Closed. Opens ${fmt(h.open)} ${when}`, sub: 'Send a job card now and we’ll reply first thing' };
  }
  return { open: false, text: 'Closed', sub: '' };
}

export default function OpenNow() {
  const [s, setS] = useState<ReturnType<typeof status> | null>(null);
  useEffect(() => {
    const tick = () => setS(status());
    tick();
    const t = window.setInterval(tick, 60_000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="gs-status" aria-live="polite">
      <p className={`gs-status__pill${s ? (s.open ? ' is-open' : ' is-closed') : ''}`}>{s ? s.text : 'Mon to Fri 8 to 5:30, Sat 8 to 12'}</p>
      {s?.sub && <p className="gs-status__sub">{s.sub}</p>}
    </div>
  );
}

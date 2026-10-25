'use client';

import { useEffect, useState } from 'react';
import { PUB } from './data';

type Now = { temp: number; code: number; isDay: boolean };

const RAIN = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
const CLEAR = [0, 1, 2];

// ?weather=sun|rain|cold shows a state on demand, for pitching on a grey day.
const DEMO: Record<string, Now> = {
  sun: { temp: 21, code: 0, isDay: true },
  rain: { temp: 11, code: 63, isDay: true },
  cold: { temp: 3, code: 3, isDay: true },
};

/** What the weather means for a pint. Returns nothing when there's nothing worth saying. */
function line({ temp, code, isDay }: Now): { text: string; href?: string; cta?: string } | null {
  const t = `${Math.round(temp)}°C`;
  if (RAIN.includes(code)) return { text: `Raining in ${PUB.town}. The fire’s lit.`, href: '#book', cta: 'Grab a table' };
  if (CLEAR.includes(code) && temp >= 15)
    return isDay
      ? { text: `${t} and sunny. The garden’s open.`, href: '#garden', cta: 'Take a look' }
      : { text: `${t} and clear. The garden’s lit till late.`, href: '#garden', cta: 'Take a look' };
  if (temp <= 8) return { text: `${t} out there. The fire’s lit.`, href: '#book', cta: 'Grab a table' };
  return null;
}

export default function Weather() {
  const [now, setNow] = useState<Now | null>(null);

  useEffect(() => {
    const demo = new URLSearchParams(window.location.search).get('weather');
    if (demo && DEMO[demo]) {
      setNow(DEMO[demo]);
      return;
    }
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 5000);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${PUB.lat}&longitude=${PUB.lng}&current=temperature_2m,weather_code,is_day&timezone=Europe%2FLondon`;
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.current) setNow({ temp: d.current.temperature_2m, code: d.current.weather_code, isDay: d.current.is_day === 1 });
      })
      .catch(() => {})
      .finally(() => window.clearTimeout(timer));
    return () => ctrl.abort();
  }, []);

  const l = now && line(now);
  if (!l) return null;
  return (
    <p className="lp-weather" role="status">
      <span>{l.text}</span>
      {l.href && <a href={l.href}>{l.cta}</a>}
    </p>
  );
}

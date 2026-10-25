'use client';

import { useEffect, useState } from 'react';

type Time = 'day' | 'night';

/** Lets a visitor (or Russell, mid-pitch) see the pub by day or by night, whatever the real time is. */
export default function TimeToggle() {
  const [time, setTime] = useState<Time | null>(null);

  useEffect(() => {
    setTime((document.querySelector<HTMLElement>('.lp')?.dataset.time as Time) || 'day');
  }, []);

  const flip = () => {
    const root = document.querySelector<HTMLElement>('.lp');
    if (!root || !time) return;
    const next: Time = time === 'day' ? 'night' : 'day';
    const apply = () => {
      root.dataset.time = next;
      setTime(next);
    };
    try {
      sessionStorage.setItem('lp-time', next);
    } catch {}
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !calm) doc.startViewTransition(apply);
    else apply();
  };

  if (!time) return null;
  return (
    <button type="button" className="lp-time" onClick={flip}>
      {time === 'day' ? 'See it at night' : 'See it by day'}
    </button>
  );
}

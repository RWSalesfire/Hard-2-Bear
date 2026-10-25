'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { CARD_JOBS, GARAGE, MOT_WITH_SERVICE, SIZES, priceFor, type Size } from './data';

const money = (n: number) => `£${n}`;

/** The hero: tick the jobs, get a fixed price, send it to the garage. The no-surprises promise as a thing you can use. */
export default function JobCard() {
  const [reg, setReg] = useState('');
  const [size, setSize] = useState<Size>('medium');
  const [picked, setPicked] = useState<string[]>(['mot', 'full']);
  const [date, setDate] = useState('');
  const totalRef = useRef<HTMLSpanElement>(null);
  const shown = useRef(-1);

  useEffect(() => {
    setDate(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date()));
  }, []);

  const lines = useMemo(() => {
    const withService = picked.includes('full');
    return CARD_JOBS.filter((j) => picked.includes(j.id)).map((j) => {
      const deal = j.id === 'mot' && withService;
      return { ...j, cost: deal ? MOT_WITH_SERVICE : priceFor(j, size), deal };
    });
  }, [picked, size]);
  const total = lines.reduce((t, l) => t + l.cost, 0);
  const from = lines.some((l) => l.from);

  // The total rolls to its new figure. A few lines of requestAnimationFrame, so no animation library on the first screen.
  useEffect(() => {
    const el = totalRef.current;
    if (!el) return;
    const from = shown.current < 0 ? total : shown.current;
    shown.current = total;
    if (from === total || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = String(total);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 600);
      const eased = 1 - (1 - t) * (1 - t);
      el.textContent = String(Math.round(from + (total - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [total]);

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lines.length) return;
    const body = [
      `Hi, here's my job card${reg ? ` for ${reg}` : ''} (${size} car):`,
      ...lines.map((l) => `- ${l.name}: ${l.from ? 'from ' : ''}${money(l.cost)}`),
      `Total: ${from ? 'from ' : ''}${money(total)}`,
      'When can you fit me in?',
    ].join('\n');
    const phone = window.matchMedia('(pointer: coarse)').matches;
    window.location.href = phone
      ? `sms:${GARAGE.sms}?&body=${encodeURIComponent(body)}`
      : `mailto:${GARAGE.email}?subject=${encodeURIComponent(`Job card${reg ? `: ${reg}` : ''}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="gs-card" onSubmit={send} aria-label="Build your job card">
      <div className="gs-card__head">
        <p className="gs-card__title">Job card</p>
        <p className="gs-mono">
          No. 0412{date && <> · {date}</>}
        </p>
      </div>

      <label className="gs-plate">
        <span className="gs-plate__band" aria-hidden="true">
          UK
        </span>
        <span className="sr-only">Your registration (optional)</span>
        <input
          value={reg}
          onChange={(e) => setReg(e.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, '').slice(0, 8))}
          placeholder="YOUR REG"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          inputMode="text"
        />
      </label>

      <fieldset className="gs-sizes">
        <legend className="gs-label">Car size</legend>
        <div className="gs-sizes__opts">
          {SIZES.map((s) => (
            <label key={s.id} className="gs-size">
              <input type="radio" name="size" value={s.id} checked={size === s.id} onChange={() => setSize(s.id)} />
              <span>{s.label}</span>
            </label>
          ))}
        </div>
        <p className="gs-sizes__hint">{SIZES.find((s) => s.id === size)?.hint}</p>
      </fieldset>

      <fieldset className="gs-jobs">
        <legend className="gs-label">What it needs</legend>
        {CARD_JOBS.map((j) => {
          const on = picked.includes(j.id);
          const line = lines.find((l) => l.id === j.id);
          const cost = line ? line.cost : j.id === 'mot' && picked.includes('full') ? MOT_WITH_SERVICE : priceFor(j, size);
          return (
            <label key={j.id} className="gs-job" style={{ '--i': 2 + CARD_JOBS.indexOf(j) } as React.CSSProperties}>
              <input type="checkbox" checked={on} onChange={() => toggle(j.id)} />
              <span className="gs-job__box" aria-hidden="true" />
              <span className="gs-job__name">
                {j.name}
                <small>{j.id === 'mot' && picked.includes('full') ? `£${MOT_WITH_SERVICE} with a full service` : j.note}</small>
              </span>
              <span className="gs-job__lead" aria-hidden="true" />
              <span className="gs-job__price">
                {j.from && <small>from </small>}
                {money(cost)}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="gs-card__total" aria-live="polite">
        <span className="gs-label">{from ? 'Total, from' : 'Total, fixed'}</span>
        <span className="gs-total">
          £<span ref={totalRef}>{total}</span>
        </span>
        {total > 0 && (
          // Keyed by total so the stamp lands again (CSS) whenever the price changes.
          <span className="gs-stamp" key={total} aria-hidden="true">
            {from ? 'Price first' : 'Fixed price'}
          </span>
        )}
      </div>
      <p className="gs-card__small">
        {total > 0
          ? 'VAT included. If we find anything else, we ring with a price first.'
          : 'Tick what you need and the price adds up here.'}
      </p>

      <div className="gs-card__actions">
        <button type="submit" className="gs-btn" disabled={!lines.length}>
          Send this to us
        </button>
        <a className="gs-btn gs-btn--ghost" href={GARAGE.phoneHref}>
          Call {GARAGE.phone}
        </a>
      </div>
    </form>
  );
}

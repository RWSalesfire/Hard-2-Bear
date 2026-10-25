'use client';

import { useState } from 'react';

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="hb-faq">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className={`hb-faq__item${isOpen ? ' is-open' : ''}`} data-reveal>
            <h3>
              <button
                className="hb-faq__q"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <span className="hb-faq__icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div className="hb-faq__a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} {...({ inert: isOpen ? undefined : '' } as Record<string, string | undefined>)}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

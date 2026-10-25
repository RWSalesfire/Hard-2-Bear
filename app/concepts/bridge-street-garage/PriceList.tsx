'use client';

import { useRef, useState } from 'react';
import { PRICE_LIST, SIZES, priceFor, type Size } from './data';

/** The full price list, by tab, with the car size switch for servicing. */
export default function PriceList() {
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<Size>('medium');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = PRICE_LIST[active];
  const sized = t.rows.some((r) => typeof r.price !== 'number');

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % PRICE_LIST.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + PRICE_LIST.length) % PRICE_LIST.length;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="gs-prices">
      <div className="gs-tabs" role="tablist" aria-label="Price lists">
        {PRICE_LIST.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`price-tab-${p.id}`}
            aria-selected={i === active}
            aria-controls="price-panel"
            tabIndex={i === active ? 0 : -1}
            className="gs-tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div id="price-panel" role="tabpanel" aria-labelledby={`price-tab-${t.id}`}>
        <p className="gs-prices__intro">{t.intro}</p>
        {sized && (
          <div className="gs-sizes__opts gs-sizes__opts--list" role="radiogroup" aria-label="Car size">
            {SIZES.map((s) => (
              <label key={s.id} className="gs-size">
                <input type="radio" name="list-size" checked={size === s.id} onChange={() => setSize(s.id)} />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        )}
        <ul className="gs-rows">
          {t.rows.map((r) => (
            <li key={r.id} className="gs-row">
              <span className="gs-row__name">
                {r.name}
                <small>{r.note}</small>
              </span>
              <span className="gs-job__lead" aria-hidden="true" />
              <span className="gs-row__price">
                {r.from && <small>from </small>}£{priceFor(r, size)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

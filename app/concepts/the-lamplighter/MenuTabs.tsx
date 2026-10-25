'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DIET_LABELS, MENU } from './data';

gsap.registerPlugin(useGSAP);

export default function MenuTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const list = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.lp-dish', { y: 14, autoAlpha: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' });
      });
      return () => mm.revert();
    },
    { scope: list, dependencies: [active], revertOnUpdate: true }
  );

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % MENU.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + MENU.length) % MENU.length;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const m = MENU[active];
  return (
    <div className="lp-menu">
      <div className="lp-menu__tabs" role="tablist" aria-label="Menus">
        {MENU.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`menu-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls="menu-panel"
            tabIndex={i === active ? 0 : -1}
            className="lp-chip"
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id="menu-panel" role="tabpanel" aria-labelledby={`menu-tab-${m.id}`}>
        <p className="lp-menu__updated">{m.updated}</p>
        <ul className="lp-menu__list" ref={list}>
          {m.dishes.map((d) => (
            <li key={d.name} className="lp-dish">
              <span className="lp-dish__name">
                {d.name}
                {d.note && <span className="lp-dish__note">{d.note}</span>}
                {d.diet && (
                  <span className="lp-diets">
                    {d.diet.map((t) => (
                      <abbr key={t} className="lp-diet" title={DIET_LABELS[t]}>
                        {t}
                      </abbr>
                    ))}
                  </span>
                )}
              </span>
              <span className="lp-dish__price">{d.price}</span>
            </li>
          ))}
        </ul>
        <p className="lp-menu__allergens">
          V vegetarian · VG vegan · GF gluten-free. Tell us about any allergies when you order. Our full allergen guide is
          behind the bar, and we&rsquo;ll happily talk you through it.
        </p>
      </div>
    </div>
  );
}

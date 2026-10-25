'use client';

import { useEffect, useRef, useState } from 'react';
import { Arrow, BearMark } from './Icons';

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#trades', label: 'Trades' },
  { href: '#prices', label: 'Prices' },
  { href: '#questions', label: 'Questions' },
];

function Burger({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      {open ? (
        <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function TopBar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      openBtn.current?.focus();
    };
  }, [open]);

  return (
    <header className={`hb-top${stuck ? ' is-stuck' : ''}`}>
      <div className="hb-wrap hb-top__inner">
        <a className="hb-logo" href="#top">
          <BearMark />
          Hard To Bear
        </a>
        <nav className="hb-top__links" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="hb-btn hb-top__cta" href="#stool">
          Pull up a stool
          <span className="hb-btn__arrow">
            <Arrow size={14} />
          </span>
        </a>
        <button ref={openBtn} className="hb-menu-btn" aria-expanded={open} aria-controls="hb-menu" onClick={() => setOpen(true)}>
          <Burger open={false} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
      <div id="hb-menu" className="hb-menu" hidden={!open} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="hb-menu__top">
          <span className="hb-logo">
            <BearMark />
            Hard To Bear
          </span>
          <button ref={closeBtn} className="hb-menu-btn" onClick={() => setOpen(false)}>
            <Burger open />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="hb-menu__links" aria-label="Menu">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="hb-btn" href="#stool" onClick={() => setOpen(false)}>
          Pull up a stool
          <span className="hb-btn__arrow">
            <Arrow size={14} />
          </span>
        </a>
      </div>
    </header>
  );
}

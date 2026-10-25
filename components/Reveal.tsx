'use client';

import { useEffect } from 'react';

/** Marks the page as scripted and reveals [data-rise] groups and .shutter images as they enter. */
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const targets = document.querySelectorAll('[data-rise], .shutter');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return null;
}

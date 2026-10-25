'use client';

import { useEffect } from 'react';

type Kit = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
};
type MM = ReturnType<Kit['gsap']['matchMedia']>;

let kit: Promise<Kit> | null = null;

/**
 * GSAP, fetched once the page has painted and gone quiet, so it never holds up
 * the first screen on a slow phone. Entrance animations live in CSS for the same reason.
 */
export function loadMotion(): Promise<Kit> {
  if (!kit)
    kit = new Promise((resolve) => {
      const go = () =>
        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, s]) => {
          g.gsap.registerPlugin(s.ScrollTrigger);
          resolve({ gsap: g.gsap, ScrollTrigger: s.ScrollTrigger });
        });
      const idle = () => {
        if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(go, { timeout: 2000 });
        else setTimeout(go, 300);
      };
      if (document.readyState === 'complete') idle();
      else window.addEventListener('load', idle, { once: true });
    });
  return kit;
}

/** Sets up motion once GSAP is in, inside a matchMedia that is reverted on unmount or when deps change. */
export function useMotion(setup: (k: Kit & { mm: MM }) => void, deps: unknown[] = []) {
  useEffect(() => {
    let mm: MM | undefined;
    let gone = false;
    loadMotion().then((k) => {
      if (gone) return;
      mm = k.gsap.matchMedia();
      setup({ ...k, mm });
    });
    return () => {
      gone = true;
      mm?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

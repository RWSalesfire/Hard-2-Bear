'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Page motion for the concept garage. Everything is readable without it. */
export default function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // The job card prints: the sheet slides up out of the printer, then each line types on.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.gs-hero__text > *', { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08 })
        .from('.gs-card', { yPercent: 8, autoAlpha: 0, duration: 0.8 }, 0.15)
        .from('.gs-card__carbon', { x: 0, y: 0, autoAlpha: 0, duration: 0.6 }, 0.6)
        .from('.gs-card .gs-plate, .gs-card .gs-sizes, .gs-job, .gs-card__total, .gs-card__small, .gs-card__actions', { x: -8, autoAlpha: 0, duration: 0.35, stagger: 0.05 }, 0.45);

      // Each step gets stamped as it scrolls in.
      gsap.utils.toArray<HTMLElement>('.gs-step__stamp').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.8, rotate: -20, autoAlpha: 0 },
          { scale: 1, rotate: -6, autoAlpha: 1, duration: 0.4, ease: 'back.out(2.4)', scrollTrigger: { trigger: el, start: 'top 80%', once: true } }
        );
      });

      // Sections: once each.
      gsap.set('[data-reveal]', { y: 24, autoAlpha: 0 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out', overwrite: true }),
      });

      // The price leaders draw out to the price.
      gsap.utils.toArray<HTMLElement>('.gs-row .gs-job__lead').forEach((el) => {
        gsap.from(el, { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
      });
    });
    return () => mm.revert();
  });
  return null;
}

'use client';

import { useMotion } from '@/lib/motion';

/** Page motion. Everything is readable without it; reduced motion skips the travel. */
export default function Motion() {
  useMotion(({ gsap, ScrollTrigger, mm }) => {
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // The hero's entrance is in globals.css, so it plays before any script loads.

      // Trades marquee drifts on its own and speeds up with the scroll.
      const track = document.querySelector<HTMLElement>('.hb-marquee__track');
      if (track) {
        const loop = gsap.to('.hb-marquee__track', { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
        ScrollTrigger.create({
          trigger: '.hb-marquee',
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => gsap.to(loop, { timeScale: 1 + Math.abs(self.getVelocity()) / 600, duration: 0.3, overwrite: true, onComplete: () => { gsap.to(loop, { timeScale: 1, duration: 0.8 }); } }),
        });
      }

      // Sections: parts rise into place once.
      gsap.set('[data-reveal]', { y: 32, autoAlpha: 0 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 90%',
        once: true,
        onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out', overwrite: true }),
      });

      // Work: the phones drift at different speeds inside the card.
      gsap.utils.toArray<HTMLElement>('.hb-work__shot').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60 + i * 30 },
          { y: -20 - i * 30, ease: 'none', scrollTrigger: { trigger: '.hb-work__media', start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      });

      // Guarantee figures count up.
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        gsap.to(obj, {
          v: end,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
          },
        });
      });
    });
  });
  return null;
}

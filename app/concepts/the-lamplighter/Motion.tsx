'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Page motion for the concept pub. Content is visible without it; reduced motion skips the travel. */
export default function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero: headline lines rise out of their masks, then the details follow.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.lp-hero__line > span', { yPercent: 110, duration: 0.9, stagger: 0.08 })
        .from('.lp-hero__meta > *', { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.07 }, '-=0.5');

      // Hero photo settles from a slight zoom as the page scrolls.
      gsap.fromTo(
        '.lp-hero__media .photo',
        { scale: 1.12 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: '.lp-hero', start: 'top top', end: 'bottom top', scrub: true } }
      );

      // Sections: heading, text, then pictures, once each.
      gsap.set('[data-reveal]', { y: 28, autoAlpha: 0 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', overwrite: true }),
      });

      // Event photos open from the bottom edge.
      gsap.utils.toArray<HTMLElement>('.lp-event__media').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(100% 0% 0% 0% round 20px)',
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });
    });
    return () => mm.revert();
  });
  return null;
}

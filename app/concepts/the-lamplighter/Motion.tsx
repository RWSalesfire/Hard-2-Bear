'use client';

import { useMotion } from '@/lib/motion';

/** Page motion for the concept pub. Content is visible without it; reduced motion skips the travel. */
export default function Motion() {
  useMotion(({ gsap, ScrollTrigger, mm }) => {
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // The lights coming on (the signature move) is in lamplighter.css, so it plays before any script loads.

      // The what's-on ticker rolls on its own and speeds up with the scroll.
      const loop = gsap.to('.lp-ticker__track', { xPercent: -50, duration: 32, ease: 'none', repeat: -1 });
      ScrollTrigger.create({
        trigger: '.lp-ticker',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(self.getVelocity()) / 500, 4), duration: 0.3, overwrite: true });
          gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.3, overwrite: false });
        },
      });

      // The statement fills in word by word as it scrolls through.
      gsap.fromTo(
        '.lp-word',
        { opacity: 0.14 },
        { opacity: 1, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: '.lp-statement', start: 'top 80%', end: 'bottom 45%', scrub: true } }
      );

      // Hero photo settles from a slight zoom as the page scrolls.
      gsap.fromTo(
        '.lp-hero__media .photo',
        { scale: 1.12 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: '.lp-hero', start: 'top+=40 top', end: 'bottom top', scrub: true } }
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
    // Desktop: the week slides sideways while the page holds still.
    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const viewport = document.querySelector<HTMLElement>('.lp-events-viewport');
      const track = document.querySelector<HTMLElement>('.lp-events');
      if (!viewport || !track) return;
      viewport.classList.add('is-pinned');
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: '#on',
          start: 'top+=40 top',
          end: () => `+=${distance() + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => viewport.classList.remove('is-pinned');
    });
  });
  return null;
}

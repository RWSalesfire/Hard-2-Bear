'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * The care plan, shown working: a text arrives asking to move quiz night,
 * Hard To Bear replies, and the pub's site on the phone updates.
 */
export default function HeroDemo() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hb-phone', { y: 80, rotate: 4, autoAlpha: 0, duration: 1.2, ease: 'power3.out', delay: 0.35 });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5, delay: 1.6 });
        tl.set('.hb-demo__note', { autoAlpha: 0, y: -16 })
          .set('.hb-demo__when--old', { autoAlpha: 1 })
          .set('.hb-demo__when--new', { autoAlpha: 0 })
          .to('.hb-demo__note--ask', { autoAlpha: 1, y: 0, duration: 0.5, ease: 'back.out(1.6)' })
          .to('.hb-demo__note--done', { autoAlpha: 1, y: 0, duration: 0.5, ease: 'back.out(1.6)' }, '+=1.4')
          .to('.hb-demo__when--old', { autoAlpha: 0, duration: 0.25 }, '+=0.5')
          .fromTo('.hb-demo__when--new', { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.4 })
          .fromTo('.hb-demo__row--quiz', { backgroundColor: 'rgba(245,165,36,0.45)' }, { backgroundColor: 'rgba(245,165,36,0)', duration: 1.6 }, '<')
          .to('.hb-demo__note', { autoAlpha: 0, y: -16, duration: 0.4, stagger: 0.1 }, '+=2.2');
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.hb-demo__note', { autoAlpha: 1 });
        gsap.set('.hb-demo__when--old', { autoAlpha: 0 });
        gsap.set('.hb-demo__when--new', { autoAlpha: 1 });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div className="hb-hero__stage" ref={root}>
      <div
        className="hb-phone"
        role="img"
        aria-label="A phone showing a pub's website. A text arrives asking to move quiz night to Thursday, Hard To Bear replies that it's done, and the site updates."
      >
        <div className="hb-phone__screen">
          <span className="hb-phone__notch" />
          <div className="hb-demo__note hb-demo__note--ask" style={{ opacity: 0 }}>
            <span className="hb-demo__icon">✉</span>
            <span>
              <b>The Lamplighter</b>
              Can you move quiz night to Thursday?
            </span>
          </div>
          <div className="hb-demo__note hb-demo__note--done" style={{ opacity: 0 }}>
            <span className="hb-demo__icon">✓</span>
            <span>
              <b>Hard To Bear</b>
              Done. It&rsquo;s live on your site and Google.
            </span>
          </div>
          <div className="hb-demo__site">
            <p className="hb-demo__brand">The Lamplighter</p>
            <p className="hb-demo__open">Open now until midnight</p>
            <p className="hb-demo__hero">
              Your local,
              <br />
              <em>lit since 1868</em>
            </p>
            <p className="hb-demo__label">This week</p>
            <ul className="hb-demo__list">
              <li className="hb-demo__row--quiz">
                <strong>Quiz night</strong>
                <span style={{ position: 'relative' }}>
                  <span className="hb-demo__when hb-demo__when--old">Wednesday, 8pm</span>
                  <span className="hb-demo__when hb-demo__when--new is-new" style={{ position: 'absolute', right: 0, top: 0, opacity: 0 }}>
                    Thursday, 8pm
                  </span>
                </span>
              </li>
              <li>
                <strong>Live music</strong>
                <span className="hb-demo__when">Saturday, 9pm</span>
              </li>
              <li>
                <strong>Sunday roast</strong>
                <span className="hb-demo__when">From 12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

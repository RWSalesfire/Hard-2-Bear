import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TopBar from '@/components/hb/TopBar';
import Faq from '@/components/hb/Faq';
import Motion from '@/components/hb/Motion';
import Footer from '@/components/hb/Footer';
import StoolCta from '@/components/hb/StoolCta';
import WorkCard from '@/components/hb/WorkCard';
import { Arrow } from '@/components/hb/Icons';
import { TRADES, tradeBySlug } from '@/lib/trades';
import { WORK } from '@/lib/work';

export const dynamicParams = false;

export function generateStaticParams() {
  return TRADES.map((t) => ({ trade: t.slug }));
}

type Params = { params: Promise<{ trade: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = tradeBySlug((await params).trade);
  if (!t) return {};
  return { title: t.title, description: t.description, alternates: { canonical: `/${t.slug}` }, openGraph: { title: t.title, description: t.description } };
}

export default async function TradePage({ params }: Params) {
  const t = tradeBySlug((await params).trade);
  if (!t) notFound();
  const work = WORK.find((w) => w.slug === t.work)!;
  const last = t.hero.length - 1;

  return (
    <>
      <Motion />
      <TopBar />

      <main id="top">
        <section className="hb-th" aria-labelledby="th-title">
          <div className="hb-wrap">
            <p className="hb-label hb-th__label">Websites for {t.nav.toLowerCase()}</p>
            <h1 id="th-title" className="hb-display hb-th__title">
              {t.hero.map((line, i) => (
                <span key={line} className="hb-hero__line">
                  <span>{i === last ? <em>{line}</em> : line}</span>
                </span>
              ))}
            </h1>
            <p className="hb-lead hb-soft hb-th__lede hb-hero__fade">{t.lede}</p>
            <div className="hb-hero__actions hb-hero__fade">
              <a className="hb-btn" href="#stool">
                Pull up a stool
                <span className="hb-btn__arrow">
                  <Arrow size={14} />
                </span>
              </a>
              <a className="hb-btn hb-btn--ghost" href="#proof">
                See the one we built
              </a>
            </div>
          </div>
        </section>

        <section className="hb-section" aria-labelledby="facts-title">
          <div className="hb-wrap">
            <h2 id="facts-title" className="sr-only">
              What the research says
            </h2>
            <ul className="hb-stats">
              {t.stats.map((s) => (
                <li key={s.figure} data-reveal>
                  <p className="hb-stats__n">{s.figure}</p>
                  <p>{s.line}</p>
                  <a className="hb-stats__src" href={s.href} rel="noopener" target="_blank">
                    Source: {s.source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hb-section" aria-labelledby="checks-title">
          <div className="hb-wrap hb-th__split">
            <div className="hb-head" data-reveal>
              <h2 id="checks-title" className="hb-heading">
                What they check <em>first.</em>
              </h2>
              <p className="hb-lead hb-soft">Before anyone rings or walks in, they&rsquo;re looking for these. If your site doesn&rsquo;t answer them, the next one in the search will.</p>
            </div>
            <ol className="hb-checks">
              {t.checks.map((c, i) => (
                <li key={c} data-reveal>
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {c}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="hb-section" aria-labelledby="build-title">
          <div className="hb-wrap hb-th__split">
            <div className="hb-head" data-reveal>
              <h2 id="build-title" className="hb-heading">
                What we <em>build.</em>
              </h2>
              <p className="hb-lead hb-soft">Every one of these answers a question above. Nothing on the page is there for show.</p>
            </div>
            <ul className="hb-build">
              {t.build.map((b) => (
                <li key={b} data-reveal>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proof" className="hb-section" aria-labelledby="proof-title">
          <div className="hb-wrap">
            <div className="hb-head hb-head--row" data-reveal>
              <h2 id="proof-title" className="hb-heading">
                We built one to <em>show you.</em>
              </h2>
              <p className="hb-lead hb-soft">A made-up business, built the way we&rsquo;d build yours. Open it on your phone and have a play.</p>
            </div>
            <div className="hb-work hb-work--single">
              <WorkCard w={work} />
            </div>
          </div>
        </section>

        <section className="hb-section" aria-labelledby="pick-title">
          <div className="hb-wrap">
            <div className="hb-pick" data-reveal>
              <div>
                <p className="hb-label" style={{ color: 'var(--honey)' }}>
                  What we&rsquo;d suggest
                </p>
                <h2 id="pick-title" className="hb-heading">
                  {t.pick.name}, <em>{t.pick.price}.</em>
                </h2>
              </div>
              <div className="hb-pick__text">
                <p className="hb-lead">{t.pick.why}</p>
                <p className="hb-soft">{t.pick.more} The care plan is £50 a month on top, and every extra is priced on the page.</p>
                <Link className="hb-btn hb-btn--ghost" href="/#prices">
                  See every price
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hb-section" aria-labelledby="faq-title">
          <div className="hb-wrap hb-faq-wrap">
            <div className="hb-head" data-reveal>
              <h2 id="faq-title" className="hb-heading">
                Straight <em>answers.</em>
              </h2>
            </div>
            <Faq items={t.faqs} />
          </div>
        </section>

        <StoolCta trade={t.formTrade} />
      </main>

      <Footer />
    </>
  );
}

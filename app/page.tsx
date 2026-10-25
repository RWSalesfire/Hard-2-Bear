import Link from 'next/link';
import TopBar from '@/components/hb/TopBar';
import HeroDemo from '@/components/hb/HeroDemo';
import Faq from '@/components/hb/Faq';
import StoolForm from '@/components/hb/StoolForm';
import Motion from '@/components/hb/Motion';
import { Arrow, BearMark } from '@/components/hb/Icons';

const CONTACT_EMAIL = 'hello@hardtobear.uk';

const TRADES_MARQUEE = ['Pubs', 'Garages', 'Driving instructors', 'Barbers', 'Cafés', 'Mechanics', 'Salons', 'Plumbers'];

const TRADES = [
  {
    name: 'Pubs and restaurants',
    line: 'Built around what people ring a pub to ask.',
    points: ['Menus and specials you can change by text', 'Table bookings through ResDiary or OpenTable', 'Quiz nights, live music and fixtures'],
    chips: ['Menus', 'Bookings', 'Events'],
  },
  {
    name: 'Garages and mechanics',
    line: 'For people with a warning light on and no idea who to ring.',
    points: ['Services with starting prices', 'Quote requests that land as a text', 'MOT booking and reminders'],
    chips: ['Quotes', 'MOTs', 'Reviews'],
  },
  {
    name: 'Driving instructors',
    line: 'No premises, so the site does the finding for you.',
    points: ['Lesson prices and block deals', 'A page for every town you cover', 'Pass board and lesson booking'],
    chips: ['Areas', 'Booking', 'Pass board'],
  },
  {
    name: 'Barbers and salons',
    line: 'Most people decide on the walk past. The rest decide on their phone.',
    points: ['Book now on every screen', 'Price list you change by text', 'A gallery of your real work'],
    chips: ['Booking', 'Prices', 'Gallery'],
  },
];

const STEPS = [
  { title: 'Pull up a stool', line: 'Fifteen minutes, in person or on the phone. We tell you straight if a site is worth it.' },
  { title: 'We plan it', line: 'Your pages, your words and your photos, agreed in writing with a fixed price.' },
  { title: 'We build it', line: 'Fast on a phone, set up on Google, and built around how your customers search.' },
  { title: 'You go live', line: 'Seven days after we have your words and photos. Then you text us changes.' },
];

const PRICES: { name: string; price: string; per?: string; line: string; points: string[]; pick?: boolean; care?: boolean }[] = [
  {
    name: 'Starter',
    price: '£1,500',
    line: 'A sharp five-page site with your Google listing sorted.',
    points: ['Up to 5 pages', 'Google Business Profile set up', 'Tap to call and directions', '2 rounds of changes'],
  },
  {
    name: 'Local Pro',
    price: '£2,400',
    line: 'We write it, and you can change menus and prices yourself.',
    points: ['Up to 8 pages', 'Words written for you', 'Menus, prices and hours you can edit', 'Google reviews on your site', '1 month of care included'],
    pick: true,
  },
  {
    name: 'Full Works',
    price: '£3,600',
    line: 'Bookings built in, events, and three months of care.',
    points: ['Up to 12 pages', 'Bookings linked to your system', 'Events and news', 'Unlimited changes for 30 days', '3 months of care included'],
  },
  {
    name: 'Care plan',
    price: '£50',
    per: 'a month',
    line: 'Text us a change and it’s live the same day.',
    points: ['Hosting and your domain', 'Security updates', 'Up to 30 minutes of changes a month', 'A monthly report of calls and bookings'],
    care: true,
  },
];

const FAQS = [
  {
    q: 'Do I need a website? I get by on word of mouth.',
    a: 'Word of mouth reaches people who already know you. Everyone else types “near me” into their phone, and Google shows the businesses with a proper listing and a site behind it. If you’ve got all the work you want, you don’t. If you want more, that’s where it comes from.',
  },
  {
    q: 'Why not just do it myself on Wix?',
    a: 'You can. You’ll lose your evenings to it, and it won’t sort your Google listing, your reviews or the bits that get you found. We do all of that, and when something needs changing you send a text instead of logging in.',
  },
  { q: 'Do I own it?', a: 'Yes. Your domain is registered in your name, and if you ever leave, the site goes with you.' },
  {
    q: 'What happens once it’s live?',
    a: 'On the care plan you text us changes and they go live the same day. Every month you get one page showing the calls, direction requests and bookings the site brought in.',
  },
  {
    q: 'Seven days. Really?',
    a: 'Seven days from when we get your words and photos. If we miss it, your first month of the care plan is on us. That’s the last orders guarantee.',
  },
  { q: 'I’m not techy. Is that a problem?', a: 'That’s the whole point. You never have to log in to anything. If you can send a text, you can run your website.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hard To Bear',
  description: 'Websites for pubs, garages, driving instructors, barbers and other local trades.',
  url: 'https://hardtobear.uk',
  email: CONTACT_EMAIL,
  founder: { '@type': 'Person', name: 'Russell Westgarth' },
  areaServed: 'GB',
  makesOffer: PRICES.filter((p) => !p.care).map((p) => ({
    '@type': 'Offer',
    name: p.name,
    price: p.price.replace(/[£,]/g, ''),
    priceCurrency: 'GBP',
  })),
};

function ArrowButton({ href, children, variant = '' }: { href: string; children: React.ReactNode; variant?: string }) {
  return (
    <a className={`hb-btn ${variant}`} href={href}>
      {children}
      <span className="hb-btn__arrow">
        <Arrow size={14} />
      </span>
    </a>
  );
}

// Concept sites. Each card sits on that client's own colour, so the work reads as theirs.
const WORK = [
  { href: '/concepts/the-lamplighter', name: 'The Lamplighter', kind: 'a village pub', bg: '#8c2a1e', shots: ['lamplighter-home', 'lamplighter-menu', 'lamplighter-visit'] },
  { href: '/concepts/bridge-street-garage', name: 'Bridge Street Garage', kind: 'an independent garage', bg: '#1f3a93', shots: ['garage-home', 'garage-card', 'garage-how'] },
];

export default function Home() {
  return (
    <>
      <Motion />
      <TopBar />

      <main id="top">
        {/* Hero */}
        <section className="hb-hero" aria-labelledby="hero-title">
          <div className="hb-hero__card">
            <div className="hb-hero__text">
              <h1 id="hero-title" className="hb-display">
                <span className="hb-hero__line">
                  <span>No‑nonsense</span>
                </span>
                <span className="hb-hero__line">
                  <span>websites</span>
                </span>
                <span className="hb-hero__line">
                  <span>for local</span>
                </span>
                <span className="hb-hero__line">
                  <span>
                    <em>grafters.</em>
                  </span>
                </span>
              </h1>
              <p className="hb-lead hb-hero__lede hb-hero__fade">
                For pubs, garages, driving instructors and barbers. <strong>Built by one person you can actually ring.</strong>{' '}
                Fixed prices, live in seven days, and you change it by sending a text.
              </p>
              <div className="hb-hero__actions hb-hero__fade">
                <ArrowButton href="#stool">Pull up a stool</ArrowButton>
                <a className="hb-btn hb-btn--ghost" href="#work">
                  See the work
                </a>
              </div>
            </div>
            <HeroDemo />
          </div>
        </section>

        <div className="hb-marquee" aria-hidden="true">
          <div className="hb-marquee__track">
            {[...TRADES_MARQUEE, ...TRADES_MARQUEE].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        {/* The problem */}
        <section className="hb-section" aria-labelledby="dave-title">
          <div className="hb-wrap hb-dave">
            <div className="hb-dave__text" data-reveal>
              <p className="hb-label hb-soft">Word of mouth</p>
              <h2 id="dave-title" className="hb-heading">
                Half the town asks for <em>Dave.</em>
              </h2>
              <p className="hb-lead hb-soft">
                The other half types &ldquo;mechanic near me&rdquo; and rings someone else. Word of mouth only reaches people who
                already know you. A proper site and Google listing reach everyone else. Simple as that.
              </p>
            </div>
            <div className="hb-dave__search" data-reveal>
              <div className="hb-search" role="img" aria-label="A phone search for 'mechanic near me' that lists two garages but not Dave">
                <p className="hb-search__bar">
                  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                    <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  mechanic near me
                </p>
                <p className="hb-search__result">
                  <strong>AutoFix Centre</strong>
                  <span>4.6 stars · 0.4 miles · Open</span>
                </p>
                <p className="hb-search__result">
                  <strong>M&amp;J Motors</strong>
                  <span>4.8 stars · 1.2 miles · Open</span>
                </p>
                <p className="hb-search__missing">Dave&rsquo;s Garage isn&rsquo;t on here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="hb-section" aria-labelledby="work-title">
          <div className="hb-wrap">
            <div className="hb-head hb-head--row" data-reveal>
              <h2 id="work-title" className="hb-heading">
                The <em>work.</em>
              </h2>
              <p className="hb-lead hb-soft">
                Concept sites, built the way we&rsquo;d build yours. The first real one is a pub opening in December.
              </p>
            </div>
            <div className="hb-work">
              {WORK.map((w) => (
                <Link key={w.href} className="hb-work__card" href={w.href} data-reveal>
                  <div className="hb-work__media" style={{ background: w.bg }}>
                    {w.shots.map((s) => (
                      <div key={s} className="hb-work__shot">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/work/${s}.jpg`} alt="" width={780} height={1688} loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="hb-work__meta">
                    <p className="hb-title">
                      <strong>{w.name}</strong> &ndash; {w.kind}
                    </p>
                    <span className="hb-btn__arrow" aria-hidden="true">
                      <Arrow size={14} />
                    </span>
                  </div>
                  <span className="sr-only">Open the concept site</span>
                </Link>
              ))}
              <a className="hb-work__next" href="#stool" data-reveal>
                <p className="hb-label" style={{ color: 'var(--honey)' }}>
                  Next up
                </p>
                <p className="hb-heading">
                  Your business <em>here.</em>
                </p>
                <p className="hb-soft">Driving instructors and barbers are next on the bench.</p>
                <span className="hb-btn" style={{ justifySelf: 'start' }}>
                  Pull up a stool
                  <span className="hb-btn__arrow">
                    <Arrow size={14} />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Trades */}
        <section id="trades" className="hb-section" aria-labelledby="trades-title">
          <div className="hb-wrap">
            <div className="hb-head hb-head--row" data-reveal>
              <h2 id="trades-title" className="hb-heading">
                Built for <em>your trade.</em>
              </h2>
              <p className="hb-lead hb-soft">Every trade gets asked different questions. Your site answers them before the phone rings.</p>
            </div>
            <ul className="hb-trades">
              {TRADES.map((t) => (
                <li key={t.name} className="hb-trade" data-reveal>
                  <h3 className="hb-title">{t.name}</h3>
                  <p className="hb-soft">{t.line}</p>
                  <ul className="hb-trade__list">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="hb-chips">
                    {t.chips.map((c) => (
                      <span key={c} className="hb-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="hb-section" aria-labelledby="how-title">
          <div className="hb-wrap">
            <div className="hb-head" data-reveal>
              <h2 id="how-title" className="hb-heading">
                Four steps. <em>No faff.</em>
              </h2>
            </div>
            <ol className="hb-steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="hb-step" data-reveal>
                  <span className="hb-step__n" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="hb-title">{s.title}</h3>
                  <p>{s.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Guarantees */}
        <section className="hb-promises" aria-labelledby="promise-title">
          <div className="hb-promises__card">
            <div className="hb-head" data-reveal>
              <h2 id="promise-title" className="hb-heading">
                Promises in writing.
              </h2>
            </div>
            <div className="hb-promises__grid">
              <div className="hb-promise" data-reveal>
                <p className="hb-promise__n" data-count="7" data-suffix=" days">
                  7 days
                </p>
                <p>From your words and photos to live. Miss it and your first month of care is free.</p>
              </div>
              <div className="hb-promise" data-reveal>
                <p className="hb-promise__n" data-count="50" data-prefix="£">
                  £50
                </p>
                <p>A month for hosting, updates and changes by text.</p>
              </div>
              <div className="hb-promise" data-reveal>
                <p className="hb-promise__n">1 tap</p>
                <p>To call you or get directions, from the first screen, on every phone.</p>
              </div>
              <div className="hb-promise" data-reveal>
                <p className="hb-promise__n">0 logins</p>
                <p>You never touch a dashboard. Send a text and it&rsquo;s done.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section id="prices" className="hb-section" aria-labelledby="prices-title">
          <div className="hb-wrap">
            <div className="hb-head hb-head--row" data-reveal>
              <h2 id="prices-title" className="hb-heading">
                What it <em>costs.</em>
              </h2>
              <p className="hb-lead hb-soft">Fixed prices, written down. No quote dance, no surprises.</p>
            </div>
            <ul className="hb-prices">
              {PRICES.map((p) => (
                <li key={p.name} className={`hb-price${p.pick ? ' hb-price--pick' : ''}${p.care ? ' hb-price--care' : ''}`} data-reveal>
                  <h3 className="hb-title">{p.name}</h3>
                  <p className="hb-price__amount">
                    {p.price}
                    {p.per && <small> {p.per}</small>}
                  </p>
                  <p>{p.line}</p>
                  <ul className="hb-price__list">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <ArrowButton href="#stool" variant={p.care ? '' : 'hb-btn--ink'}>
                    {p.care ? 'Add it on' : 'Start here'}
                  </ArrowButton>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Questions */}
        <section id="questions" className="hb-section" aria-labelledby="faq-title">
          <div className="hb-wrap hb-faq-wrap">
            <div className="hb-head" data-reveal>
              <h2 id="faq-title" className="hb-heading">
                Straight <em>answers.</em>
              </h2>
              <p className="hb-lead hb-soft">No jargon, no sales patter. If a website isn&rsquo;t worth it for you, we&rsquo;ll say so.</p>
            </div>
            <Faq items={FAQS} />
          </div>
        </section>

        {/* Call to action */}
        <section id="stool" className="hb-cta" aria-labelledby="stool-title">
          <div className="hb-cta__card">
            <div style={{ display: 'grid', gap: 20 }}>
              <h2 id="stool-title" className="hb-display">
                Pull up <em>a stool.</em>
              </h2>
              <p className="hb-lead">Fifteen minutes, in person or on the phone. We&rsquo;ll tell you straight whether a website is worth it.</p>
              <p className="hb-cta__who">
                <span>
                  <BearMark size={34} />
                </span>
                You&rsquo;ll deal with Russell from start to finish. No call centre, no account manager, no runaround.
              </p>
              <p style={{ fontWeight: 700 }}>Last orders guarantee: live in seven days, or your first month of care is on us.</p>
            </div>
            <StoolForm />
          </div>
        </section>
      </main>

      <footer className="hb-footer">
        <div className="hb-wrap">
        <div className="hb-footer__top">
          <div style={{ display: 'grid', gap: 16 }}>
            <p className="hb-heading">
              Let&rsquo;s get you <em>found.</em>
            </p>
            <a className="hb-footer__mail" href={`mailto:${CONTACT_EMAIL}?subject=Pulling%20up%20a%20stool`}>
              {CONTACT_EMAIL}
              <span className="hb-btn__arrow">
                <Arrow size={14} />
              </span>
            </a>
          </div>
          <nav className="hb-footer__links" aria-label="Footer">
            <a href="#work">Work</a>
            <a href="#trades">Trades</a>
            <a href="#prices">Prices</a>
            <a href="#questions">Questions</a>
            <Link href="/concepts/the-lamplighter">The Lamplighter</Link>
            <Link href="/concepts/bridge-street-garage">Bridge Street Garage</Link>
            <a href="#stool">Pull up a stool</a>
          </nav>
        </div>
        <div className="hb-footer__bottom">
          <p>&copy; 2026 Hard To Bear</p>
          <BearMark size={36} />
        </div>
        </div>
        <p className="hb-footer__name" aria-hidden="true">
          Hard To Bear
        </p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

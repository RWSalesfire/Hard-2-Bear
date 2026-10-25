import Link from 'next/link';
import Photo from '@/components/Photo';
import JobCard from './JobCard';
import OpenNow from './OpenNow';
import PriceList from './PriceList';
import Reminder from './Reminder';
import Motion from './Motion';
import { AREAS, FAQ, GARAGE, HOURS, PRICE_LIST, PROMISES, REVIEWS, STEPS, WHILE_YOU_WAIT, priceFor } from './data';

function fmt(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${m ? `:${String(m).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
}

const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
const WEEK = [1, 2, 3, 4, 5, 6, 0].map((d) => HOURS[d]);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: GARAGE.name,
  telephone: GARAGE.phone,
  priceRange: '££',
  address: { '@type': 'PostalAddress', streetAddress: GARAGE.street, addressLocality: GARAGE.town, postalCode: GARAGE.postcode, addressCountry: 'GB' },
  areaServed: AREAS.map((a) => ({ '@type': 'Place', name: a })),
  openingHoursSpecification: HOURS.filter((h) => h.open !== null).map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day,
    opens: hhmm(h.open as number),
    closes: hhmm(h.close as number),
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MOT, servicing, tyres and repairs',
    itemListElement: PRICE_LIST.flatMap((t) =>
      t.rows.map((r) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: r.name },
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', [r.from ? 'minPrice' : 'price']: priceFor(r, 'small') },
      }))
    ),
  },
};

export default function BridgeStreetGarage() {
  return (
    <>
      <Motion />
      <p className="gs-concept">
        Concept site by <Link href="/">Hard To Bear</Link>. Bridge Street Garage isn&rsquo;t a real business, and the reviews are samples.
      </p>

      <header className="gs-bar">
        <a className="gs-logo" href="#top">
          <span>Bridge Street</span> Garage
        </a>
        <nav aria-label="Main" className="gs-bar__nav">
          <a href="#prices">Prices</a>
          <a href="#how">How it works</a>
          <a href="#mot">MOT reminders</a>
          <a href="#visit">Find us</a>
        </nav>
        <a className="gs-btn gs-btn--small" href={GARAGE.phoneHref}>
          Call us
        </a>
      </header>

      <main id="top">
        <section className="gs-hero" aria-labelledby="gs-title">
          <div className="gs-hero__text">
            <p className="gs-kicker">
              {GARAGE.town} · since {GARAGE.since}
            </p>
            <h1 id="gs-title" className="gs-hero__title">
              MOT £45. Always.
              <span>Every other price is written down before we start.</span>
            </h1>
            <OpenNow />
            <p className="gs-hero__rating">
              <strong>{GARAGE.rating}</strong> from {GARAGE.reviews} Google reviews
            </p>
          </div>
          <div className="gs-hero__card">
            <div className="gs-card__carbon" aria-hidden="true" />
            <JobCard />
          </div>
        </section>

        <section className="gs-promises" aria-labelledby="promise-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">Terms, in plain English</p>
            <h2 id="promise-title">No surprises. That&rsquo;s the deal.</h2>
          </div>
          <ol className="gs-promises__list">
            {PROMISES.map((p, i) => (
              <li key={p.title} data-reveal>
                <span className="gs-mono">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="prices" className="gs-section gs-section--split" aria-labelledby="prices-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">Price list</p>
            <h2 id="prices-title">Every price, on the page</h2>
            <p>VAT included. No &ldquo;shop fees&rdquo;, no &ldquo;sundries&rdquo;, no call-out charge for looking.</p>
          </div>
          <div data-reveal>
            <PriceList />
          </div>
        </section>

        <section id="how" className="gs-section" aria-labelledby="how-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">How it works</p>
            <h2 id="how-title">Four steps, one phone call</h2>
          </div>
          <ol className="gs-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="gs-step" data-reveal>
                <span className="gs-mono">Step {i + 1}</span>
                <span className="gs-step__stamp" aria-hidden="true">
                  {s.stamp}
                </span>
                <h3>{s.title}</h3>
                <p>{s.line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="gs-reviews" aria-labelledby="reviews-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">
              {GARAGE.rating} stars · {GARAGE.reviews} reviews on Google
            </p>
            <h2 id="reviews-title">What people say after the bill</h2>
          </div>
          <ul className="gs-reviews__list">
            {REVIEWS.map((r) => (
              <li key={r.name} data-reveal>
                <p className="gs-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </p>
                <blockquote>{r.text}</blockquote>
                <p className="gs-mono">{r.name}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="gs-section gs-workshop" aria-labelledby="workshop-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">The workshop</p>
            <h2 id="workshop-title">Four ramps, three mechanics, one kettle</h2>
            <p>
              Same team since 2009. Every one of them IMI qualified, and the person who fixes your car is the person who rings you about it.
            </p>
          </div>
          <div className="gs-gallery">
            <div className="gs-gallery__big" data-reveal>
              <Photo id="gsWorkshop" width={1600} height={1100} />
            </div>
            <div data-reveal>
              <Photo id="gsTeam" width={1000} height={1000} />
            </div>
            <div data-reveal>
              <Photo id="gsRamp" width={1000} height={1000} />
            </div>
            <div data-reveal>
              <Photo id="gsHands" width={1000} height={1000} />
            </div>
          </div>
        </section>

        <section className="gs-section" aria-labelledby="wait-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">Getting on with your day</p>
            <h2 id="wait-title">Wait, borrow a car, or let us fetch it</h2>
          </div>
          <div className="gs-wait">
            <ul className="gs-wait__list">
              {WHILE_YOU_WAIT.map((w) => (
                <li key={w.title} data-reveal>
                  <h3>{w.title}</h3>
                  <p>{w.line}</p>
                </li>
              ))}
            </ul>
            <div className="gs-wait__media" data-reveal>
              <Photo id="gsWaiting" width={1200} height={900} />
            </div>
          </div>
          <ul className="gs-badges" aria-label="Memberships (samples)" data-reveal>
            <li>Trust My Garage member</li>
            <li>Motor Ombudsman accredited</li>
            <li>IMI qualified technicians</li>
          </ul>
        </section>

        <section id="mot" className="gs-reminder" aria-labelledby="mot-title">
          <div data-reveal>
            <p className="gs-label">MOT reminders</p>
            <h2 id="mot-title">Never get caught out by the MOT date</h2>
            <p>Leave your reg and mobile. We text you a month before it&rsquo;s due. That&rsquo;s it.</p>
          </div>
          <div data-reveal>
            <Reminder />
          </div>
        </section>

        <section className="gs-section gs-section--split" aria-labelledby="faq-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">Questions</p>
            <h2 id="faq-title">Straight answers</h2>
          </div>
          <div className="gs-faq" data-reveal>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="visit" className="gs-section gs-visit" aria-labelledby="visit-title">
          <div className="gs-head" data-reveal>
            <p className="gs-label">Find us</p>
            <h2 id="visit-title">
              {GARAGE.street}, {GARAGE.town}
            </h2>
            <p>Behind the Co-op, opposite the bus stop. Six customer spaces on the forecourt.</p>
            <div className="gs-visit__actions">
              <a className="gs-btn" href={GARAGE.mapsHref}>
                Directions
              </a>
              <a className="gs-btn gs-btn--ghost" href={GARAGE.phoneHref}>
                {GARAGE.phone}
              </a>
            </div>
          </div>
          <div className="gs-visit__grid">
            <dl className="gs-hours" data-reveal>
              {WEEK.map((h) => (
                <div key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>{h.open === null || h.close === null ? 'Closed' : `${fmt(h.open)} to ${fmt(h.close)}`}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal>
              <p className="gs-label">Villages we cover</p>
              <ul className="gs-areas">
                {AREAS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="gs-areas__note">Collection and delivery is free within 3 miles of the garage.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="gs-footer">
        <p className="gs-footer__name">
          Bridge Street <span>Garage</span>
        </p>
        <p>
          {GARAGE.street}, {GARAGE.town} {GARAGE.postcode} · <a href={GARAGE.phoneHref}>{GARAGE.phone}</a>
        </p>
        <p className="gs-footer__small">
          A concept site by <Link href="/">Hard To Bear</Link>. Names, prices, reviews and memberships are examples.
        </p>
      </footer>

      <nav className="gs-dock" aria-label="Quick actions">
        <a href={GARAGE.phoneHref} className="is-main">
          Call
        </a>
        <a href="#top">Job card</a>
        <a href={GARAGE.mapsHref}>Directions</a>
      </nav>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

import Link from 'next/link';
import Photo from '@/components/Photo';
import OpenNow from './OpenNow';
import MenuTabs from './MenuTabs';
import HireForm from './HireForm';
import Motion from './Motion';
import TimeToggle from './TimeToggle';
import Weather from './Weather';
import { EVENTS, GOOD_TO_KNOW, HOURS, KITCHEN, PACKAGES, PUB, ROOMS, TICKER } from './data';

const STATEMENT = 'Proper pub. Proper food. Proper welcome.';

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function fmt(mins: number) {
  const m = mins % (24 * 60);
  if (m === 0) return 'midnight';
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${mm ? `:${String(mm).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
}

// Monday first, the way people read a week.
const WEEK = [1, 2, 3, 4, 5, 6, 0].map((d) => HOURS[d]);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: PUB.name,
  telephone: PUB.phone,
  address: { '@type': 'PostalAddress', streetAddress: PUB.street, addressLocality: PUB.town, postalCode: PUB.postcode, addressCountry: 'GB' },
  servesCuisine: 'British',
  acceptsReservations: true,
  hasMenu: '/concepts/the-lamplighter#menu',
  event: [
    { name: 'Quiz night', byDay: 'https://schema.org/Thursday', startTime: '20:00' },
    { name: 'Live music', byDay: 'https://schema.org/Saturday', startTime: '21:00' },
  ].map((e) => ({
    '@type': 'Event',
    name: e.name,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: PUB.name, address: `${PUB.street}, ${PUB.town} ${PUB.postcode}` },
    eventSchedule: { '@type': 'Schedule', repeatFrequency: 'P1W', byDay: e.byDay, startTime: e.startTime, scheduleTimezone: 'Europe/London' },
  })),
  openingHoursSpecification: HOURS.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day,
    opens: `${String(Math.floor(h.open / 60)).padStart(2, '0')}:${String(h.open % 60).padStart(2, '0')}`,
    closes: h.close >= 24 * 60 ? '23:59' : `${String(Math.floor(h.close / 60)).padStart(2, '0')}:${String(h.close % 60).padStart(2, '0')}`,
  })),
};

export default function Lamplighter() {
  return (
    <>
      <Motion />
      <p className="lp-concept">
        Concept site by <Link href="/">Hard To Bear</Link>. The Lamplighter isn&rsquo;t a real pub. <TimeToggle />
      </p>

      <header className="lp-bar">
        <a className="lp-logo" href="#top">
          The Lamplighter
        </a>
        <nav aria-label="Main" className="lp-bar__nav">
          <a href="#on">What&rsquo;s on</a>
          <a href="#menu">Menu</a>
          <a href="#hire">Private hire</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="lp-btn lp-btn--small" href={PUB.bookHref}>
          Book a table
        </a>
      </header>

      <main id="top">
        <section className="lp-hero" aria-labelledby="lp-title">
          <div className="lp-hero__media">
            <Photo id="lpHero" priority width={2000} height={1400} />
            <span className="lp-hero__glow" aria-hidden="true" />
          </div>
          <Weather />
          <div className="lp-hero__text">
            <h1 id="lp-title" className="lp-hero__title">
              <span className="lp-hero__line">
                <span>Your local,</span>
              </span>
              <span className="lp-hero__line">
                <em>lit since 1868</em>
              </span>
            </h1>
            <div className="lp-hero__meta">
              <OpenNow />
              <p className="lp-hero__lede">
                Proper pub, proper food, on {PUB.street}, {PUB.town}. Dogs, muddy boots and quiz teams welcome.
              </p>
              <div className="lp-hero__actions">
                <a className="lp-btn" href={PUB.bookHref}>
                  Book a table <Arrow />
                </a>
                <a className="lp-btn lp-btn--ghost" href="#menu">
                  See the menu
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="lp-ticker" aria-hidden="true">
          <div className="lp-ticker__track">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        <section id="on" className="lp-section" aria-labelledby="on-title">
          <div className="lp-head" data-reveal>
            <h2 id="on-title">This week at the Lamp</h2>
            <p>Four nights worth leaving the house for.</p>
          </div>
          <div className="lp-events-viewport">
          <ul className="lp-events">
            {EVENTS.map((e) => (
              <li key={e.title} className="lp-event" data-reveal>
                <div className="lp-event__media">
                  <Photo id={e.photo} width={900} height={1100} />
                </div>
                <p className="lp-event__when">{e.when}</p>
                <h3>{e.title}</h3>
                <p>{e.line}</p>
              </li>
            ))}
          </ul>
          </div>
        </section>

        <section className="lp-statement" aria-label={STATEMENT}>
          <p className="lp-statement__text" aria-hidden="true">
            {STATEMENT.split(' ').map((w, i) => (
              <span key={i} className="lp-word">
                {w}{' '}
              </span>
            ))}
          </p>
        </section>

        <section id="menu" className="lp-section lp-section--split" aria-labelledby="menu-title">
          <div className="lp-head" data-reveal>
            <h2 id="menu-title">
              On the <em>menu</em>
            </h2>
            <p>{KITCHEN}</p>
          </div>
          <div data-reveal>
            <MenuTabs />
          </div>
        </section>

        <section id="garden" className="lp-garden" aria-labelledby="garden-title">
          <div className="lp-garden__media" data-reveal>
            <Photo id="lpGarden" width={1600} height={1200} />
          </div>
          <div className="lp-garden__text" data-reveal>
            <h2 id="garden-title">Bring the dog. Stay for the sun.</h2>
            <p>Forty seats out the back, water bowls by the door and a biscuit tin behind the bar.</p>
            <ul className="lp-tags" aria-label="Good to know">
              {GOOD_TO_KNOW.map((g) => (
                <li key={g} className="lp-chip lp-chip--static">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="book" className="lp-book" aria-labelledby="book-title">
          <div className="lp-book__media" data-reveal>
            <Photo id="lpRoom" width={1400} height={1000} />
          </div>
          <div className="lp-book__text" data-reveal>
            <h2 id="book-title">Book a table, or the whole room</h2>
            <p>Tables for two to twelve, any day. Ring us and we&rsquo;ll find you a spot by the fire.</p>
            <div className="lp-hero__actions">
              <a className="lp-btn" href={PUB.phoneHref}>
                Call to book <Arrow />
              </a>
            </div>
            <ul className="lp-rooms" aria-label="Rooms for private hire">
              {ROOMS.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong>
                  <span>{r.size}</span>
                  <span>{r.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="hire" className="lp-section lp-section--split" aria-labelledby="hire-title">
          <div className="lp-head" data-reveal>
            <h2 id="hire-title">
              Private <em>hire</em>
            </h2>
            <p>Birthdays, wakes, work dos and christenings. Tell us what you&rsquo;re planning and we&rsquo;ll come back within a day.</p>
            <ul className="lp-packages">
              {PACKAGES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <HireForm />
          </div>
        </section>

        <section className="lp-voucher" aria-labelledby="voucher-title">
          <div data-reveal>
            <h2 id="voucher-title">Give someone a round</h2>
            <p>Gift vouchers from £10 to £100, for food, drink or a Sunday roast. Sent by email, or posted in a card.</p>
          </div>
          <a className="lp-btn" href={PUB.phoneHref} data-reveal>
            Order a voucher <Arrow />
          </a>
        </section>

        <section id="visit" className="lp-section lp-visit" aria-labelledby="visit-title">
          <div className="lp-head" data-reveal>
            <h2 id="visit-title">Find us</h2>
            <p>
              {PUB.street}, {PUB.town} {PUB.postcode}. Free parking behind the pub.
            </p>
          </div>
          <div className="lp-visit__grid">
            <dl className="lp-hours" data-reveal>
              {WEEK.map((h) => (
                <div key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>
                    {fmt(h.open)} – {fmt(h.close)}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="lp-visit__media" data-reveal>
              <Photo id="lpBar" width={1200} height={900} />
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <p className="lp-footer__name">The Lamplighter</p>
        <p>
          {PUB.street}, {PUB.town} {PUB.postcode} · <a href={PUB.phoneHref}>{PUB.phone}</a>
        </p>
        <p className="lp-footer__small">
          A concept site by <Link href="/">Hard To Bear</Link>. Names, prices and times are examples.
        </p>
      </footer>

      {/* Phone action bar: the three things people come for. */}
      <nav className="lp-dock" aria-label="Quick actions">
        <a href={PUB.phoneHref}>Call</a>
        <a href={PUB.mapsHref}>Directions</a>
        <a href={PUB.bookHref} className="is-main">
          Book
        </a>
      </nav>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

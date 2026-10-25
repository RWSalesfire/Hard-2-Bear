import SpecialsBoard from '@/components/SpecialsBoard';
import TradeTabs from '@/components/TradeTabs';
import BeerMats from '@/components/BeerMats';
import StoolForm from '@/components/StoolForm';
import ChatterDiagram from '@/components/ChatterDiagram';
import Reveal from '@/components/Reveal';
import { BackBar, BarTop, BearLandlord, BearMark, Stool } from '@/components/Drawings';

const CONTACT_EMAIL = 'hello@hardtobear.uk';

const NAV = [
  { href: '#trades', label: 'Trades' },
  { href: '#how', label: 'How it works' },
  { href: '#prices', label: 'Prices' },
  { href: '#questions', label: 'Questions' },
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
  {
    q: 'Do I own it?',
    a: 'Yes. Your domain is registered in your name, and if you ever leave, the site goes with you.',
  },
  {
    q: 'What happens once it’s live?',
    a: 'On the care plan you text us changes and they go live the same day. Every month you get one page showing the calls, direction requests and bookings the site brought in.',
  },
  {
    q: 'Seven days. Really?',
    a: 'Seven days from when we get your words and photos. If we miss it, your first month of the care plan is on us. That’s the last orders guarantee.',
  },
  {
    q: 'I’m not techy. Is that a problem?',
    a: 'That’s the whole point. You never have to log in to anything. If you can send a text, you can run your website.',
  },
];

const MARK: { ch: string; h: number; tone: 'brass' | 'paper' | 'green' }[] = [
  { ch: 'H', h: 1, tone: 'brass' },
  { ch: 'A', h: 0.82, tone: 'paper' },
  { ch: 'R', h: 0.94, tone: 'brass' },
  { ch: 'D', h: 0.7, tone: 'green' },
  { ch: 'T', h: 0.88, tone: 'paper' },
  { ch: 'O', h: 0.64, tone: 'brass' },
  { ch: 'B', h: 0.96, tone: 'green' },
  { ch: 'E', h: 0.76, tone: 'brass' },
  { ch: 'A', h: 0.9, tone: 'paper' },
  { ch: 'R', h: 1, tone: 'brass' },
];

const TONES = {
  brass: { fill: '#c9a45a', ink: '#181512' },
  paper: { fill: '#e4e2dd', ink: '#181512' },
  green: { fill: '#1e4a3b', ink: '#ffffff' },
};

/** The wordmark built from blocks: one row on wide screens, HARD TO over BEAR on a phone. */
function FooterMark() {
  const words = [[0, 1, 2, 3], [4, 5], [6, 7, 8, 9]];
  const block = (idx: number, x: number, w: number, base: number, tall: number) => {
    const m = MARK[idx];
    const h = tall * m.h;
    const t = TONES[m.tone];
    return (
      <g key={`${idx}-${x}-${base}`}>
        <rect x={x} y={base - h} width={w} height={h} fill={t.fill} />
        <text x={x + w / 2} y={base - 14} textAnchor="middle" fontSize={w * 0.72} fontWeight={500} fill={t.ink} style={{ fontFamily: "var(--font-text), sans-serif" }}>
          {m.ch}
        </text>
      </g>
    );
  };
  // Wide: 10 blocks and two word gaps across 1200.
  const W = 1200, gap = 4, wordGap = 36, bw = (W - 7 * gap - 2 * wordGap) / 10;
  let x = 0;
  const wide = words.flatMap((word, wi) => {
    const out = word.map((idx, k) => {
      const g = block(idx, x, bw, 300, 300);
      x += bw + (k < word.length - 1 ? gap : 0);
      return g;
    });
    if (wi < words.length - 1) x += wordGap;
    return out;
  });
  // Phone: HARD TO on the first row, BEAR on the second.
  const pw = 600, pbw = (pw - 4 * gap - 24) / 6;
  let px = 0;
  const row1 = [0, 1, 2, 3, 4, 5].map((idx, k) => {
    const g = block(idx, px, pbw, 150, 140);
    px += pbw + (k === 3 ? 24 : gap);
    return g;
  });
  const bw2 = (pw - 3 * gap) / 4;
  const row2 = [6, 7, 8, 9].map((idx, k) => block(idx, k * (bw2 + gap), bw2, 306, 150));
  return (
    <div className="footer__mark">
      <svg className="footer__mark-wide" viewBox="0 0 1200 300" role="img" aria-label="Hard To Bear">
        {wide}
      </svg>
      <svg className="footer__mark-phone" viewBox="0 0 600 306" role="img" aria-label="Hard To Bear">
        {row1}
        {row2}
      </svg>
    </div>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hard To Bear',
  description: 'Websites for pubs, garages, driving instructors, barbers and other local trades.',
  url: 'https://hardtobear.uk',
  email: CONTACT_EMAIL,
  founder: { '@type': 'Person', name: 'Russell Westgarth' },
  areaServed: 'GB',
  makesOffer: [
    { '@type': 'Offer', name: 'Starter', price: '1500', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Local Pro', price: '2400', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Full Works', price: '3600', priceCurrency: 'GBP' },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to the page
      </a>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="top">
        <a className="top__mark" href="#main" aria-label="Hard To Bear, back to the top">
          <BearMark />
        </a>
        <nav className="top__links" aria-label="Main">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a className="link" href={n.href}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="button top__action" href="#stool">
          Pull up a stool
        </a>
        <details className="top__menu">
          <summary>Menu</summary>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#stool">Pull up a stool</a>
            </li>
          </ul>
        </details>
      </header>

      <main id="main">
        {/* Hero: two-by-two board. The specials board takes the place of the first photograph. */}
        <section className="hero" aria-label="Hard To Bear">
          <div className="tile hero__name">
            <h1 className="display">Hard To Bear</h1>
          </div>
          <SpecialsBoard />
          {/* PHOTO SLOT: replace with a real photo of the brother's back bar. */}
          <div className="tile hero__bar shutter" data-photo-slot="hero-back-bar">
            <div className="shutter__in">
              <BackBar />
            </div>
          </div>
          <div className="hero__pair">
            <div className="tile">
              <p>Websites for pubs, garages, driving instructors and barbers. Fixed prices, live in seven days.</p>
            </div>
            <div className="tile hero__accent">
              <p>Change anything by sending a text. It&rsquo;s live the same day.</p>
            </div>
          </div>
        </section>

        {/* Intro: statement tiles */}
        <section className="board intro section" aria-labelledby="intro-title" data-rise>
          <div className="tile intro__slogan">
            <h2 id="intro-title" className="display">
              Ask for
              <br />
              Dave.
            </h2>
          </div>
          <div className="tile intro__word">
            <p className="display">7 days</p>
          </div>
          <div className="tile intro__search" data-ui>
            <div className="search" aria-label="A phone search for 'mechanic near me'" role="img">
              <p className="search__bar">mechanic near me</p>
              <p className="search__result">
                <strong>AutoFix Centre</strong>
                <span>4.6 stars · 0.4 mi</span>
              </p>
              <p className="search__result">
                <strong>Tyres &amp; More</strong>
                <span>4.3 stars · 0.9 mi</span>
              </p>
              <p className="search__result">
                <strong>M&amp;J Motors</strong>
                <span>4.8 stars · 1.2 mi</span>
              </p>
              <p className="search__missing">Dave? Not on here.</p>
            </div>
          </div>
          <div className="tile intro__text">
            <p>
              Half the town knows Dave fixes cars. The other half types &ldquo;mechanic near me&rdquo; into their phone and finds
              someone else. Word of mouth built your business, and it still works, but only on people who already know you.
              Everyone else is searching. If you&rsquo;re not on Google, with a site that loads on a phone, shows your prices
              and lets people ring you with one tap, they never hear about you. Hard To Bear builds that site, sorts your Google
              listing, and keeps both up to date when you text a change. You keep doing the job. We make sure the people who
              don&rsquo;t know Dave can find him.
            </p>
          </div>
        </section>

        {/* Trades: tabs and bands */}
        <section id="trades" className="section" aria-labelledby="trades-title">
          <div className="trades__headrow" data-rise>
            <h2 id="trades-title">
              <span className="soft">Pick your trade.</span>
              <br />
              See what you get.
            </h2>
            <a className="button" href="#stool">
              Pull up a stool
            </a>
          </div>
          <TradeTabs />
        </section>

        {/* How it works: chatter into bookings */}
        <section id="how" className="board section" aria-labelledby="how-title">
          <div className="how__head" data-rise>
            <h2 id="how-title">
              From gossip
              <br />
              to bookings
            </h2>
            <p>
              Your customers already talk about you. The site catches that chatter, puts it where Google can see it, and turns
              it into calls and bookings you can count.
            </p>
          </div>
          <div className="how__figure">
            <ChatterDiagram />
            <div className="how__steps-v">
              <div>
                <h3>Chatter</h3>
                <p>People mention you at the bar. Nobody writes it down.</p>
              </div>
              <div>
                <h3>Caught</h3>
                <p>Your site and Google listing hold it: prices, reviews, the lot.</p>
              </div>
              <div>
                <h3>Booked</h3>
                <p>Strangers find you, ring you and book. You get the count every month.</p>
              </div>
            </div>
          </div>
          <div className="how__steps" data-rise>
            <div>
              <h3>Chatter</h3>
              <p>People mention you at the bar. Nobody writes it down.</p>
            </div>
            <div>
              <h3>Caught</h3>
              <p>Your site and Google listing hold it: prices, reviews, the lot.</p>
            </div>
            <div>
              <h3>Booked</h3>
              <p>Strangers find you, ring you and book. You get the count every month.</p>
            </div>
          </div>
        </section>

        {/* Prices: beer mats */}
        <section id="prices" className="board section" aria-labelledby="prices-title">
          <div className="prices__head" data-rise>
            <h2 id="prices-title">Prices on the mat</h2>
            <p>Fixed prices, written down. Turn a mat over to see exactly what&rsquo;s in it.</p>
          </div>
          <BeerMats />
        </section>

        {/* About: the landlord */}
        <section id="landlord" className="board section" aria-labelledby="landlord-title">
          <div className="about__head" data-rise>
            <h2 id="landlord-title">The landlord</h2>
            <p>
              Hard To Bear is Russell Westgarth. He&rsquo;s spent his career in sales, so he builds websites that bring in work,
              not ones that just look nice. You deal with him from the first chat to the monthly report.
            </p>
          </div>
          {/* PHOTO SLOT: replace with a photo of Russell behind the bar. */}
          <figure className="tile about__photo" data-photo-slot="about-russell">
            <BarTop />
            <figcaption className="about__note">
              The first site is his brother&rsquo;s pub, opening in December. Yours could be next.
            </figcaption>
          </figure>
          <div className="about__side">
            <div className="tile about__bear">
              <BearLandlord />
            </div>
            <dl className="about__facts">
              <div>
                <dt>Replies</dt>
                <dd>Same day</dd>
              </div>
              <div>
                <dt>Live in</dt>
                <dd>Seven days</dd>
              </div>
              <div>
                <dt>Your domain</dt>
                <dd>Always yours</dd>
              </div>
              <div>
                <dt>A chat costs</dt>
                <dd>Nothing</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Questions: a band per question */}
        <section id="questions" className="faq" aria-labelledby="questions-title">
          <div className="faq__title">
            <h2 id="questions-title">Asked at the bar</h2>
          </div>
          <div>
            {FAQS.map((f) => (
              <div key={f.q} className="faq__band">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action: the action tile */}
        <section id="stool" className="cta" aria-labelledby="stool-title">
          {/* PHOTO SLOT: replace with a photo of a real bar stool or the pub door. */}
          <div className="tile cta__flank cta__flank--left" data-photo-slot="cta-stool">
            <Stool />
          </div>
          <div className="tile cta__main">
            <h2 id="stool-title">Pull up a stool</h2>
            <p>
              Fifteen minutes, in person or on the phone. Tell us about your trade and we&rsquo;ll tell you straight whether a
              website is worth it.
            </p>
            <StoolForm />
            <p className="cta__guarantee">Last orders guarantee: live in seven days, or your first month of care is on us.</p>
          </div>
          <div className="tile cta__flank cta__flank--right" aria-hidden="true" />
        </section>
      </main>

      <footer className="footer">
        <FooterMark />
        <div className="footer__links">
          <nav className="footer__col" aria-label="Trades">
            <h3>Trades</h3>
            <a className="link" href="#trades">Pubs</a>
            <a className="link" href="#trades">Garages</a>
            <a className="link" href="#trades">Driving instructors</a>
            <a className="link" href="#trades">Barbers</a>
          </nav>
          <nav className="footer__col" aria-label="This page">
            <h3>On this page</h3>
            {NAV.map((n) => (
              <a key={n.href} className="link" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="footer__col">
            <h3>The landlord</h3>
            <a className="link" href="#landlord">About Russell</a>
            <a className="link" href="#stool">Pull up a stool</a>
          </div>
          <div className="footer__contact">
            <h3 className="soft">Get in touch</h3>
            <a className="link" href={`mailto:${CONTACT_EMAIL}?subject=Pulling%20up%20a%20stool`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="footer__last">
          <p>&copy; 2026 Hard To Bear</p>
          <a className="button" href="#stool">
            Pull up a stool
          </a>
        </div>
      </footer>
    </>
  );
}

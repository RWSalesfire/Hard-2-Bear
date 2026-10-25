// The trade pages (/pubs, /garages). Facts come from the research briefs in docs/verticals;
// keep the sources with them, and re-check them when the brief is updated.

export type Trade = {
  slug: string;
  nav: string;
  title: string;
  description: string;
  /** The customer's question, one line per row. The last row is in honey. */
  hero: string[];
  lede: string;
  stats: { figure: string; line: string; source: string; href: string }[];
  checks: string[];
  build: string[];
  pick: { name: string; price: string; why: string; more: string };
  faqs: { q: string; a: string }[];
  work: 'lamplighter' | 'garage';
  formTrade: string;
};

export const TRADES: Trade[] = [
  {
    slug: 'pubs',
    nav: 'Pubs',
    title: 'Websites for pubs | Hard To Bear',
    description: 'Pub websites that answer “is it worth going tonight?” in one scroll. Open now, what’s on, the menu and bookings. Fixed prices, live in seven days.',
    hero: ['Is it worth', 'going', 'tonight?'],
    lede: 'That’s what people want to know before they come in. A pub site has one job: answer it in a single scroll. Open now, what’s on, the food, can I book, can I bring the dog.',
    stats: [
      {
        figure: '1 in 4',
        line: 'UK diners spend 30 seconds or less looking at a menu online.',
        source: 'Popmenu UK dining trends 2026, 600 diners',
        href: 'https://get.popmenu.com/en-gb/toolkit/uk-dining-trends-2026',
      },
      {
        figure: '48%',
        line: 'choose a pub mainly because it’s local. The rest of the decision happens on their phone.',
        source: 'GO Technology survey of 5,000 people, via the Morning Advertiser',
        href: 'https://www.morningadvertiser.co.uk/Article/2025/12/08/pub-service-enters-new-age-as-consumers-embrace-tech-enabled-ordering-and-pre-booking/',
      },
    ],
    checks: ['Is it open right now, and is the kitchen?', 'What’s on tonight: quiz, music, the match', 'The menu, as real text, with prices', 'Can I book, and can I bring the dog?', 'Where do I park?'],
    build: [
      'Open now and kitchen times, worked out live from your hours',
      'Your menu as proper text, never a PDF, with vegan and gluten-free marked',
      'What’s on, changed by sending a text',
      'Table bookings through the system you already use, like ResDiary or Tablein',
      'A private hire page with rooms, prices and an enquiry form straight to you',
      'Call, directions and book on a bar at the bottom of every phone screen',
      'Your Google listing set up, with hours that match to the minute',
    ],
    pick: {
      name: 'Local Pro',
      price: '£2,400',
      why: 'Most pubs change their menu and events every week. Local Pro lets you change menus and prices yourself, and we write the words for you.',
      more: 'Go for Full Works (£3,600) if you want bookings built in for Christmas and big tables.',
    },
    faqs: [
      {
        q: 'I’ve got a Facebook page. Isn’t that enough?',
        a: 'Facebook is good for your regulars. People who don’t know you yet search Google, and Google shows the pubs with a proper listing and a website behind it. We link the two up.',
      },
      {
        q: 'Can I change the specials myself?',
        a: 'On the care plan you text them to Russell and they’re live the same day. On Local Pro and Full Works you can change menus and prices yourself too.',
      },
      {
        q: 'What about allergens?',
        a: 'We mark vegetarian, vegan and gluten-free on the menu and add a clear line about allergies. The allergen details have to come from you, because you’re the one who knows what’s in the food.',
      },
    ],
    work: 'lamplighter',
    formTrade: 'Pub or restaurant',
  },
  {
    slug: 'garages',
    nav: 'Garages',
    title: 'Websites for garages and mechanics | Hard To Bear',
    description: 'Garage websites that settle the fear of a surprise bill: fixed prices, quote requests by text and MOT reminders. Fixed prices, live in seven days.',
    hero: ['Will I get', 'ripped', 'off?'],
    lede: 'That’s what most drivers are thinking before they ring a garage. Your website can settle it first: real prices, a written promise, and reviews from people in your town.',
    stats: [
      {
        figure: '68%',
        line: 'of UK drivers feel anxious going to a garage, mostly about surprise costs.',
        source: 'Garage Matters survey of 2,000 drivers, 2026',
        href: 'https://garagematters.uk/two-in-three-uk-drivers-suffer-garage-anxiety-survey-reveals/',
      },
      {
        figure: '1 in 5',
        line: 'say price is the main reason they pick a garage. Trust comes first.',
        source: 'Motester',
        href: 'https://motester.co.uk/consumer-trust-is-more-important-than-ever-for-uk-garages/',
      },
    ],
    checks: ['How much is an MOT, and can you fit me in?', 'Can you look at this warning light today?', 'What will a service cost for my car?', 'Will you ring before doing extra work?', 'What do other people say about you?'],
    build: [
      'Fixed prices on the page: MOT, services by car size, “from” prices for repairs',
      'Quote requests with the reg, landing as a text on your phone',
      'Your no-surprises promise, written down where everyone can see it',
      'Google reviews on your site, with your rating and real quotes',
      'An MOT reminder sign-up that brings drivers back every year',
      'Tap to call and “can you look today?” on the first screen',
      'Pages for the villages you cover, £150 each',
    ],
    pick: {
      name: 'Local Pro',
      price: '£2,400',
      why: 'Prices go up and services change. Local Pro lets you update the price list yourself, and we write the words for you.',
      more: 'Go for Full Works (£3,600) if you want online MOT booking built in.',
    },
    faqs: [
      {
        q: 'I already use garage software. Will it work with that?',
        a: 'If it does online booking, like HiveBook or TechMan, we link to it rather than build our own. If not, quote requests come straight to you as a text.',
      },
      {
        q: 'Do I have to put prices on the site?',
        a: 'No, but it’s the best thing you can do. Most drivers are worried about the bill, and a fixed MOT and service price answers that before they ring.',
      },
      {
        q: 'Should I show my Trust My Garage badge?',
        a: 'Yes, if you’re a member. We show the schemes you actually belong to, three at most. Any more and people stop reading them.',
      },
    ],
    work: 'garage',
    formTrade: 'Garage or mechanic',
  },
];

export const tradeBySlug = (slug: string) => TRADES.find((t) => t.slug === slug);

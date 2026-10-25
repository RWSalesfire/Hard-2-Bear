// Sample content for the concept pub. The Lamplighter is not a real pub:
// every name, price and time here is made up to show what a real site would hold.

export const PUB = {
  name: 'The Lamplighter',
  street: '14 Mill Lane',
  town: 'Ashby Green',
  postcode: 'AG1 4ML',
  phone: '01234 567 890',
  phoneHref: 'tel:+441234567890',
  mapsHref: 'https://maps.google.com/?q=The+Lamplighter',
  bookHref: '#book',
  // Map pin for the weather line. A made-up pub, so this is Ashby-de-la-Zouch.
  lat: 52.746,
  lng: -1.476,
};

/** Opening hours, 0 = Sunday. Times are minutes after midnight; a close past 24:00 runs into the next day. */
export const HOURS: { day: string; open: number; close: number }[] = [
  { day: 'Sunday', open: 12 * 60, close: 22 * 60 + 30 },
  { day: 'Monday', open: 12 * 60, close: 23 * 60 },
  { day: 'Tuesday', open: 12 * 60, close: 23 * 60 },
  { day: 'Wednesday', open: 12 * 60, close: 23 * 60 },
  { day: 'Thursday', open: 12 * 60, close: 23 * 60 },
  { day: 'Friday', open: 12 * 60, close: 24 * 60 },
  { day: 'Saturday', open: 12 * 60, close: 24 * 60 },
];

export const KITCHEN = 'Food served 12–3pm and 5–9pm in the week, all day on Saturday, and roasts 12–6pm on Sunday until they run out.';

/** Kitchen hours per day, 0 = Sunday, as [open, close] minutes after midnight. */
export const KITCHEN_HOURS: [number, number][][] = [
  [[12 * 60, 18 * 60]],
  [[12 * 60, 15 * 60], [17 * 60, 21 * 60]],
  [[12 * 60, 15 * 60], [17 * 60, 21 * 60]],
  [[12 * 60, 15 * 60], [17 * 60, 21 * 60]],
  [[12 * 60, 15 * 60], [17 * 60, 21 * 60]],
  [[12 * 60, 15 * 60], [17 * 60, 21 * 60 + 30]],
  [[12 * 60, 21 * 60 + 30]],
];

export type Diet = 'V' | 'VG' | 'GF';
export const DIET_LABELS: Record<Diet, string> = { V: 'Vegetarian', VG: 'Vegan', GF: 'Gluten-free' };

export type Dish = { name: string; note?: string; price: string; diet?: Diet[] };

export const MENU: { id: string; label: string; updated: string; dishes: Dish[] }[] = [
  {
    id: 'food',
    label: 'Food',
    updated: 'Updated Tuesday',
    dishes: [
      { name: 'Beer-battered haddock and chips', note: 'Mushy peas, tartare sauce. Gluten-free batter on request', price: '£16.50' },
      { name: 'Steak and ale pie', note: 'Made with Lamplighter Best, mash, greens', price: '£17' },
      { name: 'The Lamplighter burger', note: 'Smoked cheddar, bacon jam, skin-on fries', price: '£15.50' },
      { name: 'Halloumi and roast veg salad', note: 'Lemon, herbs, toasted seeds', price: '£13', diet: ['V', 'GF'] },
      { name: 'Wild mushroom and spinach pie', note: 'Mash, greens, vegan gravy', price: '£15', diet: ['VG'] },
      { name: 'Ploughman’s', note: 'Local cheddar, ham, pickle, crusty bread', price: '£12' },
    ],
  },
  {
    id: 'sunday',
    label: 'Sunday',
    updated: 'Every Sunday from 12',
    dishes: [
      { name: 'Roast topside of beef', note: 'Yorkshire pudding, all the trimmings', price: '£19' },
      { name: 'Roast chicken', note: 'Stuffing, pigs in blankets', price: '£17.50' },
      { name: 'Nut roast', note: 'All the trimmings, vegan gravy', price: '£15', diet: ['VG'] },
      { name: 'Kids’ roast', note: 'Under 12s', price: '£9' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    updated: 'Guest ale changes weekly',
    dishes: [
      { name: 'Lamplighter Best', note: 'House cask ale, 4.1%', price: '£4.60' },
      { name: 'Guest cask ale', note: 'Ask at the bar', price: '£4.80' },
      { name: 'Lager', note: 'Pint', price: '£5.40' },
      { name: 'House red or white', note: '175ml', price: '£6.20' },
      { name: 'Alcohol-free beer', note: 'Bottle', price: '£4', diet: ['VG'] },
    ],
  },
];

export const EVENTS = [
  { photo: 'lpQuiz' as const, when: 'Thursdays, 8pm', title: 'Quiz night', line: 'Teams of up to six. £2 a head, the pot goes to the winners.' },
  { photo: 'lpMusic' as const, when: 'Saturdays, 9pm', title: 'Live music', line: 'Local acts, acoustic sets, no cover charge.' },
  { photo: 'lpRoast' as const, when: 'Sundays, from 12', title: 'Sunday roast', line: 'Book ahead. When it’s gone, it’s gone.' },
  { photo: 'lpDarts' as const, when: 'Mondays, 7pm', title: 'Darts and dominoes', line: 'Pub league night. The board’s free the rest of the week.' },
];

/** The rolling strip under the hero. */
export const TICKER = [
  'Quiz night, Thursday 8pm',
  'Live music, Saturday 9pm',
  'Sunday roast from 12',
  'Dogs welcome',
  'Darts, Monday 7pm',
  'Guest ale every week',
  'Fire’s lit',
];

/** Minutes before closing that last orders are called. */
export const LAST_ORDERS = 15;

export const GOOD_TO_KNOW = ['Dogs welcome inside and out', 'Beer garden', 'Step-free entrance', 'Free parking', 'Sky and TNT Sports', 'Kids welcome until 9pm'];

export const ROOMS = [
  { name: 'The snug', size: '20 seated, 30 standing', price: 'No hire fee. £300 minimum spend' },
  { name: 'The garden room', size: '40 seated, 60 standing', price: '£500 minimum spend, or exclusive hire' },
  { name: 'The whole pub', size: 'Up to 120', price: 'Ask us about dates' },
];

export const PACKAGES = ['Buffets from £25 a head', 'Sit-down dinners from £35 a head', 'Sandwiches and tea for wakes from £14 a head'];

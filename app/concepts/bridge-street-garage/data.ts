// Sample content for the concept garage. Bridge Street Garage is not a real business:
// every name, price and time here is made up to show what a real site would hold.

export const GARAGE = {
  name: 'Bridge Street Garage',
  since: 1987,
  street: '22 Bridge Street',
  town: 'Kingsmead',
  postcode: 'KM4 2BS',
  phone: '01234 567 891',
  phoneHref: 'tel:+441234567891',
  sms: '+441234567891',
  email: 'workshop@bridgestreet.example',
  mapsHref: 'https://maps.google.com/?q=Bridge+Street+Garage',
  rating: 4.9,
  reviews: 212,
};

/** 0 = Sunday. Minutes after midnight; null = closed. */
export const HOURS: { day: string; open: number | null; close: number | null }[] = [
  { day: 'Sunday', open: null, close: null },
  { day: 'Monday', open: 8 * 60, close: 17 * 60 + 30 },
  { day: 'Tuesday', open: 8 * 60, close: 17 * 60 + 30 },
  { day: 'Wednesday', open: 8 * 60, close: 17 * 60 + 30 },
  { day: 'Thursday', open: 8 * 60, close: 17 * 60 + 30 },
  { day: 'Friday', open: 8 * 60, close: 17 * 60 + 30 },
  { day: 'Saturday', open: 8 * 60, close: 12 * 60 },
];

export type Size = 'small' | 'medium' | 'large';
export const SIZES: { id: Size; label: string; hint: string }[] = [
  { id: 'small', label: 'Small', hint: 'Up to 1.4 litre, e.g. Fiesta, Corsa' },
  { id: 'medium', label: 'Medium', hint: '1.4 to 2.0 litre, e.g. Golf, Focus' },
  { id: 'large', label: 'Large', hint: 'Over 2.0 litre, 4x4s and vans' },
];

export const MOT_PRICE = 45;
/** An MOT booked alongside a full or major service. */
export const MOT_WITH_SERVICE = 25;

type Price = number | Record<Size, number>;
export type Job = { id: string; name: string; note: string; price: Price; from?: boolean; service?: 'full' | 'interim' | 'major' };

/** The jobs on the hero job card: what most people ring about. */
export const CARD_JOBS: Job[] = [
  { id: 'mot', name: 'MOT', note: 'Class 4. Free retest if we do the repairs', price: MOT_PRICE },
  { id: 'interim', name: 'Interim service', note: 'Oil, filter and 40 checks', price: { small: 129, medium: 149, large: 169 }, service: 'interim' },
  { id: 'full', name: 'Full service', note: 'All filters, fluids and 70 checks', price: { small: 189, medium: 219, large: 249 }, service: 'full' },
  { id: 'diag', name: 'Warning light check', note: 'First hour, plain-English report', price: 60 },
  { id: 'brakes', name: 'Front brake pads', note: 'Fitted, parts included', price: 95, from: true },
  { id: 'aircon', name: 'Air con regas', note: 'Includes a leak test', price: 69 },
  { id: 'align', name: 'Wheel alignment', note: 'Laser four-wheel check', price: 49 },
];

export const priceFor = (j: Job, size: Size) => (typeof j.price === 'number' ? j.price : j.price[size]);

/** The full price list, by tab. */
export const PRICE_LIST: { id: string; label: string; intro: string; rows: Job[] }[] = [
  {
    id: 'servicing',
    label: 'MOT and servicing',
    intro: 'Prices go by engine size. Not sure which? Tell us the reg and we’ll tell you.',
    rows: [
      CARD_JOBS[0],
      CARD_JOBS[1],
      CARD_JOBS[2],
      { id: 'major', name: 'Major service', note: 'Full service plus spark plugs, brake fluid and coolant', price: { small: 279, medium: 319, large: 359 }, service: 'major' },
      { id: 'motplus', name: 'MOT with a full or major service', note: 'Booked together, the MOT drops to £25', price: MOT_WITH_SERVICE },
    ],
  },
  {
    id: 'tyres',
    label: 'Tyres',
    intro: 'Every price includes fitting, balancing, a new valve and disposal of the old tyre.',
    rows: [
      { id: 'budget', name: 'Budget tyre', note: '15 to 16 inch, per tyre', price: 65, from: true },
      { id: 'mid', name: 'Mid-range tyre', note: 'Our usual pick for most cars', price: 85, from: true },
      { id: 'premium', name: 'Premium tyre', note: 'Michelin, Continental and similar', price: 110, from: true },
      { id: 'puncture', name: 'Puncture repair', note: 'If it’s safe to repair. If not, we’ll tell you why', price: 20 },
      CARD_JOBS[6],
    ],
  },
  {
    id: 'repairs',
    label: 'Repairs',
    intro: '“From” prices are for most cars. We always ring with the exact price before we start.',
    rows: [
      CARD_JOBS[3],
      CARD_JOBS[4],
      { id: 'discs', name: 'Front discs and pads', note: 'Fitted, parts included', price: 185, from: true },
      { id: 'battery', name: 'Battery', note: 'Tested first. Fitted and old one recycled', price: 95, from: true },
      { id: 'cambelt', name: 'Timing belt and water pump', note: 'Usually due every 5 to 7 years', price: 320, from: true },
      { id: 'clutch', name: 'Clutch', note: 'Kit and fitting', price: 450, from: true },
      CARD_JOBS[5],
    ],
  },
];

/** Printed on the back of every job card, in effect. */
export const PROMISES = [
  { title: 'We ring before any extra work', line: 'If we find something else, you get a call with the price. Nothing gets done until you say yes.' },
  { title: 'You see the old parts', line: 'Everything we replace is kept in a box in your boot, so you can see what was worn.' },
  { title: 'The price on the page is the price', line: 'Fixed prices for MOTs, services and tyres. VAT included, no “shop fees”.' },
  { title: 'Free MOT retest', line: 'If it fails and we do the repairs, the retest costs nothing.' },
];

export const STEPS = [
  { stamp: 'In 8:05', title: 'Drop it off', line: 'Any time from 8am. Keys through the door if you’re early.' },
  { stamp: 'Priced', title: 'We ring you', line: 'You get a call by 11 with what we found and a fixed price.' },
  { stamp: 'Approved', title: 'You say yes', line: 'Or no. Either way, there’s no charge for looking.' },
  { stamp: 'Ready 4:40', title: 'Pick it up', line: 'We text when it’s ready, with the bill to match the price.' },
];

export const REVIEWS = [
  { name: 'Sarah K.', text: 'Rang me with a price before touching anything and it was exactly that on the bill. First garage I’ve trusted.' },
  { name: 'Dev P.', text: 'Failed MOT on a Tuesday morning, fixed and passed by 3. Showed me the old brake pads too.' },
  { name: 'Margaret H.', text: 'Told me the noise was nothing to worry about and didn’t charge. That’s why I keep coming back.' },
];

export const WHILE_YOU_WAIT = [
  { title: 'Wait here', line: 'Sofa, Wi-Fi and proper coffee. MOTs take about an hour.' },
  { title: 'Courtesy car', line: 'Free for jobs over a day. Book it when you book the car in.' },
  { title: 'Collect and deliver', line: 'We’ll pick it up from home or work within 3 miles.' },
  { title: 'Bus home', line: 'The 12 stops outside, every 20 minutes into town.' },
];

export const AREAS = ['Kingsmead', 'Little Oakley', 'Hatton Cross', 'Fenwick', 'Stoke Marsh', 'Amberley Green'];

export const FAQ = [
  { q: 'Do I need to stay while you do the MOT?', a: 'No. Most people drop it off and we text when it’s done. If you’d rather wait, an MOT takes about an hour and the coffee’s on us.' },
  { q: 'What happens if it fails?', a: 'We ring you, explain each fail in plain English and give you a fixed price to put it right. If we do the repairs, the retest is free.' },
  { q: 'Will servicing here affect my warranty?', a: 'No. By law you can have a new car serviced anywhere, as long as it’s done to the maker’s schedule with the right parts. We stamp the book and update the digital record.' },
  { q: 'Can you look at it today?', a: 'Usually, if you ring before 10. Warning lights and strange noises get looked at the same day where we can.' },
  { q: 'Do you work on electric and hybrid cars?', a: 'We do MOTs, tyres, brakes and suspension on hybrids and EVs. High-voltage work goes to a specialist we trust, and we’ll tell you that up front.' },
];

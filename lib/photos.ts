// Every photo slot on the concept sites, in one place. Until a slot has a `src`,
// the page shows a labelled placeholder of the right size. To fill a slot, put
// the file in /public/photos and set `src` (and `credit` if the licence asks).

export type PhotoSlot = {
  alt: string;
  /** What to search the open libraries for. */
  query: string;
  /** Background tone for the placeholder, close to the photo's expected light. */
  tone: string;
  src?: string;
  credit?: string;
};

export const PHOTOS = {
  lpHero: {
    alt: 'A village pub at dusk, warm light in the windows',
    query: 'english village pub exterior dusk',
    tone: '#2a2620',
  },
  lpQuiz: {
    alt: 'Friends round a pub table with quiz sheets and pints',
    query: 'pub quiz night table',
    tone: '#3b2f25',
  },
  lpMusic: {
    alt: 'An acoustic guitarist playing in the corner of a pub',
    query: 'acoustic musician pub',
    tone: '#2b2430',
  },
  lpRoast: {
    alt: 'A Sunday roast with Yorkshire puddings and gravy',
    query: 'sunday roast dinner yorkshire pudding',
    tone: '#4a3a28',
  },
  lpGarden: {
    alt: 'A pub beer garden with wooden benches in the sun and a dog under a table',
    query: 'pub beer garden dog',
    tone: '#3d4a2c',
  },
  lpBar: {
    alt: 'Hand pumps on a wooden pub bar',
    query: 'pub bar hand pumps',
    tone: '#3a2a1c',
  },
  lpRoom: {
    alt: 'A private dining room laid for a party',
    query: 'pub function room dining table',
    tone: '#33302a',
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof PHOTOS;

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
    alt: 'A village pub at night, warm light in the windows and a Christmas tree by the door',
    query: 'english village pub exterior dusk',
    tone: '#2a2620',
    src: '/photos/lp-hero.jpg',
  },
  lpQuiz: {
    alt: 'A busy pub bar in the evening, people on stools around high tables',
    query: 'pub quiz night table',
    tone: '#3b2f25',
    src: '/photos/lp-quiz.jpg',
  },
  lpMusic: {
    alt: 'A guitarist and banjo player performing to a packed pub',
    query: 'acoustic musician pub',
    tone: '#2b2430',
    src: '/photos/lp-music.jpg',
  },
  lpRoast: {
    alt: 'A Sunday roast with beef, a Yorkshire pudding, carrots and greens',
    query: 'sunday roast dinner yorkshire pudding',
    tone: '#4a3a28',
    src: '/photos/lp-roast.jpg',
  },
  lpGarden: {
    alt: 'A cold pint on a wooden table outside in the sun',
    query: 'pub beer garden dog',
    tone: '#3d4a2c',
    src: '/photos/lp-garden.jpg',
  },
  lpBar: {
    alt: 'A pint being poured from a row of taps at the bar',
    query: 'pub bar hand pumps',
    tone: '#3a2a1c',
    src: '/photos/lp-bar.jpg',
  },
  lpRoom: {
    alt: 'A table laid with wine and a plated dinner in the afternoon sun',
    query: 'pub function room dining table',
    tone: '#33302a',
    src: '/photos/lp-room.jpg',
  },
  lpDarts: {
    alt: 'Two friends on bar stools, one reaching for a pint',
    query: 'pub bar stools pint',
    tone: '#3a2a1c',
    src: '/photos/stool.jpg',
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof PHOTOS;

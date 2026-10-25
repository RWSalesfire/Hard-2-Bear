// "Many into one": loose chatter on the left, pulled into one ribbon (the site),
// then laid out in neat gold rows (calls and bookings). Positions are seeded so
// the drawing is the same on every render.

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Dot = { a: number; b: number; fill: string };

function dots(): Dot[] {
  const r = rng(659067418);
  const out: Dot[] = [];
  // Chatter: scattered, two pale tones. a = along the flow (0–1), b = across (0–1).
  for (let i = 0; i < 50; i++) {
    out.push({ a: r() * 0.3, b: 0.06 + r() * 0.88, fill: r() > 0.5 ? '#ece6da' : '#5d564d' });
  }
  // Caught: a tight ribbon three dots deep.
  for (let col = 0; col < 22; col++) {
    for (let row = 0; row < 3; row++) {
      out.push({ a: 0.35 + col * (0.28 / 21), b: 0.44 + row * 0.06, fill: '#a39d95' });
    }
  }
  // Booked: neat, evenly spaced gold rows.
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 9; col++) {
      out.push({ a: 0.71 + col * (0.28 / 8), b: 0.18 + row * 0.16, fill: '#c9a45a' });
    }
  }
  return out;
}

const DOTS = dots();

export default function ChatterDiagram() {
  return (
    <>
      <svg
        className="h"
        viewBox="0 0 1200 270"
        role="img"
        aria-label="Loose dots on the left are pulled into a tight ribbon in the middle, then laid out in neat gold rows on the right"
      >
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.a * 1200} cy={d.b * 270} r={6} fill={d.fill} />
        ))}
      </svg>
      <svg
        className="v"
        viewBox="0 0 270 900"
        role="img"
        aria-label="Loose dots at the top are pulled into a tight band in the middle, then laid out in neat gold rows at the bottom"
      >
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.b * 270} cy={d.a * 900} r={6} fill={d.fill} />
        ))}
      </svg>
    </>
  );
}

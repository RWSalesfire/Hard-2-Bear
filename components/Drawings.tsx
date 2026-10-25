// Flat drawings in the page's palette, standing in for photography until
// Russell's own photos of the pub and the street replace them.

const C = {
  bg: "#0c0a08",
  surface: "#181512",
  surface2: "#221d18",
  wood: "#3a2a1c",
  woodDark: "#2a1e14",
  brass: "#c9a45a",
  brassLight: "#dbb76c",
  green: "#1e4a3b",
  greenLight: "#2d6652",
  paper: "#ece6da",
  amber: "#b9792c",
  ruby: "#7a2a22",
};

/** The landlord bear: head and shoulders, tea towel over one shoulder. */
export function BearLandlord({ title = "The Hard To Bear landlord bear" }: { title?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={title}>
      <title>{title}</title>
      {/* shoulders and shirt */}
      <path d="M30 200 C34 160 62 146 100 146 C138 146 166 160 170 200 Z" fill={C.paper} />
      {/* waistcoat */}
      <path d="M58 200 C60 170 74 156 92 152 L100 200 Z M142 200 C140 170 126 156 108 152 L100 200 Z" fill={C.bg} />
      {/* tea towel */}
      <path d="M128 150 L152 156 L146 200 L124 200 Z" fill={C.brass} />
      <path d="M130 166 L150 170 M129 178 L148 182" stroke={C.green} strokeWidth="4" />
      {/* ears */}
      <circle cx="58" cy="52" r="20" fill={C.amber} />
      <circle cx="142" cy="52" r="20" fill={C.amber} />
      <circle cx="58" cy="52" r="10" fill={C.wood} />
      <circle cx="142" cy="52" r="10" fill={C.wood} />
      {/* head */}
      <ellipse cx="100" cy="94" rx="52" ry="50" fill={C.amber} />
      {/* muzzle */}
      <ellipse cx="100" cy="114" rx="24" ry="18" fill={C.paper} />
      <ellipse cx="100" cy="105" rx="9" ry="6.5" fill={C.bg} />
      <path d="M92 120 Q100 127 108 120" stroke={C.bg} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="80" cy="86" r="5.5" fill={C.bg} />
      <circle cx="120" cy="86" r="5.5" fill={C.bg} />
      {/* brows, friendly */}
      <path d="M71 74 Q80 69 88 73 M112 73 Q120 69 129 74" stroke={C.wood} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Small mark for the top-left tile. */
export function BearMark() {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <circle cx="18" cy="17" r="8" fill={C.bg} />
      <circle cx="46" cy="17" r="8" fill={C.bg} />
      <ellipse cx="32" cy="35" rx="20" ry="19" fill={C.bg} />
      <ellipse cx="32" cy="42" rx="9" ry="7" fill={C.paper} />
      <ellipse cx="32" cy="38.5" rx="3.6" ry="2.6" fill={C.bg} />
      <circle cx="25" cy="31" r="2.2" fill={C.paper} />
      <circle cx="39" cy="31" r="2.2" fill={C.paper} />
    </svg>
  );
}

const bottleSets = [
  { x: 40, h: 120, w: 26, c: C.green },
  { x: 76, h: 96, w: 30, c: C.amber },
  { x: 116, h: 132, w: 22, c: C.greenLight },
  { x: 148, h: 104, w: 28, c: C.ruby },
  { x: 186, h: 118, w: 24, c: C.brass },
  { x: 220, h: 90, w: 34, c: C.paper },
  { x: 266, h: 126, w: 24, c: C.green },
  { x: 300, h: 100, w: 28, c: C.amber },
];

function Shelf({ y, offset }: { y: number; offset: number }) {
  return (
    <g>
      {bottleSets.map((b, i) => {
        const x = (b.x + offset) % 760 + 20;
        const top = y - b.h;
        return (
          <g key={i}>
            <rect x={x} y={top + 34} width={b.w} height={b.h - 34} fill={b.c} />
            <rect x={x + b.w / 2 - 5} y={top} width={10} height={36} fill={b.c} />
            <rect x={x + 3} y={top + 64} width={b.w - 6} height={26} fill={C.paper} opacity="0.85" />
          </g>
        );
      })}
      {bottleSets.map((b, i) => {
        const x = (b.x + offset + 380) % 760 + 20;
        const top = y - b.h + 8;
        return (
          <g key={`b${i}`}>
            <rect x={x} y={top + 34} width={b.w} height={b.h - 42} fill={bottleSets[(i + 3) % 8].c} />
            <rect x={x + b.w / 2 - 5} y={top} width={10} height={36} fill={bottleSets[(i + 3) % 8].c} />
          </g>
        );
      })}
      <rect x="0" y={y} width="800" height="14" fill={C.wood} />
    </g>
  );
}

/** The back bar: shelves of bottles, a mirror, brass taps and the bar top. */
export function BackBar({ title = "Drawing of a pub's back bar: shelves of bottles above brass beer taps" }: { title?: string }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label={title}>
      <title>{title}</title>
      <rect width="800" height="600" fill={C.woodDark} />
      <rect x="0" y="0" width="800" height="40" fill={C.surface} />
      <rect x="60" y="60" width="680" height="300" fill={C.surface2} />
      <Shelf y={190} offset={0} />
      <Shelf y={340} offset={170} />
      {/* bar top */}
      <rect x="0" y="430" width="800" height="26" fill={C.brass} />
      <rect x="0" y="456" width="800" height="144" fill={C.wood} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={20 + i * 100} y="476" width="80" height="104" fill={C.woodDark} />
      ))}
      {/* taps */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 200 + i * 90;
        return (
          <g key={i}>
            <rect x={x} y="372" width="14" height="58" fill={C.brassLight} />
            <rect x={x - 12} y="334" width="38" height="44" fill={[C.green, C.paper, C.ruby, C.amber, C.greenLight][i]} />
            <rect x={x - 4} y="424" width="22" height="8" fill={C.brass} />
          </g>
        );
      })}
    </svg>
  );
}

/** A pint on the bar with a beer mat: for the landlord tile. */
export function BarTop({ title = "Drawing of a pint on a beer mat at the end of the bar" }: { title?: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={title}>
      <title>{title}</title>
      <rect width="800" height="500" fill={C.surface2} />
      <rect x="0" y="0" width="800" height="300" fill={C.woodDark} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={30 + i * 130} y="40" width="100" height="220" fill={C.wood} />
      ))}
      <rect x="0" y="300" width="800" height="24" fill={C.brass} />
      <rect x="0" y="324" width="800" height="176" fill={C.wood} />
      {/* beer mat */}
      <ellipse cx="400" cy="372" rx="120" ry="30" fill={C.paper} />
      <ellipse cx="400" cy="372" rx="96" ry="22" fill={C.green} />
      {/* pint */}
      <path d="M346 150 L454 150 L442 372 L358 372 Z" fill={C.amber} />
      <path d="M346 150 L454 150 L452 186 L348 186 Z" fill={C.paper} />
      <rect x="372" y="200" width="14" height="140" fill={C.brassLight} opacity="0.55" />
    </svg>
  );
}

/** A bar stool, for the call to action. */
export function Stool({ title = "Drawing of an empty bar stool" }: { title?: string }) {
  return (
    <svg viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={title}>
      <title>{title}</title>
      <rect width="300" height="400" fill={C.surface} />
      <rect x="0" y="330" width="300" height="70" fill={C.woodDark} />
      <ellipse cx="150" cy="120" rx="80" ry="22" fill={C.ruby} />
      <rect x="70" y="120" width="160" height="22" fill={C.ruby} />
      <rect x="92" y="142" width="14" height="200" fill={C.brass} />
      <rect x="194" y="142" width="14" height="200" fill={C.brass} />
      <rect x="140" y="142" width="14" height="190" fill={C.brassLight} />
      <rect x="86" y="250" width="128" height="12" fill={C.brass} />
    </svg>
  );
}

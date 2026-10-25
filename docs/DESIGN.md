# Hard To Bear – Design Spec

The rulebook for Hard To Bear's own agency site. It replaces the first-pass brief in `AGENCY_BRIEF.md`.

**Agency site only.** Mock and client sites (like The Lamplighter) get their own brand, built around the client. They must look distinctly different from Hard To Bear and from each other. Nothing here applies to them.

**Where it comes from:** Russell's three references, captured as phone-width screenshots on 25 October 2026: Superside, KOTA and ISI Global. The aim is the same league as those sites, in Hard To Bear's own voice. It is not a copy of any of them.

## 1. Brand

- **Direction:** dark and bold. Mostly black, honey as the punch, huge uppercase headlines.
- **Values, loudest first:** straight talking (no jargon, no sales patter, says when a site isn't worth it), and local and personal (one person you can actually ring).
- **The bear:** the logo mark only.

## 2. Colour

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0B0B0A` | Page background. |
| `surface` | `#151413` | Cards on black. |
| `surface-2` | `#1F1E1C` | Second card tone, icon tiles. |
| `ink` | `#F4F2EE` | Text on black; also the light call-to-action band. |
| `muted` | `#9A958D` | Secondary text. |
| `honey` | `#F5A524` | **The brand colour.** Buttons, one word per headline, the marquee band, the promises band, the hero disc, the footer name. |

Rules:
- Text on honey is black, never white.
- One honey word per headline, at most. Never honey on honey.
- The page alternates black with two full-width breaks: the honey promises band and the light call-to-action band.

## 3. Type

**One family: Archivo** (Google Fonts), using its width axis.

| Step | Phone | Desktop | Set as |
|---|---|---|---|
| Hero | 38–64px | 60–112px | 800, width 112%, uppercase, leading 0.88 |
| Display | 46px | up to 156px | 800, width 112%, uppercase, leading 0.88 |
| Heading | 36px | up to 88px | 800, width 112%, uppercase, leading 0.92 |
| Title | 22px | 28px | 700, sentence case |
| Lead | 19px | 23px | 400, leading 1.45 |
| Body | 17px | 18px | 400, leading 1.55 |
| Label | 13px | 13px | 700, uppercase, 0.1em tracking |

Rules:
- Headlines are short, uppercase and end with a full stop ("THE WORK.", "FOUR STEPS. NO FAFF.").
- No serif and no italics anywhere on the agency site.
- Hero lines never break mid-word; long words use a non-breaking hyphen.

## 4. Shape and space

- **Corners:** square-ish. Cards 6px, buttons, chips, inputs and icon tiles 4px.
- **Buttons:** rectangular, uppercase, with the arrow in its own square cell on the right. Honey on black; black on honey or light.
- **Lines:** 2px rules divide steps, FAQ rows and promises.
- **Bullets:** small honey squares.
- **Gutter:** 20px phone, 40px desktop. Max width 1360px. Sections 112px apart on phones, 180px on desktop.

## 5. Imagery

- **The work is the imagery:** screenshots and recordings of mock and client sites, on phones, shown on the client's own brand colour (e.g. the Lamplighter's oxblood).
- **The hero:** a phone demo of the care plan (a text arrives, the site updates) standing on a honey disc.
- **No clip-art, ever.** No stock photos of laptops.

## 6. Motion (GSAP)

| Moment | Move |
|---|---|
| Page load | Hero lines rise from their masks, 90ms apart. |
| Hero phone | Rises in, then loops the care-plan demo. |
| Marquee | The honey band drifts sideways, faster when you scroll. |
| Sections | Parts rise 32px and fade in, once. |
| Work | Phones drift at different speeds inside the card. |
| Figures | Count up once. |
| Buttons | Arrow nudges up and right on hover. |

Transform and opacity only. Under `prefers-reduced-motion` everything is static and readable.

## 7. Homepage order

1. Hero: "No-nonsense websites for local grafters." with the phone demo.
2. Honey trades marquee.
3. Problem: "Half the town asks for Dave." with the "near me" search.
4. Work: The Lamplighter, and "Your business here."
5. Trades: four cards, pubs first in honey.
6. How it works: four numbered steps.
7. Promises (honey band): 7 days, £50, 1 tap, 0 logins.
8. Prices: four cards, Local Pro in honey.
9. Straight answers (FAQ).
10. Pull up a stool (light band): who you'll deal with, the guarantee and the form.
11. Footer with the name set huge in honey.

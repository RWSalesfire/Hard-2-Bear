# Hard To Bear – Design Spec

The rulebook for the agency site and every mock site built under the Hard To Bear name. It replaces the first-pass brief in `AGENCY_BRIEF.md` and the "back-bar wall" homepage.

**Where it comes from:** Russell's three references, captured as phone-width screenshots on 25 October 2026: Superside (superside.com), KOTA (kota.co.uk) and ISI Global (isiglobal.com, built by KOTA). The aim is the same league as those sites, in Hard To Bear's own voice. It is not a copy of any of them.

**Skills:** this spec is the brief. `impeccable` does craft and polish and follows it. `taste-skill`'s house rules ban several things this spec asks for (pill buttons, rounded cards, numbered steps, serif accent words, small labels), so it is not used for this site. GSAP's official skills handle motion once installed.

## 1. What the references share

| Trait | What it looks like |
|---|---|
| Calm ground, hard contrast | Warm off-white pages broken by full black sections. One sharp accent colour. |
| Confident type | Large, sentence case, tight. A clean sans, with a serif on a few words for warmth. |
| Imagery everywhere | Every section carries a picture. Most of it is the work: sites on phones and laptops, case-study shots, lifestyle photography. |
| Soft components | Pill buttons with an arrow, big-radius cards, tag chips, numbered steps, tap-to-open FAQs. |
| Proof | Client names, case studies, big statistics. |
| Mobile first | One column, generous spacing, big type, motion on scroll. |

## 2. Colour

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F2EFEA` | Page background. Warm greige, deliberately not yellow cream. |
| `paper-2` | `#E8E4DD` | Cards and tiles on paper. |
| `ink` | `#121110` | Text and dark buttons. |
| `ink-soft` | `#5E5A55` | Secondary text. |
| `night` | `#0D0D0C` | Dark sections (hero, work, final call to action). |
| `honey` | `#F5A524` | **The accent.** Primary button, arrow circles, one highlight per screen. Never a large background except the call to action block. |
| `honey-soft` | `#FCE7BD` | Tag chips and soft backgrounds behind device mock-ups. |

Rules:
- Text on honey is `ink`, never white.
- One accent per screen. If two things are honey, one of them is wrong.
- Contrast: body text at least 4.5:1 on its background. `ink-soft` is never used on `paper-2` below 16px.

## 3. Type

Two families from one designer, so they sit together naturally. Both are free on Google Fonts.

- **Sans: Instrument Sans** (400, 500, 600) for headings, body and interface.
- **Serif: Instrument Serif** (regular and italic) for one to three words inside a headline, and for big numbers.

| Step | Phone | Desktop | Set as |
|---|---|---|---|
| Display | 44px | 96px | Sans 500, leading 1.0, tracking -0.03em |
| Heading | 34px | 64px | Sans 500, leading 1.05, tracking -0.025em |
| Title | 24px | 32px | Sans 500, leading 1.15 |
| Lead | 20px | 24px | Sans 400, leading 1.4 |
| Body | 17px | 18px | Sans 400, leading 1.55 |
| Small | 14px | 14px | Sans 500; used for labels and chips |
| Number | 64px | 120px | Serif 400, leading 0.9 |

Rules:
- Sentence case everywhere except small labels, which may be uppercase with 0.08em tracking (max one per section).
- A serif word appears in at most one headline per screen, e.g. "Websites that *pull a crowd*".
- Headlines no more than three lines on a phone. Body lines 45–70 characters.

## 4. Space and shape

- **Gutter:** 20px on phones, 40px on desktop. Content max width 1320px.
- **Section spacing:** 96px on phones, 160px on desktop.
- **Radius:** cards and big images 28px; small images and inputs 16px; buttons and chips fully round.
- **Shadows:** none at rest. Device mock-ups may carry one soft shadow, because they float.
- **Lines:** a 1px `ink` at 12% opacity divides list items and FAQ rows. Nothing else is outlined except secondary buttons and chips.

## 5. Components

| Component | Spec |
|---|---|
| Top bar | Logo left, round menu button right (48px). On scroll, it gains a `paper` background. Desktop adds 4 links and the honey button. |
| Primary button | Pill, honey fill, `ink` text, with a 28px `ink` circle holding a white ↗ arrow at the right end. Min height 52px. |
| Secondary button | Pill, 1.5px `ink` outline, text plus →. |
| Chip | Pill, `honey-soft` or 1px outline, Small step. |
| Work card | Image (16:10 desktop, 4:5 phone, radius 28) with a device mock-up on a `honey-soft` or photo background, then "Business – What we built", one line with the business in serif. |
| Service card | `paper-2`, radius 28, title, two lines, chips, an image at the bottom. |
| Process step | Small "01 —" label, a Title, one or two lines. In a column on phones, a row on desktop. |
| Guarantee figure | Number step in serif ("7 days", "£50", "1 tap"), a short line under it, divided by 12% lines. |
| FAQ | Rows with a + that turns to ×; answer opens below. All rows keyboard-operable. |
| Call to action | Big `night` or honey block: heading, one line, primary button, and the last orders guarantee in Small. |
| Footer | `night`; big "Pull up a stool" heading, email with honey arrow circle, small links, the bear mark. |

## 6. Imagery

- **Every section has a picture.** No clip-art, ever.
- **The work is the hero imagery:** screenshots and short screen recordings of the mock sites (pub first, then garage), placed on phones and laptops, angled, on `honey-soft` or photo backgrounds.
- **Photography:** real photos from open libraries (Unsplash, Wikimedia Commons, Openverse), credited where the licence asks. Pubs, workshops, high streets, people at work. Warm, natural light, with no fake smiles at laptops.
- **On client sites:** only the client's own real photos (see the house playbook). Library photos are for mock sites and the agency site only, and the mock sites are labelled as concepts.
- **The bear:** the logo mark only. No illustrations of it elsewhere.

## 7. Motion (GSAP)

| Moment | Move |
|---|---|
| Page load | Hero headline lines rise out of a mask, 80ms apart, 0.9s. |
| Hero media | Starts at 0.92 scale with a radius, settles to full size as you scroll the first 40%. |
| Section entrance | Heading, then text, then picture; rise 24px and fade, 70ms stagger, once only. |
| Work cards | Images reveal with a clip from the bottom; slight parallax inside the frame. |
| Guarantee figures | Count up once when they enter. |
| Buttons | Arrow nudges 3px on hover or press; press scales to 0.97. |
| Live demo | A phone mock-up: a text message arrives ("Can you change quiz night to Thursday?") and the pub site on screen updates. This replaces the chalkboard. |

Every move uses transform and opacity only, and switches to a plain fade under `prefers-reduced-motion`. Nothing important waits for an animation to be readable.

## 8. Voice

Keep the cheek, lose the theme park. Plain, direct, British. The pub idea lives in a few phrases ("Pull up a stool", "last orders guarantee"), not in costumes, chalk fonts or props.

## 9. Homepage outline (to be built)

1. **Hero (night):** "Websites that *pull a crowd*" (working line), one line on who it's for, primary button, the live phone demo or a hero photo.
2. **The problem:** the "Ask for Dave" word-of-mouth story, with a photo.
3. **Work:** the pub and garage mock sites as work cards.
4. **What you get:** service cards by trade (pubs, garages, driving instructors, barbers).
5. **How it works:** four numbered steps: chat, plan, build, live.
6. **Guarantees:** "7 days", "£50 a month", "1 tap to call", in serif numbers.
7. **Prices:** three packages and the care plan as cards; the recommended one in honey.
8. **FAQ.**
9. **Call to action and footer.**

# Hard To Bear – Agency Site Design Brief

First pass at the design plan for turning Hard To Bear from a sales consultancy site into a web design agency site. Nothing in the live site has changed yet.

## Skills in this repo

All live in `.claude/skills/`, each with its own licence file.

| Job | Skills |
|---|---|
| Design | `taste-skill` (main design direction), `impeccable` (critique and polish), `ui-ux-pro-max` (palettes and fonts for the mock sites) |
| Pre-launch checks | `web-design-guidelines` |
| Copy and selling | `copywriting`, `cro`, `pricing`, `offers`, which read `.claude/product-marketing.md` |
| Local SEO | `gbp-optimization`, `local-schema`, `local-landing-pages`, `review-management`, `local-seo-audit`, `service-area-seo`, `client-deliverables` |

This brief was a first pass. The design direction below gets re-run through `taste-skill` before any homepage code is written.

## The brief

- **Business:** a side-business web design agency run by Russell Westgarth.
- **Audience:** owner-run local businesses. Pubs, garages, driving instructors, barbers. Busy, not technical, sceptical of agencies.
- **The page's job:** get a local business owner to ask for a quote. They should leave knowing the price, what they get and that it's one real person doing it.
- **Must keep:** the Hard To Bear name, the bear mascot, the direct, slightly cheeky voice.
- **Headline:** "Is your website hard to bear?"

## Where the look comes from

The high street. These businesses already have a visual language: painted shop fascias, enamel signs, pub boards and garage price lists. The site should look like it belongs on that street, made by someone who gets it, rather than like a tech startup.

## Colour

| Name | Hex | Use |
|---|---|---|
| Bottle green | `#1E4A3B` | Fascia band, footer, primary dark |
| Enamel white | `#F7F7F2` | Page background |
| Signal yellow | `#F2C230` | Primary buttons, one highlight per screen |
| Pillar-box red | `#C8102E` | The bear, small accents, errors |
| Ink | `#1B1F23` | Body text |
| Slate | `#5B6670` | Secondary text, rules |

The red keeps a thread back to the current burnt-orange brand.

## Type

- **Display:** Zilla Slab, bold. A slab serif reads like shop signage and enamel signs. Used large, set tight, sentence case.
- **Body:** Public Sans, regular and semibold. Plain, readable, made for public information.
- Scale: 16px body, 1.25 ratio. Lines kept under 70 characters.

## Layout

Left-aligned throughout, so it reads like a notice rather than a pitch. Single column on mobile. Mobile is the main target, since that's where these owners will see it.

```
┌──────────────────────────────────────────┐
│ ████ FASCIA BAND (bottle green) ████████ │  ← the one bold moment:
│  Is your website                    🐻   │    headline "painted" on a
│  hard to bear?                           │    shop fascia, bear on the sign
│ ████████████████████████████████████████ │
│  Websites for pubs, garages and local    │
│  businesses. Fixed prices. [Get a quote] │
├──────────────────────────────────────────┤
│  Sound familiar?  (3 short lines)        │
├──────────────────────────────────────────┤
│  The work  (mock sites as screenshots,   │
│  each on a phone frame, labelled concept)│
├──────────────────────────────────────────┤
│  PRICE LIST (like a garage board)        │
│  Starter ............. £1,500            │
│  Local Pro ........... £2,400            │
│  Full Works .......... £3,600            │
│  Care plan ........... £50/month         │
│  [what's in each – expandable rows]      │
├──────────────────────────────────────────┤
│  How it works: 1 Chat 2 Plan 3 Build     │
│  4 Launch  (numbered because it IS a     │
│  sequence)                               │
├──────────────────────────────────────────┤
│  About · FAQs · Contact form             │
└──────────────────────────────────────────┘
```

## Principles

1. **One bold moment:** the fascia hero. Everything after it is quiet: white background, ink text, plenty of space.
2. **Prices on show, laid out like a price list:** a list with dotted leaders, not three marketing cards. This is the most useful thing on the page for this audience.
3. **Show, don't claim:** the work section uses real screenshots on phones, not icons and adjectives.
4. **Plain words:** say "Get a quote", not "Start your journey". Name things the way a pub landlord would.
5. **Hardly any motion:** one entrance on the fascia, and nothing animating as you scroll.

## Review against the brief

What changed from the first idea, and why:

- **Packages:** they started as three rounded cards with shadows. That's the generic SaaS look and has nothing to do with the high street. They're now a price-list board.
- **Background:** a warm cream was considered and dropped. It's a common AI-generated default, so the page uses a cooler enamel white instead.
- **Section labels:** small all-caps labels above each heading ("OUR WORK", "PRICING") were dropped. Headings say it plainly instead.

## Still to decide

- Real photos versus illustration for the mock-site screenshots.
- Whether the bear gets redrawn to suit the signage look or stays as it is.
- Final package contents and prices (see the plan doc).

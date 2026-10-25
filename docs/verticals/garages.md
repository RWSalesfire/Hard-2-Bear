# Vertical brief: Garages and mechanics

Version 1, 25 October 2026. Researched from web search results only (this session could not open sites directly). Top up with real competitor screenshots on the next pass. Update after every garage build.

## 1. The one thing to know

**Drivers are anxious, not price-shopping.** In a 2026 survey of 2,000 drivers, 68% said they feel anxious going to a garage, mainly about surprise costs, and 36% don't feel they know enough to discuss repairs ([Garage Matters](https://garagematters.uk/two-in-three-uk-drivers-suffer-garage-anxiety-survey-reveals/)). In another survey, 37% said they don't trust garages to be fair and transparent ([Fixter](https://www.fixter.co.uk/blog/mot-confidence-report)). Only around 1 in 5 name price as their main reason for choosing ([Motester](https://motester.co.uk/consumer-trust-is-more-important-than-ever-for-uk-garages/)).

So a garage site's real job is **to calm a nervous driver and remove the fear of the unknown bill**. Every section should answer "will I be ripped off?" before the phone rings.

Caveat: the surveys were commissioned by firms with an interest (warranty, MOT and data companies), and the price figures vary widely, from 11% to 48% depending on wording ([Bridgestone via Garage Talk](https://www.garagetalkonline.co.uk/news/bridgestone-survey-reveals-what-really-matters-to-motorists-trust-familiarity-and-coffee)). Trust coming first is the consistent finding.

## 2. Who's searching, and when

| Moment | What they type | What they need first |
|---|---|---|
| MOT reminder arrives | "MOT near me", "MOT [town]" | Price, next available slot, book now |
| Warning light comes on | "engine light on garage near me" | Can you look today, rough cost of a diagnostic, call button |
| Strange noise or failure | "brakes squeaking [town]" | Do you do this, honest first step, reviews |
| Service due | "car service [town]" | Fixed service prices by car size, what's included |
| Just moved to the area | "good garage [town]" | Reviews, how long established, trust badges |
| EV or hybrid owner | "hybrid service near me" | Proof they're trained and equipped |

"MOT near me" searchers are typically ready to book ([ProfileTree](https://profiletree.com/seo-for-garages/)). National chains (Halfords, Kwik Fit) dominate paid search, so an independent wins on its Google Business Profile, reviews and town-specific pages ([Whito](https://whito.co.uk/garages/)).

## 3. Must-have features, in priority order

1. **Tap to call and a "can you look today?" message**, visible on the first screen. Most garage jobs start with a worried phone call.
2. **Fixed prices on the page:** MOT (the car cap is £54.85; most independents charge less ([passrates.uk](https://passrates.uk/guide/mot-explained-uk)), so "MOT £45, always" is a strong headline), interim and full service by car size, diagnostic check, and "from" prices for common jobs (brakes, clutch, timing belt).
3. **Book or request a quote with the registration.** If the garage already uses a management system with online booking (Garage Hive's HiveBook, TechMan, Torq'd, Motion Bookings, BookMOT), embed or link to it rather than building our own ([Torq'd comparison](https://www.torqd.uk/blog/best-garage-management-software-uk), vendor-written). If not, a quote form: registration, what's wrong, photo upload, phone. It lands as a text on the owner's phone.
4. **The "no surprises" promise**, spelled out: "We call you with a price before we do any extra work. We show you the old part." This answers the anxiety directly.
5. **Reviews, front and centre**, pulled from Google. Show the count and the rating, plus 3 short real quotes.
6. **Trust badges the garage actually holds:** Trust My Garage (RMI/IGA, about 2,700 members, Chartered Trading Standards approved code) ([Trading Standards](https://tradingstandards.uk/business-hub/code-sponsors/trust-my-garage)), Motor Ombudsman accreditation ([Ageas](https://ageas.co.uk/solved/your-car/how-to-find-a-good-garage)), Good Garage Scheme, manufacturer or parts-network approvals, IMI accreditation. Too many logos confuse people, so show at most three ([Auto Retail](https://auto-retail.co.uk/blog/2010/10/25/who-needs-another-sticking-plaster)).
7. **MOT reminder sign-up:** reg plus mobile number. Cheap to build, and it brings drivers back every year.
8. **While-you-wait and getting home:** waiting area, Wi-Fi, courtesy car, collection and delivery, nearest bus. These remove the "how will I get to work?" objection.
9. **A page per town or village served**, each with real local detail. GarageSite's CNR Services example does this well ([GarageSite](https://garagesite.co.uk/projects)).
10. **EV and hybrid**, only if they're genuinely trained and equipped. Independents do 72% of UK servicing, and EV work is growing fast from a small base ([What Car?](https://whatcar.com/news/electric-car-servicing-are-local-garages-ready-for-evs/n26762), [PMM](https://pmmonline.co.uk/news/ev-services-on-the-rise/)).

**Nice to have, by package:**
- **Local Pro:** MOT due-date checker (enter a reg, see when the MOT is due, offer a reminder). Needs approved access to the DVSA MOT History API, which is free under the Open Government Licence but requires an application ([DfT](https://findtransportdata.dft.gov.uk/dataset/mot-history-api)), and optionally the DVLA Vehicle Enquiry Service API for make and model ([DVLA](https://dvladigital.blog.gov.uk/2020/03/12/dvlas-new-api-developer-portal-launch-first-api-vehicle-enquiry-service-ves-on-gov-uk/)). Apply once as Hard To Bear and reuse it across garage clients.
- **Full Works:** live online booking with deposits, pay-monthly repair finance if they offer it, and a "what's that noise?" guide in plain English.

## 4. Page structure (default, adapt per client)

1. Hero: who they are, the town, "MOT £X", call button, book or quote button.
2. The no-surprises promise.
3. Services with fixed prices.
4. Reviews.
5. How it works: drop off, we call with a price, you approve, pick up.
6. The team and the workshop (real photos).
7. Trust badges, waiting area and courtesy car.
8. Areas covered.
9. FAQ (in plain English: "Do I need to stay?", "What if it fails its MOT?").
10. Find us: map, opening hours, parking.

## 5. Google markup and local SEO

- **Schema:** `AutoRepair`, with `openingHoursSpecification`, `priceRange`, `areaServed`, `aggregateRating` (only from real reviews) and an `OfferCatalog` for MOT and service prices.
- **Google Business Profile:** primary category such as "Auto repair shop" or "Car repair and maintenance service" (check Google's current list); add "MOT testing centre"-type secondaries where they exist. Services listed with prices. Weekly posts.
- **Name, address and phone** identical everywhere.
- **Town pages** with genuinely local content, never copy-pasted with the town swapped.

## 6. Clichés to avoid (the templated garage look)

- A stock photo of a spanner, a socket set or a mechanic with a clean face and a clipboard.
- Black-and-red "racing" colour schemes and chequered flags (the default for garage templates: GarageSite's own example uses dark with red accents).
- "Family-run since…" as the headline. Fine as a detail, not the pitch.
- Twenty service tiles with icons. Most drivers want 5 answers, not 20 boxes.
- "Competitive prices" without a single number.
- Car-brand logos the garage isn't approved by.
- Pre-written generic content packs (some providers ship 27 pages of it as standard) ([Websites4U](https://www.websites4ukgarages.co.uk/)).

## 7. Where the design idea comes from instead

Take it from the garage itself, never from "garage". Starting points:

- **The job card or invoice:** an honest, itemised layout as the visual language (it's literally the no-surprises promise).
- **The number plate:** the reg as the main interaction (enter it, see your MOT date and fixed prices).
- **The building:** the actual unit, its signage, the colour of its roller doors, the street it's on.
- **The owner's specialism:** German cars, Land Rovers, classics, vans, EVs. Autodeutsche's moody specialist photography is a good example of committing to one thing ([Zarla](https://www.zarla.com/inspiration/auto-repair)).
- **Their history:** an old photo of the forecourt, the founder's first van.

Run it past the design register so no two garage sites share a palette, type pairing or hero.

## 8. Photo shot list (for the client's own photos)

1. The front of the workshop, doors open, in daylight.
2. The owner and team, in workwear, looking at the camera (not posed with a spanner).
3. A car on the ramp, mid-job.
4. Hands at work: a brake disc, a diagnostic screen.
5. The waiting area and the coffee machine.
6. The courtesy car.
7. Any accreditation certificates on the wall.
8. The street sign or a local landmark, for the "find us" section.

## 9. What to report monthly (care plan)

- Calls from the site (tracked number or click-to-call taps).
- Quote requests and online bookings.
- MOT reminder sign-ups.
- Direction requests from Google Business Profile.
- New Google reviews.

## Sources

- [Garage Matters: two in three UK drivers suffer garage anxiety](https://garagematters.uk/two-in-three-uk-drivers-suffer-garage-anxiety-survey-reveals/)
- [Fixter: MOT confidence report](https://www.fixter.co.uk/blog/mot-confidence-report)
- [Motester: consumer trust for UK garages](https://motester.co.uk/consumer-trust-is-more-important-than-ever-for-uk-garages/)
- [Garage Talk: Bridgestone survey](https://www.garagetalkonline.co.uk/news/bridgestone-survey-reveals-what-really-matters-to-motorists-trust-familiarity-and-coffee)
- [The Motor Ombudsman: use an approved garage](https://www.themotorombudsman.org/press-releases/our-survey-said-use-an-approved-garage/)
- [Torq'd: UK garage software compared](https://www.torqd.uk/blog/best-garage-management-software-uk)
- [esremedia: MOT booking software](https://esremedia.co.uk/blog/mot-booking-software-garages)
- [BookMyGarage](https://bookmygarage.com/mot/)
- [Trading Standards: Trust My Garage](https://tradingstandards.uk/business-hub/code-sponsors/trust-my-garage)
- [Ageas: how to find a good garage](https://ageas.co.uk/solved/your-car/how-to-find-a-good-garage)
- [Auto Retail: too many schemes](https://auto-retail.co.uk/blog/2010/10/25/who-needs-another-sticking-plaster)
- [DfT: MOT history API](https://findtransportdata.dft.gov.uk/dataset/mot-history-api)
- [DVLA: Vehicle Enquiry Service API](https://dvladigital.blog.gov.uk/2020/03/12/dvlas-new-api-developer-portal-launch-first-api-vehicle-enquiry-service-ves-on-gov-uk/)
- [passrates.uk: MOT explained 2026](https://passrates.uk/guide/mot-explained-uk)
- [ProfileTree: SEO for garages](https://profiletree.com/seo-for-garages/)
- [Whito: garages](https://whito.co.uk/garages/)
- [GarageSite portfolio](https://garagesite.co.uk/projects)
- [Zarla: auto repair website examples](https://www.zarla.com/inspiration/auto-repair)
- [Websites4U](https://www.websites4ukgarages.co.uk/)
- [What Car?: are local garages ready for EVs](https://whatcar.com/news/electric-car-servicing-are-local-garages-ready-for-evs/n26762)
- [PMM: EV services on the rise](https://pmmonline.co.uk/news/ev-services-on-the-rise/)

# Vertical brief: Pubs

Version 1, 25 October 2026. Researched from web search results only (this session could not open sites directly). Top up with real competitor screenshots on the next pass. Update after every pub build, starting with the brother's pub.

## 1. The one thing to know

**People check the pub online before they go, and they give it about 30 seconds.** In a 2026 study of 600 UK diners, one in four spent 30 seconds or less on an online menu, and photos, reviews and mobile-friendly layouts made them more likely to choose ([Popmenu](https://get.popmenu.com/en-gb/toolkit/uk-dining-trends-2026), restaurant study). Locality is still the top reason for choosing a pub, at 48% in a 5,000-person survey ([Morning Advertiser on GO Technology](https://www.morningadvertiser.co.uk/Article/2025/12/08/pub-service-enters-new-age-as-consumers-embrace-tech-enabled-ordering-and-pre-booking/)).

So a pub site's job is **to answer "is it worth going tonight?" in one thumb-scroll**: open now, what's on, the food, can I book, can I bring the dog.

## 2. Who's looking, and what they want first

| Visitor | What they need first |
|---|---|
| Local deciding where to go tonight | Open now?, what's on, food served until when |
| Booking Sunday lunch or a birthday | Book a table, the Sunday menu, big-table options |
| Organising a party, wake or work do | Private hire: capacity, packages, enquiry form |
| Dog walker or family | Dogs welcome?, garden, kids' menu, parking, step-free |
| Visitor or tourist | Directions, parking, rooms if any, what makes it special |
| Sports fan | Which games are on, which screens |
| Someone with an allergy or diet | Allergens and vegan or gluten-free options, in plain text |

Indicative figures: Google Search and Maps may drive 20–30% of new visits ([Whito](https://whito.co.uk/research/uk-pub-marketing-data/), a marketing firm's estimate). For destination pubs, 38% check the website for menus and events and 41% discover them on Instagram or Facebook ([Arla Pro](https://www.arlapro.com/en-gb/stories/what-do-consumers-actually-want-in-a-pub/), source unclear). Half of people pick destination pubs partly on dietary options ([Arla Pro](https://www.arlapro.com/en-gb/stories/what-do-consumers-actually-want-in-a-pub/)).

## 3. Must-have features, in priority order

1. **Open now, and until when**, calculated live from the hours (the Lamplighter's pill does this). Food service times shown separately.
2. **The menu as real text, never a PDF.** PDFs and photos of menus are unreadable on phones and invisible to Google ([Snoot](https://snootwebdesign.co.uk/restaurant-web-design), [Revdoku](https://revdoku.com/blog/how-to-put-a-restaurant-menu-online-with-a-qr-code.md)). Show the last updated date. The pub changes it by text, or in a Google Sheet that feeds the site.
3. **Allergens and diets:** mark vegetarian, vegan and gluten-free on dishes, plus a clear "ask us about allergens" line and a downloadable allergen matrix the pub keeps up to date. Peach Pubs cut menu update time by half with web menus and automated allergen matrices ([Nutritics](https://www.nutritics.com/en/success-story/peach-pubs-case-study/), vendor case study).
4. **Book a table**, linked to the system they already use. Common fits for pubs: ResDiary and Access Collins (with DesignMyNight listings), and Tablein for small venues taking bookings mainly from their own site. SevenRooms suits groups, not independents. Prices vary and are partly unpublished, roughly £60–£300 a month ([Restaurant Booking System](https://restaurantbookingsystem.com/best/restaurant-booking-systems-uk/), [Tableport](https://tableport.io/guides/restaurant-booking-system-cost-uk), both vendor-adjacent). If they have nothing, a call button plus a simple enquiry form is fine at first.
5. **What's on:** quiz, music, sport and seasonal events, with dates. Kept fresh by text. Each event also posted to the Google Business Profile.
6. **Private hire page:** capacity, rooms, packages or minimum spend, photos and an enquiry form straight to the landlord. Typical guide prices: canapés £15–25 a head, buffets £25–40, sit-down £40–80 ([Pressforge](https://www.pressforge.co.uk/portfolio/hospitality/pubs/), [Bink](https://getbink.co.uk/industries/pubs/), agency pages). Cubitt House is a good example of a clear private hire page ([Cubitt House](https://www.cubitthouse.co.uk/private-hire/)).
7. **Good to know:** dogs, garden, kids, parking, step-free access, sport channels, Wi-Fi, rooms. As quick tags, not paragraphs.
8. **Find us:** map, directions, parking, nearest bus or station.
9. **Phone action bar** on mobile: call, directions, book.
10. **Gift vouchers**, if they sell them (a December earner).

**Nice to have, by package:**
- **Local Pro:** an events feed that posts to Google and Instagram from one text, and Sunday roast "sold out" status.
- **Full Works:** booking with deposits for big tables and Christmas, a rooms booking link for pubs with rooms, and a newsletter sign-up for the events list.

## 4. Legal and compliance notes

- **Calorie labelling:** only applies to businesses with 250 or more employees in England, so independent pubs are normally exempt. Pub franchises can count across the franchise ([Durham County Council](https://durham.gov.uk/article/28323/Calorie-Labelling-in-the-out-of-home-sector), [Birketts](https://www.birketts.co.uk/legal-update/food-for-thought-the-introduction-of-calorie-labelling)). Check for tied or managed pubs.
- **Allergens:** the 14 major allergens must be available on request. The website should say how to ask, and must not promise "allergen-free" unless the kitchen can guarantee it. (Natasha's Law covers food pre-packed for direct sale, such as grab-and-go sandwiches. Confirm with the Food Standards Agency if the pub sells those.)
- **Licensing:** show the licence holder's details only if the pub chooses to; don't invent opening hours beyond the licence.

## 5. Page structure (default, adapt per pub)

1. Hero: the pub, a real photo, open now, book and menu buttons.
2. This week: events and specials.
3. The menu (tabs: food, Sunday, drinks), with diet markers.
4. Good to know: dogs, garden, kids, access.
5. Book a table, or the whole room (private hire).
6. Find us: hours, map, parking.
7. Footer with name, address, phone and socials.

## 6. Google markup and local SEO

- **Schema:** `BarOrPub` (or `Restaurant` for food-led pubs) with `openingHoursSpecification`, `servesCuisine`, `hasMenu` pointing at the menu section, `acceptsReservations`, and `Event` markup for regular events.
- **Google Business Profile:** primary category "Pub" (or "Gastropub"), menu and photos uploaded, events and offers posted weekly, and reviews answered.
- **Name, address and phone** identical everywhere.

## 7. Clichés to avoid (the templated pub look)

- A PDF menu, or a photo of a chalkboard menu.
- The stock pint-on-a-bar hero (half of all pub templates).
- Brown, cream and gold heritage templates with a script font: the default "traditional pub" look.
- "Fine food, fine ales, fine company."
- A Facebook feed embed as the events section.
- An empty "Gallery" page of untitled photos.
- "Welcome to our website!" as the opening line.

## 8. Where the design idea comes from instead

From the pub itself, never "pub":
- **Its name and sign:** the Lamplighter's lamp; a Red Lion's actual painted sign; a Plough's farmland.
- **Its building and age:** beams, a fireplace, the year above the door.
- **Its rituals:** the Sunday roast selling out, the quiz, the dog biscuit tin, the darts team.
- **Its place:** the village green, the canal, the hill it's on, the walk that ends there.
- **Its landlord:** a family pub with a story told in their own words.

Check every new design against the design register, so two pubs, even in the same town, never share a palette, type pairing or hero.

## 9. Photo shot list (for the pub's own photos)

1. The front, at dusk with the lights on (the hero).
2. The bar, with the pumps and a person behind it.
3. Three best-selling dishes, in natural light at a table.
4. The Sunday roast.
5. The garden in sun, ideally with a dog.
6. The private hire room, laid for an event.
7. A busy night (quiz or music), shot from the side.
8. The landlord, in their own pub.
9. Small details: the sign, the fireplace, the door.

## 10. What to report monthly (care plan)

- Table bookings and private hire enquiries from the site.
- Calls and direction requests (site and Google Business Profile).
- Menu page views and the most-viewed dishes.
- Event page views around each event.
- New Google reviews and the average rating.

## 11. What this means for the Lamplighter

Changes the brief suggests for the concept site:
1. **Diet markers:** add vegetarian, vegan and gluten-free tags to menu items, plus an allergen line.
2. **Private hire detail:** add capacity per room, guide prices and an enquiry form instead of a mailto link.
3. **Events in schema:** add `Event` markup for the quiz and music nights, and `hasMenu`.
4. **Food times:** show "food served until 9pm" next to the open-now pill.
5. **Gift vouchers:** add a small block, since the brother's pub opens in December.

## Sources

- [Popmenu: UK dining trends 2026](https://get.popmenu.com/en-gb/toolkit/uk-dining-trends-2026)
- [Morning Advertiser: tech-enabled ordering and pre-booking](https://www.morningadvertiser.co.uk/Article/2025/12/08/pub-service-enters-new-age-as-consumers-embrace-tech-enabled-ordering-and-pre-booking/)
- [Morning Advertiser: what's shaping pub menus in 2026](https://www.morningadvertiser.co.uk/Article/2026/01/12/how-pubs-can-attract-diners-in-2026/)
- [Whito: UK pub marketing data 2026](https://whito.co.uk/research/uk-pub-marketing-data/)
- [Arla Pro: what consumers want in a pub](https://www.arlapro.com/en-gb/stories/what-do-consumers-actually-want-in-a-pub/)
- [Restaurant Booking System: UK platforms compared](https://restaurantbookingsystem.com/best/restaurant-booking-systems-uk/)
- [Tableport: booking system costs UK](https://tableport.io/guides/restaurant-booking-system-cost-uk)
- [Seatly: choosing a booking system](https://seatly.uk/guides/choosing-a-booking-system/)
- [Cubitt House: private hire](https://www.cubitthouse.co.uk/private-hire/)
- [Pressforge: pub website design](https://www.pressforge.co.uk/portfolio/hospitality/pubs/)
- [Bink: pub website design](https://getbink.co.uk/industries/pubs/)
- [Snoot: restaurant and pub website design](https://snootwebdesign.co.uk/restaurant-web-design)
- [Revdoku: menus online](https://revdoku.com/blog/how-to-put-a-restaurant-menu-online-with-a-qr-code.md)
- [Nutritics: Peach Pubs case study](https://www.nutritics.com/en/success-story/peach-pubs-case-study/)
- [Durham County Council: calorie labelling](https://durham.gov.uk/article/28323/Calorie-Labelling-in-the-out-of-home-sector)
- [Birketts: calorie labelling](https://www.birketts.co.uk/legal-update/food-for-thought-the-introduction-of-calorie-labelling)

# Verticals

What each type of business needs, so builds start from a known template. Draft. Correct it after real builds.

## Pubs and restaurants

- **Customers want, in order:** open now?, food menu, book a table, what's on, directions, parking.
- **Must-haves:** menu (from a Google Sheet so it can change weekly), events and sports fixtures, table booking, private hire enquiry, dog friendly and accessibility notes, beer garden photos.
- **Bookings:** link to the system they already use (ResDiary, OpenTable, SevenRooms, or similar). If none, a simple enquiry form.
- **Schema type:** `BarOrPub` or `Restaurant`, with `servesCuisine`, `hasMenu` and `openingHoursSpecification`.
- **Photos that sell:** the bar, a full plate, the garden in sunshine, people (with permission).
- **Mock site shows off:** menus, events, table bookings (Full Works).

## Garages and mechanics

- **Customers want:** can you fix it, how much, when can I get in, are you trustworthy.
- **Must-haves:** services and starting prices, MOT booking or a quote request form (registration number field), reviews front and centre, approvals and memberships, opening hours, courtesy car and collection info.
- **Bookings:** quote or callback form by default. Link to an existing garage booking tool if they have one.
- **Schema type:** `AutoRepair`.
- **Photos that sell:** the workshop, the team, a clean ramp. Never stock photos of mechanics.
- **Mock site shows off:** quote form, MOT reminders, price list (Local Pro).

## Driving instructors

- **Usually a service-area business:** no public premises. Use `service-area-seo` and hide the home address.
- **Customers want:** price per lesson and block deals, availability, pass rate, manual or automatic, areas covered.
- **Must-haves:** prices, areas covered (with local landing pages for the main towns via `local-landing-pages`), reviews and pass photos (with permission), booking or enquiry, the car, and DVSA approved instructor (ADI) status.
- **Bookings:** Calendly or the instructor's existing booking app.
- **Schema type:** `DrivingSchool`, with `areaServed`.
- **Mock site shows off:** lesson booking, pass rate, reviews (Local Pro).

## Barbers and salons

- **Customers want:** can I book now, how much, what does their work look like.
- **Must-haves:** book now button on every screen, price list, gallery of real cuts, team, walk-in policy.
- **Bookings:** link to their existing system (Fresha, Booksy, Treatwell or similar). Never build one.
- **Schema type:** `HairSalon` (schema.org has no separate barber type, so barbers use this too).
- **Mock site shows off:** appointment booking, price list, gallery (Starter).

---
name: hard-to-bear-build
description: Hard To Bear's own playbook for selling and building websites for local businesses (pubs, garages, driving instructors, barbers and similar). Use whenever Russell wants to prospect a local business, build a spec or demo site from someone's Google listing, scope a client site, build or launch a client site, run pre-launch checks, hand a site over, or run the monthly care plan (updates sent by text, monthly results report). Also use when he says "build a site for [business]", "do a spec site", "demo for [pub]", "new client", "launch checklist" or "care plan report". This skill sets the order of work and the quality bar, and hands off to the specialist skills in this repo for design, copy and local SEO.
---

# Hard To Bear build playbook (v0.1)

This is the house way of selling and building sites. Version 0.1 is a draft written before the first real build, so it will be wrong in places. After every build, add what was learned to `references/build-log.md` and fix this file to match. This is how a 20-hour build becomes an 8-hour one.

Business context (offer, prices, voice): read `.claude/product-marketing.md` first.
Business-type specifics: read `references/verticals.md` for the business being built.

## What we sell, in one line

A fast, mobile-first site that gets a local business found on Google, plus a care plan where they text us changes and get a monthly report showing the calls and bookings it brought in.

## How we're different (don't lose these)

1. **Build it before we sell it.** We show prospects a working draft of their own site, in person.
2. **Fastest site on the high street.** The aim is under a second on a phone, not award-site effects.
3. **Real photos only.** No stock and no AI images on client sites. AI or placeholder images are only OK on concept (mock) sites, labelled as concept work.
4. **Text us your specials.** Care plan updates arrive by WhatsApp or text and go live the same day.
5. **Prove it monthly.** Every care plan client gets a one-page report of calls, directions and bookings.

## Stage 1: Spec site (before any sale)

Goal: a convincing draft of the prospect's own site in 1 to 2 hours, shown on a phone in person.

1. Gather what's public: their Google Business Profile (name, address, phone, hours, categories, photos, reviews), their current site if any, menu or price list, and social pages.
2. Run a quick local teardown with `local-seo-audit`: why they aren't showing up, scored and fitted on one printable page.
3. Build the draft from the vertical template in `references/verticals.md`, using their real name, hours, reviews and photos. Keep design effort light: one strong hero and the essentials.
4. Deploy to a private preview URL. Never put a prospect's site on a public domain they haven't agreed to.
5. Write down the outcome in `references/build-log.md` (shown, follow-up, won or lost, and why).

Do not spend more than 2 hours on a spec site. Its job is to start a conversation, not to finish the build.

## Stage 2: Scope (after a yes)

Agree these in writing before building:

- Package (Starter, Local Pro, Full Works) and exactly which pages.
- Who supplies copy and photos, and a date for them.
- Booking system. Plug into what they already use (see verticals); never build our own.
- Domain: who owns it now, and who will. **The client always owns their domain.**
- What they'll want to change themselves (menu, prices, hours, events). That decides how content is stored (Stage 3).
- Launch date. Default promise: live within 7 days of receiving content.

Use `client-deliverables` for the written scope or proposal.

## Stage 3: Build

**Design.** Run `taste-skill` for direction and pick one direction with Russell before coding. Keep it grounded in the business's real world (the pub's actual bar, the garage's actual signage). Use `ui-ux-pro-max` for palette and type options suited to the vertical. Skip scroll-jacking, 3D and heavy animation. Speed beats spectacle for these customers.

**Copy.** Use `copywriting`. Plain, local and specific: name the street, the town, the dishes, the services. Every page answers "can I get there, when are you open, how do I book or call?" within one thumb-scroll.

**Content they edit.** Prefer the simplest thing the client already understands. A Google Sheet for menus, prices and hours is the default to try first, with the site rebuilding from it. Only reach for a proper CMS if a Sheet can't do the job.

**Must-haves on every site:**
- A tap-to-call button and directions visible on the first phone screen.
- Opening hours that match the Google Business Profile exactly.
- Name, address and phone written identically everywhere (site, Google, directories).
- LocalBusiness structured data (Google's business markup) using the most specific type, via `local-schema`.
- Real photos, compressed, with width and height set so nothing jumps while loading.
- Privacy notice and cookie handling that suits UK rules if analytics or bookings set cookies.

## Stage 4: Pre-launch checks (all must pass)

- [ ] Screenshots checked at 375px (phone), 768px and 1280px. Use Playwright MCP if connected, otherwise `taste-skill`'s inspector.
- [ ] Lighthouse mobile performance 90 or better, and accessibility 95 or better.
- [ ] `web-design-guidelines` review, with every issue fixed or noted with a reason.
- [ ] `impeccable` polish pass on the homepage.
- [ ] Structured data validates.
- [ ] Name, address, phone and hours match the Google Business Profile.
- [ ] Every phone link, booking link and form tested on a real phone.
- [ ] Contact form delivers to the client's inbox.
- [ ] Analytics and call tracking in place for the monthly report.

## Stage 5: Launch and handover

1. Point the domain at the site and check HTTPS works on both the bare domain and www.
2. Update the Google Business Profile website link, and run `gbp-optimization`.
3. Send the client a one-page handover: how to send changes, what the care plan covers, response times.
4. Ask for a Google review of Hard To Bear, and set up the client's own review requests with `review-management`.
5. Add the site to the portfolio, with permission.

## Stage 6: Care plan (monthly)

- **Changes by text:** small updates (specials, hours, events) go live the same working day. Anything over the 30 minutes included a month gets quoted first.
- **Monthly report** (one page, via `client-deliverables`): calls from the site, direction requests, bookings or enquiries, and what was changed. Lead with the number they care about.
- **Response times:** set them in writing. Pub owners will text on a Saturday night. The care plan says when replies come.

## Hosting rule

Client sites are commercial use. Never host them on a free plan that bans commercial use (Vercel's Hobby plan does). Use a paid plan or a host that allows commercial use on its free tier, and build the cost into the care plan.

## After every build

Add to `references/build-log.md`: hours taken per stage, what slowed things down, what the client loved or pushed back on, and anything to change in this playbook. Then update this file.

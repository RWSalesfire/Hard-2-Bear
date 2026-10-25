# Build log

One entry per spec site or client build, newest first. This is what turns the playbook from guesses into a system.

## Template

```
### [Date] – [Business], [town] – [spec site / client build]
- Package:
- Hours: spec __ · scope __ · design __ · build __ · checks __ · launch __ · total __
- Outcome: (won / lost / live, and why)
- What slowed things down:
- What the client loved / pushed back on:
- Change to the playbook:
```

## Entries

None yet. First up: the brother's pub.

## October 2026: speed pass on the concept sites

- **Before:** Lighthouse mobile (devtools throttling) scored 75–80. Photos were full-size JPEGs (4.2MB), GSAP ran entrance animations during load (0.6–0.9s blocking), and the garage headline faded in from invisible.
- **After:** 90–95 on every page. Fixes: WebP photo sizes via `scripts/photo-sizes.py`, entrance animations in CSS, GSAP loaded after idle (`lib/motion.ts`), fonts trimmed per site, hero photo preloaded, and space reserved for live text (the garage's open-now line caused a layout jump).
- **Lesson:** Lighthouse's default simulated mode badly misreads a local server (it showed 6–9 seconds for a photo that really painted in 0.2s). Use `--throttling-method=devtools`.

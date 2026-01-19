# Claude.md - Hard To Bear Sales Consultancy Website

## Project Overview

**Hard To Bear** is a single-page sales consulting website for Russell Westgarth, a sales consultant helping SME sales leaders build process-driven sales operations. The site embodies a bold, direct, no-BS approach with Gong-inspired design and a friendly bear mascot.

**Live Site**: https://hardtobear.co.uk
**Repository**: RWSalesfire/Hard-2-Bear
**Primary Contact**: russell@hardtobear.co.uk

## Tech Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.15
- **Email Service**: Resend API 4.0
- **Icons**: React Icons 5.4
- **Deployment**: Vercel (recommended)
- **Analytics**: Google Analytics 4 (optional)

## Architecture

### Single-Page Application
This is a **single-page website** with all content in `/app/page.tsx`. There are no separate pages or routing beyond the homepage.

### Project Structure
```
Hard-2-Bear/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint (Resend integration)
│   ├── globals.css               # Global styles & Tailwind directives
│   ├── layout.tsx                # Root layout with SEO metadata
│   └── page.tsx                  # MAIN FILE - All homepage content
├── components/
│   ├── BearMascot.tsx           # SVG bear illustration
│   └── GoogleAnalytics.tsx      # GA4 tracking script
├── public/                       # Static assets (currently empty)
├── .env.example                  # Environment variables template
├── tailwind.config.ts           # Custom colour palette & config
├── tsconfig.json                # TypeScript strict mode enabled
└── package.json                 # Dependencies and scripts
```

### Key Files to Know

**`/app/page.tsx`** (470 lines)
- Contains ALL website content in 8 sections:
  1. Hero (bear mascot, headline, CTA)
  2. Hard Truths (pain points SME sales leaders face)
  3. Services (3 core offerings)
  4. Why Hard To Bear (origin story)
  5. About Russell (credentials, experience)
  6. How We Work (3 engagement options)
  7. Who This Is For (target audience)
  8. Contact Form (integrated with `/api/contact`)

**`/app/api/contact/route.ts`**
- Serverless API endpoint for contact form
- Uses Resend to send emails to `russell@hardtobear.co.uk`
- Validates required fields: name, email, message
- Returns success/error JSON responses

**`/app/layout.tsx`**
- Sets up SEO metadata (title, description, Open Graph)
- Loads Inter font with `display: swap`
- Includes GoogleAnalytics component (if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set)

**`/components/BearMascot.tsx`**
- Simple SVG bear illustration (placeholder for professional design)
- Uses brand colours from Tailwind config
- Animated on hover (subtle ear wiggle)

**`/tailwind.config.ts`**
- Custom colour palette:
  - `primary`: #D84315 (burnt orange)
  - `secondary`: #1A237E (navy blue)
  - `accent`: #FF5722 (bright orange for CTAs)
  - `charcoal`: #263238 (dark grey for text)

## Development Guidelines

### Code Style & Conventions

1. **UK English everywhere** - "optimisation" not "optimization", "colour" not "color"
2. **No corporate jargon** - Write plainly and directly
3. **Bold, confident tone** - Match the brand's no-BS personality
4. **TypeScript strict mode** - All files must type-check
5. **Tailwind utility classes** - Avoid custom CSS unless absolutely necessary
6. **Semantic HTML** - Use proper heading hierarchy (h1 → h2 → h3)

### Animation Philosophy

- **Subtle, not flashy** - Professional, not distracting
- **Framer Motion patterns**:
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.6, ease: "easeOut" }}`
  - `viewport={{ once: true }}`
- **Performance-first** - Only animate on viewport entry (lazy loading)

### Colour Usage Rules

- **Primary (#D84315)**: Main brand colour, section backgrounds, accents
- **Secondary (#1A237E)**: Text highlights, alternative sections
- **Accent (#FF5722)**: CTA buttons, hover states, important links
- **Charcoal (#263238)**: Body text, headings on light backgrounds
- **White/Light grey**: Backgrounds, text on dark sections

### Component Patterns

All components follow this structure:
```typescript
'use client';  // If using hooks/interactivity
import { motion } from 'framer-motion';

export default function ComponentName() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Responsive Design Patterns

- **Mobile-first approach** - Base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:`
- **Breakpoints**:
  - `sm`: 640px (tablets)
  - `md`: 768px (small laptops)
  - `lg`: 1024px (desktops)
  - `xl`: 1280px (large screens)
- **Common patterns**:
  - `text-4xl md:text-5xl lg:text-6xl` (scale typography)
  - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (responsive grids)
  - `px-4 sm:px-6 lg:px-8` (consistent padding)

## Environment Variables

Required variables (set in `.env` locally and Vercel dashboard in production):

```env
# Required for contact form
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Required for correct URLs in emails
NEXT_PUBLIC_SITE_URL=https://hardtobear.co.uk

# Optional - GA4 tracking
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important**:
- `RESEND_API_KEY` must be from a Resend account with `hardtobear.co.uk` domain verified
- Email sender in `/app/api/contact/route.ts` must match verified domain
- Without `NEXT_PUBLIC_GA_MEASUREMENT_ID`, analytics simply won't load (graceful fallback)

## Common Development Tasks

### Running Locally
```bash
npm install          # Install dependencies
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Test production build
npm start            # Run production build locally
npm run lint         # Check for linting errors
```

### Updating Content
1. Edit `/app/page.tsx`
2. Find the relevant section (search for section heading)
3. Update text, preserving JSX structure
4. Test locally with `npm run dev`
5. Commit and push - Vercel auto-deploys

### Adding New Sections
1. Insert between existing `<section>` tags in `/app/page.tsx`
2. Follow existing animation patterns
3. Use colour palette from `tailwind.config.ts`
4. Maintain mobile-first responsive design
5. Test all breakpoints

### Modifying Contact Form
- **Backend logic**: `/app/api/contact/route.ts`
- **Frontend UI**: `/app/page.tsx` (Contact section ~line 420)
- **Email template**: Inline in `route.ts` (HTML email body)
- **Recipient**: Change in `route.ts` line 32

### Changing Colours
1. Edit `tailwind.config.ts`
2. Update colour values in `extend.colors`
3. Rebuild to see changes: `npm run dev`
4. Colours automatically apply via Tailwind utilities

## Important Gotchas

### Email Configuration
- **Must verify domain in Resend** before emails work
- **From address** must use verified domain (`noreply@hardtobear.co.uk`)
- **API key** must have permission to send from that domain
- Check Resend dashboard logs if emails fail

### Next.js App Router Specifics
- **`'use client'`** directive required for:
  - Framer Motion animations
  - React hooks (useState, useEffect)
  - Event handlers (onClick, onSubmit)
- **Route handlers** (`route.ts`) are always server-side
- **Environment variables**: Use `NEXT_PUBLIC_` prefix for client-side access

### TypeScript Strict Mode
- No implicit `any` types allowed
- All function parameters must be typed
- Event handlers need proper typing: `(e: React.FormEvent<HTMLFormElement>)`
- Form data access: `new FormData(e.currentTarget)`

### Framer Motion Performance
- Always use `viewport={{ once: true }}` to prevent re-animations on scroll
- Avoid animating layout properties (width, height) - prefer transforms
- Keep animations under 1 second duration for professional feel

## Brand Voice & Messaging

### Tone Guidelines
- **Direct and honest** - No fluff, no corporate speak
- **Friendly but professional** - Like a trusted advisor, not a salesperson
- **UK-focused** - "SME" not "small business", British spelling
- **Process-driven** - Emphasise systems over silver bullets
- **Bear references** - Occasional puns okay, but don't overdo it

### Target Audience
- SME sales leaders (£1M-£50M revenue companies)
- Located in UK (primarily)
- Frustrated with ad-hoc sales processes
- Want structure without enterprise complexity
- Appreciate straight-talking consultants

### Key Differentiators
1. **No BS approach** - Tell it like it is
2. **Process-driven** - Systems over heroics
3. **SME-focused** - Not enterprise, not startups
4. **Practical experience** - Salesfire background (£150M exit)
5. **Bear mascot** - Memorable, approachable branding

## Testing & Deployment

### Pre-Deployment Checklist
- [ ] `npm run build` completes without errors
- [ ] All TypeScript types are correct (`npm run lint`)
- [ ] Contact form sends emails successfully
- [ ] Test on mobile device (real device, not just DevTools)
- [ ] Check all animations work smoothly
- [ ] Verify all links work (Calendly, LinkedIn, email)
- [ ] Check SEO metadata in `layout.tsx`
- [ ] Confirm environment variables are set in Vercel

### Deployment Process
1. Push to GitHub (any branch)
2. Vercel automatically detects changes
3. Builds and deploys in 2-3 minutes
4. Check deployment logs for errors
5. Test live site immediately after deploy

### Monitoring
- **Analytics**: Google Analytics dashboard (if enabled)
- **Email delivery**: Resend dashboard (https://resend.com/emails)
- **Performance**: Vercel Analytics (https://vercel.com/analytics)
- **Errors**: Vercel deployment logs

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 90+ (all categories)

Optimisation strategies already in place:
- Next.js automatic code splitting
- Framer Motion lazy loading
- Tailwind CSS purging unused styles
- Font optimisation with `next/font`
- No large images (SVG bear mascot only)

## AI Assistant Guidance

### When making changes:
1. **Always read the file first** - Don't assume structure
2. **Preserve existing patterns** - Match animation style, component structure
3. **Test TypeScript compilation** - Run `npm run build` after changes
4. **Respect the brand voice** - Keep it bold, direct, and British
5. **Mobile-first** - Check responsive design at all breakpoints
6. **Ask before major changes** - Confirm architectural decisions

### What NOT to do:
- ❌ Don't add new pages (it's a single-page site)
- ❌ Don't add complex state management (React Context, Redux, etc.)
- ❌ Don't use custom CSS files (stick to Tailwind)
- ❌ Don't add heavy dependencies without discussion
- ❌ Don't change colour palette without approval
- ❌ Don't make animations flashy or distracting
- ❌ Don't use American English spelling
- ❌ Don't add features "just in case" - keep it simple

### Good changes to make:
- ✅ Content updates (headlines, copy, services)
- ✅ New sections following existing patterns
- ✅ Accessibility improvements (ARIA labels, alt text)
- ✅ Performance optimisations
- ✅ Bug fixes and TypeScript errors
- ✅ Mobile responsiveness improvements
- ✅ SEO enhancements (meta tags, schema markup)

## Support & Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend API Docs](https://resend.com/docs)

### Getting Help
- **Project Questions**: russell@hardtobear.co.uk
- **Technical Issues**: Check Vercel deployment logs first
- **Email Issues**: Check Resend dashboard logs

---

**Last Updated**: January 2025
**Maintained By**: Russell Westgarth / Hard To Bear Consulting

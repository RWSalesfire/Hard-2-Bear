# Hard To Bear - Sales Consulting Website

A bold, no-BS sales consulting website for Russell Westgarth. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Links

📦 **New to this project?** Start here:
- [Quick Start Guide](QUICKSTART.md) - Get live in 15 minutes
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md) - Don't miss anything
- [Pull Request Details](PULL_REQUEST.md) - What's been built

## Overview

Hard To Bear is a sales consultancy helping SME sales leaders build process-driven sales operations. This website embodies the brand's direct, honest approach with Gong-inspired design and a friendly bear mascot.

## Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for subtle, professional animations
- **Contact Form**: Integrated email notifications via Resend API
- **SEO Optimised**: Meta tags, Open Graph, and semantic HTML
- **Mobile-First**: Fully responsive design that looks great on all devices
- **Fast Performance**: Optimised for sub-2-second load times
- **Google Analytics Ready**: Easy GA4 integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A [Resend](https://resend.com) account for email notifications
- (Optional) Google Analytics measurement ID

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RWSalesfire/Hard-2-Bear.git
cd Hard-2-Bear
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your environment variables to `.env`:
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
NEXT_PUBLIC_SITE_URL=https://hardtobear.co.uk
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Test the production build locally:
```bash
npm start
```

## Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub

2. Import your repository on [Vercel](https://vercel.com)

3. Configure environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
   - `NEXT_PUBLIC_SITE_URL`

4. Deploy! Vercel will automatically detect Next.js and configure everything.

### Deploying to Netlify

1. Push your code to GitHub

2. Import your repository on [Netlify](https://netlify.com)

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

4. Add environment variables in Netlify dashboard

5. Deploy!

### Custom Domain Setup

#### For Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add `hardtobear.co.uk` and `www.hardtobear.co.uk`
4. Follow DNS configuration instructions

#### For Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS records as instructed

## Email Configuration with Resend

1. Sign up at [Resend](https://resend.com)
2. Verify your domain (hardtobear.co.uk)
3. Generate an API key
4. Add the API key to your environment variables
5. Update the `from` email in `/app/api/contact/route.ts` if needed

## Google Analytics Setup

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to your environment variables as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. The GoogleAnalytics component will automatically load the tracking script

## Project Structure

```
Hard-2-Bear/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage (single-page site)
├── components/
│   ├── BearMascot.tsx           # Bear mascot SVG component
│   └── GoogleAnalytics.tsx      # GA4 tracking component
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Customisation

### Colours

Edit the colour palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#D84315',    // Burnt orange
  secondary: '#1A237E',  // Navy
  accent: '#FF5722',     // Bright orange
  charcoal: '#263238',   // Dark grey
}
```

### Content

All content is in `/app/page.tsx`. Simply edit the text within the component sections:
- Hero Section
- Hard Truths Section
- Services Section
- Why Hard To Bear Section
- About Russell Section
- How We Work Section
- Who This Is For Section
- Contact Section

### Bear Mascot

The bear illustration is in `/components/BearMascot.tsx`. It's a simple SVG that can be customised or replaced with a professional illustration.

## Design Philosophy

- **Bold Typography**: Large, confident headlines
- **Generous White Space**: Content breathes
- **Direct Messaging**: No corporate jargon, UK English
- **Warm Colour Palette**: Burnt orange primary with navy secondary
- **Subtle Animations**: Professional, not distracting
- **Gong-Inspired**: Bold, opinionated, memorable

## Performance Optimisation

- **Image Optimisation**: Use Next.js Image component for any images
- **Font Loading**: Inter font loaded with `display: swap`
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Framer Motion animations only load when in viewport
- **CSS-in-JS**: Tailwind CSS purges unused styles in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Contact form not sending emails
- Check that `RESEND_API_KEY` is set correctly
- Verify your domain is configured in Resend dashboard
- Check the `from` email matches your verified domain

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

## Support

For issues or questions:
- Email: russell@hardtobear.co.uk
- LinkedIn: [linkedin.com/in/russellwestgarth](https://linkedin.com/in/russellwestgarth)

## Licence

© 2025 Hard To Bear Consulting. All rights reserved.

---

Built with ❤️ (and no BS) by Russell Westgarth

# Deployment Checklist

Use this checklist to ensure nothing is missed when deploying Hard To Bear website.

## Pre-Deployment

### Resend Email Setup
- [ ] Sign up for Resend account
- [ ] Add domain: hardtobear.uk
- [ ] Add DNS records to domain registrar
- [ ] Verify domain is verified in Resend
- [ ] Create API key
- [ ] Copy API key for use in Vercel

### Domain Setup
- [ ] Confirm you own hardtobear.uk
- [ ] Have access to domain DNS settings
- [ ] Know where to add DNS records

### Accounts Ready
- [ ] GitHub account (repository access)
- [ ] Vercel account (sign up at vercel.com)
- [ ] Resend account (sign up at resend.com)
- [ ] Optional: Google Analytics account

## Vercel Deployment

### Initial Setup
- [ ] Log in to Vercel
- [ ] Import Hard-2-Bear repository from GitHub
- [ ] Select correct branch: `claude/hard-to-bear-website-QSx4c` or `main`
- [ ] Configure environment variables (see below)
- [ ] Click Deploy
- [ ] Wait for deployment to complete
- [ ] Note the deployment URL (e.g., hard-2-bear.vercel.app)

### Environment Variables
Add these in Vercel project settings:

#### Required
- [ ] `RESEND_API_KEY` = `re_...` (from Resend)
- [ ] `NEXT_PUBLIC_SITE_URL` = `https://hardtobear.uk`

#### Optional
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-...` (from Google Analytics)

### Custom Domain
- [ ] Go to Vercel project → Settings → Domains
- [ ] Add domain: `hardtobear.uk`
- [ ] Add domain: `www.hardtobear.uk`
- [ ] Copy DNS records provided by Vercel
- [ ] Add DNS records to domain registrar:
  - [ ] A record for root domain
  - [ ] CNAME for www subdomain
- [ ] Wait for DNS propagation
- [ ] Verify both domains work with HTTPS

## Testing

### Functionality Tests
- [ ] Visit https://hardtobear.uk
- [ ] Check all sections load correctly:
  - [ ] Hero section with bear mascot
  - [ ] Hard Truths section
  - [ ] Services section
  - [ ] Why Hard To Bear section
  - [ ] About Russell section
  - [ ] How We Work section
  - [ ] Who This Is For section
  - [ ] Contact form section
- [ ] Test smooth scrolling navigation
- [ ] Verify animations work smoothly

### Contact Form Tests
- [ ] Fill out contact form with test data
- [ ] Submit form
- [ ] Check for success message
- [ ] Verify email received at russell@hardtobear.uk
- [ ] Check email formatting is correct
- [ ] Test form validation (empty fields)
- [ ] Test with invalid email format

### Mobile Testing
- [ ] Test on iPhone/iOS Safari
- [ ] Test on Android Chrome
- [ ] Check responsive design works
- [ ] Verify bear mascot displays correctly
- [ ] Test contact form on mobile
- [ ] Check all sections are readable

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Verify load time under 2 seconds
- [ ] Check mobile performance score
- [ ] Check desktop performance score
- [ ] Verify SEO score is good

### SEO Checks
- [ ] View page source, check meta tags present
- [ ] Verify Open Graph tags
- [ ] Check Twitter card tags
- [ ] Test URL preview on LinkedIn
- [ ] Test URL preview on Twitter
- [ ] Verify robots.txt allows indexing

## Post-Deployment

### Analytics
- [ ] Set up Google Analytics (if using)
- [ ] Verify GA tracking code loads
- [ ] Check real-time analytics working
- [ ] Set up goals/conversions for contact form

### Content Updates
- [ ] Update Calendly link (if different)
- [ ] Update LinkedIn URL
- [ ] Update Twitter/X URL
- [ ] Verify email address is correct
- [ ] Check company name spelling
- [ ] Review all content for typos

### Optional Enhancements
- [ ] Replace bear SVG with professional illustration
- [ ] Add Open Graph image (1200x630px)
- [ ] Add favicon (already in public folder if created)
- [ ] Set up Google Search Console
- [ ] Submit sitemap to search engines

### Monitoring
- [ ] Set up Vercel deployment notifications
- [ ] Monitor Resend email delivery
- [ ] Check Vercel function logs
- [ ] Set up uptime monitoring (optional)

### Documentation
- [ ] Share deployment URL with team
- [ ] Document how to update content
- [ ] Save all API keys securely
- [ ] Document DNS settings
- [ ] Create backup of environment variables

## Final Verification

- [ ] All sections display correctly
- [ ] Contact form sends emails successfully
- [ ] Custom domain works with HTTPS
- [ ] Mobile experience is smooth
- [ ] Performance is optimised
- [ ] SEO is configured
- [ ] Analytics tracking (if enabled)
- [ ] No console errors in browser
- [ ] All links work correctly
- [ ] Brand colours match specifications

## Launch Communication

- [ ] Announce launch internally
- [ ] Share link on LinkedIn
- [ ] Share link on Twitter
- [ ] Update business cards (if applicable)
- [ ] Update email signature
- [ ] Add to Salesfire bio (if applicable)

## Maintenance Reminders

### Weekly
- [ ] Check contact form submissions
- [ ] Monitor analytics traffic

### Monthly
- [ ] Review Resend email delivery stats
- [ ] Check Vercel bandwidth usage
- [ ] Review analytics insights

### Quarterly
- [ ] Update content if needed
- [ ] Review and refresh testimonials (when added)
- [ ] Check all external links still work
- [ ] Update Node.js dependencies: `npm update`

---

**Deployment Status**: ⬜ Not Started | ⏳ In Progress | ✅ Complete

**Date Deployed**: _______________

**Deployed By**: _______________

**Custom Domain Live**: ⬜ Yes | ⬜ No

**Contact Form Tested**: ⬜ Yes | ⬜ No

**Mobile Tested**: ⬜ Yes | ⬜ No

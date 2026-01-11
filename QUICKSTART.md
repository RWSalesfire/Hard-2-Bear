# Hard To Bear - Quick Start Guide

Get your website live in 15 minutes.

## Prerequisites

- GitHub account (you have this)
- [Vercel account](https://vercel.com) (free)
- [Resend account](https://resend.com) (free tier available)

## Step 1: Set Up Resend (5 minutes)

1. Go to [resend.com](https://resend.com) and sign up
2. Click "Add Domain" and enter: `hardtobear.uk`
3. Add the DNS records Resend provides to your domain registrar
4. Wait for verification (usually 1-5 minutes)
5. Go to "API Keys" and click "Create API Key"
6. Copy the key (starts with `re_`)
7. Keep this tab open

## Step 2: Deploy to Vercel (5 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import `RWSalesfire/Hard-2-Bear` repository
4. Before deploying, click "Environment Variables"
5. Add these variables:
   ```
   RESEND_API_KEY = [paste your key from Step 1]
   NEXT_PUBLIC_SITE_URL = https://hardtobear.uk
   ```
6. Click "Deploy"
7. Wait 2-3 minutes for build to complete

## Step 3: Configure Cloudflare DNS for Resend (3 minutes)

1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select your `hardtobear.uk` domain
3. Go to "DNS" → "Records"
4. Add the DNS records from Resend (from Step 1):
   - Add the TXT record for domain verification
   - Add the MX records for email routing
   - Add the DKIM/SPF records
5. Wait for verification in Resend dashboard (1-5 minutes)

## Step 4: Add Custom Domain to Vercel (5 minutes)

1. In Vercel, go to your project settings
2. Click "Domains"
3. Add domain: `hardtobear.uk`
4. Add domain: `www.hardtobear.uk`
5. Vercel will show DNS records needed
6. Go back to Cloudflare DNS:
   - Add A record: Name: `@`, Content: `76.76.21.21`, Proxy status: Proxied (orange cloud)
   - Add CNAME record: Name: `www`, Content: `cname.vercel-dns.com`, Proxy status: DNS only (grey cloud)
7. Wait for DNS propagation (usually instant with Cloudflare)

## Step 5: Test Everything

1. Visit `https://hardtobear.uk`
2. Scroll through all sections
3. Fill out the contact form with test data
4. Check russell@hardtobear.uk for the email
5. Test on mobile device

## Optional: Add Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. In Vercel project settings, add environment variable:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
   ```
5. Redeploy from Vercel dashboard

## Troubleshooting

### Contact form not sending emails
- Check RESEND_API_KEY is set in Vercel
- Verify domain is verified in Resend
- Check spam folder
- Look at Vercel function logs

### Domain not loading
- Wait up to 48 hours for DNS propagation (usually much faster)
- Check DNS records are correct
- Try clearing browser cache
- Try incognito/private browsing

### Build failing
- Check Vercel deployment logs
- Ensure all environment variables are set
- Try redeploying from Vercel dashboard

## Update Content

To update website content:

1. Edit `/app/page.tsx` (all content is here)
2. Commit and push to GitHub
3. Vercel automatically redeploys
4. Changes live in 2-3 minutes

## Common Changes

### Update email address
Edit `/app/api/contact/route.ts` line 32:
```typescript
to: ['newemail@hardtobear.uk'],
```

### Update Calendly link
Edit `/app/page.tsx` around line 458:
```typescript
href="https://calendly.com/russellwestgarth"
```

### Update LinkedIn/Twitter
Edit `/app/page.tsx` around lines 466-481:
```typescript
href="https://linkedin.com/in/yourprofile"
href="https://twitter.com/yourhandle"
```

### Change colours
Edit `/tailwind.config.ts`:
```typescript
primary: '#D84315',    // Your primary colour
secondary: '#1A237E',  // Your secondary colour
accent: '#FF5722',     // Your CTA button colour
```

## Support

- **Email**: russell@hardtobear.uk
- **Documentation**: See `README.md` for detailed info
- **Vercel Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

## What's Included

✅ Hero with bear mascot
✅ Hard Truths section (pain points)
✅ Services (3 core offerings)
✅ Why Hard To Bear (origin story)
✅ About Russell
✅ How We Work (3 options)
✅ Who This Is For
✅ Contact form with email
✅ Mobile responsive
✅ SEO optimised
✅ Fast loading
✅ Google Analytics ready

---

**Time to launch**: ~15 minutes
**Monthly cost**: £0 (Vercel free tier + Resend free tier = 100 emails/day)
**Maintenance**: Zero (automatic deployments on git push)

Get started now: [Deploy to Vercel](https://vercel.com/new)

# Hard To Bear - Quick Start Guide

Get your website live in 20 minutes.

## Prerequisites

- GitHub account (you have this)
- [Vercel account](https://vercel.com) (free)
- [Resend account](https://resend.com) (free tier available)
- Domain: `hardtobear.uk` (configured in Cloudflare)
- Email domain: `russellwestgarth.com` (for sending/receiving emails)

## Overview

Your setup uses:
- **Website domain**: `hardtobear.uk` (hosted on Vercel, DNS via Cloudflare)
- **Email domain**: `russellwestgarth.com` (for contact form emails)
- **Contact email**: `hello@russellwestgarth.com`

---

## Step 1: Set Up Resend for Email (5 minutes)

### Add russellwestgarth.com Domain

1. Go to [resend.com](https://resend.com) and sign up
2. Click "Domains" → "Add Domain"
3. Enter: `russellwestgarth.com`
4. Resend will show DNS records you need to add:
   - TXT record for verification
   - TXT records for SPF/DKIM
   - (Optional) MX records if you want to receive emails

### Add DNS Records to Your Email Domain

5. Go to wherever `russellwestgarth.com` is hosted (your DNS provider)
6. Add all the DNS records from Resend
7. Wait for verification (1-5 minutes)
8. Once verified, go to "API Keys" → "Create API Key"
9. Copy the key (starts with `re_`)
10. Keep this tab open

**Important**: The email domain (`russellwestgarth.com`) is separate from your website domain (`hardtobear.uk`).

---

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
8. Note your deployment URL (e.g., `hard-2-bear.vercel.app`)

---

## Step 3: Configure Cloudflare DNS for Website (5 minutes)

### Add A Record for Root Domain

1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select your `hardtobear.uk` domain
3. Go to "DNS" → "Records"
4. Click "Add record":
   - Type: `A`
   - Name: `@`
   - IPv4 address: `76.76.21.21` (Vercel's IP)
   - Proxy status: **Proxied** (orange cloud)
   - TTL: Auto
5. Click "Save"

### Add CNAME Record for www

6. Click "Add record":
   - Type: `CNAME`
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **DNS only** (grey cloud)
   - TTL: Auto
7. Click "Save"

### Add Domain in Vercel

8. Go back to Vercel → Your Project → Settings → Domains
9. Add domain: `hardtobear.uk` → Click "Add"
10. Add domain: `www.hardtobear.uk` → Click "Add"
11. Wait 1-2 minutes for verification
12. Both should show "Valid Configuration" ✓

---

## Step 4: Test Everything (5 minutes)

### Test Website

1. Visit `https://hardtobear.uk`
2. Visit `https://www.hardtobear.uk`
3. Both should load with valid SSL (padlock icon)
4. Scroll through all sections
5. Check animations work smoothly

### Test Contact Form

1. Scroll to contact form
2. Fill out with test data:
   - Name: Test User
   - Email: your-test-email@example.com
   - Company: Test Company
   - Team Size: 5
   - Problem: Testing the form
3. Click "Request Reality Check"
4. Should see success message
5. Check `hello@russellwestgarth.com` for the email
6. Check spam folder if not in inbox

### Test Mobile

7. Visit site on your phone
8. Test responsiveness
9. Try the contact form on mobile

---

## Optional: Add Google Analytics (3 minutes)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for `hardtobear.uk`
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. In Vercel → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
   ```
5. Go to Deployments → Click "⋮" → Redeploy
6. Wait 2 minutes for redeployment

---

## Troubleshooting

### Contact form not sending emails

- ✓ Check `RESEND_API_KEY` is set in Vercel environment variables
- ✓ Verify `russellwestgarth.com` domain is verified in Resend dashboard
- ✓ Check spam folder at `hello@russellwestgarth.com`
- ✓ View Vercel function logs: Deployments → Functions → `/api/contact`
- ✓ Ensure DNS records for `russellwestgarth.com` are correct

### Domain not loading

- Wait up to 1 hour for Cloudflare DNS propagation (usually instant)
- Check DNS records in Cloudflare are exactly as specified above
- Try clearing browser cache or use incognito mode
- Visit [whatsmydns.net](https://whatsmydns.net) and search for `hardtobear.uk`

### SSL Certificate Errors

- Wait 10-15 minutes for Vercel to provision SSL certificate
- Check both domains are added in Vercel (root and www)
- Ensure Cloudflare SSL/TLS mode is set to "Full (strict)"

### Build failing

- Check Vercel deployment logs for errors
- Ensure all environment variables are set correctly
- Try redeploying from Vercel dashboard

---

## Updating Content

### Edit Website Text

1. Clone repository: `git clone https://github.com/RWSalesfire/Hard-2-Bear.git`
2. Edit `/app/page.tsx` (all content is in this file)
3. Commit: `git commit -am "Update content"`
4. Push: `git push`
5. Vercel automatically redeploys (2-3 minutes)

### Common Changes

**Change email address:**
Edit `/app/api/contact/route.ts` line 32:
```typescript
to: ['newemail@example.com'],
```

**Update Calendly link:**
Edit `/app/page.tsx` search for "calendly":
```typescript
href="https://calendly.com/yourusername"
```

**Update social links:**
Edit `/app/page.tsx` search for "linkedin" and "twitter":
```typescript
href="https://linkedin.com/in/yourprofile"
href="https://twitter.com/yourhandle"
```

**Change brand colours:**
Edit `/tailwind.config.ts`:
```typescript
primary: '#D84315',    // Burnt orange
secondary: '#1A237E',  // Navy
accent: '#FF5722',     // CTA buttons
```

---

## DNS Setup Summary

### For hardtobear.uk (in Cloudflare):
| Type  | Name | Content              | Proxy Status |
|-------|------|---------------------|--------------|
| A     | @    | 76.76.21.21         | Proxied      |
| CNAME | www  | cname.vercel-dns.com| DNS only     |

### For russellwestgarth.com (wherever it's hosted):
| Type | Name               | Content                    | Notes           |
|------|--------------------|---------------------------|-----------------|
| TXT  | @                  | resend-verification=...   | From Resend     |
| TXT  | @                  | v=spf1 include:_spf...    | From Resend     |
| TXT  | resend._domainkey  | [DKIM key]                | From Resend     |
| MX   | @                  | mx1.resend.com (Priority 10) | Optional     |

---

## What's Included

✅ **Complete website** on `hardtobear.uk`
✅ **Hero section** with bear mascot and bold headline
✅ **Hard Truths** - 6 pain points for SME sales leaders
✅ **Services** - 3 core offerings
✅ **Why Hard To Bear** - Rugby origin story
✅ **About Russell** - Background and approach
✅ **How We Work** - 3 engagement options
✅ **Who This Is For** - Clear qualification
✅ **Contact form** → sends to `hello@russellwestgarth.com`
✅ **Mobile responsive** design
✅ **SEO optimised** with meta tags
✅ **Fast loading** (145 kB)
✅ **Google Analytics** ready

---

## Support

- **Email**: hello@russellwestgarth.com
- **Detailed Docs**: See [README.md](README.md)
- **Cloudflare Guide**: See [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

---

**Setup time**: ~20 minutes
**Monthly cost**: £0 (Vercel Free + Resend Free = 100 emails/day)
**Maintenance**: Zero (auto-deploy on git push)
**Website**: https://hardtobear.uk
**Emails go to**: hello@russellwestgarth.com

---

## Next Steps After Launch

1. ✓ Test contact form end-to-end
2. ✓ Add Google Analytics (optional)
3. ✓ Set up Google Search Console
4. ✓ Share on LinkedIn/Twitter
5. ✓ Update business cards/email signature
6. Consider replacing bear SVG with professional illustration
7. Add testimonials when you get them

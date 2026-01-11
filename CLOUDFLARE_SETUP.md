# Cloudflare DNS Configuration Guide

Complete guide for configuring your `hardtobear.uk` domain on Cloudflare for use with Vercel and Resend.

## Overview

Since you bought your domain through Cloudflare, you'll manage all DNS records in the Cloudflare dashboard. This guide covers:
- Setting up email with Resend
- Connecting your domain to Vercel
- Configuring SSL/TLS settings
- Performance optimizations

## Prerequisites

- Domain `hardtobear.uk` added to Cloudflare
- Cloudflare account with access to DNS settings
- Vercel project deployed
- Resend account created

---

## Part 1: Configure Email (Resend)

### Step 1: Get DNS Records from Resend

1. Log in to [Resend](https://resend.com)
2. Click "Domains" → "Add Domain"
3. Enter: `hardtobear.uk`
4. Resend will show you DNS records to add (typically):
   - **TXT record** for domain verification
   - **MX records** for email routing (if you want to receive emails)
   - **TXT record** for SPF (sender policy framework)
   - **TXT record** for DKIM (email authentication)

### Step 2: Add Records to Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select `hardtobear.uk` domain
3. Go to **DNS** → **Records**
4. Click "Add record" for each DNS record from Resend:

#### Example Records (yours will be different):

**TXT Record for Verification:**
- Type: `TXT`
- Name: `@` (or sometimes `_resend`)
- Content: `resend-verification=xxxxx`
- Proxy status: DNS only (grey cloud)
- TTL: Auto

**MX Records (if receiving email):**
- Type: `MX`
- Name: `@`
- Mail server: `mx1.resend.com`
- Priority: `10`
- Proxy status: DNS only (grey cloud)
- TTL: Auto

**SPF Record:**
- Type: `TXT`
- Name: `@`
- Content: `v=spf1 include:_spf.resend.com ~all`
- Proxy status: DNS only (grey cloud)
- TTL: Auto

**DKIM Record:**
- Type: `TXT`
- Name: `resend._domainkey` (or as shown by Resend)
- Content: `[long string provided by Resend]`
- Proxy status: DNS only (grey cloud)
- TTL: Auto

### Step 3: Verify Domain in Resend

1. Go back to Resend dashboard
2. Click "Verify" on your domain
3. Wait 1-5 minutes for verification
4. Status should change to "Verified" ✓

---

## Part 2: Connect Domain to Vercel

### Step 1: Add Domain in Vercel

1. Log in to [Vercel](https://vercel.com)
2. Go to your Hard To Bear project
3. Click **Settings** → **Domains**
4. Add domain: `hardtobear.uk`
5. Click "Add"
6. Also add: `www.hardtobear.uk`

Vercel will show you the DNS records needed.

### Step 2: Add A Record for Root Domain

In Cloudflare DNS:

1. Click "Add record"
2. Configure:
   - Type: `A`
   - Name: `@` (this is the root domain)
   - IPv4 address: `76.76.21.21` (Vercel's IP)
   - Proxy status: **Proxied** (orange cloud) ← This enables Cloudflare's CDN
   - TTL: Auto
3. Click "Save"

### Step 3: Add CNAME Record for www

1. Click "Add record"
2. Configure:
   - Type: `CNAME`
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **DNS only** (grey cloud) ← Important!
   - TTL: Auto
3. Click "Save"

**Note:** The www subdomain should be grey cloud (DNS only) to work properly with Vercel.

### Step 4: Verify in Vercel

1. Go back to Vercel → Domains
2. Wait 1-2 minutes
3. Both domains should show "Valid Configuration" ✓
4. SSL certificate will be automatically provisioned

---

## Part 3: SSL/TLS Configuration

### Recommended Settings

1. In Cloudflare, go to **SSL/TLS** → **Overview**
2. Set SSL/TLS encryption mode to: **Full (strict)**
   - This ensures end-to-end encryption between Cloudflare → Vercel
3. Go to **SSL/TLS** → **Edge Certificates**
4. Enable these features:
   - ✓ Always Use HTTPS
   - ✓ Automatic HTTPS Rewrites
   - ✓ Minimum TLS Version: TLS 1.2 or higher

---

## Part 4: Performance Optimization (Optional)

### Enable Cloudflare Features

1. **Speed** → **Optimization**
   - ✓ Auto Minify: JavaScript, CSS, HTML
   - ✓ Brotli compression
   - ✓ Early Hints

2. **Caching** → **Configuration**
   - Caching Level: Standard
   - Browser Cache TTL: 4 hours

3. **Speed** → **Image Optimization**
   - ✓ Polish: Lossless (optional, uses quota)
   - ✓ WebP conversion

### Page Rules (Optional - costs extra)

If you have page rules available:

Rule 1: Cache Everything
- URL: `hardtobear.uk/*`
- Cache Level: Cache Everything
- Edge Cache TTL: 2 hours

---

## DNS Records Summary

After setup, your DNS records should look like this:

| Type  | Name               | Content                  | Proxy Status |
|-------|-------------------|--------------------------|--------------|
| A     | @                 | 76.76.21.21              | Proxied      |
| CNAME | www               | cname.vercel-dns.com     | DNS only     |
| TXT   | @                 | resend-verification=...  | DNS only     |
| TXT   | @                 | v=spf1 include:_spf...   | DNS only     |
| TXT   | resend._domainkey | [DKIM key]               | DNS only     |
| MX    | @                 | mx1.resend.com           | DNS only     |

---

## Testing

### Test Website

1. Visit `https://hardtobear.uk` (root domain)
2. Visit `https://www.hardtobear.uk` (www subdomain)
3. Both should load with valid SSL (padlock icon)
4. Check that `http://` redirects to `https://`

### Test Email Sending

1. Go to your contact form
2. Fill out with test data
3. Submit
4. Check `russell@hardtobear.uk` for email
5. Check spam folder if not in inbox

### Check DNS Propagation

Visit [whatsmydns.net](https://www.whatsmydns.net):
- Search for: `hardtobear.uk`
- Record type: `A`
- Should show: `76.76.21.21` globally

---

## Troubleshooting

### Domain Not Resolving

- Wait up to 48 hours for full DNS propagation
- Check DNS records in Cloudflare are correct
- Try accessing from incognito/private browsing
- Clear browser cache
- Try different network (mobile data vs WiFi)

### SSL Certificate Errors

- Ensure SSL/TLS mode is "Full (strict)"
- Wait 10-15 minutes for certificate provisioning
- Check Vercel dashboard shows "Valid Configuration"
- Verify both domains (root and www) are added in Vercel

### Email Not Sending

- Verify domain is verified in Resend dashboard
- Check API key is correct in Vercel environment variables
- Check Vercel function logs for errors
- Verify DNS records exactly match Resend requirements
- All email records should be grey cloud (DNS only)

### www Not Working

- CNAME for www must be grey cloud (DNS only)
- Target must be `cname.vercel-dns.com`
- Wait a few minutes after adding
- Check in Vercel that www domain is added

### Cloudflare 522 Errors

- This means Cloudflare can't reach Vercel
- Set Proxy status to DNS only (grey cloud) temporarily
- Wait 5 minutes and try again
- Check Vercel deployment is successful

---

## Important Notes

### Proxy Status (Orange vs Grey Cloud)

- **Orange Cloud (Proxied)**: Traffic goes through Cloudflare CDN
  - Use for: Root domain A record
  - Benefits: DDoS protection, caching, speed

- **Grey Cloud (DNS only)**: Direct connection
  - Use for: www CNAME, all email records
  - Required for: Vercel www, Resend email

### Email Considerations

If you want to **send** emails from `@hardtobear.uk`:
- Add all Resend DNS records
- Verify domain in Resend
- Use verified domain in contact form

If you want to **receive** emails at `russell@hardtobear.uk`:
- Add MX records from Resend
- OR set up email forwarding in Cloudflare Email Routing
- OR use Google Workspace / Microsoft 365

---

## Support Resources

- **Cloudflare Support**: [support.cloudflare.com](https://support.cloudflare.com)
- **Vercel Docs**: [vercel.com/docs/custom-domains](https://vercel.com/docs/concepts/projects/domains)
- **Resend Docs**: [resend.com/docs/dashboard/domains/introduction](https://resend.com/docs/dashboard/domains/introduction)

---

## Maintenance

### Monthly Checks

- Verify SSL certificate is valid
- Check DNS records haven't changed
- Review Cloudflare analytics
- Monitor email delivery rates in Resend

### When Making Changes

- Always test on staging first if possible
- Keep DNS records backed up
- Document any changes made
- Monitor for issues after changes

---

**Setup Time**: ~20 minutes
**DNS Propagation**: Usually instant with Cloudflare, up to 48 hours maximum
**SSL Certificate**: Auto-provisioned by Vercel in 1-15 minutes
**Cost**: £0 (Cloudflare Free + Vercel Free + Resend Free tier)

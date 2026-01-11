# Deploy Hard To Bear Website - Step-by-Step Guide

Follow these steps in order to get your website live at hardtobear.uk

---

## STEP 1: Set Up Email Domain (5 minutes)

### 1.1 Create Resend Account
1. Go to https://resend.com
2. Click "Sign Up"
3. Use your email to create account
4. Verify your email

### 1.2 Add Your Email Domain
1. In Resend dashboard, click "Domains"
2. Click "Add Domain"
3. Enter: `russellwestgarth.com`
4. Click "Add Domain"

### 1.3 Configure DNS Records
Resend will show you DNS records. You need to add these to wherever `russellwestgarth.com` is hosted.

**You'll see records like this (yours will be different):**
- TXT record for verification
- TXT record for SPF
- TXT record for DKIM
- (Optional) MX records for receiving email

**Go to your DNS provider for russellwestgarth.com and add ALL these records**

### 1.4 Verify Domain
1. After adding DNS records, go back to Resend
2. Click "Verify" next to russellwestgarth.com
3. Wait 1-5 minutes for verification
4. Status should change to "Verified" ✓

### 1.5 Create API Key
1. In Resend, click "API Keys"
2. Click "Create API Key"
3. Name it: "Hard To Bear Website"
4. Click "Create"
5. **COPY THE KEY** (starts with `re_`) - you'll need this in Step 2
6. **IMPORTANT**: Save this key somewhere safe - you can't see it again!

---

## STEP 2: Deploy to Vercel (5 minutes)

### 2.1 Sign in to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Repository
1. Click "Add New..." → "Project"
2. You should see "RWSalesfire/Hard-2-Bear" in the list
3. Click "Import" next to it
4. **WAIT - Don't click Deploy yet!**

### 2.3 Add Environment Variables
Before deploying, you need to add your API key:

1. Scroll down to "Environment Variables"
2. Add first variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: [Paste the API key you copied from Step 1.5]
   - Click "Add"

3. Add second variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://hardtobear.uk`
   - Click "Add"

### 2.4 Deploy
1. Now click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll see "🎉 Congratulations!" when done
4. Note your temporary URL (looks like: `hard-2-bear.vercel.app`)
5. Click "Continue to Dashboard"

---

## STEP 3: Configure Cloudflare DNS (5 minutes)

### 3.1 Log in to Cloudflare
1. Go to https://dash.cloudflare.com
2. Log in to your account
3. Click on `hardtobear.uk` domain

### 3.2 Add A Record for Root Domain
1. Click "DNS" in the left sidebar
2. Click "Add record" button
3. Fill in:
   - **Type**: Select "A"
   - **Name**: Type `@`
   - **IPv4 address**: Type `76.76.21.21`
   - **Proxy status**: Click the cloud icon until it's **ORANGE** (Proxied)
   - **TTL**: Leave as "Auto"
4. Click "Save"

### 3.3 Add CNAME Record for www
1. Click "Add record" again
2. Fill in:
   - **Type**: Select "CNAME"
   - **Name**: Type `www`
   - **Target**: Type `cname.vercel-dns.com`
   - **Proxy status**: Click the cloud icon until it's **GREY** (DNS only)
   - **TTL**: Leave as "Auto"
3. Click "Save"

### 3.4 Configure SSL/TLS
1. Click "SSL/TLS" in the left sidebar
2. Click "Overview"
3. Select **"Full (strict)"** mode
4. Click "Save"

---

## STEP 4: Connect Domain in Vercel (3 minutes)

### 4.1 Add Custom Domains
1. Go back to Vercel (https://vercel.com)
2. Click on your "Hard-2-Bear" project
3. Click "Settings" tab
4. Click "Domains" in the left menu

### 4.2 Add Root Domain
1. In the text box, type: `hardtobear.uk`
2. Click "Add"
3. Wait 1-2 minutes

### 4.3 Add www Subdomain
1. In the text box, type: `www.hardtobear.uk`
2. Click "Add"
3. Wait 1-2 minutes

### 4.4 Verify Configuration
Both domains should show:
- ✓ Valid Configuration
- SSL certificate will auto-provision

---

## STEP 5: Test Your Website (5 minutes)

### 5.1 Test Root Domain
1. Open new browser tab
2. Go to: `https://hardtobear.uk`
3. Website should load with SSL (padlock icon)
4. Scroll through all sections
5. Check that the **dark navy bear logo** appears

### 5.2 Test www Domain
1. Go to: `https://www.hardtobear.uk`
2. Should also load correctly
3. Should redirect or show same content

### 5.3 Test Contact Form
1. Scroll to the contact form at bottom
2. Fill out:
   - Name: Test User
   - Email: your-email@example.com
   - Company: Test Company
   - Team Size: 5
   - What's Broken: Testing the contact form
3. Click "Request Reality Check"
4. Should see green success message
5. Check `hello@russellwestgarth.com` for the email
6. Check spam folder if not in inbox

### 5.4 Test on Mobile
1. Open website on your phone
2. Test responsiveness
3. Try contact form on mobile

---

## TROUBLESHOOTING

### Domain not loading?
- Wait up to 1 hour (usually works in 5-10 minutes)
- Check Cloudflare DNS records match exactly
- Try incognito/private browsing mode
- Clear browser cache

### SSL certificate error?
- Wait 10-15 minutes for Vercel to provision certificate
- Check both domains added in Vercel
- Verify Cloudflare SSL/TLS is "Full (strict)"

### Contact form not working?
- Check RESEND_API_KEY is set in Vercel environment variables
- Verify russellwestgarth.com is verified in Resend
- Check Vercel function logs: Go to Vercel → Deployments → Functions
- Check spam folder

### Bear logo still brown?
- Hard refresh the page (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Clear browser cache
- The logo should be dark navy blue now

---

## YOU'RE DONE! 🎉

Your website is now live at:
- https://hardtobear.uk
- https://www.hardtobear.uk

Emails from contact form go to:
- hello@russellwestgarth.com

---

## NEXT STEPS (Optional)

### Add Google Analytics
1. Go to https://analytics.google.com
2. Create GA4 property for hardtobear.uk
3. Get Measurement ID (G-XXXXXXXXXX)
4. In Vercel → Settings → Environment Variables
5. Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = Your ID
6. Redeploy from Vercel

### Update Content Later
1. Edit `/app/page.tsx` in your repository
2. Commit and push to GitHub
3. Vercel auto-deploys in 2-3 minutes

---

**Need help?** Email: hello@russellwestgarth.com

**Estimated total time**: 15-20 minutes
**Monthly cost**: £0 (Free tier for everything)

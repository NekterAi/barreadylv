# Bar Ready LV - Deployment Instructions

## Quick Deploy (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com) and sign in**

2. **Click "Add New Project"**

3. **Import the GitHub repository:**
   - Select "NekterAi/barreadylv" from your repositories
   - Click "Import"

4. **Configure the project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   ```
   STRIPE_SECRET_KEY = sk_test_... (or sk_live_...)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_... (or pk_live_...)
   ```
   
   Get these from: https://dashboard.stripe.com/apikeys

6. **Click "Deploy"**
   - Initial deployment takes ~2-3 minutes
   - You'll get a URL like: `barreadylv.vercel.app`

7. **Add Custom Domain (barreadylv.com):**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add `barreadylv.com` and `www.barreadylv.com`
   - Follow DNS instructions provided by Vercel

---

## Stripe Setup

### Test Mode (For Development)

1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy the **Publishable key** (starts with `pk_test_`)
3. Copy the **Secret key** (starts with `sk_test_`)
4. Add to Vercel environment variables

### Live Mode (For Production)

1. Go to https://dashboard.stripe.com/apikeys
2. Toggle "View test data" OFF (top right)
3. Copy the **Publishable key** (starts with `pk_live_`)
4. Copy the **Secret key** (starts with `sk_live_`)
5. Update Vercel environment variables
6. Redeploy (Vercel → Deployments → ⋯ → Redeploy)

**Important:** Test thoroughly in test mode before switching to live mode!

---

## DNS Configuration for barreadylv.com

After deploying to Vercel:

1. **Log into your domain registrar** (where you bought barreadylv.com)

2. **Add DNS records as instructed by Vercel:**
   
   For apex domain (`barreadylv.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes to 48 hours, usually quick)

4. **Verify in Vercel dashboard** - it will show "Valid Configuration" when ready

---

## Testing the Site

### Local Testing (Optional)

```bash
cd bar-ready-lv
npm install
npm run dev
```

Open http://localhost:3000

### Production Testing

1. Go to your Vercel deployment URL
2. Test the booking flow:
   - Click "Book Inspection Now"
   - Fill out the form
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC
3. Verify success page appears
4. Check Stripe dashboard for the test payment

---

## What's Been Built

✅ Landing page with hero, value props, how it works
✅ Booking form with contact info, bar details, scheduling  
✅ Stripe payment integration ($299 inspection)
✅ Success page with next steps
✅ Fully responsive mobile design
✅ SEO optimized metadata

---

## Next Steps After Deployment

1. **Test the full booking flow** with Stripe test mode
2. **Switch to Stripe live mode** when ready for real payments
3. **Monitor bookings** in Stripe dashboard → Payments
4. **Set up email notifications** (optional, requires webhook setup)
5. **Add Google Analytics** (optional, for tracking visitors)

---

## Support

- GitHub Repo: https://github.com/NekterAi/barreadylv
- Vercel Docs: https://vercel.com/docs
- Stripe Docs: https://stripe.com/docs

For issues, contact CLU via dashboard.

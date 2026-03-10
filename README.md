# Bar Ready LV

Professional mock health & safety inspections for Las Vegas bars.

## Features

- **Beautiful Landing Page**: Hero section, value propositions, how it works, and strong CTAs
- **Booking System**: Complete form with contact info, bar details, and scheduling
- **Stripe Integration**: Secure payment processing ($299 mock inspection)
- **Success Page**: Clear next steps after booking
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **Type-Safe**: Built with TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Payments**: Stripe Checkout
- **Deployment**: Vercel
- **Language**: TypeScript

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with your Stripe keys:
```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/bar-ready-lv)

### Manual Deployment

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Set Environment Variables** in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add:
     - `STRIPE_SECRET_KEY` = your Stripe secret key
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key

4. **Deploy to Production**:
```bash
vercel --prod
```

## Stripe Setup

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from [Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys)
3. Use **Test Mode** keys for development (start with `sk_test_` and `pk_test_`)
4. Use **Live Mode** keys for production (start with `sk_live_` and `pk_live_`)

## DNS Configuration (barreadylv.com)

After deploying to Vercel:

1. Go to Vercel Project Settings → Domains
2. Add `barreadylv.com` and `www.barreadylv.com`
3. Follow Vercel's instructions to add DNS records at your domain registrar:
   - For apex domain (`barreadylv.com`): Add A record to `76.76.21.21`
   - For www subdomain: Add CNAME record to `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## Payment Flow

1. Customer fills out booking form
2. Form data sent to `/api/create-checkout-session`
3. API creates Stripe Checkout session with booking details in metadata
4. Customer redirected to Stripe's secure payment page
5. After payment, customer redirected to success page
6. Booking details stored in Stripe session metadata (accessible via Stripe Dashboard)

## Next Steps / Future Enhancements

- [ ] Connect Stripe webhooks to send confirmation emails
- [ ] Add admin dashboard to view bookings
- [ ] Integrate with calendar/scheduling system
- [ ] Add review/testimonial section
- [ ] Set up email notifications (SendGrid, Resend, etc.)
- [ ] Add analytics (Google Analytics, Plausible)

## Support

For issues or questions, contact: [your-email@example.com]

## License

© 2026 Bar Ready LV. All rights reserved.

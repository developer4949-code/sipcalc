# SIP Calc India

Production-ready Next.js 14 website for Indian SIP calculators, SEO content, AdSense readiness, and Vercel deployment.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel free

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com), choose **Add New Project**, and import the repo.
3. Keep the defaults: Framework `Next.js`, Build Command `npm run build`, Output handled by Vercel.
4. Click **Deploy**. Vercel will create a free `.vercel.app` URL.
5. After deploy, replace `https://sipcalcindia.com` in `lib/seo.js`, `public/robots.txt`, and `public/sitemap.xml` with your real domain.

## Submit sitemap to Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your domain property and verify ownership through DNS.
3. Go to **Sitemaps**.
4. Submit `https://yourdomain.com/sitemap.xml`.
5. Use **URL Inspection** for the home page and key calculator pages to request indexing.

## Apply for Google AdSense

1. Replace `ca-pub-XXXXXXXXXXXXXXXX` in `components/AdSlot.js` with your AdSense publisher ID.
2. Replace each `data-ad-slot` value with real ad unit IDs from AdSense.
3. Make sure Privacy Policy, Terms, About, and content pages are live.
4. Apply at [Google AdSense](https://www.google.com/adsense/start/).
5. Add the AdSense verification script in `pages/_document.js` or via a consent-aware tag manager.

## Connect a custom domain on Vercel

1. In Vercel, open the project and go to **Settings → Domains**.
2. Add your domain, for example `sipcalcindia.com`.
3. Update DNS records at your registrar using Vercel's shown `A` and `CNAME` records.
4. Wait for verification and SSL activation.
5. Update canonical URLs and sitemap domain in the files listed above.

## Set up Google Analytics

1. Create a GA4 property in [Google Analytics](https://analytics.google.com).
2. Copy the Measurement ID, such as `G-XXXXXXXXXX`.
3. Add the Google tag script to `pages/_document.js` or integrate through Google Tag Manager.
4. Confirm real-time traffic after opening the deployed site.

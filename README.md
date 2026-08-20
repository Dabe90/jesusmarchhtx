# Jesus March HTX

Custom rebuild of [www.jesusmarchhtx.com](https://www.jesusmarchhtx.com), moving off Wix onto Next.js so it can live on **Vercel** or **Cloudflare**.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s included

- Home, Gallery, Get Involved, New Family, Vision, Give, The Rec, Programs, Nigeria, Volunteer, Schedule, Privacy, DD Cinemas
- Old Wix URLs redirect (`/home`, `/terms-of-use`, `/support-us`, `/about`, `/contact`, `/events`)
- Forms post to `/api/contact` (and fall back to `give@JesusMarchHTX.com` if email isn’t configured)

## Email for forms (optional)

Copy `.env.example` to `.env.local` and add a [Resend](https://resend.com) API key. Until then, submissions are logged on the server and the form still succeeds.

## Giving

The Give page currently uses `give@JesusMarchHTX.com`. After DNS is moved, connect PayPal, Zelle, Stripe, or the processor you used on Wix.

## Deploy on Vercel (recommended)

1. Push this folder to GitHub (or import the folder in the Vercel dashboard).
2. Import the project at [vercel.com/new](https://vercel.com/new). Framework: Next.js.
3. Add env vars if you have them: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.
4. Deploy. You’ll get a `*.vercel.app` URL to preview.
5. **Domain cutover**
   - In Vercel: Project → Settings → Domains → add `www.jesusmarchhtx.com` and `jesusmarchhtx.com`.
   - In Wix / your domain registrar: point DNS:
     - `www` CNAME → `cname.vercel-dns.com`
     - apex A record → `76.76.21.21` (Vercel will show the exact records)
   - Keep the Wix site up until the new DNS propagates (often under an hour, sometimes up to 48 hours).
   - After the custom site is live, you can cancel Wix hosting. Keep the domain if it is registered at Wix.

## Deploy on Cloudflare Pages

Next.js with the contact API is simplest on Vercel. For Cloudflare:

1. Create a Pages project from this repo.
2. Build command: `npx @opennextjs/cloudflare build` after adding the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare), **or**
3. Use Cloudflare Workers + OpenNext.

If you only need a static site on Cloudflare (no `/api/contact`), forms still fall back to email.

Point DNS in Cloudflare:

- `www` CNAME to your Pages project
- apex as CNAME flattening to the same target

## Photos

Images were copied from the current Wix media library into `public/images`. Export any missing original-resolution files from **Wix Dashboard → Media** if you want print-quality downloadables.

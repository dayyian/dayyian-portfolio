# Dayyian Sajid — Portfolio

A Next.js portfolio site. Black/gold, cursor-reactive background, and a built-in
"Ask Dayyian" chat widget (currently keyword-based, not a live model).

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed. Check with `node -v`.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Where to edit things

Everything lives in one file: **`components/Portfolio.jsx`**

- **`EXPERIENCE`** (top of file) — your career timeline entries
- **`SKILLS`** — the four skill categories
- **`PROJECTS`** — the project cards
- **`STATS`** — the animated counters (views, companies, etc.)
- **`MARQUEE_WORDS`** — the scrolling ticker strip
- **`CHAT_KB`** — what the "Ask Dayyian" chat widget says (keyword-matched, edit
  the `k` arrays to add trigger words, edit `a` for the answer)
- Scroll further down to find the actual page markup (hero text, about
  paragraph, contact links) — search for the text you want to change.

### Things you'll probably want to update

1. **Contact links** — search for `mailto:hello@dayyiansajid.com` and your
   LinkedIn/Instagram `href="#"` placeholders near the bottom of the file, and
   swap in your real email and profile URLs.
2. **Colors** — the gold is `#D4AF37` and background is `#0A0A0A`, both used
   throughout as inline hex values. Find-and-replace to adjust the palette.

## Deploy it for free (Vercel)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, select your repo, click **Deploy**.
4. Vercel auto-detects Next.js — no config needed. You'll get a live URL in
   about a minute, and it redeploys automatically on every push.

## Notes

- The chat widget is **not** a real AI model — it's simple keyword matching
  against `CHAT_KB`. Wiring up a real LLM-backed version requires a backend
  API route and an Anthropic (or other) API key — ask if you want that built.
- Custom cursor is desktop-only; it's automatically disabled on touch devices.
# Dayyian-profile

# Artist Portfolio – Cloudflare Worker

This repo hosts the portfolio site for **Asia Lakay Grady**, a multidisciplinary artist and creative technologist.

## 🧠 Tech Stack
- Cloudflare Workers (no Pages)
- Static assets in `/public`
- Dynamic endpoint: `/api/contact`
- Worktop router

## ⚙️ Local Development
```bash
npm install worktop wrangler --save-dev
wrangler dev
```

## 🚀 Deployment
1. Push this repo to GitHub.
2. In Cloudflare Dashboard → Workers & Pages → “Connect to Git.”
3. Select this repo and deploy.
4. Cloudflare automatically runs `wrangler deploy`.

## 🧩 Customization
- Update `index.html` and `/assets` with your images and copy.
- Modify `/src/api/contact.js` to connect to email or KV storage.
- Add more pages to `/public` and routes to `/src/worker.js`.

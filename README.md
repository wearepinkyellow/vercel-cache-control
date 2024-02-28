# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

- Added nuxt 3 minimal starter by 'npx init'
- Enabled ISR for all routes
- Removed app.vue and added index.vue so there is only one page in the project "/"
- Any other route will land you on a 404
- Added a Nitro plugin in "/server/plugins" this adds a cache control header that should tell vercel to not cache the response
- All 404 pages are still returned with a X-Vercel-Cache: HIT header
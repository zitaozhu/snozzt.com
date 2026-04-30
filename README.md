# snozzt.com

Marketing site and privacy policy for the [Snozzt](https://github.com/zitaozhu/snozzt) iOS sleep tracker.

## What's here

- `index.html` — landing page with hero, privacy story, feature grid, download placeholders for App Store, TestFlight, and Google Play.
- `style.css` — single stylesheet, no framework, no build step.
- `privacy.html` *(coming)* — privacy policy linked from the App Store listing.
- `support.html` *(coming)* — minimal support page also linked from the App Store listing.

## Local preview

It's plain HTML — open `index.html` directly in a browser, or run a tiny static server:

```bash
# Python (built into macOS)
python3 -m http.server 8000

# Or any other static server
npx serve .
```

Then visit `http://localhost:8000`.

## Deployment

The site is intentionally static so it works on anything:

- **Cloudflare Pages** — recommended. Free, fast, global CDN. Connect this repo, no build command, output directory is `/`.
- **GitHub Pages** — also free. Settings → Pages → deploy from `main` branch.
- **Alibaba Cloud / Tencent Cloud** — only needed if/when ICP-filing for China App Store.

## Updating download links

The three buttons in the Download section are placeholders. Replace each `href="#"` with the real URL when each platform goes live:

| Button | Replace with |
|---|---|
| App Store | `https://apps.apple.com/app/idXXXXXXXXX` |
| TestFlight | `https://testflight.apple.com/join/XXXXXXXX` |
| Google Play | `https://play.google.com/store/apps/details?id=com.zitaozhu.snozzt` |

Status badges (`Coming soon`, `Beta access`, `Planned`) live in the `data-status` attribute and are styled in `style.css` — adjust copy there.

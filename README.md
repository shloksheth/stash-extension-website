# Stash extension website

A small static landing page for **Stash**, a free Chrome extension for saving YouTube videos in custom lists.

## What is included

- Responsive website with real Stash screenshots
- Subtle scroll entrance animations and interactive screenshot tabs
- Clear three-step overview
- Install area ready for the Chrome Web Store listing
- Privacy policy at `/privacy.html`
- No build tools required; just HTML, CSS, and JavaScript

## Add the Chrome Web Store link

Open `script.js` and paste the approved Chrome Web Store listing URL into `chromeStoreUrl`. The install button will appear automatically.

## Host with GitHub Pages

1. Create a public GitHub repository named `stash-extension-website`.
2. Upload the files from this folder to the repository root (not a nested directory).
3. In **Settings → Pages**, under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Your site will be at `https://shloksheth.github.io/stash-extension-website/` if the repository is under `shloksheth`.

The website contains no tracking and does not collect visitor data. It uses Google Fonts; the font CDN may receive requests.

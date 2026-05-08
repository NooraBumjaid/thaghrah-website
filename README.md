# Thaghrah Public Project Website

This is the public informational website required by the domain instructions.

## Files

- `index.html` - project website page
- `styles.css` - styling

## Run locally

Open `index.html` directly in your browser, or run a local static server:

```bash
cd project-website
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080`.

## Publish with a custom domain

Recommended simple flow:

1. Upload this folder to a GitHub repository.
2. Enable **GitHub Pages** for that repository.
3. In GitHub Pages settings, set custom domain (example: `thaghrah.com`).
4. In Namecheap DNS:
   - Set `A` records for root (`@`) to GitHub Pages IPs.
   - Set `CNAME` for `www` to `<username>.github.io`.
5. Enable HTTPS in GitHub Pages.
6. Set up professional email in Namecheap (e.g., `info@thaghrah.com`).

This gives you all 4 required components:

- Domain
- Hosting
- Professional email
- Website

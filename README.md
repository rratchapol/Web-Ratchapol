# Ratchapol — Full-Stack Developer Portfolio

Premium dark engineering portfolio built with Next.js, React, TypeScript and CSS.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

Edit `app/home.tsx` for homepage/experience/contact content, `app/projects.ts` for project records and `app/globals.css` for visual styling. `app/page.tsx` is the server wrapper for homepage metadata and profile structured data.

## SEO and sharing

`app/seo.ts` defines the canonical production origin (`https://www.taotech.site`), profile identity and shared metadata helpers. Each route has its own title, description, canonical and Open Graph/Twitter image. The sitemap is derived from the project records; `robots.txt` allows public crawling and references that sitemap. Last-modified dates are omitted until real content dates are available.

The homepage and case studies render JSON-LD on the server. Share images use Next.js `ImageResponse`. The hero uses responsive WebP assets with a matching preload; retain the original PNG as the source when regenerating them.

Validate a change with `node node_modules/typescript/bin/tsc --noEmit` and `npm run build`, then check the deployed `/sitemap.xml`, `/robots.txt`, page metadata and share-image URLs. For Google/Bing indexing and AI visibility, inspect the owner reports rather than inferring them from markup alone.

`public/portfolio-reference.png` is the generated visual reference used for the design direction.

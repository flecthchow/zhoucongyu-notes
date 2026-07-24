# zhoucongyu notes

> A fish swimming in AI ocean.

A personal static blog about tech, health, and side projects. It is built with
Next.js and vinext, stored on GitHub, and published automatically by Cloudflare
Pages.

## Publish an article

1. Open `content/posts/_template.md`.
2. Copy it to a new file in the same folder.
3. Name the file with lowercase words and hyphens, for example
   `what-i-learned-building-a-chatbot.md`.
4. Fill in the front matter at the top and write the article in Markdown.
5. Commit the new file to `main` on GitHub.

The filename becomes the article URL. For example:

```text
content/posts/what-i-learned-building-a-chatbot.md
https://zhoucongyu.pages.dev/posts/what-i-learned-building-a-chatbot/
```

Posts are ordered by `isoDate`, newest first. The newest post is featured on the
homepage. Available accent colors are `coral`, `blue`, `lime`, and `gold`.

## Edit other content

- `app/about/page.tsx`: About page
- `app/page.tsx`: homepage structure
- `app/globals.css`: design and typography
- `app/layout.tsx`: site title, description, and social sharing metadata

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run lint
```

## Deployment

Cloudflare Pages watches the `main` branch and publishes each commit
automatically.

- Build command: `npm run pages:build`
- Build output directory: `dist/client`
- Production site: https://zhoucongyu.pages.dev

## Comments

Comments use Giscus and GitHub Discussions. Visitors sign in with GitHub; the
site does not publish an email address.

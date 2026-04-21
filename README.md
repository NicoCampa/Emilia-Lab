# Emilia Lab Website

Modern bilingual website for Emilia Lab, a student-led AI initiative focused on the Italian market.

## Structure

```txt
src/
  app/                 Next.js App Router pages and shared layout
  components/          Reusable UI, navigation, sections, and page components
  content/site.ts      Bilingual Italian/English content
  lib/utils.ts         Small shared utilities
public/
  emilia-logo.png      Logo asset used by the site
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`.
5. Output directory: leave empty/default.

## Editing Content

Most visible copy lives in `src/content/site.ts`. Update the `it` and `en` entries together to keep both languages complete.

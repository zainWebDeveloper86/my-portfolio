# Zain — Portfolio

Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Structure
is inspired by Logsfolio (hero, experience, projects, education timeline),
with a custom warm-charcoal/amber theme and a skills section with tech icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build so
`next/font/google` can fetch Inter and JetBrains Mono — this works out of
the box on your machine and on Vercel.

## Editing content

All content lives in `src/data/*.json` — no need to touch component code
to update text:

| File | Controls |
| --- | --- |
| `config.json` | Name, title, bio, nav links, contact info |
| `skills.json` | Skills grouped by category, with react-icons name per skill |
| `projects.json` | Project cards (title, description, tech, highlights, links) |
| `experience.json` | Work experience timeline |
| `education.json` | Education timeline |
| `learning.json` | "Currently learning" section |

To find an icon name for a new skill, browse https://react-icons.github.io/react-icons/icons/si/
(Simple Icons) or /tb/ (Tabler Icons, for concepts without a brand logo),
then add the matching export name to `src/lib/icons.tsx`.

**To do before publishing:**
- Confirm the exact official university name in `education.json`
  (currently a placeholder — "University in Sahiwal, Pakistan")
- Add `liveUrl` / `repoUrl` in `projects.json` once available
- Add your LinkedIn URL in `config.json` → `contact.linkedin`
- Replace `public/favicon.ico` with your own if you'd like

## Theme

Color tokens are defined in `src/app/globals.css` as CSS variables
(`--background`, `--surface`, `--foreground`, `--muted`, `--accent`,
`--border`) for light and `[data-theme="dark"]`. Change the hex values
there to adjust the palette globally.

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com/new) —
zero config needed, it auto-detects Next.js.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

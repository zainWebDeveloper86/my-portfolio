# Zain — Personal Portfolio

A personal developer portfolio built with Next.js, TypeScript, and Tailwind
CSS. It showcases my projects, skills, experience, education, and what I'm
currently learning, using a custom Warm Charcoal + Amber theme with light
and dark mode support.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Icons
- next-themes

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark/light theme toggle
- Sticky navigation with scroll-spy active section highlighting
- Skills grouped by category with technology icons
- Project cards with a live demo link and a dedicated project details page
- Experience and education timelines
- Currently learning section
- Content kept in JSON, separate from UI components

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    projects/[slug]/page.tsx   (project details page)
  components/
    Header.tsx
    ThemeToggle.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    WorkExperience.tsx
    Education.tsx
    CurrentlyLearning.tsx
    Contact.tsx
    Footer.tsx
  data/
    config.json
    skills.json
    projects.json
    experience.json
    education.json
    learning.json
  lib/
    icons.tsx

public/
  profile.jpg   (add your own photo here)
```

## Content Management

Most updates only need a change in `src/data/`, not the components:

| File              | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| `config.json`     | Name, title, bio, nav links, contact info          |
| `skills.json`     | Skills grouped by category, with an icon per skill |
| `projects.json`   | Project descriptions, tech, highlights, and links  |
| `experience.json` | Work and fellowship experience                     |
| `education.json`  | Education history                                  |
| `learning.json`   | Currently learning technologies                    |

### Adding a skill

Find the icon name at [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)
or [Tabler Icons](https://react-icons.github.io/react-icons/icons/tb/),
add the export to `src/lib/icons.tsx`, then reference it in `skills.json`.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000.

## Theme

Colors are defined as CSS variables in `src/app/globals.css`:

| Token      | Light     | Dark      |
| ---------- | --------- | --------- |
| Background | `#FAFAF8` | `#0B0D10` |
| Surface    | `#F1F0EC` | `#15181C` |
| Foreground | `#16181A` | `#EDEAE4` |
| Muted      | `#6B6F76` | `#8B9198` |
| Accent     | `#D9822B` | `#F2A65A` |
| Border     | `#E5E3DE` | `#23282D` |

## Deployment

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) —
it auto-detects Next.js, no extra config needed.

## Before Publishing

- Replace the placeholder university name in `education.json`
- Add your real photo at `public/profile.jpg`
- Replace the dummy `liveUrl`/`repoUrl` values in `projects.json`
- Add your LinkedIn URL in `config.json` → `contact.linkedin`
- Run `npm run build` once to confirm a clean production build

## Author

**Zain Ul Abidin** — Full-Stack Software Engineer

- GitHub: https://github.com/zainWebDeveloper86
- LinkedIn: https://www.linkedin.com/in/zainulabidin86/
- Email: zain.webdev86@gmail.com

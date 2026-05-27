# Alicia Marianne — QA Portfolio

Personal portfolio built with React + Vite, deployed to GitHub Pages.

**Live:** https://m4rri4nne.github.io/portfolio/

---

## Tech Stack

- **React 18** + **Vite 6**
- Vanilla CSS with custom properties (no CSS framework)
- i18n: PT / EN / FR (no external library)
- CI/CD: GitHub Actions → GitHub Pages

## Project Structure

```
src/
├── App.jsx              # AppContext — theme & language state
├── main.jsx
├── index.css            # Design system (CSS variables, all styles)
├── translations.js      # PT / EN / FR strings
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Articles.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── GothicDivider.jsx
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/portfolio/

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the project and deploys `dist/` to GitHub Pages automatically.

**First-time setup:** In the repository **Settings → Pages**, set the source to **GitHub Actions**.

## CV Download

Place `alicia_depaula.pdf` inside the `public/` folder at the project root. Vite serves it as `/alicia_depaula.pdf`, which is what the Download CV button links to.

## Features

- Dark / light theme toggle
- PT / EN / FR language switcher
- Responsive layout (mobile-first breakpoint at 720px)
- Sections: Hero, About, Articles, Projects, Contact

### Hero
- 4-button CTA grid: View Projects, Contact, My Articles, Download CV
- Stats: repositories, followers, articles

### About
- Updated bio reflecting 4+ years in QA (since 2021), background in Control and Automation Engineering, experience with manual and automated testing of web apps, APIs and microservices
- Mentions Continuous Testing, He4rt Delas participation, and He4rt Developers mentoring
- Skills: testing tools, cloud/DevOps, languages, and spoken language bars

### Articles
- Articles fetched live from the **dev.to API** (`/api/articles?username=m4rri4nne`)
- Client-side pagination: 6 articles per page with Previous / Next controls
- Skeleton loading state while fetching

### Projects
- Repositories fetched live from the **GitHub API** (`/users/m4rri4nne/repos`)
- Filtered: no forks, must have a description; sorted by stars descending
- Shows top 6 repos + a link card to the full GitHub profile
- Skeleton loading state while fetching

### Contact
- Simplified to icon-only links: LinkedIn, GitHub, X/Twitter, Dev.to, Email, AWS Builder

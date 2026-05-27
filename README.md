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

## Features

- Dark / light theme toggle
- PT / EN / FR language switcher
- Responsive layout (mobile-first breakpoint at 720px)
- Sections: Hero, About, Articles, Projects, Contact

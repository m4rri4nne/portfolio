<div align="center">

# ✦ Alicia Marianne — Portfolio

**QA Engineer · AWS Community Builder · He4rt Developers Mentor**

[![Deploy](https://github.com/m4rri4nne/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/m4rri4nne/portfolio/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-8b4fc8?style=flat-square&logo=github)](https://m4rri4nne.github.io/portfolio/)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Vanilla-1572B6?style=flat-square&logo=css3&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-PT%20·%20EN%20·%20FR-c9a030?style=flat-square)
![Node](https://img.shields.io/badge/Node-24-339933?style=flat-square&logo=nodedotjs&logoColor=white)

</div>

---

## ✨ Features

- 🌗 **Dark / light** theme toggle
- 🌐 **Trilingual** — PT / EN / FR switcher (no external library)
- 📱 **Responsive** — mobile-first, breakpoint at 720px
- 📄 **CV download** — served from `public/`
- 📡 **Live articles** — fetched from the dev.to API with pagination
- 🐙 **Live projects** — fetched from the GitHub API, sorted by stars
- 🚀 **Auto-deploy** — GitHub Actions → GitHub Pages on every push to `main`

---

## 🗂 Project Structure

```
portifolio/
├── public/
│   └── alicia_depaula.pdf     # CV — place file here
├── src/
│   ├── App.jsx                # AppContext: theme & language state
│   ├── main.jsx
│   ├── index.css              # Design system (CSS variables, all styles)
│   ├── translations.js        # PT / EN / FR strings
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx           # CTA grid, stats, avatar
│       ├── About.jsx          # Bio, skills, language bars
│       ├── Articles.jsx       # dev.to API + pagination
│       ├── Projects.jsx       # GitHub API + star sort
│       ├── Contact.jsx        # Icon-only social links
│       ├── Footer.jsx
│       └── GothicDivider.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml         # Build + deploy to GitHub Pages
└── vite.config.js
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)

```bash
npm run build    # outputs to dist/
npm run preview  # preview production build locally
```

---

## 🚀 Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the project and publishes `dist/` to GitHub Pages automatically.

**First-time setup:** go to the repository **Settings → Pages** and set the source to **GitHub Actions**.

---

## 📡 Live Data

| Section | Source | Details |
|---|---|---|
| Articles | [dev.to API](https://dev.to/api/articles?username=m4rri4nne) | Fetched on load · 6 per page |
| Projects | [GitHub API](https://api.github.com/users/m4rri4nne/repos) | Filtered forks · sorted by ★ |

---

<div align="center">

made with 💜 by [Alicia Marianne](https://github.com/m4rri4nne)

</div>

import { useContext } from 'react'
import { AppContext } from '../App'

const PROJECTS = [
  {
    href: 'https://github.com/m4rri4nne/api-test-generator',
    name: 'api-test-generator',
    desc: 'Generates API test scenarios automatically from Swagger/OpenAPI specs, reducing manual effort and improving coverage.',
    lang: 'Python',
    stars: 9,
  },
  {
    href: 'https://github.com/m4rri4nne/k6-browser-performance',
    name: 'k6-browser-performance',
    desc: 'Automates browser-based performance testing with k6, measuring UX metrics and integrating into CI pipelines.',
    lang: 'JavaScript',
    stars: 7,
  },
  {
    href: 'https://github.com/m4rri4nne/playwright-docker',
    name: 'playwright-docker',
    desc: 'Front-end automation with Playwright, fully containerized with Docker and integrated with GitHub Actions for CI/CD.',
    lang: 'TypeScript',
    stars: 2,
  },
  {
    href: 'https://github.com/m4rri4nne/db-performance-tests',
    name: 'db-performance-tests',
    desc: 'PostgreSQL performance testing suite — benchmarks query latency, detects N+1 patterns, and tracks regressions with Grafana.',
    lang: 'Python',
    stars: 2,
  },
  {
    href: 'https://github.com/m4rri4nne/bl-tracker',
    name: 'bl-tracker',
    desc: 'Tracks BL webtoon and novel updates with filters for type, language, and release status in one clean dashboard.',
    lang: 'TypeScript',
    stars: 1,
  },
]

export default function Projects() {
  const { t } = useContext(AppContext)

  return (
    <section id="projects">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['proj.eyebrow']}</p>
          <h2 className="s-title">{t['proj.title']}</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <a key={project.href} className="p-card" href={project.href} target="_blank" rel="noopener noreferrer">
              <div className="p-name">{project.name}</div>
              <div className="p-desc">{project.desc}</div>
              <div className="p-meta">
                <span className="p-lang">{project.lang}</span>
                <span className="p-stars">{project.stars}</span>
              </div>
            </a>
          ))}
          <a className="p-card" href="https://github.com/m4rri4nne" target="_blank" rel="noopener noreferrer">
            <div className="p-name">{t['proj.more']}</div>
            <div className="p-desc">{t['proj.moreDesc']}</div>
            <div className="p-meta">
              <span className="p-lang">GitHub →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

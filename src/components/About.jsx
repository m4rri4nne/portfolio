import { useContext } from 'react'
import { AppContext } from '../App'

const LANGUAGES = [
  { key: 'lang.pt', level: 'lang.native',       pct: 100 },
  { key: 'lang.en', level: 'lang.advanced',      pct: 85  },
  { key: 'lang.fr', level: 'lang.intermediate',  pct: 50  },
]

export default function About() {
  const { t } = useContext(AppContext)

  return (
    <section id="about">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['about.eyebrow']}</p>
          <h2 className="s-title">{t['about.title']}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>{t['about.p1']}</p>
            <p>{t['about.p2']}</p>
            <p>{t['about.p3']}</p>
            <p>{t['about.p4']}</p>
          </div>
          <div className="skills-stack">
            <div className="skill-block">
              <div className="sk-name">{t['sk.testing']}</div>
              <div className="sk-tags">
                {['Playwright', 'k6', 'NUnit', 'Selenium', 'Postman', 'JMeter'].map(tag => (
                  <span key={tag} className="sk-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="sk-name">{t['sk.cloud']}</div>
              <div className="sk-tags">
                {['Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Grafana', 'PostgreSQL'].map(tag => (
                  <span key={tag} className="sk-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="sk-name">{t['sk.langs']}</div>
              <div className="sk-tags">
                {['Python', 'TypeScript', 'JavaScript', 'C# / .NET', 'SQL'].map(tag => (
                  <span key={tag} className="sk-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
            <div className="sk-name">{t['lang.title']}</div>
            <div className="lang-bars">
              {LANGUAGES.map(({ key, level, pct }) => (
                <div key={key} className="lang-item">
                  <div className="lang-header">
                    <span className="lang-name">{t[key]}</span>
                    <span className="lang-level">{t[level]}</span>
                  </div>
                  <div className="lang-track">
                    <div className="lang-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useContext } from 'react'
import { AppContext } from '../App'
import { Butterfly, SectionHead } from './Ornaments'

const SKILLS = [
  { key: 'sk.testing', tags: ['Playwright', 'k6', 'NUnit', 'Selenium', 'Postman', 'JMeter'] },
  { key: 'sk.cloud', tags: ['Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'Grafana', 'PostgreSQL'] },
  { key: 'sk.ai', tags: ['Claude', 'Claude Code', 'ChatGPT', 'sk.ai.agents'] },
  { key: 'sk.langs', tags: ['Python', 'TypeScript', 'JavaScript', 'C# / .NET', 'SQL'] },
]

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
        <SectionHead icon={<Butterfly size={44} />} eyebrow={t['about.eyebrow']} title={t['about.title']} />
        <div className="about-grid">
          <div className="about-text">
            <p>{t['about.p1']}</p>
            <p>{t['about.p2']}</p>
            <p>{t['about.pai']}</p>
            <p>{t['about.p3']}</p>
            <p className="about-aside">{t['about.p4']}</p>
          </div>
          <div className="skills-stack">
            {SKILLS.map(s => (
              <div key={s.key} className="skill-block">
                <div className="sk-name">{t[s.key]}</div>
                <div className="sk-tags">
                  {s.tags.map(tag => <span key={tag} className="sk-tag">{t[tag] || tag}</span>)}
                </div>
              </div>
            ))}
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

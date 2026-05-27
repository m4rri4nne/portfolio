import { useContext } from 'react'
import { AppContext } from '../App'

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
                {['AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Grafana', 'PostgreSQL'].map(tag => (
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
          </div>
        </div>
      </div>
    </section>
  )
}

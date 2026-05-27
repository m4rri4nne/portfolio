import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const SHOW = 6

export default function Projects() {
  const { t } = useContext(AppContext)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/m4rri4nne/repos?per_page=100&sort=updated')
      .then(r => r.json())
      .then(data => {
        const sorted = data
          .filter(r => !r.fork && r.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, SHOW)
        setRepos(sorted)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['proj.eyebrow']}</p>
          <h2 className="s-title">{t['proj.title']}</h2>
        </div>
        <div className="projects-grid">
          {loading
            ? Array.from({ length: SHOW }).map((_, i) => (
                <div key={i} className="p-card p-card--skeleton" aria-hidden="true">
                  <div className="p-name sk-line" style={{ width: '60%' }} />
                  <div className="p-desc sk-line" style={{ height: '3rem', marginBottom: '1.2rem' }} />
                  <div className="p-meta">
                    <span className="sk-line" style={{ width: '4rem', height: '0.8rem' }} />
                  </div>
                </div>
              ))
            : repos.map(repo => (
                <a key={repo.id} className="p-card" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="p-name">{repo.name}</div>
                  <div className="p-desc">{repo.description}</div>
                  <div className="p-meta">
                    {repo.language && <span className="p-lang">{repo.language}</span>}
                    {repo.stargazers_count > 0 && <span className="p-stars">{repo.stargazers_count}</span>}
                  </div>
                </a>
              ))
          }
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

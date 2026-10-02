import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import { Butterfly, SectionHead } from './Ornaments'

const SHOW = 6

export default function Projects() {
  const { t } = useContext(AppContext)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/m4rri4nne/repos?per_page=100&sort=updated')
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data)) return
        setRepos(
          data
            .filter(r => !r.fork && r.description)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, SHOW)
        )
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects">
      <div className="s-inner">
        <SectionHead icon={<Butterfly size={44} />} eyebrow={t['proj.eyebrow']} title={t['proj.title']} />
        <div className="projects-grid">
          {loading
            ? Array.from({ length: SHOW }).map((_, i) => <div key={i} className="p-card p-card--skeleton" aria-hidden="true" />)
            : repos.map((repo, i) => (
                <a key={repo.id} className="p-card" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="p-top">
                    <span className="p-name">{repo.name}</span>
                    <span className="p-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="p-desc">{repo.description}</div>
                  <div className="p-meta">
                    {repo.language && <span className="p-lang">{repo.language}</span>}
                    {repo.stargazers_count > 0 && <span className="p-stars">★ {repo.stargazers_count}</span>}
                  </div>
                </a>
              ))}
          <a className="p-card p-card--more" href="https://github.com/m4rri4nne" target="_blank" rel="noopener noreferrer">
            <div className="p-name">{t['proj.more']}</div>
            <div className="p-desc">{t['proj.moreDesc']}</div>
            <div className="p-meta"><span className="p-lang">GitHub →</span></div>
          </a>
        </div>
      </div>
    </section>
  )
}

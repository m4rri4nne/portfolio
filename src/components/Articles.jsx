import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const PAGE_SIZE = 6

function formatDate(iso) {
  const d = new Date(iso)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y} · ${m} · ${day}`
}

export default function Articles() {
  const { t } = useContext(AppContext)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=m4rri4nne&per_page=30')
      .then(r => r.json())
      .then(data => setArticles(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const totalPages = Math.ceil(articles.length / PAGE_SIZE)
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  function goTo(next) {
    setPage(next)
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="articles">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['art.eyebrow']}</p>
          <h2 className="s-title">{t['art.title']}</h2>
        </div>
        <div className="articles-grid">
          {loading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <div key={i} className="a-card a-card--skeleton" aria-hidden="true">
                  <span className="a-badge badge-devto" style={{ opacity: 0 }}>◆ Dev.to</span>
                  <div className="a-title sk-line" />
                  <div className="a-desc sk-line" style={{ height: '3.5rem' }} />
                  <div className="a-date sk-line" style={{ width: '6rem' }} />
                </div>
              ))
            : visible.map(article => (
                <a key={article.id} className="a-card" href={article.url} target="_blank" rel="noopener noreferrer">
                  <span className="a-badge badge-devto">◆ Dev.to</span>
                  <div className="a-title">{article.title}</div>
                  <div className="a-desc">{article.description}</div>
                  <div className="a-date">{formatDate(article.published_at)}</div>
                </a>
              ))
          }
        </div>
        {!loading && totalPages > 1 && (
          <div className="art-pagination">
            <button className="art-page-btn" onClick={() => goTo(page - 1)} disabled={page === 0}>
              ← Anterior
            </button>
            <span className="art-page-info">{page + 1} / {totalPages}</span>
            <button className="art-page-btn" onClick={() => goTo(page + 1)} disabled={page === totalPages - 1}>
              Próxima →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

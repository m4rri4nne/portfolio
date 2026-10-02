import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import { Rabbit, SectionHead } from './Ornaments'

const PAGE_SIZE = 6

function formatDate(iso) {
  const d = new Date(iso)
  return `${d.getFullYear()} · ${String(d.getMonth() + 1).padStart(2, '0')} · ${String(d.getDate()).padStart(2, '0')}`
}

export default function Articles() {
  const { t } = useContext(AppContext)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=m4rri4nne&per_page=30')
      .then(r => r.json())
      .then(data => setArticles(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const totalPages = Math.ceil(articles.length / PAGE_SIZE)
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  function goTo(next) {
    setPage(next)
    const el = document.getElementById('articles')
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <section id="articles">
      <div className="s-inner">
        <SectionHead icon={<Rabbit kind="lan" size={56} />} eyebrow={t['art.eyebrow']} title={t['art.title']} />
        <div className="articles-grid">
          {loading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => <div key={i} className="a-card a-card--skeleton" aria-hidden="true" />)
            : visible.map((article, i) => (
                <a key={article.id} className="a-card" href={article.url} target="_blank" rel="noopener noreferrer">
                  <div className="a-top">
                    <span className="a-badge">Dev.to</span>
                    <span className="a-num">{String(page * PAGE_SIZE + i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="a-title">{article.title}</div>
                  <div className="a-desc">{article.description}</div>
                  <div className="a-date">{formatDate(article.published_at)}</div>
                </a>
              ))}
        </div>
        {!loading && totalPages > 1 && (
          <div className="art-pagination">
            <button className="art-page-btn" onClick={() => goTo(page - 1)} disabled={page === 0}>{t['pg.prev']}</button>
            <span className="art-page-info">{page + 1} / {totalPages}</span>
            <button className="art-page-btn" onClick={() => goTo(page + 1)} disabled={page === totalPages - 1}>{t['pg.next']}</button>
          </div>
        )}
      </div>
    </section>
  )
}

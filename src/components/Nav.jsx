import { useContext } from 'react'
import { AppContext } from '../App'

export default function Nav() {
  const { theme, toggleTheme, lang, setLang, t } = useContext(AppContext)

  return (
    <nav>
      <a href="#" className="nav-logo">
        <span className="nav-logo-ornament">⬡</span>
        AM
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#about">{t['nav.about']}</a></li>
          <li><a href="#articles">{t['nav.articles']}</a></li>
          <li><a href="#projects">{t['nav.projects']}</a></li>
          <li><a href="#contact">{t['nav.contact']}</a></li>
        </ul>
        <div className="nav-controls">
          {['pt', 'en', 'fr'].map(l => (
            <button
              key={l}
              className={`lang-btn${lang === l ? ' active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☽' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  )
}

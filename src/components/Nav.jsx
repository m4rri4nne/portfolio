import { useContext } from 'react'
import { AppContext } from '../App'

export default function Nav() {
  const { theme, toggleTheme, lang, setLang, t } = useContext(AppContext)
  const label = theme === 'dark' ? 'Tema claro' : 'Tema escuro'

  return (
    <nav>
      <a href="#top" className="nav-logo">
        <span className="nav-mark">AM</span>
        <span className="nav-name">ALICIA MARIANNE</span>
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
            <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
          <button className="theme-btn" onClick={toggleTheme} aria-label={label} title={label}>
            {theme === 'dark' ? '☽' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  )
}

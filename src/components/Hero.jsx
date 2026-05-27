import { useContext } from 'react'
import { AppContext } from '../App'

export default function Hero() {
  const { t } = useContext(AppContext)

  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="avatar-wrap">
          <div className="arch-top-ornament">✦ ✦ ✦</div>
          <div className="arch-frame">
            <svg className="arch-border-svg" viewBox="0 0 175 218" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 218 L4 80 Q4 4 87.5 4 Q171 4 171 80 L171 218 Z"
                stroke="var(--border-accent)" strokeWidth="1" fill="none"
              />
              <path
                d="M12 218 L12 82 Q12 16 87.5 12 Q163 16 163 82 L163 218 Z"
                stroke="var(--accent-gold-dim)" strokeWidth="0.5" fill="none" strokeDasharray="3 6"
              />
              <polygon points="87.5,2 90.5,8 87.5,6 84.5,8" fill="var(--accent-gold)" opacity="0.7" />
              <rect x="1" y="210" width="6" height="6" fill="none" stroke="var(--accent-gold-dim)" strokeWidth="0.8" />
              <rect x="168" y="210" width="6" height="6" fill="none" stroke="var(--accent-gold-dim)" strokeWidth="0.8" />
            </svg>
            <div
              className="arch-img-clip"
              style={{ clipPath: 'circle(90% 90%, 90% 90%)' }}
            >
              <img src="https://avatars.githubusercontent.com/u/57607749?v=4" alt="Alicia Marianne" />
            </div>
            <div className="corner corner-tl" />
            <div className="corner corner-br" />
          </div>
          <div className="arch-bottom-label">QA Engineer - SDET</div>
        </div>

        <div className="hero-text">
          <p className="hero-eyebrow">{t['hero.eyebrow']}</p>
          <h1 className="hero-name">Alicia Marianne Gonçalves</h1>
          <p className="hero-role">{t['hero.role']}</p>
          <p className="hero-bio">{t['hero.bio']}</p>
          <div className="hero-stats">
            <div>
              <div className="stat-num">15</div>
              <div className="stat-label">{t['stats.repos']}</div>
            </div>
            <div>
              <div className="stat-num">78</div>
              <div className="stat-label">{t['stats.followers']}</div>
            </div>
            <div>
              <div className="stat-num">6+</div>
              <div className="stat-label">{t['stats.articles']}</div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">{t['hero.cta1']}</a>
            <a href="#contact" className="btn btn-ghost">{t['hero.cta2']}</a>
            <a href="#articles" className="btn btn-ghost">{t['hero.cta3']}</a>
            <a href={`${import.meta.env.BASE_URL}alicia_depaula.pdf`} download className="btn btn-gold">{t['hero.cta4']}</a>
          </div>
        </div>

      </div>
    </section>
  )
}

import { useContext } from 'react'
import { AppContext } from '../App'
import { Butterfly, Rabbit, Hill } from './Ornaments'

export default function Hero() {
  const { t } = useContext(AppContext)

  return (
    <section className="hero" id="top">
      <div className="hero-inner">

        <div className="avatar-wrap">
          <div className="moon-gate">
            <div className="moon-gate-ring" />
            <div className="moon-gate-img">
              <img src="https://avatars.githubusercontent.com/u/57607749?v=4" alt="Alicia Marianne" />
            </div>
            <Butterfly size={34} className="bf bf-1" />
            <Butterfly size={22} className="bf bf-2" />
            <Butterfly size={18} className="bf bf-3" />
            <div className="rabbits">
              <Hill width={170} />
              <Rabbit kind="lan" size={70} />
              <Rabbit kind="wei" size={62} flip />
            </div>
            <div className="tassel" aria-hidden="true">
              <span className="tassel-cord" />
              <span className="tassel-knot" />
              <span className="tassel-cap" />
              <span className="tassel-fringe" />
            </div>
          </div>
          <div className="avatar-label">QA ENGINEER · SDET</div>
        </div>

        <div className="hero-text">
          <p className="hero-eyebrow">{t['hero.eyebrow']}</p>
          <h1 className="hero-name">Alicia Marianne Gonçalves</h1>
          <p className="hero-role">{t['hero.role']}</p>
          <p className="hero-bio">{t['hero.bio']}</p>
          <div className="hero-stats">
            <div><div className="stat-num">15</div><div className="stat-label">{t['stats.repos']}</div></div>
            <span className="stat-sep" />
            <div><div className="stat-num">78</div><div className="stat-label">{t['stats.followers']}</div></div>
            <span className="stat-sep" />
            <div><div className="stat-num">6+</div><div className="stat-label">{t['stats.articles']}</div></div>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">{t['hero.cta1']}</a>
            <a href="#contact" className="btn btn-ghost">{t['hero.cta2']}</a>
            <a href="#articles" className="btn btn-ghost">{t['hero.cta3']}</a>
            <a href={`${import.meta.env.BASE_URL}alicia_depaula.pdf`} download className="btn btn-silver">{t['hero.cta4']}</a>
          </div>
        </div>

      </div>
    </section>
  )
}

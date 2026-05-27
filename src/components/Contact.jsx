import { useContext } from 'react'
import { AppContext } from '../App'

const LINKS = [
  { href: 'https://github.com/m4rri4nne',           label: 'GitHub',              value: 'github.com/m4rri4nne' },
  { href: 'https://dev.to/m4rri4nne',               label: 'Dev.to',              value: 'dev.to/m4rri4nne' },
  { href: 'https://community.aws/u/m4rri4nne',      label: 'AWS Builder Center',  value: 'community.aws/u/m4rri4nne' },
  { href: 'https://linkedin.com/in/alicia-marianne', label: 'LinkedIn',            value: 'linkedin.com/in/alicia-marianne' },
]

export default function Contact() {
  const { t } = useContext(AppContext)

  return (
    <section id="contact">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['con.eyebrow']}</p>
          <h2 className="s-title">{t['con.title']}</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-text">
            <p>{t['con.p1']}</p>
            <p>{t['con.p2']}</p>
          </div>
          <div className="c-links">
            {LINKS.map(link => (
              <a key={link.href} className="c-link" href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="c-icon">◆</span>
                <div className="c-info">
                  <span className="c-lbl">{link.label}</span>
                  <span className="c-val">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

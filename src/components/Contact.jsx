import { useContext } from 'react'
import { AppContext } from '../App'

const CONTACTS = [
  {
    href: 'www.linkedin.com/in/alicia-gonçalves-paula',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.046c.432-.816 1.489-1.677 3.065-1.677 3.278 0 3.883 2.157 3.883 4.962v6.606zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.603 13.019H3.734V9h3.206v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/m4rri4nne',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    href: 'https://x.com/m4rri4nne',
    label: 'X / Twitter',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: 'https://dev.to/m4rri4nne',
    label: 'Dev.to',
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor" width="26" height="26">
        <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.36 47.28l.02 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/>
      </svg>
    ),
  },
  {
    href: 'mailto:aliciadepaula@gmail.com',
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    href: 'https://builder.aws.com/community/@m4rri4nne',
    label: 'AWS Builder',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M18.75 11.35a4.32 4.32 0 0 0 .25-1.45A4.4 4.4 0 0 0 14.6 5.5a4.24 4.24 0 0 0-1.4.23 5.25 5.25 0 0 0-9.7 2.02A3.75 3.75 0 0 0 5 15.25h13.25a3.5 3.5 0 0 0 .5-6.9z"/>
      </svg>
    ),
  },
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
        <div className="contact-body">
          <p>{t['con.p1']}</p>
          <p>{t['con.p2']}</p>
          <div className="c-icons">
            {CONTACTS.map(c => (
              <a key={c.href} className="c-icon-link" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.label}>
                {c.icon}
                <span className="c-icon-label">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

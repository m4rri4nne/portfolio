// Borboletas (Hua Cheng & Xie Lian) e coelhos (Lan Wangji & Wei Wuxian)
const WEI_RED = '#cf2c3e'

export function Butterfly({ size = 34, className = '', style }) {
  return (
    <svg viewBox="0 0 40 32" width={size} height={Math.round(size * 0.8)} fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M20 14C14 2 2 2 4 10c1 5 8 6 16 5z" />
      <path d="M20 16c-7 1-13 6-10 11 3 3 8-3 10-10z" opacity=".7" />
      <path d="M20 14c6-12 18-12 16-4-1 5-8 6-16 5z" />
      <path d="M20 16c7 1 13 6 10 11-3 3-8-3 10-10z" opacity=".7" />
      <rect x="19.2" y="10" width="1.6" height="12" rx=".8" />
      <path d="M20 11q-2-5-4.5-6.5M20 11q2-5 4.5-6.5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// kind: 'lan' (faixa na testa) | 'wei' (fita vermelha)
export function Rabbit({ kind = 'lan', size = 56, flip = false }) {
  const fill = kind === 'lan' ? 'var(--r2)' : 'var(--r1)'
  return (
    <svg viewBox="0 0 48 40" width={size} height={Math.round(size * 40 / 48)} style={{ display: 'block', overflow: 'visible', transform: flip ? 'scaleX(-1)' : undefined }} aria-hidden="true">
      {kind === 'lan' && (
        <>
          <path d="M30 17.2 C24 14.5 16 12.5 3 15" fill="none" stroke="var(--accent)" strokeWidth="1.1" />
          <path d="M30 18.4 C24 18 15 19.5 5 22.5" fill="none" stroke="var(--accent)" strokeWidth="1.1" />
        </>
      )}
      <g fill={fill} stroke="var(--accent)" strokeWidth="1.2">
        <ellipse cx="33.5" cy="9" rx="2.4" ry="7" transform="rotate(-14 33.5 9)" />
        <ellipse cx="38.5" cy="9.5" rx="2.2" ry="6.5" transform="rotate(10 38.5 9.5)" />
        <circle cx="14.5" cy="26.5" r="2.8" />
        <circle cx="12.2" cy="30.2" r="2.4" />
        <circle cx="15.6" cy="31.2" r="2.4" />
        <ellipse cx="26" cy="29" rx="12" ry="8.5" />
        <circle cx="36" cy="20" r="6.5" />
      </g>
      <path d="M13.8 29.6 a1.2 1.2 0 1 1 1.6 1.2" fill="none" stroke="var(--accent)" strokeWidth=".8" />
      <circle cx="38.5" cy="19.5" r="1" fill="var(--accent)" />
      {kind === 'lan' ? (
        <>
          <path d="M29.7 17.6 Q36 14.6 42.3 17.6" fill="none" stroke="var(--accent)" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M29.7 17.6 Q36 14.6 42.3 17.6" fill="none" stroke={fill} strokeWidth="1.1" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M34.5 13.8 C30 12.5 26 9.5 20 10.5" fill="none" stroke={WEI_RED} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34.5 14.4 C30 15 26.5 16.5 21 19" fill="none" stroke={WEI_RED} strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="33" cy="12.6" rx="2.2" ry="1.1" transform="rotate(-25 33 12.6)" fill="none" stroke={WEI_RED} strokeWidth="1.2" />
          <circle cx="34.8" cy="14" r="1.3" fill={WEI_RED} />
        </>
      )}
    </svg>
  )
}

export function Hill({ width = 170 }) {
  return (
    <svg className="hill" viewBox="0 0 140 10" width={width} height={Math.round(width / 14)} preserveAspectRatio="none" fill="none" stroke="var(--accent)" strokeWidth="1.1" aria-hidden="true">
      <path d="M0 8 Q22 1 48 5.5 T98 5 T140 8.5" />
      <path d="M14 9.6 Q42 4.5 72 7.6 T134 9.2" opacity=".55" />
    </svg>
  )
}

export function SectionHead({ icon, eyebrow, title }) {
  return (
    <div className="s-head">
      <span className="s-icon">{icon}</span>
      <span className="s-rule" />
      <div>
        <p className="s-eyebrow">{eyebrow}</p>
        <h2 className="s-title">{title}</h2>
      </div>
    </div>
  )
}

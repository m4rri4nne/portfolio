import { useContext } from 'react'
import { AppContext } from '../App'

export default function Footer() {
  const { t } = useContext(AppContext)

  return (
    <footer>
      <div className="footer-rune">⬡ ✦ ◆ ✦ ⬡</div>
      <p className="footer-copy">{t['footer']}</p>
    </footer>
  )
}

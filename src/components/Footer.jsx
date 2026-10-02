import { useContext } from 'react'
import { AppContext } from '../App'
import { Butterfly, Rabbit, Hill } from './Ornaments'

export default function Footer() {
  const { t } = useContext(AppContext)

  return (
    <footer>
      <div className="footer-scene">
        <Hill width={150} />
        <Rabbit kind="lan" size={38} />
        <Butterfly size={22} className="footer-bf" />
        <Rabbit kind="wei" size={38} flip />
      </div>
      <p className="footer-copy">{t['footer']}</p>
    </footer>
  )
}

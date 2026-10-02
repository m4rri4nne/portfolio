import { Butterfly } from './Ornaments'

export default function Divider() {
  return (
    <div className="divider">
      <span className="divider-line" />
      <Butterfly size={26} />
      <span className="divider-line divider-line--rev" />
    </div>
  )
}

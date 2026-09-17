import { NUMEROS } from '@/data/instituto'

export function StatBand() {
  return (
    <div className="stat-band">
      {NUMEROS.map(n => (
        <div className="stat-band__item" key={n.num}>
          <div className="stat-band__num">{n.num}</div>
          <span className="stat-band__label">{n.label}</span>
        </div>
      ))}
    </div>
  )
}

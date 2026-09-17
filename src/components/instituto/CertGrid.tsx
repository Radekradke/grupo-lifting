import { CERTIFICACOES } from '@/data/instituto'

export function CertGrid() {
  return (
    <div className="cert-grid">
      {CERTIFICACOES.map(c => (
        <div className="cert-card" key={c.titulo}>
          <div className="cert-card__k">{c.k}</div>
          <h3>{c.titulo}</h3>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}

import Image from 'next/image'
import { CERTIFICACOES } from '@/data/instituto'

export function CertGrid() {
  return (
    <div className="cert-grid">
      {CERTIFICACOES.map(c => (
        <div className="cert-card" key={c.titulo}>
          {c.logo && (
            <Image className="cert-card__logo" src={c.logo.src} alt={c.logo.alt} width={240} height={80} />
          )}
          <div className="cert-card__k">{c.k}</div>
          <h3>{c.titulo}</h3>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}

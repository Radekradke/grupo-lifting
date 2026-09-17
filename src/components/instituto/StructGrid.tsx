import Image from 'next/image'
import { ESTRUTURA } from '@/data/instituto'

export function StructGrid() {
  return (
    <div className="struct-grid">
      {ESTRUTURA.map(card => (
        <div
          className={`struct-card${card.variante ? ` struct-card--${card.variante}` : ''}`}
          key={card.titulo}
        >
          {card.img && (
            <Image
              src={card.img.src}
              alt={card.img.alt}
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          )}

          <div className="struct-card__body">
            <span className="struct-card__tag">{card.tag}</span>
            <h3>{card.titulo}</h3>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

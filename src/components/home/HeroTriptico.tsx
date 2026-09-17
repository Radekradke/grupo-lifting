import Link from 'next/link'
import { PANEIS } from '@/data/home'

export function HeroTriptico() {
  return (
    <section id="topo" className="hero">
      <div className="hero__headline">
        <p className="eyebrow">GRUPO LIFTING</p>
        <h1 className="hero__title">
          Um grupo.
          <br />
          Três forças.
        </h1>
      </div>

      <div className="hero__panels">
        {PANEIS.map(p => (
          <Link
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener"
            className={`panel panel--${p.id}`}
          >
            <span className="panel__glow" aria-hidden="true" />
            <span className="panel__num" aria-hidden="true">
              {p.num}
            </span>

            <div className="panel__body">
              <span className="panel__rule" />
              <p className="panel__kicker">{p.kicker}</p>
              <h2 className="panel__name">{p.nome}</h2>
              <p className="panel__desc reveal">{p.desc}</p>
              <span className="panel__cta reveal">EXPLORAR O SITE ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

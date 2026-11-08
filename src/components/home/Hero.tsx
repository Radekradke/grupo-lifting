import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/site/Icon'
import { PANEIS } from '@/data/home'

/** Assinatura do site: as três empresas como três painéis de foto que se abrem. */
export function Hero() {
  return (
    <section id="topo" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__intro">
        <p className="hero__coord">Grupo Lifting · Baía de Guanabara · 22°49′S 43°03′W</p>
        <div className="hero__head">
          <h1 id="hero-titulo" className="display hero__title">
            <span className="hero__linha">Um grupo.</span>
            <span className="hero__linha">Três forças.</span>
            <span className="tri" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </h1>
        </div>
        <div className="hero__aside">
          <p className="hero__lead">
            Serviços elétricos, formação técnica e base logística para quem opera no mar e na
            indústria — três empresas e uma base própria na Baía de Guanabara.
          </p>
          <a className="btn btn--light" href="#grupo">
            Conhecer o grupo <Icon name="arrow-right" className="ico-arrow" />
          </a>
        </div>
      </div>

      <div className="hero__panels">
        {PANEIS.map((p, i) => (
          <Link key={p.id} href={p.href} className={`hpanel hpanel--${p.id}`}>
            <Image
              className="hpanel__img"
              src={p.img.src}
              alt={p.img.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 959px) 100vw, 40vw"
              style={{ objectFit: 'cover', objectPosition: p.img.pos }}
            />
            <span className="hpanel__shade" aria-hidden="true" />
            <div className="hpanel__body">
              <span className="hpanel__kicker">{p.kicker}</span>
              <h2 className="hpanel__name">{p.nome}</h2>
              <div className="hpanel__more">
                <div>
                  <p className="hpanel__desc">{p.desc}</p>
                  <span className="hpanel__cta">
                    Conhecer <Icon name="arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

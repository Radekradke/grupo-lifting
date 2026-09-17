import Link from 'next/link'
import { Framed } from '@/components/shared/Framed'
import { SERVICOS_ELETRICA } from '@/data/home'

export function TerritorioEletrica() {
  return (
    <section id="eletrica" className="territory territory--eletrica">
      <span className="territory__edge" aria-hidden="true" />

      <div className="territory__inner">
        <div className="territory__text">
          <span className="ghost-num" aria-hidden="true">01</span>

          <p className="eyebrow accent-eletrica">LIFTING ELÉTRICA</p>
          <h2 className="territory__title">
            A energia por trás de quem opera no mar e na indústria.
          </h2>
          <p className="lead">
            Assistência técnica elétrica e comercial na área naval e industrial:
            reparo, manutenção, instalação, inspeção e automação — com equipe
            própria, especializada e certificada.
          </p>

          <div className="service-grid" style={{ marginTop: 32 }}>
            {SERVICOS_ELETRICA.map(s => (
              <div className="service" key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/eletrica"
            target="_blank"
            rel="noopener"
            className="text-link accent-eletrica"
          >
            CONHECER A ELÉTRICA ↗
          </Link>
        </div>

        <Framed variante="eletrica" legenda="Foto: equipe técnica / painel elétrico / indústria" />
      </div>
    </section>
  )
}

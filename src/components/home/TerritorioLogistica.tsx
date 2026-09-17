import { Framed } from '@/components/shared/Framed'
import { Ticker } from '@/components/shared/Ticker'
import { FEATURES_LOGISTICA } from '@/data/home'

export function TerritorioLogistica() {
  return (
    <section id="logistica" className="territory territory--logistica">
      <div className="territory__inner">
        <Framed
          variante="logistica"
          legenda="Foto: operação logística / movimentação / frota"
          className="framed--left"
        />

        <div className="territory__text">
          <span className="ghost-num ghost-num--big" aria-hidden="true">03</span>

          <p className="eyebrow accent-logistica">LIFTING LOG</p>
          <h2 className="territory__title">
            10.000 m² com saída pela terra e pelo mar.
          </h2>
          <p className="lead">
            Soluções integradas de armazenagem, logística e infraestrutura
            corporativa em 10.000 m² — espaços empresariais para locação e suporte
            a operações Repetro nos setores de óleo, gás e energia.
          </p>

          <ul className="feature-list" style={{ marginTop: 32 }}>
            {FEATURES_LOGISTICA.map(f => (
              <li key={f}>
                <span>{f}</span>
                <span aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Ticker />
    </section>
  )
}

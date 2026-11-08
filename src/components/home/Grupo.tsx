import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/site/Icon'
import { FATOS, VERBOS } from '@/data/home'

export function Fatos() {
  return (
    <section className="fatos" aria-label="O grupo em números">
      <div className="container">
        <dl>
          {FATOS.map((f, i) => (
            <div className="fato" key={f.valor} data-reveal style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <dt>{f.label}</dt>
              <dd>
                {f.valor}
                <small>{f.unidade}</small>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Grupo() {
  return (
    <section id="grupo" className="section" aria-labelledby="grupo-titulo">
      <div className="container grupo">
        <div className="grupo__texto" data-reveal>
          <p className="label">O grupo</p>
          <h2 id="grupo-titulo" className="t-h2">
            Energia, conhecimento e movimento.
          </h2>
          <p className="t-lead">
            Um mesmo compromisso com quem opera de verdade. Certificada ISO 9001, ISO 14001 e ISO 45001, a Lifting cresceu em três direções
            complementares. Cada empresa tem identidade própria, mas todas carregam o mesmo padrão
            técnico, do atendimento inicial à conclusão do serviço.
          </p>
          <ul className="verbos">
            {VERBOS.map(v => (
              <li key={v.verbo}>
                <Link href={v.href} style={{ '--d': v.cor } as React.CSSProperties}>
                  <span className="verbos__dot" aria-hidden="true" />
                  <span className="verbos__verbo">
                    {v.verbo}
                    <small>{v.sub}</small>
                  </span>
                  <Icon name="arrow-right" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <figure className="grupo__media" data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          <Image
            src="/assets/grupo/sede.jpg"
            alt="Prédio principal da base do Grupo Lifting, com a bandeira do Brasil"
            fill
            sizes="(max-width: 959px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: '30% 50%' }}
          />
          <figcaption>Base do grupo · Baía de Guanabara</figcaption>
        </figure>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Icon, type IconName } from '@/components/site/Icon'
import { LogoMarquee, type Logo } from '@/components/site/Logos'
import { SERVICOS_ELETRICA, DESTAQUES_INSTITUTO, NUMEROS_LOGISTICA, FEATURES_LOGISTICA } from '@/data/home'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

export function BlocoEletrica() {
  return (
    <section id="eletrica" className="section section--white theme-eletrica" aria-labelledby="eletrica-titulo">
      <div className="container empresa">
        <figure className="empresa__media empresa__media--alta" data-reveal>
          <Image
            src="/assets/eletrica/reparo-motor.jpg"
            alt="Técnicos da Lifting em manutenção de motor elétrico"
            fill
            sizes="(max-width: 959px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: '40% 50%' }}
          />
        </figure>

        <div className="empresa__texto" data-reveal style={d(100)}>
          <p className="label">Lifting Elétrica</p>
          <h2 id="eletrica-titulo" className="t-h2">A energia por trás de quem opera no mar e na indústria.</h2>
          <p className="t-lead">
            Assistência técnica elétrica e comercial na área naval e industrial — reparo, manutenção,
            instalação, inspeção e automação, com equipe própria, especializada e certificada.
          </p>
          <ul className="mini">
            {SERVICOS_ELETRICA.map(s => (
              <li key={s.titulo}>
                <Icon name={s.icone as IconName} />
                <strong>{s.titulo}</strong>
                <span>{s.desc}</span>
              </li>
            ))}
          </ul>
          <div className="empresa__acoes">
            <Link className="btn" href="/eletrica">
              Conhecer a Elétrica <Icon name="arrow-right" className="ico-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlocoInstituto() {
  return (
    <section id="instituto" className="section section--accent-dark theme-instituto" aria-labelledby="instituto-titulo">
      <div className="container empresa empresa--inv">
        <figure className="empresa__media empresa__media--alta" data-reveal>
          <Image
            src="/assets/inst/hero-instrutor-painel.jpg"
            alt="Instrutor acompanhando aluno em montagem de painel elétrico no laboratório do Instituto"
            fill
            sizes="(max-width: 959px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: '55% 50%' }}
          />
        </figure>

        <div className="empresa__texto on-dark" data-reveal style={d(100)}>
          <p className="label">Instituto de Ensino Lifting</p>
          <h2 id="instituto-titulo" className="t-h2">Formação técnica que nasceu dentro da operação.</h2>
          <p className="t-lead">
            Laboratórios com mais de 100 equipamentos “Ex”, centro de treinamento com 9 m de pé-direito
            e instrutores com experiência de campo — para os setores industrial, onshore e offshore.
          </p>
          <ul className="lista-tec">
            {DESTAQUES_INSTITUTO.map(c => (
              <li key={c.nome}>
                <span>{c.nome}</span>
                <code>{c.codigo}</code>
              </li>
            ))}
          </ul>
          <div className="empresa__acoes">
            <Link className="btn btn--light" href="/instituto#cursos">
              Ver todos os cursos <Icon name="arrow-right" className="ico-arrow" />
            </Link>
            <div className="selos" aria-label="Certificações">
              <span className="selo">
                <Image src="/assets/logos/cert-irata.png" alt="IRATA International" width={80} height={49} />
              </span>
              <span className="selo">
                <Image src="/assets/logos/cert-abendi.png" alt="ABENDI" width={190} height={40} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlocoLogistica() {
  return (
    <section id="logistica" className="section section--tint theme-logistica" aria-labelledby="logistica-titulo">
      <div className="container" style={{ display: 'grid', gap: 'clamp(36px, 5vw, 64px)' }}>
        <figure className="banda" data-reveal>
          <Image
            src="/assets/log/patio-escavadeira.jpg"
            alt="Galpões operacionais e mini escavadeira na base da Lifting Logistic"
            fill
            sizes="(max-width: 1280px) 100vw, 1240px"
            style={{ objectFit: 'cover', objectPosition: '50% 62%' }}
          />
          <span className="banda__shade" aria-hidden="true" />
          <dl>
            {NUMEROS_LOGISTICA.map(n => (
              <div key={n.label}>
                <dt>{n.label}</dt>
                <dd>{n.valor}</dd>
              </div>
            ))}
          </dl>
        </figure>

        <div className="split" style={{ alignItems: 'start' }}>
          <div className="split__texto" data-reveal>
            <p className="label">Lifting Logistic</p>
            <h2 id="logistica-titulo" className="t-h2">10.000 m² com saída pela terra e pelo mar.</h2>
          </div>
          <div className="split__texto" data-reveal style={d(100)}>
            <p className="t-lead">
              Armazenagem, logística e infraestrutura corporativa num ambiente seguro e planejado —
              espaços para locação e suporte a operações Repetro nos setores de óleo, gás e energia.
            </p>
            <ul className="checks">
              {FEATURES_LOGISTICA.map(f => (
                <li key={f}>
                  <Icon name="check" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="empresa__acoes">
              <Link className="btn" href="/logistica">
                Conhecer a base <Icon name="arrow-right" className="ico-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Clientes({ logos }: { logos: readonly Logo[] }) {
  if (logos.length === 0) return null
  return (
    <section className="section section--white" aria-labelledby="clientes-titulo" style={{ paddingBlock: 'clamp(56px, 7vw, 88px)' }}>
      <div className="container section-head section-head--center" style={{ marginBottom: 28 }} data-reveal>
        <p className="label label--plain">Quem trabalha com o grupo</p>
        <h2 id="clientes-titulo" className="t-h3" style={{ color: 'var(--ink-2)', fontWeight: 500 }}>
          Empresas de óleo, gás, energia e indústria que confiam na Lifting
        </h2>
      </div>
      <LogoMarquee logos={logos} />
    </section>
  )
}

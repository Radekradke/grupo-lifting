import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { PageHero } from '@/components/site/PageHero'
import { Contato } from '@/components/site/Contato'
import { LogoWall } from '@/components/site/Logos'
import { Video } from '@/components/site/Video'
import { Reveal } from '@/components/site/Reveal'
import { Wpp } from '@/components/site/Wpp'
import { Icon, WhatsappIcon, type IconName } from '@/components/site/Icon'
import { NUMEROS, ESTRUTURA, ESPACOS, NAV_LOGISTICA } from '@/data/logistica'
import { getSite, getVideos, getGaleria, getParceiros } from '@/sanity/content'
import { wa, mail } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Lifting Logistic — armazenagem, logística e infraestrutura na Baía de Guanabara',
  description:
    'Soluções integradas de armazenagem, logística e infraestrutura corporativa: 10.000 m² com saída pela terra e pelo mar, na Baía de Guanabara. Suporte a operações Repetro.',
}

const ICONES: IconName[] = ['warehouse', 'truck', 'building', 'briefcase', 'drop', 'coffee']
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

export default async function LogisticaPage() {
  const [site, videos, galeria, clientes] = await Promise.all([getSite(), getVideos(), getGaleria(), getParceiros('cliente')])
  const g = site.grupo
  const lg = site.logistica
  const msg = 'Olá! Vim pelo site da Lifting Logistic e gostaria de consultar espaços e serviços.'

  return (
    <div className="page theme-logistica">
      <Header
        marca={{ tipo: 'texto', nome: 'Lifting Logistic', sub: 'Armazenagem · Logística' }}
        nav={NAV_LOGISTICA}
        cta={{ label: 'Consultar espaços', href: wa(g.whatsapp, msg) }}
        voltarGrupo
        contato={[g.telefone, g.email]}
      />

      <main id="conteudo">
        <PageHero
          empresa="Lifting Logistic"
          rotulo="Armazenagem · Logística · Infraestrutura"
          titulo="10.000 m² com saída pela terra e pelo mar."
          lead="Soluções integradas de armazenagem, logística e infraestrutura corporativa: um ambiente moderno, seguro e estrategicamente planejado na Baía de Guanabara."
          imagem={{ src: '/assets/log/patio-empilhadeira.jpg', alt: 'Empilhadeira de grande porte no pátio operacional da base', posicao: '72% 55%' }}
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Consultar espaços
              </a>
              <a className="btn btn--ghost-light" href="#galeria">
                Ver a base <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          fatos={NUMEROS.map(n => ({ valor: n.titulo, label: n.desc }))}
        />

        <section id="sobre" className="section" aria-labelledby="sobre-titulo">
          <div className="container split split--inv">
            <div className="split__texto" data-reveal>
              <p className="label">Quem somos</p>
              <h2 id="sobre-titulo" className="t-h2">Infraestrutura de alto padrão para o seu negócio operar.</h2>
              <p className="t-body">
                A Lifting Logistic é especializada em soluções integradas de armazenagem, logística e
                infraestrutura corporativa — um ambiente moderno, seguro e planejado para atender empresas de
                diversos segmentos.
              </p>
              <p className="t-body">
                Em 10.000 m², disponibilizamos espaços empresariais para locação — salas comerciais, salas de
                reunião, áreas operacionais e galpões —, com flexibilidade e praticidade para quem busca
                estrutura de alto padrão em localização privilegiada.
              </p>
            </div>
            <figure className="split__media split__media--retrato" data-reveal style={d(100)}>
              <Image
                src="/assets/log/recepcao.jpg"
                alt="Recepção da Lifting Logistics, com o painel de clientes ao fundo"
                fill
                sizes="(max-width: 959px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
              />
            </figure>
          </div>
        </section>

        <section id="estrutura" className="section section--white" aria-labelledby="estrutura-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">Estrutura e serviços</p>
              <h2 id="estrutura-titulo" className="t-h2">Da armazenagem à movimentação de carga.</h2>
              <p className="t-lead">Tudo o que uma operação precisa num só endereço, com acesso pela terra e pelo píer.</p>
            </div>
            <ul className="features features--3">
              {ESTRUTURA.map((s, i) => (
                <li className="feature" key={s.titulo} data-reveal style={d(Math.min(i, 5) * 60)}>
                  <span className="feature__ico">
                    <Icon name={ICONES[i] ?? 'warehouse'} />
                  </span>
                  <h3 className="t-h3">{s.titulo}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {galeria.length > 0 && (
          <section id="galeria" className="section" aria-labelledby="galeria-titulo">
            <div className="container">
              <div className="section-head" data-reveal>
                <p className="label">A base</p>
                <h2 id="galeria-titulo" className="t-h2">Veja onde a sua operação vai acontecer.</h2>
              </div>
              <ul className="galeria">
                {galeria.map((f, i) => (
                  <li key={f.src} data-reveal style={d(Math.min(i, 6) * 50)}>
                    <figure style={{ position: 'absolute', inset: 0 }}>
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes={i === 0 ? '(max-width: 639px) 100vw, 50vw' : '(max-width: 639px) 50vw, 25vw'}
                        style={{ objectFit: 'cover' }}
                      />
                      <figcaption>{f.legenda}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section id="repetro" className="section section--accent-dark" aria-labelledby="repetro-titulo">
          <div className="container split" style={{ alignItems: 'end' }}>
            <div className="split__texto on-dark" data-reveal>
              <p className="label">Repetro</p>
              <h2 id="repetro-titulo" className="t-h2">Suporte a operações de óleo, gás e energia.</h2>
            </div>
            <div className="split__texto on-dark" data-reveal style={d(100)}>
              <p className="t-lead">
                Atendemos operações vinculadas ao Repetro com suporte logístico e estrutural — do armazenamento
                de materiais e equipamentos ao apoio administrativo —, com segurança, organização e excelência
                operacional em todas as etapas.
              </p>
              <div className="btn-row">
                <a className="btn btn--light" href={wa(g.whatsapp, 'Olá! Gostaria de consultar condições para uma operação Repetro na Lifting Logistic.')} target="_blank" rel="noopener">
                  Consultar condições <Icon name="arrow-right" className="ico-arrow" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="espacos" className="section" aria-labelledby="espacos-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">Áreas para alugar</p>
              <h2 id="espacos-titulo" className="t-h2">Espaços para seus equipamentos e equipes.</h2>
              <p className="t-lead">Locação permanente ou temporária, com estrutura de convivência compartilhada na base.</p>
            </div>
            <ul className="espacos">
              {ESPACOS.map((e, i) => (
                <li className="espaco" key={e.titulo} data-reveal style={d(Math.min(i, 5) * 60)}>
                  <span className={`espaco__tag${e.num === 'COMUM' ? ' espaco__tag--comum' : ''}`}>
                    {e.num === 'COMUM' ? 'Uso comum' : 'Locação'}
                  </span>
                  <h3 className="t-h3">{e.titulo}</h3>
                  <p>{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {videos.logistica && (
          <section className="section section--dark" aria-labelledby="video-titulo">
            <div className="container" style={{ display: 'grid', gap: 36 }}>
              <div className="section-head on-dark" style={{ marginBottom: 0 }}>
                <p className="label">Apresentação</p>
                <h2 id="video-titulo" className="t-h2">A base vista de perto.</h2>
              </div>
              <Video src={videos.logistica} titulo="Apresentação da Lifting Logistic" />
            </div>
          </section>
        )}

        {clientes.length > 0 && (
          <section id="clientes" className="section section--white" aria-labelledby="clientes-titulo">
            <div className="container">
              <div className="section-head" data-reveal>
                <p className="label">Nossos clientes</p>
                <h2 id="clientes-titulo" className="t-h2">Quem já está aqui.</h2>
              </div>
              <LogoWall
                logos={clientes}
                extra={
                  <span>
                    Sua empresa aqui?
                    <br />
                    <a href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">Consulte espaços →</a>
                  </span>
                }
              />
            </div>
          </section>
        )}

        <section id="trabalhe" className="section" aria-labelledby="trabalhe-titulo">
          <div className="container">
            <div className="faixa" data-reveal>
              <div style={{ display: 'grid', gap: 12 }}>
                <p className="label">Trabalhe conosco</p>
                <h2 id="trabalhe-titulo" className="t-h2" style={{ fontSize: 'clamp(1.6rem, 1.2rem + 1.4vw, 2.3rem)' }}>
                  Venha fazer parte do time.
                </h2>
                <p className="t-body">Operação exige gente de confiança. Procuramos profissionais de logística, movimentação e apoio portuário.</p>
              </div>
              <a className="btn" href={mail(g.email, 'Currículo — Lifting Logistic')}>
                Enviar currículo <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </div>
          </div>
        </section>

        <Contato
          rotulo="Contato"
          titulo="Vamos encontrar o espaço certo para a sua operação."
          texto="Fale com a nossa equipe para visitas, disponibilidade de áreas e condições de locação."
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Falar no WhatsApp
              </a>
              <a className="btn btn--ghost-light" href={mail(g.email, 'Locação de espaços — Lifting Logistic')}>
                Enviar e-mail <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          canais={[
            { tipo: 'phone', rotulo: 'Telefone', valor: g.telefone, href: g.telefoneHref },
            { tipo: 'mail', rotulo: 'E-mail', valor: g.email, href: mail(g.email) },
            { tipo: 'instagram', rotulo: 'Instagram', valor: lg.instagramLabel, href: lg.instagram },
            { tipo: 'pin', rotulo: 'Base operacional', valor: g.endereco },
          ]}
        />
      </main>

      <Footer
        marca={{ tipo: 'texto', nome: 'Lifting Logistic' }}
        sobre="Armazenagem, logística e infraestrutura corporativa em 10.000 m² na Baía de Guanabara."
        canais={[
          { label: g.telefone, href: g.telefoneHref },
          { label: g.email, href: mail(g.email) },
          { label: lg.instagramLabel, href: lg.instagram, externo: true },
        ]}
        endereco={g.endereco}
        direita={g.isos}
      />

      <Wpp telefone={g.whatsapp} mensagem={msg} />
      <Reveal />
    </div>
  )
}

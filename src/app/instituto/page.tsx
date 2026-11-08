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
import { Cursos } from '@/components/instituto/Cursos'
import { NUMEROS, DIFERENCIAIS, ESTRUTURA, CERTIFICACOES, NAV_INSTITUTO } from '@/data/instituto'
import { getSite, getVideos, getCursos, getParceiros } from '@/sanity/content'
import { wa, mail } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Instituto de Ensino Lifting — Ex, IRATA, NRs e termografia',
  description:
    'Capacitação técnica em áreas classificadas (Ex), IRATA N1/N2/N3, NR-35, NR-18, termografia e instrumentação. Reconhecido pela ABENDI e certificado pela IRATA International. Baía de Guanabara, RJ.',
}

const ICONES_DIF: IconName[] = ['award', 'users', 'flask', 'wallet']
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

export default async function InstitutoPage() {
  const [site, videos, cursos, clientes] = await Promise.all([getSite(), getVideos(), getCursos(), getParceiros('instituto')])
  const it = site.instituto
  const msg = 'Olá! Quero informações sobre os cursos do Instituto de Ensino Lifting.'

  return (
    <div className="page theme-instituto">
      <Header
        marca={{
          tipo: 'logo',
          src: '/assets/logos/instituto-logo.png',
          srcClaro: '/assets/logos/instituto-logo-branco.png',
          alt: 'Instituto de Ensino Lifting',
          width: 1200,
          height: 248,
        }}
        nav={NAV_INSTITUTO}
        cta={{ label: 'Falar com a equipe', href: wa(it.whatsapp, msg) }}
        voltarGrupo
        contato={[it.telefone, it.email]}
      />

      <main id="conteudo">
        <PageHero
          empresa="Instituto Lifting"
          rotulo="Áreas classificadas · IRATA · NRs · Termografia"
          titulo="Formação técnica que nasceu dentro da operação."
          lead="Laboratórios reais, instrutores com experiência de campo e conteúdo alinhado às normas mais exigentes — para os setores industrial, onshore e offshore. Reconhecido pela ABENDI e certificado pela IRATA International."
          imagem={{ src: '/assets/inst/hero-instrutor-painel.jpg', alt: 'Instrutor acompanhando aluno em montagem de painel no laboratório do Instituto', posicao: '60% 40%' }}
          acoes={
            <>
              <a className="btn btn--light" href="#cursos">
                Ver cursos <Icon name="arrow-right" className="ico-arrow" />
              </a>
              <a className="btn btn--ghost-light" href={wa(it.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Falar no WhatsApp
              </a>
            </>
          }
          fatos={NUMEROS.map(n => ({ valor: n.num, label: n.label }))}
        />

        <section id="sobre" className="section" aria-labelledby="sobre-titulo">
          <div className="container split">
            <div className="split__texto" data-reveal>
              <p className="label">Quem somos</p>
              <h2 id="sobre-titulo" className="t-h2">Da experiência de campo para a sala de aula.</h2>
              <p className="t-body">
                O Instituto de Ensino Lifting nasceu da experiência da Lifting — empresa que há mais de 30 anos
                forma e treina seus colaboradores para atuar com excelência, segurança e alto padrão técnico nos
                setores industrial, onshore e offshore — para levar esse conhecimento a um público ainda maior.
              </p>
              <p className="t-body">
                Há três anos no segmento educacional, investe continuamente em infraestrutura, tecnologia,
                metodologias e atualização de conteúdos, conectando a formação às transformações da indústria.
              </p>
              <div className="selos" aria-label="Reconhecimentos" style={{ marginTop: 8 }}>
                <span className="selo" style={{ border: '1px solid var(--line)' }}>
                  <Image src="/assets/logos/cert-irata.png" alt="IRATA International" width={80} height={49} />
                </span>
                <span className="selo" style={{ border: '1px solid var(--line)' }}>
                  <Image src="/assets/logos/cert-abendi.png" alt="ABENDI" width={190} height={40} />
                </span>
              </div>
            </div>
            <figure className="split__media" data-reveal="media" style={d(100)}>
              <Image
                src="/assets/inst/sobre-laboratorio-turma.jpg"
                alt="Instrutor e alunos em aula prática no laboratório do Instituto"
                fill
                sizes="(max-width: 959px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </figure>
          </div>
        </section>

        <section className="section section--white" aria-labelledby="dif-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">Nosso diferencial</p>
              <h2 id="dif-titulo" className="t-h2">Ensino técnico de verdade, ao alcance de quem precisa.</h2>
              <p className="t-lead">Toda turma tem uma vaga com bolsa integral, 100% gratuita.</p>
            </div>
            <ul className="features">
              {DIFERENCIAIS.map((x, i) => (
                <li className="feature" key={x.titulo} data-reveal style={d(i * 60)}>
                  <span className="feature__ico">
                    <Icon name={ICONES_DIF[i] ?? 'award'} />
                  </span>
                  <h3 className="t-h3">{x.titulo}</h3>
                  <p>{x.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="estrutura" className="section" aria-labelledby="estrutura-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">Nosso espaço</p>
              <h2 id="estrutura-titulo" className="t-h2">Teoria e prática no mesmo endereço.</h2>
              <p className="t-lead">
                Laboratórios, centro de treinamento, auditório, salas de aula, estúdio e alojamento — ambientes
                que reproduzem cenários reais de operação e conforto para quem vem de longe.
              </p>
            </div>
            <ul className="bento">
              {ESTRUTURA.map((c, i) => (
                <li className="bento__card" key={c.titulo} data-reveal="media" style={d(Math.min(i, 5) * 60)}>
                  {c.img && (
                    <Image
                      src={c.img.src}
                      alt={c.img.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1099px) 50vw, 33vw"
                      style={{ objectFit: 'cover', objectPosition: c.img.pos ?? 'center' }}
                    />
                  )}
                  <div className="bento__body">
                    <span className="bento__tag">{c.tag}</span>
                    <h3 className="t-h3">{c.titulo}</h3>
                    <p>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {videos.instituto && (
          <section className="section section--accent-dark" aria-labelledby="video-titulo">
            <div className="container" style={{ display: 'grid', gap: 36 }}>
              <div className="section-head on-dark" style={{ marginBottom: 0 }}>
                <p className="label">Apresentação</p>
                <h2 id="video-titulo" className="t-h2">Conheça o Instituto por dentro.</h2>
              </div>
              <Video src={videos.instituto} titulo="Vídeo institucional do Instituto de Ensino Lifting" />
            </div>
          </section>
        )}

        <section id="cursos" className="section section--white" aria-labelledby="cursos-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">Nossos treinamentos</p>
              <h2 id="cursos-titulo" className="t-h2">Cursos com foco em normas, segurança e prática.</h2>
              <p className="t-lead">
                De áreas classificadas (Ex) a acesso por cordas. Abra cada curso para ver unidades e carga
                horária — e fale com a equipe para valores, turmas e treinamentos in company.
              </p>
            </div>
            <Cursos cursos={cursos} whatsapp={it.whatsapp} />
          </div>
        </section>

        <section id="certificacoes" className="section" aria-labelledby="cert-titulo">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="label">Nossas certificações</p>
              <h2 id="cert-titulo" className="t-h2">Reconhecimento que dá peso ao seu certificado.</h2>
            </div>
            <ul className="certs">
              {CERTIFICACOES.map((c, i) => (
                <li className="cert" key={c.titulo} data-reveal style={d(i * 70)}>
                  {c.logo && <Image className="cert__selo" src={c.logo.src} alt={c.logo.alt} width={240} height={80} />}
                  <span className="feature__tag">{c.k}</span>
                  <h3 className="t-h3">{c.titulo}</h3>
                  <p>{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {clientes.length > 0 && (
          <section id="clientes" className="section section--white" aria-labelledby="clientes-titulo">
            <div className="container">
              <div className="section-head" data-reveal>
                <p className="label">Nossos clientes</p>
                <h2 id="clientes-titulo" className="t-h2">Empresas que confiam na nossa formação.</h2>
              </div>
              <LogoWall logos={clientes} />
            </div>
          </section>
        )}

        <Contato
          rotulo="Matrículas & turmas"
          titulo="Pronto para dar o próximo passo na carreira?"
          texto="Consulte datas de turmas, condições e a vaga de bolsa integral de cada turma. Empresas: solicite treinamentos in company sob medida."
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(it.whatsapp, 'Olá! Quero informações sobre turmas e matrículas no Instituto de Ensino Lifting.')} target="_blank" rel="noopener">
                <WhatsappIcon /> Falar no WhatsApp
              </a>
              <a className="btn btn--ghost-light" href={mail(it.email, 'Matrículas e turmas — Instituto de Ensino Lifting')}>
                Enviar e-mail <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          canais={[
            { tipo: 'whatsapp', rotulo: 'WhatsApp', valor: it.telefone, href: wa(it.whatsapp, msg) },
            { tipo: 'mail', rotulo: 'E-mail', valor: it.email, href: mail(it.email) },
            { tipo: 'instagram', rotulo: 'Instagram', valor: it.instagramLabel, href: it.instagram },
            { tipo: 'pin', rotulo: 'Onde estamos', valor: site.grupo.endereco },
          ]}
        />
      </main>

      <Footer
        marca={{ tipo: 'logo', src: '/assets/logos/instituto-logo-branco.png', alt: 'Instituto de Ensino Lifting', width: 1200, height: 248 }}
        sobre="Capacitação técnica em áreas classificadas, acesso por cordas, NRs, termografia e instrumentação."
        canais={[
          { label: it.telefone, href: it.telefoneHref },
          { label: it.email, href: mail(it.email) },
          { label: it.instagramLabel, href: it.instagram, externo: true },
        ]}
        endereco={site.grupo.endereco}
        direita="Reconhecido pela ABENDI · Certificado IRATA International"
      />

      <Wpp telefone={it.whatsapp} mensagem={msg} />
      <Reveal />
    </div>
  )
}

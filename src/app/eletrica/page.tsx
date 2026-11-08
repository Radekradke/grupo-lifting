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
import { SERVICOS, NAV_ELETRICA } from '@/data/eletrica'
import { getSite, getVideos, getParceiros } from '@/sanity/content'
import { wa, mail } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Lifting Elétrica — serviços elétricos navais, offshore e industriais',
  description:
    'Assistência técnica elétrica e comercial na área naval e industrial: reparo, manutenção, instalação, inspeção e automação — com equipe própria, especializada e certificada.',
}

const ICONES: Record<string, IconName> = {
  Reparo: 'wrench',
  Manutenção: 'pulse',
  Instalação: 'plug',
  Inspeção: 'search',
  'Serviços especiais': 'shield',
  'Painéis e motores': 'bolt',
}

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

export default async function EletricaPage() {
  const [site, videos, parceiros] = await Promise.all([getSite(), getVideos(), getParceiros('parceiro')])
  const g = site.grupo
  const msg = 'Olá! Vim pelo site da Lifting Elétrica e gostaria de solicitar um atendimento.'

  return (
    <div className="page theme-eletrica">
      <Header
        marca={{
          tipo: 'logo',
          src: '/assets/logos/lifting-eletrica-logo.png',
          srcClaro: '/assets/logos/lifting-eletrica-logo-branco.png',
          alt: 'Lifting Elétrica',
          width: 734,
          height: 213,
        }}
        nav={NAV_ELETRICA}
        cta={{ label: 'Solicitar atendimento', href: wa(g.whatsapp, msg) }}
        voltarGrupo
        contato={[g.telefone, g.email]}
      />

      <main id="conteudo">
        <PageHero
          empresa="Lifting Elétrica"
          rotulo="Naval · Offshore · Industrial"
          titulo="A energia por trás de quem opera no mar e na indústria."
          lead="Assistência técnica elétrica e comercial na área naval e industrial: reparo, manutenção, instalação, inspeção e automação — com equipe própria, especializada e certificada."
          imagem={{ src: '/assets/eletrica/termografia-painel.jpg', alt: 'Técnico da Lifting em inspeção termográfica de painel elétrico', posicao: '62% 35%' }}
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Solicitar atendimento
              </a>
              <a className="btn btn--ghost-light" href="#servicos">
                Nossos serviços <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          fatos={[
            { valor: '3 certificações ISO', label: '9001, 14001 e 45001 — qualidade, meio ambiente e segurança' },
            { valor: 'Onshore + offshore', label: 'Atendimento em unidades marítimas e industriais' },
            { valor: 'Equipe própria', label: 'Técnicos especializados e certificados' },
          ]}
        />

        <section id="sobre" className="section" aria-labelledby="sobre-titulo">
          <div className="container split">
            <div className="split__texto" data-reveal>
              <p className="label">Sobre nós</p>
              <h2 id="sobre-titulo" className="t-h2">Especialistas em manter a operação viva.</h2>
              <p className="t-body">
                Somos uma empresa do ramo de eletricidade especializada em reparos, manutenção e instalação
                de equipamentos elétricos e de automação, e prestadora de serviços de assistência técnica,
                elétrica e comercial na área naval e industrial.
              </p>
              <p className="t-body">
                Localizada estrategicamente na Baía de Guanabara e certificada ISO 9001:2015, ISO 14001:2015 e
                ISO 45001:2018, atendemos com qualidade, eficiência e segurança — do atendimento inicial à
                conclusão dos serviços.
              </p>
            </div>
            <figure className="split__media" data-reveal style={d(100)}>
              <Image
                src="/assets/eletrica/reparo-motor.jpg"
                alt="Técnicos da Lifting em manutenção de motor elétrico"
                fill
                sizes="(max-width: 959px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </figure>
          </div>
        </section>

        <section id="servicos" className="section section--white" aria-labelledby="servicos-titulo">
          <div className="container">
            <div className="section-head section-head--split" data-reveal>
              <p className="label">O que fazemos</p>
              <h2 id="servicos-titulo" className="t-h2">Do diagnóstico à entrega, com relatório técnico.</h2>
              <p className="t-lead">
                Seis frentes de serviço para manter painéis, motores e instalações funcionando — em terra ou
                embarcado.
              </p>
            </div>
            <ul className="features features--3">
              {SERVICOS.map((s, i) => (
                <li className="feature" key={s.titulo} data-reveal style={d(Math.min(i, 5) * 60)}>
                  <span className="feature__ico">
                    <Icon name={ICONES[s.titulo] ?? 'bolt'} />
                  </span>
                  <h3 className="t-h3">{s.titulo}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {parceiros.length > 0 && (
          <section id="parceiros" className="section" aria-labelledby="parceiros-titulo">
            <div className="container">
              <div className="section-head" data-reveal>
                <p className="label">Parceiros</p>
                <h2 id="parceiros-titulo" className="t-h2">Quem confia na gente, opera com a gente.</h2>
              </div>
              <LogoWall logos={parceiros} />
            </div>
          </section>
        )}

        {videos.eletrica && (
          <section className="section section--dark" aria-labelledby="video-titulo">
            <div className="container" style={{ display: 'grid', gap: 36 }}>
              <div className="section-head on-dark" style={{ marginBottom: 0 }}>
                <p className="label">Apresentação</p>
                <h2 id="video-titulo" className="t-h2">Conheça de perto o nosso trabalho.</h2>
              </div>
              <Video src={videos.eletrica} titulo="Apresentação da Lifting Elétrica" />
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
                <p className="t-body">
                  Procuramos técnicos e engenheiros que levam segurança e qualidade a sério. Envie seu
                  currículo e venha operar com a gente.
                </p>
              </div>
              <a className="btn" href={mail(g.email, 'Currículo — Lifting Elétrica')}>
                Enviar currículo <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </div>
          </div>
        </section>

        <Contato
          rotulo="Contato"
          titulo="Precisa de atendimento técnico?"
          texto="Fale direto com a nossa equipe — ou com o grupo, que direciona para o braço certo."
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Falar no WhatsApp
              </a>
              <a className="btn btn--ghost-light" href={mail(g.email, 'Atendimento — Lifting Elétrica')}>
                Enviar e-mail <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          canais={[
            { tipo: 'phone', rotulo: 'Telefone', valor: g.telefone, href: g.telefoneHref },
            { tipo: 'mail', rotulo: 'E-mail', valor: g.email, href: mail(g.email) },
            { tipo: 'pin', rotulo: 'Base de apoio', valor: g.endereco },
          ]}
        />
      </main>

      <Footer
        marca={{ tipo: 'logo', src: '/assets/logos/lifting-eletrica-logo-branco.png', alt: 'Lifting Elétrica', width: 734, height: 213 }}
        sobre="Reparo, manutenção, instalação, inspeção e automação de equipamentos elétricos — naval, offshore e industrial."
        canais={[
          { label: g.telefone, href: g.telefoneHref },
          { label: g.email, href: mail(g.email) },
          { label: 'WhatsApp', href: wa(g.whatsapp, msg), externo: true },
        ]}
        endereco={g.endereco}
        direita={g.isos}
      />

      <Wpp telefone={g.whatsapp} mensagem={msg} />
      <Reveal />
    </div>
  )
}

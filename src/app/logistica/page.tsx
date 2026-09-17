import type { Metadata } from 'next'
import Image from 'next/image'
import { SubHeader }    from '@/components/shared/SubHeader'
import { SubHero }      from '@/components/shared/SubHero'
import { SubWork }      from '@/components/shared/SubWork'
import { SubFooter }    from '@/components/shared/SubFooter'
import { WhatGrid }     from '@/components/shared/WhatGrid'
import { VideoFrame }   from '@/components/shared/VideoFrame'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WppFloat }     from '@/components/shared/WppFloat'
import { NUMEROS, ESTRUTURA, ESPACOS, GALERIA, CLIENTES, NAV_LOGISTICA } from '@/data/logistica'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Lifting Logistic — Grupo Lifting',
  description:
    'Soluções integradas de armazenagem, logística e infraestrutura corporativa: 10.000 m² com saída pela terra e pelo mar, na Baía de Guanabara. Suporte a operações Repetro.',
}

export default function LogisticaPage() {
  return (
    <div className="page theme-logistica">
      <SubHeader nome="LIFTING LOGISTIC" nav={NAV_LOGISTICA} />

      <main>
        <SubHero
          num="03"
          eyebrow="ARMAZENAGEM · LOGÍSTICA · INFRAESTRUTURA"
          titulo="10.000 m² com saída pela terra e pelo mar."
          lead="Soluções integradas de armazenagem, logística e infraestrutura corporativa: um ambiente moderno, seguro e estrategicamente planejado na Baía de Guanabara — pronto para receber empresas de diversos segmentos."
          acoes={[
            { label: 'FALE CONOSCO',      href: '#contato' },
            { label: 'ÁREAS PARA ALUGAR', href: '#espacos', ghost: true },
          ]}
        />

        {/* Números-chave */}
        <section className="sub-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="sub-section__inner">
            <WhatGrid itens={NUMEROS} semMargem />
          </div>
        </section>

        {/* Quem somos */}
        <section id="sobre" className="sub-section sub-about">
          <div className="sub-section__inner">
            <div>
              <p className="eyebrow">QUEM SOMOS</p>
              <h2>Infraestrutura de alto padrão para o seu negócio operar.</h2>
              <p className="lead">
                A Lifting Logistic é especializada em soluções integradas de
                armazenagem, logística e infraestrutura corporativa — um ambiente
                moderno, seguro e estrategicamente planejado para atender empresas de
                diversos segmentos.
              </p>
              <p className="lead">
                Em uma área total de 10.000 m², disponibilizamos espaços empresariais
                para locação: salas comerciais, salas de reunião, áreas operacionais e
                galpões, com flexibilidade e praticidade para negócios que buscam
                estrutura de alto padrão.
              </p>
            </div>
            <figure className="framed-photo">
              <Image
                src="/assets/log/img-4.png"
                alt="Recepção da Lifting Logistics"
                fill
                sizes="(max-width: 1000px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </figure>
          </div>
        </section>

        {/* Apresentação em vídeo */}
        <section id="apresentacao" className="sub-section sub-video">
          <div className="sub-section__inner">
            <p className="eyebrow">APRESENTAÇÃO</p>
            <h2>A base vista de perto.</h2>
            <VideoFrame note="Vídeo de apresentação — base, píer e movimentação. Informe a URL de embed na prop src." />
          </div>
        </section>

        {/* Estrutura e serviços */}
        <section id="oque" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">ESTRUTURA E SERVIÇOS</p>
            <h2>Da armazenagem à movimentação de carga.</h2>
            <WhatGrid itens={ESTRUTURA} />
          </div>
        </section>

        {/* Galeria da base */}
        <section className="sub-section" style={{ paddingTop: 0 }}>
          <div className="sub-section__inner">
            <div className="gallery">
              {GALERIA.map(item => (
                <figure
                  className={`gallery__item${item.wide ? ' gallery__item--wide' : ''}`}
                  key={item.src}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <figcaption>{item.legenda}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <SubWork
          id="repetro"
          eyebrow="REPETRO"
          titulo="Suporte a operações de óleo, gás e energia."
          texto="Atendemos operações vinculadas ao Repetro com suporte logístico e estrutural — do armazenamento de materiais e equipamentos ao apoio administrativo. Nossa estrutura atende às rigorosas exigências do mercado, com segurança, organização e excelência operacional em todas as etapas."
          botao={{
            label: 'CONSULTAR CONDIÇÕES',
            href: `mailto:${SITE.grupo.email}?subject=${encodeURIComponent('Operação Repetro — Lifting Logistic')}`,
          }}
        />

        {/* Áreas para alugar */}
        <section id="espacos" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">ÁREAS PARA ALUGAR</p>
            <h2>Espaços amplos para receber seus equipamentos e equipes.</h2>
            <WhatGrid itens={ESPACOS} />
          </div>
        </section>

        {/* Clientes */}
        <section id="parceiros" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">NOSSOS CLIENTES</p>
            <h2>Quem já está aqui.</h2>
            <div className="partner-row partner-row--logos">
              {CLIENTES.map(c => (
                <div className="partner-logo" key={c.src}>
                  <Image src={c.src} alt={c.alt} width={160} height={52} />
                </div>
              ))}
              <div className="partner-ph">SUA EMPRESA</div>
            </div>
          </div>
        </section>

        <SubWork
          eyebrow="TRABALHE CONOSCO"
          titulo="Venha fazer parte do time."
          texto="Operação exige gente de confiança. Procuramos profissionais de logística, movimentação e apoio portuário."
          botao={{
            label: 'ENVIAR CURRÍCULO',
            href: `mailto:${SITE.grupo.email}?subject=${encodeURIComponent('Currículo — Lifting Logistic')}`,
          }}
        />
      </main>

      <SubFooter
        intro="Fale direto com a nossa equipe — ou com o grupo, que direciona para o braço certo."
        canais={[
          { label: SITE.grupo.telefone, href: SITE.grupo.telefoneHref },
          { label: SITE.grupo.email,    href: `mailto:${SITE.grupo.email}` },
          { label: SITE.logistica.instagramLabel, href: SITE.logistica.instagram, externo: true },
        ]}
        onde={`Base operacional — ${SITE.grupo.endereco}`}
        barraEsquerda="© 2026 Grupo Lifting — Lifting Logistic"
        barraDireita={SITE.grupo.isos}
      />

      <WppFloat
        phone={SITE.grupo.whatsapp}
        message="Olá! Vim pelo site da Lifting Logistic."
      />
      <ScrollReveal />
    </div>
  )
}

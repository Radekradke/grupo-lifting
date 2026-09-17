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
import { StatBand }     from '@/components/instituto/StatBand'
import { StructGrid }   from '@/components/instituto/StructGrid'
import { CourseList }   from '@/components/instituto/CourseList'
import { CertGrid }     from '@/components/instituto/CertGrid'
import { DIFERENCIAIS, NAV_INSTITUTO } from '@/data/instituto'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Instituto de Ensino Lifting — Capacitação técnica industrial, Ex, IRATA e NRs',
  description:
    'Instituto de Ensino Lifting: capacitação técnica em áreas classificadas (Ex), IRATA N1/N2/N3, NR-35, NR-18, termografia e instrumentação. Reconhecido pela ABENDI e certificado pela IRATA International. Baía de Guanabara, RJ.',
}

export default function InstitutoPage() {
  return (
    <div className="page theme-instituto">
      <SubHeader
        nome="Instituto de Ensino Lifting"
        logo={{
          src: '/assets/logos/instituto-logo.png',
          alt: 'Instituto de Ensino Lifting',
          width: 190,
          height: 30,
        }}
        nav={NAV_INSTITUTO}
      />

      <main>
        <SubHero
          num="02"
          eyebrow="ÁREAS CLASSIFICADAS · IRATA · NRs · TERMOGRAFIA"
          titulo="Formação técnica que nasceu dentro da operação."
          lead="O Instituto de Ensino Lifting forma profissionais para os setores industrial, Onshore e Offshore — com laboratórios reais, instrutores com experiência de campo e conteúdo alinhado às normas mais exigentes do mercado. Reconhecido pela ABENDI e certificado pela IRATA International."
          acoes={[
            { label: 'VER CURSOS',          href: '#cursos' },
            { label: 'FALAR COM A EQUIPE',  href: '#contato', ghost: true },
          ]}
        />

        {/* Números-chave */}
        <section className="sub-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
          <div className="sub-section__inner">
            <StatBand />
          </div>
        </section>

        {/* Quem somos */}
        <section id="sobre" className="sub-section sub-about">
          <div className="sub-section__inner">
            <div>
              <p className="eyebrow">QUEM SOMOS</p>
              <h2>Da experiência de campo para a sala de aula.</h2>
              <p className="lead">
                O Instituto de Ensino Lifting foi concebido para suprir a crescente
                demanda por qualificação técnica especializada, oferecendo programas
                alinhados às mais elevadas exigências do mercado industrial. Sua criação
                nasceu da sólida experiência da Lifting — empresa que há mais de 30 anos
                atua na formação, desenvolvimento e treinamento de seus colaboradores
                para atuar com excelência, segurança e alto padrão técnico nos setores
                industrial, Onshore e Offshore.
              </p>
              <p className="lead">
                Há três anos no segmento educacional, o Instituto mantém uma trajetória
                pautada na evolução contínua, na inovação e na busca permanente pelas
                melhores práticas de ensino, investindo constantemente em infraestrutura,
                tecnologia e atualização de conteúdos.
              </p>
            </div>

            <figure className="framed-photo">
              <Image
                src="/assets/inst/motor.jpg"
                alt="Profissionais Lifting em manutenção de motor elétrico"
                fill
                sizes="(max-width: 1000px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </figure>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">NOSSO DIFERENCIAL</p>
            <h2>Ensino técnico de verdade, ao alcance de quem precisa.</h2>
            <WhatGrid itens={DIFERENCIAIS} />
          </div>
        </section>

        {/* Apresentação em vídeo */}
        <section id="apresentacao" className="sub-section sub-video">
          <div className="sub-section__inner">
            <p className="eyebrow">APRESENTAÇÃO</p>
            <h2>Conheça o Instituto por dentro.</h2>
            <VideoFrame note="Vídeo institucional — laboratórios, centro de treinamento e turmas em ação. Informe a URL de embed na prop src." />
          </div>
        </section>

        {/* Estrutura */}
        <section id="estrutura" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">NOSSO ESPAÇO</p>
            <h2>Laboratórios, centro de treinamento, auditório, estúdio e alojamento.</h2>
            <p className="lead" style={{ maxWidth: '70ch' }}>
              Uma estrutura completa, pensada para unir teoria e prática em um só lugar —
              com ambientes que reproduzem cenários reais de operação e conforto para quem
              vem de longe.
            </p>
            <StructGrid />
          </div>
        </section>

        {/* Cursos */}
        <section id="cursos" className="sub-section sub-work">
          <div className="sub-section__inner" style={{ display: 'block' }}>
            <p className="eyebrow">NOSSOS TREINAMENTOS</p>
            <h2>Cursos técnicos com foco em normas, segurança e prática.</h2>
            <p className="lead" style={{ maxWidth: '74ch' }}>
              Portfólio voltado às disciplinas de Elétrica, Instrumentação e Segurança do
              Trabalho — de áreas classificadas (Ex) a acesso por cordas (IRATA / NR-35 /
              NR-18). Clique em cada curso para ver as unidades e a carga horária. Também
              personalizamos conteúdos e cargas horárias sob medida.
            </p>
            <CourseList />
          </div>
        </section>

        {/* Certificações */}
        <section id="certificacoes" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">NOSSAS CERTIFICAÇÕES</p>
            <h2>Reconhecimento que dá peso ao seu certificado.</h2>
            <CertGrid />
          </div>
        </section>

        <SubWork
          eyebrow="MATRÍCULAS & TURMAS"
          titulo="Pronto para dar o próximo passo na sua carreira?"
          texto="Fale com a nossa equipe para consultar datas de turmas, condições de investimento e a vaga de bolsa integral de cada turma. Empresas: solicite treinamentos in company sob medida."
          botao={{
            label: 'QUERO ME MATRICULAR',
            href: `mailto:${SITE.instituto.email}?subject=${encodeURIComponent('Matrícula e turmas — Instituto de Ensino Lifting')}`,
          }}
        />
      </main>

      <SubFooter
        logo={{
          src: '/assets/logos/instituto-logo-branco.png',
          alt: 'Instituto de Ensino Lifting',
          width: 210,
          height: 34,
        }}
        intro="Fale direto com a secretaria do Instituto — turmas, matrículas e treinamentos corporativos."
        canais={[
          { label: SITE.instituto.telefone, href: SITE.instituto.telefoneHref },
          { label: SITE.instituto.email,    href: `mailto:${SITE.instituto.email}` },
          { label: SITE.instituto.instagramLabel, href: SITE.instituto.instagram, externo: true },
        ]}
        onde={SITE.grupo.endereco}
        barraEsquerda="© 2026 Grupo Lifting — Instituto de Ensino Lifting"
        barraDireita="Reconhecido pela ABENDI · Certificado IRATA International"
      />

      <WppFloat
        phone={SITE.instituto.whatsapp}
        message="Olá! Quero informações sobre os cursos do Instituto de Ensino Lifting."
      />
      <ScrollReveal />
    </div>
  )
}

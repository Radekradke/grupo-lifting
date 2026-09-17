import type { Metadata } from 'next'
import { SubHeader }    from '@/components/shared/SubHeader'
import { SubHero }      from '@/components/shared/SubHero'
import { SubWork }      from '@/components/shared/SubWork'
import { SubFooter }    from '@/components/shared/SubFooter'
import { WhatGrid }     from '@/components/shared/WhatGrid'
import { VideoFrame }   from '@/components/shared/VideoFrame'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { WppFloat }     from '@/components/shared/WppFloat'
import { SERVICOS, NAV_ELETRICA } from '@/data/eletrica'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Lifting elétrica — Grupo Lifting',
  description:
    'Assistência técnica elétrica e comercial na área naval e industrial: reparo, manutenção, instalação, inspeção e automação — com equipe própria, especializada e certificada.',
}

export default function EletricaPage() {
  return (
    <div className="page theme-eletrica">
      <SubHeader nome="LIFTING ELÉTRICA" nav={NAV_ELETRICA} />

      <main>
        <SubHero
          num="01"
          eyebrow="NAVAL · OFFSHORE · INDUSTRIAL"
          titulo="A energia por trás de quem opera no mar e na indústria."
          lead="Assistência técnica elétrica e comercial na área naval e industrial: reparo, manutenção, instalação, inspeção e automação — com equipe própria, especializada e certificada."
          acoes={[
            { label: 'FALE CONOSCO',  href: '#contato' },
            { label: 'O QUE FAZEMOS', href: '#oque', ghost: true },
          ]}
        />

        {/* Apresentação em vídeo */}
        <section id="apresentacao" className="sub-section sub-video">
          <div className="sub-section__inner">
            <p className="eyebrow">APRESENTAÇÃO</p>
            <h2>Conheça de perto o nosso trabalho.</h2>
            <VideoFrame note="Vídeo de apresentação — serviços em campo e bancada. Informe a URL de embed na prop src." />
          </div>
        </section>

        {/* Sobre nós */}
        <section id="sobre" className="sub-section sub-about">
          <div className="sub-section__inner">
            <div>
              <p className="eyebrow">SOBRE NÓS</p>
              <h2>Especialistas em manter a operação viva.</h2>
              <p className="lead">
                Somos uma empresa do ramo de eletricidade especializada em reparos,
                manutenção e instalação de equipamentos elétricos e de automação, bem
                como prestadora de serviços de assistência técnica, elétrica e
                comercial, na área naval e industrial.
              </p>
              <p className="lead">
                Localizada estrategicamente na Baía de Guanabara e certificada
                ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018, atendemos com
                qualidade, eficiência e segurança — do atendimento inicial à conclusão
                dos serviços.
              </p>
            </div>
            <div className="photo-ph">
              Foto: equipe técnica em painel elétrico / unidade offshore
            </div>
          </div>
        </section>

        {/* O que fazemos */}
        <section id="oque" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">O QUE FAZEMOS</p>
            <h2>Somos especialistas em:</h2>
            <WhatGrid itens={SERVICOS} />
          </div>
        </section>

        {/* Parceiros */}
        <section id="parceiros" className="sub-section">
          <div className="sub-section__inner">
            <p className="eyebrow">PARCEIROS</p>
            <h2>Quem confia na gente, opera com a gente.</h2>
            <div className="partner-row">
              {Array.from({ length: 6 }, (_, i) => (
                <div className="partner-ph" key={i}>{`LOGO ${i + 1}`}</div>
              ))}
            </div>
          </div>
        </section>

        <SubWork
          eyebrow="TRABALHE CONOSCO"
          titulo="Venha fazer parte do time."
          texto="Procuramos técnicos e engenheiros que levam segurança e qualidade a sério. Envie seu currículo e venha operar com a gente."
          botao={{
            label: 'ENVIAR CURRÍCULO',
            href: `mailto:${SITE.grupo.email}?subject=${encodeURIComponent('Currículo — Lifting Elétrica')}`,
          }}
        />
      </main>

      <SubFooter
        intro="Fale direto com a nossa equipe — ou com o grupo, que direciona para o braço certo."
        canais={[
          { label: SITE.grupo.telefone, href: SITE.grupo.telefoneHref },
          { label: SITE.grupo.email,    href: `mailto:${SITE.grupo.email}` },
        ]}
        onde={`Base de apoio — ${SITE.grupo.endereco}`}
        barraEsquerda="© 2026 Grupo Lifting — Lifting elétrica"
        barraDireita={SITE.grupo.isos}
      />

      <WppFloat phone={SITE.grupo.whatsapp} />
      <ScrollReveal />
    </div>
  )
}

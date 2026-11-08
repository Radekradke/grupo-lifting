import type { Contato } from '@/sanity/content'

export function CtaFinal({ grupo }: { grupo: Contato['grupo'] }) {
  const { telefone, telefoneHref, email } = grupo

  return (
    <section id="contato" className="cta">
      <div className="cta__glow" aria-hidden="true" />

      <div className="cta__inner">
        <p className="eyebrow">GRUPO LIFTING</p>
        <h2 className="cta__title">Qual força a sua operação precisa agora?</h2>

        <p className="lead cta__contact">
          <a href={telefoneHref}>{telefone}</a> · <a href={`mailto:${email}`}>{email}</a>
          <br />
          Fale com o grupo e a gente direciona para o braço certo, ou para os três.
        </p>

        <div className="cta__actions">
          <a href={`mailto:${email}`} className="btn-primary">
            FALAR COM O GRUPO
          </a>
          <a href="#grupo" className="btn-outline">
            CONHECER AS EMPRESAS
          </a>
        </div>
      </div>
    </section>
  )
}

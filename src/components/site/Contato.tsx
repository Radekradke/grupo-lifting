import { Icon, WhatsappIcon } from './Icon'

type Canal = { tipo: 'whatsapp' | 'phone' | 'mail' | 'pin' | 'instagram'; rotulo: string; valor: string; href?: string }

type Props = {
  id?: string
  rotulo: string
  titulo: string
  texto: string
  acoes: React.ReactNode
  canais: Canal[]
}

/** Bloco final de contato — fundo escuro na cor da empresa. */
export function Contato({ id = 'contato', rotulo, titulo, texto, acoes, canais }: Props) {
  return (
    <section id={id} className="cta" aria-labelledby={`${id}-titulo`}>
      <div className="container cta__inner">
        <div className="on-dark" style={{ display: 'grid', gap: 22 }} data-reveal>
          <p className="label">{rotulo}</p>
          <h2 id={`${id}-titulo`} className="t-h2 cta__titulo">{titulo}</h2>
          <p className="t-lead">{texto}</p>
        </div>

        <div className="btn-row cta__acoes" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
          {acoes}
        </div>

        <ul className="cta__canais" data-reveal style={{ '--d': '140ms' } as React.CSSProperties}>
          {canais.map(c => {
            const conteudo = (
              <>
                {c.tipo === 'whatsapp' ? <WhatsappIcon /> : <Icon name={c.tipo} />}
                <small>{c.rotulo}</small>
                <span>{c.valor}</span>
              </>
            )
            return (
              <li key={c.rotulo + c.valor}>
                {c.href ? (
                  <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
                    {conteudo}
                  </a>
                ) : (
                  <div>{conteudo}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

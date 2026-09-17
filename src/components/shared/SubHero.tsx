type Acao = { label: string; href: string; ghost?: boolean }

type SubHeroProps = {
  num: string
  eyebrow: string
  titulo: string
  lead: string
  acoes: Acao[]
}

export function SubHero({ num, eyebrow, titulo, lead, acoes }: SubHeroProps) {
  return (
    <section id="topo" className="sub-hero">
      <div className="sub-hero__glow" aria-hidden="true" />

      <div className="sub-hero__inner">
        <span className="sub-hero__num" aria-hidden="true">{num}</span>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{titulo}</h1>
        <p className="lead">{lead}</p>

        <div className="sub-hero__actions">
          {acoes.map(a => (
            <a key={a.href} href={a.href} className={`btn${a.ghost ? ' btn--ghost' : ''}`}>
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

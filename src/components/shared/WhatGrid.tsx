export type WhatItem = { num: string; titulo: string; desc: string }

export function WhatGrid({ itens, semMargem = false }: { itens: readonly WhatItem[]; semMargem?: boolean }) {
  return (
    <div className="what-grid" style={semMargem ? { marginTop: 0 } : undefined}>
      {itens.map(i => (
        <div className="what-card" key={i.titulo}>
          <span className="what-card__num">{i.num}</span>
          <h3>{i.titulo}</h3>
          <p>{i.desc}</p>
        </div>
      ))}
    </div>
  )
}

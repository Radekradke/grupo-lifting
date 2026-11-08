import Image from 'next/image'

export type Logo = { nome: string; src: string; site?: string }

/** Faixa contínua de logos (home). A 2ª cópia existe só para o loop sem emenda. */
export function LogoMarquee({ logos }: { logos: readonly Logo[] }) {
  if (logos.length === 0) return null
  const grupo = (copia: boolean) => (
    <ul className="marquee__group" aria-hidden={copia || undefined}>
      {logos.map(l => (
        <li className="marquee__item" key={l.src}>
          <Image src={l.src} alt={copia ? '' : l.nome} width={150} height={42} />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee">
      <div className="marquee__track">
        {grupo(false)}
        {grupo(true)}
      </div>
    </div>
  )
}

/** Grade estática de logos (sub-sites). */
export function LogoWall({ logos, extra }: { logos: readonly Logo[]; extra?: React.ReactNode }) {
  return (
    <ul className="logos">
      {logos.map((l, i) => (
        <li key={l.src} data-reveal style={{ '--d': `${Math.min(i, 6) * 50}ms` } as React.CSSProperties}>
          <Image src={l.src} alt={l.nome} width={180} height={60} />
        </li>
      ))}
      {extra && <li className="logos__cta">{extra}</li>}
    </ul>
  )
}

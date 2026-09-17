import Link from 'next/link'
import Image from 'next/image'

export type NavItem = { label: string; href: string }

type SubHeaderProps = {
  nome: string
  logo?: { src: string; alt: string; width: number; height: number }
  nav: NavItem[]
}

export function SubHeader({ nome, logo, nav }: SubHeaderProps) {
  return (
    <header className="sub-header">
      <Link className="sub-header__back" href="/">
        ← GRUPO LIFTING
      </Link>

      <Link
        className={`sub-brand${logo ? ' sub-brand--logo' : ''}`}
        href="#topo"
        aria-label={`${nome} — início`}
      >
        {logo ? (
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} priority />
        ) : (
          <>
            <span className="sub-brand__mark" aria-hidden="true" />
            <span className="sub-brand__name">{nome}</span>
          </>
        )}
      </Link>

      <nav className="sub-nav" aria-label="Navegação">
        {nav.map(item => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

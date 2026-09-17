import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { label: 'O GRUPO',   href: '#grupo',     classe: '' },
  { label: 'ELÉTRICA',  href: '#eletrica',  classe: 'is-eletrica'  },
  { label: 'INSTITUTO', href: '#instituto', classe: 'is-instituto' },
  { label: 'LOGÍSTICA', href: '#logistica', classe: 'is-logistica' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link
        href="#topo"
        className="brand brand--logo"
        aria-label="Lifting Electric & Instrumentation — início"
      >
        <Image
          src="/assets/logos/lifting-eletrica-logo.png"
          alt="Lifting Electric & Instrumentation"
          width={220}
          height={42}
          priority
        />
      </Link>

      <nav className="main-nav" aria-label="Navegação principal">
        {NAV.map(item => (
          <a key={item.href} href={item.href} className={item.classe}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#contato" className="btn-outline">
        FALE COM O GRUPO
      </a>
    </header>
  )
}

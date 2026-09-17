import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/data/site'

const COLUNAS = [
  {
    titulo: 'ELÉTRICA ↗',
    classe: 'accent-eletrica',
    href: '/eletrica',
    itens: [
      { label: 'Reparo',     href: '#eletrica' },
      { label: 'Manutenção', href: '#eletrica' },
      { label: 'Instalação', href: '#eletrica' },
      { label: 'Inspeção',   href: '#eletrica' },
    ],
  },
  {
    titulo: 'INSTITUTO ↗',
    classe: 'accent-instituto',
    href: '/instituto',
    itens: [
      { label: 'Cursos Ex',     href: '/instituto' },
      { label: 'IRATA / NRs',   href: '/instituto' },
      { label: 'Certificações', href: '/instituto' },
    ],
  },
  {
    titulo: 'BASE DE APOIO ↗',
    classe: 'accent-logistica',
    href: '/logistica',
    itens: [
      { label: 'Armazenagem',           href: '/logistica' },
      { label: 'Movimentação de carga', href: '/logistica' },
      { label: 'Áreas para alugar',     href: '/logistica' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__cols">
        <div>
          <Link href="#topo" className="brand brand--logo brand--logo-footer">
            <Image
              src="/assets/logos/lifting-eletrica-logo-branco.png"
              alt="Lifting Electric & Instrumentation"
              width={240}
              height={46}
            />
          </Link>
          <p className="site-footer__about">
            Especializada em serviços offshore, navais e industriais — {SITE.grupo.endereco}.{' '}
            {SITE.grupo.isos}.
          </p>
        </div>

        {COLUNAS.map(col => (
          <nav className="footer-col" key={col.titulo}>
            <Link
              className={`footer-col__title ${col.classe}`}
              href={col.href}
              target="_blank"
              rel="noopener"
            >
              {col.titulo}
            </Link>
            {col.itens.map(item => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="site-footer__bar">
        <span>© 2026 Grupo Lifting</span>
        <span>Energia · Conhecimento · Movimento</span>
      </div>
    </footer>
  )
}

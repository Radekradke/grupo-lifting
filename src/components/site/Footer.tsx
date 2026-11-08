import Link from 'next/link'
import Image from 'next/image'

type Canal = { label: string; href: string; externo?: boolean }

type Props = {
  marca: { tipo: 'logo'; src: string; alt: string; width: number; height: number } | { tipo: 'texto'; nome: string }
  sobre: string
  canais: Canal[]
  endereco: string
  direita: string
}

const EMPRESAS = [
  { nome: 'Lifting Elétrica', href: '/eletrica', cor: 'var(--green)' },
  { nome: 'Instituto Lifting', href: '/instituto', cor: 'var(--navy)' },
  { nome: 'Lifting Logistic', href: '/logistica', cor: 'var(--teal)' },
]

export function Footer({ marca, sobre, canais, endereco, direita }: Props) {
  return (
    <footer className="ftr" id="rodape">
      <div className="container">
        <div className="ftr__grid">
          <div className="ftr__marca">
            {marca.tipo === 'logo' ? (
              <Image src={marca.src} alt={marca.alt} width={marca.width} height={marca.height} />
            ) : (
              <span className="ftr__wordmark">{marca.nome}</span>
            )}
            <p>{sobre}</p>
          </div>

          <nav className="ftr__col" aria-label="Empresas do grupo">
            <h3>Grupo Lifting</h3>
            <Link href="/">Início</Link>
            {EMPRESAS.map(e => (
              <Link key={e.href} href={e.href} className="ftr__empresa" style={{ '--d': e.cor } as React.CSSProperties}>
                <i aria-hidden="true" /> {e.nome}
              </Link>
            ))}
          </nav>

          <div className="ftr__col">
            <h3>Contato</h3>
            {canais.map(c => (
              <a key={c.href} href={c.href} {...(c.externo ? { target: '_blank', rel: 'noopener' } : {})}>
                {c.label}
              </a>
            ))}
          </div>

          <div className="ftr__col">
            <h3>Onde estamos</h3>
            <p>{endereco}</p>
            <p>Saída pela terra e pelo mar.</p>
          </div>
        </div>

        <div className="ftr__bar">
          <span>© {new Date().getFullYear()} Grupo Lifting. Todos os direitos reservados.</span>
          <span className="tri" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{direita}</span>
        </div>
      </div>
    </footer>
  )
}

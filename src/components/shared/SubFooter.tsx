import Link from 'next/link'
import Image from 'next/image'

export type Canal = { label: string; href: string; externo?: boolean }

type SubFooterProps = {
  titulo?: string
  logo?: { src: string; alt: string; width: number; height: number }
  intro: string
  canais: Canal[]
  onde: string
  barraEsquerda: string
  barraDireita: string
}

export function SubFooter({
  titulo,
  logo,
  intro,
  canais,
  onde,
  barraEsquerda,
  barraDireita,
}: SubFooterProps) {
  return (
    <footer id="contato" className="sub-footer">
      <div className="sub-footer__inner">
        <div className="sub-footer__block">
          {logo ? (
            <Image
              className="sub-footer__logo"
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ) : (
            <h2>{titulo ?? 'Contato'}</h2>
          )}
          <p>{intro}</p>
        </div>

        <div className="sub-footer__block">
          <h3>CANAIS</h3>
          {canais.map(c => (
            <a
              key={c.href}
              href={c.href}
              {...(c.externo ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {c.label}
            </a>
          ))}
        </div>

        <div className="sub-footer__block">
          <h3>ONDE ESTAMOS</h3>
          <p>{onde}</p>
          <Link href="/">← Voltar ao Grupo Lifting</Link>
        </div>
      </div>

      <div className="sub-footer__bar">
        <span>{barraEsquerda}</span>
        <span>{barraDireita}</span>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Contador } from './Contador'

type Props = {
  empresa: string
  rotulo: string
  titulo: string
  lead: string
  imagem: { src: string; alt: string; posicao?: string }
  acoes: React.ReactNode
  fatos?: readonly { valor: string; label: string }[]
}

/** Hero dos sub-sites: foto real em tela cheia, tingida pela cor da empresa. */
export function PageHero({ empresa, rotulo, titulo, lead, imagem, acoes, fatos }: Props) {
  return (
    <section id="topo" className="phero" aria-labelledby="phero-titulo">
      <Image
        className="phero__img"
        src={imagem.src}
        alt={imagem.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: imagem.posicao ?? 'center' }}
      />
      <div className="phero__shade" aria-hidden="true" />

      <div className="container phero__inner">
        <nav className="phero__crumb" aria-label="Você está em">
          <Link href="/">Grupo Lifting</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{empresa}</span>
        </nav>
        <p className="label">{rotulo}</p>
        <h1 id="phero-titulo" className="t-h1 phero__titulo">{titulo}</h1>
        <p className="t-lead">{lead}</p>
        <div className="btn-row">{acoes}</div>
      </div>

      {fatos && fatos.length > 0 && (
        <div className="phero__fatos">
          <div className="container">
            <dl style={{ '--n': fatos.length } as React.CSSProperties}>
              {fatos.map(f => (
                <div key={f.valor}>
                  <dt>{f.label}</dt>
                  <dd>
                    <Contador valor={f.valor} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </section>
  )
}

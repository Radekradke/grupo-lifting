import Image from 'next/image'

type FramedProps = {
  variante: 'eletrica' | 'logistica'
  legenda: string
  src?: string
  alt?: string
  className?: string
}

export function Framed({ variante, legenda, src, alt, className = '' }: FramedProps) {
  const base = `framed framed--${variante}${className ? ` ${className}` : ''}`

  if (!src) {
    return <figure className={`${base} framed--empty`}>{legenda}</figure>
  }

  return (
    <figure className={base}>
      <Image
        src={src}
        alt={alt ?? legenda}
        fill
        sizes="(max-width: 1000px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
      />
    </figure>
  )
}

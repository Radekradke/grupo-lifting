type SubWorkProps = {
  id?: string
  eyebrow: string
  titulo: string
  texto: string
  botao: { label: string; href: string }
}

export function SubWork({ id = 'trabalhe', eyebrow, titulo, texto, botao }: SubWorkProps) {
  return (
    <section id={id} className="sub-section sub-work">
      <div className="sub-section__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{titulo}</h2>
          <p className="lead">{texto}</p>
        </div>
        <a href={botao.href} className="btn">{botao.label}</a>
      </div>
    </section>
  )
}

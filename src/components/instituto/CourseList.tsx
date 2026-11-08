import { CURSOS, CATEGORIAS, type Curso } from '@/data/instituto'
import { SITE } from '@/data/site'

type Props = {
  cursos?: readonly Curso[]
  /** WhatsApp do Instituto (só números, com DDI) */
  whatsapp?: string
}

// Valores não são exibidos no site: cada curso leva a uma conversa no WhatsApp.
function linkWhatsapp(whatsapp: string, curso: string) {
  const msg = `Olá! Quero informações sobre valores e próximas turmas do curso "${curso}".`
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`
}

export function CourseList({ cursos = CURSOS, whatsapp = SITE.instituto.whatsapp }: Props) {
  return (
    <>
      <div className="course-cats" aria-hidden="true">
        {CATEGORIAS.map(c => (
          <span className="course-cat" key={c}>
            <span className="course-cat__dot">●</span> {c}
          </span>
        ))}
      </div>

      <div className="course-list">
        {cursos.map(curso => (
          <details className="course-item" key={curso.idx} open={curso.aberto}>
            <summary>
              <span className="course-item__idx">{curso.idx}</span>
              <span className="course-item__head">
                <h3>{curso.titulo}</h3>
                <span className="course-item__cat">{curso.categoria}</span>
              </span>
              <span className="course-item__load">{curso.carga}</span>
              <span className="course-item__chev" aria-hidden="true" />
            </summary>

            <div className="course-item__panel">
              <p className="course-item__desc">{curso.desc}</p>

              {curso.unidades && (
                <ul className="unit-list">
                  {curso.unidades.map(u => (
                    <li key={u.titulo}>
                      <span>
                        {u.codigo && <span className="unit-list__code">{u.codigo}</span>}
                        {u.titulo}
                      </span>
                      <span>{u.carga ?? ''}</span>
                    </li>
                  ))}
                </ul>
              )}

              {curso.normas && (
                <div className="norm-tags">
                  {curso.normas.map(n => (
                    <span className="norm-tag" key={n}>{n}</span>
                  ))}
                </div>
              )}

              <a
                className="btn course-item__cta"
                href={linkWhatsapp(whatsapp, curso.titulo)}
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.6 28l6.3-1.6c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.3 12-11.9C28 8.3 22.6 3 16 3zm0 22.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.7 1 1-3.6-.3-.4c-1.1-1.6-1.7-3.5-1.7-5.5 0-5.5 4.7-9.9 10.5-9.9 2.8 0 5.4 1 7.4 2.9 2 1.9 3.1 4.4 3.1 7 0 5.5-4.7 9.9-10.5 9.9zm5.8-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.2 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
                </svg>
                CONSULTAR VALORES E TURMAS NO WHATSAPP
              </a>
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

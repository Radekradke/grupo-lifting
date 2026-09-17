import { CURSOS, CATEGORIAS } from '@/data/instituto'

export function CourseList() {
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
        {CURSOS.map(curso => (
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
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

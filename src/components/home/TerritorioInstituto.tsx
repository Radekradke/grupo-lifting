import Link from 'next/link'

export function TerritorioInstituto() {
  return (
    <section id="instituto" className="territory territory--instituto">
      <div className="territory__inner-wide">
        <div className="instituto__head">
          <div>
            <p className="eyebrow accent-instituto">02 · INSTITUTO LIFTING</p>
            <h2 className="territory__title">
              Formação técnica que nasceu dentro da operação.
            </h2>
          </div>
          <p className="lead">
            Centro de treinamento dentro da base: cursos e capacitação técnica
            criados por quem vive a operação naval e industrial todos os dias.
          </p>
        </div>

        <div className="course-grid">
          <figure className="course-photo framed--empty">
            Foto: sala de treinamento / prática em bancada
          </figure>

          <div className="course course--dark">
            <span className="course__tag">FORMAÇÃO</span>
            <div>
              <h3>Áreas Classificadas (Ex)</h3>
              <p>Instalação, inspeção, manutenção e reparo Ex</p>
            </div>
          </div>

          <div className="course course--light">
            <span className="course__tag">FORMAÇÃO</span>
            <div>
              <h3>IRATA N1 · N2 · N3</h3>
              <p>Acesso por cordas · NR-35 e NR-18</p>
            </div>
          </div>

          <div className="course course--light">
            <span className="course__tag">DESENVOLVIMENTO</span>
            <div>
              <h3>Termografia &amp; instrumentação</h3>
              <p>Manutenção preditiva e medição elétrica</p>
            </div>
          </div>

          <div className="course course--accent">
            <span className="course__tag">PRÓXIMAS TURMAS</span>
            <div>
              <h3>Inscrições abertas</h3>
              <Link
                href="/instituto"
                target="_blank"
                rel="noopener"
                className="text-link text-link--onaccent"
              >
                VER AGENDA ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { STATS } from '@/data/home'

export function Manifesto() {
  return (
    <section id="grupo" className="manifesto">
      <div>
        <p className="eyebrow">O GRUPO</p>
        <h2 className="manifesto__title">
          Energia, conhecimento e movimento —{' '}
          <span className="accent-eletrica">três braços</span>, um mesmo compromisso
          com quem opera de verdade.
        </h2>
      </div>

      <div className="manifesto__aside">
        <p className="lead">
          Localizada estrategicamente na Baía de Guanabara e certificada ISO 9001,
          ISO 14001 e ISO 45001, a Lifting cresceu em três direções complementares:
          executa, forma e movimenta. Cada empresa tem identidade própria — mas
          todas carregam o mesmo padrão técnico, do atendimento inicial à conclusão
          do serviço.
        </p>

        <div className="stats">
          {STATS.map(s => (
            <div className="stats__item" key={s.label}>
              <span className={`stats__num ${s.classe}`}>{s.num}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

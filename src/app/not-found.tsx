import Link from 'next/link'

export default function NaoEncontrado() {
  return (
    <main className="nf theme-grupo">
      <div className="nf__inner">
        <p className="nf__cod">Erro 404</p>
        <h1 className="t-h1">Página não encontrada.</h1>
        <p className="t-lead">O endereço pode ter mudado. Escolha por onde seguir:</p>
        <span className="tri" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <nav className="nf__links" aria-label="Empresas do grupo">
          <Link className="btn btn--light" href="/">Grupo Lifting</Link>
          <Link className="btn btn--ghost-light" href="/eletrica">Elétrica</Link>
          <Link className="btn btn--ghost-light" href="/instituto">Instituto</Link>
          <Link className="btn btn--ghost-light" href="/logistica">Logística</Link>
        </nav>
      </div>
    </main>
  )
}

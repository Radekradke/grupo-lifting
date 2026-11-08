'use client'
import { useMemo, useState } from 'react'
import type { Curso } from '@/data/instituto'
import { Icon, WhatsappIcon } from '@/components/site/Icon'
import { wa } from '@/lib/links'

const FILTROS = [
  { id: 'todos', label: 'Todos' },
  { id: 'ex', label: 'Áreas classificadas (Ex)' },
  { id: 'eletrica', label: 'Elétrica & instrumentação' },
  { id: 'altura', label: 'Trabalho em altura' },
  { id: 'desenvolvimento', label: 'Desenvolvimento & in company' },
] as const

type FiltroId = (typeof FILTROS)[number]['id']

// A categoria vem em texto livre (dados estáticos ou painel); agrupa por palavra-chave.
function grupoDe(categoria: string): Exclude<FiltroId, 'todos'> {
  const c = categoria.toUpperCase()
  if (c.includes('CLASSIFICADA')) return 'ex'
  if (c.includes('ALTURA') || c.includes('IRATA')) return 'altura'
  if (c.includes('ELÉTRICA') || c.includes('ELETRICA') || c.includes('INSTRUMENTA')) {
    return c.includes('IN COMPANY') ? 'desenvolvimento' : 'eletrica'
  }
  return 'desenvolvimento'
}

/** Lista de cursos com filtro por área. Valores não são exibidos: cada curso leva ao WhatsApp. */
export function Cursos({ cursos, whatsapp }: { cursos: readonly Curso[]; whatsapp: string }) {
  const [filtro, setFiltro] = useState<FiltroId>('todos')
  const [trocou, setTrocou] = useState(false)

  const contagem = useMemo(() => {
    const n: Record<string, number> = { todos: cursos.length }
    for (const c of cursos) n[grupoDe(c.categoria)] = (n[grupoDe(c.categoria)] ?? 0) + 1
    return n
  }, [cursos])

  const visiveis = filtro === 'todos' ? cursos : cursos.filter(c => grupoDe(c.categoria) === filtro)

  return (
    <>
      <div className="filtros" role="group" aria-label="Filtrar cursos por área">
        {FILTROS.filter(f => (contagem[f.id] ?? 0) > 0).map(f => (
          <button key={f.id} type="button" className="filtro" aria-pressed={filtro === f.id} onClick={() => {
              setFiltro(f.id)
              setTrocou(true)
            }}>
            {f.label}
            <small>{contagem[f.id]}</small>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visiveis.length} {visiveis.length === 1 ? 'curso' : 'cursos'} na lista
      </p>

      <div className="cursos" key={filtro} data-anim={trocou || undefined}>
        {visiveis.map((curso, i) => (
          <details
            className="curso"
            key={curso.idx + curso.titulo}
            open={curso.aberto}
            style={{ '--i': Math.min(i, 8) } as React.CSSProperties}
          >
            <summary>
              <span>
                <span className="curso__cat">{curso.categoria}</span>
                <h3 className="curso__titulo">{curso.titulo}</h3>
              </span>
              <span className="curso__meta">
                <span className="curso__carga">{curso.carga}</span>
                <span className="curso__chev" aria-hidden="true">
                  <Icon name="chevron-down" />
                </span>
              </span>
            </summary>

            <div className="curso__painel">
              <p className="curso__desc">{curso.desc}</p>

              {curso.unidades && curso.unidades.length > 0 && (
                <ul className="unidades">
                  {curso.unidades.map(u => (
                    <li key={u.titulo}>
                      <span>
                        {u.codigo && <code>{u.codigo}</code>}
                        {u.titulo}
                      </span>
                      <span>{u.carga ?? ''}</span>
                    </li>
                  ))}
                </ul>
              )}

              {curso.normas && curso.normas.length > 0 && (
                <div className="tags">
                  {curso.normas.map(n => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}

              <a
                className="btn btn--wpp"
                href={wa(whatsapp, `Olá! Quero informações sobre valores e próximas turmas do curso "${curso.titulo}".`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsappIcon /> Consultar valores e turmas no WhatsApp
              </a>
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

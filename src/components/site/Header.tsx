'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import type { NavItem } from '@/data/types'

export type Marca =
  | { tipo: 'logo'; src: string; srcClaro: string; alt: string; width: number; height: number }
  | { tipo: 'texto'; nome: string; sub?: string }

type Props = {
  marca: Marca
  nav: NavItem[]
  cta: { label: string; href: string }
  /** Mostra o atalho de volta para a home do grupo (sub-sites). */
  voltarGrupo?: boolean
  contato?: string[]
}

export function Header({ marca, nav, cta, voltarGrupo = false, contato = [] }: Props) {
  const [rolou, setRolou] = useState(false)
  const [oculto, setOculto] = useState(false)
  const [ativo, setAtivo] = useState<string | null>(null)
  const [aberto, setAberto] = useState(false)
  const botao = useRef<HTMLButtonElement>(null)
  const painel = useRef<HTMLDivElement>(null)

  const fechar = useCallback(() => setAberto(false), [])

  // Fundo sólido após sair do topo; some ao rolar para baixo e volta ao subir.
  // Reage direto no evento (sem esperar o próximo quadro): em aparelho lento,
  // quadros atrasados faziam a direção da rolagem se perder.
  useEffect(() => {
    let ultimo = window.scrollY
    const medir = () => {
      const y = window.scrollY
      setRolou(y > 24)
      if (y < 160) setOculto(false)
      else if (y > ultimo + 8) setOculto(true)
      else if (y < ultimo - 8) setOculto(false)
      if (Math.abs(y - ultimo) > 8 || y < 160) ultimo = y
    }
    medir()
    window.addEventListener('scroll', medir, { passive: true })
    return () => window.removeEventListener('scroll', medir)
  }, [])

  // Marca no menu a seção que está no meio da tela.
  useEffect(() => {
    const alvos = nav
      .filter(i => i.href.startsWith('#'))
      .map(i => document.getElementById(i.href.slice(1)))
      .filter((el): el is HTMLElement => !!el)
    if (!alvos.length) return
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) if (e.isIntersecting) setAtivo(`#${e.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    alvos.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [nav])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', aberto)
    if (!aberto) return
    // foca o 1º link depois que o painel fica visível (antes disso ele não é focável)
    const t = window.setTimeout(() => painel.current?.querySelector<HTMLElement>('a')?.focus(), 80)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botao.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [aberto])

  // Ao virar desktop com o menu aberto, fecha (evita página travada).
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px)')
    const onChange = () => mq.matches && setAberto(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const externo = cta.href.startsWith('http')
  const n = (i: number) => ({ '--i': i }) as React.CSSProperties // ordem da cascata no menu mobile
  const base = voltarGrupo ? 1 : 0

  return (
    <header
      className="hdr"
      data-solid={rolou || aberto || undefined}
      data-open={aberto || undefined}
      data-hidden={(oculto && !aberto) || undefined}
      onFocusCapture={() => setOculto(false)}
    >
      <div className="hdr__bar container">
        <Link href={voltarGrupo ? '#topo' : '/'} className="hdr__brand" aria-label={`${marca.tipo === 'logo' ? marca.alt : marca.nome} — início`}>
          {marca.tipo === 'logo' ? (
            <>
              <Image className="hdr__logo hdr__logo--claro" src={marca.srcClaro} alt="" width={marca.width} height={marca.height} priority />
              <Image className="hdr__logo hdr__logo--cor" src={marca.src} alt="" width={marca.width} height={marca.height} priority />
            </>
          ) : (
            <span className="hdr__wordmark">
              <span>
                {marca.nome}
                {marca.sub && <small>{marca.sub}</small>}
              </span>
            </span>
          )}
        </Link>

        <nav className="hdr__nav" aria-label="Navegação principal">
          {voltarGrupo && (
            <Link className="hdr__back" href="/">
              ← Grupo Lifting
            </Link>
          )}
          {nav.map(item => (
            <a key={item.href} href={item.href} aria-current={ativo === item.href ? 'location' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--sm hdr__cta" href={cta.href} {...(externo ? { target: '_blank', rel: 'noopener' } : {})}>
          {cta.label}
        </a>

        <button
          ref={botao}
          type="button"
          className="hdr__toggle"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto(a => !a)}
        >
          <span className="hdr__burger" aria-hidden="true" />
        </button>
      </div>

      <div id="menu-mobile" ref={painel} className="hdr__panel" inert={!aberto}>
        <nav className="container" aria-label="Menu">
          {voltarGrupo && (
            <Link href="/" onClick={fechar} style={n(0)}>
              Grupo Lifting <Icon name="arrow-right" />
            </Link>
          )}
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} onClick={fechar} style={n(base + i)}>
              {item.label} <Icon name="arrow-right" />
            </a>
          ))}
          <a className="btn" href={cta.href} onClick={fechar} style={n(base + nav.length)} {...(externo ? { target: '_blank', rel: 'noopener' } : {})}>
            {cta.label}
          </a>
          {contato.length > 0 && (
            <div className="hdr__panel-contato" style={n(base + nav.length + 1)}>
              {contato.map(c => (
                <span key={c}>{c}</span>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

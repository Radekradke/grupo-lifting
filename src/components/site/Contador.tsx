'use client'
import { useEffect, useRef } from 'react'

// "10.000 m²" -> prefixo "", número 10000, sufixo " m²". Aceita "+30", "30+", "150 m²", "12".
const PADRAO = /^(\+?)(\d{1,3}(?:\.\d{3})+|\d+)(.*)$/s

/**
 * Número que conta até o valor quando entra na tela.
 * O HTML já sai com o valor final (sem JS ou com movimento reduzido, fica assim).
 */
export function Contador({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const m = valor.match(PADRAO)
    if (!el || !m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const [, pre, num, suf] = m
    const alvo = parseInt(num.replace(/\./g, ''), 10)
    if (!alvo) return

    const fmt = (n: number) => `${pre}${n.toLocaleString('pt-BR')}${suf}`
    let raf = 0
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const dur = Math.min(1600, 700 + alvo * 4)
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur)
          el.textContent = fmt(Math.round(alvo * (1 - Math.pow(1 - p, 4)))) // desacelera no fim
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        el.textContent = fmt(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    // fora da tela: já começa em zero, para o valor final não "piscar" antes da contagem
    if (el.getBoundingClientRect().top > window.innerHeight) el.textContent = fmt(0)
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = valor
    }
  }, [valor])

  return <span ref={ref}>{valor}</span>
}

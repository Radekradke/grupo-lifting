'use client'
import { useEffect } from 'react'

const SELECTOR = [
  '.manifesto > div', '.stats__item',
  '.territory__text', '.framed', '.instituto__head > *',
  '.service', '.course', '.course-photo', '.feature-list li',
  '.video-band__inner > *', '.cta__inner',
  '.sub-section__inner > *', '.what-card', '.partner-ph', '.partner-logo',
  '.photo-ph', '.framed-photo', '.stat-band__item', '.struct-card',
  '.course-item', '.cert-card', '.gallery__item',
].join(', ')

export function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach(el => {
      el.classList.add('rv')
      const idx = Array.prototype.indexOf.call(el.parentNode?.children ?? [], el)
      el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}

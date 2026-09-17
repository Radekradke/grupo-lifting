'use client'
import dynamic from 'next/dynamic'

// ssr:false garante que o Studio (e o pacote `sanity`) só carregue no browser.
const StudioInner = dynamic(() => import('./StudioInner'), { ssr: false })

export default function StudioClient() {
  return <StudioInner />
}

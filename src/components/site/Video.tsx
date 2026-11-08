'use client'
import { useState } from 'react'

/**
 * Vídeo institucional. A seção só é renderizada pela página quando existe URL
 * (cadastrada no painel /studio → Vídeos). O iframe só carrega após o clique.
 */
export function Video({ src, titulo }: { src: string; titulo: string }) {
  const [tocando, setTocando] = useState(false)
  const url = `${src}${src.includes('?') ? '&' : '?'}autoplay=1`

  return (
    <div className="video">
      {tocando ? (
        <iframe src={url} title={titulo} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
      ) : (
        <button type="button" className="video__play" onClick={() => setTocando(true)} aria-label={`Assistir: ${titulo}`}>
          <span aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

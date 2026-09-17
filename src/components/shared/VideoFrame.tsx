'use client'
import { useState } from 'react'

type Props = {
  /** URL de EMBED, ex.: https://www.youtube.com/embed/ID */
  src?: string
  note: string
}

export function VideoFrame({ src, note }: Props) {
  const [playing, setPlaying] = useState(false)
  const [nag, setNag] = useState(false)

  function handleClick() {
    if (playing) return
    if (!src) {
      setNag(false)
      requestAnimationFrame(() => setNag(true))
      return
    }
    setPlaying(true)
  }

  const autoplaySrc = src ? `${src}${src.includes('?') ? '&' : '?'}autoplay=1` : ''

  return (
    <div
      className={`video-frame${nag ? ' video-frame--nag' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setNag(false)}
    >
      {playing ? (
        <iframe
          src={autoplaySrc}
          title="Vídeo"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <button className="video-frame__play" type="button" aria-label="Assistir vídeo">
            <span />
          </button>
          <p className="video-frame__note">{note}</p>
        </>
      )}
    </div>
  )
}

import { VideoFrame } from '@/components/shared/VideoFrame'

export function VideoBand({ src }: { src?: string }) {
  return (
    <section id="video" className="video-band">
      <div className="video-band__inner">
        <p className="eyebrow">O GRUPO EM MOVIMENTO</p>
        <h2 className="video-band__title">Veja a operação de perto.</h2>
        <VideoFrame
          src={src}
          note="Vídeo institucional do Grupo Lifting — informe a URL de embed no painel (/studio → Vídeos)"
        />
      </div>
    </section>
  )
}

import { SiteHeader }          from '@/components/home/SiteHeader'
import { HeroTriptico }        from '@/components/home/HeroTriptico'
import { Manifesto }           from '@/components/home/Manifesto'
import { VideoBand }           from '@/components/home/VideoBand'
import { TerritorioEletrica }  from '@/components/home/TerritorioEletrica'
import { TerritorioInstituto } from '@/components/home/TerritorioInstituto'
import { TerritorioLogistica } from '@/components/home/TerritorioLogistica'
import { CtaFinal }            from '@/components/home/CtaFinal'
import { SiteFooter }          from '@/components/home/SiteFooter'
import { ScrollReveal }        from '@/components/shared/ScrollReveal'
import { WppFloat }            from '@/components/shared/WppFloat'
import { getSite, getVideos }  from '@/sanity/content'

export default async function HomePage() {
  const [site, videos] = await Promise.all([getSite(), getVideos()])

  return (
    <div className="page theme-grupo">
      <SiteHeader />

      <main>
        <HeroTriptico />
        <Manifesto />
        <VideoBand src={videos.home} />
        <TerritorioEletrica />
        <TerritorioInstituto />
        <TerritorioLogistica />
        <CtaFinal grupo={site.grupo} />
      </main>

      <SiteFooter grupo={site.grupo} />

      <WppFloat phone={site.grupo.whatsapp} />
      <ScrollReveal />
    </div>
  )
}

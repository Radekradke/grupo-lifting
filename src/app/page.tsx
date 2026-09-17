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
import { SITE }                from '@/data/site'

export default function HomePage() {
  return (
    <div className="page theme-grupo">
      <SiteHeader />

      <main>
        <HeroTriptico />
        <Manifesto />
        <VideoBand />
        <TerritorioEletrica />
        <TerritorioInstituto />
        <TerritorioLogistica />
        <CtaFinal />
      </main>

      <SiteFooter />

      <WppFloat phone={SITE.grupo.whatsapp} />
      <ScrollReveal />
    </div>
  )
}

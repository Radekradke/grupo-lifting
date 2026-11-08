import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { Contato } from '@/components/site/Contato'
import { Reveal } from '@/components/site/Reveal'
import { Wpp } from '@/components/site/Wpp'
import { Video } from '@/components/site/Video'
import { Icon, WhatsappIcon } from '@/components/site/Icon'
import { Hero } from '@/components/home/Hero'
import { Fatos, Grupo } from '@/components/home/Grupo'
import { BlocoEletrica, BlocoInstituto, BlocoLogistica, Clientes } from '@/components/home/Empresas'
import { NAV_HOME } from '@/data/home'
import { getSite, getVideos, getParceiros } from '@/sanity/content'
import { wa, mail } from '@/lib/links'

export default async function HomePage() {
  const [site, videos, clientesInst, clientesLog] = await Promise.all([
    getSite(),
    getVideos(),
    getParceiros('instituto'),
    getParceiros('cliente'),
  ])
  const g = site.grupo
  const msg = 'Olá! Vim pelo site do Grupo Lifting e gostaria de falar com a equipe.'

  // clientes das empresas do grupo, sem repetir
  const vistos = new Set<string>()
  const clientes = [...clientesInst, ...clientesLog].filter(c => !vistos.has(c.nome) && vistos.add(c.nome))

  return (
    <div className="page theme-grupo">
      <Header
        marca={{
          tipo: 'logo',
          src: '/assets/logos/lifting-eletrica-logo.png',
          srcClaro: '/assets/logos/lifting-eletrica-logo-branco.png',
          alt: 'Grupo Lifting',
          width: 734,
          height: 213,
        }}
        nav={NAV_HOME}
        cta={{ label: 'Fale com o grupo', href: '#contato' }}
        contato={[g.telefone, g.email]}
      />

      <main id="conteudo">
        <Hero />
        <Fatos />
        <Grupo />

        {videos.home && (
          <section className="section section--dark" aria-labelledby="video-titulo">
            <div className="container" style={{ display: 'grid', gap: 36 }}>
              <div className="section-head on-dark" style={{ marginBottom: 0 }}>
                <p className="label">O grupo em movimento</p>
                <h2 id="video-titulo" className="t-h2">Veja a operação de perto.</h2>
              </div>
              <Video src={videos.home} titulo="Vídeo institucional do Grupo Lifting" />
            </div>
          </section>
        )}

        <BlocoEletrica />
        <BlocoInstituto />
        <BlocoLogistica />
        <Clientes logos={clientes} />

        <Contato
          rotulo="Contato"
          titulo="Qual força a sua operação precisa agora?"
          texto="Fale com o grupo e a gente direciona para a empresa certa — ou para as três."
          acoes={
            <>
              <a className="btn btn--wpp" href={wa(g.whatsapp, msg)} target="_blank" rel="noopener">
                <WhatsappIcon /> Falar no WhatsApp
              </a>
              <a className="btn btn--ghost-light" href={mail(g.email, 'Contato pelo site — Grupo Lifting')}>
                Enviar e-mail <Icon name="arrow-right" className="ico-arrow" />
              </a>
            </>
          }
          canais={[
            { tipo: 'whatsapp', rotulo: 'WhatsApp', valor: g.telefone, href: wa(g.whatsapp, msg) },
            { tipo: 'phone', rotulo: 'Telefone', valor: g.telefone, href: g.telefoneHref },
            { tipo: 'mail', rotulo: 'E-mail', valor: g.email, href: mail(g.email) },
            { tipo: 'pin', rotulo: 'Base', valor: g.endereco },
          ]}
        />
      </main>

      <Footer
        marca={{ tipo: 'logo', src: '/assets/logos/lifting-eletrica-logo-branco.png', alt: 'Grupo Lifting', width: 734, height: 213 }}
        sobre="Serviços elétricos, formação técnica e base logística para quem opera no mar e na indústria."
        canais={[
          { label: g.telefone, href: g.telefoneHref },
          { label: g.email, href: mail(g.email) },
          { label: 'WhatsApp', href: wa(g.whatsapp, msg), externo: true },
        ]}
        endereco={g.endereco}
        direita={g.isos}
      />

      <Wpp telefone={g.whatsapp} mensagem={msg} />
      <Reveal />
    </div>
  )
}

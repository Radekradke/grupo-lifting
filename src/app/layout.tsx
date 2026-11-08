import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

// Archivo variável com eixo de largura: a mesma família faz o display
// (expandido, industrial) e o texto corrido (largura normal).
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--ff-archivo',
  display: 'swap',
})

// Mono só para dado técnico: códigos de curso, normas, metragens, rótulos.
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--ff-mono',
  display: 'swap',
})

// URL pública: defina NEXT_PUBLIC_SITE_URL no domínio final; na Vercel usa o domínio de produção.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Grupo Lifting — Um grupo. Três forças.',
    template: '%s · Grupo Lifting',
  },
  description:
    'Grupo Lifting: serviços elétricos navais, offshore e industriais, Instituto de capacitação técnica (Ex, IRATA, NRs) e base logística de 10.000 m² na Baía de Guanabara.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Grupo Lifting',
    images: [{ url: '/assets/grupo/sede.jpg', width: 2000, height: 1333 }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0C1611',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca o documento como "com JS": as animações de entrada só escondem
            conteúdo quando há JS para revelá-lo depois. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  )
}

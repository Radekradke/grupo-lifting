import type { Metadata } from 'next'
import { Space_Grotesk, Archivo } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--fd-space',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ft-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Grupo Lifting — Um grupo. Três forças.',
  description:
    'Grupo Lifting: serviços elétricos navais/offshore, Instituto de capacitação técnica e Base de Apoio logística na Baía de Guanabara.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  )
}

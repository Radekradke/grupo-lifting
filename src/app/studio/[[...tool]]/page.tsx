/**
 * Painel do Sanity embutido em /studio.
 * O cliente acessa seusite.com.br/studio, faz login e edita o conteúdo.
 *
 * O Studio é totalmente client-side: ele é carregado via StudioClient
 * (dynamic import com ssr:false), então o pacote `sanity` nunca é avaliado
 * no servidor durante o build.
 */
import StudioClient from './StudioClient'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <StudioClient />
}

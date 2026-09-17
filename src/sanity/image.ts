import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from './env'

const builder = imageUrlBuilder({ projectId, dataset })

/** Gera a URL de uma imagem do Sanity (com corte/otimização automáticos). */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

// Camada de acesso ao conteúdo.
// Se o Sanity estiver configurado (hasSanity), busca de lá; caso contrário,
// (ou se der erro / vier vazio) devolve os dados estáticos de src/data.
// Assim o site nunca quebra e "liga" no CMS assim que o projectId existir.
import { groq } from 'next-sanity'
import { sanityClient } from './client'
import { urlForImage } from './image'
import { hasSanity } from './env'
import { SITE } from '@/data/site'
import { CURSOS as CURSOS_STATIC, type Curso } from '@/data/instituto'
import { CLIENTES as CLIENTES_STATIC, GALERIA as GALERIA_STATIC } from '@/data/logistica'

/* ---------- Contato (siteSettings) ---------- */
export type Contato = {
  grupo: {
    nome: string; telefone: string; telefoneHref: string; email: string
    whatsapp: string; endereco: string; isos: string
  }
  instituto: {
    nome: string; telefone: string; telefoneHref: string; email: string
    whatsapp: string; instagram: string; instagramLabel: string
  }
  logistica: { instagram: string; instagramLabel: string }
}

const SITE_FALLBACK: Contato = {
  grupo: { ...SITE.grupo },
  instituto: { ...SITE.instituto },
  logistica: { ...SITE.logistica },
}

export async function getSite(): Promise<Contato> {
  if (!hasSanity) return SITE_FALLBACK
  try {
    const doc = await sanityClient.fetch<Partial<Contato> | null>(
      groq`*[_type == "siteSettings"][0]{grupo, instituto, logistica}`
    )
    if (!doc) return SITE_FALLBACK
    return {
      grupo: { ...SITE_FALLBACK.grupo, ...(doc.grupo ?? {}) },
      instituto: { ...SITE_FALLBACK.instituto, ...(doc.instituto ?? {}) },
      logistica: { ...SITE_FALLBACK.logistica, ...(doc.logistica ?? {}) },
    }
  } catch {
    return SITE_FALLBACK
  }
}

/* ---------- Cursos (Instituto) ---------- */
export async function getCursos(): Promise<Curso[]> {
  if (!hasSanity) return [...CURSOS_STATIC]
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = await sanityClient.fetch<any[]>(groq`*[_type == "curso"] | order(ordem asc){
      titulo, categoria, carga, desc, aberto,
      unidades[]{codigo, titulo, carga},
      normas
    }`)
    if (!rows?.length) return [...CURSOS_STATIC]
    return rows.map((r, i) => ({
      idx: String(i + 1).padStart(2, '0'),
      titulo: r.titulo ?? '',
      categoria: r.categoria ?? '',
      carga: r.carga ?? '',
      desc: r.desc ?? '',
      aberto: r.aberto ?? false,
      unidades: r.unidades ?? undefined,
      normas: r.normas ?? undefined,
    }))
  } catch {
    return [...CURSOS_STATIC]
  }
}

/* ---------- Parceiros / Clientes (logos) ---------- */
export type LogoItem = { nome: string; src: string; site?: string }

const CLIENTES_FALLBACK: LogoItem[] = CLIENTES_STATIC.map(c => ({ nome: c.alt, src: c.src }))

export async function getParceiros(tipo: 'cliente' | 'parceiro'): Promise<LogoItem[]> {
  const fallback = tipo === 'cliente' ? CLIENTES_FALLBACK : []
  if (!hasSanity) return fallback
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = await sanityClient.fetch<any[]>(
      groq`*[_type == "parceiro" && tipo == $tipo] | order(ordem asc){nome, site, logo}`,
      { tipo }
    )
    if (!rows?.length) return fallback
    return rows.map(r => ({
      nome: r.nome ?? '',
      site: r.site ?? undefined,
      src: urlForImage(r.logo).width(400).fit('max').url(),
    }))
  } catch {
    return fallback
  }
}

/* ---------- Galeria (Logística) ---------- */
export type FotoItem = { src: string; alt: string; legenda: string; wide?: boolean }

const GALERIA_FALLBACK: FotoItem[] = GALERIA_STATIC.map(g => ({
  src: g.src, alt: g.alt, legenda: g.legenda, wide: g.wide ?? false,
}))

export async function getGaleria(): Promise<FotoItem[]> {
  if (!hasSanity) return GALERIA_FALLBACK
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = await sanityClient.fetch<any[]>(
      groq`*[_type == "foto"] | order(ordem asc){imagem, legenda, destaque}`
    )
    if (!rows?.length) return GALERIA_FALLBACK
    return rows.map(r => ({
      src: urlForImage(r.imagem).width(1200).url(),
      alt: r.imagem?.alt ?? r.legenda ?? '',
      legenda: r.legenda ?? '',
      wide: r.destaque ?? false,
    }))
  } catch {
    return GALERIA_FALLBACK
  }
}

/* ---------- Vídeos ---------- */
export type Videos = { home?: string; eletrica?: string; instituto?: string; logistica?: string }

export async function getVideos(): Promise<Videos> {
  if (!hasSanity) return {}
  try {
    const doc = await sanityClient.fetch<Videos | null>(
      groq`*[_type == "videos"][0]{home, eletrica, instituto, logistica}`
    )
    return doc ?? {}
  } catch {
    return {}
  }
}

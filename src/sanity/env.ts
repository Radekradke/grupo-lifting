// Configuração de ambiente do Sanity.
// Enquanto NEXT_PUBLIC_SANITY_PROJECT_ID não estiver definido, hasSanity = false
// e o site continua lendo os dados estáticos de src/data (fallback).

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

/** true quando o Sanity está realmente configurado (projectId presente). */
export const hasSanity = Boolean(rawProjectId)

/** Sempre uma string não-vazia, para o Studio não quebrar sem config. */
export const projectId = rawProjectId || 'placeholder'

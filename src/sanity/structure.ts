import type { StructureResolver } from 'sanity/structure'

// Menu do painel: os dois "singletons" (Configurações e Vídeos) aparecem como
// itens únicos; o resto como listas de documentos.
export const structure: StructureResolver = S =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Configurações do site')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Vídeos')
        .id('videos')
        .child(S.document().schemaType('videos').documentId('videos')),
      S.divider(),
      S.documentTypeListItem('curso').title('Cursos'),
      S.documentTypeListItem('parceiro').title('Parceiros / Clientes'),
      S.documentTypeListItem('foto').title('Galeria (Logística)'),
    ])

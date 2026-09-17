import { defineField, defineType } from 'sanity'

export const foto = defineType({
  name: 'foto',
  title: 'Foto da galeria (Logística)',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
      validation: r => r.required(),
      fields: [
        defineField({ name: 'alt', title: 'Texto alternativo (acessibilidade)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'legenda',
      title: 'Legenda',
      type: 'string',
    }),
    defineField({
      name: 'destaque',
      title: 'Ocupar espaço grande (2x)?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de exibição',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Ordem', name: 'ordemAsc', by: [{ field: 'ordem', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'legenda', media: 'imagem' },
  },
})

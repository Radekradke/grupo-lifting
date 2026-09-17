import { defineField, defineType } from 'sanity'

export const parceiro = defineType({
  name: 'parceiro',
  title: 'Parceiro / Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: r => r.required(),
    }),
    defineField({
      name: 'tipo',
      title: 'Onde aparece',
      type: 'string',
      options: {
        list: [
          { title: 'Cliente (Logística)', value: 'cliente' },
          { title: 'Parceiro (Elétrica)', value: 'parceiro' },
        ],
        layout: 'radio',
      },
      initialValue: 'cliente',
      validation: r => r.required(),
    }),
    defineField({
      name: 'site',
      title: 'Site (opcional)',
      type: 'url',
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
    select: { title: 'nome', subtitle: 'tipo', media: 'logo' },
  },
})

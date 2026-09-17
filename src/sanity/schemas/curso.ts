import { defineArrayMember, defineField, defineType } from 'sanity'

export const curso = defineType({
  name: 'curso',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'ordem',
      title: 'Ordem de exibição',
      type: 'number',
      description: 'Menor aparece primeiro.',
    }),
    defineField({
      name: 'titulo',
      title: 'Título do curso',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria (linha de cima do card)',
      type: 'string',
      description: 'Ex.: ÁREAS CLASSIFICADAS · APERFEIÇOAMENTO',
    }),
    defineField({
      name: 'carga',
      title: 'Carga horária (etiqueta)',
      type: 'string',
      description: 'Ex.: 40h, Consultar, N1 · N2 · N3',
    }),
    defineField({
      name: 'valor',
      title: 'Valor / investimento (opcional)',
      type: 'string',
      description: 'Ex.: R$ 1.200 ou "Consultar". Deixe vazio para não exibir.',
    }),
    defineField({
      name: 'aberto',
      title: 'Deixar aberto/destacado na lista?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'desc',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'unidades',
      title: 'Unidades / módulos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'codigo', title: 'Código (opcional)', type: 'string' }),
            defineField({ name: 'titulo', title: 'Título da unidade', type: 'string', validation: r => r.required() }),
            defineField({ name: 'carga', title: 'Carga (opcional)', type: 'string' }),
          ],
          preview: {
            select: { title: 'titulo', subtitle: 'codigo' },
          },
        }),
      ],
    }),
    defineField({
      name: 'normas',
      title: 'Normas / etiquetas',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Aparecem como tags ao pé do curso.',
    }),
  ],
  orderings: [
    { title: 'Ordem', name: 'ordemAsc', by: [{ field: 'ordem', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'categoria' },
  },
})

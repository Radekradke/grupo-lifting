import { defineField, defineType } from 'sanity'

export const videos = defineType({
  name: 'videos',
  title: 'Vídeos',
  type: 'document',
  description: 'URLs de embed (ex.: https://www.youtube.com/embed/ID) por página.',
  fields: [
    defineField({ name: 'home', title: 'Home — vídeo institucional', type: 'url' }),
    defineField({ name: 'eletrica', title: 'Elétrica — apresentação', type: 'url' }),
    defineField({ name: 'instituto', title: 'Instituto — apresentação', type: 'url' }),
    defineField({ name: 'logistica', title: 'Logística — apresentação', type: 'url' }),
  ],
  preview: {
    prepare: () => ({ title: 'Vídeos das páginas' }),
  },
})

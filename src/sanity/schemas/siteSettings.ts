import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configurações do site',
  type: 'document',
  fields: [
    defineField({
      name: 'grupo',
      title: 'Grupo Lifting — contato',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'telefone', title: 'Telefone (exibido)', type: 'string' }),
        defineField({ name: 'telefoneHref', title: 'Telefone (link tel:)', type: 'string' }),
        defineField({ name: 'email', title: 'E-mail', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp (só números, com DDI)', type: 'string' }),
        defineField({ name: 'endereco', title: 'Endereço', type: 'string' }),
        defineField({ name: 'isos', title: 'Certificações ISO (texto)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'instituto',
      title: 'Instituto — contato',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'telefone', title: 'Telefone (exibido)', type: 'string' }),
        defineField({ name: 'telefoneHref', title: 'Telefone (link tel:)', type: 'string' }),
        defineField({ name: 'email', title: 'E-mail', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp (só números, com DDI)', type: 'string' }),
        defineField({ name: 'instagram', title: 'Instagram (URL)', type: 'url' }),
        defineField({ name: 'instagramLabel', title: 'Instagram (@)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'logistica',
      title: 'Logística — contato',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'instagram', title: 'Instagram (URL)', type: 'url' }),
        defineField({ name: 'instagramLabel', title: 'Instagram (@)', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Configurações do site' }),
  },
})

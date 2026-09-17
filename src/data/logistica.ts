import type { WhatItem } from '@/components/shared/WhatGrid'

export const NUMEROS: readonly WhatItem[] = [
  { num: 'ÁREA TOTAL', titulo: '10.000 m²',          desc: 'Base operacional completa em localização privilegiada' },
  { num: 'ACESSO',     titulo: 'Terra + Mar',        desc: 'Saída pela terra e pelo mar, com movimentação no píer' },
  { num: 'SETORES',    titulo: 'Óleo, Gás e Energia',desc: 'Suporte a operações vinculadas ao Repetro' },
]

export const ESTRUTURA: readonly WhatItem[] = [
  { num: '01', titulo: 'Armazenagem',              desc: 'Galpões operacionais, oficinas e áreas de armazenagem para materiais e equipamentos.' },
  { num: '02', titulo: 'Movimentação de carga',    desc: 'Movimentação no píer com caminhão Munck, empilhadeira e mini escavadeira.' },
  { num: '03', titulo: 'Espaços para locação',     desc: 'Escritórios, galpão de 300 m², salas de reunião e auditório.' },
  { num: '04', titulo: 'Infraestrutura corporativa', desc: 'Suporte administrativo e estrutura completa para o desenvolvimento das atividades.' },
  { num: '05', titulo: 'Suporte Repetro',          desc: 'Suporte logístico e estrutural para operações dos setores de óleo, gás e energia.' },
  { num: '06', titulo: 'Espaços em comum',         desc: 'Refeitório, área gourmet e vestiários para as equipes residentes.' },
]

export const ESPACOS: readonly WhatItem[] = [
  { num: 'LOCAÇÃO', titulo: 'Escritórios',              desc: 'Salas comerciais mobiliadas, para uso permanente ou temporário.' },
  { num: 'LOCAÇÃO', titulo: 'Galpão 300 m²',            desc: 'Armazenagem coberta para maquinários, materiais e containers.' },
  { num: 'LOCAÇÃO', titulo: 'Salas de reunião',         desc: 'Ambientes equipados para reuniões e encontros de trabalho.' },
  { num: 'LOCAÇÃO', titulo: 'Auditório',                desc: 'Espaço para treinamentos, integrações e eventos corporativos.' },
  { num: 'COMUM',   titulo: 'Refeitório e área gourmet',desc: 'Espaços de convivência para as equipes residentes na base.' },
  { num: 'COMUM',   titulo: 'Vestiários',               desc: 'Vestiários completos com armários para as equipes operacionais.' },
]

export const GALERIA = [
  { src: '/assets/log/dsc0103.jpg',    alt: 'Pátio operacional com empilhadeira de grande porte', legenda: 'Pátio operacional — movimentação com empilhadeira', wide: true },
  { src: '/assets/log/containers.jpeg',alt: 'Containers na área de armazenagem',                  legenda: 'Área de containers' },
  { src: '/assets/log/galpao.png',     alt: 'Interior de galpão para locação',                    legenda: 'Galpão de 300 m² para locação' },
  { src: '/assets/log/wa-1.jpeg',      alt: 'Mini escavadeira em operação na base',               legenda: 'Operação na base — mini escavadeira' },
  { src: '/assets/log/img-1.png',      alt: 'Escritórios com vista para a Baía de Guanabara',     legenda: 'Escritórios com vista para a baía' },
] as const

export const CLIENTES = [
  { src: '/assets/logos/cliente-4subsea.png', alt: '4Subsea' },
  { src: '/assets/logos/cliente-vms.jpg',     alt: 'VMS Group' },
  { src: '/assets/logos/cliente-var7.png',    alt: 'Instituto VAR 7' },
] as const

export const NAV_LOGISTICA = [
  { label: 'QUEM SOMOS', href: '#sobre'    },
  { label: 'ESTRUTURA',  href: '#oque'     },
  { label: 'REPETRO',    href: '#repetro'  },
  { label: 'ESPAÇOS',    href: '#espacos'  },
  { label: 'CLIENTES',   href: '#parceiros'},
  { label: 'CONTATO',    href: '#contato'  },
]

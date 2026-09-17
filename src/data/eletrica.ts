import type { WhatItem } from '@/components/shared/WhatGrid'

export const SERVICOS: readonly WhatItem[] = [
  { num: '01', titulo: 'Reparo',              desc: 'Calibração, reposição e substituição de peças e equipamentos, com planejamento para redução de paradas.' },
  { num: '02', titulo: 'Manutenção',          desc: 'Preventiva, preditiva e corretiva em painéis elétricos, disjuntores, relés, máquinas rotativas e mais.' },
  { num: '03', titulo: 'Instalação',          desc: 'Equipamentos e acessórios em unidades offshore e onshore, com equipe técnica e planejamento.' },
  { num: '04', titulo: 'Inspeção',            desc: 'Adequação NR-10, NR-12, termográfica e de áreas classificadas Ex, com relatórios técnicos.' },
  { num: '05', titulo: 'Serviços especiais',  desc: 'Acesso por cordas (N1, N2 e N3), laboratório móvel, injeção de corrente e serviços em fibra ótica.' },
  { num: '06', titulo: 'Painéis e motores',   desc: 'Montagem, vendas e manutenção de painéis; rebobinagem e tratamento de motores e transformadores.' },
]

export const NAV_ELETRICA = [
  { label: 'SOBRE NÓS',        href: '#sobre'    },
  { label: 'O QUE FAZEMOS',    href: '#oque'     },
  { label: 'PARCEIROS',        href: '#parceiros'},
  { label: 'TRABALHE CONOSCO', href: '#trabalhe' },
  { label: 'CONTATO',          href: '#contato'  },
]

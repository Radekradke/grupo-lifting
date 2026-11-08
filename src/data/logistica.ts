import type { WhatItem } from '@/data/types'

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

export type GaleriaItem = { src: string; alt: string; legenda: string; wide?: boolean }

export const GALERIA: readonly GaleriaItem[] = [
  { src: '/assets/log/patio-empilhadeira.jpg',    alt: 'Pátio operacional com empilhadeira de grande porte e o prédio principal ao fundo', legenda: 'Pátio operacional — movimentação com empilhadeira', wide: true },
  { src: '/assets/log/galpao-300m2.jpg',          alt: 'Interior do galpão de 300 m² disponível para locação',  legenda: 'Galpão de 300 m² para locação' },
  { src: '/assets/log/containers.jpg',            alt: 'Fileira de containers na área de armazenagem',          legenda: 'Área de containers' },
  { src: '/assets/log/patio-escavadeira.jpg',     alt: 'Mini escavadeira em frente aos galpões operacionais',    legenda: 'Galpões operacionais e mini escavadeira' },
  { src: '/assets/log/escritorio-vista-baia.jpg', alt: 'Escritório com estações de trabalho e vista para a Baía de Guanabara', legenda: 'Escritórios com vista para a baía' },
  { src: '/assets/log/auditorio.jpg',             alt: 'Auditório com poltronas e tela de apresentação',         legenda: 'Auditório' },
  { src: '/assets/log/refeitorio.jpg',            alt: 'Refeitório amplo e iluminado, com mesas compridas',      legenda: 'Refeitório' },
  { src: '/assets/log/copa.jpg',                  alt: 'Copa equipada com micro-ondas, geladeira e bancada',     legenda: 'Área gourmet e copa' },
  { src: '/assets/log/vestiario.jpg',             alt: 'Vestiário com armários individuais e pias',             legenda: 'Vestiários' },
]

export const CLIENTES = [
  { src: '/assets/logos/cliente-4subsea.png', alt: '4Subsea' },
  { src: '/assets/logos/cliente-vms.jpg',     alt: 'VMS Group' },
] as const

export const NAV_LOGISTICA = [
  { label: 'Quem somos', href: '#sobre' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Espaços', href: '#espacos' },
  { label: 'Repetro', href: '#repetro' },
  { label: 'Contato', href: '#contato' },
]

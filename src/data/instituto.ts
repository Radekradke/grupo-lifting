import type { WhatItem } from '@/components/shared/WhatGrid'

export const NAV_INSTITUTO = [
  { label: 'QUEM SOMOS',    href: '#sobre'         },
  { label: 'DIFERENCIAIS',  href: '#diferenciais'  },
  { label: 'ESTRUTURA',     href: '#estrutura'     },
  { label: 'CURSOS',        href: '#cursos'        },
  { label: 'CERTIFICAÇÕES', href: '#certificacoes' },
  { label: 'CONTATO',       href: '#contato'       },
]

export const NUMEROS = [
  { num: '+30',    label: 'anos de experiência da Lifting em formação técnica' },
  { num: '+100',   label: 'equipamentos “Ex” para treinamento prático real'    },
  { num: '150 m²', label: 'de centro de treinamento com pé-direito de 9 m'     },
  { num: '12',     label: 'dormitórios climatizados no alojamento próprio'     },
] as const

export const DIFERENCIAIS: readonly WhatItem[] = [
  { num: '01', titulo: 'Ensino de alta qualidade',          desc: 'Professores com experiência de campo. Instrução que vai muito além da teoria.' },
  { num: '02', titulo: 'Acesso a todos',                    desc: 'Toda turma conta com uma vaga de bolsa integral — 100% gratuita.' },
  { num: '03', titulo: 'Laboratórios práticos e teóricos',  desc: 'Tecnologia de ponta, com o que há de mais novo no mercado industrial.' },
  { num: '04', titulo: 'Investimento no orçamento',         desc: 'Valores que cabem no bolso do aluno, sem abrir mão da qualidade técnica.' },
]

export type StructCard = {
  tag: string
  titulo: string
  desc: string
  img?: { src: string; alt: string }
  variante?: 'text' | 'accent'
}

export const ESTRUTURA: readonly StructCard[] = [
  {
    tag: 'PRÁTICA REAL',
    titulo: 'Laboratórios',
    desc: 'Mais de 100 equipamentos “Ex” para vivenciar instalação, inspeção e manutenção em atmosferas explosivas.',
    img: { src: '/assets/inst/termografia-2.jpg', alt: 'Alunos em treinamento prático com câmera termográfica' },
  },
  {
    tag: '150 m² · 9 M DE PÉ-DIREITO',
    titulo: 'Centro de Treinamento',
    desc: 'Múltiplas plataformas para trabalho em altura e acesso por cordas, com equipamentos calibrados e certificados.',
    img: { src: '/assets/inst/ct-irata-3.jpg', alt: 'Centro de treinamento com plataformas e linhas de acesso por cordas' },
  },
  {
    tag: 'VISTA PARA A BAÍA',
    titulo: 'Auditório',
    desc: 'Climatizado, com recursos audiovisuais, acústica planejada e área de coffee break — vista da Baía de Guanabara.',
    img: { src: '/assets/inst/auditorio-1.jpg', alt: 'Auditório do Instituto de Ensino Lifting' },
  },
  {
    tag: 'CONFORTO',
    titulo: 'Salas de aula',
    desc: 'Ambientes amplos e climatizados, com recursos audiovisuais de alta performance e mobiliário ergonômico.',
    variante: 'text',
  },
  {
    tag: 'PRODUÇÃO',
    titulo: 'Estúdio',
    desc: 'Espaço audiovisual para gravação de aulas, treinamentos corporativos, podcasts e conteúdo institucional.',
    variante: 'accent',
  },
  {
    tag: '12 DORMITÓRIOS',
    titulo: 'Alojamento & convivência',
    desc: 'Dormitórios climatizados, armários individuais, copa, banheiros e área de lazer para os participantes.',
    img: { src: '/assets/inst/gourmet.jpg', alt: 'Área de convivência e alojamento do Instituto' },
  },
]

export const CATEGORIAS = [
  'Áreas Classificadas (Ex)',
  'Elétrica & Instrumentação',
  'Trabalho em Altura & NRs',
  'Desenvolvimento',
] as const

export type Unidade = { codigo?: string; titulo: string; carga?: string }

export type Curso = {
  idx: string
  titulo: string
  categoria: string
  carga: string
  desc: string
  unidades?: readonly Unidade[]
  normas?: readonly string[]
  aberto?: boolean
}

export const CURSOS: readonly Curso[] = [
  {
    idx: '01',
    titulo: 'Instalação, Inspeção e Manutenção de Equipamentos Ex',
    categoria: 'ÁREAS CLASSIFICADAS · APERFEIÇOAMENTO',
    carga: '40h',
    aberto: true,
    desc: 'Formação completa para atuar com segurança em atmosferas explosivas, cobrindo desde os princípios de proteção Ex até inspeções detalhadas de equipamentos e instalações.',
    unidades: [
      { codigo: 'Ex 001', titulo: 'Princípios básicos de segurança em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 003', titulo: 'Instalação de equipamentos com tipos de proteção Ex e sistemas de fiação', carga: '8h' },
      { codigo: 'Ex 004', titulo: 'Manutenção de equipamentos em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 007', titulo: 'Inspeções visuais e apuradas de equipamentos e instalações', carga: '8h' },
      { codigo: 'Ex 008', titulo: 'Inspeções detalhadas de equipamentos ou instalações elétricas', carga: '8h' },
    ],
  },
  {
    idx: '02',
    titulo: 'Projeto, Instalação, Teste e Manutenção de Equipamentos Ex',
    categoria: 'ÁREAS CLASSIFICADAS · APERFEIÇOAMENTO',
    carga: '40h',
    desc: 'Trilha voltada a quem projeta e testa instalações elétricas em áreas classificadas, unindo fundamentos de proteção Ex, testes e projeto.',
    unidades: [
      { codigo: 'Ex 001', titulo: 'Princípios básicos de segurança em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 003', titulo: 'Instalação de equipamentos com tipos de proteção Ex e fiação', carga: '8h' },
      { codigo: 'Ex 004', titulo: 'Manutenção de equipamentos em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 006', titulo: 'Testes de equipamentos e instalações elétricas', carga: '8h' },
      { codigo: 'Ex 009', titulo: 'Projeto de instalações elétricas em atmosferas explosivas', carga: '8h' },
    ],
  },
  {
    idx: '03',
    titulo: 'Reparo e Revisão de Equipamentos Ex',
    categoria: 'ÁREAS CLASSIFICADAS · APERFEIÇOAMENTO',
    carga: '24h',
    desc: 'Especialização no reparo e revisão de equipamentos com tipos de proteção Ex, preservando a integridade da proteção após a intervenção.',
    unidades: [
      { codigo: 'Ex 001', titulo: 'Princípios básicos de segurança em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 005', titulo: 'Reparo e revisão de equipamentos com tipos de proteção Ex', carga: '16h' },
    ],
  },
  {
    idx: '04',
    titulo: 'Acionamento Eletrônico de Máquinas Elétricas',
    categoria: 'ELÉTRICA & INSTRUMENTAÇÃO · APERFEIÇOAMENTO',
    carga: 'Consultar',
    desc: 'Do fundamento à prática de campo em acionamentos eletrônicos: seleção, instalação, configuração, diagnóstico e manutenção.',
    unidades: [
      { titulo: 'Introdução aos acionamentos eletrônicos' },
      { titulo: 'Eletrônica de potência' },
      { titulo: 'Teoria de controle aplicada a acionamentos' },
      { titulo: 'Componentes dos acionamentos eletrônicos' },
      { titulo: 'Seleção, instalação e configuração de acionamentos' },
      { titulo: 'Diagnóstico e manutenção' },
      { titulo: 'Normas técnicas e segurança' },
    ],
  },
  {
    idx: '05',
    titulo: 'Aplicação de Instrumentos de Medição Elétrica',
    categoria: 'ELÉTRICA & INSTRUMENTAÇÃO · APERFEIÇOAMENTO',
    carga: 'Consultar',
    desc: 'Uso correto dos principais instrumentos de medição elétrica, com testes funcionais e aplicações reais do dia a dia do profissional.',
    unidades: [
      { titulo: 'Conceitos gerais e grandezas elétricas' },
      { titulo: 'Multímetro e amperímetro' },
      { titulo: 'Megômetro, micro-ohmímetro e terrômetro' },
      { titulo: 'Medidor de relação de transformação (TTR) e Hipot' },
      { titulo: 'Funções, escalas e testes funcionais dos instrumentos' },
      { titulo: 'Aplicações de campo no dia a dia do profissional' },
    ],
  },
  {
    idx: '06',
    titulo: 'IRATA N1, N2 e N3 — Acesso por Cordas',
    categoria: 'TRABALHO EM ALTURA & NRs · CERTIFICAÇÃO',
    carga: 'N1 · N2 · N3',
    desc: 'Certificação e revalidação para atividades de acesso por cordas nos níveis 1, 2 e 3, com o conteúdo normativo de segurança do trabalho em altura integrado.',
    unidades: [
      { titulo: 'Certificação e revalidação de pessoas — níveis 1, 2 e 3', carga: 'IRATA' },
      { titulo: 'Trabalho em Altura', carga: 'NR-35' },
      { titulo: 'Segurança e Saúde no Trabalho na Indústria da Construção', carga: 'NR-18' },
    ],
    normas: [
      'ABNT NBR 15475 — Qualificação e certificação de pessoas',
      'ABNT NBR 15595 — Procedimento para aplicação do método',
      'ABNT NBR 15986 — Cordas de baixo coeficiente de alongamento',
    ],
  },
  {
    idx: '07',
    titulo: 'Termografia Aplicada a Instalações Elétricas',
    categoria: 'ELÉTRICA & INSTRUMENTAÇÃO · APERFEIÇOAMENTO',
    carga: 'Consultar',
    desc: 'Da teoria à interpretação de imagens e laudos: manutenção preditiva por termografia em instalações elétricas, inclusive com termovisores “Ex”.',
    unidades: [
      { titulo: 'Introdução à termografia e funcionamento das câmeras' },
      { titulo: 'Aplicações e interpretação de imagens termográficas' },
      { titulo: 'Critérios para escolha da câmera termográfica' },
      { titulo: 'Normas de segurança e boas práticas' },
      { titulo: 'Manutenção preditiva e pós-processamento de imagens' },
      { titulo: 'Estudos de caso e análise de laudos técnicos' },
      { titulo: 'Avaliação de modelos de termovisores, inclusive “Ex”' },
    ],
  },
  {
    idx: '08',
    titulo: 'Palestras, Workshops e Mentorias',
    categoria: 'DESENVOLVIMENTO PROFISSIONAL E PESSOAL',
    carga: 'Programas',
    desc: 'Além dos treinamentos técnicos, programas de desenvolvimento com aplicação imediata na carreira — e conteúdos voltados ao bem-estar das equipes.',
    unidades: [
      { titulo: 'Liderança, gestão de negócios e gestão financeira' },
      { titulo: 'Empreendedorismo e comunicação assertiva' },
      { titulo: 'Desenvolvimento de equipes de alta performance' },
      { titulo: 'Saúde mental, inteligência emocional e qualidade de vida' },
    ],
  },
  {
    idx: '09',
    titulo: 'Treinamentos sob medida — Elétrica & Instrumentação',
    categoria: 'IN COMPANY · PERSONALIZADO',
    carga: 'Sob demanda',
    desc: 'Ampla gama de treinamentos técnicos de Elétrica e Instrumentação, com conteúdos, metodologias e cargas horárias personalizados às necessidades operacionais e normativas da sua empresa — por adaptação de cursos existentes ou criação de programas exclusivos.',
    normas: ['Conteúdo personalizado', 'Carga horária flexível', 'Na sua planta ou em nosso centro'],
  },
]

export const CERTIFICACOES = [
  {
    k: 'RECONHECIMENTO',
    titulo: 'ABENDI',
    desc: 'Reconhecido pela Associação Brasileira de Ensaios Não Destrutivos e Inspeção, referência nacional em qualificação técnica de inspeção.',
  },
  {
    k: 'CERTIFICAÇÃO INTERNACIONAL',
    titulo: 'IRATA International',
    desc: 'Centro certificado para formação e certificação em acesso por cordas nos níveis 1, 2 e 3, com padrão reconhecido mundialmente.',
  },
  {
    k: 'NORMAS TÉCNICAS',
    titulo: 'NRs & ABNT NBR',
    desc: 'Conteúdos alinhados às NR-35 e NR-18 e às normas ABNT NBR 15475, 15595 e 15986 para acesso por cordas.',
  },
] as const

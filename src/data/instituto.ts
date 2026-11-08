import type { WhatItem } from '@/data/types'

export const NAV_INSTITUTO = [
  { label: 'Quem somos', href: '#sobre' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
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
    tag: 'MAIS DE 100 EQUIPAMENTOS “EX”',
    titulo: 'Laboratórios',
    desc: 'Ambientes que reproduzem cenários reais da indústria para praticar instalação, inspeção e manutenção em atmosferas explosivas.',
    img: { src: '/assets/inst/laboratorio.jpg', alt: 'Laboratório com painéis e equipamentos Ex para treinamento prático' },
  },
  {
    tag: '150 m² · 9 M DE PÉ-DIREITO',
    titulo: 'Centro de Treinamento',
    desc: 'Múltiplas plataformas para trabalho em altura e acesso por cordas, com equipamentos calibrados e certificados.',
    img: { src: '/assets/inst/centro-treinamento.jpg', alt: 'Centro de treinamento com estruturas e linhas de acesso por cordas' },
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
    img: { src: '/assets/inst/sala-aula.jpg', alt: 'Sala de aula climatizada com carteiras e TV' },
  },
  {
    tag: 'PRODUÇÃO AUDIOVISUAL',
    titulo: 'Estúdio',
    desc: 'Gravação de aulas, treinamentos corporativos, podcasts, vídeos institucionais e conteúdo para redes sociais.',
    img: { src: '/assets/inst/estudio.jpg', alt: 'Estúdio de gravação com iluminação profissional e poltronas' },
  },
  {
    tag: '12 DORMITÓRIOS',
    titulo: 'Alojamento',
    desc: 'Dormitórios climatizados, armários individuais, banheiros, área de lazer e copa equipada para os participantes.',
    img: { src: '/assets/inst/alojamento.jpg', alt: 'Dormitório do alojamento com beliches' },
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
    carga: '42h · 5 dias',
    aberto: true,
    desc: 'Qualifica o aluno para instalação, inspeção e manutenção de equipamentos à prova de explosão em indústrias químicas, petroquímicas, plataformas de petróleo, silos de grãos, indústrias têxteis e usinas de açúcar. Pré-requisito: formação em Elétrica, Mecânica, Instrumentação ou Automação.',
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
    carga: '24h · 3 dias',
    desc: 'Para quem projeta e testa instalações elétricas em áreas classificadas: ensaios de isolação, aterramento e proteção, seleção de equipamentos Ex e projeto de instalações conforme as normas ABNT NBR IEC 60079. Pré-requisito: formação em Elétrica, Mecânica, Instrumentação ou Automação.',
    unidades: [
      { codigo: 'Ex 006', titulo: 'Testes de equipamentos e instalações elétricas em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 009', titulo: 'Projeto de instalações elétricas em atmosferas explosivas', carga: '8h' },
    ],
  },
  {
    idx: '03',
    titulo: 'Reparo e Revisão de Equipamentos Ex',
    categoria: 'ÁREAS CLASSIFICADAS · APERFEIÇOAMENTO',
    carga: '25h · 3 dias',
    desc: 'Especialização no reparo e revisão de equipamentos com tipos de proteção Ex — requisitos da oficina, recuperação, reenrolamento, medições e registros —, preservando a integridade da proteção após a intervenção. Pré-requisito: formação em Elétrica, Mecânica, Instrumentação ou Automação.',
    unidades: [
      { codigo: 'Ex 001', titulo: 'Princípios básicos de segurança em atmosferas explosivas', carga: '8h' },
      { codigo: 'Ex 005', titulo: 'Reparo e revisão de equipamentos com tipos de proteção Ex', carga: '16h' },
    ],
  },
  {
    idx: '04',
    titulo: 'Fundamentos para Eletrotécnico Offshore',
    categoria: 'ELÉTRICA & INSTRUMENTAÇÃO · FORMAÇÃO',
    carga: '42h · 5 dias',
    desc: 'Prepara profissionais para atuação segura e qualificada em plataformas e embarcações, unindo fundamentação teórica sólida à prática aplicada às exigências do setor offshore. Pré-requisito: formação em Elétrica.',
    unidades: [
      { codigo: 'Módulo 1', titulo: 'Eletricidade básica — grandezas, Lei de Ohm, circuitos série e paralelo, CC e CA, mono e trifásico' },
      { codigo: 'Módulo 2', titulo: 'Leitura de diagramas elétricos — escala, simbologia elétrica e de instrumentação, P&ID' },
      { codigo: 'Módulo 3', titulo: 'Instrumentos de medição e ferramentas de uso offshore' },
      { codigo: 'Módulo 4', titulo: 'Sistema elétrico de potência — geradores, motores, transformadores, distribuição, aterramento e proteção' },
      { codigo: 'Módulo 5', titulo: 'Sistemas de automação e controle — SCADA, CLPs e arquiteturas de controle' },
      { codigo: 'Módulo 6', titulo: 'Risco offshore — zonas, equipamentos Ex, prensa-cabos e eletrocalhas' },
      { codigo: 'Módulo 7', titulo: 'Segurança offshore — NR-10, NR-37, NR-35 e NR-33' },
    ],
    normas: ['ABNT NBR IEC 61892', 'ABNT NBR 5410', 'IEC 61131-3', 'NR-10', 'NR-37'],
  },
  {
    idx: '05',
    titulo: 'IRATA Nível 1 — Acesso por Cordas',
    categoria: 'TRABALHO EM ALTURA · CERTIFICAÇÃO INTERNACIONAL',
    carga: '40h + prova',
    desc: 'Qualifica para trabalho em altura, posicionamento e resgate industrial com técnicas de acesso por cordas. O profissional N1 atua sob supervisão em inspeção, manutenção, montagem e limpeza industrial — em óleo e gás, energia eólica, mineração, construção civil e telecomunicações. Certificação reconhecida internacionalmente.',
    unidades: [
      { titulo: 'Conteúdo teórico — normas, avaliação de riscos, ancoragens, fator de queda e inspeção de equipamentos', carga: '8h' },
      { titulo: 'Conteúdo prático — ascensão, descensão, transferências, progressão horizontal, auto-resgate e resgate', carga: '32h' },
      { titulo: 'Exame prático e teórico IRATA', carga: '5º dia' },
    ],
    normas: ['Pré-requisito: ASO para trabalho em altura'],
  },
  {
    idx: '06',
    titulo: 'IRATA Nível 2 — Acesso por Cordas',
    categoria: 'TRABALHO EM ALTURA · CERTIFICAÇÃO INTERNACIONAL',
    carga: '40h + prova',
    desc: 'O profissional N2 executa e supervisiona atividades de acesso por cordas, realiza operações de resgate e monta sistemas mais complexos. Atua em inspeções, manutenção, ensaios não destrutivos e projetos industriais, Onshore e Offshore.',
    unidades: [
      { titulo: 'Conteúdo teórico', carga: '8h' },
      { titulo: 'Conteúdo prático — resgates e sistemas avançados de acesso por cordas', carga: '32h' },
      { titulo: 'Exame prático e teórico IRATA', carga: '5º dia' },
    ],
    normas: ['Pré-requisito: ASO para trabalho em altura', '1.000 h + 12 meses comprovados em logbook'],
  },
  {
    idx: '07',
    titulo: 'IRATA Nível 3 — Acesso por Cordas',
    categoria: 'TRABALHO EM ALTURA · CERTIFICAÇÃO INTERNACIONAL',
    carga: '48h + prova',
    desc: 'O nível mais alto da certificação: o profissional N3 planeja, supervisiona e gerencia operações de acesso por cordas, garantindo a segurança das equipes e a conformidade com os procedimentos IRATA. Atua como supervisor de campo em projetos industriais, offshore, energia, mineração e construção civil.',
    unidades: [
      { titulo: 'Conteúdo teórico', carga: '8h' },
      { titulo: 'Conteúdo prático — planejamento, supervisão e resgate', carga: '32h' },
      { titulo: 'Exame prático e teórico IRATA', carga: '5º dia' },
    ],
    normas: ['Pré-requisito: ASO para trabalho em altura', '2.500 h + 30 meses comprovados em logbook'],
  },
  {
    idx: '08',
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
    idx: '09',
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
    idx: '10',
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
    idx: '11',
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
    idx: '12',
    titulo: 'Treinamentos sob medida — Elétrica & Instrumentação',
    categoria: 'IN COMPANY · PERSONALIZADO',
    carga: 'Sob demanda',
    desc: 'Ampla gama de treinamentos técnicos de Elétrica e Instrumentação, com conteúdos, metodologias e cargas horárias personalizados às necessidades operacionais e normativas da sua empresa — por adaptação de cursos existentes ou criação de programas exclusivos.',
    normas: ['Conteúdo personalizado', 'Carga horária flexível', 'Na sua planta ou em nosso centro'],
  },
]

export type Certificacao = {
  k: string
  titulo: string
  desc: string
  logo?: { src: string; alt: string }
}

export const CERTIFICACOES: readonly Certificacao[] = [
  {
    k: 'RECONHECIMENTO',
    titulo: 'ABENDI',
    desc: 'Reconhecido pela Associação Brasileira de Ensaios Não Destrutivos e Inspeção, referência nacional em qualificação técnica de inspeção.',
    logo: { src: '/assets/logos/cert-abendi.png', alt: 'ABENDI' },
  },
  {
    k: 'CERTIFICAÇÃO INTERNACIONAL',
    titulo: 'IRATA International',
    desc: 'Centro certificado para formação e certificação em acesso por cordas nos níveis 1, 2 e 3, com padrão reconhecido mundialmente.',
    logo: { src: '/assets/logos/cert-irata.png', alt: 'IRATA International' },
  },
  {
    k: 'NORMAS TÉCNICAS',
    titulo: 'NRs & ABNT NBR',
    desc: 'Conteúdos alinhados às NR-35 e NR-18 e às normas ABNT NBR 15475, 15595 e 15986 para acesso por cordas.',
  },
]

export const CLIENTES_INSTITUTO = [
  { src: '/assets/logos/inst-cliente-petrobras.png',    alt: 'Petrobras' },
  { src: '/assets/logos/inst-cliente-modec.png',        alt: 'MODEC' },
  { src: '/assets/logos/inst-cliente-jotun.png',        alt: 'Jotun' },
  { src: '/assets/logos/inst-cliente-baker-hughes.png', alt: 'Baker Hughes' },
  { src: '/assets/logos/inst-cliente-ecovis.png',       alt: 'Ecovis' },
  { src: '/assets/logos/inst-cliente-jevin.png',        alt: 'Jevin' },
  { src: '/assets/logos/inst-cliente-techocean.png',    alt: 'Grupo Techocean' },
] as const

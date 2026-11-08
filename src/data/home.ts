// Conteúdo da home. Textos vindos do material do cliente (apresentações e fichas).

export const PANEIS = [
  {
    id: 'eletrica',
    href: '/eletrica',
    kicker: 'Naval · Offshore · Industrial',
    nome: 'Lifting Elétrica',
    desc: 'Reparo, manutenção, instalação, inspeção e automação de equipamentos elétricos e eletrônicos — com equipe própria e certificada.',
    img: { src: '/assets/eletrica/termografia-painel.jpg', alt: 'Técnico da Lifting em inspeção termográfica de painel elétrico', pos: '62% 35%' },
  },
  {
    id: 'instituto',
    href: '/instituto',
    kicker: 'Ensino · Capacitação',
    nome: 'Instituto Lifting',
    desc: 'Formação em áreas classificadas (Ex), IRATA, NRs e termografia — reconhecido pela ABENDI e certificado pela IRATA International.',
    img: { src: '/assets/inst/instrutor-aluno.jpg', alt: 'Instrutor e aluno em aula prática no laboratório do Instituto', pos: '50% 28%' },
  },
  {
    id: 'logistica',
    href: '/logistica',
    kicker: 'Armazenagem · Logística',
    nome: 'Lifting Logistic',
    desc: '10.000 m² de base na Baía de Guanabara, com píer, galpões e escritórios — saída pela terra e pelo mar.',
    img: { src: '/assets/log/patio-empilhadeira.jpg', alt: 'Empilhadeira de grande porte no pátio operacional da base', pos: '72% 60%' },
  },
] as const

export const FATOS = [
  { valor: '30+', unidade: 'anos', label: 'de experiência da Lifting no setor naval, offshore e industrial' },
  { valor: '10.000', unidade: 'm²', label: 'de base operacional com píer na Baía de Guanabara' },
  { valor: 'ISO', unidade: '9001 · 14001 · 45001', label: 'qualidade, meio ambiente, saúde e segurança' },
  { valor: 'IRATA', unidade: '+ ABENDI', label: 'certificação e reconhecimento do Instituto Lifting' },
] as const

export const VERBOS = [
  { verbo: 'Executa', sub: 'Serviços elétricos e de automação — Lifting Elétrica', href: '/eletrica', cor: 'var(--green)' },
  { verbo: 'Forma', sub: 'Capacitação técnica e certificação — Instituto Lifting', href: '/instituto', cor: 'var(--navy)' },
  { verbo: 'Movimenta', sub: 'Armazenagem, carga e infraestrutura — Lifting Logistic', href: '/logistica', cor: 'var(--teal)' },
] as const

export const SERVICOS_ELETRICA = [
  { icone: 'wrench', titulo: 'Reparo', desc: 'Calibração, reposição e substituição com planejamento para reduzir paradas.' },
  { icone: 'pulse', titulo: 'Manutenção', desc: 'Preventiva, preditiva e corretiva em painéis, relés e máquinas rotativas.' },
  { icone: 'plug', titulo: 'Instalação', desc: 'Equipamentos e acessórios em unidades offshore e onshore.' },
  { icone: 'search', titulo: 'Inspeção', desc: 'NR-10, NR-12, termografia e áreas classificadas Ex, com relatório técnico.' },
] as const

export const DESTAQUES_INSTITUTO = [
  { nome: 'Instalação, inspeção e manutenção Ex', codigo: 'Ex 001–008' },
  { nome: 'Acesso por cordas IRATA', codigo: 'N1 · N2 · N3' },
  { nome: 'Fundamentos para Eletrotécnico Offshore', codigo: '42h' },
  { nome: 'Termografia e instrumentação', codigo: 'NR-10' },
] as const

export const NUMEROS_LOGISTICA = [
  { valor: '10.000 m²', label: 'Área total' },
  { valor: 'Terra + mar', label: 'Acesso com píer' },
  { valor: 'Repetro', label: 'Óleo, gás e energia' },
] as const

export const FEATURES_LOGISTICA = [
  'Movimentação de carga no píer com caminhão Munck, empilhadeira e mini escavadeira',
  'Galpões, oficinas e armazenagem — galpão de 300 m² para locação',
  'Escritórios, salas de reunião e auditório com vista para a baía',
] as const

export const NAV_HOME = [
  { label: 'O grupo', href: '#grupo' },
  { label: 'Elétrica', href: '#eletrica' },
  { label: 'Instituto', href: '#instituto' },
  { label: 'Logística', href: '#logistica' },
  { label: 'Contato', href: '#contato' },
]

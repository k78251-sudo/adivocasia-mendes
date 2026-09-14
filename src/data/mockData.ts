import { PracticeArea, TeamMember, Differential, InstitutionalTestimonial } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'direito-civil',
    title: 'Direito Civil & Contratos',
    shortDescription: 'Estruturação de negócios jurídicos, elaboração e revisão minuciosa de contratos civis e resolução técnica de controvérsias patrimoniais.',
    fullDescription: 'Atuação consultiva e contenciosa focada na segurança jurídica de transações patrimoniais e negociais. Desenvolvemos análises preventivas de riscos em instrumentos contratuais, além de representação qualificada em litígios civis estratégicos perante os Tribunais.',
    iconName: 'Scale',
    topics: [
      'Elaboração e auditoria de contratos civis complexos',
      'Responsabilidade civil e reparação de danos',
      'Controvérsias relativas a posse, propriedade e garantias',
      'Execução de títulos e recuperação judicial de créditos',
      'Resolução de disputas e mediação patrimonial'
    ],
    approach: 'Foco na prevenção de litígios por meio de cláusulas contratuais precisas e equilibradas, garantindo previsibilidade e proteção aos direitos das partes.'
  },
  {
    id: 'direito-empresarial',
    title: 'Direito Empresarial & Societário',
    shortDescription: 'Assessoria a sociedades empresárias em governança corporativa, constituição societária, acordos de sócios e reestruturações.',
    fullDescription: 'Suporte jurídico integral para o ciclo de vida empresarial. Acompanhamos desde a estruturação inicial e formulação de acordos de quotistas ou acionistas até operações de reorganização societária, visando resguardar a continuidade e a higidez das atividades econômicas.',
    iconName: 'Briefcase',
    topics: [
      'Elaboração de acordos de acionistas e contratos sociais',
      'Governança corporativa e compliance preventivo',
      'Assessoria em dissoluções societárias e apuração de haveres',
      'Análise de riscos em fusões e aquisições',
      'Defesa em contencioso societário e arbitragem'
    ],
    approach: 'Atuação orientada à preservação da atividade empresarial, mitigação de riscos de passivos e estabilidade nas relações entre sócios.'
  },
  {
    id: 'direito-trabalhista',
    title: 'Direito Trabalhista Corporativo',
    shortDescription: 'Consultoria preventiva para departamentos de recursos humanos, auditoria trabalhista e defesa em reclamações contenciosas.',
    fullDescription: 'Auxiliamos organizações a adequar suas rotinas e políticas internas à legislação laboral vigente e à jurisprudência consolidada, reduzindo passivos ocultos e oferecendo patrocínio responsável em reclamatórias trabalhistas de relevância estratégica.',
    iconName: 'Building2',
    topics: [
      'Auditoria trabalhista preventiva e adequação de rotinas',
      'Elaboração de planos de cargos, salários e políticas internas',
      'Defesa técnica em reclamações individuais e coletivas',
      'Negociações e relações sindicais com entidades de classe',
      'Orientação sobre normas regulamentadoras de saúde e segurança'
    ],
    approach: 'Privilegiamos o diagnóstico preventivo e o alinhamento com a jurisprudência para evitar contingências e otimizar custos trabalhistas.'
  },
  {
    id: 'direito-familia',
    title: 'Direito de Família & Sucessões',
    shortDescription: 'Condução discreta e ética de planejamentos sucessórios, inventários judiciais e extrajudiciais, e questões familiares sensíveis.',
    fullDescription: 'Atendimento pautado pela sensibilidade, serenidade e absoluto sigilo. Atuamos no planejamento patrimonial sucessório para preservação de bens familiares, bem como na condução de inventários, partilhas e acordos de família, priorizando sempre a via conciliatória quando cabível.',
    iconName: 'Users',
    topics: [
      'Planejamento sucessório e blindagem patrimonial lícita',
      'Inventários e partilhas judiciais e em cartório',
      'Testamentos, doações e instituição de usufruto',
      'Divórcios consensuais e litigiosos, fixação de alimentos',
      'Mediação de conflitos familiares e sucessórios'
    ],
    approach: 'Tratamento individualizado com ênfase no equilíbrio emocional e patrimonial das partes, evitando desgastes prolongados.'
  },
  {
    id: 'direito-tributario',
    title: 'Direito Tributário & Compliance',
    shortDescription: 'Orientação técnica sobre incidência fiscal, compliance tributário e representação em procedimentos administrativos e judiciais.',
    fullDescription: 'Análise minuciosa de procedimentos fiscais em âmbito federal, estadual e municipal. Trabalhamos na verificação de conformidade fiscal, defesas em autos de infração e acompanhamento de execuções fiscais, sempre fundamentados na estrita legalidade.',
    iconName: 'Landmark',
    topics: [
      'Pareceres sobre incidência tributária e regimes especiais',
      'Defesa em autos de infração e contencioso administrativo fiscal',
      'Ações anulatórias e embargos à execução fiscal',
      'Revisão preventiva de procedimentos fiscais',
      'Acompanhamento de certidões e regularidade fiscal corporativa'
    ],
    approach: 'Análise rigorosamente técnica amparada na jurisprudência dos Tribunais Superiores e respeito absoluto à legislação tributária.'
  },
  {
    id: 'direito-imobiliario',
    title: 'Direito Imobiliário & Patrimonial',
    shortDescription: 'Segurança jurídica na compra, venda, locação, regularização registral e incorporação de bens imóveis urbanos e rurais.',
    fullDescription: 'Due diligence imobiliária completa para aquisições seguras, elaboração de contratos de locação comercial, instituição de condomínios e procedimentos de regularização perante Cartórios de Registro de Imóveis e órgãos públicos competentes.',
    iconName: 'Home',
    topics: [
      'Auditoria documental prévia (Due Diligence Imobiliária)',
      'Contratos de locação não residencial (Built to Suit, shopping centers)',
      'Ações renovatórias, revisionais e possessórias',
      'Regularização fundiária e retificação de registro imobiliário',
      'Estruturação jurídica de empreendimentos e loteamentos'
    ],
    approach: 'Verificação profunda da cadeia dominial e certidões para assegurar a tranquilidade jurídica das operações imobiliárias.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'carlos-mendes',
    name: 'Dr. Carlos Eduardo Mendes',
    role: 'Sócio Fundador',
    oab: '[OAB/UF nº XXXXX]',
    specialty: 'Direito Civil e Empresarial',
    bio: 'Com mais de duas décadas de dedicação à advocacia consultiva e contenciosa, lidera a condução de litígios estratégicos e estruturação de operações negociais de alta relevância.',
    education: [
      'Graduado em Direito pela Faculdade de Direito da USP',
      'Especialista em Direito dos Contratos pela PUC-SP',
      'Membro Efetivo de Comissão Jurídica Seccional da OAB'
    ],
    memberships: [
      'Instituto dos Advogados Brasileiros (IAB)',
      'Associação dos Advogados de São Paulo (AASP)'
    ],
    imageUrl: '/sample-product.svg'
  },
  {
    id: 'helena-mendes-castro',
    name: 'Dra. Helena Mendes Castro',
    role: 'Sócia Coordenadora',
    oab: '[OAB/UF nº XXXXX]',
    specialty: 'Direito de Família, Sucessões e Planejamento Patrimonial',
    bio: 'Especialista na gestão de inventários complexos e planejamento sucessório familiar, com ênfase na pacificação de conflitos e preservação da continuidade patrimonial.',
    education: [
      'Graduada em Direito pela Universidade Presbiteriana Mackenzie',
      'Pós-Graduada em Direito de Família e Sucessões pela EPD',
      'Certificação em Mediação e Conciliação de Conflitos'
    ],
    memberships: [
      'Instituto Brasileiro de Direito de Família (IBDFAM)',
      'Comissão de Direito das Sucessões da OAB'
    ],
    imageUrl: '/sample-product.svg'
  },
  {
    id: 'roberto-siqueira',
    name: 'Dr. Roberto Siqueira Neves',
    role: 'Sócio',
    oab: '[OAB/UF nº XXXXX]',
    specialty: 'Direito Tributário e Relações Institucionais',
    bio: 'Responsável pelo núcleo tributário e de compliance, atua com profundidade técnica na avaliação de passivos fiscais e representação em procedimentos contenciosos administrativos e judiciais.',
    education: [
      'Graduado em Direito pela PUC-SP',
      'Mestre em Direito Tributário pela USP',
      'Especialização em Compliance e Gestão de Riscos pela FGV'
    ],
    memberships: [
      'Comitê de Estudos Tributários da OAB',
      'International Fiscal Association (IFA - Capítulo Brasil)'
    ],
    imageUrl: '/sample-product.svg'
  },
  {
    id: 'beatriz-prado',
    name: 'Dra. Beatriz Prado Alencar',
    role: 'Sócia Associada',
    oab: '[OAB/UF nº XXXXX]',
    specialty: 'Direito Trabalhista Corporativo e Contratos',
    bio: 'Atua com destaque na consultoria trabalhista preventiva de médias e grandes empresas, focando em diagnósticos de conformidade e mitigação de contingências judiciais.',
    education: [
      'Graduada em Direito pela Universidade do Estado do Rio de Janeiro (UERJ)',
      'Pós-Graduada em Direito do Trabalho e Processo do Trabalho',
      'Curso de Auditoria e Relações Trabalhistas Sindicais'
    ],
    memberships: [
      'Associação Brasileira de Advogados Trabalhistas (ABRAT)',
      'Comissão da Advocacia Trabalhista da OAB'
    ],
    imageUrl: '/sample-product.svg'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'atendimento-direto',
    title: 'Atendimento Direto com os Sócios',
    description: 'Cada causa é acompanhada de forma pessoal e direta pelos sócios do escritório, assegurando que decisões estratégicas contem com ampla experiência e dedicação integral.',
    iconName: 'UserCheck',
    metric: '100%',
    metricLabel: 'Supervisão direta de sócios'
  },
  {
    id: 'analise-preventiva',
    title: 'Abordagem Preventiva e Estratégica',
    description: 'Priorizamos a identificação prévia de vulnerabilidades jurídicas para evitar litígios onerosos e garantir estabilidade negocial aos nossos clientes.',
    iconName: 'ShieldCheck',
    metric: 'Rigor',
    metricLabel: 'Auditoria técnica preventiva'
  },
  {
    id: 'transparencia-processual',
    title: 'Transparência e Clareza nos Relatórios',
    description: 'Fornecemos atualizações periódicas e linguagem acessível em cada etapa do processo ou consultoria, respeitando o direito do cliente à informação clara.',
    iconName: 'FileText',
    metric: 'Clareza',
    metricLabel: 'Comunicação precisa e tempestiva'
  },
  {
    id: 'etica-oab',
    title: 'Compromisso Estrito com a Ética da OAB',
    description: 'Pautamos nossa conduta pelo Estatuto da Advocacia e pelo Código de Ética e Disciplina da OAB. Discrição, confidencialidade e zelo inegociáveis.',
    iconName: 'Award',
    metric: 'Sigilo',
    metricLabel: 'Confidencialidade garantida por lei'
  }
];

export const INSTITUTIONAL_TESTIMONIALS: InstitutionalTestimonial[] = [
  {
    id: '1',
    quote: 'A clareza técnica nas exposições contratuais e a pontualidade na entrega dos pareceres conferem ao nosso departamento diretivo a serenidade necessária para a tomada de decisões empresariais.',
    authorType: 'Diretoria Executiva',
    organization: 'Grupo Empresarial do Setor Industrial',
    segment: 'Assessoria Contratual e Societária'
  },
  {
    id: '2',
    quote: 'Em um momento delicado de partilha e planejamento sucessório, o atendimento respeitoso e a discrição de toda a equipe foram determinantes para que a transição ocorresse de modo harmônico e equilibrado.',
    authorType: 'Administrador de Bens Familiares',
    organization: 'Família Empresária',
    segment: 'Direito de Família e Sucessões'
  },
  {
    id: '3',
    quote: 'Destaco o comprometimento com o acompanhamento transparente de cada etapa processual. Sempre recebemos relatórios objetivos e sem jargões desnecessários, com estrita observância ética.',
    authorType: 'Gerência Jurídica Institucional',
    organization: 'Entidade do Setor de Serviços',
    segment: 'Contencioso Cível Estratégico'
  }
];

export const OFFICE_INFO = {
  name: 'Mendes & Associados Advogados',
  shortName: 'Mendes & Associados',
  subheading: 'Sociedade de Advogados',
  oabSocietyRegistration: '[Sociedade de Advogados - OAB/UF nº XXXXX/XX]',
  cnpj: '[CNPJ: 00.000.000/0001-00 - Projeto de Demonstração]',
  phone: '[Telefone]',
  phoneFormatted: '[Telefone Comercial]',
  whatsapp: '[WhatsApp Institucional]',
  email: '[contato@mendesadvogados.exemplo]',
  address: {
    line1: '[Endereço Comercial - Fictício]',
    building: '[Edifício Centro Empresarial, Sala XXX]',
    cityState: '[Cidade / UF - CEP 00000-000]',
    reference: '[Referência de Localização - Próximo ao Fórum Central]'
  },
  hours: 'Segunda a Sexta-feira, das 09h às 18h (mediante agendamento prévio)',
  disclaimerOab: 'O presente sítio eletrônico tem finalidade estritamente institucional e informativa, em integral conformidade com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (CED/OAB) e o Provimento nº 205/2021 do CFOAB. Não configura publicidade mercantil, captação indevida de clientela ou garantia de resultados judiciais.'
};

export type Difficulty = "Básico" | "Intermediário" | "Avançado";
export type Subject = "Implantodontia" | "Prótese Parcial Fixa" | "Prótese Total" | "Prótese Parcial Removível" | "Dentística" | "Cirurgia Bucomaxilofacial" | "Endodontia" | "Periodontia" | "Cariologia e Oclusão" | "Farmacologia e Anestesiologia" | "Materiais Dentários" | "Histologia e Embriologia";

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const questions: Question[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 1 — HISTÓRICO E CONCEITOS GERAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c1-01",
    subject: "Implantodontia",
    topic: "Histórico e Conceitos",
    difficulty: "Básico",
    question: "Quem é considerado o pai da implantodontia moderna e em que década descreveu o fenômeno de osseointegração?",
    options: [
      "André Schroeder, nos anos 1970",
      "Per-Ingvar Brånemark, nos anos 1950–60",
      "Leonard Linkow, nos anos 1940",
      "Albrekstsson, nos anos 1980",
    ],
    correctIndex: 1,
    explanation:
      "Per-Ingvar Brånemark descobriu a osseointegração na década de 1950, ao observar que câmeras de titânio implantadas em tíbias de coelhos não podiam ser removidas sem destruição óssea. Ele aplicou o conceito clínico em humanos a partir de 1965.",
  },
  {
    id: "imp-c1-02",
    subject: "Implantodontia",
    topic: "Histórico e Conceitos",
    difficulty: "Básico",
    question: "O que é osseointegração segundo a definição clássica de Brånemark?",
    options: [
      "Fusão do implante com o tecido gengival circundante",
      "Contato direto e funcional entre osso vivo e a superfície do implante, sem tecido conjuntivo interposto",
      "Formação de fibras periodontais ao redor do implante",
      "Processo de calcificação do tecido de granulação após a cirurgia",
    ],
    correctIndex: 1,
    explanation:
      "Osseointegração é a ancoragem estrutural e funcional direta entre osso vivo e a superfície do implante, sem interposição de tecido conjuntivo. É condição essencial para o sucesso do implante.",
  },
  {
    id: "imp-c1-03",
    subject: "Implantodontia",
    topic: "Histórico e Conceitos",
    difficulty: "Básico",
    question: "Qual é a taxa de perda óssea marginal anual considerada aceitável pelos Critérios de Albrektsson após o primeiro ano de função?",
    options: [
      "< 0.5 mm/ano",
      "< 0.2 mm/ano",
      "< 1.0 mm/ano",
      "< 2.0 mm/ano",
    ],
    correctIndex: 1,
    explanation:
      "Os critérios de sucesso de Albrektsson (1986) definem que, após o primeiro ano, a perda óssea deve ser inferior a 0,2 mm/ano. Outros critérios incluem ausência de mobilidade, dor, parestesia e radiolucidez periimplantar.",
  },
  {
    id: "imp-c1-04",
    subject: "Implantodontia",
    topic: "Histórico e Conceitos",
    difficulty: "Intermediário",
    question: "O que representa a estabilidade primária de um implante?",
    options: [
      "Resistência mecânica imediata do implante no leito ósseo, sem componente biológico",
      "Nova formação óssea ao redor do implante após 4–8 semanas",
      "Equilíbrio entre osteoclasia e osteogênese após 3 meses",
      "Vascularização completa da interface implante-osso",
    ],
    correctIndex: 0,
    explanation:
      "A estabilidade primária é mecânica e ocorre no momento da instalação, dependendo da densidade óssea, geometria do implante e técnica cirúrgica. A estabilidade secundária vem depois, com a neoformação óssea biológica (osseointegração).",
  },
  {
    id: "imp-c1-05",
    subject: "Implantodontia",
    topic: "Indicações e Contraindicações",
    difficulty: "Intermediário",
    question: "Qual das seguintes condições representa contraindicação ABSOLUTA ao tratamento com implantes osseointegrados?",
    options: [
      "Tabagismo moderado (< 10 cigarros/dia)",
      "Osteoporose tratada sem uso de bisfosfonatos",
      "Radioterapia de cabeça e pescoço com dose > 50 Gy na região do implante",
      "Diabetes mellitus tipo 2 bem controlado (HbA1c < 7%)",
    ],
    correctIndex: 2,
    explanation:
      "Radioterapia de alta dose (> 50 Gy) na região de cabeça e pescoço é contraindicação absoluta devido ao risco de osteoradionecrose. As demais condições são contraindicações relativas que, bem gerenciadas, permitem implantes com cautela.",
  },
  {
    id: "imp-c1-06",
    subject: "Implantodontia",
    topic: "Indicações e Contraindicações",
    difficulty: "Avançado",
    question: "Durante a osseointegração, há um período de 'dip' (queda) da estabilidade entre a primária e a secundária. Por que isso ocorre?",
    options: [
      "Porque o implante se expande com a temperatura corporal",
      "Porque a remodelação óssea periimplantar começa com reabsorção antes da neoformação, reduzindo temporariamente o contato osso-implante",
      "Porque o parafuso de cobertura causa pressão negativa",
      "Porque há dissolução do óxido de titânio nas primeiras semanas",
    ],
    correctIndex: 1,
    explanation:
      "A estabilidade cai temporariamente (3ª–6ª semana) porque os osteoclastos iniciam remodelação do osso compactado durante a fresagem antes que os osteoblastos depositem novo osso. É o ponto crítico para protocolos de carga imediata.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 2 — ANATOMIA APLICADA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c2-01",
    subject: "Implantodontia",
    topic: "Anatomia Óssea",
    difficulty: "Básico",
    question: "Na classificação de Lekholm & Zarb, o tipo de osso com cortical espessa e medular escassa (mais denso) é:",
    options: ["Tipo II", "Tipo III", "Tipo I", "Tipo IV"],
    correctIndex: 2,
    explanation:
      "O Tipo I de Lekholm & Zarb é composto quase inteiramente por osso cortical compacto homogêneo, com pouca ou nenhuma medular. É o mais denso, porém pode dificultar a vascularização do implante.",
  },
  {
    id: "imp-c2-02",
    subject: "Implantodontia",
    topic: "Anatomia Óssea",
    difficulty: "Básico",
    question: "Qual estrutura anatômica representa o principal risco em implantes na região posterior da mandíbula?",
    options: [
      "Seio maxilar",
      "Canal mandibular (nervo alveolar inferior)",
      "Forame incisivo",
      "Assoalho nasal",
    ],
    correctIndex: 1,
    explanation:
      "O canal mandibular contém o nervo e vasos alveolares inferiores. Deve-se manter margem de segurança mínima de 2 mm entre o ápice do implante e o teto do canal para evitar parestesia permanente.",
  },
  {
    id: "imp-c2-03",
    subject: "Implantodontia",
    topic: "Qualidade Óssea",
    difficulty: "Intermediário",
    question: "Na classificação de Misch, o osso D4 (mais mole) é encontrado principalmente em:",
    options: [
      "Região anterior de mandíbula",
      "Região posterior de maxila em pacientes com longa edentação",
      "Região de sínfise mandibular",
      "Região canina superior",
    ],
    correctIndex: 1,
    explanation:
      "O osso D4 (Misch) é extremamente trabecular e mole, encontrado principalmente na maxila posterior após longa perda dentária e remodelação. Representa o maior desafio para estabilidade primária e exige implantes mais longos/largos.",
  },
  {
    id: "imp-c2-04",
    subject: "Implantodontia",
    topic: "Qualidade Óssea",
    difficulty: "Intermediário",
    question: "Qual a margem de segurança mínima recomendada entre o implante e o assoalho do seio maxilar, sem elevação de seio?",
    options: ["0,5 mm", "1 mm", "2 mm", "5 mm"],
    correctIndex: 2,
    explanation:
      "A maioria dos protocolos recomenda pelo menos 2 mm de osso entre o ápice do implante e o assoalho sinusal para evitar perfuração da membrana de Schneider sem realizar elevação de seio.",
  },
  {
    id: "imp-c2-05",
    subject: "Implantodontia",
    topic: "Tecidos Moles Periimplantares",
    difficulty: "Avançado",
    question: "Por que a presença de mucosa queratinizada ao redor do implante é clinicamente relevante?",
    options: [
      "Aumenta a estabilidade primária do implante",
      "Facilita o acesso cirúrgico para enxertos ósseos",
      "Fornece barreira protetora contra traumas mastigatórios e dificulta a penetração bacteriana subgengival",
      "Melhora o torque de inserção durante a cirurgia",
    ],
    correctIndex: 2,
    explanation:
      "Mucosa queratinizada (≥ 2 mm) ao redor do implante age como barreira mecânica a traumas, facilita higiene e reduz o risco de mucosite e periimplantite. Sua ausência não é contraindicação absoluta, mas aumenta o risco de complicações.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 3 — SELEÇÃO E AVALIAÇÃO DO PACIENTE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c3-01",
    subject: "Implantodontia",
    topic: "Fatores de Risco Sistêmicos",
    difficulty: "Básico",
    question: "Qual valor de HbA1c geralmente indica controle glicêmico aceitável para a realização de implantes em pacientes diabéticos?",
    options: ["< 10%", "< 8%", "< 7%", "< 5%"],
    correctIndex: 2,
    explanation:
      "HbA1c < 7% indica bom controle glicêmico. Pacientes com diabetes controlado (HbA1c < 7–8%) apresentam taxas de sucesso de implantes similares a não diabéticos, embora exijam acompanhamento mais rigoroso.",
  },
  {
    id: "imp-c3-02",
    subject: "Implantodontia",
    topic: "Fatores de Risco Sistêmicos",
    difficulty: "Básico",
    question: "O tabagismo afeta o prognóstico dos implantes principalmente porque:",
    options: [
      "Aumenta o pH salivar, corroendo o titânio",
      "Compromete a vascularização, prejudica a cicatrização e aumenta o risco de periimplantite",
      "Causa bruxismo, sobrecarregando o implante",
      "Reduz o torque de inserção durante a cirurgia",
    ],
    correctIndex: 1,
    explanation:
      "A nicotina e o monóxido de carbono prejudicam a microvascularização, reduzem a resposta imunológica e aumentam a colonização bacteriana. Fumantes apresentam taxa de falha 2–3× maior que não fumantes.",
  },
  {
    id: "imp-c3-03",
    subject: "Implantodontia",
    topic: "Fatores de Risco Sistêmicos",
    difficulty: "Intermediário",
    question: "Qual é o principal risco associado ao uso de bisfosfonatos (especialmente os intravenosos) e cirurgia de implante?",
    options: [
      "Hipersensibilidade ao titânio",
      "Osteonecrose dos maxilares associada a medicamentos (MRONJ)",
      "Aumento da reabsorção óssea periimplantar",
      "Redução da vascularização gengival",
    ],
    correctIndex: 1,
    explanation:
      "Bisfosfonatos inibem osteoclastos e comprometem a remodelação óssea, podendo causar osteonecrose dos maxilares (MRONJ) após procedimentos cirúrgicos. O risco é maior com bisfosfonatos IV para tratamento oncológico.",
  },
  {
    id: "imp-c3-04",
    subject: "Implantodontia",
    topic: "Exames Complementares",
    difficulty: "Intermediário",
    question: "Qual vantagem a CBCT oferece sobre a radiografia panorâmica no planejamento de implantes?",
    options: [
      "Maior resolução de contraste nos tecidos moles",
      "Menor dose de radiação",
      "Visualização tridimensional com mensuração precisa de volume, densidade e relação com estruturas anatômicas",
      "Capacidade de identificar lesões endodônticas ativas",
    ],
    correctIndex: 2,
    explanation:
      "A CBCT permite reconstrução 3D, mensuração exata da altura e largura óssea, avaliação da qualidade e localização precisa de estruturas de risco (canal mandibular, seio maxilar), sendo indispensável para planejamento de casos complexos.",
  },
  {
    id: "imp-c3-05",
    subject: "Implantodontia",
    topic: "Fatores de Risco Locais",
    difficulty: "Avançado",
    question: "O bruxismo como fator de risco para implantes é considerado:",
    options: [
      "Contraindicação absoluta sem exceções",
      "Fator de risco relativo que aumenta o risco de complicações mecânicas, exigindo planejamento biomecânico criterioso e placa miorrelaxante",
      "Sem impacto na sobrevivência do implante",
      "Fator protetor, pois estimula a remodelação óssea periimplantar",
    ],
    correctIndex: 1,
    explanation:
      "O bruxismo gera forças excessivas não axiais que aumentam o risco de fratura de parafusos, sobrecarga óssea e falha do implante. É contraindicação relativa; o manejo inclui protetor oclusal, distribuição adequada de implantes e redução de cantiléveres.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 4 — PLANEJAMENTO DO TRATAMENTO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c4-01",
    subject: "Implantodontia",
    topic: "Planejamento",
    difficulty: "Básico",
    question: "O 'planejamento reverso' em implantodontia significa:",
    options: [
      "Realizar a cirurgia antes da prótese provisória",
      "Definir primeiro a posição ideal da prótese final e trabalhar de trás para frente até determinar a posição, angulação e número de implantes",
      "Remover implantes antigos antes de instalar novos",
      "Extrair os dentes remanescentes antes do planejamento",
    ],
    correctIndex: 1,
    explanation:
      "O planejamento reverso ('prosthetically-driven') começa pelo resultado protético desejado. A posição dos implantes é determinada pelo eixo ideal das coroas, respeitando oclusão, estética e biomecânica.",
  },
  {
    id: "imp-c4-02",
    subject: "Implantodontia",
    topic: "Guia Cirúrgico",
    difficulty: "Básico",
    question: "Para que serve o guia cirúrgico em implantodontia?",
    options: [
      "Realizar a moldagem de transferência após a cirurgia",
      "Transferir a posição planejada dos implantes para o campo cirúrgico, garantindo precisão de posição e angulação",
      "Proteger os dentes adjacentes durante a fresagem",
      "Medir a densidade óssea durante a instalação",
    ],
    correctIndex: 1,
    explanation:
      "O guia cirúrgico (convencional ou estereolitográfico digital) é confeccionado a partir do planejamento e direciona as brocas para o local, profundidade e angulação corretos, reduzindo erros e complicações cirúrgicas.",
  },
  {
    id: "imp-c4-03",
    subject: "Implantodontia",
    topic: "Planejamento",
    difficulty: "Intermediário",
    question: "O cantiléver protético em implantodontia deve ser evitado ou minimizado porque:",
    options: [
      "Dificulta a higiene oral do paciente",
      "Gera forças amplificadas no implante mais posterior, aumentando risco de perda óssea e fratura",
      "Impossibilita a moldagem de transferência",
      "Reduz a estética do perfil de emergência",
    ],
    correctIndex: 1,
    explanation:
      "O cantiléver cria momento de força (torque) que multiplica as cargas oclusais no implante de suporte mais próximo. A regra geral é que o comprimento do cantiléver não deve exceder a distância entre implantes.",
  },
  {
    id: "imp-c4-04",
    subject: "Implantodontia",
    topic: "Planejamento",
    difficulty: "Intermediário",
    question: "Qual a distância mínima recomendada entre dois implantes adjacentes (borda a borda)?",
    options: ["1 mm", "3 mm", "5 mm", "7 mm"],
    correctIndex: 1,
    explanation:
      "A distância mínima entre implantes adjacentes é de 3 mm para preservar o osso interimplantar e o suprimento sanguíneo, evitando reabsorção da crista óssea entre eles.",
  },
  {
    id: "imp-c4-05",
    subject: "Implantodontia",
    topic: "Planejamento",
    difficulty: "Avançado",
    question: "No planejamento do Protocolo de Brånemark para arco total mandibular, qual a distribuição clássica de implantes?",
    options: [
      "2 implantes na região de sínfise",
      "4 implantes na região interforaminal (entre os forames mentais)",
      "6 implantes distribuídos por todo o arco mandibular",
      "8 implantes desde os incisivos até os molares",
    ],
    correctIndex: 1,
    explanation:
      "O protocolo original de Brånemark para mandíbula edêntula utiliza 4 (ou 5–6) implantes na região interforaminal, aproveitando o osso mais denso e espesso entre os forames mentais, com barra de conexão e prótese fixa.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 5 — COMPONENTES E SISTEMAS DE IMPLANTES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c5-01",
    subject: "Implantodontia",
    topic: "Componentes",
    difficulty: "Básico",
    question: "Qual a função do transferente (transfer) na etapa de moldagem em implantodontia?",
    options: [
      "Conectar o implante ao osso durante a cirurgia",
      "Transferir a posição exata do implante para o modelo de gesso",
      "Proteger a conexão do implante entre as consultas",
      "Medir o torque de inserção do implante",
    ],
    correctIndex: 1,
    explanation:
      "O transferente é o componente que, ao ser incluído na moldagem, registra a posição tridimensional e a angulação do implante para que o técnico reproduza no modelo de trabalho.",
  },
  {
    id: "imp-c5-02",
    subject: "Implantodontia",
    topic: "Conexões",
    difficulty: "Básico",
    question: "O cone Morse (ou conexão cônica) se diferencia do hexágono externo principalmente por:",
    options: [
      "Ser feito de zircônia em vez de titânio",
      "Possuir travam pelo princípio de autotravamento cônico, com menor microgap na junção implante-abutment",
      "Ser o único tipo de conexão compatível com carga imediata",
      "Requerer torque de inserção mais elevado",
    ],
    correctIndex: 1,
    explanation:
      "A conexão cônica (cone Morse) promove travamento por atrito entre superfícies cônicas, criando um microgap menor que o hexágono externo, o que reduz a infiltração bacteriana e a microinflamação periimplantar.",
  },
  {
    id: "imp-c5-03",
    subject: "Implantodontia",
    topic: "Superfície",
    difficulty: "Básico",
    question: "O tratamento de superfície SLA (Sand-blasted, Large grit, Acid-etched) é utilizado nos implantes para:",
    options: [
      "Aumentar a radiopacidade do implante",
      "Criar microrugosidades que ampliam a área de contato e aceleram a osseointegração",
      "Tornar a superfície lisa para facilitar a limpeza pós-cirúrgica",
      "Reduzir o risco de fratura do corpo do implante",
    ],
    correctIndex: 1,
    explanation:
      "O SLA combina jateamento com partículas de corundum (macro-rugosidade) e ataque ácido (micro-rugosidade), criando topografia que aumenta a adsorção de proteínas e a adesão de osteoblastos, acelerando a osseointegração.",
  },
  {
    id: "imp-c5-04",
    subject: "Implantodontia",
    topic: "Componentes",
    difficulty: "Intermediário",
    question: "O que é 'platform switching' e qual seu objetivo clínico?",
    options: [
      "Trocar de plataforma digital para moldagem convencional durante o tratamento",
      "Usar abutment de diâmetro menor que o implante, deslocando a junção para dentro e preservando a crista óssea marginal",
      "Mudar o sistema de implante entre as fases cirúrgica e protética",
      "Instalar implantes de plataforma larga em região de osso estreito",
    ],
    correctIndex: 1,
    explanation:
      "Platform switching desloca o microgap inflamatório da junção implante-abutment para longe da crista óssea, reduzindo a reabsorção óssea marginal. Estudos mostram preservação de 0,2–0,5 mm de osso adicional comparado à plataforma regular.",
  },
  {
    id: "imp-c5-05",
    subject: "Implantodontia",
    topic: "Componentes",
    difficulty: "Avançado",
    question: "Como o diâmetro do implante influencia a distribuição de forças no osso crestal?",
    options: [
      "Implantes mais estreitos concentram menos tensão na crista óssea",
      "O diâmetro não influencia a distribuição de tensão, apenas o comprimento importa",
      "Implantes de maior diâmetro distribuem melhor as forças oclusais no osso cortical, reduzindo a concentração de tensão na crista",
      "Implantes mais largos sempre apresentam melhor osseointegração independente da qualidade óssea",
    ],
    correctIndex: 2,
    explanation:
      "Implantes de maior diâmetro aumentam a área de superfície de contato com o osso cortical e melhoram a distribuição de tensões, sendo especialmente indicados em osso de baixa densidade (D3/D4) ou quando há maior carga oclusal.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 6 — CIRURGIA DE INSTALAÇÃO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c6-01",
    subject: "Implantodontia",
    topic: "Protocolos Cirúrgicos",
    difficulty: "Básico",
    question: "No protocolo cirúrgico em dois estágios (submerso), qual é a diferença para o protocolo em estágio único?",
    options: [
      "No dois estágios, o implante fica submerso abaixo da gengiva durante a osseointegração; no estágio único, o implante emerge desde a instalação",
      "No dois estágios, instalam-se dois implantes simultaneamente",
      "No estágio único, realiza-se enxerto ósseo junto com o implante",
      "No dois estágios, usa-se carga imediata obrigatoriamente",
    ],
    correctIndex: 0,
    explanation:
      "No protocolo submerso (dois estágios), o implante é coberto pela mucosa durante a osseointegração e reexposto numa segunda cirurgia. No estágio único (não submerso), o implante permanece exposto com cicatrizador desde a instalação.",
  },
  {
    id: "imp-c6-02",
    subject: "Implantodontia",
    topic: "Protocolos Cirúrgicos",
    difficulty: "Básico",
    question: "Qual antibiótico é mais utilizado como profilaxia perioperatória em cirurgias de implante em pacientes sem contraindicações?",
    options: [
      "Metronidazol 500 mg, 1 hora antes",
      "Amoxicilina 2 g (ou 1 g), 1 hora antes da cirurgia",
      "Cefalexina 1 g, 3 dias antes",
      "Clindamicina 300 mg, 30 minutos antes",
    ],
    correctIndex: 1,
    explanation:
      "A amoxicilina (2 g ou 1 g conforme protocolo) administrada 1 hora antes é o padrão para profilaxia em implantodontia. Em alérgicos à penicilina, usa-se clindamicina 600 mg 1 hora antes.",
  },
  {
    id: "imp-c6-03",
    subject: "Implantodontia",
    topic: "Cirurgia",
    difficulty: "Intermediário",
    question: "O ISQ (Implant Stability Quotient) medido pela frequência de ressonância avalia:",
    options: [
      "O grau de inflamação periimplantar após a cirurgia",
      "A estabilidade do implante (primária e secundária) por meio da rigidez da interface osso-implante",
      "A temperatura gerada durante a fresagem óssea",
      "O torque de remoção do implante em caso de falha",
    ],
    correctIndex: 1,
    explanation:
      "O ISQ varia de 1 a 100 e é medido pelo dispositivo Osstell. Valores ≥ 65–70 indicam boa estabilidade e permitem considerar carga imediata. É importante monitorar o ISQ ao longo do tempo para detectar falhas precoces.",
  },
  {
    id: "imp-c6-04",
    subject: "Implantodontia",
    topic: "Carga Imediata",
    difficulty: "Intermediário",
    question: "Para indicar carga imediata em implante unitário posterior, qual critério biomecânico é prioritário?",
    options: [
      "Comprimento do implante ≥ 10 mm",
      "Torque de inserção ≥ 25–35 Ncm e ISQ ≥ 65",
      "Densidade óssea tipo D1",
      "Ausência de qualquer contato oclusal na prótese provisória",
    ],
    correctIndex: 1,
    explanation:
      "O torque de inserção ≥ 25–35 Ncm (dependendo do protocolo) aliado ao ISQ ≥ 65 são os principais indicadores de estabilidade primária adequada para carga imediata. O provisório deve ter contatos oclusais suaves ou ausentes.",
  },
  {
    id: "imp-c6-05",
    subject: "Implantodontia",
    topic: "Cirurgia",
    difficulty: "Avançado",
    question: "Qual a temperatura crítica que não deve ser excedida no osso durante a fresagem para evitar necrose óssea térmica?",
    options: ["42°C", "47°C", "52°C", "60°C"],
    correctIndex: 1,
    explanation:
      "A temperatura de 47°C por mais de 1 minuto causa necrose óssea irreversível (Eriksson & Albrektsson, 1983), comprometendo a osseointegração. Por isso, usa-se irrigação abundante com soro fisiológico e brocas afiadas em baixas rotações.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 7 — ENXERTOS E REGENERAÇÃO ÓSSEA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c7-01",
    subject: "Implantodontia",
    topic: "Enxertos e ROG",
    difficulty: "Básico",
    question: "Qual material de enxerto ósseo é considerado padrão-ouro por combinar osteogênese, osteoindução e osteocondução?",
    options: [
      "Xenoenxerto (osso bovino desproteinizado)",
      "Aloenxerto (osso de cadáver liofilizado)",
      "Enxerto autógeno (do próprio paciente)",
      "Material aloplástico (hidroxiapatita sintética)",
    ],
    correctIndex: 2,
    explanation:
      "O enxerto autógeno é o único com as três propriedades: osteogênese (células osteogênicas vivas), osteoindução (BMP e fatores de crescimento) e osteocondução (arcabouço). A desvantagem é a morbidade do sítio doador.",
  },
  {
    id: "imp-c7-02",
    subject: "Implantodontia",
    topic: "Enxertos e ROG",
    difficulty: "Básico",
    question: "Na Regeneração Óssea Guiada (ROG), qual é a função da membrana?",
    options: [
      "Liberar antibióticos no sítio cirúrgico",
      "Criar uma barreira que exclui células epiteliais e do tecido conjuntivo, permitindo que células osteogênicas colonizem o defeito",
      "Fixar o enxerto ao osso receptor por pressão mecânica",
      "Aumentar a vascularização do enxerto ósseo",
    ],
    correctIndex: 1,
    explanation:
      "A membrana (reabsorvível ou não reabsorvível) funciona como barreira seletiva que impede a migração de células fibroblásticas e epiteliais de crescimento rápido, reservando o espaço para a colonização osteoblástica mais lenta.",
  },
  {
    id: "imp-c7-03",
    subject: "Implantodontia",
    topic: "Seio Maxilar",
    difficulty: "Intermediário",
    question: "Na técnica de elevação de seio maxilar pela via lateral (janela lateral), qual é a altura óssea residual mínima geralmente aceita para instalar implantes simultâneos?",
    options: ["1–2 mm", "4–5 mm", "7–8 mm", "10 mm"],
    correctIndex: 1,
    explanation:
      "Com osso residual de pelo menos 4–5 mm abaixo do seio, é possível obter estabilidade primária e instalar implantes simultaneamente à elevação do seio pela técnica lateral. Com menos de 4 mm, geralmente faz-se a elevação em um primeiro tempo.",
  },
  {
    id: "imp-c7-04",
    subject: "Implantodontia",
    topic: "Seio Maxilar",
    difficulty: "Intermediário",
    question: "A técnica de elevação de seio maxilar pela via crestal (técnica de Summers/osteótomos) é indicada quando:",
    options: [
      "O seio maxilar está completamente pneumatizado",
      "A altura óssea residual é inferior a 3 mm",
      "Há necessidade de enxerto de grande volume",
      "A altura óssea residual é suficiente (≥ 5–7 mm) e precisa de apenas pequeno ganho vertical",
    ],
    correctIndex: 3,
    explanation:
      "A técnica crestal (via alveolar) usa osteótomos para infracturar e elevar o assoalho sinusal com trauma mínimo. É indicada quando há osso residual suficiente para estabilidade primária e o ganho vertical necessário é pequeno (2–4 mm).",
  },
  {
    id: "imp-c7-05",
    subject: "Implantodontia",
    topic: "Enxertos e ROG",
    difficulty: "Avançado",
    question: "O PRF (Fibrina Rica em Plaquetas) utilizado em enxertos e cirurgias de implante age principalmente como:",
    options: [
      "Substituto ósseo com propriedades osteoindutoras iguais ao autoenxerto",
      "Concentrado de fatores de crescimento (PDGF, TGF-β, VEGF) que acelera a cicatrização e angiogênese",
      "Antibiótico natural que reduz a contaminação bacteriana",
      "Membrana oclusiva definitiva para ROG de longa duração",
    ],
    correctIndex: 1,
    explanation:
      "O PRF é um concentrado plaquetário de 2ª geração (sem adição de trombina) que libera fatores de crescimento (PDGF, TGF-β, VEGF, IGF) que estimulam a neoangiogênese, proliferação celular e remodelação óssea. É coadjuvante, não substituto ósseo.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 8 — MOLDAGEM EM IMPLANTODONTIA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c8-01",
    subject: "Implantodontia",
    topic: "Moldagem em Implantodontia",
    difficulty: "Básico",
    question: "Na técnica de moldagem direta (moldeira aberta), o transferente:",
    options: [
      "Permanece no modelo de gesso após o vazamento",
      "Fica preso na moldagem e é removido junto com ela, ficando na impressão quando se retira a moldeira da boca",
      "É parafusado ao análogo antes da moldagem",
      "É removido antes de vazar o modelo",
    ],
    correctIndex: 1,
    explanation:
      "Na moldeira aberta, o transferente possui parafuso longo que atravessa a moldeira. Após a polimerização do material, o parafuso é desapertado pela abertura na moldeira, e o transferente sai preso na impressão (acoplado ao material de moldagem).",
  },
  {
    id: "imp-c8-02",
    subject: "Implantodontia",
    topic: "Moldagem em Implantodontia",
    difficulty: "Intermediário",
    question: "Qual material de moldagem oferece maior precisão dimensional e estabilidade para moldagens em implantodontia?",
    options: [
      "Alginato irreversível",
      "Silicone de adição (polivinilsiloxano — PVS)",
      "Godiva de baixa fusão",
      "Hidrocoloide reversível",
    ],
    correctIndex: 1,
    explanation:
      "O silicone de adição (PVS) é o padrão-ouro pela alta precisão dimensional, mínima contração de polimerização, excelente estabilidade e possibilidade de vazar múltiplas vezes. O poliéter também é altamente preciso mas absorve umidade.",
  },
  {
    id: "imp-c8-03",
    subject: "Implantodontia",
    topic: "Moldagem em Implantodontia",
    difficulty: "Intermediário",
    question: "O escaneamento intraoral digital como alternativa à moldagem convencional em implantodontia apresenta como principal limitação:",
    options: [
      "Menor precisão em casos unitários anteriores",
      "Dificuldade de capturar a posição subgengival profunda de implantes em casos com perfil de emergência complexo ou múltiplos implantes em arco total",
      "Impossibilidade de integração com software CAD/CAM",
      "Maior custo para o paciente em todos os casos",
    ],
    correctIndex: 1,
    explanation:
      "Escâneres intraorais têm dificuldade de capturar com precisão implantes muito subgengivais e apresentam acúmulo de erro em arcadas longas (edêntulos totais). Para casos unitários, a precisão é equiparável à moldagem convencional.",
  },
  {
    id: "imp-c8-04",
    subject: "Implantodontia",
    topic: "Moldagem em Implantodontia",
    difficulty: "Avançado",
    question: "O 'assentamento passivo' da prótese sobre múltiplos implantes é fundamental porque:",
    options: [
      "Facilita a remoção da prótese pelo paciente para higienização",
      "Tensões residuais de uma prótese desajustada são transmitidas continuamente ao osso periimplantar, podendo causar reabsorção e falha",
      "Permite o uso de menor torque nos parafusos dos pilares",
      "Reduz o tempo de laboratório na confecção da prótese",
    ],
    correctIndex: 1,
    explanation:
      "Sem assentamento passivo, qualquer desajuste gera tensões contínuas nos implantes e no osso mesmo sem carga oclusal. Isso pode causar afrouxamento de parafusos, fratura de componentes e perda óssea progressiva periimplantar.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 9 — PRÓTESES SOBRE IMPLANTES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c9-01",
    subject: "Implantodontia",
    topic: "Próteses sobre Implantes",
    difficulty: "Básico",
    question: "Qual a principal vantagem da coroa parafusada sobre implante em relação à coroa cimentada?",
    options: [
      "Melhor estética do perfil de emergência",
      "Facilidade de remoção para manutenção e eliminação do risco de cimento residual subgengival",
      "Menor custo de confecção laboratorial",
      "Maior resistência à fratura oclusal",
    ],
    correctIndex: 1,
    explanation:
      "A coroa parafusada é removível pelo dentista (sem destruição), facilitando manutenção e retratamentos. Elimina o risco de cimento residual subgengival — fator de risco comprovado para periimplantite.",
  },
  {
    id: "imp-c9-02",
    subject: "Implantodontia",
    topic: "Próteses sobre Implantes",
    difficulty: "Básico",
    question: "O que é uma overdenture sobre implantes?",
    options: [
      "Prótese fixa implanto-suportada de arco total",
      "Prótese total removível retida e/ou suportada por implantes por meio de encaixes (O'ring, Locator ou barra)",
      "Prótese parcial fixa com mais de 3 elementos",
      "Coroa provisória instalada imediatamente após a extração",
    ],
    correctIndex: 1,
    explanation:
      "A overdenture é uma prótese total que o paciente pode remover, mas que é retida por encaixes sobre implantes, oferecendo muito mais estabilidade e retenção que a prótese total convencional, com menor número de implantes que uma prótese fixa total.",
  },
  {
    id: "imp-c9-03",
    subject: "Implantodontia",
    topic: "Oclusão em Implantodontia",
    difficulty: "Intermediário",
    question: "Por que a oclusão em implantodontia requer atenção especial em relação à dentição natural?",
    options: [
      "Os implantes osseointegrados possuem propriocepção idêntica à dos dentes naturais",
      "Os implantes não possuem ligamento periodontal e têm propriocepção reduzida, transmitindo forças diretamente ao osso sem amortecimento",
      "Implantes toleram mais forças laterais que dentes naturais",
      "A oclusão não tem impacto significativo na longevidade dos implantes",
    ],
    correctIndex: 1,
    explanation:
      "Dentes naturais possuem ligamento periodontal que amortece forças e fornece propriocepção (0,1–0,3 mm de mobilidade). Implantes são anquilosados, sem amortecimento — forças excessivas ou laterais são transmitidas diretamente ao osso e componentes protéticos.",
  },
  {
    id: "imp-c9-04",
    subject: "Implantodontia",
    topic: "Próteses sobre Implantes",
    difficulty: "Intermediário",
    question: "No sistema Locator para overdenture, qual é o princípio de retenção?",
    options: [
      "Retenção por cimento provisório entre encaixe e implante",
      "Encaixe macho-fêmea com anéis de nylon de diferentes retenções que encaixam no pilar Locator rosqueado ao implante",
      "Barra metálica soldada conectando os implantes com clipes de retenção",
      "Encaixe por vácuo entre a base da prótese e a mucosa",
    ],
    correctIndex: 1,
    explanation:
      "O sistema Locator utiliza um pilar cônico (macho) fixo ao implante e uma fêmea com inserto de nylon colorido (diferente grau de retenção) incorporado na prótese. É um dos sistemas mais utilizados pela simplicidade e capacidade de compensar divergência entre implantes.",
  },
  {
    id: "imp-c9-05",
    subject: "Implantodontia",
    topic: "Próteses sobre Implantes",
    difficulty: "Avançado",
    question: "O Protocolo All-on-4 utiliza implantes posteriores inclinados (até 45°) para:",
    options: [
      "Facilitar o acesso cirúrgico sem rebatimento de retalho",
      "Evitar estruturas anatômicas (seio maxilar, canal mandibular) e aumentar o comprimento do implante no osso disponível sem necessidade de enxertos",
      "Melhorar a estética do perfil de emergência das coroas posteriores",
      "Aumentar a estabilidade primária nos protocolos de carga imediata",
    ],
    correctIndex: 1,
    explanation:
      "Os implantes posteriores inclinados no All-on-4 contornam o seio maxilar (na maxila) ou o canal mandibular (na mandíbula), permitindo usar osso disponível mais anterior com implantes mais longos, evitando enxertos em muitos casos e viabilizando carga imediata.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 10 — COMPLICAÇÕES E FALHAS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c10-01",
    subject: "Implantodontia",
    topic: "Complicações",
    difficulty: "Básico",
    question: "Qual a diferença clínica entre mucosite periimplantar e periimplantite?",
    options: [
      "Mucosite acomete apenas a mandíbula; periimplantite, apenas a maxila",
      "Mucosite é inflamação reversível restrita à mucosa sem perda óssea; periimplantite inclui perda óssea progressiva ao redor do implante",
      "São sinônimos que descrevem o mesmo processo inflamatório",
      "Mucosite é causada por bactérias aeróbias; periimplantite, por vírus",
    ],
    correctIndex: 1,
    explanation:
      "Mucosite periimplantar (análoga à gengivite) é reversível com tratamento e não causa perda óssea. Periimplantite (análoga à periodontite) é inflamatória com perda óssea progressiva — requer intervenção mais agressiva.",
  },
  {
    id: "imp-c10-02",
    subject: "Implantodontia",
    topic: "Complicações",
    difficulty: "Básico",
    question: "Falha precoce de implante (antes da osseointegração) é caracterizada por:",
    options: [
      "Fratura do implante após anos de função",
      "Mobilidade ou dor do implante nas primeiras semanas/meses, antes da carga protética",
      "Perda óssea marginal superior a 2 mm após o primeiro ano",
      "Afrouxamento do parafuso do pilar após 6 meses",
    ],
    correctIndex: 1,
    explanation:
      "Falha precoce ocorre antes ou durante a osseointegração (primeiras 12–16 semanas). Causas incluem contaminação, trauma cirúrgico, necrose óssea térmica, sobrecarga precoce ou doença sistêmica não controlada.",
  },
  {
    id: "imp-c10-03",
    subject: "Implantodontia",
    topic: "Periimplantite",
    difficulty: "Intermediário",
    question: "O tratamento da periimplantite inclui, em ordem lógica de progressão:",
    options: [
      "Antibioticoterapia sistêmica isolada como primeira e única opção",
      "Descontaminação mecânica (ultrasom, curetas de titânio), antissépticos locais (clorexidina), e em casos refratários, acesso cirúrgico com descontaminação da superfície e possível regeneração óssea",
      "Remoção imediata do implante na primeira visita",
      "Polimento da superfície do implante com pasta fluoretada",
    ],
    correctIndex: 1,
    explanation:
      "O tratamento começa com terapia não cirúrgica (desbridamento mecânico + clorexidina + antibiótico sistêmico se indicado). Casos refratários requerem cirurgia para acesso direto à superfície do implante, descontaminação química (EDTA, ácido cítrico) e eventualmente ROG.",
  },
  {
    id: "imp-c10-04",
    subject: "Implantodontia",
    topic: "Complicações",
    difficulty: "Intermediário",
    question: "O afrouxamento do parafuso do pilar (abutment screw loosening) é mais frequentemente causado por:",
    options: [
      "Corrosão galvânica entre titânio e cerâmica",
      "Torque de aperto insuficiente, forças oclusais não axiais excessivas ou desajuste da interface pilar-implante",
      "Uso de anestésico vasoconstritor durante a cirurgia",
      "Higiene oral excessiva do paciente",
    ],
    correctIndex: 1,
    explanation:
      "Afrouxamento de parafuso ocorre por torque de aperto inadequado, forças oclusais laterais (especialmente em bruxismo), geometria inadequada da conexão ou fadiga cíclica do parafuso. O correto torque de aperto (10–35 Ncm conforme o sistema) e oclusão adequada são preventivos.",
  },
  {
    id: "imp-c10-05",
    subject: "Implantodontia",
    topic: "Complicações",
    difficulty: "Avançado",
    question: "Qual é o fator de risco mais fortemente associado à periimplantite, conforme as principais revisões sistemáticas?",
    options: [
      "Uso de implantes de hexágono externo",
      "Histórico de periodontite tratada ou não tratada",
      "Implantes de comprimento inferior a 10 mm",
      "Conexão cimentada em vez de parafusada",
    ],
    correctIndex: 1,
    explanation:
      "Evidências robustas (Systematic Reviews de Derks et al., Renvert et al.) demonstram que histórico de periodontite é o principal fator de risco para periimplantite, provavelmente pelo reservatório bacteriano periodontopatogênico e pela susceptibilidade do hospedeiro.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 11 — IMPLANTODONTIA DIGITAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-c11-01",
    subject: "Implantodontia",
    topic: "Implantodontia Digital",
    difficulty: "Básico",
    question: "O guia cirúrgico estereolitográfico (impresso em 3D) para implantes é fabricado a partir de:",
    options: [
      "Wax-up diagnóstico em gesso",
      "Fusão da CBCT (osso) com o escaneamento intraoral ou do modelo (tecidos e dentes), processados em software de planejamento 3D",
      "Radiografia panorâmica convertida para arquivo STL",
      "Modelo de silicone obtido por moldagem convencional",
    ],
    correctIndex: 1,
    explanation:
      "O guia digital é gerado pelo software de planejamento (ex.: coDiagnostiX, Blue Sky Plan) que alinha a CBCT (volume ósseo 3D) com o scan intraoral ou do modelo (superfície dental/gengival). O arquivo STL resultante é então impresso em resina biocompatível.",
  },
  {
    id: "imp-c11-02",
    subject: "Implantodontia",
    topic: "Implantodontia Digital",
    difficulty: "Básico",
    question: "O protocolo All-on-4 (Nobel Biocare) utiliza quantos implantes por arco e qual é sua filosofia principal?",
    options: [
      "6 implantes todos paralelos, sem angulação",
      "4 implantes por arco — 2 anteriores axiais e 2 posteriores inclinados até 45°, com carga imediata de prótese fixa provisória",
      "8 implantes com distribuição uniforme por todo o arco",
      "2 implantes na sínfise mandibular com overdenture de bola",
    ],
    correctIndex: 1,
    explanation:
      "O All-on-4 usa 4 implantes por arco: 2 anteriores axiais e 2 posteriores inclinados (até 45°) para aproveitar o osso anterior disponível. A prótese fixa provisória é instalada no mesmo dia da cirurgia (carga imediata).",
  },
  {
    id: "imp-c11-03",
    subject: "Implantodontia",
    topic: "Implantodontia Digital",
    difficulty: "Intermediário",
    question: "No fluxo de trabalho digital em implantodontia, qual é a sequência correta?",
    options: [
      "Escâner intraoral → CBCT → impressão 3D do guia → cirurgia → fresagem CAD/CAM da prótese",
      "CBCT + escâner intraoral → software de planejamento 3D → confecção do guia cirúrgico → cirurgia guiada → escaneamento pós-operatório → CAD/CAM da prótese definitiva",
      "Moldagem convencional → CBCT → planejamento 2D → guia cirúrgico em acrílico → cirurgia",
      "Planejamento reverso manual → enceramento → guia termoformado → cirurgia",
    ],
    correctIndex: 1,
    explanation:
      "O fluxo digital integra CBCT (osso) + escâner intraoral (dentes/gengiva) no software de planejamento, onde se define a posição dos implantes. O guia é impresso e a prótese é fresada por CAD/CAM, permitindo precisão e previsibilidade em todo o processo.",
  },
  {
    id: "imp-c11-04",
    subject: "Implantodontia",
    topic: "Implantodontia Digital",
    difficulty: "Intermediário",
    question: "A cirurgia guiada por computador com guia estereolitográfico apresenta qual vantagem clínica primária?",
    options: [
      "Elimina a necessidade de anestesia local",
      "Permite instalar implantes sem retalho em casos selecionados, com posicionamento mais preciso e redução do tempo cirúrgico",
      "Dispensa o planejamento de CBCT",
      "Garante osseointegração mais rápida que a cirurgia convencional",
    ],
    correctIndex: 1,
    explanation:
      "A cirurgia guiada permite abordagem flapless (sem retalho) em casos selecionados, com menor trauma, menos dor pós-operatória e recuperação mais rápida. O posicionamento é mais preciso (erro médio de 1–2 mm no ápice), especialmente em casos complexos.",
  },
  {
    id: "imp-c11-05",
    subject: "Implantodontia",
    topic: "Implantodontia Digital",
    difficulty: "Avançado",
    question: "Qual é a principal limitação do fluxo de trabalho totalmente digital (full-arch) em relação à moldagem convencional?",
    options: [
      "O escâner intraoral não consegue capturar superfícies de cerâmica",
      "Acúmulo de erro de registro em arcadas longas (edêntulo total), que pode comprometer o assentamento passivo da prótese sobre múltiplos implantes",
      "A impressora 3D não consegue produzir modelos com precisão suficiente para próteses fixas",
      "O software CAD/CAM não suporta zircônia como material de fresagem",
    ],
    correctIndex: 1,
    explanation:
      "Em arcadas edêntulas totais com múltiplos implantes, o escâner intraoral pode acumular pequenos erros de registro ao longo da arcada, comprometendo o assentamento passivo. Técnicas de redução de erro (scan bodies, fotogrametria) estão em desenvolvimento para superar essa limitação.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IMPLANTODONTIA — QUESTÕES GERAIS (manutenção das originais revisadas)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "imp-b-01",
    subject: "Implantodontia",
    topic: "Osseointegração",
    difficulty: "Básico",
    question: "Qual o período clássico de osseointegração para a maxila, segundo Brånemark?",
    options: ["1 mês", "3 meses", "6 meses", "12 meses"],
    correctIndex: 2,
    explanation:
      "Brånemark descreveu 3 meses para mandíbula e 6 meses para maxila antes do carregamento protético. A maxila exige mais tempo pela menor densidade óssea (predominância de osso esponjoso).",
  },
  {
    id: "imp-b-02",
    subject: "Implantodontia",
    topic: "Materiais",
    difficulty: "Básico",
    question: "Qual material é mais utilizado na fabricação de implantes dentários e por quê?",
    options: [
      "Cromo-cobalto — pela dureza superior",
      "Titânio grau IV ou liga Ti-6Al-4V — pela biocompatibilidade e favorável formação de óxido superficial",
      "Zircônia — pela translucidez estética",
      "Aço inoxidável — pelo baixo custo",
    ],
    correctIndex: 1,
    explanation:
      "O titânio é o padrão-ouro pela biocompatibilidade superior, resistência mecânica e formação espontânea de óxido de titânio (TiO₂) na superfície, que é a base química da osseointegração.",
  },
  {
    id: "imp-b-03",
    subject: "Implantodontia",
    topic: "Anatomia Óssea",
    difficulty: "Básico",
    question: "Em qual estrutura anatômica o implante dentário é instalado?",
    options: [
      "Cemento radicular",
      "Osso alveolar",
      "Ligamento periodontal",
      "Dentina",
    ],
    correctIndex: 1,
    explanation:
      "O implante é posicionado no osso alveolar (ou basal), substituindo funcionalmente a raiz do dente ausente e transferindo as cargas mastigatórias para o tecido ósseo.",
  },
  {
    id: "imp-b-04",
    subject: "Implantodontia",
    topic: "Componentes",
    difficulty: "Básico",
    question: "O pilar (abutment) do implante tem qual função principal?",
    options: [
      "Ancorar o implante ao osso",
      "Conectar o implante à coroa protética",
      "Promover vascularização dos tecidos periimplantares",
      "Evitar a reabsorção óssea marginal",
    ],
    correctIndex: 1,
    explanation:
      "O abutment é o componente intermediário que conecta a fixture (implante osseointegrado) à coroa ou estrutura protética, transmitindo as forças e definindo o perfil de emergência.",
  },
  {
    id: "imp-i-01",
    subject: "Implantodontia",
    topic: "Planejamento",
    difficulty: "Intermediário",
    question: "Qual exame de imagem é considerado padrão-ouro para planejamento de implantes?",
    options: [
      "Radiografia periapical",
      "Tomografia computadorizada de feixe cônico (CBCT)",
      "Panorâmica digital",
      "Ressonância magnética",
    ],
    correctIndex: 1,
    explanation:
      "A CBCT oferece visualização tridimensional do volume ósseo, qualidade óssea e estruturas anatômicas de risco, sendo o padrão-ouro para planejamento implantológico — especialmente em casos complexos.",
  },
  {
    id: "imp-i-02",
    subject: "Implantodontia",
    topic: "Biomecânica",
    difficulty: "Intermediário",
    question: "O torque de inserção durante a instalação do implante mede:",
    options: [
      "A força de remoção do implante em caso de falha",
      "A resistência ao afundamento no osso, indicando estabilidade primária",
      "A força de aperto do parafuso do abutment",
      "A resistência à fratura do corpo do implante",
    ],
    correctIndex: 1,
    explanation:
      "Torque de inserção mede a resistência do osso durante a instalação. Valores ≥ 25–35 Ncm indicam boa estabilidade primária e podem autorizar protocolos de carga imediata, dependendo do sistema e do planejamento.",
  },
  {
    id: "imp-a-01",
    subject: "Implantodontia",
    topic: "Enxertos e ROG",
    difficulty: "Avançado",
    question: "O enxerto xenógeno (ex.: Bio-Oss®) possui quais propriedades osteogênicas?",
    options: [
      "Osteogênese, osteoindução e osteocondução",
      "Apenas osteocondução — serve como arcabouço para crescimento ósseo",
      "Apenas osteoindução — libera BMPs",
      "Osteogênese e osteocondução, mas não osteoindução",
    ],
    correctIndex: 1,
    explanation:
      "O xenoenxerto bovino desproteinizado (Bio-Oss®) é osteocondutor — serve como arcabouço mineral que o osso nativo pode colonizar. Não possui células osteogênicas (osteogênese) nem fatores de crescimento endógenos (osteoindução), ao contrário do autoenxerto.",
  },
  {
    id: "imp-a-02",
    subject: "Implantodontia",
    topic: "Superfície",
    difficulty: "Avançado",
    question: "A superfície SLActive (Straumann) difere da SLA convencional principalmente por:",
    options: [
      "Ser mais rugosa para aumentar o contato ósseo",
      "Ser hidrofilica (molhável) em vez de hidrofóbica, acelerando a adsorção de proteínas do sangue e a resposta biológica inicial",
      "Liberar flúor na interface osso-implante",
      "Ter rugosidade nanométrica em vez de micrométrica",
    ],
    correctIndex: 1,
    explanation:
      "A SLActive mantém a topografia da SLA mas é quimicamente modificada para ser super-hidrofílica (ângulo de contato ≈ 0°), armazenada em solução salina. Isso acelera a adsorção proteica e a osseointegração — permitindo osseointegração em 3–4 semanas vs. 6–8 semanas da SLA.",
  },
  {
    id: "imp-a-03",
    subject: "Implantodontia",
    topic: "Biomecânica",
    difficulty: "Avançado",
    question: "O 'platform switching' preserva a crista óssea marginal principalmente por qual mecanismo?",
    options: [
      "Aumenta a espessura do osso cortical periimplantar",
      "Desloca o infiltrado inflamatório da junção implante-abutment para dentro do implante, afastando-o da crista óssea",
      "Elimina o microgap entre implante e abutment",
      "Reduz as forças oclusais transmitidas ao osso crestal",
    ],
    correctIndex: 1,
    explanation:
      "Platform switching desloca o microgap e o infiltrado inflamatório biológico para dentro do diâmetro do implante (lateralmente, em direção ao centro). Estudos histológicos mostram que isso mantém o osso marginal 0,2–0,5 mm mais coronal comparado à plataforma convencional.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PRÓTESE PARCIAL FIXA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "ppf-b-01",
    subject: "Prótese Parcial Fixa",
    topic: "Fundamentos",
    difficulty: "Básico",
    question: "O que é uma prótese parcial fixa (PPF)?",
    options: [
      "Prótese removível que substitui poucos dentes",
      "Restauração cimentada ou adesivada a dentes ou implantes que não pode ser removida pelo paciente",
      "Aparelho ortodôntico fixo",
      "Prótese total fixada com parafusos",
    ],
    correctIndex: 1,
    explanation:
      "PPF (ponte fixa) é cimentada ou adesivada sobre dentes pilares ou implantes, sendo inseparável pelo paciente no uso cotidiano.",
  },
  {
    id: "ppf-b-02",
    subject: "Prótese Parcial Fixa",
    topic: "Componentes",
    difficulty: "Básico",
    question: "Na PPF convencional, o elemento que substitui o dente ausente é chamado de:",
    options: ["Retentor", "Pôntico", "Conector", "Pilar"],
    correctIndex: 1,
    explanation:
      "Pôntico é o elemento artificial suspenso da PPF que ocupa o espaço do dente perdido; os retentores se fixam nos dentes pilares.",
  },
  {
    id: "ppf-b-03",
    subject: "Prótese Parcial Fixa",
    topic: "Preparo",
    difficulty: "Básico",
    question: "Qual característica do preparo dental é essencial para a retenção de uma coroa total?",
    options: [
      "Paredes expulsivas (sem paralelismo)",
      "Paredes levemente convergentes em direção oclusal (convergência de 2–6° por parede)",
      "Chanfro profundo de 2 mm",
      "Ausência de linha de acabamento",
    ],
    correctIndex: 1,
    explanation:
      "Paredes axiais com convergência de 2–6° garantem retenção e resistência ao deslocamento da coroa. Preparos muito expulsivos reduzem drásticamente a retenção.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PRÓTESE TOTAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-b-01",
    subject: "Prótese Total",
    topic: "Fundamentos",
    difficulty: "Básico",
    question: "A retenção de uma prótese total convencional depende principalmente de:",
    options: [
      "Peso da própria prótese",
      "Adesão, coesão e tensão superficial da saliva, além do selamento periférico",
      "Encaixe mecânico nos dentes remanescentes",
      "Parafusos de fixação no osso",
    ],
    correctIndex: 1,
    explanation:
      "Sem dentes, a PT retém-se pelos princípios físicos da película salivar (adesão/coesão/tensão superficial) e pelo selamento periférico que impede a entrada de ar.",
  },
  {
    id: "pt-b-02",
    subject: "Prótese Total",
    topic: "DVO",
    difficulty: "Básico",
    question: "A Dimensão Vertical de Oclusão (DVO) representa:",
    options: [
      "O espaço funcional livre entre os dentes em repouso",
      "A altura da face em oclusão cêntrica com os dentes em contato",
      "A distância entre os arcos em máxima abertura",
      "O ângulo formado entre os planos de Frankfurt e oclusal",
    ],
    correctIndex: 1,
    explanation:
      "DVO é a medida vertical da face quando os dentes (ou próteses) estão em oclusão cêntrica. Difere da Dimensão Vertical de Repouso (DVR), que inclui o espaço livre interoclusal de 2–4 mm.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 1 — INTRODUÇÃO À PRÓTESE TOTAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c01-01",
    subject: "Prótese Total",
    topic: "Introdução e Conceitos",
    difficulty: "Básico",
    question: "O principal objetivo da prótese total convencional é:",
    options: [
      "Substituir os dentes perdidos apenas por razões estéticas",
      "Restaurar as funções mastigatória, fonética e estética, além de preservar os rebordos e tecidos de suporte remanescentes",
      "Impedir completamente a reabsorção óssea do rebordo edêntulo",
      "Servir como etapa transitória até o planejamento de implantes",
    ],
    correctIndex: 1,
    explanation:
      "A PT convencional tem objetivos funcionais (mastigação, fonação), estéticos (suporte labial e facial) e biológicos (proteção dos tecidos de suporte e manutenção relativa dos rebordos). A reabsorção não é completamente impedida, mas pode ser atenuada por próteses bem adaptadas.",
  },
  {
    id: "pt-c01-02",
    subject: "Prótese Total",
    topic: "Introdução e Conceitos",
    difficulty: "Básico",
    question: "O edentulismo total impacta a qualidade de vida do paciente principalmente por:",
    options: [
      "Aumento do risco de cárie nos dentes vizinhos",
      "Melhora da higiene bucal pela ausência de dentes",
      "Comprometimento da mastigação, fala, aparência e autoestima, com repercussões nutricionais e sociais",
      "Redução das visitas odontológicas necessárias",
    ],
    correctIndex: 2,
    explanation:
      "O edentulismo total compromete múltiplas dimensões da saúde: funcionais (dificuldade mastigatória reduz variedade alimentar e pode levar à desnutrição), fonéticas (alterações na fala), estéticas (colapso facial, envelhecimento) e psicossociais (constrangimento, isolamento). Estudos de qualidade de vida mostram impacto equivalente a condições sistêmicas crônicas graves.",
  },
  {
    id: "pt-c01-03",
    subject: "Prótese Total",
    topic: "Introdução e Conceitos",
    difficulty: "Intermediário",
    question: "A principal diferença entre a prótese total convencional e a prótese total imediata é:",
    options: [
      "A PT imediata usa dentes de porcelana enquanto a convencional usa resina",
      "A PT imediata é instalada no mesmo ato das extrações, antes da cicatrização dos alvéolos",
      "A PT convencional é sempre confeccionada em laboratório enquanto a imediata é feita em consultório",
      "A PT imediata dispensa a etapa de moldagem funcional",
    ],
    correctIndex: 1,
    explanation:
      "A PT imediata é instalada logo após as extrações dos últimos dentes remanescentes, enquanto os alvéolos ainda estão abertos. Isso evita o período sem prótese, mas exige reembasamento posterior (3–6 meses) após a remodelação óssea. A PT convencional é confeccionada após a cicatrização completa dos tecidos.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 2 — ANATOMIA DOS REBORDOS E TECIDOS DE SUPORTE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c02-01",
    subject: "Prótese Total",
    topic: "Anatomia dos Rebordos",
    difficulty: "Básico",
    question: "A linha AH (linha de vibração) é relevante na PT superior porque:",
    options: [
      "Define o limite anterior da área de suporte ósseo da prótese",
      "Marca o limite posterior da PT superior — a extensão distal deve atingir essa linha para garantir o selado posterior",
      "Representa a inserção do músculo bucinador no palato",
      "É o ponto de maior reabsorção óssea no arco superior",
    ],
    correctIndex: 1,
    explanation:
      "A linha AH (ou linha de vibração) é a junção entre o palato duro e o início do palato mole. A borda posterior da PT superior deve se estender até essa linha para realizar o selado posterior (pós-palato), criando pressão negativa que auxilia a retenção. Extensão além dessa linha compromete a retenção e conforto; aquém, há perda do selado.",
  },
  {
    id: "pt-c02-02",
    subject: "Prótese Total",
    topic: "Anatomia dos Rebordos",
    difficulty: "Intermediário",
    question: "Na PT inferior, o trígono retromolar deve ser:",
    options: [
      "Sempre excluído da base da prótese por ser área de inserção muscular",
      "Aliviado internamente na prótese pois contém vasos e nervos",
      "Coberto pela PT pois constitui área de suporte posterior importante",
      "Removido cirurgicamente antes da moldagem final",
    ],
    correctIndex: 2,
    explanation:
      "O trígono (ou almofada) retromolar é formado por tecido fibroglandular resistente e constitui a principal zona de suporte posterior da PT inferior. A base da prótese deve recobri-lo completamente. Excluí-lo reduz significativamente o suporte e a estabilidade da PT inferior, especialmente em rebordos muito reabsorvidos.",
  },
  {
    id: "pt-c02-03",
    subject: "Prótese Total",
    topic: "Anatomia dos Rebordos",
    difficulty: "Intermediário",
    question: "A presença de tórus palatino volumoso afeta a confecção da PT superior porque:",
    options: [
      "Aumenta a retenção da prótese por criar maior área de selado",
      "Requer alívio interno na base da prótese para evitar pressão sobre a mucosa delgada que o recobre, prevenindo úlceras e fratura da base",
      "Sempre exige remoção cirúrgica antes da confecção da PT",
      "Melhora a estabilidade da PT por servir como fulcro central",
    ],
    correctIndex: 1,
    explanation:
      "O tórus palatino é protuberância óssea recoberta por mucosa muito delgada e com pouca capacidade de absorver pressão. Na PT, a área deve receber alívio (espaço de 1–2 mm na base acrílica) para evitar pontos de pressão que causariam úlceras e fratura da prótese na linha mediana. A remoção cirúrgica só é indicada quando o tórus é muito volumoso e impede a confecção de PT adequada.",
  },
  {
    id: "pt-c02-04",
    subject: "Prótese Total",
    topic: "Anatomia dos Rebordos",
    difficulty: "Básico",
    question: "Os freios labiais e bucais são relevantes na confecção de PT porque:",
    options: [
      "Aumentam a retenção da prótese por sua ação muscular",
      "Devem ser recobertos completamente pela base da prótese para melhor selado",
      "São inserções musculares e de tecido conjuntivo que desalojam a PT se as bordas não forem adequadamente entalhadas nessas regiões",
      "Têm importância apenas na PT inferior, não afetando a superior",
    ],
    correctIndex: 2,
    explanation:
      "Os freios (labial superior, labial inferior, bucais, lingual) são pregas mucosas com inserção muscular subjacente. Durante a moldagem funcional e na borda da PT definitiva, essas regiões devem ser respeitadas com entalhes (recortes) precisos na borda da prótese. Se a PT bloquear o movimento dos freios, cada contração muscular desalojará a prótese.",
  },
  {
    id: "pt-c02-05",
    subject: "Prótese Total",
    topic: "Anatomia dos Rebordos",
    difficulty: "Avançado",
    question: "As zonas de suporte, alívio e selado periférico na PT superior correspondem respectivamente a:",
    options: [
      "Tuberosidades (suporte), rafe palatina e tórus (alívio), e bordas vestibulares e posteriores (selado)",
      "Toda a mucosa queratinizada (suporte), tecido adiposo e glandular do palato posterior (alívio), e bordas em todas as direções (selado)",
      "Rebordos alveolares (suporte), área do tórus e rafe (alívio), e bordas vestibulares com a zona de vibração posterior (selado)",
      "Palato duro central (suporte), tuberosidades (alívio), e freios (selado)",
    ],
    correctIndex: 2,
    explanation:
      "Na PT superior: (1) Zonas de suporte — rebordos alveolares e rugosidades palatinas que resistem às cargas oclusais; (2) Zonas de alívio — rafe palatina mediana (mucosa sobre osso duro, sem almofada de gordura) e sobre o tórus, onde pressão causaria dor e úlceras; (3) Selado periférico — bordas vestibulares e bucais (selado periférico anterior e lateral) mais zona de vibração/pós-palato (selado posterior).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 3 — REABSORÇÃO ÓSSEA E BIOLOGIA DO EDENTULISMO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c03-01",
    subject: "Prótese Total",
    topic: "Reabsorção Óssea",
    difficulty: "Intermediário",
    question: "O padrão de reabsorção óssea após o edentulismo difere entre maxila e mandíbula porque:",
    options: [
      "A maxila reabsorve mais rapidamente por ser ósseo cortical espesso, enquanto a mandíbula tem osso esponjoso que se preserva",
      "A reabsorção maxilar é centrípeta (o arco estreita medialmente) e a mandibular é centrífuga (o arco alarga lateralmente), resultando em discrepância crescente entre os arcos ao longo do tempo",
      "A mandíbula reabsorve mais rápido que a maxila por ter menor vascularização",
      "Ambas reabsorvem no mesmo padrão e velocidade, com diferenças apenas na magnitude",
    ],
    correctIndex: 1,
    explanation:
      "Na maxila, a reabsorção predomina na face vestibular externa, fazendo o arco encolher para dentro (centrípeto): o arco superior fica progressivamente menor. Na mandíbula, a reabsorção predomina na face lingual interna, com deposição na face vestibular externa, fazendo o arco aparentemente 'crescer' lateralmente (centrífugo). Esse padrão inverso cria relação esquelética de Classe III progressiva em pacientes de longa data edêntulos.",
  },
  {
    id: "pt-c03-02",
    subject: "Prótese Total",
    topic: "Reabsorção Óssea",
    difficulty: "Intermediário",
    question: "Na Classificação de Atwood para rebordos edêntulos, o Estágio VI (mais avançado) corresponde a:",
    options: [
      "Rebordo em forma de faca (crista alta e aguda)",
      "Rebordo plano sem proeminência",
      "Rebordo deprimido — perda do processo alveolar com exposição do osso basal; o rebordo fica abaixo do nível da mucosa circundante",
      "Rebordo arredondado com boa espessura",
    ],
    correctIndex: 2,
    explanation:
      "A classificação de Atwood (1963) descreve: Classe I (pré-extração), II (pós-extração imediata), III (arredondado, bem formado), IV (faca — crista alta e estreita), V (plano — processo alveolar perdido), VI (deprimido — base basal exposta com rebordo abaixo do nível dos tecidos adjacentes). O Estágio VI representa o maior desafio protético e frequentemente indica necessidade de implantes ou cirurgia pré-protética.",
  },
  {
    id: "pt-c03-03",
    subject: "Prótese Total",
    topic: "Reabsorção Óssea",
    difficulty: "Avançado",
    question: "O uso contínuo de prótese total mal adaptada (sem reembasamento periódico) acelera a reabsorção óssea principalmente porque:",
    options: [
      "A resina acrílica libera substâncias químicas que estimulam osteoclastos",
      "A má adaptação cria forças oclusais desfavoráveis (torção, tração e pressão concentrada) que estimulam a reabsorção óssea local por mecanismo piezoelétrico e compressivo",
      "A prótese mal adaptada impede a vascularização da mucosa, causando necrose óssea",
      "Próteses mal adaptadas sempre causam infecção bacteriana que destrói o osso",
    ],
    correctIndex: 1,
    explanation:
      "Uma PT mal adaptada transmite forças de forma não uniforme: pontos de apoio concentram cargas muito acima do limiar fisiológico, estimulando osteoclasia. Além disso, a PT instável gera movimentos de torção (forças de alavanca) que são especialmente danosos ao osso. A remodelação óssea segue a Lei de Wolff — forças inadequadas resultam em reabsorção. Próteses bem adaptadas e periodicamente reembasadas distribuem melhor as cargas.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 4 — EXAME CLÍNICO E DIAGNÓSTICO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c04-01",
    subject: "Prótese Total",
    topic: "Exame Clínico",
    difficulty: "Básico",
    question: "Na anamnese do paciente edêntulo que vai receber PT, a avaliação das próteses antigas é importante porque:",
    options: [
      "Permite reaproveitar os dentes artificiais da prótese antiga para reduzir custos",
      "É obrigatória legalmente antes de qualquer confecção de nova PT",
      "Fornece informações sobre a DVO habitual, estética aceita pelo paciente, queixas específicas e capacidade de adaptação a PT anteriores",
      "Permite copiar exatamente a PT antiga para garantir maior conforto na adaptação",
    ],
    correctIndex: 2,
    explanation:
      "As próteses antigas são valiosas fontes de informação: registram a DVO com a qual o paciente viveu, o posicionamento dos dentes aceito, as regiões de desconforto (desgastes, reparos), e revelam o histórico de adaptação do paciente a PT. Pacientes que nunca se adaptaram bem a PT anteriores apresentam maior risco de insatisfação com a nova.",
  },
  {
    id: "pt-c04-02",
    subject: "Prótese Total",
    topic: "Exame Clínico",
    difficulty: "Intermediário",
    question: "A presença de mucosa flácida (flabby ridge) no rebordo anterior superior representa um desafio protético porque:",
    options: [
      "A mucosa flácida tem maior capacidade de suporte que a fibromucosa firme",
      "O tecido flácido se desloca durante a moldagem convencional, resultando em base de PT mal adaptada em função",
      "A mucosa flácida é altamente vascularizada e sangra facilmente durante a moldagem",
      "Impede a realização do selado periférico nessa região",
    ],
    correctIndex: 1,
    explanation:
      "A mucosa flácida (rebordo fibroso flácido — geralmente na região anterior superior após reabsorção severa) é tecido conjuntivo frouxo e compressível. Durante moldagem convencional com materiais de média ou alta viscosidade, esse tecido é deslocado de sua posição de repouso. A PT resultante se adapta ao rebordo comprimido, mas em função normal (sem pressão da moldagem) a mucosa volta à posição, criando espaço entre a base da PT e o rebordo — instabilidade e perda de retenção. Requer técnica de moldagem sem pressão (window technique).",
  },
  {
    id: "pt-c04-03",
    subject: "Prótese Total",
    topic: "Exame Clínico",
    difficulty: "Intermediário",
    question: "No exame extrabucal do paciente edêntulo, a análise do sulco nasolabial é relevante porque:",
    options: [
      "O sulco nasolabial profundo indica excesso de suporte labial pela PT, devendo-se reduzir os dentes anteriores",
      "O aprofundamento do sulco nasolabial é sinal de suporte labial insuficiente — a PT deve posicionar os dentes anteriores de forma a restaurar o volume necessário para um perfil facial harmônico",
      "O sulco nasolabial só tem importância em pacientes jovens; em idosos é esperado e não deve ser corrigido",
      "O sulco nasolabial está relacionado apenas à DVO, não à posição dos dentes anteriores",
    ],
    correctIndex: 1,
    explanation:
      "Com o edentulismo, o lábio superior perde o suporte dos dentes anteriores e recua, aprofundando o sulco nasolabial e causando aparência de envelhecimento. O reposicionamento dos dentes anteriores superiores na PT deve compensar essa perda de suporte. O posicionamento adequado restaura o perfil, 'estica' suavemente o lábio superior e suaviza o sulco — objetivo essencial da reabilitação estética.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 5 — PLANO DE TRATAMENTO E SEQUÊNCIA CLÍNICA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c05-01",
    subject: "Prótese Total",
    topic: "Plano de Tratamento",
    difficulty: "Básico",
    question: "A sequência clínica clássica para confecção de PT convencional é:",
    options: [
      "Moldagem funcional → relação maxilo-mandibular → moldagem anatômica → prova → instalação",
      "Moldagem anatômica → moldagem funcional → relação maxilo-mandibular → prova em cera → instalação e ajustes",
      "Relação maxilo-mandibular → moldagem anatômica → moldagem funcional → instalação → prova",
      "Moldagem anatômica → prova em cera → moldagem funcional → relação maxilo-mandibular → instalação",
    ],
    correctIndex: 1,
    explanation:
      "A sequência correta é: (1ª consulta) Moldagem anatômica preliminar com moldeira de estoque e alginato → modelos de estudo; (2ª) Confecção de moldeira individual; (3ª) Moldagem funcional → modelos de trabalho; (4ª) Confecção de bases de prova e rolos de cera para (5ª) Relação maxilo-mandibular (DVO, RC, montagem em articulador); (6ª) Prova em cera para ajuste estético/fonético/oclusal; (7ª) Instalação e ajustes oclusais.",
  },
  {
    id: "pt-c05-02",
    subject: "Prótese Total",
    topic: "Plano de Tratamento",
    difficulty: "Intermediário",
    question: "O preparo pré-protético dos tecidos antes da moldagem funcional com condicionador tecidual é indicado quando:",
    options: [
      "O paciente relata intolerância a qualquer material de moldagem",
      "Os rebordos apresentam mucosa inflamada, eritematosa ou traumatizada por próteses antigas — o condicionador restaura a saúde e forma funcional dos tecidos antes da moldagem definitiva",
      "O paciente usa PT há menos de 5 anos",
      "É necessário apenas em casos de estomatite protética Tipo III (hiperplasia fibrosa)",
    ],
    correctIndex: 1,
    explanation:
      "Tecidos inflamados ou traumatizados por próteses mal adaptadas não representam o estado funcional normal da mucosa. Moldagens realizadas nessas condições registrariam a mucosa deformada, resultando em PT que também não se adapta bem aos tecidos saudáveis. O condicionador tecidual (material viscoelástico macio) é usado como forramento temporário da PT antiga por 1–4 semanas, permitindo recuperação tecidual antes da moldagem final.",
  },
  {
    id: "pt-c05-03",
    subject: "Prótese Total",
    topic: "Plano de Tratamento",
    difficulty: "Avançado",
    question: "Qual critério clínico contraindica a confecção de PT convencional e indica avaliação para overdenture sobre implantes?",
    options: [
      "Paciente com menos de 60 anos de idade",
      "Presença de tórus palatino de pequeno volume",
      "Rebordo mandibular Classe V ou VI de Atwood com instabilidade grave da PT e comprometimento funcional severo apesar de prótese bem confeccionada",
      "Paciente que nunca usou PT anteriormente",
    ],
    correctIndex: 2,
    explanation:
      "Rebordos muito reabsorvidos (Atwood V-VI) representam o principal limite da PT convencional: sem base óssea adequada, qualquer PT ficará instável durante a mastigação e fonação, independente da qualidade técnica. Nesses casos, 2 implantes na mandíbula com sistema de retenção (ball attachment ou Locator) transformam radicalmente o prognóstico. O Consenso de McGill (2002) e de York (2009) reconhecem a overdenture sobre 2 implantes como padrão mínimo de tratamento para o edêntulo mandibular.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 6 — RETENÇÃO, ESTABILIDADE E SUPORTE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c06-01",
    subject: "Prótese Total",
    topic: "Retenção, Estabilidade e Suporte",
    difficulty: "Básico",
    question: "A diferença fundamental entre retenção e estabilidade em PT é:",
    options: [
      "Retenção é a força que impede o deslocamento lateral da PT; estabilidade impede o deslocamento vertical",
      "Retenção resiste ao deslocamento no sentido de remoção (vertical/ocluso-gengival); estabilidade resiste aos deslocamentos horizontais e rotacionais durante a função",
      "Retenção e estabilidade são sinônimos em PT, ambas dependendo do selado periférico",
      "Retenção depende apenas dos implantes; estabilidade depende dos tecidos moles",
    ],
    correctIndex: 1,
    explanation:
      "São conceitos distintos e complementares: Retenção = resistência à remoção da PT em sentido vertical (contrário à inserção — forças de tração da PT para fora da boca); Estabilidade = resistência ao deslocamento lateral, anteroposterior e rotacional durante a mastigação, fonação e deglutição. Uma PT pode ter boa retenção (não cai ao abrir a boca) mas instável (desaloja durante a mastigação). O suporte é o terceiro pilar: resistência às forças verticais de compressão (forças mastigatórias para dentro).",
  },
  {
    id: "pt-c06-02",
    subject: "Prótese Total",
    topic: "Retenção, Estabilidade e Suporte",
    difficulty: "Intermediário",
    question: "O selado periférico em PT superior contribui para a retenção porque:",
    options: [
      "Cria uma zona de alta pressão positiva que 'cola' a PT ao rebordo",
      "Impede a entrada de ar entre a base da PT e a mucosa, mantendo pressão atmosférica acima da prótese maior que a pressão sob ela — gerando força de retenção passiva",
      "Aumenta a área de adesão salivar nas bordas da PT",
      "Ativa quimiorreceptores na mucosa que estimulam a produção de saliva viscosa",
    ],
    correctIndex: 1,
    explanation:
      "O selado periférico cria uma câmara relativamente fechada entre a base da PT e a mucosa. A pressão atmosférica (≈ 1 atm) age sobre toda a superfície externa da PT. Se o selado for eficaz, a pressão sob a PT é ligeiramente menor (pressão negativa relativa), resultando em força líquida que 'empurra' a PT contra o rebordo. A analogia é a ventosa: funciona porque a pressão externa é maior que a interna.",
  },
  {
    id: "pt-c06-03",
    subject: "Prótese Total",
    topic: "Retenção, Estabilidade e Suporte",
    difficulty: "Avançado",
    question: "A zona neutra é o espaço em que as PT devem ser confeccionadas porque:",
    options: [
      "É a região de menor vascularização da mucosa, ideal para suporte de cargas",
      "Nesse espaço as forças musculares dos lábios, bochechas e língua se equilibram — dentes e polido da PT posicionados aqui são estabilizados pelos músculos em vez de desalojados",
      "A zona neutra coincide sempre com a posição original dos dentes naturais",
      "É a área de menor profundidade de sulco, facilitando a moldagem periférica",
    ],
    correctIndex: 1,
    explanation:
      "A zona neutra (ou espaço neutro) é o volume no qual as forças de pressão externa (lábios e bochechas) e interna (língua) estão em equilíbrio. Dentes artificiais posicionados fora dessa zona são empurrados para fora (por lábios/bochechas) ou para dentro (pela língua), desestabilizando a PT. Posicionando os dentes e modelando o polido (faces laterais externas) da PT para respeitar esse espaço, os músculos passam a ser aliados da retenção.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 7 — MOLDAGEM EM PRÓTESE TOTAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c07-01",
    subject: "Prótese Total",
    topic: "Moldagem",
    difficulty: "Básico",
    question: "A moldagem funcional (secundária) em PT difere da moldagem anatômica (primária) porque:",
    options: [
      "A moldagem anatômica usa moldeira individual enquanto a funcional usa moldeira de estoque",
      "A moldagem funcional usa moldeira individual confeccionada sobre o modelo anatômico e registra os tecidos em sua posição funcional, incluindo o selado periférico dinâmico",
      "A moldagem funcional é sempre realizada com o paciente em posição supina",
      "A moldagem anatômica é mais precisa e a funcional é apenas uma confirmação",
    ],
    correctIndex: 1,
    explanation:
      "A moldagem anatômica (primária) é feita com moldeira de estoque e alginato para obter o modelo de estudo. Sobre ele, confecciona-se uma moldeira individual (em acrílico) ajustada aos tecidos desse paciente. A moldagem funcional usa essa moldeira individual, materiais de menor viscosidade e manipulações musculares para registrar os tecidos na forma que assumem durante a função — incluindo o selado periférico. O modelo resultante (modelo de trabalho) é a base para a PT definitiva.",
  },
  {
    id: "pt-c07-02",
    subject: "Prótese Total",
    topic: "Moldagem",
    difficulty: "Intermediário",
    question: "A técnica de moldagem seletiva em PT tem como objetivo:",
    options: [
      "Selecionar apenas as áreas de maior suporte para registrar, ignorando as demais",
      "Usar diferentes materiais de moldagem em diferentes áreas para aplicar pressão diferenciada — comprimindo as zonas de suporte e aliviando as zonas de mucosa frágil",
      "Realizar a moldagem apenas das arcadas com melhor rebordo",
      "Simplificar a moldagem evitando materiais de múltiplas viscosidades",
    ],
    correctIndex: 1,
    explanation:
      "A moldagem seletiva (selective pressure impression) reconhece que diferentes regiões do rebordo têm diferentes capacidades de suporte. Áreas de mucosa resistente (como a zona de suporte posterior) devem ser comprimidas durante a moldagem (material mais viscoso ou perfurações na moldeira). Áreas de mucosa delgada (rafe mediana, crista do rebordo reabsorvido) devem ser registradas sem pressão (alívio na moldeira ou material fluido). Isso distribui as cargas funcionais de forma fisiológica na PT.",
  },
  {
    id: "pt-c07-03",
    subject: "Prótese Total",
    topic: "Moldagem",
    difficulty: "Intermediário",
    question: "Para moldagem funcional de rebordo com mucosa flácida anterior (flabby ridge), a técnica mais indicada é:",
    options: [
      "Alginato de baixa viscosidade em moldeira de estoque, com pressão digital durante a presa",
      "Godiva de baixa fusão para bordas e pasta zinquenólica no corpo — comprimir firmemente para reduzir a flacidez",
      "Técnica de janela (window technique): alívio na moldeira individual sobre a área flácida e material fluido (silicone leve), sem pressão, enquanto o restante é moldado normalmente",
      "Poliéter de alta viscosidade para estabilizar a mucosa flácida em uma posição fixa",
    ],
    correctIndex: 2,
    explanation:
      "A técnica de janela (window technique) isola a área flácida: a moldeira individual é perfurada (janela) sobre essa região, e essa área é moldada separadamente com material fluido sem pressão (silicone de baixa viscosidade). O restante do rebordo é moldado com material convencional e pressão adequada. Isso evita o deslocamento da mucosa flácida que ocorreria com materiais viscosos, registrando-a em posição de repouso e evitando adaptação inadequada em função.",
  },
  {
    id: "pt-c07-04",
    subject: "Prótese Total",
    topic: "Moldagem",
    difficulty: "Avançado",
    question: "A moldagem da zona neutra tem como objetivo principal:",
    options: [
      "Registrar a posição do ponto interincisal dos dentes anteriores para guiar a estética",
      "Determinar tridimensionalmente o espaço em que as forças musculares (língua vs. bochechas e lábios) se equilibram, para que os dentes e polido da PT sejam posicionados nesse espaço",
      "Registrar o movimento de abertura máxima para programação do articulador",
      "Verificar o espaço disponível para o posicionamento dos dentes posteriores no arco inferior",
    ],
    correctIndex: 1,
    explanation:
      "A moldagem da zona neutra usa materiais maleáveis (como silicone de adição de consistência fluida sobre moldeira com cera ou polissulfeto) que o paciente deforma com movimentos funcionais normais (deglutição, fonação). O material endurece registrando a forma que os tecidos musculares imprimem — esse volume é a zona neutra. A PT construída com esse guia posiciona dentes e bordas onde a musculatura é aliada da estabilidade, não antagonista.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 8 — PLANO DE ORIENTAÇÃO OCLUSAL E BASES DE PROVA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c08-01",
    subject: "Prótese Total",
    topic: "Plano Oclusal",
    difficulty: "Básico",
    question: "O plano oclusal anterior da PT superior deve ser determinado paralelo à:",
    options: [
      "Linha de Frankfurt (porion-orbitale)",
      "Linha bipupilar, garantindo simetria horizontal no sorriso, com a borda dos incisivos ao nível do lábio superior em repouso",
      "Linha nasal (subnasal-glabela)",
      "Plano de Frankfort — paralelo ao horizonte do paciente em posição ortostática",
    ],
    correctIndex: 1,
    explanation:
      "O plano oclusal anterior é orientado paralelamente à linha bipupilar (linha imaginária entre os centros das pupilas), que define o horizonte estético facial. Isso garante que o plano dos incisivos superiores seja simétrico. A borda incisal dos incisivos superiores deve ficar ao nível ou ligeiramente abaixo da borda inferior do lábio superior em repouso (2–4 mm de exposição).",
  },
  {
    id: "pt-c08-02",
    subject: "Prótese Total",
    topic: "Plano Oclusal",
    difficulty: "Intermediário",
    question: "O plano de Camper é a referência para o plano oclusal posterior porque:",
    options: [
      "É paralelo ao plano de Frankfurt e garante oclusão estável",
      "Corresponde ao plano oclusal médio dos dentes posteriores em pacientes com dentição natural — é paralelo ao plano de Camper em aproximadamente 85% dos casos",
      "É de fácil localização clínica: base do nariz até o trago da orelha, sendo perpendicular ao eixo condilar",
      "Define a inclinação da curva de Spee no paciente específico",
    ],
    correctIndex: 1,
    explanation:
      "O plano de Camper (ala do nariz — trago da orelha) é paralelo ao plano oclusal dos dentes posteriores naturais na maioria dos pacientes, sendo a referência mais utilizada clinicamente. Isso porque ambos são paralelos ao osso basal da maxila. Usar essa referência posiciona o plano oclusal posterior em local anatomicamente compatível com a articulação temporomandibular e o côndilo.",
  },
  {
    id: "pt-c08-03",
    subject: "Prótese Total",
    topic: "Plano Oclusal",
    difficulty: "Intermediário",
    question: "O suporte labial adequado da PT superior é avaliado pelo:",
    options: [
      "Ângulo nasolabial — deve ser de 90° em todos os pacientes",
      "Espessura do rolo de cera anterior — quanto mais espesso, melhor o suporte",
      "Perfil facial de frente e de lado com o rolo de cera em posição: lábio superior sem tensão excessiva, sulco nasolabial suavizado, e ângulo nasolabial dentro da norma para o sexo e idade do paciente",
      "Posição dos incisivos inferiores em relação ao lábio inferior",
    ],
    correctIndex: 2,
    explanation:
      "O suporte labial é avaliado clinicamente observando o perfil de frente e lateral com o rolo de cera nos planos de prova. O suporte ideal suaviza (mas não apaga) o sulco nasolabial, projeta o lábio superior sem deixá-lo tenso, e mantém o ângulo nasolabial entre 90–110° (mulheres tendem a um ângulo mais agudo; homens mais reto). Excesso de suporte (rolo muito espalhado para frente) enrijece o lábio; insuficiência cria sulcos profundos e aspecto de envelhecimento.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 9 — RELAÇÕES MAXILO-MANDIBULARES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c09-01",
    subject: "Prótese Total",
    topic: "Relações Maxilo-Mandibulares",
    difficulty: "Básico",
    question: "O espaço funcional livre (EFL) é clinicamente utilizado para determinar a DVO porque:",
    options: [
      "O EFL é eliminado quando a DVO está correta",
      "A DVO correta é igual à DVR; o EFL ocorre apenas em patologias",
      "A DVO deve ser a DVR menos o EFL (2–4 mm): se a mandíbula em repouso está a certa distância do maxilar, subtraindo o EFL obtemos a DVO ideal",
      "O EFL equivale sempre a 3 mm em todos os pacientes adultos saudáveis",
    ],
    correctIndex: 2,
    explanation:
      "O método métrico para determinação da DVO baseia-se na relação: DVO = DVR − EFL. A DVR é medida com os músculos da mastigação em repouso (mandíbula na posição de repouso postural). O EFL — espaço interoclusal entre os planos de oclusão em repouso — varia normalmente de 2–4 mm. Portanto, se a DVR medida é 65 mm e o EFL estimado é 3 mm, a DVO seria ajustada para 62 mm nos rolos de cera. Deve ser confirmado com outros métodos.",
  },
  {
    id: "pt-c09-02",
    subject: "Prótese Total",
    topic: "Relações Maxilo-Mandibulares",
    difficulty: "Intermediário",
    question: "O método fonético para determinação da DVO baseia-se em que princípio?",
    options: [
      "O paciente deve emitir a vogal 'A' com a DVO correta para máxima abertura mandibular",
      "Ao pronunciar fonemas sibilantes ('S', 'Z'), os dentes anteriores se aproximam sem contato (espaço de 0,5–1 mm) — se houver contato dos dentes, a DVO está aumentada",
      "A voz do paciente muda de timbre quando a DVO está incorreta, ficando anasalada",
      "O paciente não consegue pronunciar 'M' com a DVO correta, pois os lábios não se tocam",
    ],
    correctIndex: 1,
    explanation:
      "O método fonético aproveita que ao pronunciar sibilantes ('S', 'Si', 'Sessenta e seis'), os dentes anteriores superiores e inferiores se aproximam maximamente sem contato — o 'closest speaking space' de 0,5–1 mm. Se ao pronunciar esses sons os dentes batem (contacto audível), a DVO está excessiva. Se o espaço for muito grande, a DVO pode estar insuficiente. É um método dinâmico e funcional, combinado com os métodos métrico, estético e de deglutição.",
  },
  {
    id: "pt-c09-03",
    subject: "Prótese Total",
    topic: "Relações Maxilo-Mandibulares",
    difficulty: "Intermediário",
    question: "A relação cêntrica (RC) é preferida como referência de registro intermaxilar em PT porque:",
    options: [
      "É a posição de máxima intercuspidação dos dentes artificiais",
      "É uma posição musculoesquelética reprodutível dos côndilos — independente dos dentes — permitindo registros confiáveis e montagem precisa em articulador",
      "É a posição mais confortável para a ATM e músculos mastigatórios durante a função",
      "Corresponde sempre à posição de máxima retrusão mandibular",
    ],
    correctIndex: 1,
    explanation:
      "A RC é definida como a relação musculoesquelética estável dos côndilos — na posição mais ântero-superior nas fossas articulares, contra as versantes posteriores dos tubérculos articulares, com os discos adequadamente interpostos. Por ser reprodutível e independente da posição dental, é a referência ideal em PT: os dentes artificiais ainda não existem (ou os rolos de cera não se intercuspam), então a RC é o único ponto de referência mandibular confiável.",
  },
  {
    id: "pt-c09-04",
    subject: "Prótese Total",
    topic: "Relações Maxilo-Mandibulares",
    difficulty: "Avançado",
    question: "O arco facial é utilizado na montagem em articulador de PT porque:",
    options: [
      "Permite determinar a DVO com precisão milimétrica",
      "Transfere para o articulador a distância e orientação tridimensional do modelo superior em relação ao eixo de charneira condilar do paciente, reproduzindo os arcos de movimento mandibular",
      "É necessário apenas para PT com dentes de porcelana, não para dentes de resina",
      "Substitui o registro de relação cêntrica quando o paciente não colabora",
    ],
    correctIndex: 1,
    explanation:
      "O arco facial captura a relação espacial entre os dentes superiores (ou o modelo superior) e os eixos condilares do paciente. Sem o arco facial, o modelo é montado em posição arbitrária no articulador, e os arcos de movimento simulados não refletem os movimentos reais do paciente. Em PT, onde a oclusão balanceada bilateral é fundamental, erros de montagem resultam em contatos oclusais incorretos que só serão percebidos na instalação — exigindo ajustes extensos.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 10 — SELEÇÃO E DISPOSIÇÃO DOS DENTES ARTIFICIAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c10-01",
    subject: "Prótese Total",
    topic: "Seleção dos Dentes",
    difficulty: "Básico",
    question: "A seleção da forma dos dentes anteriores superiores em PT deve considerar principalmente:",
    options: [
      "A cor da pele do paciente e o formato dos outros dentes artificiais disponíveis",
      "A forma, o tamanho e o sexo — a teoria de Leon Williams correlaciona a forma do dente com a forma invertida da face; o tamanho é determinado pelo comprimento do sorriso e espaço intert-caninos",
      "Exclusivamente a preferência estética do paciente, pois é uma decisão subjetiva",
      "O tipo de oclusão escolhida — dentes quadrados para oclusão balanceada e ovais para lingualizadal",
    ],
    correctIndex: 1,
    explanation:
      "A seleção dos dentes anteriores combina múltiplos fatores: forma (teoria de Leon Williams — oval para faces ovais, quadrada para faces quadradas, triangular para faces triangulares, embora essa correlação seja um guia, não uma regra absoluta), tamanho (largura dos 6 anteriores ≈ distância entre comissuras × 2/3; altura definida pela exposição desejada), e sexo/idade (masculino: formas mais angulosas; feminino: mais arredondadas; jovem: maior exposição). O paciente participa da aprovação estética final.",
  },
  {
    id: "pt-c10-02",
    subject: "Prótese Total",
    topic: "Seleção dos Dentes",
    difficulty: "Intermediário",
    question: "Os dentes artificiais de porcelana apresentam desvantagem em relação aos de resina na PT convencional porque:",
    options: [
      "São mais frágeis e quebram com facilidade durante a mastigação normal",
      "Não se unem quimicamente à base acrílica — necessitam de retenção mecânica (pinos, slots), são mais duros que o esmalte natural (desgastam o antagonista e transmitem maior impacto ao rebordo), e seu ajuste oclusal é mais difícil",
      "São mais caros de fabricar e impossíveis de encontrar em toda gama de cores",
      "Causam maior reação alérgica que os de resina por conterem feldspato",
    ],
    correctIndex: 1,
    explanation:
      "Dentes de porcelana têm vantagens estéticas (translucidez natural, brilho) e de resistência ao desgaste. Porém, como desvantagens em PT: (1) Não possuem ligação química com a base acrílica — precisam de retenção mecânica (pinos, slots, undercuts), podendo se soltar; (2) Dureza maior que o esmalte natural — desgastam o antagonista com dentes naturais e transmitem impacto maior ao rebordo (pressão de choque); (3) Difíceis de ajustar em boca (desgaste da porcelana requer instrumentos específicos e perde o glaze).",
  },
  {
    id: "pt-c10-03",
    subject: "Prótese Total",
    topic: "Disposição dos Dentes",
    difficulty: "Intermediário",
    question: "A curva de compensação (Spee e Wilson) nos dentes posteriores da PT tem como função:",
    options: [
      "Melhorar a estética do sorriso lateral",
      "Facilitar a limpeza da PT pelo paciente",
      "Proporcionar contatos oclusais bilaterais durante os movimentos excêntricos mandibulares (lateralidade e protrusão), garantindo a oclusão balanceada bilateral que estabiliza a PT",
      "Aumentar a eficiência mastigatória ao direcionar as forças apenas verticalmente",
    ],
    correctIndex: 2,
    explanation:
      "A curva de Spee (curvatura no plano sagital — côncava para cima, vista lateralmente) e a curva de Wilson (curvatura no plano frontal — côncava para cima, com inclinação lingual dos posteriores superiores e vestibular dos inferiores) criam, em conjunto, a esfera de Monson. Essa configuração permite que durante os movimentos excêntricos mandibulares haja simultaneamente contatos bilaterais nos dentes posteriores — o elemento fundamental da oclusão balanceada bilateral em PT, que previne desalojamento.",
  },
  {
    id: "pt-c10-04",
    subject: "Prótese Total",
    topic: "Disposição dos Dentes",
    difficulty: "Avançado",
    question: "A disposição em cross-bite (mordida cruzada posterior) é indicada em PT quando:",
    options: [
      "O paciente apresenta mordida cruzada natural antes do edentulismo",
      "Há discrepância entre as bases ósseas — rebordo superior muito reabsorvido (estreito) e inferior mais amplo — o cross-bite compensa anatomicamente e proporciona melhor estabilidade e função que a disposição convencional",
      "O paciente prefere esteticamente a disposição cruzada",
      "É a disposição padrão para PT inferiores em qualquer paciente",
    ],
    correctIndex: 1,
    explanation:
      "Com a reabsorção centrípeta da maxila e centrífuga da mandíbula, o arco superior fica progressivamente mais estreito que o inferior. Forçar a disposição convencional (superiores por fora dos inferiores) nessa situação gera instabilidade, forças de torção na PT superior e oclusão trocada. O cross-bite posterior reproduz a relação funcional que as bases ósseas exigem, resultando em PT mais estável, com melhor eficiência mastigatória e sem forças laterais desestabilizadoras.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 11 — PROVA DA PRÓTESE (DENTES EM CERA)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c11-01",
    subject: "Prótese Total",
    topic: "Prova em Cera",
    difficulty: "Básico",
    question: "Na prova de PT em cera, a avaliação do fonema 'S' serve para verificar:",
    options: [
      "Se a PT está causando lisping (ceceio) por posicionamento incorreto dos incisivos superiores",
      "O espaço interoclusal durante a função — ao pronunciar sibilantes, os dentes anteriores devem se aproximar sem contato; contato audível indica DVO excessiva",
      "Se os dentes anteriores superiores estão muito projetados para vestibular",
      "A adaptação do paciente ao novo volume da prótese na cavidade oral",
    ],
    correctIndex: 1,
    explanation:
      "O fonema 'S' produz o 'closest speaking space': os incisivos superiores e inferiores se aproximam com espaço de 0,5–1 mm. Se houver contato (som de 'clique' ou percussão), a DVO está aumentada. Se o espaço for excessivo (> 2–3 mm), pode indicar DVO reduzida. Ceceio (distorção do 'S') pode indicar posicionamento incorreto dos incisivos (muito para lingual ou vestibular) e não necessariamente erro de DVO.",
  },
  {
    id: "pt-c11-02",
    subject: "Prótese Total",
    topic: "Prova em Cera",
    difficulty: "Intermediário",
    question: "Durante a prova em cera, a aprovação estética pelo paciente deve ser:",
    options: [
      "Sempre aceita como definitiva, pois o paciente é o árbitro da estética",
      "Ignorada pelo profissional — critérios técnicos têm prioridade sobre a preferência subjetiva do paciente",
      "Obtida com o paciente sentado, em posição natural, com iluminação adequada, após explicar o que é ajustável — qualquer mudança deve ser registrada e realizada antes do processamento",
      "Feita com o paciente deitado na cadeira para padronização",
    ],
    correctIndex: 2,
    explanation:
      "A prova é o momento correto para ajustes estéticos: posição, inclinação, cor e forma dos dentes podem ser modificados antes do processamento sem grande custo. Após a acrilização, mudanças são complexas e caras. O paciente deve avaliar em posição sentada, com espelho, luz natural ou semelhante, e o acompanhante de confiança deve ser convidado para opinar. Queixas estéticas pós-instalação são muito mais difíceis de resolver.",
  },
  {
    id: "pt-c11-03",
    subject: "Prótese Total",
    topic: "Prova em Cera",
    difficulty: "Avançado",
    question: "A verificação da relação cêntrica durante a prova em cera é realizada porque:",
    options: [
      "A RC pode mudar entre a sessão de registros e a prova",
      "Erros no registro de RC ou na montagem em articulador podem resultar em PT com oclusão incorreta — identificados e corrigidos na prova em cera, evitam retrabalho após processamento",
      "É o momento de re-registrar a DVO, pois a cera muda a dimensão vertical",
      "O articulador semi-ajustável nunca reproduz corretamente a RC — ela deve ser re-verificada sempre",
    ],
    correctIndex: 1,
    explanation:
      "Erros de RC ou de montagem podem originar-se em: registro impreciso, distorção do material de registro, erro de transferência ao articulador ou problema no próprio articulador. Na prova em cera ainda é possível identificar e corrigir esses erros (re-registrar a RC, reposicionar os dentes). Após o processamento em resina, os erros oclusais só podem ser corrigidos com desgastes extensos ou refabricação completa — muito mais trabalhosos e custosos.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 12 — INSTALAÇÃO E AJUSTES OCLUSAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c12-01",
    subject: "Prótese Total",
    topic: "Instalação e Ajustes",
    difficulty: "Básico",
    question: "As orientações ao paciente no momento da instalação da PT devem incluir:",
    options: [
      "Usar a PT 24h por dia, inclusive durante o sono, para acelerar a adaptação",
      "Iniciar com alimentos duros para 'testar' a resistência da prótese",
      "Adaptação gradual (começar com alimentos macios, cortar em pedaços pequenos), higiene da PT e mucosa após cada refeição, remoção noturna para descanso dos tecidos, e retorno em 24–48h",
      "Usar adesivo para PT diariamente para aumentar a retenção",
    ],
    correctIndex: 2,
    explanation:
      "A orientação correta é essencial: (1) Alimentação gradual — a sensação tátil e proprioceptiva é muito diferente sem o ligamento periodontal; comece macio; (2) Higiene rigorosa — PT retém biofilme e resíduos que causam estomatite e mau odor; (3) Remoção noturna — os tecidos precisam de descanso e vascularização sem pressão; (4) Retorno precoce — úlceras e pontos de pressão surgem rapidamente e devem ser ajustados antes de causar lesões maiores.",
  },
  {
    id: "pt-c12-02",
    subject: "Prótese Total",
    topic: "Instalação e Ajustes",
    difficulty: "Intermediário",
    question: "O ajuste oclusal após a instalação da PT é realizado porque:",
    options: [
      "Toda PT necessita de desgaste extenso pois os articuladores nunca reproduzem a oclusão corretamente",
      "A compressão dos tecidos moles durante a função e as diferenças entre o articulador e a boca real (compressibilidade dos rebordos, umidade, temperatura) criam discrepâncias oclusais que só podem ser verificadas em boca com papel articular",
      "Os dentes artificiais sempre se deslocam durante o processamento da resina",
      "O ajuste oclusal em boca serve apenas para verificar a estética final da PT",
    ],
    correctIndex: 1,
    explanation:
      "Mesmo com articulador semi-ajustável e arco facial, a simulação laboratorial não reproduz perfeitamente a dinâmica oral: os tecidos moles se comprimem durante a função, a saliva altera a superfície, e pequenas distorções do processamento são inevitáveis. O ajuste oclusal em boca com papel articular (shimstock e carbono) identifica contatos prematuros e interferências excêntricas que devem ser eliminados para garantir oclusão balanceada bilateral funcional.",
  },
  {
    id: "pt-c12-03",
    subject: "Prótese Total",
    topic: "Instalação e Ajustes",
    difficulty: "Intermediário",
    question: "O cronograma de controle pós-instalação da PT deve incluir retornos porque:",
    options: [
      "O paciente precisa de treinamento mensal até aprender a usar a PT",
      "A reabsorção óssea progressiva leva ao afrouxamento gradual da PT — retornos periódicos permitem detectar perda de adaptação, úlceras crônicas, desgaste excessivo dos dentes e necessidade de reembasamento",
      "Os controles são exigência legal, sem necessidade clínica específica",
      "A PT precisa ser esterilizada em autoclave periodicamente no consultório",
    ],
    correctIndex: 1,
    explanation:
      "O acompanhamento é fundamental: (1ª semana) ajustes de úlceras e oclusão; (1 mês) reavaliação da adaptação; (6 meses) verificação da saúde dos tecidos; (anual) avaliação de reembasamento e desgaste oclusal. A reabsorção óssea é inevitável — uma PT adaptada hoje estará solta em 5–7 anos sem reembasamento. O controle periódico preserva os tecidos, previne lesões e prolonga a vida útil da PT.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 13 — CONCEITOS DE OCLUSÃO APLICADOS À PT
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c13-01",
    subject: "Prótese Total",
    topic: "Oclusão em Prótese Total",
    difficulty: "Intermediário",
    question: "A oclusão balanceada bilateral em PT é definida como:",
    options: [
      "Oclusão em que os dentes anteriores têm contato em todos os movimentos",
      "Esquema em que há contatos oclusais simultâneos em ambos os lados (trabalho e balanceio) durante todos os movimentos excêntricos, estabilizando a prótese e impedindo desalojamento",
      "Oclusão com contato apenas em um lado durante a mastigação, alternando entre os lados",
      "Contato apenas dos dentes posteriores em relação cêntrica, sem contatos nos movimentos excêntricos",
    ],
    correctIndex: 1,
    explanation:
      "A oclusão balanceada bilateral (balanced occlusion) é o esquema oclusal clássico para PT: em todos os movimentos mandibulares (protrusão, lateralidade direita, lateralidade esquerda), há contatos simultâneos em ambos os lados. Esses contatos são forças de reação que estabilizam as bases das PT — o lado contralateral ao do movimento funcional fornece o contato de 'balanceio' que impede que a prótese se levante. É diferente da oclusão mutuamente protegida usada em dentição natural.",
  },
  {
    id: "pt-c13-02",
    subject: "Prótese Total",
    topic: "Oclusão em Prótese Total",
    difficulty: "Avançado",
    question: "A Lingualized Occlusion (oclusão lingualizadal) de Gerber-Pound caracteriza-se por:",
    options: [
      "Contato de todas as cúspides superiores e inferiores durante a oclusão cêntrica",
      "Contato exclusivo das cúspides palatinas superiores nas fossas centrais dos dentes inferiores, sem contato das cúspides vestibulares — combinando eficiência mastigatória com ausência de forças laterais desestabilizadoras",
      "Uso de dentes sem cúspides tanto superior quanto inferiormente",
      "Contato apenas das cúspides vestibulares inferiores nas fossas centrais superiores",
    ],
    correctIndex: 1,
    explanation:
      "Na lingualized occlusion: (1) As cúspides palatinas superiores (funcionais) ocluem nas fossas centrais dos dentes inferiores — contato funcional eficiente; (2) As cúspides vestibulares superiores e inferiores NÃO fazem contato — evitam forças laterais sobre os rebordos; (3) O balanceio ocorre pelas cúspides palatinas superiores tocando as cristas marginais/fossas dos dentes inferiores do lado de balanceio. Combina vantagens da oclusão balanceada com simplificação clínica e redução de forças horizontais.",
  },
  {
    id: "pt-c13-03",
    subject: "Prótese Total",
    topic: "Oclusão em Prótese Total",
    difficulty: "Intermediário",
    question: "A oclusão monoplanar (dentes sem cúspides, planos) é indicada principalmente para:",
    options: [
      "Pacientes com parafunção severa (bruxismo) que irão desgastar qualquer cúspide rapidamente",
      "Rebordos muito reabsorvidos e PT inferior muito instável — os planos oclusais geram apenas forças verticais e eliminam as componentes horizontais que desalojariam a PT instável",
      "Pacientes jovens com boa retenção e estabilidade, pois proporcionam melhor estética",
      "PT sobre implantes, onde a oclusão monoplanar é obrigatória",
    ],
    correctIndex: 1,
    explanation:
      "A oclusão monoplanar usa dentes sem cúspides (planos ou com cúspides muito reduzidas) montados em plano horizontal. O principal benefício é que as forças geradas durante a mastigação são predominantemente verticais (compressivas), sem componentes horizontais (cortantes) que desestabilizariam a PT. É ideal para rebordos Classe V–VI de Atwood, onde qualquer força horizontal causa instabilidade. A mastigação é menos eficiente mas a estabilidade da PT é prioridade.",
  },
  {
    id: "pt-c13-04",
    subject: "Prótese Total",
    topic: "Oclusão em Prótese Total",
    difficulty: "Avançado",
    question: "Comparando oclusão balanceada bilateral e lingualizadal para PT, a vantagem clínica da lingualizadal é:",
    options: [
      "Maior eficiência mastigatória por ter mais contatos oclusais",
      "Simplificação dos ajustes — apenas as cúspides palatinas superiores precisam ser equilibradas, mas mantendo estabilidade bilateral; as cúspides vestibulares não entram na equação de balanceio",
      "Maior retenção das PT pois as cúspides criam vácuo na interface PT-mucosa",
      "Eliminação completa da necessidade de articulador — pode ser montada diretamente em boca",
    ],
    correctIndex: 1,
    explanation:
      "Na oclusão balanceada bilateral clássica, todas as cúspides (vestibulares e linguais de ambos os arcos) precisam estar em equilíbrio durante todos os movimentos — ajuste laboratorial e clínico muito complexo. Na lingualizadal, apenas as cúspides palatinas superiores são os elementos de contato e balanceio — muito mais simples de ajustar. O resultado clínico em estabilidade de PT é comparável (alguns estudos mostram vantagem da lingualizadal em rebordos reabsorvidos) com menor complexidade técnica.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 14 — ARTICULADORES E MONTAGEM EM ARTICULADOR
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c14-01",
    subject: "Prótese Total",
    topic: "Articuladores",
    difficulty: "Intermediário",
    question: "O articulador semi-ajustável é preferido ao articulador simples (charneira) em PT porque:",
    options: [
      "É mais barato e fácil de usar no laboratório",
      "Reproduz o eixo de rotação condilar e permite programar os ângulos condilar e de Bennett individualizados via registros do paciente, resultando em simulação mais fiel dos movimentos mandibulares",
      "Não necessita de arco facial para montagem do modelo superior",
      "Permite montar modelos sem necessidade de registro de relação cêntrica",
    ],
    correctIndex: 1,
    explanation:
      "O articulador simples (charneira) reproduz apenas o movimento de abertura-fechamento puro, sem movimentos excêntricos reais. O semi-ajustável permite: (1) transferência da posição espacial do modelo superior via arco facial; (2) programação do ângulo da eminência articular (condilar) e ângulo de Bennett (movimento lateral condilar) a partir de registros do paciente. Isso permite ajuste da oclusão balanceada bilateral no laboratório, reduzindo o trabalho de ajuste clínico em boca.",
  },
  {
    id: "pt-c14-02",
    subject: "Prótese Total",
    topic: "Articuladores",
    difficulty: "Avançado",
    question: "A principal limitação dos articuladores em PT é que:",
    options: [
      "Não permitem a montagem de modelos superiores e inferiores ao mesmo tempo",
      "São demasiado complexos para uso rotineiro no laboratório dental",
      "Não reproduzem a compressibilidade e deformação dos tecidos moles durante a função — ajustes oclusais em boca sempre serão necessários após a instalação",
      "São eficazes apenas para PT superior, não para PT inferior",
    ],
    correctIndex: 2,
    explanation:
      "Mesmo os articuladores mais sofisticados simulam movimentos em rígidos sem reproduzir o comportamento elástico dos tecidos moles de suporte. Durante a mastigação, a mucosa e o osso alveolar se deformam ligeiramente, modificando a relação oclusal. Além disso, a temperatura oral, a saliva e pequenas distorções do processamento laboratorial criam discrepâncias. Por isso, ajuste oclusal em boca é sempre necessário após instalação de qualquer PT.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 15 — RESINA ACRÍLICA E MATERIAIS DE BASE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c15-01",
    subject: "Prótese Total",
    topic: "Resina Acrílica",
    difficulty: "Básico",
    question: "A polimerização da resina acrílica termopolimerizável por ciclo lento (banho a 74°C por 8h ou mais) é preferível à rápida (fervura) porque:",
    options: [
      "O ciclo lento é obrigatório por normas da ANVISA",
      "O ciclo rápido não polimeriza adequadamente o monômero residual",
      "A fervura gera calor exotérmico excessivo que evapora o monômero antes da polimerização, causando porosidade interna — o ciclo lento mantém temperatura abaixo do ponto de ebulição do monômero, produzindo base mais homogênea e resistente",
      "O ciclo lento produz resina de cor mais natural e translúcida",
    ],
    correctIndex: 2,
    explanation:
      "O monômero do acrílico termopolimerizável (metilmetacrilato) tem ponto de ebulição de 100,3°C. Durante a polimerização, há reação exotérmica que eleva a temperatura da mufla. Em ciclo rápido (fervura direta), a temperatura pode exceder o ponto de ebulição do monômero antes que toda a resina polimerize, criando bolhas (porosidade) na base. O ciclo lento mantém a temperatura controlada (74°C por 8h + 1h em fervura), permitindo polimerização homogênea sem evaporação do monômero.",
  },
  {
    id: "pt-c15-02",
    subject: "Prótese Total",
    topic: "Resina Acrílica",
    difficulty: "Intermediário",
    question: "A contração de polimerização da resina acrílica da PT tem impacto clínico porque:",
    options: [
      "A contração aumenta a retenção da PT ao rebordo por criar pressão negativa",
      "Causa distorção dimensional da base durante o processamento, comprometendo o assentamento — a PT pode não se adaptar perfeitamente ao modelo após a demuflagem e exigir reembasamento precoce",
      "A contração é neutralizada pela expansão térmica que ocorre quando a PT é usada em temperatura corporal",
      "Só é clinicamente relevante em PT inferiores, não nas superiores",
    ],
    correctIndex: 1,
    explanation:
      "A resina acrílica contrai cerca de 0,2–0,5% durante a polimerização. Em PT, essa contração não é uniforme (maior nas extremidades, menor no centro), causando distorção da base — tipicamente um leve arqueamento em forma de banana. Isso faz a PT não assentar perfeitamente no rebordo. Técnicas de processamento corretas (ciclo adequado, embalagem a quente, pressão durante a polimerização) minimizam a distorção, mas o reembasamento após alguns meses de uso é frequentemente necessário.",
  },
  {
    id: "pt-c15-03",
    subject: "Prótese Total",
    topic: "Resina Acrílica",
    difficulty: "Intermediário",
    question: "O reembasamento indireto (laboratorial) é preferível ao direto (resina autopolimerizável em consultório) porque:",
    options: [
      "O reembasamento indireto pode ser feito sem remover a PT da boca",
      "A resina autopolimerizável contém monômero residual livre irritante à mucosa, e a técnica indireta produz resina mais homogênea com menor contração e melhor adaptação final",
      "O reembasamento direto é mais caro e demorado",
      "A resina termopolimerizável usada no laboratório tem a mesma composição da autopolimerizável, mas o processo é mais demorado",
    ],
    correctIndex: 1,
    explanation:
      "O reembasamento direto com resina autopolimerizável em consultório tem vantagens de rapidez e menor custo imediato, mas desvantagens importantes: maior quantidade de monômero residual livre (irritante à mucosa em pacientes sensíveis), maior porosidade e contração, e qualidade final inferior à termopolimerizável. O indireto envia a PT ao laboratório onde é reembasada com resina termopolimerizável em ciclo controlado — maior qualidade, menor irritação e melhor durabilidade.",
  },
  {
    id: "pt-c15-04",
    subject: "Prótese Total",
    topic: "Resina Acrílica",
    difficulty: "Intermediário",
    question: "A diferença entre rebase e reembasamento (relining) de PT é:",
    options: [
      "Rebase usa resina autopolimerizável; reembasamento usa termopolimerizável",
      "No rebase toda a base é substituída (mantendo os dentes e a relação oclusal); no reembasamento adiciona-se uma camada de resina sobre a base existente para recuperar a adaptação ao rebordo",
      "Rebase é feito em PT nova; reembasamento apenas em PT com mais de 5 anos",
      "São termos sinônimos para o mesmo procedimento de reforço da base acrílica",
    ],
    correctIndex: 1,
    explanation:
      "Rebase (rebasing): toda a base acrílica é removida e substituída por nova resina, mantendo os dentes artificiais em posição — indicado quando a base está muito deteriorada, com fraturas ou distorção grave, mas a oclusão e estética dos dentes são aceitáveis. Reembasamento (relining): acrescenta-se resina à superfície interna (mucosa) da base existente para compensar a reabsorção óssea e recuperar a adaptação — é o procedimento mais simples e frequente de manutenção da PT.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 16 — MATERIAIS DE REEMBASAMENTO E CONDICIONADORES TECIDUAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c16-01",
    subject: "Prótese Total",
    topic: "Condicionadores Teciduais",
    difficulty: "Intermediário",
    question: "O condicionador tecidual difere dos materiais de reembasamento definitivo porque:",
    options: [
      "É mais rígido que a resina acrílica, proporcionando melhor suporte ao rebordo",
      "É um material viscoelástico temporário (vida útil de 1–4 semanas) que se adapta dinamicamente ao rebordo, aliviando trauma e permitindo recuperação tecidual — não é substituto permanente da resina",
      "Pode ser usado indefinidamente como alternativa à confecção de nova PT",
      "É exclusivamente indicado para PT superior, não sendo eficaz na inferior",
    ],
    correctIndex: 1,
    explanation:
      "Condicionadores teciduais (ex.: VISCO-GEL, Coe-Comfort) são materiais resilientes temporários aplicados na superfície interna da PT. Sua composição (polietilmetacrilato + plastificante) lhes confere comportamento viscoelástico: fluem sob pressão estática (adaptando-se ao rebordo) mas recuperam a forma lentamente. Com o tempo, o plastificante migra e o material endurece e se contamina, exigindo substituição após 1–4 semanas. São usados para alívio de mucosa traumatizada antes de moldagem definitiva.",
  },
  {
    id: "pt-c16-02",
    subject: "Prótese Total",
    topic: "Condicionadores Teciduais",
    difficulty: "Intermediário",
    question: "Os materiais resilientes (soft liners) permanentes são indicados em PT para:",
    options: [
      "Qualquer paciente que deseje maior conforto, independente das condições do rebordo",
      "Pacientes com rebordos muito reabsorvidos, mucosa atrófica, fixa sobre osso sem almofada de tecido mole — absorvem impactos mastigatórios e reduzem a dor transmitida ao osso",
      "PT que serão usadas apenas por períodos curtos (menos de 1 ano)",
      "Casos em que a PT superior está bem adaptada mas a inferior apresenta problemas",
    ],
    correctIndex: 1,
    explanation:
      "Soft liners permanentes (silicones ou resinas de poliuretano vulcanizadas a frio) criam uma interface elástica entre a base rígida da PT e a mucosa. São especialmente úteis em: rebordos muito reabsorvidos com mucosa diretamente sobre o osso (sem amortecimento natural), pacientes com dor crônica ao uso de PT rígida, e casos em que implantes não são viáveis. Exigem manutenção periódica, pois degradam com o tempo, e higiene rigorosa para evitar colonização fúngica.",
  },
  {
    id: "pt-c16-03",
    subject: "Prótese Total",
    topic: "Condicionadores Teciduais",
    difficulty: "Básico",
    question: "O uso crônico de adesivos para PT (como fixadores em pasta ou pó) é indicado como:",
    options: [
      "Solução definitiva para PT com perda de retenção por reabsorção óssea",
      "Recurso auxiliar temporário aceitável, mas não substituto de PT bem adaptada — PT que precisa de adesivo para funcionar necessita de avaliação para reembasamento ou substituição",
      "Proibido pois os adesivos causam danos irreversíveis à mucosa",
      "Tratamento de primeira escolha para todos os pacientes com instabilidade de PT inferior",
    ],
    correctIndex: 1,
    explanation:
      "Adesivos para PT melhoram temporariamente a retenção e podem ser usados ocasionalmente por pacientes bem orientados. Porém, o uso crônico mascara a má adaptação e pode: dificultar o diagnóstico de úlceras por pressão, alterar a relação oclusal (camada de adesivo muda a DVO), e atrasar o tratamento definitivo. PT que só funciona com adesivo é PT que precisa de reembasamento ou substituição. Alguns estudos associam uso excessivo a toxicidade por zinco (em adesivos que contém zinco).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 17 — COMPLICAÇÕES CLÍNICAS E SOLUÇÕES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c17-01",
    subject: "Prótese Total",
    topic: "Complicações",
    difficulty: "Intermediário",
    question: "A estomatite protética Tipo II na classificação de Newton é caracterizada por:",
    options: [
      "Hiperemia pontual sob a área de um pino de fixação dos dentes",
      "Hiperemia difusa eritematosa que acomete toda a mucosa recoberta pela PT superior, frequentemente associada à infecção por Candida albicans e ao uso contínuo (inclusive durante o sono)",
      "Hiperplasia papilar inflamatória com projeções nodulares no palato",
      "Úlcera única na borda posterior da PT superior",
    ],
    correctIndex: 1,
    explanation:
      "A classificação de Newton para estomatite protética: Tipo I — hiperemia punctata (pequenos pontos eritematosos, geralmente sobre os orifícios das glândulas salivares), Tipo II — eritema difuso que recobre toda a mucosa de suporte (vermelhidão uniforme do palato, muitas vezes assintomática), Tipo III — hiperplasia papilar inflamatória (múltiplas projeções papiliformes eritematosas). O Tipo II é o mais comum e está fortemente associado ao uso noturno da PT e colonização por Candida.",
  },
  {
    id: "pt-c17-02",
    subject: "Prótese Total",
    topic: "Complicações",
    difficulty: "Básico",
    question: "A úlcera traumática por PT é identificada clinicamente por:",
    options: [
      "Lesão avermelhada sem perda de epitélio, bilateral, na borda da língua",
      "Lesão ulcerada dolorosa com halo eritematoso localizada no rebordo ou mucosa alveolar, com correspondência ao ponto de pressão da borda da PT",
      "Lesão branca não destacável na mucosa jugal, associada ao atrito da PT",
      "Lesão vesiculosa com fluido claro, bilateralmente simétrica, no palato duro",
    ],
    correctIndex: 1,
    explanation:
      "A úlcera traumática por PT tem características clínicas específicas: é ulcerada (com perda do epitélio, expondo o tecido conjuntivo subjacente), dolorosa, com bordas eritematosas e contorno irregular, localizada no ponto exato de contato excessivo da borda da PT. O diagnóstico é confirmado identificando o ponto de pressão correspondente na borda ou na superfície interna da PT (muitas vezes visível como área brilhante ou com marcas de pressão). Responde rapidamente ao ajuste da prótese.",
  },
  {
    id: "pt-c17-03",
    subject: "Prótese Total",
    topic: "Complicações",
    difficulty: "Avançado",
    question: "A fratura de PT na linha mediana é frequentemente causada por:",
    options: [
      "Queda da PT no chão, que sempre fractura na região mais fraca",
      "Flexão cíclica durante a mastigação em PT com espessura insuficiente no palato médio ou com poros internos que concentram tensão — bruxismo e PT longa sem suporte palatino central são fatores de risco",
      "Reação química da saliva com o monômero residual ao longo do tempo",
      "Excesso de carga oclusal nos dentes anteriores",
    ],
    correctIndex: 1,
    explanation:
      "A linha mediana é o ponto de maior flexão da PT superior durante a mastigação — as cargas dos lados direito e esquerdo criam forças de torção opostas que convergem no centro. Fatores que predispõem: espessura insuficiente do palato (< 2 mm), porosidade interna (enfraquece a resina), PT com extensão posterior insuficiente (perde suporte), e bruxismo (cargas muito elevadas). A solução é confeccionar nova PT com malha metálica de reforço embutida no palato ou aumentar a espessura da base.",
  },
  {
    id: "pt-c17-04",
    subject: "Prótese Total",
    topic: "Complicações",
    difficulty: "Intermediário",
    question: "O tratamento da estomatite protética deve incluir, além dos antifúngicos, obrigatoriamente:",
    options: [
      "Substituição imediata da PT por nova, sem esperar a resolução da infecção",
      "Remoção noturna da PT, higiene rigorosa da PT e mucosa, imersão da PT em solução antifúngica — sem remover e higienizar a PT, os antifúngicos têm eficácia limitada pois o biofilme de Candida persiste",
      "Uso de corticoide tópico para reduzir a inflamação antes do antifúngico",
      "Biopsia da mucosa para confirmar o diagnóstico antes de qualquer tratamento",
    ],
    correctIndex: 1,
    explanation:
      "A Candida albicans forma biofilme aderente à superfície interna da PT que é resistente aos antifúngicos sistêmicos e tópicos da mucosa se a PT contaminada não for tratada. O protocolo completo inclui: antifúngico sistêmico (fluconazol) ou tópico na mucosa, imersão da PT em solução antifúngica (nistatina, clorexidina, hipoclorito diluído) ou micro-ondas úmido, remoção noturna, e orientações de higiene. Sem tratar a PT como reservatório, a recidiva é quase certa.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 18 — REABSORÇÃO PROGRESSIVA E REAVALIAÇÃO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c18-01",
    subject: "Prótese Total",
    topic: "Reavaliação e Retratamento",
    difficulty: "Intermediário",
    question: "O critério para indicar reembasamento versus confecção de nova PT depende principalmente de:",
    options: [
      "Apenas do tempo de uso — PT com mais de 5 anos devem sempre ser substituídas",
      "Da qualidade da relação maxilo-mandibular, oclusão, estética dos dentes e integridade da base — se esses parâmetros ainda são adequados, o reembasamento recupera a adaptação; se comprometidos, nova PT é indicada",
      "Da preferência financeira do paciente — reembasamento é sempre indicado por ser mais barato",
      "Da idade do paciente — pacientes acima de 70 anos sempre recebem reembasamento; mais jovens recebem PT nova",
    ],
    correctIndex: 1,
    explanation:
      "A decisão de reembazar versus confeccionar nova PT é clínica e multifatorial: Reembasamento é indicado quando a DVO, RC, estética dos dentes e oclusão ainda estão adequados e apenas a adaptação (assentamento ao rebordo) está comprometida pela reabsorção. Nova PT é indicada quando há desgaste excessivo dos dentes (perda de oclusão balanceada), DVO inadequada, estética inaceitável, ou base muito fraturada/porosa. Não existe critério de tempo fixo — a avaliação clínica anual determina o momento.",
  },
  {
    id: "pt-c18-02",
    subject: "Prótese Total",
    topic: "Reavaliação e Retratamento",
    difficulty: "Avançado",
    question: "O conceito de 'prótese de transição' em PT se refere a:",
    options: [
      "PT provisória usada apenas durante as consultas de ajuste",
      "PT convencional que serve como tratamento definitivo até o planejamento de implantes",
      "PT transitória (geralmente uma PT imediata) usada durante o período de cicatrização e remodelação óssea pós-extração, antes da confecção da PT definitiva após estabilização dos rebordos",
      "PT feita de resina temporária que será reprocessada em definitiva após aprovação do paciente",
    ],
    correctIndex: 2,
    explanation:
      "A PT de transição — mais frequentemente a PT imediata — serve para manter função e estética enquanto os rebordos cicatrizam e remodelam (3–6 meses). Durante esse período, reembasamentos com condicionadores teciduais ou resina direta mantêm a adaptação. Após a estabilização dos rebordos (comprovada pela ausência de mudanças significativas no assentamento), confecciona-se a PT definitiva com moldagem e registros precisos. O conceito reconhece que PT feita sobre rebordos em cicatrização terá adaptação sub-ótima.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 19 — PRÓTESE TOTAL IMEDIATA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c19-01",
    subject: "Prótese Total",
    topic: "Prótese Total Imediata",
    difficulty: "Intermediário",
    question: "A principal contraindicação da PT imediata é:",
    options: [
      "Paciente com mais de 65 anos de idade",
      "Presença de apenas 4 ou menos dentes remanescentes",
      "Infecção ativa (periapical, periodontal grave) nos dentes a extrair — o risco de complicações cirúrgicas, má cicatrização e disseminação da infecção é inaceitável",
      "Paciente que nunca usou PT anteriormente",
    ],
    correctIndex: 2,
    explanation:
      "A PT imediata tem como contraindicações absolutas: infecção ativa nos sítios de extração (risco de bacteremia, alveolite, abscessos), hemofilia não controlada, e radioterapia recente de cabeça e pescoço (risco de osteorradionecrose). A infecção ativa é a mais comum — deve-se controlar a infecção antes de realizar as extrações e instalação da PT. Outras contraindicações relativas incluem: diabetes descontrolado, paciente incapaz de compreender o protocolo pós-operatório.",
  },
  {
    id: "pt-c19-02",
    subject: "Prótese Total",
    topic: "Prótese Total Imediata",
    difficulty: "Intermediário",
    question: "A orientação pós-operatória mais crítica nas primeiras 24h após a instalação da PT imediata é:",
    options: [
      "Remover a PT imediatamente ao chegar em casa para lavar os alvéolos",
      "Não remover a PT nas primeiras 24h — ela funciona como curativo cirúrgico compressivo que reduz edema e sangramento; remover a PT nesse período dificulta a reinserção por edema",
      "Usar a PT apenas durante as refeições e removê-la nos intervalos",
      "Lavar a PT em álcool 70% a cada 2h nas primeiras 24h",
    ],
    correctIndex: 1,
    explanation:
      "A PT imediata instalada logo após as extrações atua como um penso cirúrgico, comprimindo os tecidos e reduzindo o espaço morto nos alvéolos — isso minimiza o sangramento, o edema e o desconforto pós-operatório. Remover a PT nessas primeiras 24h pode resultar em impossibilidade de reinserção (edema intenso) e perda da compressão benéfica. O paciente retorna em 24–48h ao consultório para o primeiro ajuste e avaliação — nesse momento o profissional, não o paciente, retira a PT pela primeira vez.",
  },
  {
    id: "pt-c19-03",
    subject: "Prótese Total",
    topic: "Prótese Total Imediata",
    difficulty: "Intermediário",
    question: "O reembasamento da PT imediata é necessário porque:",
    options: [
      "A resina usada na PT imediata é diferente da definitiva e perde dureza com o tempo",
      "Após 3–6 meses, a remodelação óssea dos alvéolos e a reabsorção do rebordo tornam a PT imediata mal adaptada — o reembasamento recupera a adaptação até que seja confeccionada a PT definitiva",
      "A PT imediata nunca tem selado periférico adequado e o reembasamento corrigi isso imediatamente",
      "É obrigatório por lei realizar o reembasamento antes de 3 meses de uso",
    ],
    correctIndex: 1,
    explanation:
      "Após as extrações, os alvéolos cicatrizam com remodelação óssea intensa nos primeiros 3–6 meses: os alvéolos fecham, o rebordo muda de forma e volume significativamente. A PT imediata, confeccionada antes dessas mudanças, vai progressivamente perdendo adaptação. Reembasamentos periódicos (condicionador tecidual inicialmente, resina direta ou indireta depois) mantêm a PT em uso durante esse período. Após estabilização do rebordo, confecciona-se a PT definitiva com moldagem precisa.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 20 — OVERDENTURE E PT SOBRE IMPLANTES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c20-01",
    subject: "Prótese Total",
    topic: "Overdenture sobre Implantes",
    difficulty: "Básico",
    question: "A overdenture mandibular sobre 2 implantes é considerada o padrão mínimo de tratamento para o edêntulo total mandibular porque:",
    options: [
      "É obrigatória por protocolo do CFO para todos os edêntulos totais",
      "Dois implantes mandibulares com sistema de encaixe melhoram significativamente retenção, estabilidade, mastigação e qualidade de vida em relação à PT convencional, com custo e morbidade aceitáveis para a maioria dos pacientes",
      "A PT convencional inferior não tem nenhuma retenção em rebordos normais",
      "Dois implantes são suficientes para suportar toda a carga mastigatória sem necessidade de suporte mucoso",
    ],
    correctIndex: 1,
    explanation:
      "O Consenso de McGill (2002) e o Consenso de York (2009) estabeleceram que a overdenture sobre 2 implantes deve ser o tratamento de primeira escolha para o edêntulo mandibular — não apenas para rebordos reabsorvidos. Estudos de qualidade de vida mostram melhoras significativas na mastigação (especialmente de alimentos duros), estabilidade, fonação e autoestima comparadas à PT convencional. A relação custo-benefício é favorável mesmo para pacientes com menor poder aquisitivo.",
  },
  {
    id: "pt-c20-02",
    subject: "Prótese Total",
    topic: "Overdenture sobre Implantes",
    difficulty: "Intermediário",
    question: "O sistema de retenção Locator em overdenture tem como vantagem sobre a barra-clipe:",
    options: [
      "Maior retenção absoluta — o Locator retém mais que qualquer sistema de barra",
      "Compensação angular de até 40° entre implantes não paralelos, menor volume, facilidade de manutenção (troca do insert), custo laboratorial menor e possibilidade de instalação em implantes com divergências",
      "Não requer manutenção periódica — é um sistema completamente passivo",
      "Permite suporte completamente implantossuportado, eliminando o suporte mucoso",
    ],
    correctIndex: 1,
    explanation:
      "O Locator (e sistemas similares) usa um pilar cônico com insert colorido (nylon) de diferentes retenções. Vantagens: (1) autocicatrizante — a geometria cônica compensa divergências angulares de até 40° entre implantes (barra exige implantes paralelos); (2) perfil baixo — não ocupa espaço interoclusal excessivo; (3) manutenção simples — inserts trocados pelo paciente ou profissional conforme desgastem; (4) laboratório simples — sem solda ou fundição de barra. A barra-clipe tem vantagem em distribuição de cargas, mas exige implantes paralelos e manutenção mais complexa.",
  },
  {
    id: "pt-c20-03",
    subject: "Prótese Total",
    topic: "Overdenture sobre Implantes",
    difficulty: "Intermediário",
    question: "A overdenture maxilar geralmente requer 4 ou mais implantes enquanto a mandibular funciona bem com 2 porque:",
    options: [
      "A maxila tem mais dentes a serem substituídos que a mandíbula",
      "O osso maxilar é menos denso (Tipo III-IV vs. Tipo I-II mandibular) e oferece menor ancoramento por implante; além disso, a geometria maior do arco superior exige mais pontos de suporte para distribuição adequada das cargas",
      "A PT superior é sempre maior e mais pesada que a inferior, exigindo mais suporte",
      "É uma convenção clínica sem base biomecânica específica",
    ],
    correctIndex: 1,
    explanation:
      "A mandíbula anterior tem osso de boa densidade (Tipo I-II de Lekholm & Zarb), com excelente ancoragem para implantes. A maxila frequentemente apresenta osso de menor densidade (Tipo III-IV), especialmente nas regiões posteriores, e a disponibilidade óssea pode ser limitada (seio maxilar, reabsorção). Além disso, a PT superior tem que lutar contra a gravidade (diferente da inferior) e a geometria maior do arco exige mais pontos de ancoragem para estabilidade. Com 4 implantes em arco maxilar, resultados são bons; com 2, há maior risco de instabilidade.",
  },
  {
    id: "pt-c20-04",
    subject: "Prótese Total",
    topic: "Overdenture sobre Implantes",
    difficulty: "Intermediário",
    question: "A principal diferença clínica entre overdenture implantossuportada e PT convencional é:",
    options: [
      "A overdenture não precisa de moldagem funcional para confecção",
      "A PT convencional é sempre inferior à overdenture em todos os parâmetros",
      "A overdenture tem retenção ativa fornecida pelos encaixes nos implantes (mecânica), enquanto a PT convencional depende exclusivamente da física (pressão atmosférica, adesão salivar e selado periférico)",
      "A overdenture não pode ser removida pelo paciente para higiene",
    ],
    correctIndex: 2,
    explanation:
      "A retenção da PT convencional é passiva — depende de fenômenos físicos (adesão/coesão salivar, tensão superficial, selado periférico, pressão atmosférica). A overdenture tem retenção ativa mecânica — os sistemas de encaixe (ball attachment, Locator, barra-clipe) cravam ativamente na matriz alojada na PT, gerando força de retenção muito superior. Isso se traduz clinicamente em: PT que não se desloca ao morder, ao rir ou ao falar, melhorando radicalmente a confiança e qualidade de vida do paciente.",
  },
  {
    id: "pt-c20-05",
    subject: "Prótese Total",
    topic: "Overdenture sobre Implantes",
    difficulty: "Avançado",
    question: "A manutenção dos sistemas de retenção de overdenture (troca dos inserts/matrizes plásticas) é necessária periodicamente porque:",
    options: [
      "Os titânio dos implantes se corrói com a saliva após 2 anos",
      "As matrizes plásticas (inserts de nylon, clipes da barra) sofrem desgaste cíclico com as forças de inserção e remoção diárias, perdendo gradualmente a capacidade de retenção — a troca restaura a retenção original sem necessidade de novo procedimento cirúrgico",
      "A overdenture deve ser substituída por nova PT a cada 2 anos",
      "Os implantes se osteointegram mais profundamente com o tempo, exigindo ajuste das matrizes",
    ],
    correctIndex: 1,
    explanation:
      "O componente que sofre desgaste em uma overdenture não é o implante (titânio — duradouro) nem a sobrestrutura metálica, mas as matrizes plásticas (inserts de nylon nos pilares Locator, clipes de plástico na barra). Com cada inserção e remoção diária, a força de encaixe vai diminuindo. A troca periódica (tipicamente a cada 1–2 anos, ou quando o paciente nota redução da retenção) é simples, de baixo custo e restaura a retenção da overdenture sem cirurgia ou confecção de nova prótese.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CAP. 21 — ASPECTOS PSICOLÓGICOS E COMUNICAÇÃO COM O PACIENTE
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "pt-c21-01",
    subject: "Prótese Total",
    topic: "Aspectos Psicológicos",
    difficulty: "Intermediário",
    question: "Na classificação de House para pacientes que receberão PT, o paciente 'filosófico' é aquele que:",
    options: [
      "Tem expectativas irreais e nunca aceita o resultado do tratamento",
      "Aceita bem as limitações do tratamento, tem expectativas realistas, compreende as restrições da PT e coopera com o tratamento — é o perfil ideal para reabilitação com PT",
      "É indiferente ao resultado, aceitando qualquer PT sem avaliação crítica",
      "Questiona cada etapa do tratamento e precisa de justificativas detalhadas para cada procedimento",
    ],
    correctIndex: 1,
    explanation:
      "A classificação de House descreve 4 tipos de pacientes: (1) Filosófico — atitude positiva, expectativas realistas, aceita as limitações, cooperativo; melhor prognóstico. (2) Exigente — perfeccionista, expectativas muito altas, difícil de satisfazer mas pode ter bons resultados com manejo adequado; (3) Cético — descrente das possibilidades, relutante ao tratamento; prognóstico reservado. (4) Indiferente — aparentemente não se importa com o resultado, não segue orientações; mau prognóstico pela falta de cooperação.",
  },
  {
    id: "pt-c21-02",
    subject: "Prótese Total",
    topic: "Aspectos Psicológicos",
    difficulty: "Intermediário",
    question: "O gerenciamento adequado das expectativas do paciente antes do início do tratamento com PT inclui:",
    options: [
      "Garantir ao paciente que a PT terá o mesmo conforto e função dos dentes naturais",
      "Explicar honestamente as limitações da PT (menor eficiência mastigatória que dentes naturais, período de adaptação, retenção dependente de fatores anatômicos, manutenção necessária), documentando as expectativas discutidas",
      "Evitar falar sobre possíveis problemas para não gerar ansiedade no paciente",
      "Afirmar que todos os pacientes se adaptam perfeitamente à PT em menos de 2 semanas",
    ],
    correctIndex: 1,
    explanation:
      "A comunicação honesta e documentada sobre as limitações da PT é fundamental por razões éticas e legais. PT nunca substitui completamente os dentes naturais: eficiência mastigatória é de 20–25% da dentição natural; o período de adaptação varia de semanas a meses; a retenção depende da anatomia dos rebordos (que o profissional não controla completamente). Pacientes com expectativas realistas têm muito maior satisfação com o resultado. A insatisfação pós-tratamento é frequentemente resultado de expectativas não gerenciadas.",
  },
  {
    id: "pt-c21-03",
    subject: "Prótese Total",
    topic: "Aspectos Psicológicos",
    difficulty: "Básico",
    question: "O consentimento informado antes da confecção de PT deve incluir:",
    options: [
      "Apenas a autorização para as extrações dos dentes remanescentes",
      "A descrição do procedimento, as alternativas de tratamento (incluindo overdenture sobre implantes), as limitações esperadas da PT, os riscos e as responsabilidades do paciente na manutenção",
      "Somente o custo do procedimento e a previsão de número de consultas",
      "O consentimento pode ser verbal — a documentação escrita não é necessária para PT",
    ],
    correctIndex: 1,
    explanation:
      "O consentimento informado é um direito do paciente e responsabilidade ética e legal do profissional. Em PT, deve incluir: (1) descrição clara do tratamento proposto; (2) alternativas (PT convencional vs. imediata vs. overdenture sobre implantes — com prós e contras de cada uma); (3) limitações esperadas (retenção, estabilidade, adaptação, reabsorção progressiva); (4) necessidade de manutenção e retornos periódicos; (5) responsabilidade do paciente (higiene, uso correto, comparecimento às consultas). Deve ser assinado antes do início do tratamento.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 1–6: FUNDAMENTOS E ANESTESIOLOGIA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c01-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Introdução e Princípios Gerais",
    difficulty: "Básico",
    question: "Os princípios fundamentais de toda cirurgia oral incluem:",
    options: [
      "Velocidade de execução, uso mínimo de anestesia e sutura com fio de nylon 6.0 em todos os casos",
      "Assepsia e antissepsia rigorosas, hemostasia eficaz, manipulação cuidadosa dos tecidos, visibilidade adequada e síntese por planos",
      "Antibioticoterapia profilática obrigatória em todos os procedimentos, independente do risco",
      "Realização obrigatória de exame histopatológico de todos os tecidos removidos",
    ],
    correctIndex: 1,
    explanation:
      "Os princípios de Halsted, ainda válidos, orientam toda cirurgia: (1) assepsia/antissepsia — campo estéril, antissepsia bucal pré-operatória; (2) hemostasia — controle do sangramento para campo operatório limpo e boa cicatrização; (3) manipulação gentil dos tecidos — retalhos sem tensão, evitar necrose; (4) visibilidade — incisões e retalhos que exponham adequadamente; (5) síntese sem tensão — sutura que reaproxima sem estrangular.",
  },
  {
    id: "cbmf-c01-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Introdução e Princípios Gerais",
    difficulty: "Básico",
    question: "A diferença prática entre antissepsia e assepsia em cirurgia oral é:",
    options: [
      "Antissepsia é o processo físico de esterilização de instrumentais; assepsia é o uso de substâncias químicas na pele",
      "Assepsia é o conjunto de medidas que impedem a introdução de microrganismos no campo cirúrgico; antissepsia é a redução de microrganismos em tecidos vivos (pele e mucosa) com agentes químicos",
      "São termos sinônimos utilizados indistintamente em odontologia",
      "Assepsia refere-se apenas ao instrumental; antissepsia refere-se apenas ao paciente",
    ],
    correctIndex: 1,
    explanation:
      "Assepsia: conjunto de medidas preventivas que impedem a chegada de microrganismos ao campo cirúrgico (esterilização de instrumental, campo estéril, paramentação, técnica asséptica). Antissepsia: uso de agentes químicos antimicrobianos em tecidos vivos para reduzir carga microbiana (clorexidina 0,12% para bochecho pré-operatório, povidona-iodo na pele). Em cirurgia oral: ambas são necessárias e complementares.",
  },
  {
    id: "cbmf-c02-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Avaliação Pré-Operatória",
    difficulty: "Intermediário",
    question: "Na classificação ASA, um paciente com hipertensão arterial sistêmica controlada por medicação e sem limitação funcional é classificado como:",
    options: [
      "ASA I — paciente saudável",
      "ASA II — doença sistêmica leve, sem limitação funcional",
      "ASA III — doença sistêmica grave com limitação funcional",
      "ASA IV — doença sistêmica grave com risco de vida",
    ],
    correctIndex: 1,
    explanation:
      "ASA II inclui pacientes com doença sistêmica leve e bem controlada, sem limitação de atividades: HAS controlada, diabetes tipo 2 com HbA1c < 8%, obesidade leve, fumante atual, etilismo social. Esses pacientes podem receber procedimentos ambulatoriais sob anestesia local com cautela (p.ex., limitar vasoconstritor). ASA III já implica limitação funcional (angina estável, HAS não controlada, diabetes com complicações) e requer avaliação médica antes de procedimentos eletivos.",
  },
  {
    id: "cbmf-c02-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Avaliação Pré-Operatória",
    difficulty: "Intermediário",
    question: "O manejo pré-cirúrgico do paciente em uso de anticoagulante oral (varfarina) para cirurgia dentoalveolar eletiva deve ser:",
    options: [
      "Suspender a varfarina 7 dias antes de qualquer cirurgia oral",
      "Manter a varfarina com INR entre 2–3 e realizar a cirurgia com hemostasia local rigorosa (esponja de fibrina, sutura, mordida em gaze) — estudos mostram que o risco de sangramento controlável é menor que o risco de tromboembolismo pela suspensão",
      "Substituir sempre por heparina de baixo peso molecular (HBPM) nos 3 dias pré-cirúrgicos",
      "Aguardar INR < 1,5 antes de qualquer procedimento cirúrgico oral",
    ],
    correctIndex: 1,
    explanation:
      "O consenso atual (AHA, AAOMS) para cirurgia dentoalveolar em pacientes anticoagulados com INR terapêutico (2–3): NÃO suspender o anticoagulante. O risco de evento tromboembólico pela suspensão (AVE, TEP, IAM) supera o risco de sangramento cirúrgico oral, que é local e controlável com medidas hemostáticas locais. Com INR > 3,5, avaliar com médico responsável. Exceto cirurgias extensas (múltiplas extrações, cirurgia de siso com ostectomia ampla) que podem requerer ajuste.",
  },
  {
    id: "cbmf-c02-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Avaliação Pré-Operatória",
    difficulty: "Intermediário",
    question: "O manejo odontológico do paciente diabético não controlado (glicemia > 250 mg/dL) que necessita de extração dentária urgente é:",
    options: [
      "Realizar o procedimento normalmente — a glicemia só importa em cirurgias com anestesia geral",
      "Adiar o procedimento até controle glicêmico, pois hiperglicemia compromete a cicatrização, aumenta risco de infecção e pode causar emergência hiperglicêmica",
      "Dobrar a dose de antibiótico para compensar a imunossupressão do diabetes",
      "Realizar o procedimento em hospital independentemente da glicemia",
    ],
    correctIndex: 1,
    explanation:
      "Hiperglicemia (> 250 mg/dL) compromete múltiplos aspectos da cicatrização e resposta imune: disfunção leucocitária (quimiotaxia e fagocitose reduzidas), microangiopatia (menor perfusão tecidual), maior colonização bacteriana. Em procedimentos eletivos, aguardar controle glicêmico (HbA1c < 8%) é ideal. Em urgências absolutas (celulite, abscesso), realizar com cautela, cobertura antibiótica e monitorização. Procedimentos em diabéticos controlados (HbA1c < 8%, glicemia < 180) são seguros em ambiente ambulatorial.",
  },
  {
    id: "cbmf-c03-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cicatrização",
    difficulty: "Básico",
    question: "As fases da cicatrização de feridas cirúrgicas ocorrem na seguinte sequência:",
    options: [
      "Inflamação → hemostasia → proliferação → remodelação",
      "Hemostasia → inflamação → proliferação (granulação e epitelização) → remodelação",
      "Proliferação → hemostasia → inflamação → cicatrização",
      "Remodelação → proliferação → inflamação → hemostasia",
    ],
    correctIndex: 1,
    explanation:
      "As 4 fases sobrepostas: (1) Hemostasia (0–horas): vasoconstrição reflexa, plug plaquetário, cascata de coagulação — forma o coágulo que fecha a ferida e libera fatores de crescimento; (2) Inflamação (1–4 dias): vasodilatação, quimiotaxia de neutrófilos e macrófagos, limpeza de debris; (3) Proliferação (4–21 dias): fibroblastos produzem colágeno, angiogênese, epitelização da superfície; (4) Remodelação (21 dias–1 ano): reorganização do colágeno, aumento da resistência tênsil.",
  },
  {
    id: "cbmf-c03-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cicatrização",
    difficulty: "Intermediário",
    question: "O principal fator local que compromete a cicatrização após cirurgia oral é:",
    options: [
      "Uso de anestésico local com vasoconstritor durante o procedimento",
      "Sutura com fio de seda em vez de nylon",
      "Contaminação bacteriana, isquemia tecidual por retalho mal planejado ou sutura sob tensão, e corpo estranho (fragmento ósseo, dente)",
      "Realização de bochecho com clorexidina nas primeiras 24h",
    ],
    correctIndex: 2,
    explanation:
      "Os principais fatores locais que prejudicam a cicatrização: (1) Infecção — bactérias prolungam a fase inflamatória e destroem tecido de granulação; (2) Isquemia — retalho com base estreita, sutura muito apertada ou hematoma comprimem vasos e privam o tecido de oxigênio; (3) Corpo estranho — fragmentos ósseos, raiz ou dente deslocados mantêm resposta inflamatória crônica; (4) Movimento da ferida — trauma repetido impede organização do colágeno. Fatores sistêmicos: diabetes, tabagismo, desnutrição, imunossupressão.",
  },
  {
    id: "cbmf-c03-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cicatrização",
    difficulty: "Intermediário",
    question: "O retalho cirúrgico trapezoidal (com duas incisões relaxantes verticais) tem vantagem sobre o retalho envelope (sem relaxante) porque:",
    options: [
      "É mais rápido de suturar e causa menos sangramento intraoperatório",
      "Oferece maior acesso ao campo cirúrgico com melhor visibilidade, reduz tensão na sutura e melhora a vascularização da base do retalho — indicado quando se prevê ostectomia ampla",
      "Elimina completamente o risco de recessão gengival pós-operatória",
      "Não exige sindesmotomia prévia ao descolamento",
    ],
    correctIndex: 1,
    explanation:
      "O retalho trapezoidal tem base maior que o ápice (para garantir aporte sanguíneo), duas incisões relaxantes verticais oblíquas e uma incisão horizontal sulcular. Proporciona excelente acesso e visibilidade para ostectomias e odontossecções amplas, e a sutura não fica sob tensão (o que causaria isquemia e deiscência). Desvantagem: maior trauma de mucosa e risco de recessão gengival. O envelope (só horizontal) tem menos risco de recessão mas acesso limitado — adequado para exodontias simples.",
  },
  {
    id: "cbmf-c04-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Anestesia Local",
    difficulty: "Básico",
    question: "O mecanismo de ação dos anestésicos locais é:",
    options: [
      "Bloqueio dos receptores de dor (nociceptores) na medula espinhal",
      "Bloqueio reversível dos canais de sódio voltagem-dependentes na membrana do neurônio, impedindo a despolarização e propagação do impulso nervoso",
      "Estimulação de receptores opióides endógenos que inibem a transmissão dolorosa",
      "Vasodilatação local que diluição o agente inflamatório e reduz a dor",
    ],
    correctIndex: 1,
    explanation:
      "Os anestésicos locais (amidas: lidocaína, articaína, mepivacaína, bupivacaína) são bases fracas que penetram na membrana do neurônio na forma não ionizada e, no interior ácido da célula, ionizam-se e bloqueiam os canais de Na⁺ pela face interna. Sem influxo de Na⁺, o potencial de ação não se propaga e a transmissão nociceptiva é interrompida. O efeito é reversível — quando o fármaco difunde para fora, a função nervosa retorna. A ionização no meio ácido dos tecidos inflamados explica a menor eficácia em abscessos.",
  },
  {
    id: "cbmf-c04-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Anestesia Local",
    difficulty: "Intermediário",
    question: "A epinefrina (adrenalina) como vasoconstritor nos anestésicos locais é contraindicada em:",
    options: [
      "Todos os pacientes cardiopatas, independente do tipo ou grau de comprometimento",
      "Pacientes com hipertireoidismo não controlado, uso de inibidores de MAO, feocromocitoma, e em bloqueio regional em região com circulação terminal (dedos, pênis, lobo da orelha)",
      "Pacientes idosos acima de 65 anos",
      "Procedimentos com duração superior a 30 minutos",
    ],
    correctIndex: 1,
    explanation:
      "Contraindicações absolutas da epinefrina: (1) Feocromocitoma — a liberação de catecolaminas do tumor somada à epinefrina pode causar crise hipertensiva fatal; (2) Hipertireoidismo não controlado — tiroxina potencializa os efeitos cardiovasculares das catecolaminas; (3) Inibidores de MAO — risco de crise hipertensiva por bloqueio da metabolização da epinefrina; (4) Anestesia tronco-regional em áreas de circulação terminal. Em cardiopatas ASA II controlados, a epinefrina em doses terapêuticas odontológicas (≤ 0,04 mg por consulta) é geralmente segura e até preferível por reduzir absorção sistêmica do anestésico.",
  },
  {
    id: "cbmf-c04-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Anestesia Local",
    difficulty: "Intermediário",
    question: "Por que os anestésicos locais têm reduzida eficácia em tecidos infeccionados (abscesso)?",
    options: [
      "As bactérias destroem quimicamente as moléculas do anestésico antes que atinjam o nervo",
      "O pH ácido do tecido inflamado aumenta a ionização do anestésico (forma ionizada não atravessa a membrana), reduzindo a concentração da forma lipossolúvel que penetra no neurônio",
      "O edema dilui o anestésico a ponto de torná-lo ineficaz",
      "O calor local do processo inflamatório acelera o metabolismo do anestésico",
    ],
    correctIndex: 1,
    explanation:
      "Os anestésicos locais são bases fracas com pKa entre 7,5–9,0. Em pH fisiológico (7,4), existe equilíbrio entre a forma ionizada (BH⁺) e não ionizada (B). Somente a forma B (lipossolúvel, não ionizada) atravessa a membrana do axônio. No tecido inflamado/infectado, o pH é ácido (5,5–6,0) — o equilíbrio desloca para a forma ionizada (BH⁺), que não penetra na membrana. Resultado: menos forma ativa disponível, anestesia incompleta. Estratégias: anestesia a distância do foco inflamatório, bloqueio regional, ou aguardar melhora com antibióticos.",
  },
  {
    id: "cbmf-c05-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Técnicas Anestésicas",
    difficulty: "Intermediário",
    question: "No bloqueio do nervo alveolar inferior (técnica de Halstead), o ponto de inserção da agulha é:",
    options: [
      "Na mucosa jugal, ao nível do plano oclusal dos molares inferiores",
      "Na mucosa pterigomandibular, lateralmente ao rafe pterigomandibular, ao nível do plano oclusal dos dentes inferiores do paciente — direcionando para a língula mandibular",
      "No fundo de sulco vestibular entre os pré-molares inferiores",
      "Na rafe mediana do palato, para anestesiar por difusão",
    ],
    correctIndex: 1,
    explanation:
      "Na técnica de Halstead: o ponto de referência é a prega pterigomandibular (rafe) — a agulha é inserida lateralmente a ela, na mucosa da região pterigomandibular, ao nível do plano oclusal dos dentes inferiores do paciente. A agulha avança ~20–25 mm em direção ao ramo mandibular (paralela ao plano oclusal) até tocar a superfície medial do ramo, recua 1–2 mm e deposita 1,5 mL do anestésico próximo à língula (spina de Spix), onde o nervo alveolar inferior penetra no canal mandibular.",
  },
  {
    id: "cbmf-c05-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Técnicas Anestésicas",
    difficulty: "Intermediário",
    question: "A principal causa de falha anestésica no bloqueio do nervo alveolar inferior é:",
    options: [
      "Uso de articaína em vez de lidocaína",
      "Deposição do anestésico distante do forame mandibular — por variação anatômica da língula, injeção muito anterior (nervo já no canal) ou posterior (longe do forame)",
      "Quantidade insuficiente de vasoconstritor na solução",
      "Velocidade de injeção muito lenta (deve ser rápida para maior difusão)",
    ],
    correctIndex: 1,
    explanation:
      "A língula (spina de Spix) varia em posição, altura e forma entre indivíduos. A deposição do anestésico muito anterior ao forame encontra o nervo já no interior do canal ósseo (sem possibilidade de difusão); muito posterior não alcança o nervo. Outras causas: nervo acessório de Mylohyoid (inerva região molar inferior em variações anatômicas), bifurcação do alveolar inferior (duplo canal), e injeção intravascular com aspiração negativa falso-negativa. Quando falha, complementar com infiltração vestibular de articaína 4% e/ou bloqueio do nervo mylohyoid.",
  },
  {
    id: "cbmf-c05-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Técnicas Anestésicas",
    difficulty: "Intermediário",
    question: "O bloqueio do nervo infraorbitário anestesia:",
    options: [
      "Apenas a polpa dos dentes anteriores superiores ipsilaterais",
      "A pele e mucosa da pálpebra inferior, asa do nariz, lábio superior e gengiva vestibular do setor anterior superior — além da polpa dos incisivos, caninos e pré-molares superiores ipsilaterais",
      "Todo o arco superior incluindo os molares e o palato",
      "Apenas a mucosa gengival vestibular dos dentes anteriores, sem efeito sobre a polpa",
    ],
    correctIndex: 1,
    explanation:
      "O nervo infraorbitário emerge pelo forame infraorbitário e distribui ramos terminais que inervam: pele e mucosa do lábio superior, asa do nariz e pálpebra inferior, além de ramos que percorrem o canal infraorbitário inervando as polpas dos dentes anteriores e pré-molares superiores ipsilaterais. É útil em: cirurgias do setor anterior superior, trauma facial, frenectomia labial superior, e quando infiltrações convencionais falham. O forame está ~7 mm abaixo da margem infraorbitária, na linha média pupilar.",
  },
  {
    id: "cbmf-c05-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Técnicas Anestésicas",
    difficulty: "Avançado",
    question: "A anestesia intraligamentar (periodontal) tem como vantagem sobre a infiltrativa convencional em procedimentos em dentes com processo inflamatório periapical:",
    options: [
      "Usa menor quantidade de anestésico e é mais econômica",
      "Deposita o anestésico diretamente no espaço do ligamento periodontal, próximo ao ápice, contornando o pH ácido superficial — eficaz quando infiltrações convencionais falham em dentes com pulpite irreversível ou periodontite apical",
      "Não causa qualquer sensação de pressão ao paciente durante a injeção",
      "É completamente indolor e dispensa pré-anestesia tópica",
    ],
    correctIndex: 1,
    explanation:
      "Na anestesia intraligamentar, o anestésico é injetado sob alta pressão no espaço periodontal usando seringa especial (ex.: Citoject) com agulha curta. O anestésico penetra pelo osso alveolar poroso diretamente para a região apical, atingindo o nervo alveolar de forma mais localizada. Em dentes com inflamação periapical, onde infiltrações convencionais têm menor eficácia pelo pH ácido local, a intraligamentar pode ser mais eficaz por atingir uma região com pH menos alterado. Contraindicada em periodontites marginais (pode disseminar bactérias).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 6: SEDAÇÃO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c06-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Sedação",
    difficulty: "Intermediário",
    question: "A sedação inalatória com óxido nitroso (N₂O) em odontologia é caracterizada por:",
    options: [
      "Inconsciência profunda com perda dos reflexos protetores",
      "Sedação consciente leve com analgesia — o paciente mantém reflexos, responde a estímulos verbais e pode ser titulado com precisão pela variação da concentração",
      "Requer intubação endotraqueal para segurança do procedimento",
      "É contraindicada em todos os pacientes pediátricos",
    ],
    correctIndex: 1,
    explanation:
      "O N₂O/O₂ em concentração ≤ 50% produz sedação mínima a moderada consciente: analgesia, ansiolítico, paciente responde a comandos verbais, mantém reflexos de proteção (tosse, deglutição). Vantagens: titulação em tempo real, reversão rápida ao respirar O₂ puro por 5 min. Contraindicações: DPOC grave, obstrução nasal, gravidez (1º trimestre), deficiência de vitamina B12, cavidades de ar fechadas (pneumotórax, oclusão de tuba auditiva). Limite prático do CD: sedação com N₂O está dentro do escopo da odontologia; sedação venosa e AG requerem especialização adicional.",
  },
  {
    id: "cbmf-c06-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Sedação",
    difficulty: "Intermediário",
    question: "A anestesia geral em odontologia com intubação nasotraqueal é preferida à orotraqueal porque:",
    options: [
      "A intubação nasotraqueal oferece menor risco de lesão a estruturas internas",
      "Permite ao cirurgião-dentista acesso completo à cavidade oral sem o tubo interferindo no campo operatório — essencial em cirurgias intraorais extensas",
      "A intubação nasotraqueal causa menos depressão respiratória que a orotraqueal",
      "É mais rápida de realizar e dispensa laringoscópio",
    ],
    correctIndex: 1,
    explanation:
      "Em cirurgias intraorais sob anestesia geral, o tubo orotraqueal ocupa espaço na cavidade oral e interfere no campo operatório, dificultando o acesso, retrações e suturas. A intubação nasotraqueal (pelo nariz) mantém o tubo fora da boca, deixando o campo completamente livre para o cirurgião. É a via padrão para: cirurgia de 3ºs molares complexos, cirurgia ortognática, trauma facial, infecções de espaços faciais extensos e qualquer procedimento oral de grande porte sob AG.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 7–10: EXODONTIA E DENTES INCLUSOS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c07-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Exodontia",
    difficulty: "Básico",
    question: "A sindesmotomia, etapa inicial da exodontia, tem como objetivo:",
    options: [
      "Fazer a anestesia tópica gengival antes da injeção do anestésico local",
      "Seccionar as fibras do ligamento periodontal que unem o dente ao osso alveolar, facilitando a luxação e evitando laceração gengival durante a extração",
      "Remover o cálculo supragengival antes da extração para evitar contaminação",
      "Verificar a profundidade do sulco gengival antes de iniciar o procedimento",
    ],
    correctIndex: 1,
    explanation:
      "A sindesmotomia (descolamento do epitélio juncional e fibras gingivodentárias) com instrumento específico (sindesmótomo ou descolador) é o primeiro passo técnico após a anestesia. Serve para: (1) romper a fixação do tecido mole ao dente, liberando a margem gengival; (2) criar espaço para a introdução dos fórceps; (3) evitar a laceração da gengiva durante a preensão e luxação, prevenindo feridas extensas e sangramentos. Sem sindesmotomia, a gengiva é arrancada com o dente.",
  },
  {
    id: "cbmf-c07-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Exodontia",
    difficulty: "Intermediário",
    question: "A principal contraindicação relativa à exodontia em paciente em uso de bifosfonatos por via intravenosa (para metástases ósseas) é:",
    options: [
      "Risco aumentado de sangramento por plaquetopenia induzida pelos bifosfonatos",
      "Risco de osteonecrose dos maxilares associada a bifosfonatos (BRONJ/MRONJ) — a extração em área de osso comprometido pode desencadear necrose óssea de difícil resolução",
      "Interação medicamentosa entre bifosfonatos e anestésicos locais com vasoconstritor",
      "Maior risco de disseminação metastática pela manipulação óssea",
    ],
    correctIndex: 1,
    explanation:
      "Bifosfonatos IV (ácido zoledrónico, pamidronato) têm altíssima potência anti-reabsortiva e acumulam-se no osso dos maxilares. Qualquer trauma ósseo (extração, cirurgia) em pacientes expostos pode desencadear MRONJ (Medication-Related Osteonecrosis of the Jaw): área de osso necrótico exposto que não cicatriza. O risco é muito maior com bifosfonatos IV (oncológicos) do que orais (osteoporose). Condutas: tratamento não cirúrgico quando possível, avaliação interdisciplinar, 'drug holiday' (bifosfonatos orais), e quando inevitável, extrações atraumáticas com antibioticoterapia.",
  },
  {
    id: "cbmf-c07-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Exodontia",
    difficulty: "Básico",
    question: "As orientações pós-operatórias após exodontia simples devem incluir:",
    options: [
      "Fazer bochechos vigorosos com água oxigenada a cada 2h para limpeza do alvéolo",
      "Morder a gaze por 30–60 minutos, não cuspir nem enxaguar vigorosamente nas primeiras 24h, aplicar frio local, dieta fria e pastosa, e não fumar",
      "Iniciar alimentação normal imediatamente para estimular a cicatrização",
      "Tomar aspirina para analgesia, pois é o mais indicado após exodontias",
    ],
    correctIndex: 1,
    explanation:
      "As orientações visam proteger o coágulo que ocupa o alvéolo (base da cicatrização): (1) Morder gaze 30–60 min — hemostasia por pressão; (2) Não cuspir, não enxaguar vigorosamente, não usar canudo nas 24h — evitar sucção que desloca o coágulo (causa alveolite); (3) Frio local (20 min ligado/20 min desligado) — reduz edema nas primeiras 24h; (4) Dieta fria e pastosa — evitar alimentos quentes e duros; (5) Não fumar — a sucção e substâncias do cigarro são fatores de risco primários para alveolite. Aspirina é contraindicada — antiagregante plaquetário.",
  },
  {
    id: "cbmf-c08-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Exodontia Cirúrgica",
    difficulty: "Intermediário",
    question: "As indicações para exodontia cirúrgica (com retalho e ostectomia) em vez de exodontia simples são:",
    options: [
      "Qualquer extração em paciente acima de 50 anos",
      "Raízes retidas, dentes anquilosados, hipercementose, dentes fraturados com raízes muito curvadas ou dilaceradas, e dentes com relação íntima com estruturas nobres",
      "Pacientes com aversão ao fórceps ou ansiedade dental",
      "Extrações de todos os terceiros molares, independente da posição",
    ],
    correctIndex: 1,
    explanation:
      "A exodontia cirúrgica é indicada quando a extração convencional com fórceps é inviável ou de alto risco: (1) Raízes retidas (parte coronal ausente); (2) Anquilose — sem ligamento periodontal funcional, a luxação convencional fractura o alvéolo; (3) Hipercementose — raízes bulbosas presas no alvéolo; (4) Raízes muito curvadas, divergentes ou dilaceradas; (5) Dentes com relação com canal mandibular, seio maxilar ou raízes de dentes vizinhos que o fórceps poderia lesionar. A decisão é guiada pelo exame radiográfico pré-operatório.",
  },
  {
    id: "cbmf-c08-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Exodontia Cirúrgica",
    difficulty: "Avançado",
    question: "A comunicação bucosinusal (CBS) após extração de molar superior é caracterizada por:",
    options: [
      "Abertura de fístula entre a boca e a cavidade nasal, causando rinorreia",
      "Comunicação entre o alvéolo pós-extração e o seio maxilar, confirmada pelo teste de Valsalva (ar passa pela narina ipsilateral ao ocluir o nariz) — exige fechamento primário imediato com retalho ou material obturador",
      "Fratura da tábua vestibular do alvéolo, com exposição de osso cortical",
      "Hemorragia do seio maxilar após a extração, causando epistaxe",
    ],
    correctIndex: 1,
    explanation:
      "A CBS ocorre quando a extração de molares/pré-molares superiores — cujos ápices podem ser muito próximos ou intrasinusais — resulta em abertura para o seio maxilar. Diagnóstico: teste de Valsalva positivo (ar passa pelo nariz ipsilateral enquanto fecha a narina contralateral), líquido no alvéolo com odor de seio. Conduta: comunicações pequenas (< 2 mm) podem fechar espontaneamente com coágulo; comunicações grandes (> 5 mm) requerem fechamento cirúrgico com retalho de avanço palatino ou vestibular (retalho de bola de gordura de Bichat para defeitos maiores). Nunca fazer curetagem agressiva.",
  },
  {
    id: "cbmf-c09-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia de Terceiros Molares",
    difficulty: "Intermediário",
    question: "Na classificação de Pell & Gregory para terceiros molares inferiores, a classe II na relação com o ramo mandibular indica:",
    options: [
      "O dente está completamente dentro do ramo mandibular",
      "Metade da coroa do terceiro molar está recoberta pelo ramo ascendente da mandíbula — dificuldade cirúrgica moderada",
      "A coroa está completamente à frente do ramo mandibular, com amplo espaço disponível",
      "O dente está em posição horizontal completa",
    ],
    correctIndex: 1,
    explanation:
      "Pell & Gregory classificam em relação ao ramo e ao plano oclusal: Classe I (espaço anterior ao ramo suficiente para toda a coroa), Classe II (metade da coroa recoberta pelo ramo), Classe III (dente completamente dentro do ramo — mais difícil). Quanto ao plano oclusal: Posição A (oclusal do 3º molar ao nível ou acima do 2º), Posição B (abaixo do plano oclusal mas acima da junção cemento-esmalte do 2º), Posição C (abaixo da JCE do 2º molar). Combinações como III-C indicam maior complexidade cirúrgica.",
  },
  {
    id: "cbmf-c09-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia de Terceiros Molares",
    difficulty: "Básico",
    question: "A classificação de Winter para terceiros molares inferiores descreve a:",
    options: [
      "Relação do dente com o ramo mandibular e plano oclusal",
      "Angulação do eixo longitudinal do terceiro molar em relação ao segundo molar (mesioangular, distoangular, vertical, horizontal, invertido, vestibular, lingual)",
      "Profundidade de impacção em relação ao osso alveolar",
      "Grau de reabsorção radicular do segundo molar causado pelo terceiro",
    ],
    correctIndex: 1,
    explanation:
      "A classificação de Winter descreve a angulação (inclinação) do eixo longitudinal do 3º molar em relação ao 2º molar, analisada na radiografia panorâmica: Mesioangular (inclinado para mesial — mais comum, ~43%); Vertical (~38%); Distoangular (inclinado para distal — mais difícil); Horizontal (deitado horizontalmente); Invertido (de cabeça para baixo); Vestibular/Lingual (inclinado para essas direções). A posição mesioangular tem maior risco de pericoronarite; a distoangular é tecnicamente mais difícil.",
  },
  {
    id: "cbmf-c09-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia de Terceiros Molares",
    difficulty: "Avançado",
    question: "O principal fator de risco para parestesia do nervo alveolar inferior após extração de terceiro molar inferior é:",
    options: [
      "Uso de fórceps em vez de elevadores durante a extração",
      "Relação íntima ou contato entre as raízes do 3º molar e o canal alveolar inferior na radiografia — especialmente quando há interrupção da lâmina dura, desvio do canal ou escurecimento da raiz",
      "Duração da cirurgia superior a 30 minutos",
      "Uso de anestesia com vasoconstritor que causa isquemia do nervo",
    ],
    correctIndex: 1,
    explanation:
      "A incidência de parestesia do nervo alveolar inferior após siso inferior varia de 0,5–8%. Fatores de risco radiográficos (sinais de contacto íntimo no panorâmico): (1) interrupção das linhas brancas do canal; (2) desvio do canal pelo dente; (3) escurecimento da raiz (canal sobreposição); (4) estreitamento do canal. Quando esses sinais são presentes, CBCT é indicado para avaliação 3D. Geralmente a parestesia é temporária (meses); permanente em < 1% dos casos. Informar o paciente antes da cirurgia.",
  },
  {
    id: "cbmf-c09-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia de Terceiros Molares",
    difficulty: "Intermediário",
    question: "A alveolite seca (osteíte alveolar) após extração de terceiro molar inferior é caracterizada por:",
    options: [
      "Infecção do alvéolo por flora bacteriana, com formação de pus e febre alta",
      "Perda ou dissolução do coágulo sanguíneo do alvéolo (3–5 dias após extração), com dor intensa irradiada, alvéolo vazio com osso exposto, odor fétido e ausência de sinais de infecção sistêmica",
      "Fratura da parede alveolar com exposição do nervo alveolar inferior",
      "Hematoma subperiostal que causa dor difusa e trismo",
    ],
    correctIndex: 1,
    explanation:
      "A alveolite seca (dry socket, osteíte alveolar) ocorre em 2–5% das extrações e até 30% dos sisos inferiores. Fisiopatologia: fibrinólise prematura do coágulo por ativadores do plasminogênio (bacterianos ou salivares), deixando o alvéolo vazio com osso exposto. Clínica: dor intensa 3–5 dias após a extração, irradiada para ouvido e têmpora, fétida, sem febre, alvéolo sem coágulo e com paredes ósseas expostas acinzentadas. Fatores de risco: tabagismo, sexo feminino, contraceptivos orais, má higiene. Tratamento: irrigação delicada, curativo com eugenol (alvogyl), analgesia.",
  },
  {
    id: "cbmf-c10-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Dentes Inclusos",
    difficulty: "Intermediário",
    question: "O canino superior incluso com posição palatina deve ser tratado prioritariamente por:",
    options: [
      "Extração cirúrgica imediata, pois o tracionamento é muito demorado e oneroso",
      "Tracionamento ortodôntico-cirúrgico (exposição cirúrgica + fixação de braquete e cadeia elástica) visando erupcionar o dente no arco — o canino superior tem papel funcional e estético fundamental",
      "Aguardar erupção espontânea até os 25 anos antes de intervir",
      "Transplante dentário para a posição correta no arco",
    ],
    correctIndex: 1,
    explanation:
      "O canino superior permanente tem alto valor funcional (guia canina, estética) e enorme capacidade de tracionamento bem-sucedido. O protocolo padrão: avaliação ortodôntica → exposição cirúrgica (retalho palatino + remoção do osso sobre o canino) → colagem de braquete com fio de aço e cadeia elástica → tração gradual ao arco ortodôntico por meses. A extração é reservada para: canino anquilosado, raiz muito curvada sem prognóstico, paciente que recusa tratamento ortodôntico, ou reabsorção grave do incisivo lateral adjacente.",
  },
  {
    id: "cbmf-c10-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Dentes Inclusos",
    difficulty: "Básico",
    question: "O mesiodens é:",
    options: [
      "Um terceiro molar superior posicionado mesialmente ao segundo molar",
      "Dente supranumerário localizado entre os incisivos centrais superiores — pode causar diastema, desvio dos incisivos, cisto dentígero e erupção ectópica dos incisivos",
      "Fusão dos incisivos centrais superiores resultando em dente de coroa duplicada",
      "Variação de tamanho dos incisivos laterais superiores (peg lateral)",
    ],
    correctIndex: 1,
    explanation:
      "O mesiodens é o dente supranumerário mais comum (prevalência ~0,15–2%), localizado na linha mediana anterior da maxila, entre os incisivos centrais superiores. Morfologia: geralmente cônico ou tuberculado, raramente erupciona espontaneamente. Consequências: diastema mediano persistente, desvio ou apinhamento dos incisivos, erupção ectópica, formação de cisto dentígero. Indicação de remoção cirúrgica: quase sempre, especialmente se causar problemas ou for descoberto em criança antes da erupção dos incisivos permanentes.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 11–13: INFECÇÕES E URGÊNCIAS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c11-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Infecções Odontogênicas",
    difficulty: "Avançado",
    question: "A Angina de Ludwig é uma emergência cirúrgica porque:",
    options: [
      "É causada por bactérias resistentes a todos os antibióticos disponíveis",
      "É uma celulite bilateral de progressão rápida dos espaços submandibular, sublingual e submental que pode causar obstrução de via aérea por empurrar a língua para cima e para trás — risco de morte por asfixia",
      "Produz toxinas que causam coagulação intravascular disseminada (CIVD)",
      "Origina sempre bacteremia com endocardite infecciosa secundária",
    ],
    correctIndex: 1,
    explanation:
      "A Angina de Ludwig (celulite gangrenosa bilateral do assoalho bucal) é a infecção orofacial mais ameaçadora. Características: (1) bilateral — envolve simetricamente os espaços submandibular, sublingual e submental; (2) rápida progressão — de horas; (3) empurra a língua superiormente e posteriormente, comprometendo a via aérea progressivamente; (4) consistência dura (madeira) à palpação — sem flutuação (não é abscesso). Conduta: internação imediata, antibioticoterapia IV (penicilina G + metronidazol), drenagem cirúrgica, e — criticamente — manejo da via aérea (intubação precoce ou traqueostomia de urgência antes que o edema torne impossível).",
  },
  {
    id: "cbmf-c11-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Infecções Odontogênicas",
    difficulty: "Intermediário",
    question: "A diferença clínica entre celulite e abscesso odontogênico, que determina a conduta, é:",
    options: [
      "A celulite tem febre alta e o abscesso não tem febre",
      "A celulite é uma infecção difusa do tecido conjuntivo sem coleção líquida definida (trato sólido); o abscesso tem coleção purulenta encapsulada com flutuação — o abscesso é drenado cirurgicamente; a celulite é tratada com antibioticoterapia e remoção da causa",
      "A celulite é sempre causada por Streptococcus; o abscesso por Staphylococcus",
      "O abscesso tem início agudo e a celulite evolução crônica em todos os casos",
    ],
    correctIndex: 1,
    explanation:
      "Celulite: processo inflamatório agudo difuso em fase exsudativa — tecido endurecido, edemaciado, doloroso à palpação, sem coleção definida. Não tem o que drenar; antibióticos e remoção da causa são o tratamento. Abscesso: coleção purulenta delimitada por membrana piogênica — amolecimento central, flutuação à palpação. Deve ser drenado (o pus não é alcançado pelos antibióticos). A transição de celulite para abscesso (3–5 dias) é marcada pelo amolecimento central e flutuação. A ausência de flutuação não exclui abscesso profundo — CBCT ou ultrassonografia podem identificar coleções em espaços fasciais profundos.",
  },
  {
    id: "cbmf-c11-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Infecções Odontogênicas",
    difficulty: "Intermediário",
    question: "A via de disseminação das infecções odontogênicas para os espaços fasciais é determinada principalmente por:",
    options: [
      "A virulência específica do microrganismo causador",
      "A localização do ápice radicular em relação às inserções musculares da região — o abscesso perfura a cortical óssea e segue o caminho de menor resistência pelos espaços fasciais adjacentes",
      "A idade do paciente — em jovens vai para espaços superiores, em idosos para inferiores",
      "O estado imunológico exclusivamente — pacientes imunocompetentes localizam; imunossuprimidos disseminam",
    ],
    correctIndex: 1,
    explanation:
      "A localização apical em relação às inserções musculares é o fator anatômico determinante: Ex. — infecção do 1º molar inferior: se o ápice está acima da inserção do milohióideo → espaço vestibular ou bucal; abaixo do milohióideo → espaço submandibular. Canino superior → fossa canina → espaço infra-orbital. Molares superiores → fossa pterigomandibular, espaço bucal ou infratemporal. Conhecer essas relações permite prever qual espaço será comprometido e planejar a drenagem.",
  },
  {
    id: "cbmf-c11-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Infecções Odontogênicas",
    difficulty: "Avançado",
    question: "A osteomielite aguda dos maxilares difere do abscesso periapical comum porque:",
    options: [
      "A osteomielite é sempre causada por trauma, não por infecção odontogênica",
      "Na osteomielite há comprometimento do osso medular e do endósteo — infecção que se propaga pelo espaço medular — com sinais sistêmicos mais intensos (febre, leucocitose, parestesia do nervo alveolar inferior) e alterações radiográficas de 'corrosão' óssea",
      "A osteomielite é exclusiva da mandíbula por ser osso mais vascularizado",
      "O abscesso periapical evolui para osteomielite apenas em pacientes imunossuprimidos",
    ],
    correctIndex: 1,
    explanation:
      "A osteomielite aguda dos maxilares é infecção do tecido ósseo medular, frequentemente com trombose vascular e necrose óssea. Mandíbula (osso mais compacto e menos vascularizado) é 5x mais afetada que a maxila. Sinais: febre alta, leucocitose, dor intensa, trismo, parestesia do nervo alveolar inferior (por compressão no canal), linfadenopatia. Radiografia: 'corrosão' em mapa geográfico (10–14 dias após início — a radiografia convencional é tardia; TC é mais precoce). Tratamento: antibiótico IV prolongado + desbridamento cirúrgico; em crônicos, sequestrotomia.",
  },
  {
    id: "cbmf-c12-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Antibioticoterapia e Drenagem",
    difficulty: "Intermediário",
    question: "A primeira escolha de antibiótico em infecções odontogênicas leves a moderadas em pacientes sem alergia à penicilina é:",
    options: [
      "Ciprofloxacino 500 mg 12/12h — amplo espectro cobrindo gram-negativos",
      "Amoxicilina 500 mg 8/8h — eficaz contra a flora polimicrobiana aeróbia e anaeróbia das infecções odontogênicas, baixo custo e segurança",
      "Clindamicina 300 mg 8/8h — preferida por cobrir melhor anaeróbios",
      "Cefalexina 500 mg 6/6h — cefalosporina de 1ª geração de amplo espectro",
    ],
    correctIndex: 1,
    explanation:
      "As infecções odontogênicas são polimicrobianas (estreptococos alfa-hemolíticos, anaeróbios como Prevotella, Fusobacterium, Peptostreptococcus). A amoxicilina tem excelente cobertura desse espectro, alta biodisponibilidade oral e segurança. Para infecções mais graves ou sem melhora em 48–72h: amoxicilina + clavulanato (adiciona cobertura de beta-lactamases). Em alérgicos à penicilina: clindamicina 300 mg 8/8h é a alternativa padrão em odontologia. Metronidazol pode ser associado quando a cobertura de anaeróbios precisa ser reforçada.",
  },
  {
    id: "cbmf-c12-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Antibioticoterapia e Drenagem",
    difficulty: "Intermediário",
    question: "A profilaxia antibiótica para prevenção de endocardite infecciosa em procedimentos odontológicos é indicada para:",
    options: [
      "Todos os pacientes com histórico de qualquer doença cardíaca",
      "Pacientes de alto risco: portadores de prótese valvar cardíaca, cardiopatia congênita cianótica não corrigida, endocardite infecciosa prévia e transplantados cardíacos com valvulopatia — protocolo AHA: amoxicilina 2g VO 30–60 min antes do procedimento",
      "Qualquer paciente com sopro cardíaco, independente da etiologia",
      "Pacientes diabéticos em todos os procedimentos cirúrgicos odontológicos",
    ],
    correctIndex: 1,
    explanation:
      "As diretrizes da AHA (2007) restringiram significativamente as indicações de profilaxia: apenas pacientes de alto risco para desfechos adversos de endocardite — (1) prótese valvar cardíaca; (2) endocardite infecciosa prévia; (3) cardiopatia congênita cianótica não corrigida ou com material protético; (4) transplante cardíaco com valvulopatia. Para esses pacientes, procedimentos que manipulam gengiva ou mucosa oral (exodontia, cirurgia periodontal, implante): amoxicilina 2g VO (ou ampicilina 2g IM/IV) 30–60 min antes. Em alérgicos: clindamicina 600 mg VO.",
  },
  {
    id: "cbmf-c12-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Antibioticoterapia e Drenagem",
    difficulty: "Avançado",
    question: "Os critérios que indicam internação hospitalar de paciente com infecção odontogênica são:",
    options: [
      "Qualquer infecção com antibioticoterapia por mais de 48h sem melhora",
      "Comprometimento de via aérea, disfagia intensa, trismo grave (< 20 mm de abertura), extensão para espaços cervicais, sepse (febre > 39°C, taquicardia, hipotensão), imunossupressão grave ou falha do tratamento ambulatorial",
      "Presença de celulite sem abscesso que não responde à amoxicilina em 24h",
      "Paciente que não pode tomar antibiótico oral por recusa ou alergia",
    ],
    correctIndex: 1,
    explanation:
      "A maioria das infecções odontogênicas é tratada ambulatorialmente com drenagem + antibiótico oral. Critérios de internação: (1) risco imediato de via aérea; (2) disfagia — impede alimentação e hidratação oral; (3) trismo grave — dificulta acesso para drenagem e intubação em emergência; (4) extensão cervical (espaço retrofaríngeo, mediastino — mediastinite = emergência cirúrgica); (5) sinais de sepse — antibiótico IV e suporte; (6) imunossupressão grave (HIV com CD4 baixo, quimioterapia, uso crônico de corticoide); (7) falha ambulatorial em 48–72h.",
  },
  {
    id: "cbmf-c13-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Complicações Pós-Operatórias",
    difficulty: "Intermediário",
    question: "A hemorragia pós-operatória após extração pode ser classificada como primária, reacional ou secundária — a hemorragia secundária (24h após a cirurgia) tem como causa mais comum:",
    options: [
      "Uso de AAS pelo paciente que não foi identificado na anamnese",
      "Infecção do alvéolo com dissolução do coágulo por enzimas bacterianas — tratada com antibiótico e hemostasia local adicional",
      "Disfunção plaquetária por trauma anestésico do nervo alveolar inferior",
      "Sempre indica coagulopatia sistêmica grave que exige internação",
    ],
    correctIndex: 1,
    explanation:
      "Classificação das hemorragias pós-extracionais: Primária — durante o ato cirúrgico (vasos lesados); Reacional — primeiras horas (quando o vasoconstritor do anestésico cessa e os vasos dilatam); Secundária — 24h ou mais após, frequentemente causada por infecção do coágulo por bactérias que produzem fibrinolisinas e dissolve o coágulo. Tratamento da secundária: irrigação com soro fisiológico, antibiótico sistêmico, e hemostasia local (sutura, esponja de fibrina, gaze com trombina). A hemorragia persistente sem resposta local requer investigação de coagulopatia.",
  },
  {
    id: "cbmf-c13-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Complicações Pós-Operatórias",
    difficulty: "Intermediário",
    question: "O trismo pós-operatório após cirurgia de terceiro molar inferior geralmente tem como causa:",
    options: [
      "Lesão permanente do nervo motor (nervo facial) durante a cirurgia",
      "Espasmo reflexo dos músculos pterigoideos medial e masseter por inflamação local, hematoma no espaço pterigomandibular ou infiltração anestésica do espaço pterigomandibular",
      "Anquilose temporária da ATM pelo posicionamento prolongado do paciente com boca aberta",
      "Reação alérgica ao anestésico local que causa contratura muscular",
    ],
    correctIndex: 1,
    explanation:
      "O trismo pós-cirúrgico é muito comum após extração de 3º molar inferior, especialmente nos 2–3 dias pós-operatórios. Causas principais: (1) trauma muscular direto durante cirurgia (afastadores, retratores); (2) hematoma no espaço pterigomandibular ou submassetérico comprimindo os músculos; (3) espasmo reflexo por dor e inflamação (espasmo protetor). É geralmente autolimitado — resolve em 1–2 semanas com analgesia, miorrelaxante (diazepam), calor local e fisioterapia de abertura. Trismo persistente (> 3 semanas) ou piorando sugere infecção do espaço pterigomandibular.",
  },
  {
    id: "cbmf-c13-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Complicações Pós-Operatórias",
    difficulty: "Avançado",
    question: "O tratamento da comunicação bucosinusal de grande tamanho (> 5 mm) após extração envolve:",
    options: [
      "Irrigação diária da cavidade sinusal com soro fisiológico até fechamento espontâneo",
      "Fechamento cirúrgico com retalho — retalho de avanço palatino (para pequenas) ou retalho da bola de gordura de Bichat transposto para cobrir o defeito (para defeitos maiores, especialmente na região de tuberosidade)",
      "Uso de obturador palatal com resina acrílica por 6 meses",
      "Encaminhamento imediato para cirurgia de Caldwell-Luc sem tentar fechamento primário",
    ],
    correctIndex: 1,
    explanation:
      "O fechamento da CBS visa evitar sinusite maxilar crónica por contaminação oral contínua. Opções cirúrgicas: (1) Retalho de avanço palatino (buccal advancement flap) — rotação de tecido vestibular para cobrir o defeito; (2) Retalho da bola de gordura de Bichat — o corpo adiposo da bochecha é transposto pediculado para cobrir defeitos maiores (> 1 cm) especialmente na região posterior (tuberosidade), onde tecido palatino é escasso; (3) Caldwell-Luc — reservado para sinusite maxilar crónica estabelecida com necessidade de drenagem. Todos os casos devem ter antibioticoterapia e descongestionante nasal.",
  },
  {
    id: "cbmf-c13-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Complicações Pós-Operatórias",
    difficulty: "Intermediário",
    question: "A parestesia pós-cirúrgica do nervo alveolar inferior é classificada em:",
    options: [
      "Apenas como permanente ou transitória, sem subdivisões de intensidade",
      "Neuropraxia (bloqueio funcional sem lesão axonal — recuperação espontânea semanas a meses), axonotmese (lesão axonal com bainha intacta — recuperação em meses) e neurotmese (secção completa — prognóstico reservado, pode necessitar microcirurgia)",
      "Parestesia superficial (tactil) e profunda (nociceptiva), com tratamentos diferentes",
      "Graus I a V baseados apenas na extensão da área anestesiada",
    ],
    correctIndex: 1,
    explanation:
      "A classificação de Seddon para lesões nervosas: (1) Neuropraxia — lesão mais leve, bloqueio de condução sem lesão estrutural (trauma leve, compressão, edema). Recuperação completa em dias a semanas. A maioria das parestesias pós-siso é neuropraxia; (2) Axonotmese — lesão axonal com endoneuro intacto; axônios regeneram guiados pelo tubo endoneural. Recuperação em meses (1 mm/dia de regeneração axonal); (3) Neurotmese — secção completa do nervo. Recuperação espontânea improvável; microcirurgia pode ser indicada. A maioria das parestesias pós-exodontia (> 90%) é neuropraxia e resolve espontaneamente.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 14–15: TRAUMATOLOGIA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c14-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Traumatismo Dentoalveolar",
    difficulty: "Básico",
    question: "Na classificação de Andreasen para luxações dentárias, a intrusão é definida como:",
    options: [
      "Deslocamento do dente para fora do alvéolo no sentido apico-coronal",
      "Deslocamento do dente para dentro do alvéolo no sentido apical, com compressão do osso alveolar e do ligamento periodontal",
      "Deslocamento lateral do dente com fratura da parede alveolar",
      "Avulsão parcial do dente com manutenção de contato ósseo",
    ],
    correctIndex: 1,
    explanation:
      "Classificação de Andreasen para luxações: Concussão (ligamento lesado, sem deslocamento), Subluxação (ligamento lesado, mobilidade sem deslocamento), Luxação Extrusiva (deslocamento para fora/coronal), Luxação Lateral (deslocamento lateral com fratura alveolar), Luxação Intrusiva (dente empurrado para dentro do alvéolo, comprimindo ligamento, osso e polpa — pior prognóstico), Avulsão (dente completamente fora do alvéolo). A intrusão tem alto risco de necrose pulpar e reabsorção radicular por inflamação — pior prognóstico entre as luxações.",
  },
  {
    id: "cbmf-c14-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Traumatismo Dentoalveolar",
    difficulty: "Avançado",
    question: "O protocolo de reimplante de dente avulsionado permanente com ápice fechado e tempo extraoral < 60 minutos em meio de armazenamento adequado é:",
    options: [
      "Aguardar tratamento endodôntico completo antes de reimplantar",
      "Reimplantar o mais rapidamente possível após limpeza gentil da raiz, ferulização semi-rígida por 2 semanas, e iniciar endodontia 7–10 dias após o reimplante",
      "Sempre extrair o dente reimplantado após 6 meses por inevitável anquilose",
      "Reimplantar apenas se o dente tiver sido armazenado em leite integral por exatamente 30 minutos",
    ],
    correctIndex: 1,
    explanation:
      "Protocolo IADT para avulsão com ápice fechado, ≤ 60 min em meio adequado: (1) Não manipular as fibras do ligamento periodontal na raiz; (2) Rinse cuidadoso com soro fisiológico se contaminado; (3) Reimplante imediato na clínica (ou pelo próprio paciente/responsável no local do acidente se possível); (4) Ferulização semi-rígida (fio de nylon 0.1mm colado) por 2 semanas; (5) Antibioticoterapia; (6) Endodontia 7–10 dias após (antes da infecção/reabsorção inflamatória); (7) Profilaxia antitetânica se necessário.",
  },
  {
    id: "cbmf-c14-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Traumatismo Dentoalveolar",
    difficulty: "Intermediário",
    question: "O melhor meio de armazenamento para um dente avulsionado quando o reimplante imediato não é possível é:",
    options: [
      "Água fria — mantém a umidade e resfria o dente, preservando as células",
      "Leite integral gelado — é isotônico, tem pH adequado (6,5–7,0), contém fatores de crescimento e preserva as células do ligamento periodontal por até 6 horas",
      "Solução de água com sal (soro caseiro) — similar à fisiológica",
      "Embrulhar em gaze seca para evitar contaminação",
    ],
    correctIndex: 1,
    explanation:
      "A viabilidade das células do ligamento periodontal (PDL) na raiz é determinante para o sucesso do reimplante. Meios de armazenamento por ordem de preferência: (1) Melhor: solução de Hank's Balanced Salt Solution (HBSS) — comercializada em kits de emergência; (2) Leite integral (não desnatado) — acessível, isotônico, pH 6,5–7,0, contém fatores de crescimento; preserva PDL por ~6h; (3) Saliva (em sulco gengival ou vestíbulo do paciente) — por pouco tempo (< 2h); (4) Soro fisiológico — aceitável mas inferior ao leite; (5) Água — hipotônica, causa lise celular rapidamente. NUNCA secar o dente.",
  },
  {
    id: "cbmf-c14-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Traumatismo Dentoalveolar",
    difficulty: "Intermediário",
    question: "A ferulização semi-rígida após reimplante ou luxação extrusiva/lateral é indicada em vez de ferulização rígida porque:",
    options: [
      "A ferulização rígida é mais difícil de confeccionar tecnicamente",
      "A mobilidade controlada (ferulização semi-rígida por 2 semanas) estimula a regeneração do ligamento periodontal — a imobilidade rígida e prolongada favorece a anquilose e reabsorção por substituição",
      "A ferulização rígida interfere com o tratamento endodôntico subsequente",
      "As diretrizes IADT não permitem ferulização rígida em nenhuma circunstância",
    ],
    correctIndex: 1,
    explanation:
      "A ferulização semi-rígida (monofilamento de nylon 0,1mm ou similar) permite micromovimenção fisiológica do dente, que estimula as células do PDL remanescentes a repopular a superfície radicular — favorecendo cicatrização periodontal. Ferulização rígida (barra metálica soldada) ou por tempo prolongado (> 4 semanas) imobiliza completamente o dente, induzindo remodelação óssea com contato direto do osso com a raiz — anquilose e reabsorção por substituição (progressiva, irreversível). Exceção: luxações laterais com fratura alveolar e avulsões com tempo extraoral longo (ápice fechado) — ferulização 4 semanas.",
  },
  {
    id: "cbmf-c15-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Fraturas dos Maxilares",
    difficulty: "Intermediário",
    question: "O sinal de Vincent (parestesia ou anestesia do lábio inferior e mento ipsilateral) após trauma facial indica:",
    options: [
      "Lesão do nervo facial (ramo marginal mandibular) causando paralisia dos músculos do lábio",
      "Fratura da mandíbula com comprometimento do nervo alveolar inferior no canal mandibular, causando parestesia na área de distribuição do nervo mentual",
      "Luxação da ATM com compressão do nervo auriculotemporal",
      "Contusão do gânglio de Gasser após trauma craniofacial",
    ],
    correctIndex: 1,
    explanation:
      "O sinal de Vincent (parestesia no lábio inferior e mento) é sinal clássico de fratura mandibular que compromete o nervo alveolar inferior no interior do canal mandibular — por compressão, estiramento ou laceração. Localiza a fratura na região que engloba o canal (corpo, ângulo ou ramo posterior). Importante no diagnóstico diferencial: sinal de Vincent = fratura mandibular até prova em contrário. Deve ser diferenciado de parestesia por anestesia residual ou trauma de tecidos moles. Investigar com radiografia panorâmica e TC.",
  },
  {
    id: "cbmf-c15-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Fraturas dos Maxilares",
    difficulty: "Intermediário",
    question: "As fraturas de Le Fort são classificadas em três tipos — Le Fort I, II e III. A fratura Le Fort I é caracterizada por:",
    options: [
      "Separação de todo o maciço facial do crânio — fratura craniofacial completa",
      "Fratura horizontal baixa da maxila separando o processo alveolar e palato do restante do maciço facial — a maxila e os dentes superiores se movem independentemente enquanto o restante da face permanece fixo",
      "Fratura em pirâmide que engloba o nariz, os ossos zigomáticos e a maxila em bloco",
      "Fratura bilateral dos arcos zigomáticos sem envolvimento da maxila",
    ],
    correctIndex: 1,
    explanation:
      "Le Fort I: fratura horizontal baixa passando pelo processo pterigoide, seios piriformes e acima dos ápices dentários — separa o complexo alveolar-palatino. Móvel à palpação bimanual (segurar a maxila e mover). Le Fort II: fratura em pirâmide — passa pelos ossos nasais, bordas orbitárias mediais, rebordos infraorbitários, maxila e pterigoides. Le Fort III: fratura craniofacial — separa todo o maciço facial do crânio passando pelas suturas frontozigomáticas, rebordos orbitários superiores e nasais (telescopagem facial). Na prática, fraturas mistas são comuns.",
  },
  {
    id: "cbmf-c15-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Fraturas dos Maxilares",
    difficulty: "Avançado",
    question: "O tratamento conservador das fraturas do côndilo mandibular (sem cirurgia) é geralmente preferido em:",
    options: [
      "Todas as fraturas de côndilo, pois cirurgia sempre produz piores resultados",
      "Fraturas condilares sem deslocamento ou com deslocamento mínimo, em adultos com oclusão estável e boa abertura de boca — especialmente fraturas subcondilares baixas",
      "Fraturas com deslocamento intracapsular em adultos — a cirurgia é proibida na ATM",
      "Fraturas com luxação do côndilo para a fossa cranial média",
    ],
    correctIndex: 1,
    explanation:
      "O debate cirurgia vs. conservador para fraturas condilares é amplo. Tratamento conservador (fixação maxilomandibular intermaxilar + fisioterapia precoce) é preferido em: fraturas sem deslocamento ou com deslocamento mínimo, em pacientes sem dentição (idosos edêntulos), crianças (risco de dano ao centro de crescimento condilar com cirurgia), fraturas bilateral com deslocamento moderado. Cirurgia (redução aberta + fixação interna) é preferida em: deslocamento severo com interferência oclusal não corrigível conservadoramente, luxação condilar extra-articular, e em adultos com fraturas deslocadas unilaterais.",
  },
  {
    id: "cbmf-c15-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Fraturas dos Maxilares",
    difficulty: "Intermediário",
    question: "A tríade de sinais clínicos da fratura do complexo zigomático-orbital é:",
    options: [
      "Epistaxe, trismo e desvio do septo nasal",
      "Afundamento da eminência zigomática, enoftalmia/diplopia e parestesia infraorbitária (sinal de Vincent facial) — por comprometimento do assoalho orbital e nervo infraorbitário",
      "Mobilidade da maxila, equimose peribucal e má oclusão",
      "Edema de glabela, hematoma retroauricular e rinorreia de LCR",
    ],
    correctIndex: 1,
    explanation:
      "O complexo zigomático-orbital é formado pelo osso zigomático e suas articulações com maxila, frontal e temporal. Na fratura (tripé zigomático): (1) Afundamento/assimetria da proeminência zigomática (eminência malar afundada); (2) Diplopia e/ou enoftalmia — fratura do assoalho orbital com herniação do conteúdo orbitário para o seio maxilar; (3) Parestesia infraorbitária — nervo infraorbitário lesado na fratura. Outros sinais: equimose subconjuntival e periorbital, trismo (arco zigomático deprimido comprime processo coronoide). Diagnóstico: TC.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 16–17: PRÉ-PROTÉTICA E IMPLANTODONTIA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c16-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Pré-Protética",
    difficulty: "Básico",
    question: "A frenectomia lingual é indicada quando:",
    options: [
      "O freio lingual está presente — toda sua presença é indicação de remoção",
      "Há anquiloglossia (língua presa) com limitação funcional: dificuldade de amamentação no lactente, distúrbios de fala (fonemas linguodentais como L, N, T, D), dificuldade de higiene lingual e em adultos, problemas periodontais linguais",
      "O freio lingual é visível durante a abertura máxima da boca",
      "Apenas em crianças antes dos 5 anos de idade",
    ],
    correctIndex: 1,
    explanation:
      "A anquiloglossia (freio lingual curto e/ou inserção anterior anômala que limita os movimentos da língua) tem impacto funcional variável. Indicações de frenectomia/frenotomia: (1) Recém-nascido/lactente: dificuldade de amamentação (mama não consegue sugar eficientemente); (2) Criança em desenvolvimento da fala: comprometimento de fonemas que exigem elevação lingual (/l/, /n/, /t/, /d/, /r/); (3) Adolescente/adulto: espaço diastema lingual, recessão periodontal lingual dos incisivos inferiores por tração do freio. A decisão é multidisciplinar (pediatra, fonoaudiólogo, odontopediatra).",
  },
  {
    id: "cbmf-c16-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Pré-Protética",
    difficulty: "Intermediário",
    question: "A alveoloplastia primária (realizada durante as extrações) tem como objetivo:",
    options: [
      "Ampliar o alvéolo para facilitar a extração de raízes retidas",
      "Remodelar o rebordo alveolar imediatamente após as extrações, reduzindo irregularidades ósseas (proeminências interalveolares, espículas) e acelerando a preparação do rebordo para receber prótese",
      "Preservar o máximo possível de osso alveolar para futuro implante",
      "Realizar enxerto ósseo para aumentar o volume do rebordo",
    ],
    correctIndex: 1,
    explanation:
      "A alveoloplastia primária é realizada no mesmo ato das extrações: após as extrações, o cirurgião remove irregularidades da crista alveolar (espículas, proeminências interalveolares, exostoses) com lima óssea ou broca, suavizando o rebordo. Vantagens: (1) único tempo cirúrgico; (2) cicatrização simultânea dos alvéolos e do rebordo remodelado; (3) rebordo mais uniforme e adequado para prótese total imediata ou convencional em menor tempo. A alveoloplastia secundária é realizada meses após as extrações, quando irregularidades persistem após a cicatrização natural.",
  },
  {
    id: "cbmf-c16-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Pré-Protética",
    difficulty: "Intermediário",
    question: "A remoção cirúrgica do tórus palatino é indicada quando:",
    options: [
      "Em todo paciente que necessitará de PT, independente do tamanho",
      "O tórus impede a confecção de PT adequada (muito volumoso, pediculado, cobrindo mais de 2/3 do palato), compromete a função oral ou apresenta ulcerações frequentes por trauma da mucosa delgada que o recobre",
      "Apenas quando há suspeita de transformação maligna",
      "Sempre antes dos 40 anos para prevenir crescimento excessivo",
    ],
    correctIndex: 1,
    explanation:
      "O tórus palatino (exostose benigna da linha mediana palatina) não requer remoção na maioria dos casos — pode ser acomodado com alívio na PT. Indicações de remoção: (1) volume que impede PT adequada (muito grande para receber alívio sem comprometer estabilidade da base); (2) ulcerações frequentes da mucosa delgada que o recobre; (3) dificuldade de higiene; (4) interferência com fonação ou deglutição. A cirurgia é simples (incisão mediana, descolamento de retalho palatino, remoção com cinzel e broca, regularização, sutura) mas exige cuidado para não perfurar a mucosa palatina delgada.",
  },
  {
    id: "cbmf-c17-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Implantodontia Cirúrgica",
    difficulty: "Básico",
    question: "A classificação óssea de Lekholm & Zarb (Tipos I a IV) é importante no planejamento cirúrgico em implantodontia porque:",
    options: [
      "Determina o comprimento mínimo do implante a ser utilizado",
      "Descreve a qualidade e quantidade óssea do sítio receptor — influencia o protocolo cirúrgico (fresagem, torque de instalação, protocolo de carga) e o prognóstico do implante",
      "É obrigatória para emissão de laudos de CBCT em odontologia",
      "Determina a cor do implante mais adequada para cada tipo de osso",
    ],
    correctIndex: 1,
    explanation:
      "Lekholm & Zarb classificam: Tipo I — osso quase totalmente cortical (mandíbula anterior); excelente suporte mas fresagem difícil e risco de necrose por supercalefação. Tipo II — cortical espessa + núcleo esponjoso denso; ideal. Tipo III — cortical fina + esponjosa de boa densidade; bom. Tipo IV — cortical muito fina + esponjosa de baixa densidade (maxila posterior); maior risco de falha, exige implantes mais longos e protocolo de carga diferido. Influencia: velocidade de fresagem, torque de instalação final, protocolo de carga (imediata, precoce ou convencional).",
  },
  {
    id: "cbmf-c17-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Implantodontia Cirúrgica",
    difficulty: "Avançado",
    question: "O levantamento do seio maxilar pela técnica da janela lateral (sinus lift) é indicado quando:",
    options: [
      "Há sinusite maxilar crônica bilateral que impede a instalação de implantes",
      "A altura óssea residual entre o rebordo e o assoalho do seio maxilar é insuficiente (< 4–5 mm) para instalação de implante de comprimento adequado — eleva o assoalho com enxerto",
      "O paciente tem mais de 70 anos e o osso maxilar posterior perdeu densidade",
      "É realizado em todos os casos de implante no setor posterior da maxila como rotina",
    ],
    correctIndex: 1,
    explanation:
      "Com a perda dos molares/pré-molares superiores, o seio maxilar pneumatiza (expande para baixo), reduzindo a altura óssea disponível para implantes. Indicações de sinus lift: < 4–5 mm de osso remanescente (janela lateral com instalação diferida do implante); 4–8 mm (pode-se tentar instalação simultânea com técnica de osteótomos). Técnica de janela lateral: confecção de janela na parede lateral do seio, descolamento cuidadoso da membrana de Schneider, inserção de material de enxerto (osso autógeno, xenoenxerto bovino ou misto), cicatrização por 6–9 meses e instalação dos implantes.",
  },
  {
    id: "cbmf-c17-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Implantodontia Cirúrgica",
    difficulty: "Avançado",
    question: "A regeneração óssea guiada (ROG) em implantodontia utiliza membrana porque:",
    options: [
      "A membrana libera fatores de crescimento que induzem osteogênese",
      "A membrana atua como barreira que impede a migração de células epiteliais e fibroblastos de crescimento rápido para o defeito ósseo, permitindo que osteoblastos de regeneração mais lenta ocupem e preencham o espaço com osso",
      "A membrana comprime o enxerto ósseo para aumentar sua densidade",
      "Serve como substituto do periósteo durante a cicatrização",
    ],
    correctIndex: 1,
    explanation:
      "O princípio da ROG baseia-se no conceito de exclusão celular seletiva: células epiteliais e fibroblastos do tecido conjuntivo migram e preenchem defeitos muito mais rapidamente que osteoblastos. A membrana (reabsorvível: colágeno; ou não reabsorvível: titânio/ePTFE) separa o espaço do defeito do tecido conjuntivo sobrejacente, garantindo que osteoblastos e células progenitoras de origem óssea (mais lentas) possam preencher o espaço sem competição. Combinada com enxerto ósseo (que serve de scaffold e fornece células e fatores), a ROG permite reconstruir deficiências ósseas moderadas.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 18–20: PATOLOGIA CIRÚRGICA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c18-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cistos dos Maxilares",
    difficulty: "Avançado",
    question: "O queratocisto odontogênico (tumor odontogênico queratocístico — TOQO) tem comportamento clínico distinto dos demais cistos porque:",
    options: [
      "É o único cisto que pode sofrer transformação maligna em carcinoma",
      "Apresenta alto potencial de crescimento, tendência a se expandir pelo osso esponjoso sem causar expansão cortical precoce, alto índice de recidiva após curetagem (60%) por ilhas epiteliais satélites, e pode associar-se à síndrome de Gorlin-Goltz",
      "É o cisto de maior tamanho encontrado nos maxilares",
      "Não responde a tratamento cirúrgico — exige radioterapia",
    ],
    correctIndex: 1,
    explanation:
      "O TOQO (classificado como tumor pela OMS em 2005 e recategorizado como cisto em 2017) tem comportamento agressivo único entre os cistos: (1) cresce pelo espaço medular (menor resistência) sem expandir a cortical precocemente — pode ser grande ao diagnóstico; (2) alto índice de recidiva (10–60% com apenas curetagem) por ilhas epiteliais satélites na parede e no tecido conjuntivo adjacente; (3) associado à Síndrome de Gorlin-Goltz (múltiplos queratocistos + carcinomas basocelulares + anomalias esqueléticas). Tratamento: enucleação + ostectomia periférica ± solução de Carnoy (reduz recidiva).",
  },
  {
    id: "cbmf-c18-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cistos dos Maxilares",
    difficulty: "Básico",
    question: "O cisto dentígero (folicular) forma-se a partir de:",
    options: [
      "Restos epiteliais da bainha de Hertwig após necrose pulpar",
      "Acúmulo de fluido entre as camadas do folículo pericoronal e a coroa do dente incluso — está sempre associado a um dente incluso, envolve sua coroa e está unido ao colo do dente",
      "Proliferação do epitélio do sulco gengival após extração",
      "Transformação cística do cemento de dentes com hipercementose",
    ],
    correctIndex: 1,
    explanation:
      "O cisto dentígero é o segundo cisto odontogênico mais comum, originado da expansão do folículo dentário (órgão que envolve a coroa do dente em desenvolvimento). O fluido se acumula entre o esmalte e o folículo reduzido, formando a cavidade cística. Está sempre associado a dente incluso (maioria: 3º molares inferiores e caninos superiores), com a coroa do dente projetada para o interior do cisto. Radiograficamente: área radiolúcida unilocular ao redor da coroa, ligada ao colo. Tratamento: enucleação com remoção simultânea do dente incluso.",
  },
  {
    id: "cbmf-c18-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cistos dos Maxilares",
    difficulty: "Intermediário",
    question: "A marsupialização de cistos grandes dos maxilares é indicada em vez de enucleação imediata quando:",
    options: [
      "O cisto apresenta aspecto multilocular à radiografia",
      "O cisto é muito grande e sua enucleação imediata comprometeria estruturas nobres (dentes vitais, nervo alveolar inferior, antro maxilar) — a marsupialização reduz o cisto progressivamente, preservando estruturas",
      "O paciente é alérgico à penicilina, tornando a enucleação mais arriscada",
      "Apenas quando o cisto apresenta tecido de granulação internamente",
    ],
    correctIndex: 1,
    explanation:
      "Marsupialização (descompressão): abertura cirúrgica de uma 'janela' no cisto, mantendo-a aberta (com obturador ou tubo) para equalizar a pressão intracística com a oral — o cisto involuí gradualmente. Indicações: (1) cistos muito extensos em que a enucleação imediata causaria fratura patológica mandibular; (2) cistos que envolvem dentes com vitalidade que se deseja preservar; (3) cistos em íntimo contato com o nervo alveolar inferior; (4) pacientes idosos com maior risco cirúrgico. Após a redução (6–12 meses), enucleação da cápsula residual completa o tratamento.",
  },
  {
    id: "cbmf-c18-04",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cistos dos Maxilares",
    difficulty: "Básico",
    question: "O cisto nasopalatino (cisto do canal incisivo) é distinguido do cisto radicular anterior porque:",
    options: [
      "O cisto radicular sempre tem abaulamento palatal, o nasopalatino não",
      "O cisto nasopalatino está localizado na região do canal incisivo (entre os incisivos centrais superiores ou entre incisivos e palato), os dentes vitais adjacentes têm teste de vitalidade positivo e não há cárie ou lesão periapical associada",
      "O cisto nasopalatino sempre tem calcificações internas visíveis à radiografia",
      "O diagnóstico diferencial só é possível por biópsia incisional — não há critérios clínicos",
    ],
    correctIndex: 1,
    explanation:
      "O cisto nasopalatino é o cisto não odontogênico mais comum dos maxilares, originado de remanescentes epiteliais do canal nasopalatino na linha mediana palatina anterior. Características diferenciais: (1) localização mediana, no canal incisivo; (2) dentes adjacentes vitais (sem história de trauma ou cárie); (3) radiografia: imagem em coração (oval com entalhes laterais) na região interincisal/canal incisivo; (4) sem fistula periapical. O cisto radicular tem: dente não-vital associado, lesão periapical diretamente sobre o ápice. Tratamento: enucleação.",
  },
  {
    id: "cbmf-c19-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Tumores Odontogênicos",
    difficulty: "Avançado",
    question: "O ameloblastoma sólido/multicístico tem comportamento clínico que justifica tratamento com ressecção em vez de curetagem porque:",
    options: [
      "É maligno em 50% dos casos e o tumor se dissemina via linfática",
      "É localmente agressivo — extensões microscópicas de células tumorais infiltram o osso medular além dos limites macroscópicos visíveis, tornando a curetagem insuficiente com recidiva em 50–90% dos casos tratados por curetagem simples",
      "A curetagem é proibida por normas oncológicas em qualquer neoplasia",
      "O ameloblastoma produz toxinas que causam necrose óssea e exige ressecção ampla para controle",
    ],
    correctIndex: 1,
    explanation:
      "O ameloblastoma sólido/multicístico (o tipo mais comum e agressivo) tem comportamento pseudomaligno localmente: (1) infiltra trabéculas ósseas microscopicamente além da margem radiográfica; (2) curetagem deixa ilhas tumorais no osso adjacente → recidiva em 50–90%; (3) recidivas repetidas podem eventualmente tornar-se ameloblastoma maligno. Tratamento adequado: ressecção cirúrgica com margens ósseas de 1–1,5 cm além da lesão radiográfica. Exceção: ameloblastoma unicístico (comportamento menos agressivo, enucleação pode ser aceita com seguimento rigoroso).",
  },
  {
    id: "cbmf-c19-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Tumores Odontogênicos",
    difficulty: "Básico",
    question: "O odontoma é classificado como:",
    options: [
      "Tumor odontogênico maligno com alta taxa de recidiva",
      "A lesão odontogênica mais comum — hamartoma (malformação) composto por tecidos dentais normais (esmalte, dentina, cemento, polpa) em padrão desorganizado (complexo) ou reconhecível como estruturas dentárias rudimentares (composto)",
      "Cisto odontogênico calcificado que pode transformar-se em cisto dentígero",
      "Neoplasia benigna de células da bainha de Hertwig",
    ],
    correctIndex: 1,
    explanation:
      "O odontoma é o tumor odontogênico mais prevalente e na verdade é um hamartoma (crescimento anormal de tecidos normais do dente). Tipos: (1) Composto — múltiplas estruturas dento-like rudimentares (denticulos) em região anterior maxilar — mais organizado; (2) Complexo — massa de tecidos calcificados desorganizados sem semelhança com dentes — mais comum em região posterior mandibular. Clínica: geralmente assintomático, descoberto em radiografia de rotina, pode causar não erupção de dentes. Tratamento: enucleação simples com excelente prognóstico, sem recidiva.",
  },
  {
    id: "cbmf-c19-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Tumores Odontogênicos",
    difficulty: "Intermediário",
    question: "O tumor odontogênico adenomatoide (TOA) tem características que facilitam seu diagnóstico diferencial com o cisto dentígero porque:",
    options: [
      "O TOA sempre apresenta reabsorção radicular intensa dos dentes adjacentes",
      "O TOA frequentemente envolve toda a raiz do dente incluso (e não apenas a coroa como o dentígero), predomina em mulheres jovens (< 20 anos), localiza-se principalmente na região de caninos superiores, e apresenta calcificações internas à radiografia",
      "O TOA apresenta expansão cortical agressiva enquanto o dentígero não",
      "O TOA recidiva em > 50% dos casos, exigindo margens cirúrgicas amplas",
    ],
    correctIndex: 1,
    explanation:
      "TOA (antes chamado de cisto adenomatoide) é benigno, com comportamento encapsulado e sem recidiva após enucleação simples. Características distintivas: (1) Dois terços associados a dente incluso, mas o processo envolve a raiz (não apenas a coroa) — padrão 'duplo dentígero'; (2) Predomina em mulheres (2:1), caninos superiores; (3) Calcificações pontiformes intratumorais; (4) Faixa etária: < 20 anos. O dentígero: apenas a coroa; qualquer dente incluso; sem calcificações; qualquer sexo. Tratamento do TOA: enucleação — prognóstico excelente.",
  },
  {
    id: "cbmf-c20-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Lesões Ósseas e Patologia",
    difficulty: "Intermediário",
    question: "A displasia fibrosa dos maxilares é caracterizada por:",
    options: [
      "Proliferação de células gigantes multinucleadas que reabsorvem o osso alveolar",
      "Substituição progressiva do tecido ósseo normal por tecido fibroso com trabéculas ósseas imaturas — aspecto radiográfico em 'vidro fosco', expansão óssea indolor, e desenvolvimento durante crescimento esquelético (autolimitada na puberdade na maioria dos casos)",
      "Lesão maligna de crescimento rápido com destruição cortical e invasão de tecidos moles",
      "Cisto remanescente de infecção odontogênica não tratada com calcificação de suas paredes",
    ],
    correctIndex: 1,
    explanation:
      "A displasia fibrosa é uma condição benigna não neoplásica por mutação somática do gene GNAS1 (proteína Gsα) — as células ósseas não amadurecem e produzem tecido fibroso com trabéculas imaturas em vez de osso lamelar. Maxila anterior é a localização mais comum em face. Características: (1) expansão óssea progressiva durante crescimento, estabiliza pós-puberdade (maioria dos casos); (2) vidro fosco na TC; (3) assintomática em geral. Tratamento: contouring estético quando necessário (após estabilização). Síndrome de McCune-Albright: displasia fibrosa poliostótica + manchas café-au-lait + puberdade precoce.",
  },
  {
    id: "cbmf-c20-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Lesões Ósseas e Patologia",
    difficulty: "Intermediário",
    question: "Os principais fatores de risco para o carcinoma espinocelular (CEC) de boca são:",
    options: [
      "Má higiene bucal e uso de aparelho ortodôntico fixo",
      "Tabaco (fumo e tabaco sem fumaça) e álcool — sinergismo multiplicativo de risco; além de HPV de alto risco (tipo 16, especialmente em orofaringe), imunossupressão e anemia de Fanconi",
      "Uso de prótese total mal adaptada e deficiência de vitamina D",
      "Bruxismo e ranger de dentes — o trauma mecânico crônico é o principal fator etiológico",
    ],
    correctIndex: 1,
    explanation:
      "O CEC representa > 90% dos cânceres de boca. Fatores etiológicos: (1) Tabaco — cigarro, cigarro de palha, cachimbo, charuto, narguilé e tabaco para mascar; risco relativo 5–7x; (2) Álcool — risco relativo 6x; (3) Sinergismo tabaco + álcool — risco até 40x comparado a não fumantes não etilistas; (4) HPV tipo 16/18 — especialmente carcinomas de base de língua, amígdala e orofaringe em não fumantes; (5) Radiação solar — para lábio inferior; (6) Anemia de Fanconi, candidose eritematosa crônica. Localização mais comum: borda lateral de língua, assoalho de boca.",
  },
  {
    id: "cbmf-c20-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Lesões Ósseas e Patologia",
    difficulty: "Básico",
    question: "A biópsia incisional é indicada em vez de excisional quando:",
    options: [
      "A lesão é menor que 5 mm e de fácil acesso",
      "A lesão é grande (> 1 cm), extensamente infiltrante ou suspeita de malignidade — a incisional obtém amostra representativa para diagnóstico sem comprometer o planejamento cirúrgico definitivo que pode envolver margens amplas",
      "O paciente recusa biópsia completa por questões financeiras",
      "A lesão é superficial — lesões superficiais são sempre tratadas por excisão",
    ],
    correctIndex: 1,
    explanation:
      "Biópsia excisional (remove toda a lesão): indicada em lesões pequenas (< 1 cm), bem delimitadas, de aparência benigna — o próprio procedimento é diagnóstico e terapêutico. Biópsia incisional (remove fragmento representativo): indicada em lesões extensas, infiltrativas, suspeitas de malignidade ou em localização onde a excisão imediata sem diagnóstico comprometeria o tratamento definitivo. Em lesões malignas, a excisão sem margens adequadas pode disseminar células, comprometer o planejamento de margens e alterar o estadiamento. O diagnóstico histopatológico primeiro orienta a extensão da cirurgia definitiva.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CIRURGIA BUCOMAXILOFACIAL — CAP. 21–23: ATM, ORTOGNÁTICA E ENXERTOS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "cbmf-c21-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "ATM e DTM",
    difficulty: "Intermediário",
    question: "O deslocamento do disco articular da ATM com redução é diferenciado do sem redução porque:",
    options: [
      "O deslocamento com redução é permanente e o sem redução é transitório",
      "No deslocamento com redução há estalido (click) na abertura e fechamento — o disco volta à posição na abertura; no sem redução (closed lock) não há estalido, há limitação de abertura (< 35 mm), deflexão para o lado afetado e bloqueio de abertura total",
      "O sem redução é mais comum em mulheres e o com redução em homens",
      "O deslocamento com redução sempre exige cirurgia enquanto o sem redução resolve espontaneamente",
    ],
    correctIndex: 1,
    explanation:
      "O disco articular da ATM está fixado ao polo medial e lateral do côndilo. No deslocamento com redução: em fechamento o disco está anteriormente deslocado (condilo atrás do disco); ao abrir a boca, o côndilo 'captura' o disco com ruído (clique de abertura); o disco volta a deslocar ao fechar (clique de fechamento). No deslocamento sem redução (travamento fechado/closed lock): o disco está deslocado e não recaptura — abertura limitada (< 35 mm), deflexão ipsilateral. Diagnóstico confirmatório: RNM. Tratamento inicial: conservador (placa oclusal, fisioterapia); artrocentese quando conservador falha.",
  },
  {
    id: "cbmf-c21-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "ATM e DTM",
    difficulty: "Intermediário",
    question: "A artrocentese da ATM é um procedimento minimamente invasivo indicado quando:",
    options: [
      "Há suspeita de artrite reumatoide sistêmica acometendo a ATM",
      "DTM articular (especialmente deslocamento de disco sem redução, artrite, adesões) não melhora após tratamento conservador adequado por 4–6 semanas — a artrocentese lava o compartimento articular superior removendo mediadores inflamatórios e desfaz adesões",
      "O paciente solicita procedimento cirúrgico para aliviar os sintomas rapidamente",
      "É contraindicada em pacientes jovens — reservada para pacientes acima de 50 anos",
    ],
    correctIndex: 1,
    explanation:
      "Artrocentese: inserção de duas agulhas no compartimento articular superior com infiltração de soro fisiológico (lavagem articular) e eventualmente corticoide. Mecanismo: (1) remove citocinas inflamatórias (IL-1β, TNF-α, PGE2) do fluido articular que mantêm a inflamação; (2) desfaz micoadesões fibrinosas que limitam o movimento discal; (3) hidrata o compartimento. Indicações: (1) deslocamento sem redução < 4 semanas sem melhora com conservador; (2) artralgia persistente; (3) artrite inflamatória. Procedimento de baixo risco, pode ser repetido. Artroscopia oferece maior acesso para casos complexos.",
  },
  {
    id: "cbmf-c21-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "ATM e DTM",
    difficulty: "Avançado",
    question: "A anquilose da ATM em criança tem consequência esquelética grave porque:",
    options: [
      "Provoca reabsorção do côndilo que se espalha para o osso temporal",
      "O côndilo mandibular é o principal centro de crescimento da mandíbula — a anquilose bloqueia o crescimento mandibular ipsilateral, causando hipoplasia mandibular progressiva, desvio do mento para o lado afetado, e má oclusão Classe II com micrognatia",
      "A anquilose causa desvio do septo nasal e obstrução das vias aéreas superiores por pressão",
      "O côndilo anquilosado degenera e causa artrite da articulação sternoclavicular por alteração sistêmica",
    ],
    correctIndex: 1,
    explanation:
      "A anquilose da ATM em criança (mais comum após trauma ou infecção — otite média com disseminação para ATM) cria um bloco ósseo ou fibroso que imobiliza o côndilo. Como o côndilo é o principal sítio de crescimento mandibular, a anquilose interrompe o crescimento ipsilateral: mandíbula não cresce desse lado → hipoplasia mandibular progressiva, desvio do queixo para o lado afetado, má oclusão Classe II ipsilateral, face assimétrica, e frequentemente apneia obstrutiva do sono por micrognatia. Tratamento: condilopatia-artroplastia precoce + distração osteogênica para compensar a hipoplasia → cirurgia ortognática na vida adulta.",
  },
  {
    id: "cbmf-c22-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Ortognática",
    difficulty: "Intermediário",
    question: "A osteotomia sagital do ramo mandibular (BSSO — Bilateral Sagittal Split Osteotomy) de Obwegeser-Dal Pont permite:",
    options: [
      "Apenas o avanço mandibular — recuos mandibulares requerem outra técnica",
      "Avanço ou recuo mandibular por deslizamento do segmento distal (dento-alveolar) sobre o proximal (ramo) — os fragmentos são fixados com placas e parafusos de titânio, preservando a continuidade do nervo alveolar inferior dentro do segmento distal",
      "Correção apenas de discrepâncias transversais da mandíbula",
      "É realizada apenas em pacientes com crescimento esquelético completo, antes dos 18 anos é contraindicada",
    ],
    correctIndex: 1,
    explanation:
      "A BSSO é a osteotomia mandibular mais versátil: os cortes sagitais no ramo dividem a mandíbula em dois segmentos — distal (com os dentes, nervo alveolar e mento) e proximal (côndilo + ramo). O segmento distal pode ser movido para frente (avanço — tratamento de micrognatia/Classe II) ou para trás (recuo — tratamento de prognatia/Classe III) e fixado com placas em nova posição. Crítico: o nervo alveolar inferior deve permanecer no segmento distal durante a osteotomia para evitar parestesia permanente. Indicada para discrepâncias sagitais; associada à Le Fort I para discrepâncias combinadas.",
  },
  {
    id: "cbmf-c22-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Ortognática",
    difficulty: "Intermediário",
    question: "A osteotomia Le Fort I em cirurgia ortognática permite:",
    options: [
      "Apenas o recuo maxilar — avanços superiores a 8 mm exigem enxerto ósseo e são contraindicados",
      "Mobilização tridimensional da maxila: avanço/recuo, intrusão/extrusão, expansão transversal, rotação anteroposterior — a maxila é mobilizada em bloco e fixada com placas de titânio na posição planejada",
      "Somente correções verticais (aumento ou redução da altura facial inferior)",
      "É realizada apenas para corrigir má oclusão Classe III esquelética",
    ],
    correctIndex: 1,
    explanation:
      "A Le Fort I ortognática é uma osteotomia horizontal da maxila ao nível do Le Fort I de fratura (acima dos ápices dentários), separando o complexo dento-alveolar maxilar do restante do crânio. Após a 'down-fracture' (abertura para baixo) da maxila, ela pode ser reposicionada em qualquer direção do espaço: avanço (tratamento de hipoplasia maxilar, Classe III), recuo (raro), impactação vertical (excesso vertical maxilar), alongamento (mordida aberta esquelética), expansão transversal (com corte palatino sagital), e rotação horária/anti-horária. Fixação com placas de titânio de 4 pontos.",
  },
  {
    id: "cbmf-c22-03",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Cirurgia Ortognática",
    difficulty: "Avançado",
    question: "O conceito 'cirurgia-primeiro' (surgery-first) na ortognática tem como vantagem sobre o protocolo convencional (ortodontia pré-cirúrgica → cirurgia → ortodontia pós-cirúrgica) porque:",
    options: [
      "Elimina completamente a necessidade de tratamento ortodôntico pós-operatório",
      "Corrige a discrepância esquelética imediatamente sem descompensação dentária pré-operatória — o paciente tem resultado estético imediato, e o fenômeno de aceleração regional (RAP) pós-cirúrgico acelera o movimento ortodôntico pós-operatório, reduzindo o tempo total de tratamento",
      "É mais simples tecnicamente — não requer planejamento virtual ou modelos cirúrgicos",
      "Deve ser aplicada em todos os casos ortognáticos como protocolo padrão atual",
    ],
    correctIndex: 1,
    explanation:
      "No protocolo convencional: ortodontia pré-cirúrgica descompensa os dentes (piora temporariamente a aparência) por 12–18 meses, depois cirurgia, depois ortodontia pós-cirúrgica de 6–12 meses. Total: 2–3 anos. Surgery-first: cirurgia imediata sem descompensação pré → resultado estético imediato → ortodontia pós-cirúrgica em ambiente pós-cirúrgico onde o RAP (Regional Acceleratory Phenomenon — metabolismo ósseo acelerado ao redor da cirurgia) aumenta a velocidade do movimento dentário. Vantagens: menor tempo total, menor impacto psicossocial. Limitações: requer planejamento virtual 3D muito preciso; nem todos os casos são elegíveis.",
  },
  {
    id: "cbmf-c23-01",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Enxertos e Reconstrução",
    difficulty: "Intermediário",
    question: "O enxerto ósseo autógeno é considerado padrão ouro em reconstrução dos maxilares porque:",
    options: [
      "É o mais fácil de obter e não requer segundo sítio cirúrgico",
      "Apresenta as três propriedades necessárias para regeneração óssea ideal: osteogênese (células vivas osteoblásticas/progenitoras), osteocondução (scaffold para crescimento vascular e celular) e osteoindução (proteínas morfogenéticas ósseas — BMPs — que recrutam células progenitoras locais)",
      "Não apresenta risco de rejeição imunológica ou infecção",
      "Pode ser processado industrialmente e armazenado indefinidamente",
    ],
    correctIndex: 1,
    explanation:
      "Os três mecanismos de regeneração óssea: (1) Osteogênese — células vivas (osteoblastos, células-tronco mesenquimais) do enxerto que sobrevivem e formam osso diretamente — exclusivo do autógeno; (2) Osteocondução — matriz (scaffold) que serve como estrutura tridimensional para invasão vascular e celular — autógeno, xenógeno e aloplástico têm esse papel; (3) Osteoindução — proteínas (BMPs, TGF-β) no enxerto que estimulam diferenciação de células progenitoras em osteoblastos — autógeno tem em maior quantidade. Desvantagens do autógeno: morbidade de sítio doador (dor, cicatriz), quantidade limitada.",
  },
  {
    id: "cbmf-c23-02",
    subject: "Cirurgia Bucomaxilofacial",
    topic: "Enxertos e Reconstrução",
    difficulty: "Avançado",
    question: "A distração osteogênica aplica-se à reconstrução mandibular porque:",
    options: [
      "Cria osso pelo afastamento gradual de fragmentos ósseos osteotomizados — o periósteo e tecidos moles acompanham o alongamento, gerando osso de boa qualidade sem necessidade de enxerto",
      "Dissolve o osso mandibular hipoplásico por eletrólise antes de reconstruí-lo",
      "Substitui enxertos ósseos em todos os casos — enxertos se tornaram obsoletos",
      "Permite apenas aumento transversal do rebordo, não o alongamento sagital",
    ],
    correctIndex: 1,
    explanation:
      "A distração osteogênica (DO) aplica o princípio de Ilizarov: osteotomia do osso → período de latência (5–7 dias) → distração gradual (1 mm/dia) → fase de consolidação (8–12 semanas). No gap entre os segmentos, forma-se calo ósseo novo que se mineraliza progressivamente. Vantagens: osso formado é autógeno, os tecidos moles acompanham (menor risco de recidiva por tensão), pode criar grandes volumes. Aplicações em BMF: micrognatia/hipoplasia mandibular em crianças (evita AG), reconstrução de mandíbula após ressecção tumoral, deficiências verticais e transversais de rebordo para implantes.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PRÓTESE PARCIAL FIXA — BLOCO I: FUNDAMENTOS
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 1 — Introdução à PPF
  {
    id: "ppf-c1-01",
    subject: "Prótese Parcial Fixa",
    topic: "Introdução e Classificação",
    difficulty: "Básico",
    question: "Uma PPF com pôntico apoiado em apenas um pilar, sem suporte no lado oposto, é classificada como:",
    options: ["PPF convencional de dois pilares", "PPF em cantiléver (extensão livre)", "PPF adesiva de Maryland", "Overdenture implanto-suportada"],
    correctIndex: 1,
    explanation: "A PPF em cantiléver tem o pôntico suportado por um único pilar, gerando forças de torção sobre ele. É indicada com cautela — principalmente para substituição do segundo pré-molar inferior — e exige pilar robusto.",
  },
  {
    id: "ppf-c1-02",
    subject: "Prótese Parcial Fixa",
    topic: "Introdução e Classificação",
    difficulty: "Básico",
    question: "Qual a principal vantagem da PPF convencional sobre a prótese parcial removível (PPR)?",
    options: [
      "Menor custo de confecção",
      "Não requer desgaste dos dentes pilares",
      "Maior conforto, melhor função mastigatória e estética superior por ser fixa na boca",
      "Pode ser instalada mesmo com doença periodontal ativa",
    ],
    correctIndex: 2,
    explanation: "A PPF oferece maior conforto (não é removida pelo paciente), melhor transmissão das forças mastigatórias e estética mais natural. A desvantagem é o desgaste dos dentes pilares e o custo mais elevado em relação à PPR.",
  },
  {
    id: "ppf-c1-03",
    subject: "Prótese Parcial Fixa",
    topic: "Terminologia",
    difficulty: "Básico",
    question: "Na terminologia da PPF, o 'conector' é definido como:",
    options: [
      "O elemento artificial que substitui o dente ausente",
      "A porção que une o retentor ao pôntico, podendo ser rígido ou não-rígido",
      "O cimento que une a coroa ao dente pilar",
      "O componente de encaixe em próteses adesivas",
    ],
    correctIndex: 1,
    explanation: "O conector é a junção entre o retentor (que cobre o pilar) e o pôntico. Conectores rígidos são os mais comuns; conectores não-rígidos (eixo macho-fêmea) são usados em situações específicas, como pilares com diferentes eixos de inserção.",
  },

  // CAP. 2 — Anatomia Dental Aplicada
  {
    id: "ppf-c2-01",
    subject: "Prótese Parcial Fixa",
    topic: "Anatomia e Perfil de Emergência",
    difficulty: "Básico",
    question: "O 'perfil de emergência' de uma coroa protética refere-se a:",
    options: [
      "O ângulo de convergência das paredes axiais do preparo",
      "O contorno da restauração desde o término cervical até o ponto de contato proximal, imitando a anatomia natural",
      "A espessura mínima de cerâmica na região vestibular",
      "A curvatura da face oclusal em relação ao plano de Frankfurt",
    ],
    correctIndex: 1,
    explanation: "O perfil de emergência descreve como a restauração 'emerge' do sulco gengival em direção ao ponto de contato. Um perfil correto suporta o tecido gengival, reproduz a convexidade natural e é fundamental para a saúde periodontal periprotética.",
  },
  {
    id: "ppf-c2-02",
    subject: "Prótese Parcial Fixa",
    topic: "Anatomia e Perfil de Emergência",
    difficulty: "Intermediário",
    question: "A localização ideal do ponto de contato proximal em dentes posteriores é:",
    options: [
      "No terço cervical, próximo à gengiva",
      "Na junção dos terços oclusal e médio, centralizado no sentido vestíbulo-lingual",
      "No terço oclusal, na linha de ângulo vestibular",
      "Dentes posteriores não devem ter contatos proximais em prótese",
    ],
    correctIndex: 1,
    explanation: "Em dentes posteriores, o ponto de contato fica na junção do terço oclusal com o médio, centrado no sentido VL. Isso distribui forças adequadamente e mantém a papila gengival protegida no nicho abaixo do contato.",
  },
  {
    id: "ppf-c2-03",
    subject: "Prótese Parcial Fixa",
    topic: "Anatomia e Perfil de Emergência",
    difficulty: "Intermediário",
    question: "A proporção coroa/raiz mínima geralmente aceita para seleção de um dente como pilar de PPF é:",
    options: ["2:1 (coroa duas vezes maior que a raiz)", "1:1 (coroa igual ao comprimento radicular)", "1:2 (raiz duas vezes maior que a coroa)", "3:1 (coroa três vezes maior)"],
    correctIndex: 1,
    explanation: "A proporção mínima aceitável é 1:1. A ideal é 1:2 (raiz duas vezes maior). Proporções desfavoráveis aumentam o braço de alavanca coronário e o risco de sobrecarga radicular, especialmente em pilares de cantiléver.",
  },

  // CAP. 3 — Oclusão
  {
    id: "ppf-c3-01",
    subject: "Prótese Parcial Fixa",
    topic: "Oclusão em Prótese Fixa",
    difficulty: "Básico",
    question: "A Máxima Intercuspidação Habitual (MIH) representa:",
    options: [
      "A posição condilar mais posterior e superior na fossa articular",
      "A posição de máximo contato dentário intercuspídeo, independente da posição condilar",
      "O contato dentário durante a protrusão máxima",
      "A posição de repouso mandibular sem contato dental",
    ],
    correctIndex: 1,
    explanation: "A MIH (ou ICP — Intercuspal Position) é a posição de máximo contato dentário. Pode coincidir ou não com a Relação Cêntrica e é a referência principal para ajuste oclusal de PPF.",
  },
  {
    id: "ppf-c3-02",
    subject: "Prótese Parcial Fixa",
    topic: "Oclusão em Prótese Fixa",
    difficulty: "Intermediário",
    question: "A guia anterior na oclusão tem como função principal:",
    options: [
      "Distribuir as forças mastigatórias igualmente entre todos os dentes",
      "Desocluir os dentes posteriores durante os movimentos de protrusão e lateralidade, protegendo-os de forças horizontais",
      "Aumentar a dimensão vertical de oclusão durante a função",
      "Manter o selamento labial em repouso",
    ],
    correctIndex: 1,
    explanation: "A guia anterior (incisivos) promove a desoclusão dos dentes posteriores nos movimentos excursivos, protegendo-os de forças não axiais. Reconstruir a guia adequada é fundamental em reabilitações anteriores com PPF.",
  },
  {
    id: "ppf-c3-03",
    subject: "Prótese Parcial Fixa",
    topic: "Oclusão em Prótese Fixa",
    difficulty: "Avançado",
    question: "Na oclusão mutuamente protegida, os dentes posteriores protegem os anteriores em:",
    options: [
      "Movimentos de lateralidade e protrusão",
      "Oclusão cêntrica (MIH), suportando a maior parte das forças verticais axiais",
      "Durante a deglutição e contatos em repouso",
      "Durante a mastigação unilateral exclusiva",
    ],
    correctIndex: 1,
    explanation: "Na oclusão mutuamente protegida: os posteriores suportam as forças verticais em MIH (protegendo os anteriores de sobrecarga compressiva), enquanto os anteriores promovem a desoclusão posterior nos movimentos excursivos (protegendo os posteriores de forças horizontais).",
  },

  // CAP. 4 — Biomecânica
  {
    id: "ppf-c4-01",
    subject: "Prótese Parcial Fixa",
    topic: "Biomecânica",
    difficulty: "Básico",
    question: "A Lei de Ante em prótese parcial fixa estabelece que:",
    options: [
      "O conector deve ter resistência proporcional ao número de pônticos",
      "A área de superfície radicular dos pilares deve ser igual ou maior que a dos dentes substituídos pelo pôntico",
      "O comprimento do pôntico não deve exceder 1,5× o diâmetro do pilar",
      "O eixo de inserção deve ser perpendicular ao plano oclusal",
    ],
    correctIndex: 1,
    explanation: "A Lei de Ante (1926) preconiza que a soma das áreas radiculares dos pilares deve ser ≥ à dos dentes substituídos. É um princípio biomecânico clássico, complementado atualmente pela avaliação da qualidade óssea e do suporte periodontal.",
  },
  {
    id: "ppf-c4-02",
    subject: "Prótese Parcial Fixa",
    topic: "Biomecânica",
    difficulty: "Intermediário",
    question: "O tipo de força mais prejudicial ao periodonto dos pilares de PPF é:",
    options: [
      "Força compressiva axial (vertical)",
      "Força horizontal (cisalhamento e torção)",
      "Força compressiva leve durante a mastigação",
      "Força de tração leve durante a abertura bucal",
    ],
    correctIndex: 1,
    explanation: "Forças horizontais (cisalhamento, torção, lateralidade) são as mais prejudiciais — o periodonto é menos resistente a forças não axiais. Forças axiais de compressão são melhor toleradas. O design da PPF deve minimizar forças torcionais sobre os pilares.",
  },
  {
    id: "ppf-c4-03",
    subject: "Prótese Parcial Fixa",
    topic: "Biomecânica",
    difficulty: "Avançado",
    question: "Em uma PPF em cantiléver com pôntico distal, o pilar sofre principalmente:",
    options: [
      "Compressão axial pura",
      "Momento de força (torque) com tendência a girar e extruir o pilar",
      "Força de intrusão uniforme ao longo da raiz",
      "Apenas forças laterais sem componente vertical",
    ],
    correctIndex: 1,
    explanation: "O pôntico em cantiléver cria um momento de força no pilar, com tendência de rotação e extrusão. A força oclusal sobre o pôntico é amplificada pelo braço de alavanca. Por isso, cantiléver exige pilares robustos e extensão controlada.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO II — DIAGNÓSTICO E PLANEJAMENTO
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 5 — Exame Clínico
  {
    id: "ppf-c5-01",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Básico",
    question: "Qual parâmetro periodontal é indispensável antes de iniciar um tratamento de PPF?",
    options: [
      "Avaliação de sondagem completa (profundidade de bolsa, nível de inserção, mobilidade e sangramento)",
      "Apenas avaliação visual da cor e forma gengival",
      "Apenas verificação de placa visível",
      "Avaliação radiográfica sem necessidade de sondagem",
    ],
    correctIndex: 0,
    explanation: "Sondagem periodontal completa (6 pontos por dente) com registro de profundidade de bolsa, nível de inserção clínica, mobilidade e sangramento são obrigatórios antes de qualquer PPF. Doença periodontal ativa é contraindicação ao início da reabilitação.",
  },
  {
    id: "ppf-c5-02",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Intermediário",
    question: "A linha do sorriso ideal expõe:",
    options: [
      "Apenas os dentes inferiores durante o sorriso forçado",
      "Os dentes superiores com exposição gengival de 0–2 mm e borda incisal acompanhando a curvatura do lábio inferior",
      "Os dentes superiores totalmente cobertos pelo lábio superior",
      "Exposição gengival superior a 4 mm (sorriso gengival)",
    ],
    correctIndex: 1,
    explanation: "A linha do sorriso ideal expõe 0–2 mm de gengiva e tem a borda incisal dos superiores acompanhando a curvatura do lábio inferior. Isso guia decisões sobre comprimento e posição das coroas anteriores na PPF.",
  },

  // CAP. 6 — Exames Complementares
  {
    id: "ppf-c6-01",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Básico",
    question: "O enceramento diagnóstico (wax-up) é realizado para:",
    options: [
      "Determinar a cor final da cerâmica",
      "Visualizar previamente o resultado estético e funcional, guiando preparos, provisórios e comunicação com o laboratório",
      "Verificar a vitalidade pulpar dos pilares",
      "Realizar a sondagem periodontal em modelos de gesso",
    ],
    correctIndex: 1,
    explanation: "O wax-up reproduz em cera o resultado final sobre os modelos de estudo. Serve como guia para os preparos, confecção de provisórios (matriz de silicone) e comunicação com o laboratório e com o paciente antes de qualquer intervenção irreversível.",
  },
  {
    id: "ppf-c6-02",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Intermediário",
    question: "A montagem dos modelos em articulador semi-ajustável (ASA) com arco facial é necessária porque:",
    options: [
      "Reduz o custo do tratamento ao eliminar ajustes clínicos",
      "Reproduz a relação dos modelos com o eixo de dobradiça terminal do paciente, simulando movimentos mandibulares e melhorando a precisão oclusal",
      "Permite verificar a cor das cerâmicas antes da queima",
      "É obrigatória apenas para próteses sobre implantes",
    ],
    correctIndex: 1,
    explanation: "O arco facial transfere a posição maxilar em relação ao eixo condilar. Montados no ASA, os modelos simulam os movimentos mandibulares do paciente, possibilitando confeccionar próteses com oclusão mais precisa e reduzir os ajustes em boca.",
  },

  // CAP. 7 — Seleção de Pilares
  {
    id: "ppf-c7-01",
    subject: "Prótese Parcial Fixa",
    topic: "Seleção de Pilares",
    difficulty: "Básico",
    question: "Um dente com tratamento endodôntico bem realizado e sem lesão periapical pode ser pilar de PPF desde que:",
    options: [
      "Nunca — dentes tratados endodonticamente são contraindicados como pilares",
      "Possua remanescente coronário suficiente, efeito férula adequado e restauração coronal de qualidade",
      "Seja apenas dente anterior, pois os posteriores são sempre extraídos",
      "O canal seja retratado antes da instalação da prótese",
    ],
    correctIndex: 1,
    explanation: "Dentes tratados endodonticamente podem ser excelentes pilares quando há efeito férula (≥ 2 mm de dentina sã além do núcleo), remanescente radicular adequado, ausência de lesão ativa e restauração coronal correta. O prognóstico equipara-se ao de dentes vitais bem manejados.",
  },
  {
    id: "ppf-c7-02",
    subject: "Prótese Parcial Fixa",
    topic: "Seleção de Pilares",
    difficulty: "Avançado",
    question: "Quando um possível pilar apresenta perda de inserção periodontal de 30–40%, a decisão de mantê-lo considera:",
    options: [
      "Sempre extrair e usar implante",
      "O prognóstico pós-tratamento periodontal, a área radicular remanescente útil, a distribuição dos demais pilares e a conformidade do paciente ao controle de placa",
      "Apenas o aspecto radiográfico",
      "Substituir por PPR em todos os casos",
    ],
    correctIndex: 1,
    explanation: "A decisão sobre pilares periodontalmente comprometidos é multifatorial. Após terapia periodontal, reavalia-se o prognóstico. Pilares com até 50% de suporte podem ser úteis se bem distribuídos. A conformidade do paciente à manutenção periódica é fator determinante.",
  },

  // CAP. 8 — Plano de Tratamento Integrado
  {
    id: "ppf-c8-01",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Básico",
    question: "A sequência correta de fases no plano de tratamento para PPF é:",
    options: [
      "Reabilitação → controle de doença → urgência → manutenção",
      "Urgência → controle de doença ativa → reabilitação → manutenção",
      "Reabilitação → urgência → manutenção → controle",
      "Controle → urgência → manutenção → reabilitação",
    ],
    correctIndex: 1,
    explanation: "A sequência clássica é: urgência (eliminar dor/infecção) → controle de doença (periodontal, cárie, endodontia) → reabilitação (PPF, implantes) → manutenção periódica. Instalar prótese sobre doença ativa compromete o prognóstico.",
  },
  {
    id: "ppf-c8-02",
    subject: "Prótese Parcial Fixa",
    topic: "Exame Clínico e Planejamento",
    difficulty: "Intermediário",
    question: "A cirurgia de aumento de coroa clínica antes da PPF é indicada quando:",
    options: [
      "O dente apresenta cárie supragengival extensa",
      "O término do preparo ou margem da futura restauração invade o espaço biológico (< 3 mm entre margem e crista óssea)",
      "O dente apresenta mobilidade grau I",
      "O paciente apresenta biotipo gengival espessado",
    ],
    correctIndex: 1,
    explanation: "O espaço biológico (epitélio juncional + fibras supracrestais ≈ 2 mm) exige ao menos 3 mm entre crista óssea e término da restauração. Quando invadido, o aumento de coroa clínica (osteotomia + osteoplastia) é necessário para evitar inflamação gengival crônica periprotética.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO III — PREPAROS DENTÁRIOS
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 9 — Princípios Gerais de Preparo
  {
    id: "ppf-c9-01",
    subject: "Prótese Parcial Fixa",
    topic: "Princípios de Preparo",
    difficulty: "Básico",
    question: "Qual princípio de preparo dental é considerado o mais crítico para a longevidade da restauração?",
    options: [
      "Estética (forma e cor da restauração)",
      "Integridade marginal — adaptação precisa da restauração ao término do preparo",
      "Número máximo de superfícies preparadas",
      "Profundidade máxima de desgaste para retenção",
    ],
    correctIndex: 1,
    explanation: "A integridade marginal é o princípio mais crítico: margem desadaptada permite microinfiltração, cárie secundária, inflamação periodontal e falha prematura da restauração. Todos os demais princípios são secundários se a margem for inadequada.",
  },
  {
    id: "ppf-c9-02",
    subject: "Prótese Parcial Fixa",
    topic: "Princípios de Preparo",
    difficulty: "Intermediário",
    question: "O TOC (Total Occlusal Convergence) ideal para retenção de coroas totais está na faixa de:",
    options: ["0–5°", "10–20°", "25–35°", "40–60°"],
    correctIndex: 1,
    explanation: "O TOC ideal é 10–20° (ângulo total entre as paredes opostas), sendo 12–16° o mais citado. Abaixo de 10° dificulta a remoção da restauração. Acima de 20–25° reduz significativamente a retenção e a resistência ao deslocamento.",
  },
  {
    id: "ppf-c9-03",
    subject: "Prótese Parcial Fixa",
    topic: "Princípios de Preparo",
    difficulty: "Avançado",
    question: "'Retenção' e 'estabilidade' em preparos dentários são conceitos distintos. Estabilidade refere-se a:",
    options: [
      "A força necessária para remover a restauração no sentido axial",
      "A resistência da restauração a forças oblíquas e horizontais que tentam tombá-la ou girá-la",
      "A rugosidade superficial das paredes axiais do preparo",
      "O comprimento mínimo das paredes axiais do preparo",
    ],
    correctIndex: 1,
    explanation: "Retenção resiste ao deslocamento axial (remoção). Estabilidade resiste a forças laterais e oblíquas que tentam tombar ou girar a coroa. Ambas dependem da altura, convergência e geometria do preparo, mas são aumentadas por fatores diferentes.",
  },

  // CAP. 10 — Términos Cervicais
  {
    id: "ppf-c10-01",
    subject: "Prótese Parcial Fixa",
    topic: "Términos Cervicais",
    difficulty: "Básico",
    question: "O término cervical mais indicado para coroas totalmente cerâmicas (zircônia ou dissilicato de lítio) é:",
    options: [
      "Lâmina de faca (knife edge)",
      "Chanfro suave (chamfer) ou ombro arredondado",
      "Ombro reto a 90° sem arredondamento interno",
      "Bisel extenso a 45°",
    ],
    correctIndex: 1,
    explanation: "Cerâmicas totais exigem chanfro ou ombro arredondado — fornece espaço suficiente (≥ 1–1,5 mm) e elimina ângulos vivos que concentram tensões e causam fratura. A lâmina de faca é contraindicada por não fornecer espaço adequado para a cerâmica.",
  },
  {
    id: "ppf-c10-02",
    subject: "Prótese Parcial Fixa",
    topic: "Términos Cervicais",
    difficulty: "Intermediário",
    question: "O espaço biológico periodontal corresponde à soma de:",
    options: [
      "Profundidade de sondagem + recessão gengival",
      "Epitélio juncional (~1 mm) + fibras do tecido conjuntivo supracrestal (~1 mm) ≈ 2 mm",
      "Sulco gengival + epitélio juncional apenas",
      "Crista óssea + lâmina dura apenas",
    ],
    correctIndex: 1,
    explanation: "O espaço biológico (Gargiulo, 1961) = epitélio juncional (~0,97 mm) + fibras supracrestais (~1,07 mm) ≈ 2 mm. Somando o sulco gengival (~1 mm), precisamos de ≥ 3 mm entre crista óssea e margem da restauração. Invasão causa inflamação gengival crônica irreversível.",
  },
  {
    id: "ppf-c10-03",
    subject: "Prótese Parcial Fixa",
    topic: "Términos Cervicais",
    difficulty: "Intermediário",
    question: "O término intrassulcular (subgengival) é indicado principalmente quando:",
    options: [
      "Em todos os casos para melhorar a estética",
      "Há coroa clínica curta necessitando de mais retenção, margem anterior a esconder por razão estética, ou restauração de lesão subgengival",
      "Apenas em dentes anteriores com biotipo fino",
      "Nunca — todos os términos devem ser supragengivais",
    ],
    correctIndex: 1,
    explanation: "O término subgengival é indicado seletivamente: coroa clínica curta (necessidade de retenção extra), estética anterior (esconder margem), ou lesão/fratura subgengival. Aumenta o risco periodontal se mal executado e dificulta a moldagem.",
  },

  // CAP. 11 — Coroas Totais Metálicas
  {
    id: "ppf-c11-01",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Coroas Metálicas",
    difficulty: "Básico",
    question: "Para uma coroa total metálica em região posterior, a redução oclusal mínima recomendada é de:",
    options: ["0,5 mm em toda a face", "1,0–1,5 mm nas cúspides funcionais e ≥ 1,0 mm nas não-funcionais", "2,5–3,0 mm em toda a face oclusal", "3,0 mm para garantir resistência suficiente"],
    correctIndex: 1,
    explanation: "Coroas metálicas requerem menos espaço que as cerâmicas: 1,0–1,5 mm nas cúspides funcionais e ≥ 1,0 mm nas não funcionais. Esse espaço garante resistência mecânica do metal sem fragilizar excessivamente o preparo.",
  },

  // CAP. 12 — Coroas Metalocerâmicas
  {
    id: "ppf-c12-01",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Metalocerâmica",
    difficulty: "Básico",
    question: "Para uma coroa metalocerâmica em dente anterior, a redução vestibular mínima é de:",
    options: ["0,5 mm", "1,0 mm", "1,5–2,0 mm", "3,0 mm"],
    correctIndex: 2,
    explanation: "A metalocerâmica exige 1,5–2,0 mm vestibular para acomodar infraestrutura metálica (0,3–0,5 mm) + cerâmica de recobrimento (1,0–1,5 mm). Espaço insuficiente leva a cerâmica sobrecontornada ou infraestrutura comprometida.",
  },
  {
    id: "ppf-c12-02",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Metalocerâmica",
    difficulty: "Intermediário",
    question: "A junção metal-cerâmica (linha de transição) em uma coroa metalocerâmica anterior deve ser localizada:",
    options: [
      "No terço oclusal vestibular, visível durante o sorriso",
      "Na margem cervical, junto ao término do preparo",
      "Em área não visível durante o sorriso — lingual ou dentro do sulco proximal",
      "Na face proximal, no centro vestíbulo-lingual",
    ],
    correctIndex: 2,
    explanation: "A junção metal-cerâmica deve ficar fora da zona de sorriso para não comprometer a estética. Na região anterior, situa-se no terço lingual; o término vestibular é em ombro (para a cerâmica) e o lingual pode ser chanfro (apenas metal).",
  },

  // CAP. 13 — Coroas Totalmente Cerâmicas
  {
    id: "ppf-c13-01",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Cerâmicas Totais",
    difficulty: "Básico",
    question: "Qual a espessura mínima recomendada de dissilicato de lítio (IPS e.max) para coroa monolítica posterior?",
    options: ["0,3–0,5 mm", "1,0–1,5 mm", "2,5 mm", "3,0 mm"],
    correctIndex: 1,
    explanation: "O dissilicato de lítio monolítico posterior exige ≥ 1,0–1,5 mm oclusal. Sua alta resistência à flexão (~400 MPa) permite menor redução que cerâmicas convencionais, mas ainda requer preparo adequado para evitar fratura.",
  },
  {
    id: "ppf-c13-02",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Cerâmicas Totais",
    difficulty: "Intermediário",
    question: "A principal vantagem da zircônia monolítica sobre a estratificada (com cerâmica de recobrimento) é:",
    options: [
      "Melhor translucidez e estética superior em todos os casos",
      "Eliminação do risco de lascamento (chipping) da cerâmica de recobrimento, complicação mais frequente em restaurações estratificadas",
      "Menor custo de fabricação",
      "Melhor adesão ao dente por cimentação convencional",
    ],
    correctIndex: 1,
    explanation: "O chipping (lascamento) da cerâmica de recobrimento é a complicação mecânica mais comum em coroas estratificadas. A zircônia monolítica elimina esse risco ao não ter recobrimento cerâmico. A limitação é a menor translucidez nas versões mais opacas.",
  },
  {
    id: "ppf-c13-03",
    subject: "Prótese Parcial Fixa",
    topic: "Preparos para Cerâmicas Totais",
    difficulty: "Avançado",
    question: "O preparo para coroa de dissilicato de lítio difere do preparo para zircônia monolítica principalmente porque:",
    options: [
      "A zircônia exige maior redução oclusal que o dissilicato",
      "O dissilicato exige ângulos internos rigorosamente arredondados; a zircônia, com resistência muito maior, tolera melhor ângulos mais definidos",
      "O dissilicato não aceita término em chanfro, apenas em ombro reto",
      "A zircônia exige término obrigatoriamente subgengival",
    ],
    correctIndex: 1,
    explanation: "O dissilicato de lítio é mais sensível à concentração de tensões e exige ângulos internos cuidadosamente arredondados. A zircônia (resistência 900–1200 MPa) tolera melhor ângulos mais vivos. Ambas exigem chanfro ou ombro arredondado, mas o dissilicato requer mais cuidado com os detalhes internos.",
  },

  // CAP. 14 — Núcleos e Pinos
  {
    id: "ppf-c14-01",
    subject: "Prótese Parcial Fixa",
    topic: "Núcleos e Retentores Intrarradiculares",
    difficulty: "Básico",
    question: "O 'efeito férula' em dentes tratados endodonticamente refere-se a:",
    options: [
      "O efeito estético produzido pela coroa sobre dente tratado",
      "A faixa circunferencial de dentina sã (≥ 2 mm) acima do término do núcleo, abraçada pela coroa, que distribui forças e protege a raiz de fratura",
      "O uso de pino de fibra de vidro em vez de núcleo metálico fundido",
      "A proteção do selamento apical pelo núcleo de preenchimento",
    ],
    correctIndex: 1,
    explanation: "O efeito férula (≥ 2 mm de dentina circunferencial acima do término do núcleo, abraçada pela coroa) é o fator mais importante contra fratura radicular em dentes tratados endodonticamente. Sem férula, o risco de fratura radicular vertical é muito elevado.",
  },
  {
    id: "ppf-c14-02",
    subject: "Prótese Parcial Fixa",
    topic: "Núcleos e Retentores Intrarradiculares",
    difficulty: "Intermediário",
    question: "A principal vantagem dos pinos de fibra de vidro sobre os metálicos é:",
    options: [
      "Maior resistência à fratura do pino",
      "Módulo de elasticidade semelhante à dentina, redistribuindo forças de forma mais homogênea e reduzindo o risco de fratura radicular catastrófica",
      "Maior retenção no canal radicular",
      "Menor custo de aquisição e instalação",
    ],
    correctIndex: 1,
    explanation: "Pinos de fibra de vidro (~40 GPa) têm módulo de elasticidade próximo ao da dentina (~18 GPa), ao contrário dos metálicos (~200 GPa). Isso homogeneíza a distribuição de tensões e, em caso de falha, favorece fratura do pino (restaurável) em vez de fratura radicular vertical (irrestaurável).",
  },

  // CAP. 15 — Próteses Adesivas
  {
    id: "ppf-c15-01",
    subject: "Prótese Parcial Fixa",
    topic: "Próteses Adesivas",
    difficulty: "Básico",
    question: "A prótese fixa adesiva (Maryland bridge) é indicada principalmente em:",
    options: [
      "Substituição de molares em pacientes com bruxismo severo",
      "Substituição de dentes anteriores com pilares hígidos ou pouco restaurados, especialmente em jovens",
      "Pacientes com doença periodontal avançada generalizada",
      "Substituição de múltiplos dentes simultaneamente em toda a arcada",
    ],
    correctIndex: 1,
    explanation: "A PPF adesiva é ideal para substituir dentes anteriores com pilares hígidos, especialmente em jovens (aguardando maturidade para implante), em pacientes que recusam preparos convencionais ou como provisório de longa duração.",
  },
  {
    id: "ppf-c15-02",
    subject: "Prótese Parcial Fixa",
    topic: "Próteses Adesivas",
    difficulty: "Intermediário",
    question: "Próteses adesivas de zircônia apresentam melhores resultados que as de metal porque:",
    options: [
      "A zircônia permite maior redução dos dentes pilares",
      "Com primer MDP-based, a zircônia apresenta adesão química estável e menores taxas de descolamento que o metal",
      "A zircônia é mais barata e mais fácil de processar",
      "O metal das próteses de Maryland é incompatível com resinas contemporâneas",
    ],
    correctIndex: 1,
    explanation: "Próteses adesivas de zircônia tratadas com primer MDP (10-metacriloxidecil dihidrogenofosfato) mostram taxas de sucesso >90% em 5 anos, superando as metálicas. O MDP cria ligação química estável com a zircônia, sem necessidade de condicionamento com ácido fluorídrico.",
  },

  // CAP. 16 — Facetas Laminadas
  {
    id: "ppf-c16-01",
    subject: "Prótese Parcial Fixa",
    topic: "Facetas Laminadas",
    difficulty: "Básico",
    question: "O preparo tipo 'janela' (window) para faceta laminada se caracteriza por:",
    options: [
      "Término na face palatina, incluindo o bordo incisal",
      "Preservação do bordo incisal original — o término fica na face vestibular antes do ângulo incisal",
      "Redução intensa da face palatina para projeção vestibular",
      "Extensão até toda a largura da face palatina",
    ],
    correctIndex: 1,
    explanation: "O preparo tipo janela preserva o bordo incisal (sem reduzi-lo), com término circunferencial na face vestibular. É o mais conservador, indicado quando o bordo incisal original é esteticamente aceitável e não há necessidade de aumento de comprimento.",
  },
  {
    id: "ppf-c16-02",
    subject: "Prótese Parcial Fixa",
    topic: "Facetas Laminadas",
    difficulty: "Intermediário",
    question: "A espessura mínima de cerâmica feldspática para facetas laminadas é de:",
    options: ["0,1–0,2 mm", "0,3–0,5 mm", "1,5–2,0 mm", "2,5–3,0 mm"],
    correctIndex: 1,
    explanation: "Facetas feldspáticas requerem mínimo 0,3–0,5 mm para resistência adequada e estética satisfatória. O preparo correspondente remove esmalte de forma mínima. O dissilicato de lítio pode ser usado em espessuras de 0,3 mm em facetas ultrafinas.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO IV — MOLDAGEM E PROVISÓRIOS
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 17 — Afastamento Gengival
  {
    id: "ppf-c17-01",
    subject: "Prótese Parcial Fixa",
    topic: "Moldagem e Afastamento Gengival",
    difficulty: "Básico",
    question: "O afastamento gengival antes da moldagem em PPF tem como objetivo principal:",
    options: [
      "Anestesiar o sulco gengival para maior conforto do paciente",
      "Expor o término cervical do preparo para que o material de moldagem capture a margem com precisão",
      "Eliminar a inflamação gengival antes da impressão",
      "Avaliar a profundidade de sondagem em tempo real",
    ],
    correctIndex: 1,
    explanation: "O afastamento expõe a margem do preparo, cria espaço para o material de moldagem fluir além do término e registrá-lo com precisão. Sem afastamento, a margem pode ficar encoberta pelo tecido gengival, comprometendo a adaptação da peça.",
  },
  {
    id: "ppf-c17-02",
    subject: "Prótese Parcial Fixa",
    topic: "Moldagem e Afastamento Gengival",
    difficulty: "Intermediário",
    question: "Qual solução hemostática é contraindicada em pacientes com hipertensão grave ou doença cardiovascular não controlada?",
    options: ["Cloreto de alumínio a 25%", "Sulfato de zinco", "Epinefrina (adrenalina) em cordas impregnadas", "Sulfato férrico a 15%"],
    correctIndex: 2,
    explanation: "A epinefrina das cordas retratoras é absorvida sistemicamente pelo sulco gengival e pode elevar a pressão arterial e a frequência cardíaca. É contraindicada em hipertensão grave, arritmias ou cardiopatia não controlada. Opta-se por cloreto de alumínio ou sulfato férrico nesses casos.",
  },

  // CAP. 18 — Materiais de Moldagem
  {
    id: "ppf-c18-01",
    subject: "Prótese Parcial Fixa",
    topic: "Materiais de Moldagem",
    difficulty: "Básico",
    question: "O silicone de adição (polivinilsiloxano — PVS) é o material de moldagem de maior precisão porque:",
    options: [
      "É o material mais barato disponível",
      "Apresenta mínima contração de polimerização, excelente estabilidade dimensional e permite múltiplos vazamentos",
      "É o único material compatível com moldeira estoque",
      "Não requer tempo de espera após a presa",
    ],
    correctIndex: 1,
    explanation: "O PVS (polimerização por adição) não libera subprodutos, resultando em contração < 0,15%. Sua estabilidade dimensional superior permite vazar o modelo horas ou dias depois e revazá-lo múltiplas vezes com precisão mantida.",
  },
  {
    id: "ppf-c18-02",
    subject: "Prótese Parcial Fixa",
    topic: "Materiais de Moldagem",
    difficulty: "Intermediário",
    question: "O escaneamento intraoral (moldagem digital) apresenta como principal limitação em relação ao silicone de adição:",
    options: [
      "Maior custo operacional em todos os cenários",
      "Dificuldade de capturar margens profundamente subgengivais com a mesma precisão do silicone",
      "Impossibilidade de integração com sistemas CAD/CAM",
      "Maior tempo clínico para realização",
    ],
    correctIndex: 1,
    explanation: "O escaneamento intraoral tem dificuldade em capturar com precisão margens muito subgengivais (onde o sulco limita a visibilidade ótica). Para margens supragengivais ou levemente subgengivais, a precisão é comparável ao silicone. A principal vantagem é o conforto do paciente e a integração digital.",
  },

  // CAP. 19 — Técnicas de Moldagem
  {
    id: "ppf-c19-01",
    subject: "Prótese Parcial Fixa",
    topic: "Técnicas de Moldagem",
    difficulty: "Intermediário",
    question: "Na técnica de moldagem em dois tempos (two-step) com silicone, a segunda etapa com material leve serve para:",
    options: [
      "Registrar apenas os contatos oclusais",
      "Capturar os detalhes finos do preparo e término cervical, aproveitando o espaço criado pela primeira moldagem com silicone pesado",
      "Fixar a moldeira ao arco dental",
      "Criar espaço para o cimento na restauração definitiva",
    ],
    correctIndex: 1,
    explanation: "No two-step, o silicone pesado faz a moldagem inicial. Após presa, remove-se material do sulco e áreas críticas. O silicone leve, de alta fluidez, é injetado e a moldeira reposicionada — capturando todos os detalhes finos do preparo que o pesado não atingiu.",
  },

  // CAP. 20 — Restaurações Provisórias
  {
    id: "ppf-c20-01",
    subject: "Prótese Parcial Fixa",
    topic: "Restaurações Provisórias",
    difficulty: "Básico",
    question: "Qual função dos provisórios de PPF é considerada mais importante do ponto de vista biológico?",
    options: [
      "Função estética — manter a aparência durante o tratamento",
      "Proteção pulpar e periodontal — isolar o preparo e manter saúde gengival",
      "Manutenção do espaço intermaxilar para o laboratório",
      "Estabilização da ATM durante a confecção do definitivo",
    ],
    correctIndex: 1,
    explanation: "A proteção biológica é primária: o provisório protege a polpa de variações térmicas, químicas e bacterianas, e mantém a saúde gengival com contornos e acabamento adequados. A função e estética também são importantes, mas a proteção biológica é a base.",
  },
  {
    id: "ppf-c20-02",
    subject: "Prótese Parcial Fixa",
    topic: "Restaurações Provisórias",
    difficulty: "Intermediário",
    question: "A confecção indireta de provisórios (laboratório) é preferida à direta quando:",
    options: [
      "O paciente tem apenas um dente a ser restaurado",
      "Os casos envolvem reabilitações extensas, mudança de DVO ou casos estéticos complexos que exigem máxima qualidade",
      "O material de escolha é a resina bis-acrílica",
      "Há necessidade de provisório imediato na mesma sessão",
    ],
    correctIndex: 1,
    explanation: "A técnica indireta oferece melhor controle de oclusão, contornos e estética, pois é confeccionada sobre modelos articulados no laboratório. É preferida em reabilitações extensas e mudanças de DVO. A técnica direta é mais rápida e adequada para casos unitários simples.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO V — MATERIAIS E LABORATÓRIO
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 21 — Ligas Metálicas
  {
    id: "ppf-c21-01",
    subject: "Prótese Parcial Fixa",
    topic: "Ligas Metálicas e Cerâmicas",
    difficulty: "Básico",
    question: "As ligas metálicas são classificadas como 'alto nobre' quando:",
    options: [
      "Contêm mais de 60% de cromo e cobalto",
      "Apresentam ≥ 60% de metais preciosos, incluindo ≥ 40% de ouro em peso",
      "São fabricadas exclusivamente por fresagem CAD/CAM",
      "Apresentam alto módulo de elasticidade (> 200 GPa)",
    ],
    correctIndex: 1,
    explanation: "A ADA classifica: Alto nobre (≥ 60% metais preciosos + ≥ 40% ouro); Nobre (≥ 25% metais preciosos); Não-nobre (< 25%). A nobreza correlaciona-se com biocompatibilidade e resistência à corrosão.",
  },

  // CAP. 22 — Cerâmicas
  {
    id: "ppf-c22-01",
    subject: "Prótese Parcial Fixa",
    topic: "Ligas Metálicas e Cerâmicas",
    difficulty: "Básico",
    question: "O dissilicato de lítio (IPS e.max) é indicado como material de excelência para coroas unitárias porque:",
    options: [
      "Tem resistência à flexão similar ao esmalte (~60 MPa)",
      "Combina alta resistência (~400 MPa), excelente estética/translucidez e cimentação adesiva com silano após condicionamento com HF",
      "É o mais barato entre as cerâmicas para CAD/CAM",
      "É o único material indicado para PPF de múltiplos elementos",
    ],
    correctIndex: 1,
    explanation: "O dissilicato de lítio (~400 MPa) equilibra resistência mecânica e estética. É indicado para unitárias anteriores e posteriores e pontes até pré-molares. A cimentação adesiva (HF + silano + cimento resinoso) cria vínculo de alta resistência.",
  },
  {
    id: "ppf-c22-02",
    subject: "Prótese Parcial Fixa",
    topic: "Ligas Metálicas e Cerâmicas",
    difficulty: "Intermediário",
    question: "A zircônia tetragonal (Y-TZP) tem como principal propriedade mecânica:",
    options: [
      "Alta translucidez comparável ao esmalte natural",
      "Altíssima resistência à flexão (900–1200 MPa), sendo a cerâmica mais resistente disponível clinicamente",
      "Condicionamento com ácido fluorídrico para adesão convencional",
      "Módulo de elasticidade inferior ao do dissilicato de lítio",
    ],
    correctIndex: 1,
    explanation: "A Y-TZP tem resistência à flexão 900–1200 MPa, a mais alta entre as cerâmicas odontológicas, permitindo uso em PPF de múltiplos elementos e regiões de alta carga. As novas zircônias de alta translucidez (5Y-TZP) oferecem 500–700 MPa com melhor estética.",
  },

  // CAP. 23 — CAD/CAM
  {
    id: "ppf-c23-01",
    subject: "Prótese Parcial Fixa",
    topic: "CAD/CAM e Fluxo Digital",
    difficulty: "Básico",
    question: "No contexto da prótese dentária, CAD/CAM refere-se a:",
    options: [
      "Cálculo Automático de Dentes / Cerâmica Artesanal Moldada",
      "Computer-Aided Design / Computer-Aided Manufacturing — design e fabricação (fresagem/impressão 3D) assistidos por computador",
      "Cerâmica de Alta Dureza / Cerâmica de Alta Moldabilidade",
      "Cimentação Adesiva Direta / Cimentação Adesiva com Mediação",
    ],
    correctIndex: 1,
    explanation: "CAD/CAM integra design digital (software 3D) e fabricação automatizada (fresagem de blocos ou impressão 3D), permitindo maior precisão, reprodutibilidade e integração com o escaneamento intraoral.",
  },
  {
    id: "ppf-c23-02",
    subject: "Prótese Parcial Fixa",
    topic: "CAD/CAM e Fluxo Digital",
    difficulty: "Intermediário",
    question: "No fluxo digital chair-side (CAD/CAM na clínica), o dentista pode:",
    options: [
      "Apenas solicitar o escaneamento; a fresagem é sempre realizada no laboratório",
      "Escanear o preparo, desenhar e fresar a restauração na clínica em uma única sessão",
      "Usar apenas blocos de resina composta para fresagem",
      "Fresar apenas metalocerâmicas; cerâmicas puras requerem forno de laboratório",
    ],
    correctIndex: 1,
    explanation: "Sistemas chair-side (CEREC, Planmeca) permitem escanear, projetar e fresar a restauração em 1–2 horas na própria clínica, usando blocos cerâmicos ou de resina. O custo do equipamento e a curva de aprendizado são as principais limitações.",
  },

  // CAP. 24 — Comunicação com Laboratório
  {
    id: "ppf-c24-01",
    subject: "Prótese Parcial Fixa",
    topic: "Comunicação com Laboratório",
    difficulty: "Básico",
    question: "A condição de iluminação mais adequada para seleção de cor de uma cerâmica é:",
    options: [
      "Luz halógena do refletor odontológico diretamente sobre os dentes",
      "Luz natural difusa (dia sem sol direto) ou luz clínica padronizada D65, no início da consulta com olhos descansados",
      "Luz fluorescente do teto da sala clínica",
      "Qualquer iluminação, desde que a escala Vita seja usada",
    ],
    correctIndex: 1,
    explanation: "A seleção de cor deve ser feita sob luz do dia difusa (D65) no início da consulta, com os dentes hidratados, antes do isolamento. Luz artificial incandescente distorce a percepção cromática, podendo levar a escolhas incorretas.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO VI — CIMENTAÇÃO E INSTALAÇÃO
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 25 — Prova da Peça
  {
    id: "ppf-c25-01",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Básico",
    question: "Durante a prova da peça protética, qual é o primeiro parâmetro a ser avaliado?",
    options: [
      "Cor da cerâmica em relação aos dentes adjacentes",
      "Adaptação marginal — verificar a ausência de gap ou pressão excessiva nas margens",
      "Oclusão em MIH e movimentos excursivos",
      "Contatos proximais e ponto de contato",
    ],
    correctIndex: 1,
    explanation: "A adaptação marginal é avaliada primeiro, pois é a base de tudo: margem desadaptada compromete hermeticidade, retenção e saúde periodontal. Utiliza-se sonda exploradora e pressão digital para detectar gaps ou margens abertas antes de ajustar oclusão e contatos.",
  },

  // CAP. 26 — Cimentos
  {
    id: "ppf-c26-01",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Básico",
    question: "O cimento de fosfato de zinco ainda é utilizado em prótese fixa porque:",
    options: [
      "É biocompatível com a polpa sem necessidade de proteção adicional",
      "Apresenta excelente resistência compressiva, baixo custo e longa comprovação clínica para próteses com boa retenção mecânica",
      "É o único compatível com infraestruturas de zircônia",
      "Não requer controle de umidade durante a cimentação",
    ],
    correctIndex: 1,
    explanation: "O fosfato de zinco tem limitações (pH inicial baixo, irritante pulpar, sem adesão química), mas mantém indicação em coroas com boa retenção mecânica preparada. Seu baixo custo, longa história clínica e facilidade de remoção de excessos são vantagens práticas.",
  },
  {
    id: "ppf-c26-02",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Intermediário",
    question: "Os cimentos resinosos são obrigatórios na cimentação de coroas de cerâmica pura (feldspática ou dissilicato de lítio) porque:",
    options: [
      "São os únicos aprovados pela ANVISA para cerâmicas",
      "A adesão ao dente distribui as cargas e reforça a cerâmica, aumentando significativamente a resistência à fratura",
      "Endurecem mais rapidamente que os convencionais",
      "São compatíveis com qualquer preparo, dispensando tratamento de superfície",
    ],
    correctIndex: 1,
    explanation: "Cerâmicas feldspáticas e dissilicato têm resistência à flexão moderada. A cimentação adesiva (HF + silano + cimento resinoso) cria complexo restauração-cimento-dente que distribui tensões, aumenta a resistência à fratura e melhora a retenção.",
  },
  {
    id: "ppf-c26-03",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Avançado",
    question: "Os cimentos resinosos autoadesivos (ex.: RelyX U200) apresentam como limitação em relação aos com sistema adesivo separado:",
    options: [
      "Menor resistência compressiva inicial",
      "Adesão inferior ao esmalte e dentina, pois o pH autolimitante não promove desmineralização e infiltração tão profunda quanto o sistema adesivo convencional",
      "Incompatibilidade com cerâmicas feldspáticas",
      "Necessidade obrigatória de isolamento absoluto em todos os casos",
    ],
    correctIndex: 1,
    explanation: "Cimentos autoadesivos desmineralizam e infiltram a dentina em um único passo, mas o pH aumenta rapidamente (autolimitante), resultando em menor profundidade de penetração que sistemas convencionais separados. A adesão dentinária resultante é inferior; são mais indicados para casos com boa retenção mecânica.",
  },

  // CAP. 27 — Protocolos de Cimentação
  {
    id: "ppf-c27-01",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Intermediário",
    question: "O condicionamento com ácido fluorídrico (HF) da superfície interna das cerâmicas feldspáticas e do dissilicato de lítio cria:",
    options: [
      "Camada protetora contra corrosão pelo cimento",
      "Microporosidades pela dissolução seletiva da fase vítrea, aumentando a área de superfície para ancoragem micromecânica do silano e cimento",
      "Reação química direta com os monômeros resinosos",
      "Apenas limpeza da superfície, sem alteração topográfica",
    ],
    correctIndex: 1,
    explanation: "O HF (4–10%) dissolve seletivamente a fase vítrea da cerâmica, criando microporosidades que aumentam a área de superfície para ancoragem micromecânica do silano e do cimento resinoso. É o primeiro passo obrigatório no protocolo de cimentação adesiva de cerâmicas silicosas.",
  },
  {
    id: "ppf-c27-02",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Avançado",
    question: "Por que a zircônia NÃO deve ser condicionada com ácido fluorídrico antes da cimentação?",
    options: [
      "O HF não é suficientemente forte para atacar a zircônia",
      "A zircônia é policristalina sem fase vítrea — o HF é ineficaz. O protocolo correto usa jateamento com Al₂O₃ + primer MDP-based",
      "O HF dissolve completamente a zircônia em poucos segundos",
      "O HF é incompatível apenas com zircônia colorida",
    ],
    correctIndex: 1,
    explanation: "A zircônia policristalina não tem fase vítrea — o HF não cria microporosidades. O protocolo correto é: jateamento com Al₂O₃ (50 μm) para limpeza e rugosidade + primer MDP-based (ex.: Monobond Plus, Z-Prime Plus) para ligação química estável, seguido de cimento resinoso.",
  },

  // CAP. 28 — Ajustes Pós-Cimentação
  {
    id: "ppf-c28-01",
    subject: "Prótese Parcial Fixa",
    topic: "Cimentação e Instalação",
    difficulty: "Intermediário",
    question: "Após ajuste oclusal de cerâmica com ponta diamantada, o procedimento obrigatório é:",
    options: [
      "Reaplicação de silano para restaurar a adesão",
      "Polimento com borrachas específicas para cerâmica ou requeima no forno (glazeamento), pois a superfície áspera acelera o desgaste do antagonista",
      "Aplicação de resina fotopolimerizável sobre a área ajustada",
      "Nenhum procedimento — cerâmica não requer polimento pós-ajuste",
    ],
    correctIndex: 1,
    explanation: "A superfície cerâmica ajustada fica rugosa, aumentando o desgaste do antagonista e a aderência bacteriana. Polimento com borrachas abrasivas (granulação decrescente) ou glazeamento no forno restaura a lisura. O glazeamento é mais eficaz mas exige envio ao laboratório.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO VII — COMPLICAÇÕES E MANUTENÇÃO
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 29 — Complicações Biológicas
  {
    id: "ppf-c29-01",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Biológicas",
    difficulty: "Básico",
    question: "A sensibilidade dentinária intensa e progressiva após o preparo para PPF pode indicar:",
    options: [
      "Fratura radicular do pilar",
      "Pulpite irreversível por trauma térmico-mecânico excessivo, podendo requerer endodontia antes da instalação do definitivo",
      "Necessidade imediata de remoção do provisório",
      "Falha apenas na cimentação do provisório",
    ],
    correctIndex: 1,
    explanation: "Sensibilidade leve é esperada pós-preparo. Porém, dor espontânea, intensa e progressiva indica pulpite irreversível — o tratamento endodôntico é necessário antes da instalação da coroa definitiva. O provisório bem-adaptado e dessensibilizantes previnem na maioria dos casos.",
  },
  {
    id: "ppf-c29-02",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Biológicas",
    difficulty: "Intermediário",
    question: "A cárie secundária em PPF ocorre predominantemente em qual região?",
    options: [
      "Face oclusal, sob o metal",
      "Margem cervical — especialmente quando há desadaptação da margem ou higiene inadequada",
      "Face lingual, por acúmulo de tártaro",
      "Face vestibular, por ação de fluidos ácidos",
    ],
    correctIndex: 1,
    explanation: "Cáries secundárias ocorrem predominantemente na margem cervical, onde a adaptação é mais crítica e o biofilme se acumula. Margens desadaptadas, término supragengival em pacientes de alto risco e higiene inadequada são os principais fatores. Radiografias periódicas são essenciais para detecção precoce.",
  },

  // CAP. 30 — Complicações Mecânicas
  {
    id: "ppf-c30-01",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Mecânicas",
    difficulty: "Básico",
    question: "O 'chipping' (lascamento) de cerâmica em coroas metalocerâmicas é causado principalmente por:",
    options: [
      "Excesso de cerâmica em áreas de baixa carga oclusal",
      "Diferença de coeficiente de expansão térmica metal-cerâmica, defeitos na cocção, contatos prematuros ou espessura insuficiente de cerâmica",
      "Uso de cimento resinoso em vez de fosfato de zinco",
      "Excesso de retenção mecânica no preparo",
    ],
    correctIndex: 1,
    explanation: "O chipping é multifatorial: incompatibilidade de expansão térmica (tensões residuais), defeitos de queima (porosidades, resfriamento rápido), contatos oclusais prematuros ou laterais, espessura inadequada de cerâmica e suporte insuficiente da infraestrutura. Bruxismo é agravante importante.",
  },
  {
    id: "ppf-c30-02",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Mecânicas",
    difficulty: "Intermediário",
    question: "A descimentação recorrente de uma coroa indica primariamente:",
    options: [
      "Cimento de má qualidade ou armazenamento inadequado",
      "Preparo inadequado (curto, muito expulsivo ou liso) ou falha no protocolo de cimentação (contaminação, técnica incorreta)",
      "Biocompatibilidade inadequada do material da coroa",
      "Excesso de forças verticais durante a mastigação normal",
    ],
    correctIndex: 1,
    explanation: "A descimentação recorrente quase sempre resulta de preparo inadequado (insuficientemente retentivo, muito expulsivo, liso) ou falha no protocolo (contaminação salivar, manipulação incorreta). A solução é reanalisar e reconfeccionar o preparo, não apenas recrutar com novo cimento.",
  },

  // CAP. 31 — Complicações Estéticas
  {
    id: "ppf-c31-01",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Estéticas",
    difficulty: "Básico",
    question: "A linha cervical escura (sombra metálica) em coroas metalocerâmicas é causada principalmente por:",
    options: [
      "Uso de liga de ouro de alta nobreza",
      "Recessão gengival pós-instalação expondo a margem metálica que estava subgengival",
      "Pigmentação bacteriana na superfície da cerâmica",
      "Oxidação da cerâmica pela saliva ao longo do tempo",
    ],
    correctIndex: 1,
    explanation: "A exposição da margem metálica ocorre principalmente por recessão gengival progressiva (por doença periodontal ou invasão do espaço biológico). Pode ser prevenida usando coroas totalmente cerâmicas ou metalocerâmicas com término totalmente em cerâmica.",
  },
  {
    id: "ppf-c31-02",
    subject: "Prótese Parcial Fixa",
    topic: "Complicações Estéticas",
    difficulty: "Intermediário",
    question: "Os 'triângulos pretos' (black triangles) após instalação de PPF anterior são causados por:",
    options: [
      "Pigmentação da cerâmica por bebidas escuras",
      "Ausência ou retração da papila interdental, decorrente de perda óssea interproximal ou ponto de contato muito alto/apical",
      "Excesso de material de cimentação no espaço interdental",
      "Incompatibilidade de cor entre a cerâmica e os dentes adjacentes",
    ],
    correctIndex: 1,
    explanation: "Black triangles resultam da ausência de papila interproximal, causada por perda óssea interproximal, ponto de contato muito apical ou perfil de emergência inadequado. O planejamento antecipado (nível ósseo, posição do ponto de contato) é fundamental para prevenir essa complicação estética difícil de corrigir.",
  },

  // CAP. 32 — Manutenção
  {
    id: "ppf-c32-01",
    subject: "Prótese Parcial Fixa",
    topic: "Manutenção e Longevidade",
    difficulty: "Básico",
    question: "Qual instrumento é indispensável para higiene da área de pôntico de uma PPF?",
    options: [
      "Escova dental convencional",
      "Superfloss ou passa-fio (threader) com fio dental, para higienizar sob o pôntico e nos conectores",
      "Irrigador oral como único recurso",
      "Escovas interdentais exclusivamente",
    ],
    correctIndex: 1,
    explanation: "O fio dental convencional não consegue passar sob o pôntico. O superfloss (com segmento esponjoso) ou passa-fio permitem inserir o fio sob o pôntico, higienizando a face gengival e os conectores. Escovas interdentais complementam, mas o superfloss/passa-fio é indispensável.",
  },
  {
    id: "ppf-c32-02",
    subject: "Prótese Parcial Fixa",
    topic: "Manutenção e Longevidade",
    difficulty: "Intermediário",
    question: "Qual a taxa de sobrevivência aproximada de PPF convencionais em 10 anos, conforme as principais revisões sistemáticas?",
    options: ["50–60%", "70–75%", "89–93%", "99–100%"],
    correctIndex: 2,
    explanation: "Revisões sistemáticas (Pjetursson et al.) mostram sobrevivência de ~89–93% em 10 anos para PPF convencionais. As causas de falha mais frequentes são descimentação, fratura de cerâmica (chipping), cárie secundária e comprometimento endodôntico dos pilares.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCO VIII — TÓPICOS AVANÇADOS
  // ══════════════════════════════════════════════════════════════════════════

  // CAP. 33 — Cantiléver
  {
    id: "ppf-c33-01",
    subject: "Prótese Parcial Fixa",
    topic: "PPF em Cantiléver",
    difficulty: "Básico",
    question: "A PPF em cantiléver é mais frequentemente indicada para substituir qual elemento?",
    options: [
      "Primeiro molar superior",
      "Segundo pré-molar inferior (com primeiro molar como pilar) ou incisivo lateral superior",
      "Incisivo central superior",
      "Segundo molar inferior",
    ],
    correctIndex: 1,
    explanation: "O cantiléver com melhores resultados documentados substitui o segundo pré-molar inferior ou o incisivo lateral superior, com pilar no dente adjacente. Evita-se em região de molares pela magnitude das forças mastigatórias e pela maior extensão do braço de alavanca.",
  },

  // CAP. 34 — Próteses Adesivas (avançado)
  {
    id: "ppf-c34-01",
    subject: "Prótese Parcial Fixa",
    topic: "Próteses Adesivas",
    difficulty: "Avançado",
    question: "As próteses adesivas de Maryland metálicas apresentam maior taxa de descimentação que as de zircônia porque:",
    options: [
      "O metal tem maior coeficiente de expansão térmica",
      "A adesão ao metal é predominantemente micromecânica, enquanto a zircônia com primer MDP permite ligação química estável e mais duradoura",
      "A zircônia é mais leve e exerce menor torque na adesão",
      "O metal é incompatível com a dentina do pilar",
    ],
    correctIndex: 1,
    explanation: "Na prótese de Maryland metálica, a adesão é micromecânica (jateamento, tratamento eletrolítico). Com zircônia + primer MDP-based, ocorre ligação química fosfato-zircônia altamente estável. Estudos mostram sobrevivência da zircônia adesiva > 90% em 5 anos, superando as metálicas.",
  },

  // CAP. 35 — Reabilitação Estética
  {
    id: "ppf-c35-01",
    subject: "Prótese Parcial Fixa",
    topic: "Reabilitação Estética Complexa",
    difficulty: "Intermediário",
    question: "O Digital Smile Design (DSD) é uma ferramenta que permite:",
    options: [
      "Fresar coroas de cerâmica diretamente na clínica",
      "Planejar digitalmente a estética do sorriso usando fotografias e vídeos do paciente, antes de qualquer intervenção, e comunicar o resultado ao laboratório e ao paciente",
      "Calcular automaticamente a cor ideal da cerâmica por espectrofotometria",
      "Substituir o enceramento diagnóstico em todos os casos",
    ],
    correctIndex: 1,
    explanation: "O DSD sobrepõe linhas de referência às fotografias do paciente, visualizando o resultado antes do tratamento. Facilita a comunicação paciente-dentista-técnico, auxilia no enceramento diagnóstico e serve como base para o mock-up clínico.",
  },

  // CAP. 36 — PPF em Pacientes Periodontais
  {
    id: "ppf-c36-01",
    subject: "Prótese Parcial Fixa",
    topic: "PPF e Periodontia",
    difficulty: "Intermediário",
    question: "A ferulização (splinting) de dentes com mobilidade aumentada por meio de PPF tem como objetivo:",
    options: [
      "Eliminar definitivamente a mobilidade de todos os dentes comprometidos",
      "Distribuir as forças mastigatórias entre múltiplos dentes periodontalmente comprometidos, reduzindo a sobrecarga individual",
      "Substituir o tratamento periodontal ativo",
      "Aumentar a estética pela eliminação de diastemas",
    ],
    correctIndex: 1,
    explanation: "A ferulização conecta dentes de mobilidade aumentada em uma unidade funcional, distribuindo cargas. Não elimina a doença nem substitui o tratamento periodontal — é complementar. Só é indicada após controle da inflamação e em dentes com prognóstico controlável.",
  },

  // CAP. 37 — Interface com Implantodontia
  {
    id: "ppf-c37-01",
    subject: "Prótese Parcial Fixa",
    topic: "PPF vs Implantes",
    difficulty: "Intermediário",
    question: "A principal diferença biomecânica entre dente natural e implante que impacta o planejamento protético é:",
    options: [
      "O implante tem maior resistência à força vertical que o dente natural",
      "O dente tem ligamento periodontal (mobilidade fisiológica e propriocepção); o implante é anquilosado, rígido e com propriocepção reduzida",
      "O implante suporta melhor forças laterais que o dente natural",
      "Não há diferença biomecânica relevante para o planejamento",
    ],
    correctIndex: 1,
    explanation: "O ligamento periodontal do dente amortece forças e fornece propriocepção fina. O implante osseointegrado é anquilosado — sem amortecimento, forças são transmitidas diretamente ao osso. Isso influencia o design oclusal e contraindica conexão rígida dente-implante em muitos casos.",
  },
  {
    id: "ppf-c37-02",
    subject: "Prótese Parcial Fixa",
    topic: "PPF vs Implantes",
    difficulty: "Avançado",
    question: "A conexão rígida entre dente natural e implante em prótese mista é controversa porque:",
    options: [
      "O implante e o dente têm metais de diferentes cores",
      "O dente tem deslocamento axial fisiológico (~0,1–0,3 mm); o implante não. Em conexão rígida, isso pode gerar forças cíclicas intrusivas no dente e extrusivas no implante",
      "O cimento não adere igualmente ao dente e ao implante",
      "A zircônia não pode ser usada em próteses mistas",
    ],
    correctIndex: 1,
    explanation: "O deslocamento axial do dente (ligamento periodontal) versus a rigidez do implante criam comportamento diferencial sob carga. Em conexão rígida, isso gera forças cíclicas que podem causar intrusão do dente e sobrecarga no implante. Por isso muitos autores preferem conexão não-rígida ou evitam a associação.",
  },

  // CAP. 38 — Evidência Científica
  {
    id: "ppf-c38-01",
    subject: "Prótese Parcial Fixa",
    topic: "Evidência Científica",
    difficulty: "Intermediário",
    question: "Comparando PPF convencional e implante para substituição de dente unitário, a evidência atual demonstra:",
    options: [
      "A PPF tem taxa de sobrevivência superior ao implante em todos os períodos",
      "Implantes unitários têm sobrevivência > 95% em 10 anos (similar ou superior à PPF), sem necessidade de desgaste dos dentes adjacentes",
      "Não há diferença estatisticamente significativa entre os tratamentos",
      "O implante é contraindicado para substituição de dentes anteriores",
    ],
    correctIndex: 1,
    explanation: "Revisões sistemáticas (Jung et al., Pjetursson et al.) mostram sobrevivência de implantes unitários > 95% em 10 anos, comparável ou superior às PPF (~89–93%). A ausência de desgaste dos dentes adjacentes é vantagem crucial do implante, tornando-o a primeira escolha quando bem indicado.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DENTÍSTICA
  // ══════════════════════════════════════════════════════════════════════════

  // ── BLOCO I — FUNDAMENTOS ─────────────────────────────────────────────────

  {
    id: "den-01",
    subject: "Dentística",
    topic: "Introdução à Dentística",
    difficulty: "Básico",
    question: "A Dentística Restauradora tem como objetivo principal:",
    options: [
      "Substituir estrutura dental perdida por causas diversas, restabelecendo forma, função e estética",
      "Realizar extrações quando a estrutura dental está muito comprometida",
      "Focar exclusivamente na estética dental, sem considerar aspectos funcionais",
      "Tratar apenas lesões cariosas com materiais metálicos",
    ],
    correctIndex: 0,
    explanation: "A Dentística Restauradora abrange a prevenção, o diagnóstico e o tratamento de alterações dos dentes, restabelecendo forma, função, estética e saúde dos tecidos dentais. Vai além da simples remoção de cárie, englobando todo o espectro de restaurações diretas e indiretas.",
  },
  {
    id: "den-02",
    subject: "Dentística",
    topic: "Introdução à Dentística",
    difficulty: "Básico",
    question: "A filosofia de tratamento 'minimamente invasiva' em Dentística preconiza:",
    options: [
      "Remoção máxima de tecido cariado para garantir ausência de bactérias",
      "Preservação máxima de estrutura dental sadia, intervindo apenas quando necessário e da forma menos destrutiva possível",
      "Uso exclusivo de amálgama por ser o material com maior durabilidade",
      "Adiamento indefinido do tratamento restaurador para aguardar evolução da lesão",
    ],
    correctIndex: 1,
    explanation: "A filosofia minimamente invasiva (MI) baseia-se em quatro pilares: determinar o risco individual de cárie, remineralização de lesões não cavitadas, remoção seletiva de cárie com mínima de estrutura sadia removida, e reparo de restaurações ao invés de substituição completa. Prioriza a preservação máxima de tecido dental sadio.",
  },
  {
    id: "den-03",
    subject: "Dentística",
    topic: "Introdução à Dentística",
    difficulty: "Intermediário",
    question: "Qual é a diferença fundamental entre Dentística Operatória e Dentística Restauradora?",
    options: [
      "A Dentística Operatória trata somente dentes anteriores; a Restauradora trata somente posteriores",
      "A Dentística Operatória refere-se às técnicas de preparo cavitário e manipulação de materiais; a Restauradora é um conceito mais amplo que inclui prevenção, diagnóstico e reabilitação",
      "Não há diferença: os dois termos são sinônimos usados por diferentes países",
      "A Dentística Operatória usa apenas amálgama; a Restauradora usa apenas resina composta",
    ],
    correctIndex: 1,
    explanation: "Historicamente, 'Dentística Operatória' focava no conjunto de técnicas operatórias (preparo e restauração). O termo 'Dentística Restauradora' surgiu como conceito mais abrangente, incorporando diagnóstico, prevenção, controle etiológico e reabilitação. Hoje muitos autores usam ambos os termos como equivalentes, mas o segundo é considerado mais moderno.",
  },
  {
    id: "den-04",
    subject: "Dentística",
    topic: "Introdução à Dentística",
    difficulty: "Intermediário",
    question: "A odontologia baseada em evidências (OBE) aplicada à Dentística significa:",
    options: [
      "Utilizar apenas os materiais mais modernos disponíveis no mercado, independentemente de custo",
      "Integrar a melhor evidência científica disponível com a expertise clínica e os valores e preferências do paciente na tomada de decisão",
      "Seguir protocolo único padronizado para todos os pacientes, sem considerar variações individuais",
      "Basear o tratamento exclusivamente em ensaios clínicos randomizados, ignorando relatos de casos e séries clínicas",
    ],
    correctIndex: 1,
    explanation: "A OBE integra três pilares: (1) melhor evidência científica disponível (ensaios clínicos, revisões sistemáticas, meta-análises); (2) expertise e julgamento clínico do profissional; (3) valores, preferências e circunstâncias individuais do paciente. Não se trata de seguir rigidamente protocolos, mas de tomar decisões racionais e informadas.",
  },
  {
    id: "den-05",
    subject: "Dentística",
    topic: "Introdução à Dentística",
    difficulty: "Avançado",
    question: "Os princípios biológicos em Dentística Restauradora determinam que:",
    options: [
      "A forma estética deve sempre ser priorizada sobre a preservação de estrutura dental",
      "O preparo cavitário deve respeitar a anatomia pulpar, a espessura mínima de dentina residual, os tecidos periodontais e a saúde do complexo dentinopulpar, evitando iatrogenias",
      "Todo dente com cárie deve ter sua câmara pulpar exposta profilaticamente para eliminação de bactérias",
      "O princípio biológico se restringe à biocompatibilidade do material, não envolvendo o planejamento do preparo",
    ],
    correctIndex: 1,
    explanation: "Os princípios biológicos em Dentística envolvem: respeito ao complexo dentinopulpar (manter espessura dentinária adequada), respeito ao periodonto (margens supragengivais quando possível, não invadir espaço biológico), remoção seletiva de tecido cariado sem sacrifício desnecessário de tecido sadio, e biocompatibilidade dos materiais.",
  },
  {
    id: "den-06",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Básico",
    question: "O esmalte dental é composto predominantemente por:",
    options: [
      "Colágeno tipo I e hidroxiapatita (70% mineral)",
      "Hidroxiapatita carbonatada (~96% de mineral em peso) e pequenas quantidades de proteína e água",
      "Fluorapatita pura (~100% mineral)",
      "Proteínas amelogeninas em igual proporção ao mineral",
    ],
    correctIndex: 1,
    explanation: "O esmalte é o tecido mais mineralizado do organismo, composto por ~96% de mineral (predominantemente hidroxiapatita carbonatada) em peso, ~1% de proteínas e ~3% de água. As proteínas amelogeninas são importantes durante a formação, mas são quase totalmente removidas durante a maturação do esmalte.",
  },
  {
    id: "den-07",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Básico",
    question: "As estrias de Retzius no esmalte dental representam:",
    options: [
      "Linhas de fratura do esmalte causadas por trauma oclusal",
      "Marcas de crescimento periódico do esmalte, equivalentes aos anéis de crescimento das árvores",
      "Regiões de maior concentração de fluoreto no esmalte",
      "Áreas de hipomineralização associadas à fluorose",
    ],
    correctIndex: 1,
    explanation: "As estrias de Retzius são linhas de crescimento incremental do esmalte que se formam durante a amelogênese, representando pausas periódicas na deposição. São equivalentes aos anéis de crescimento das árvores. Quando emergem na superfície do esmalte, formam as periquimácias — sulcos transversais visíveis clinicamente em dentes jovens.",
  },
  {
    id: "den-08",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Intermediário",
    question: "O smear layer (barro dentinário) é:",
    options: [
      "Uma camada superficial de dentina terciária formada como resposta à cárie",
      "Uma camada amorfa de 1–5 µm formada pelo corte dos túbulos dentinários durante o preparo cavitário, composta por detritos de dentina, bactérias e fluido dentinário",
      "A zona de dentina esclerótica que ocorre naturalmente com o envelhecimento",
      "O tecido de granulação formado na polpa em resposta à inflamação",
    ],
    correctIndex: 1,
    explanation: "O smear layer é uma camada amorfa formada mecanicamente durante os procedimentos de preparo cavitário. É composta por cristais de hidroxiapatita, colágeno degradado, bactérias e fluido dentinário. Obstrui os túbulos dentinários, formando smear plugs. Nos sistemas adesivos, sua remoção ou modificação é fundamental para a adesão.",
  },
  {
    id: "den-09",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Intermediário",
    question: "A dentina terciária (reacional ou reparativa) é produzida quando:",
    options: [
      "O dente completa sua formação radicular",
      "O complexo dentinopulpar é estimulado por agressões como cárie, trauma ou preparos cavitários, como mecanismo de defesa",
      "Há reabsorção interna do dente",
      "O dente sofre atrito oclusal fisiológico ao longo do tempo",
    ],
    correctIndex: 1,
    explanation: "A dentina terciária é produzida pelos odontoblastos em resposta a estímulos patológicos ou iatrogênicos. A dentina reacional é produzida pelos odontoblastos originais sobreviventes; a reparativa é produzida por células pulpares diferenciadas em novos odontoblastos. Ambas visam proteger o complexo dentinopulpar aumentando a distância entre o estímulo e a polpa.",
  },
  {
    id: "den-10",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Avançado",
    question: "Sobre os túbulos dentinários, é CORRETO afirmar:",
    options: [
      "São mais largos na junção amelodentinária do que na polpa, pois divergem em direção à polpa",
      "São mais numerosos e de maior diâmetro na dentina próxima à polpa (~45.000/mm²) do que na dentina periférica (~15.000/mm²)",
      "São estruturas completamente vazias que facilitam a difusão de ácidos durante o condicionamento",
      "A esclerose dentinária (obliteração tubular) é sempre patológica e indica necessidade de tratamento",
    ],
    correctIndex: 1,
    explanation: "Os túbulos dentinários convergem em direção à polpa, portanto são mais numerosos e de maior diâmetro na dentina peripulpar. Isso tem implicações clínicas diretas: a dentina mais próxima da polpa é mais permeável, exige maior cuidado com a proteção pulpar, e a adesão pode ser mais difícil pela maior umidade. A esclerose tubular é uma resposta fisiológica de defesa do complexo dentinopulpar.",
  },

  // ── BLOCO II — DIAGNÓSTICO ────────────────────────────────────────────────

  {
    id: "den-11",
    subject: "Dentística",
    topic: "Exame Clínico",
    difficulty: "Básico",
    question: "A transiluminação com fibra óptica (FOTI) é particularmente útil para:",
    options: [
      "Medir a profundidade de bolsas periodontais",
      "Detectar lesões interproximais e trincas de esmalte, pois áreas desmineralizadas bloqueiam a passagem de luz",
      "Avaliar a vitalidade pulpar em dentes com coroas metálicas",
      "Verificar a qualidade das margens de restaurações cerâmicas",
    ],
    correctIndex: 1,
    explanation: "Na FOTI, a luz da fibra óptica atravessa o dente e qualquer estrutura que bloqueia ou altera a transmissão luminosa — como cárie, trinca ou restauração — aparece como uma sombra. É especialmente útil para detectar lesões interproximais incipientes e trincas de esmalte que podem não ser visíveis no RX. É um método não invasivo e complementar ao exame radiográfico.",
  },
  {
    id: "den-12",
    subject: "Dentística",
    topic: "Métodos Complementares de Diagnóstico",
    difficulty: "Intermediário",
    question: "O DIAGNOdent (fluorescência a laser) baseia-se no princípio de que:",
    options: [
      "Tecido dental mineralizado absorve completamente o laser de 655 nm sem fluorescência",
      "Metabólitos bacterianos (porfirinas) nas lesões cariosas emitem fluorescência de maior comprimento de onda quando excitados por laser de 655 nm, gerando valor numérico proporcional à extensão da lesão",
      "O laser ioniza o mineral do esmalte, permitindo quantificação direta da mineralização",
      "A porfirina do sangue gengival não interfere na leitura, tornando o exame independente do controle de umidade",
    ],
    correctIndex: 1,
    explanation: "O DIAGNOdent utiliza laser de diodo (655 nm). Em tecido sadio, a fluorescência emitida é mínima. Em lesões cariosas, os metabólitos bacterianos (porfirinas) emitem fluorescência de maior comprimento de onda captada por detector, gerando valores de 0 a 99. Valores >20–25 geralmente indicam envolvimento de dentina. É útil para monitorar lesões e definir necessidade de intervenção.",
  },
  {
    id: "den-13",
    subject: "Dentística",
    topic: "Métodos Complementares de Diagnóstico",
    difficulty: "Intermediário",
    question: "As radiografias interproximais (bite-wing) são especialmente indicadas para detectar:",
    options: [
      "Lesões periapicais e reabsorções radiculares",
      "Lesões cariosas interproximais, profundidade de lesões e nível ósseo alveolar da crista",
      "Anatomia do canal radicular antes de tratamento endodôntico",
      "Posição de dentes inclusos e relação com estruturas nobres",
    ],
    correctIndex: 1,
    explanation: "As radiografias bite-wing posicionam o receptor de modo que coroas de dentes superiores e inferiores sejam visualizadas simultaneamente. São ideais para: detectar lesões cariosas interproximais (especialmente as não cavitadas), avaliar a profundidade das lesões (esmalte vs. dentina), verificar integridade de margens de restaurações e avaliar nível da crista óssea alveolar. Não permitem visualização apical.",
  },
  {
    id: "den-14",
    subject: "Dentística",
    topic: "Lesões Não Cariosas",
    difficulty: "Básico",
    question: "A erosão dental é causada por:",
    options: [
      "Forças oclusais excêntricas na região cervical dos dentes",
      "Dissolução química ácida dos tecidos duros do dente, sem envolvimento bacteriano",
      "Trauma direto repetitivo de objeto externo (como escova dental)",
      "Contato dente-dente durante o bruxismo",
    ],
    correctIndex: 1,
    explanation: "A erosão dental é a dissolução química progressiva dos tecidos duros do dente por ácidos de origem extrínseca (dieta, bebidas carbonatadas) ou intrínseca (refluxo gastroesofágico, vômitos como na bulimia). Não envolve bactérias, distinguindo-se da cárie dental. Gera superfícies lisas, brilhantes e escavadas em locais característicos dependendo da fonte ácida.",
  },
  {
    id: "den-15",
    subject: "Dentística",
    topic: "Lesões Não Cariosas",
    difficulty: "Intermediário",
    question: "A abfração é:",
    options: [
      "Desgaste da superfície oclusal por contato dente-a-dente durante a mastigação",
      "Lesão cervical em forma de cunha causada por forças oclusais excêntricas que geram tensão de tração no colo do dente, levando à fratura dos prismas de esmalte",
      "Erosão química localizada na região cervical causada por exposição ácida intrínseca",
      "Desgaste por abrasão do colo dental causado por escovação inadequada",
    ],
    correctIndex: 1,
    explanation: "A abfração é lesão cervical de etiologia biomecânica: forças oclusais excêntricas (bruxismo, contatos prematuros) geram concentração de tensão de tração e compressão nas regiões cervicais, causando fadiga e fratura dos prismas de esmalte. Clinicamente, apresenta-se como lesão em forma de cunha de bordas nítidas. Na prática, geralmente resulta de etiologia multifatorial.",
  },
  {
    id: "den-16",
    subject: "Dentística",
    topic: "Lesões Não Cariosas",
    difficulty: "Intermediário",
    question: "A hipomineralização molar-incisivo (MIH) caracteriza-se por:",
    options: [
      "Fluorose grave afetando exclusivamente os primeiros molares permanentes",
      "Defeito qualitativo do esmalte de origem sistêmica, afetando pelo menos um primeiro molar permanente, frequentemente associado a incisivos, com opacidades delimitadas e maior risco de fratura e cárie",
      "Hipoplasia de esmalte causada por deficiência de vitamina D durante a gestação, afetando toda a dentição",
      "Lesão de mancha branca tipicamente associada ao início de lesão cariosa, revertida com fluoreto",
    ],
    correctIndex: 1,
    explanation: "A MIH é defeito qualitativo do esmalte de etiologia multifatorial (condições sistêmicas no período perinatal). Caracteriza-se por opacidades delimitadas — diferentemente da fluorose (difusa) — de coloração branco-amarelada ou amarelo-marrom, com risco aumentado de fratura pós-eruptiva e cárie. O tratamento varia de dessensibilização e selantes até restaurações extensas ou exodontia dos molares.",
  },
  {
    id: "den-17",
    subject: "Dentística",
    topic: "Lesões Não Cariosas",
    difficulty: "Avançado",
    question: "No diagnóstico diferencial de lesões cervicais não cariosas, qual característica sugere abrasão como etiologia principal?",
    options: [
      "Forma em cunha com ângulo interno bem definido, em caninos e pré-molares com contatos prematuros",
      "Superfície lisa, polida, em concavidade, associada a refluxo gastroesofágico",
      "Superfície irregular e áspera, associada ao uso de escova de cerdas duras ou pasta abrasiva, frequentemente relacionada a técnica de escovação inadequada (horizontal)",
      "Opacidades de esmalte nas bordas da lesão, sugerindo remineralização",
    ],
    correctIndex: 2,
    explanation: "A abrasão resulta de desgaste mecânico patológico por agente externo. Na região cervical, a causa mais comum é escovação inadequada (força excessiva, cerdas duras, pasta abrasiva, técnica horizontal). A superfície é irregular e rugosa, frequentemente mais pronunciada em caninos e pré-molares. O diagnóstico diferencial baseia-se na história clínica e nas características morfológicas da lesão.",
  },
  {
    id: "den-18",
    subject: "Dentística",
    topic: "Plano de Tratamento",
    difficulty: "Intermediário",
    question: "O conceito de 'controle de fatores etiológicos antes da restauração' preconiza que:",
    options: [
      "Nenhuma restauração deve ser feita antes do controle completo de cárie e doença periodontal",
      "Deve-se primeiro eliminar o desequilíbrio biofilme/hospedeiro/substrato e estabilizar as condições bucais para que as restaurações definitivas tenham prognóstico previsível",
      "O controle etiológico é responsabilidade exclusiva do paciente, cabendo ao dentista apenas executar as restaurações prescritas",
      "Restaurações provisórias em ionômero de vidro devem ser realizadas sempre antes das definitivas, independentemente da situação clínica",
    ],
    correctIndex: 1,
    explanation: "O planejamento em Dentística contempla uma fase higiênica e etiológica antes das restaurações definitivas: estabilizar a doença cárie, controlar biofilme, eliminar fatores de risco (dieta cariogênica, fluxo salivar reduzido) e tratar a doença periodontal. Isso garante que o ambiente bucal esteja equilibrado e que as restaurações definitivas sejam inseridas em condições favoráveis.",
  },

  // ── BLOCO III — CONTROLE DO MEIO ─────────────────────────────────────────

  {
    id: "den-19",
    subject: "Dentística",
    topic: "Isolamento do Campo Operatório",
    difficulty: "Básico",
    question: "O isolamento absoluto do campo operatório com dique de borracha é o padrão ouro para procedimentos restauradores adesivos porque:",
    options: [
      "Facilita a visualização e a iluminação do campo operatório",
      "Garante campo seco, livre de contaminação por saliva, sangue e fluido gengival, fundamentais para a adesão dos sistemas adesivos",
      "Elimina a necessidade de anestesia local em procedimentos de curta duração",
      "Permite que o profissional trabalhe sem auxílio de segunda pessoa",
    ],
    correctIndex: 1,
    explanation: "A contaminação por umidade (saliva, fluido sulcular, sangue) é o principal inimigo dos sistemas adesivos. A água interfere na polimerização dos monômeros resinosos e desorganiza a camada híbrida. O dique de borracha é o método mais eficaz de controle de umidade, além de proteger o paciente contra aspiração de instrumentos e melhorar a ergonomia.",
  },
  {
    id: "den-20",
    subject: "Dentística",
    topic: "Isolamento do Campo Operatório",
    difficulty: "Intermediário",
    question: "Em relação aos grampos do dique de borracha, qual afirmativa está CORRETA?",
    options: [
      "Grampos com asas facilitam a colocação do dique antes de inserir o grampo, sendo indicados para a técnica arco-dique-grampo",
      "Grampos com bordas lisas (sem serrilhado) são indicados para isolamento de dentes posteriores com maior retenção",
      "O grampo 212 é especificamente indicado para isolamento de dentes parcialmente irrompidos",
      "Todos os grampos devem ter suas pontas apoiadas na coroa dental, nunca no tecido gengival",
    ],
    correctIndex: 2,
    explanation: "O grampo 212 (e similares) possui design especial com bordas que se adaptam a dentes parcialmente irrompidos, com acesso subgengival. Grampos com asas permitem a colocação do dique antes do grampo (técnica arco-dique-grampo em conjunto). Alguns grampos são intencionalmente posicionados subgengivalmente para melhor retenção em dentes com pouca estrutura coronária.",
  },
  {
    id: "den-21",
    subject: "Dentística",
    topic: "Isolamento do Campo Operatório",
    difficulty: "Intermediário",
    question: "O isolamento relativo é indicado quando:",
    options: [
      "É impossível realizar o isolamento absoluto ou em situações específicas: dentes que não suportam grampo, limitação severa de abertura bucal, alergia ao látex sem alternativa disponível, ou procedimentos de curtíssima duração",
      "O profissional prefere por questão de ergonomia",
      "O material restaurador não é sensível à umidade",
      "O paciente apresenta boa higiene oral e baixo risco de cárie",
    ],
    correctIndex: 0,
    explanation: "O isolamento relativo (roletes de algodão, sugadores, afastadores) é indicado quando o absoluto não é viável: impossibilidade técnica (dente muito irrompido ou subgengival), limitação de abertura bucal severa, alergia ao látex, ou procedimentos muito rápidos como fotopolimerização de selantes. Não oferece o mesmo controle de contaminação que o isolamento absoluto.",
  },
  {
    id: "den-22",
    subject: "Dentística",
    topic: "Ergonomia e Controle de Infecção",
    difficulty: "Intermediário",
    question: "O trabalho a quatro mãos em Dentística pressupõe que:",
    options: [
      "Dois cirurgiões-dentistas trabalham simultaneamente no mesmo paciente",
      "O CD e o auxiliar de saúde bucal trabalham de forma integrada, com o CD em posição de 9–12h e o auxiliar em 2–3h (para o destro), com paciente em posição supina",
      "O CD trabalha com ambas as mãos simultaneamente sem auxílio de técnico",
      "É uma técnica exclusiva para procedimentos de cirurgia oral menor",
    ],
    correctIndex: 1,
    explanation: "O trabalho a quatro mãos é a forma mais eficiente e ergonômica de atendimento. O CD posiciona-se entre 9h e 12h (para destros), o auxiliar entre 2h e 3h, e o paciente em posição supina. O auxiliar antecipa as necessidades do CD, transfere instrumentos, aspira e ilumina o campo, enquanto o CD se concentra no procedimento, reduzindo movimentos desnecessários e fadiga.",
  },

  // ── BLOCO IV — PREPAROS CAVITÁRIOS ────────────────────────────────────────

  {
    id: "den-23",
    subject: "Dentística",
    topic: "Preparos Cavitários",
    difficulty: "Básico",
    question: "A 'forma de resistência' de um preparo cavitário refere-se à:",
    options: [
      "Capacidade do dente preparado e do material restaurador de resistir sem fratura às forças mastigatórias",
      "Habilidade do material de resistir à corrosão pelo ambiente bucal",
      "Retenção mecânica do material restaurador dentro do preparo",
      "Capacidade das paredes do preparo de resistir ao ataque ácido da cárie",
    ],
    correctIndex: 0,
    explanation: "A forma de resistência diz respeito ao conjunto de características do preparo que permitem que tanto o dente remanescente quanto o material restaurador suportem as forças oclusais sem fraturar. Envolve: paredes suficientemente espessas de esmalte com suporte dentinário, ângulo cavossuperficial adequado e profundidade mínima de assoalho. Difere da forma de retenção, que se refere à retenção mecânica do material.",
  },
  {
    id: "den-24",
    subject: "Dentística",
    topic: "Preparos para Amálgama",
    difficulty: "Básico",
    question: "Uma característica específica do preparo para amálgama que o diferencia do preparo para resina composta é:",
    options: [
      "A necessidade de bisel nas margens de esmalte",
      "O ângulo cavossuperficial de 90° (sem bisel), que garante espessura mínima do amálgama e resistência marginal adequada",
      "A extensão preventiva obrigatória a todas as fóssulas e fissuras do dente",
      "A necessidade de subbases de ionômero de vidro em todos os preparos",
    ],
    correctIndex: 1,
    explanation: "O amálgama não tolera margens biseladas — o bisel geraria espessura muito reduzida de metal que fraturaria facilmente. O ângulo cavossuperficial de 90° garante espessura marginal adequada e resistência à fratura. Por outro lado, resinas compostas anteriores podem receber bisel no esmalte para aumentar a área de adesão e disfarçar a transição com o dente.",
  },
  {
    id: "den-25",
    subject: "Dentística",
    topic: "Preparos para Amálgama",
    difficulty: "Intermediário",
    question: "A 'extensão preventiva' proposta por G.V. Black nos preparos para amálgama:",
    options: [
      "Ainda é considerada obrigatória e deve ser seguida em todos os preparos modernos",
      "Consistia em incluir todas as fóssulas e fissuras susceptíveis ao redor da cavidade, mas foi amplamente questionada com o advento dos materiais adesivos e da filosofia minimamente invasiva",
      "Refere-se à extensão do preparo até a margem gengival para facilitar o acabamento",
      "É um princípio válido apenas para preparos de Classe I em molares superiores",
    ],
    correctIndex: 1,
    explanation: "Black propunha 'extension for prevention' — estender o preparo para incluir fóssulas e fissuras susceptíveis mesmo sem cárie ativa. Com o advento dos materiais adesivos, do flúor e do maior entendimento da dinâmica da cárie, esse princípio foi questionado. Hoje aplica-se o conceito de mínima intervenção e uso de selantes para fóssulas não cavitadas.",
  },
  {
    id: "den-26",
    subject: "Dentística",
    topic: "Preparos para Resina Composta",
    difficulty: "Intermediário",
    question: "O bisel em esmalte nos preparos para resina composta em dentes anteriores é indicado porque:",
    options: [
      "Aumenta a resistência à fratura da restauração na região de margem",
      "Aumenta a área de superfície de adesão em esmalte, melhora a estética pela transição gradual de espessura e permite melhor mimetização da cor",
      "Elimina a necessidade de condicionamento ácido na margem de esmalte",
      "É obrigatório em todas as classes de preparos, incluindo posteriores",
    ],
    correctIndex: 1,
    explanation: "O bisel em esmalte nos preparos anteriores serve a múltiplos propósitos: aumenta a área de superfície de adesão em esmalte (melhor adesão que em dentina), permite transição gradual de espessura (evitando a linha de interface abrupta), facilita o mimetismo com o dente natural. Em preparos posteriores, o bisel é contraindicado nas margens oclusais de contato.",
  },
  {
    id: "den-27",
    subject: "Dentística",
    topic: "Restaurações Indiretas",
    difficulty: "Intermediário",
    question: "A principal vantagem das restaurações indiretas (inlay, onlay) cerâmicas sobre restaurações diretas de resina composta em dentes posteriores é:",
    options: [
      "Maior adesão ao dente, pois a cimentação adesiva é mais eficaz que a adesão direta",
      "A contração de polimerização ocorre fora da boca, eliminando o estresse interno; além disso, melhor controle de forma, contato proximal, anatomia oclusal e propriedades físicas finais",
      "Menor custo e menor tempo de atendimento para o paciente",
      "Eliminação da necessidade de preparo cavitário em casos conservadores",
    ],
    correctIndex: 1,
    explanation: "Nas restaurações indiretas, a polimerização e a contração ocorrem no laboratório (ou no bloco CAD/CAM), eliminando o estresse de contração dentro da cavidade. O laboratório permite maior controle de forma, anatomia oclusal e ponto de contato proximal. As propriedades físicas de cerâmicas como o dissilicato de lítio superam as resinas diretas em restaurações extensas.",
  },
  {
    id: "den-28",
    subject: "Dentística",
    topic: "Restaurações Indiretas",
    difficulty: "Avançado",
    question: "Nos preparos para facetas cerâmicas (lentes de contato), o término cervical preconizado é:",
    options: [
      "Chanfro profundo de 1,5 mm para garantir espessura mínima de cerâmica na região cervical",
      "Linha de término em faca (feather edge) ou chanfro mínimo, preservando o máximo de esmalte cervical — a adesão em esmalte é superior e a cerâmica nessa região é fina (~0,3 mm)",
      "Ombro de 90° subgengival para melhor estética e selamento marginal",
      "A faceta de lente de contato não requer preparo; é cimentada diretamente sobre o esmalte sem qualquer remoção de estrutura",
    ],
    correctIndex: 1,
    explanation: "Para facetas de lente de contato (mínimo preparo), o término cervical é em faca (feather edge) ou chanfro muito suave, preservando ao máximo o esmalte cervical. A espessura de cerâmica nessa região é muito reduzida (~0,3 mm) e a adesão em esmalte é muito superior à dentina, favorecendo o prognóstico. O preparo mínimo ou ausente é o diferencial das lentes de contato em relação às facetas convencionais.",
  },

  // ── BLOCO V — MATERIAIS ────────────────────────────────────────────────────

  {
    id: "den-29",
    subject: "Dentística",
    topic: "Adesão Dental",
    difficulty: "Básico",
    question: "O condicionamento ácido total do esmalte com ácido fosfórico a 37% tem como objetivo:",
    options: [
      "Dissolver toda a camada de esmalte superficial para expor dentina sadia",
      "Criar microporosidades na superfície do esmalte pela dissolução seletiva dos centros e periferias dos prismas, aumentando a área de superfície para penetração do adesivo",
      "Esterilizar a superfície dental eliminando todas as bactérias antes da restauração",
      "Modificar o smear layer transformando-o em smear plugs sem removê-lo",
    ],
    correctIndex: 1,
    explanation: "O condicionamento com ácido fosfórico (15–30 s em esmalte) dissolve seletivamente os cristais de hidroxiapatita dos centros e periferias dos prismas, criando padrão microretentivo. Isso aumenta a área de superfície em até 2–3 vezes e a energia de superfície, permitindo que os monômeros do adesivo penetrem por capilaridade e polimerizem formando tags de resina.",
  },
  {
    id: "den-30",
    subject: "Dentística",
    topic: "Adesão Dental",
    difficulty: "Intermediário",
    question: "A principal diferença entre sistemas adesivos de condicionamento ácido total e os autocondicionantes (self-etching) reside em:",
    options: [
      "Os autocondicionantes usam ácido fosfórico a 10% e produzem melhor adesão em esmalte",
      "Nos autocondicionantes, os primers ácidos condicionam e infiltram o substrato simultaneamente, sem etapa de lavagem, resultando em adesão em esmalte ligeiramente inferior mas protocolo simplificado e menor risco de ressecamento da dentina",
      "Os sistemas de condicionamento total são exclusivos para esmalte; os autocondicionantes são exclusivos para dentina",
      "Os sistemas autocondicionantes não requerem qualquer preparo de superfície e produzem adesão igual em todos os substratos",
    ],
    correctIndex: 1,
    explanation: "No condicionamento ácido total, o ácido fosfórico é aplicado e lavado antes do primer. Nos autocondicionantes, monômeros ácidos (MDP, 4-META, HEMA) condicionam e infiltram simultaneamente sem lavagem, incorporando o smear layer à interface. Em esmalte, o condicionamento total gera padrão mais profundo e melhor adesão; em dentina, os autocondicionantes oferecem menor risco de over-etching e colapso da rede de colágeno.",
  },
  {
    id: "den-31",
    subject: "Dentística",
    topic: "Adesão Dental",
    difficulty: "Avançado",
    question: "A 'camada híbrida' (zona de interdifusão resina-dentina) descrita por Nakabayashi et al. é formada quando:",
    options: [
      "A resina composta penetra nos túbulos dentinários formando tags de resina",
      "Monômeros resinosos do adesivo infiltram a rede de colágeno exposta pelo condicionamento ácido e polimerizam, criando zona de dentina desmineralizada com resina interpenetrada, responsável pela maior parte da resistência adesiva em dentina",
      "O ácido fosfórico dissolve toda a dentina superficial formando substrato completamente mineralizado",
      "O primer aquoso hidrofílico dissolve o colágeno para criar espaços para penetração de monômeros hidrofóbicos",
    ],
    correctIndex: 1,
    explanation: "A camada híbrida (zona de interdifusão) é o mecanismo central da adesão resinosa à dentina. O condicionamento ácido desmineraliza a dentina superficial expondo a rede de colágeno. Os monômeros do adesivo infiltram essa rede e ao polimerizar criam zona de colágeno encapsulado por resina. Sua qualidade depende da eficiência da remoção do solvente e da monomer diffusion. Os tags de resina contribuem menos para a resistência adesiva do que a camada híbrida.",
  },
  {
    id: "den-32",
    subject: "Dentística",
    topic: "Resinas Compostas",
    difficulty: "Básico",
    question: "A contração de polimerização das resinas compostas é clinicamente relevante porque:",
    options: [
      "Causa aumento de volume da restauração após fotopolimerização, gerando pressão nas cúspides",
      "Gera estresses internos que podem causar fendas marginais, sensibilidade pós-operatória, descolamento da restauração e microinfiltração quando o material está aderido às paredes",
      "É benéfica pois aperta o material contra as paredes, melhorando o selamento marginal",
      "Ocorre apenas em resinas de macropartículas, sendo desprezível nas nanoparticuladas",
    ],
    correctIndex: 1,
    explanation: "Todas as resinas compostas contraem durante a fotopolimerização (tipicamente 1,5–5% em volume). Quando a resina está aderida às paredes da cavidade, a contração gera estresse transferido para a interface adesiva. Isso pode causar: fendas marginais (microinfiltração, cárie secundária), descolamento e sensibilidade pós-operatória. Estratégias para minimizar: técnica incremental oblíqua, resinas bulk-fill e adesivos com módulo elástico reduzido.",
  },
  {
    id: "den-33",
    subject: "Dentística",
    topic: "Resinas Compostas",
    difficulty: "Intermediário",
    question: "As resinas bulk-fill diferem das resinas convencionais principalmente por:",
    options: [
      "Serem compostas apenas por monômeros sem carga, o que permite maior profundidade de polimerização",
      "Possuírem fotoiniciadores mais eficientes ou modificações de carga que permitem polimerização adequada em incrementos de até 4–5 mm, com menor estresse de contração",
      "Não apresentarem nenhuma contração de polimerização, sendo ideais para Classe II sem técnica incremental",
      "Serem indicadas exclusivamente para dentes anteriores por sua translucidez superior",
    ],
    correctIndex: 1,
    explanation: "As resinas bulk-fill permitem inserção em incrementos únicos de 4–5 mm. Isso é obtido por: fotoiniciadores mais eficientes (germânio, TPO), menor concentração de partículas, fillers com índice de refração similar à matriz (maior translucidez para melhor penetração de luz), e monômeros com menor módulo elástico. Não eliminam completamente a contração, mas o estresse é menor. Versões fluidas geralmente precisam de cobertura com resina convencional.",
  },
  {
    id: "den-34",
    subject: "Dentística",
    topic: "Resinas Compostas",
    difficulty: "Avançado",
    question: "O 'fator C' (fator de configuração cavitária) é relevante para a técnica de inserção de resina composta porque:",
    options: [
      "Indica o número ideal de incrementos necessários para preencher uma cavidade de determinado volume",
      "É a relação entre superfícies aderidas e superfícies livres da restauração; quanto maior o Fator C, maior o estresse de contração — cavidades Classe I têm alto Fator C (5 paredes aderidas, 1 livre)",
      "Representa a porcentagem de monômeros que não polimerizam nas margens, sendo inversamente proporcional à qualidade da restauração",
      "É específico das resinas de nanopartículas e não se aplica às demais classes de material",
    ],
    correctIndex: 1,
    explanation: "O fator C = superfícies aderidas / superfícies livres. Uma Classe I tem 5 superfícies aderidas e 1 livre (oclusal) → C = 5, altíssimo estresse. Uma Classe IV tem poucas superfícies aderidas e várias livres → C baixo. Alto fator C significa que ao contrair, a resina não tem superfície livre para escoar o estresse, transferindo-o integralmente para a interface adesiva. A técnica incremental oblíqua reduz o Fator C efetivo de cada incremento.",
  },
  {
    id: "den-35",
    subject: "Dentística",
    topic: "Amálgama Dental",
    difficulty: "Básico",
    question: "A Convenção de Minamata (2013) sobre o mercúrio tem como impacto principal para a Odontologia:",
    options: [
      "Proibição imediata e total do uso de amálgama em todo o mundo a partir de 2015",
      "Compromisso de phasedown (redução progressiva) do uso de amálgama dental, especialmente em populações vulneráveis: crianças até 15 anos, gestantes e nutrizes",
      "Obrigatoriedade de substituição de todas as restaurações de amálgama existentes nos próximos 10 anos",
      "Proibição exclusiva do amálgama em países em desenvolvimento, mantendo o uso nos desenvolvidos",
    ],
    correctIndex: 1,
    explanation: "A Convenção de Minamata não proibiu totalmente o amálgama dental imediatamente, mas estabeleceu medidas de phasedown — redução progressiva e controlada. Os países signatários devem desincentivar o uso em grupos vulneráveis (crianças <15 anos, grávidas, mulheres em amamentação), melhorar o manejo de resíduos de amálgama e promover materiais alternativos.",
  },
  {
    id: "den-36",
    subject: "Dentística",
    topic: "Amálgama Dental",
    difficulty: "Intermediário",
    question: "A condensação vigorosa do amálgama é necessária porque:",
    options: [
      "Aumenta a resistência à corrosão pela compactação dos cristais de gama-2 (Sn₈Hg)",
      "Remove o excesso de mercúrio da mistura, aumentando a relação pó-mercúrio efetiva, reduzindo a fase gama-2 (menos estável, mais susceptível à corrosão) e melhorando as propriedades mecânicas e o selamento marginal",
      "Altera a composição química do amálgama, convertendo o componente de prata em composto mais estável",
      "Elimina completamente a necessidade de polimento posterior pois a condensação já produz superfície lisa",
    ],
    correctIndex: 1,
    explanation: "A condensação vigorosa do amálgama expulsa o excesso de mercúrio (mercury-rich phase), aumentando a relação pó/mercúrio na mistura. Com menos mercúrio livre, há menor proporção da fase gama-2 (Sn₈Hg) — a mais corrosível e de menor resistência. O resultado é restauração com melhores propriedades mecânicas, menor corrosão marginal e melhor selamento.",
  },
  {
    id: "den-37",
    subject: "Dentística",
    topic: "Ionômero de Vidro",
    difficulty: "Básico",
    question: "A propriedade que torna o cimento de ionômero de vidro (CIV) especialmente valioso em Odontologia é:",
    options: [
      "Elevada resistência à compressão e dureza, tornando-o ideal para restaurações oclusais de molares em adultos",
      "Liberação de fluoreto de forma sustentada e recarga após exposição a produtos fluoretados, com bioatividade e ligação química à estrutura dental",
      "Translucidez e mimetismo de cor superiores às resinas compostas nanoparticuladas",
      "Resistência à abrasão oclusal equivalente à cerâmica, ideal para superfícies de alta demanda mastigatória",
    ],
    correctIndex: 1,
    explanation: "A maior vantagem do CIV é sua bioatividade: libera flúor de forma sustentada (efeito anticariogênico local) e recarrega com flúor de fontes externas. Além disso, apresenta ligação química dupla ao dente, não requer condicionamento ácido em dentina e é tolerado pelo complexo dentinopulpar. Suas desvantagens incluem menor resistência mecânica e maior sensibilidade à umidade.",
  },
  {
    id: "den-38",
    subject: "Dentística",
    topic: "Ionômero de Vidro",
    difficulty: "Intermediário",
    question: "O ionômero de vidro modificado por resina (IVMR) difere do CIV convencional porque:",
    options: [
      "O IVMR não libera flúor e não possui ligação química ao dente, sendo apenas estético",
      "Incorpora componentes resinosos (HEMA principalmente) que permitem dupla presa (reação ácido-base + fotopolimerização), aumentando as propriedades mecânicas, reduzindo a sensibilidade inicial à umidade e o tempo de presa, mantendo a liberação de flúor",
      "O IVMR requer condicionamento ácido com H₃PO₄ a 37% para aderir ao dente, ao contrário do convencional",
      "O IVMR tem menor resistência à abrasão que o CIV convencional por conter componentes orgânicos que se deterioram mais rapidamente",
    ],
    correctIndex: 1,
    explanation: "O IVMR incorpora monômeros resinosos (principalmente HEMA) à formulação do CIV, permitindo dupla presa: a reação ácido-base do ionômero e a fotopolimerização dos componentes resinosos. Isso aumenta as propriedades mecânicas, reduz a sensibilidade inicial à umidade e o tempo de presa. Mantém a característica mais importante do CIV: a liberação sustentada de flúor.",
  },
  {
    id: "den-39",
    subject: "Dentística",
    topic: "Materiais Cerâmicos e Indiretos",
    difficulty: "Intermediário",
    question: "O dissilicato de lítio (e.max) tem sido amplamente utilizado em facetas e coroas anteriores porque combina:",
    options: [
      "Opacidade similar ao zircônio com resistência mecânica superior ao esmalte dental",
      "Excelente estética (translucidez e fluorescência naturais) com resistência mecânica adequada para restaurações anteriores (~400 MPa de flexão) e potencial de condicionamento com HF para cimentação adesiva",
      "Processamento exclusivamente por CAD/CAM, eliminando a necessidade de laboratório convencional",
      "Resistência mecânica superior ao zircônio (>1000 MPa), sendo indicado para próteses posteriores de múltiplos elementos",
    ],
    correctIndex: 1,
    explanation: "O dissilicato de lítio combina excelente estética (alta translucidez, fluorescência e opalescência próximas do natural) com resistência mecânica suficiente para dentes anteriores (~350–400 MPa). Pode ser prensado ou fresado por CAD/CAM. Aceita condicionamento com HF a 9% seguido de silanização, permitindo cimentação adesiva de alta resistência. É o material de escolha para facetas cerâmicas e coroas anteriores unitárias.",
  },
  {
    id: "den-40",
    subject: "Dentística",
    topic: "Proteção Pulpar",
    difficulty: "Intermediário",
    question: "O capeamento pulpar direto com MTA é indicado quando:",
    options: [
      "A exposição pulpar ocorre em qualquer situação clínica, substituindo completamente o hidróxido de cálcio",
      "Há exposição pulpar em dente com polpa vitalmente saudável (sem sinais de pulpite irreversível), sangramento controlável, campo seco e diagnóstico pulpar favorável",
      "A exposição pulpar é de grande diâmetro (>2 mm), pois o MTA preenche melhor espaços amplos",
      "O paciente apresenta doença sistêmica que contraindica o tratamento endodôntico",
    ],
    correctIndex: 1,
    explanation: "O capeamento pulpar direto visa preservar a vitalidade pulpar após exposição. Os critérios para sucesso incluem: exposição pequena (<2 mm), sangramento rosado vivo (polpa saudável) controlável com leve pressão, ausência de sinais de pulpite irreversível (dor espontânea, prolongada ao frio). O MTA tem superado o Ca(OH)₂ em estudos por promover formação de ponte dentinária com menor inflamação.",
  },

  // ── BLOCO VI — TÉCNICAS RESTAURADORAS DIRETAS ─────────────────────────────

  {
    id: "den-41",
    subject: "Dentística",
    topic: "Restaurações Posteriores Diretas",
    difficulty: "Básico",
    question: "A técnica incremental oblíqua na inserção de resina composta em dentes posteriores tem como objetivo principal:",
    options: [
      "Facilitar a seleção e mistura de diferentes tons de resina para melhor estética posterior",
      "Reduzir o fator C efetivo de cada incremento, minimizando o estresse de contração de polimerização e permitindo melhor adaptação às paredes",
      "Aumentar a espessura total da restauração para maior resistência",
      "Permitir a polimerização completa de incrementos de até 6 mm de espessura",
    ],
    correctIndex: 1,
    explanation: "A inserção incremental oblíqua visa reduzir o Fator C de cada incremento: cada camada oblíqua tem menos superfícies aderidas e mais superfícies livres do que um incremento horizontal que preenche toda a extensão gengivo-oclusal. Isso permite maior escoamento da contração e menor estresse residual na interface adesiva. Cada incremento não deve ultrapassar 2 mm de espessura para garantir polimerização adequada.",
  },
  {
    id: "den-42",
    subject: "Dentística",
    topic: "Restaurações Posteriores Diretas",
    difficulty: "Intermediário",
    question: "Para restaurações de Classe II com resina composta, o uso de matrizes seccionais com anéis de separação é preferível às matrizes circunferenciais porque:",
    options: [
      "As matrizes circunferenciais não podem ser usadas em dentes posteriores por questões de anatomia",
      "Os anéis de separação criam pressão entre os dentes adjacentes, permitindo que a matriz seccional contorne adequadamente o dente e que após a restauração o ponto de contato proximal seja mais firme e anatomicamente correto",
      "O custo menor das matrizes seccionais é o principal fator de escolha",
      "Matrizes circunferenciais não podem ser usadas com resina composta por incompatibilidade química",
    ],
    correctIndex: 1,
    explanation: "As matrizes seccionais (Palodent, Composi-Tight) associadas a anéis de separação revolucionaram as restaurações classe II. O anel cria separação entre os dentes, a matriz seccional abraça apenas o dente sendo restaurado, e após a restauração a recuperação elástica do ligamento periodontal garante ponto de contato firme. Com matrizes circunferenciais, o ponto de contato tende a ser mais fraco, gerando risco de impacção alimentar.",
  },
  {
    id: "den-43",
    subject: "Dentística",
    topic: "Restaurações Anteriores Diretas",
    difficulty: "Intermediário",
    question: "A guia palatina de silicone na estratificação de restaurações anteriores diretas serve para:",
    options: [
      "Reproduzir a anatomia da face vestibular do dente original",
      "Registrar o contorno palatino original para reconstruir a camada de esmalte palatino antes de inserir as camadas de resina de corpo (dentina) e de esmalte, garantindo proporção e espessura corretas",
      "Isolar o campo operatório durante a restauração de fraturas classe IV",
      "Guiar o posicionamento do espelho para transiluminação durante a restauração",
    ],
    correctIndex: 1,
    explanation: "A guia de silicone é confeccionada a partir de um enceramento diagnóstico ou da anatomia do dente antes do preparo. Ela reproduz negativamente o contorno palatino, servindo como molde para a primeira camada de resina (que formará o esmalte palatino ou guia estrutural). Sobre essa base, inserem-se as camadas de resina de corpo (dentina) e, por fim, o esmalte vestibular, garantindo proporção e espessura corretas.",
  },
  {
    id: "den-44",
    subject: "Dentística",
    topic: "Técnicas Adesivas",
    difficulty: "Básico",
    question: "A indicação principal dos selantes de fóssulas e fissuras é:",
    options: [
      "Tratamento de lesões cariosas de Classe I já cavitadas em molares de pacientes pediátricos",
      "Prevenção de lesões cariosas em fóssulas e fissuras de risco em dentes permanentes recém-erupcionados com alto risco de cárie, selando morfologias retentivas antes que a lesão se desenvolva",
      "Substituição do flúor tópico como método preventivo de cárie proximal",
      "Tratamento de hipersensibilidade dentinária em fóssulas profundas de adultos",
    ],
    correctIndex: 1,
    explanation: "Os selantes são indicados principalmente em fóssulas e fissuras profundas e retentivas de dentes permanentes recém-erupcionados (especialmente primeiros molares) em pacientes com alto risco de cárie. O objetivo é selar mecanicamente as morfologias onde o biofilme se acumula e a escova não acessa. A indicação é profilática — antes do estabelecimento da lesão cariosa.",
  },
  {
    id: "den-45",
    subject: "Dentística",
    topic: "Acabamento e Polimento",
    difficulty: "Básico",
    question: "O polimento adequado de restaurações de resina composta é clinicamente relevante porque:",
    options: [
      "Apenas melhora a estética, sem impacto funcional ou biológico",
      "Superfícies polidas reduzem a rugosidade, diminuindo acúmulo de biofilme, pigmentação, desgaste abrasivo e irritação gengival, além de melhorar a estética e longevidade da restauração",
      "Deve ser realizado imediatamente após a fotopolimerização para aproveitar o calor gerado durante a polimerização",
      "O polimento remove a camada inibida pelo oxigênio, que é a mais resistente, melhorando as propriedades mecânicas",
    ],
    correctIndex: 1,
    explanation: "O polimento vai muito além da estética. Superfícies rugosas acumulam mais biofilme (incluindo bactérias cariogênicas), aumentam o risco de cárie secundária e doença periodontal adjacente, mancham mais facilmente e desgastam mais rapidamente por abrasão. Uma sequência completa de polimento (brocas multilâminas → discos → borrachas → pastas diamantadas) é fundamental para a longevidade da restauração.",
  },

  // ── BLOCO VII — DENTÍSTICA ESTÉTICA ──────────────────────────────────────

  {
    id: "den-46",
    subject: "Dentística",
    topic: "Estética Dental",
    difficulty: "Básico",
    question: "No estudo da cor dental, o 'valor' (value) é a propriedade que descreve:",
    options: [
      "A família de cor (matiz) predominante do dente (amarelo, cinza, marrom)",
      "A luminosidade ou claridade do dente — escala de branco a preto, independente da cor — sendo o parâmetro de maior impacto visual em restaurações estéticas",
      "A saturação ou intensidade da cor (croma)",
      "A propriedade que permite ao dente parecer diferente sob diferentes ângulos de visão (iridescência)",
    ],
    correctIndex: 1,
    explanation: "Na teoria da cor, os três parâmetros são: Matiz (hue) = a família de cor; Croma = a saturação/intensidade; Valor (value) = a luminosidade (escala do preto ao branco). Em restaurações estéticas, o valor é o parâmetro de maior impacto visual: dentes com alto valor parecem 'iluminados' e mais atraentes. Restauradores experientes priorizam acertar o valor antes da matiz e do croma.",
  },
  {
    id: "den-47",
    subject: "Dentística",
    topic: "Clareamento Dental",
    difficulty: "Básico",
    question: "O mecanismo de ação dos agentes clareadores (peróxido de hidrogênio e peróxido de carbamida) baseia-se em:",
    options: [
      "Desgaste físico dos pigmentos externos por abrasão da partícula de peróxido",
      "Produção de radicais livres de oxigênio que oxidam as moléculas orgânicas de pigmento, quebrando cadeias cromofóricas em moléculas menores e mais claras",
      "Dissolução do esmalte superficial para remover camadas pigmentadas",
      "Substituição química dos íons de Fe²⁺ presentes nas manchas por íons de Ca²⁺ do peróxido",
    ],
    correctIndex: 1,
    explanation: "Os agentes clareadores são oxidantes. O peróxido de hidrogênio se decompõe gerando radicais livres de oxigênio altamente reativos. Esses radicais reagem com as longas cadeias de moléculas orgânicas cromofóricas, quebrando as conjugações duplas responsáveis pela cor, resultando em fragmentos menores e mais claros. O processo é reversível parcialmente pela reabsorção de novos cromóforos da dieta.",
  },
  {
    id: "den-48",
    subject: "Dentística",
    topic: "Clareamento Dental",
    difficulty: "Intermediário",
    question: "A sensibilidade dental é o efeito adverso mais comum do clareamento, sendo causada principalmente por:",
    options: [
      "Dano irreversível aos odontoblastos causado pela concentração do agente clareador",
      "Difusão do H₂O₂ e seus subprodutos através do esmalte e dentina até a polpa, estimulando as fibras nervosas pulpares; é transitória e reversível na maioria dos casos",
      "Erosão do esmalte causada pelo pH ácido dos géis clareadores convencionais",
      "Contração do volume pulpar causada pelo peróxido, levando à sensibilização dos receptores de pressão",
    ],
    correctIndex: 1,
    explanation: "O H₂O₂ é uma molécula pequena que penetra facilmente pelo esmalte e dentina, chegando à polpa em minutos. Seus subprodutos estimulam as fibras C pulpares. Fatores que aumentam a sensibilidade: alta concentração, tempo prolongado, dentes com defeitos de esmalte, recessão gengival. Estratégias de controle: géis dessensibilizantes com nitrato de potássio ou fluoreto, redução da concentração ou do tempo de aplicação.",
  },
  {
    id: "den-49",
    subject: "Dentística",
    topic: "Clareamento Dental",
    difficulty: "Avançado",
    question: "O clareamento interno de dentes desvitalizados (walking bleach) utiliza tipicamente:",
    options: [
      "Peróxido de carbamida a 10% em moldeira individual por 2 semanas",
      "Perborato de sódio (isolado ou combinado com H₂O₂) inserido na câmara pulpar após remoção do material obturador e instalação de barreira de proteção cervical (CIV), com câmara selada temporariamente",
      "Ácido fosfórico a 37% aplicado diretamente na câmara pulpar para oxidar os cromóforos",
      "Peróxido de hidrogênio a 38% ativado com luz LED aplicado externamente na face vestibular",
    ],
    correctIndex: 1,
    explanation: "No walking bleach, a câmara pulpar é acessada, o material obturador é removido 2–3 mm apicalmente e substituído por barreira de CIV (para prevenir reabsorção cervical externa). O agente (perborato de sódio ± H₂O₂) é inserido na câmara, que é selada com material temporário. O procedimento é repetido a cada 5–7 dias. H₂O₂ isolado na câmara aumenta o risco de reabsorção cervical.",
  },
  {
    id: "den-50",
    subject: "Dentística",
    topic: "Facetas",
    difficulty: "Intermediário",
    question: "As indicações clássicas de facetas cerâmicas incluem, EXCETO:",
    options: [
      "Dentes com fluorose moderada a severa com manchamento resistente ao clareamento",
      "Fechamento de diastemas leves (geralmente < 2 mm por dente)",
      "Dentes com grande destruição coronária (>50% de estrutura perdida), pois a faceta resolve o problema estético sem prótese total",
      "Alterações de forma e tamanho em dentes conoides ou incisivos laterais diminutos",
    ],
    correctIndex: 2,
    explanation: "Facetas são restaurações de recobrimento parcial da face vestibular. Para sua longevidade, necessitam de substrato dentário saudável com área de adesão suficiente. Dentes com grande destruição coronária (>50%) são contraindicação, pois a adesão seria insuficiente e as forças oclusais poderiam fraturar a faceta. Nesses casos, a indicação seria restauração direta, indireta tipo onlay ou coroa total.",
  },

  // ── BLOCO VIII — COMPLICAÇÕES E LONGEVIDADE ───────────────────────────────

  {
    id: "den-51",
    subject: "Dentística",
    topic: "Falhas em Restaurações",
    difficulty: "Básico",
    question: "A microinfiltração marginal em restaurações dentárias é definida como:",
    options: [
      "Fratura microscópica do material restaurador detectável apenas por microscopia eletrônica",
      "Passagem de bactérias, fluidos, moléculas e íons pelo espaço entre a restauração e as paredes cavitárias, que pode levar à sensibilidade, descoloração marginal e cárie secundária",
      "Dissolução progressiva do cimento de fosfato de zinco em restaurações indiretas",
      "Separação visível a olho nu entre a restauração e o dente, indicando falha adesiva total",
    ],
    correctIndex: 1,
    explanation: "A microinfiltração é o fenômeno de passagem de substâncias pela interface dente-restauração. Mesmo sem fendas visíveis macroscopicamente, bactérias e seus produtos, fluidos bucais e pigmentos podem infiltrar por microfendas. As consequências são: pigmentação marginal, sensibilidade pós-operatória e principalmente cárie secundária — principal causa de substituição de restaurações.",
  },
  {
    id: "den-52",
    subject: "Dentística",
    topic: "Falhas em Restaurações",
    difficulty: "Intermediário",
    question: "Os critérios USPHS (ou FDI atualizados) são usados para:",
    options: [
      "Definir o protocolo de fotopolimerização ideal para cada tipo de resina composta",
      "Avaliar clinicamente a qualidade de restaurações existentes — incluindo adaptação marginal, integridade superficial, cor e anatomia — auxiliando na decisão de reparar, repolir ou substituir",
      "Calcular o número de restaurações substituídas por ano em sistemas de saúde pública",
      "Classificar as lesões cariosas quanto à profundidade e extensão para indicação de tratamento",
    ],
    correctIndex: 1,
    explanation: "Os critérios USPHS são sistemas de avaliação clínica padronizados para restaurações. Avaliam: adaptação marginal, descoloração marginal, forma anatômica, rugosidade de superfície, integridade da restauração, vitalidade pulpar, cárie adjacente e saúde periodontal. Classificam as restaurações em aceitáveis (alfa, bravo) ou inaceitáveis (charlie) para cada critério, orientando a decisão clínica de manter, reparar ou substituir.",
  },
  {
    id: "den-53",
    subject: "Dentística",
    topic: "Hipersensibilidade Dentinária",
    difficulty: "Básico",
    question: "A teoria hidrodinâmica de Brännström explica a hipersensibilidade dentinária pelo mecanismo de:",
    options: [
      "Estimulação direta dos nervos pulpares pelas substâncias ácidas que penetram pelos túbulos",
      "Movimentação do fluido presente nos túbulos dentinários expostos em resposta a estímulos externos (frio, calor, osmótico), que deforma os mecanorreceptores pulpares gerando o impulso doloroso",
      "Inflamação crônica da polpa causada pela exposição crônica dos túbulos ao ambiente bucal",
      "Desmineralização progressiva da dentina exposta pelo ácido bucal, causando dor por dissolução mineral",
    ],
    correctIndex: 1,
    explanation: "A teoria hidrodinâmica de Brännström é a mais aceita para a hipersensibilidade dentinária. Túbulos expostos (por recessão, erosão ou abrasão) contêm fluido intratubular. Estímulos externos (temperatura, pressão osmótica, desidratação por jato de ar) causam movimentação desse fluido, estimulando mecanorreceptores (fibras A-delta) na junção dentinopulpar e gerando dor rápida e aguda.",
  },
  {
    id: "den-54",
    subject: "Dentística",
    topic: "Hipersensibilidade Dentinária",
    difficulty: "Intermediário",
    question: "O tratamento dessensibilizante com oxalato de potássio ou fluoreto estanhoso atua por:",
    options: [
      "Bloqueio das fibras nervosas A-delta na polpa por efeito anestésico local",
      "Obliteração (oclusão) dos túbulos dentinários por precipitação de cristais, reduzindo a permeabilidade dentinária e o movimento de fluido",
      "Dissolução da smear layer para expor dentina saudável mais resistente",
      "Estimulação da formação de dentina terciária pelo complexo dentinopulpar",
    ],
    correctIndex: 1,
    explanation: "O mecanismo dos dessensibilizantes tubulares (oxalato de potássio, fluoreto estanhoso, acetato de estrôncio) é a oclusão dos túbulos dentinários por precipitação de cristais insolúveis. O oxalato de potássio forma cristais de oxalato de cálcio; o fluoreto estanhoso forma complexos de CaF₂ e SnF₂. Isso reduz o diâmetro ou fecha os túbulos, diminuindo o movimento de fluido e a estimulação nervosa.",
  },

  // ── BLOCO IX — TÓPICOS CONTEMPORÂNEOS ────────────────────────────────────

  {
    id: "den-55",
    subject: "Dentística",
    topic: "Odontologia Minimamente Invasiva",
    difficulty: "Básico",
    question: "A infiltração de resina (técnica ICON) é indicada para:",
    options: [
      "Restauração de cavidades classe II com grande destruição interproximal em adultos",
      "Tratamento de lesões cariosas não cavitadas (manchas brancas) em esmalte que não responderam à remineralização, bloqueando a difusão de ácidos sem necessidade de preparo cavitário",
      "Selamento de lesões de furca grau I em dentes com doença periodontal",
      "Clareamento de manchas de fluorose grau II por dissolução da camada superficial hipermineralizada",
    ],
    correctIndex: 1,
    explanation: "A infiltração de resina (ICON) é abordagem minimamente invasiva para lesões cariosas de esmalte não cavitadas (ICDAS 1–2). O protocolo envolve condicionamento com HCl a 15% (penetrant) por 2 minutos para abrir os poros da lesão, secagem com etanol e infiltração com resina de baixa viscosidade que preenche os poros, bloqueando a difusão de ácidos. Não requer broca. Pode também mascarar manchas de fluorose leve a moderada.",
  },
  {
    id: "den-56",
    subject: "Dentística",
    topic: "Dentes Tratados Endodonticamente",
    difficulty: "Intermediário",
    question: "A principal indicação de pino intrarradicular em dentes tratados endodonticamente é:",
    options: [
      "Todo dente tratado endodonticamente deve receber pino como rotina para evitar fratura radicular",
      "Quando a destruição coronária é tão extensa que o remanescente não oferece retenção suficiente para a restauração definitiva — o pino ancora o núcleo de preenchimento, não aumenta a resistência à fratura do dente",
      "Quando o paciente apresenta bruxismo, pois o pino distribui as forças oclusais para a raiz",
      "Sempre que o dente precisar receber coroa total, independentemente do volume de remanescente coronário",
    ],
    correctIndex: 1,
    explanation: "O pino intrarradicular serve exclusivamente para reter o núcleo de preenchimento quando o remanescente coronário é insuficiente (<2 mm de ferrule ou <50% de estrutura coronária). Estudos demonstram que o pino não aumenta e pode até diminuir a resistência à fratura radicular — especialmente pinos metálicos fundidos que criam estresse e podem causar fratura vertical. Com remanescente suficiente, a restauração direta com cobertura de cúspide é preferível.",
  },
  {
    id: "den-57",
    subject: "Dentística",
    topic: "Dentes Tratados Endodonticamente",
    difficulty: "Avançado",
    question: "O conceito de 'endocrown' é definido como:",
    options: [
      "Coroa total de cerâmica indicada para dentes tratados endodonticamente com paredes coronárias íntegras",
      "Restauração indireta monolítica que se ancora na câmara pulpar para retenção, indicada especialmente para molares com câmara ampla e raízes curtas ou achatadas onde o pino é difícil",
      "Pino de fibra de vidro cimentado com cimento de ionômero de vidro modificado por resina",
      "Técnica de núcleo de preenchimento de resina composta direta sem pino, para qualquer dente endodonticamente tratado",
    ],
    correctIndex: 1,
    explanation: "O endocrown é restauração indireta (geralmente cerâmica) que utiliza a câmara pulpar como fonte de retenção e resistência, sem necessidade de pino intrarradicular. Indicado especialmente para molares com câmara ampla (maior volume = maior retenção), raízes curtas ou achatadas. Cimentado adesivamente, distribui forças de forma mais homogênea que o sistema pino-núcleo-coroa. Contraindicado em câmaras rasas ou muito estreitas.",
  },
  {
    id: "den-58",
    subject: "Dentística",
    topic: "Tecnologia em Dentística",
    difficulty: "Intermediário",
    question: "O fluxo digital chairside em Dentística com uso de CAD/CAM permite:",
    options: [
      "Eliminação completa da necessidade de técnico de laboratório em todos os casos",
      "Confecção de restaurações indiretas (inlay, onlay, coroa) em uma única sessão clínica, eliminando moldagens convencionais e restaurações provisórias",
      "Produção de restaurações de qualidade estética inferior às produzidas manualmente pelo laboratório",
      "Uso exclusivo de blocos de zircônia, sendo impossível fresar dissilicato de lítio no consultório",
    ],
    correctIndex: 1,
    explanation: "O fluxo digital chairside envolve: escaneamento intraoral → design da restauração no software CAD → fresagem do bloco cerâmico (dissilicato de lítio, zircônia) → caracterização/glazeamento rápido → cimentação, tudo em uma sessão. As vantagens são: sem moldagem convencional, sem temporário, menos consultas e maior previsibilidade. A qualidade dos melhores sistemas CAD/CAM é comparável ao trabalho laboratorial manual.",
  },

  // ── QUESTÕES ADICIONAIS ────────────────────────────────────────────────────

  {
    id: "den-59",
    subject: "Dentística",
    topic: "Preparos para Resina Composta",
    difficulty: "Avançado",
    question: "Na confecção de restauração de Classe IV (fratura de ângulo incisal) com resina composta, o bisel longo em esmalte é fundamental porque:",
    options: [
      "O bisel de 45° em esmalte é obrigatório em todas as classes por regulamentação",
      "Aumenta a área de adesão em esmalte (melhor substrato), elimina linha de restauração abrupta mimetizando a transição com o dente natural, e orienta favoravelmente os prismas de esmalte para a adesão",
      "Distribui as forças de tração laterais igualmente por todo o contorno, prevenindo fratura do material em oclusão",
      "Permite uso de menor quantidade de material, tornando a restauração mais econômica",
    ],
    correctIndex: 1,
    explanation: "O bisel longo e arredondado (chanfrado) em esmalte nas restaurações anteriores: (1) aumenta a área de adesão no melhor substrato disponível (esmalte); (2) mimetiza a transição dente-restauração eliminando a linha abrupta; (3) orienta os prismas de esmalte marginais favoravelmente à adesão e à incidência da luz de polimerização. É especialmente importante em Classe IV pela visibilidade e solicitação mecânica do ângulo incisal.",
  },
  {
    id: "den-60",
    subject: "Dentística",
    topic: "Resinas Compostas",
    difficulty: "Intermediário",
    question: "A diferença clínica mais importante entre resinas compostas microhíbridas e nanoparticuladas é:",
    options: [
      "As nanoparticuladas têm maior resistência à compressão, tornando-as ideais para restaurações de molares de alta carga oclusal",
      "As nanoparticuladas oferecem maior polibilidade e manutenção do brilho superficial a longo prazo; as microhíbridas são geralmente mais resistentes ao desgaste e preferidas para posteriores",
      "As microhíbridas não podem ser usadas em dentes anteriores por sua opacidade excessiva",
      "As nanoparticuladas têm maior contração de polimerização por não possuírem partículas de carga volumétricas",
    ],
    correctIndex: 1,
    explanation: "As resinas nanoparticuladas (partículas de 5–75 nm) oferecem polibilidade superior e melhor manutenção do brilho superficial por mais tempo, sendo preferidas para restaurações anteriores estéticas. As microhíbridas (carga maior e mais heterogênea) são geralmente mais resistentes ao desgaste oclusal e preferidas para posteriores de alta demanda. Na prática, resinas nano-híbridas modernas combinam as vantagens de ambas.",
  },
  {
    id: "den-61",
    subject: "Dentística",
    topic: "Adesão Dental",
    difficulty: "Avançado",
    question: "Os adesivos universais (multi-mode) permitem:",
    options: [
      "Uso sem condicionamento ácido em qualquer substrato, dispensando completamente o ácido fosfórico",
      "Flexibilidade de uso nas estratégias de condicionamento ácido total, autocondicionante ou seletivo; com monômeros funcionais (10-MDP) que se ligam quimicamente à hidroxiapatita, permitindo também adesão a zircônia e metais",
      "Substituição completa do primer e adesivo convencional, sendo aplicados diretamente sem qualquer preparo de superfície",
      "Uso exclusivo em protocolos de autocondicionamento, sendo contraindicados com ácido fosfórico",
    ],
    correctIndex: 1,
    explanation: "Os adesivos universais incorporam monômeros funcionais (10-MDP principalmente) que permitem ligação química com a hidroxiapatita e com substratos como zircônia e ligas metálicas. Podem ser usados com condicionamento ácido total (melhor em esmalte), autocondicionante (simplificado em dentina) ou seletivo (ácido apenas em esmalte). Essa versatilidade é sua principal característica.",
  },
  {
    id: "den-62",
    subject: "Dentística",
    topic: "Clareamento Dental",
    difficulty: "Básico",
    question: "A diferença fundamental entre peróxido de carbamida a 16% e peróxido de hidrogênio a 6% como agentes clareadores caseiros é:",
    options: [
      "O peróxido de carbamida a 16% é mais rápido e causa menos sensibilidade",
      "O peróxido de carbamida a 16% libera H₂O₂ (~5,6%) mais lentamente — ideal para uso noturno (8–10h); o H₂O₂ a 6% tem liberação imediata — ideal para uso diurno de curta duração (30–60 min)",
      "Apenas o peróxido de carbamida está aprovado para uso domiciliar; o H₂O₂ é exclusivo de consultório",
      "O peróxido de hidrogênio a 6% tem maior pH e é mais seguro para esmalte e dentina",
    ],
    correctIndex: 1,
    explanation: "O peróxido de carbamida se dissocia em H₂O₂ (~30% do total) e ureia. O PC 16% libera aproximadamente 5,6% de H₂O₂ de forma lenta e contínua — ideal para uso noturno de 6–10 horas em moldeiras. O H₂O₂ a 6% tem ação imediata e mais intensa, sendo usado em aplicações diurnas de 30–60 minutos. A escolha depende da preferência do paciente e do protocolo clínico.",
  },
  {
    id: "den-63",
    subject: "Dentística",
    topic: "Preparos para Resina Composta",
    difficulty: "Avançado",
    question: "O 'slot proximal' (preparo mínimo de Classe II) para resina composta é indicado quando:",
    options: [
      "A lesão cariosa interproximal é extensa, envolvendo mais de 50% da distância amelodentinária",
      "A lesão cariosa interproximal é pequena, limitada ao esmalte ou com mínimo envolvimento de dentina, permitindo preparo conservador sem caixa oclusal, preservando as cúspides marginais",
      "É impossível acessar a lesão interproximal sem remover a cúspide marginal",
      "Deve ser usado apenas em dentes decíduos onde a preservação de estrutura é menos crítica",
    ],
    correctIndex: 1,
    explanation: "O slot proximal (ou preparo em caixa mínima) é indicado para lesões cariosas interproximais pequenas (ICDAS 2–3), limitadas ao esmalte ou com mínimo envolvimento dentinário. O acesso é feito diretamente pela face proximal sem remover a crista marginal oclusal, preservando ao máximo a estrutura dental. É o exemplo mais conservador de preparo de Classe II, dentro da filosofia minimamente invasiva.",
  },
  {
    id: "den-64",
    subject: "Dentística",
    topic: "Estética Dental",
    difficulty: "Intermediário",
    question: "Para a seleção de cor de restaurações de resina composta anteriores, qual orientação é CORRETA?",
    options: [
      "A seleção de cor deve ser feita com o dente seco, pois a umidade distorce a verdadeira cor do dente",
      "A seleção deve ser feita com o dente hidratado, em condições de luz natural ou padronizada, avaliando matiz, croma e valor separadamente, preferencialmente no início da consulta quando o olho não está fadigado",
      "As escalas de cor comerciais (Vita Classical) são precisas e suficientes para todas as seleções, dispensando qualquer outro método",
      "A fotografia odontológica é apenas para documentação e não contribui para a seleção de cor",
    ],
    correctIndex: 1,
    explanation: "A seleção de cor deve ser feita: com o dente hidratado (o dente seco fica 2–4 valores mais claro pela desidratação), sob iluminação padronizada (luz natural indireta ou LED com IRC≥90), no início da consulta (o olho cansa para cores após 20–30 segundos), avaliando separadamente matiz, croma e valor. A fotografia odontológica é fundamental para a comunicação com o laboratório e documentação.",
  },
  {
    id: "den-65",
    subject: "Dentística",
    topic: "Exame Clínico",
    difficulty: "Básico",
    question: "A inspeção visual do dente com jato de ar seco ('inspeção seca') é utilizada porque:",
    options: [
      "O ar seco esteriliza a superfície dental eliminando bactérias para melhor visualização",
      "Dentes secos apresentam maior contraste entre esmalte sadio (esbranquiçado e opaco) e esmalte desmineralizado (mais branco-giz e opaco), além de melhor visualização de trincas e manchas mascaradas pelo filme aquoso",
      "O jato de ar gera vibração na dentina que ativa os receptores nervosos, permitindo localizar lesões sintomáticas",
      "A inspeção seca substitui completamente a radiografia interproximal no diagnóstico de cárie",
    ],
    correctIndex: 1,
    explanation: "Na inspeção seca, a aplicação de jato de ar por 5 segundos remove o filme aquoso superficial, revelando diferenças de opacidade que são invisíveis na inspeção úmida. Esmalte sadio hidratado é translúcido; esmalte desmineralizado (que perdeu cristalinidade) retém ar nos poros e aparece mais opaco ('tiza') após secagem. Esse contraste é fundamental para detectar lesões incipientes e trincas de esmalte.",
  },
  {
    id: "den-66",
    subject: "Dentística",
    topic: "Preparos Cavitários",
    difficulty: "Intermediário",
    question: "A 'forma de conveniência' em um preparo cavitário refere-se às:",
    options: [
      "Adaptações do preparo às preferências pessoais do operador quanto à técnica de fresagem",
      "Características do preparo que facilitam o acesso visual e instrumental ao interior da cavidade, a inserção e condensação do material restaurador e o acabamento, sem comprometer desnecessariamente a estrutura dental",
      "Ampliação do preparo para acomodar instrumentos de maior diâmetro para maior velocidade de trabalho",
      "Formato que minimiza o tempo de atendimento independentemente das demandas do caso clínico",
    ],
    correctIndex: 1,
    explanation: "A forma de conveniência engloba as características que permitem ao operador: visualizar adequadamente a cavidade, inserir e condensar o material restaurador com eficiência, realizar o acabamento e polimento sem dificuldade. Pode implicar extensão mínima do preparo além da lesão para facilitar o acesso, mas deve ser a mínima necessária para não sacrificar estrutura dental sadia desnecessariamente.",
  },
  {
    id: "den-67",
    subject: "Dentística",
    topic: "Ionômero de Vidro",
    difficulty: "Intermediário",
    question: "A Técnica Restauradora Atraumática (ART) utiliza CIV convencional porque:",
    options: [
      "É o único material que pode ser manipulado sem eletricidade, sendo adequado para uso em campo",
      "Além de não requerer equipamento elétrico (a cárie é removida com instrumentos manuais), o CIV libera flúor, adere quimicamente ao dente e é tolerado pelo tecido pulpar mesmo em cavidades profundas sem proteção pulpar prévia",
      "O CIV convencional tem maior resistência mecânica que o modificado por resina, sendo preferível para a ART",
      "O CIV permite fotopolimerização com luz LED de baixa potência, dispensando fotopolimerizador convencional",
    ],
    correctIndex: 1,
    explanation: "A ART foi desenvolvida para populações sem acesso a equipamentos odontológicos convencionais. O protocolo envolve remoção manual da cárie com curetas e restauração/selamento com CIV. O CIV é escolhido por: não precisar de fotopolimerização, liberar flúor (prevenção de cárie secundária e primária nas fissuras seladas), aderir quimicamente ao dente sem condicionamento ácido, e ser tolerado mesmo em cavidades profundas. Tem eficácia comprovada em programas de saúde pública.",
  },
  {
    id: "den-68",
    subject: "Dentística",
    topic: "Falhas em Restaurações",
    difficulty: "Avançado",
    question: "O reparo de restaurações de resina composta (ao invés da substituição completa) é preferível quando:",
    options: [
      "Nunca — restaurações danificadas devem sempre ser substituídas completamente para garantir qualidade",
      "A falha é localizada (fratura de ângulo, pigmentação marginal pontual), há estrutura dental e de restauração suficiente para nova adesão, e a substituição total removeria estrutura dental sadia desnecessariamente",
      "A restauração tem mais de 10 anos, pois reparos em restaurações antigas têm maior longevidade",
      "O material original é desconhecido, pois qualquer resina adere a qualquer substrato sem preparo específico",
    ],
    correctIndex: 1,
    explanation: "O reparo é indicado quando: a falha é localizada e não compromete a integridade estrutural da restauração, há substrato suficiente para nova adesão, e a substituição total seria mais destrutiva do que necessário. Vantagens do reparo: mais conservador (preserva estrutura dental e de restauração íntegra), mais rápido e econômico. Para o reparo de resina existente, é necessário preparar a superfície por microjateamento ou fresagem para remover a camada superficial e criar área para adesão.",
  },
  {
    id: "den-69",
    subject: "Dentística",
    topic: "Odontologia Minimamente Invasiva",
    difficulty: "Intermediário",
    question: "A remineralização de lesões cariosas não cavitadas baseia-se no princípio de que:",
    options: [
      "Uma vez desmineralizado, o esmalte não tem capacidade de remineralizar, sendo sempre necessário preparo cavitário",
      "O processo de desmineralização-remineralização é dinâmico: na presença de fluoreto, cálcio e fosfato suficientes e com redução do desafio ácido, lesões de mancha branca podem reincorporar mineral e regredir sem necessidade de preparo invasivo",
      "A remineralização é eficaz apenas para lesões proximais, não funcionando em superfícies oclusais",
      "A saliva artificial é suficiente para remineralizar qualquer lesão sem necessidade de produtos fluoretados",
    ],
    correctIndex: 1,
    explanation: "A lesão de mancha branca (desmineralização sem cavitação) representa dissolução parcial dos cristais de hidroxiapatita nos prismas de esmalte, mantendo a proteína orgânica intacta. Em ambiente com pH adequado e íons cálcio, fosfato e fluoreto disponíveis, os cristais de fluorapatita (mais ácido-resistentes) podem ser depositados nos microporos, revertendo a lesão. Isso é a base biológica da odontologia minimamente invasiva.",
  },
  {
    id: "den-70",
    subject: "Dentística",
    topic: "Hipersensibilidade Dentinária",
    difficulty: "Avançado",
    question: "O laser de baixa potência (LLLT) no tratamento da hipersensibilidade dentinária atua principalmente por:",
    options: [
      "Fotoablação da smear layer para expor dentina tubular íntegra e menos permeável",
      "Efeito biomodulador analgésico nas fibras nervosas A-delta e C da polpa (redução da velocidade de condução e aumento do limiar de excitação), com resultado imediato e sem efeitos adversos",
      "Aplicação de calor para desnaturar proteínas do fluido intratubular, obstruindo os túbulos permanentemente",
      "Ativação de sistemas de remineralização por fluorescência que depositam fluorapatita nos túbulos",
    ],
    correctIndex: 1,
    explanation: "O LLLT (tipicamente laser de diodo ou HeNe) atua na hipersensibilidade por efeito biomodulador: altera a condução nervosa das fibras A-delta (mielinizadas, dor aguda e rápida) e C (não mielinizadas, dor difusa), elevando o limiar de excitação. Há também possível efeito de bioestimulação promovendo obliteração tubular. A vantagem é o efeito imediato, sem necessidade de agentes químicos e sem anestesia.",
  },
  {
    id: "den-71",
    subject: "Dentística",
    topic: "Materiais Cerâmicos e Indiretos",
    difficulty: "Avançado",
    question: "A zircônia apresenta como desvantagem em relação ao dissilicato de lítio para coroas anteriores:",
    options: [
      "Menor resistência mecânica (flexural ~200 MPa vs. ~400 MPa do dissilicato)",
      "Dificuldade de adesão pois não é condicionável com HF (óxido não silicático), exigindo protocolos especiais de superfície (jateamento, primers de MDP), além de menor translucidez nas versões monolíticas tradicionais",
      "Impossibilidade de uso em sistemas CAD/CAM, sendo exclusivamente processada manualmente em laboratório",
      "Maior ocorrência de sensibilidade pós-operatória comparada a restaurações de dissilicato de lítio",
    ],
    correctIndex: 1,
    explanation: "A zircônia tem resistência mecânica muito superior (~900–1200 MPa para Y-TZP), sendo excelente para estruturas de próteses fixas extensas. Porém, para dentes anteriores, tem desvantagens estéticas: menor translucidez nas versões tradicionais (coroas monolíticas pareciam 'plástico'). As versões de alta translucidez (HT-zircônia, multi-layer) melhoram a estética mas reduzem resistência. A adesão requer tratamento especial com primers de MDP.",
  },
  {
    id: "den-72",
    subject: "Dentística",
    topic: "Facetas",
    difficulty: "Avançado",
    question: "A cimentação adesiva de facetas cerâmicas de dissilicato de lítio requer, após condicionamento com HF a 9%:",
    options: [
      "Aplicação de ácido fosfórico na cerâmica seguida de cimento de fosfato de zinco de baixa viscosidade",
      "Silanização da superfície condicionada (ligação química orgânico-inorgânico), aplicação de adesivo no dente, cimento resinoso de baixa viscosidade fotoativável, remoção de excessos e fotopolimerização final",
      "Uso exclusivo de cimento de ionômero de vidro para evitar sensibilidade pós-operatória",
      "Somente o condicionamento com HF é suficiente — a rugosidade gerada garante retenção mecânica sem cimento adesivo",
    ],
    correctIndex: 1,
    explanation: "O protocolo de cimentação adesiva de cerâmica silicática envolve: (1) condicionamento da peça com HF a 9% por 20–60 s → cria microporos; (2) silanização (primer bifuncional que une parte inorgânica da cerâmica à parte orgânica da resina); (3) condicionamento ácido e adesivo no dente; (4) cimento resinoso de baixa viscosidade (evitar excessos); (5) fotopolimerização incremental. A silanização é o passo mais crítico para a longevidade.",
  },
  {
    id: "den-73",
    subject: "Dentística",
    topic: "Restaurações Anteriores Diretas",
    difficulty: "Intermediário",
    question: "No fechamento de diastemas com resina composta direta, um erro técnico comum é:",
    options: [
      "Usar bisel na face vestibular, pois isso prejudica a estética",
      "Não realizar enceramento diagnóstico prévio, resultando em proporções incorretas dos dentes, e não checar a guia canina e a função em lateralidade antes de entregar a restauração",
      "Usar resina composta microhíbrida ao invés de nanoparticulada",
      "Realizar isolamento absoluto, pois o dique distorce a visão da proporção dos dentes durante o procedimento",
    ],
    correctIndex: 1,
    explanation: "O fechamento de diastemas sem planejamento prévio frequentemente resulta em dentes com proporções ruins (muito largos ou com ângulos de transição inadequados). O enceramento diagnóstico (e posterior mock-up) é fundamental para validar o resultado antes do procedimento definitivo. Além disso, a função deve ser verificada: o fechamento pode interferir na guia canina ou criar contatos em lateralidade, levando a sobrecargas.",
  },
  {
    id: "den-74",
    subject: "Dentística",
    topic: "Proteção Pulpar",
    difficulty: "Avançado",
    question: "O forramento com cimento de ionômero de vidro em preparos profundos é indicado para:",
    options: [
      "Substituir completamente a dentina removida e proteger a polpa de qualquer estímulo térmico",
      "Cobrir dentina afetada remanescente aproveitando a bioatividade do CIV (liberação de flúor, adesão química), com espessura máxima de 0,5–1 mm para não comprometer a retenção adesiva do sistema restaurador",
      "Substituir o uso de sistema adesivo em cavidades profundas, simplificando o protocolo",
      "Criar base rígida de 2–3 mm que previna completamente a transmissão de forças oclusais à polpa",
    ],
    correctIndex: 1,
    explanation: "O forramento com CIV em preparos profundos (mas sem exposição pulpar) serve para: cobrir dentina afetada remanescente com efeito anticariogênico do flúor liberado; promover ligação química ao dente; criar substrato mais compatível com o sistema adesivo. A espessura deve ser mínima (0,5–1 mm) para não comprometer a espessura e retenção do material restaurador final e não criar descontinuidade que comprometa a adesão.",
  },
  {
    id: "den-75",
    subject: "Dentística",
    topic: "Restaurações Posteriores Diretas",
    difficulty: "Avançado",
    question: "Qual das seguintes afirmativas sobre a reconstrução de cúspides com resina composta é CORRETA?",
    options: [
      "Cúspides de suporte não devem ser reconstruídas com resina direta, apenas com restaurações indiretas inlay/onlay",
      "A reconstrução de cúspides com resina é tecnicamente viável quando há estrutura remanescente suficiente; deve-se usar resina condensável de alta resistência, técnica incremental, e verificar criteriosamente a oclusão após restauração",
      "O amálgama é superior à resina na reconstrução de cúspides em qualquer situação clínica",
      "A reconstrução de cúspides com resina direta tem longevidade comprovadamente inferior a 2 anos, sendo sempre preferível restauração indireta",
    ],
    correctIndex: 1,
    explanation: "A reconstrução de cúspides com resina composta direta é indicação aceita quando há substrato para adesão adequado. Fatores para sucesso: uso de resina condensável de alta resistência à fratura, técnica incremental estrita, verificação minuciosa da oclusão (riscos de fratura por contatos prematuros), acabamento e polimento cuidadosos. Estudos mostram longevidade comparável às indiretas em médio prazo quando bem executadas.",
  },
  {
    id: "den-76",
    subject: "Dentística",
    topic: "Lesões Não Cariosas",
    difficulty: "Avançado",
    question: "No tratamento de lesões cervicais não cariosas (LCNC) com restoração de resina composta, o principal desafio técnico é:",
    options: [
      "A dificuldade de seleção de cor, pois as LCNCs geralmente apresentam coloração diferente do dente adjacente",
      "O controle de umidade e isolamento adequados em região gengival, a dificuldade de adesão ao cemento exposto e à dentina esclerótica (menor permeabilidade e adesão), e a necessidade de identificar e controlar a etiologia para evitar recidiva",
      "A necessidade obrigatória de anestesia local, pois as LCNCs sempre causam dor intensa ao toque",
      "A impossibilidade de usar isolamento absoluto na região cervical, tornando necessário o uso de sistema adesivo autocondicionante exclusivamente",
    ],
    correctIndex: 1,
    explanation: "As LCNC apresentam desafios clínicos específicos: a região cervical é difícil de isolar (fluido sulcular, sangue); o cemento tem menor superfície para adesão; a dentina esclerótica (reação defensiva em LCNC por erosão/abfração) tem túbulos obliterados com menor permeabilidade, exigindo condicionamento ácido mais agressivo ou pré-tratamento com silano. Fundamental: identificar e corrigir a etiologia (refluxo, escovação inadequada, bruxismo) para evitar recidiva.",
  },
  {
    id: "den-77",
    subject: "Dentística",
    topic: "Acabamento e Polimento",
    difficulty: "Intermediário",
    question: "No polimento de restaurações cerâmicas, diferentemente das restaurações de resina composta, deve-se:",
    options: [
      "Usar pastas diamantadas abrasivas de alta granulação para remover irregularidades maiores",
      "Após qualquer ajuste, reglazear ou polir com instrumentos específicos para cerâmica (diamantadas extrafinas + pastas de óxido de alumínio), pois a cerâmica ajustada fica rugosa e desgasta o esmalte antagonista",
      "Usar borrachas de polimento de silicone convencionais (as mesmas usadas para resina), pois cerâmica e resina têm dureza similar",
      "Não realizar nenhum procedimento especial pois as cerâmicas feldspáticas são autopolíveis",
    ],
    correctIndex: 1,
    explanation: "A cerâmica glazeada possui superfície muito lisa e brilhante. Qualquer ajuste com instrumentos rotatórios (brocas, pedras) destrói o glaze, deixando superfície rugosa que: desgasta o esmalte antagonista, acumula biofilme, pigmenta e causa problemas estéticos. Após ajustes, é obrigatório polir a cerâmica com sequência completa (diamantadas extrafinas → pastas especializadas) ou, preferencialmente, devolvê-la ao laboratório para reglaze.",
  },
  {
    id: "den-78",
    subject: "Dentística",
    topic: "Plano de Tratamento",
    difficulty: "Avançado",
    question: "A interface entre Dentística e Periodontia é clinicamente relevante porque:",
    options: [
      "As duas especialidades são independentes e não interferem entre si em tratamentos rotineiros",
      "Margens subgengivais de restaurações invadem o espaço biológico (sulco + epitélio juncional + inserção conjuntiva ~2 mm), causando inflamação crônica, perda de inserção e retração gengival irreversível",
      "O cimento de ionômero de vidro é contraindicado em restaurações próximas ao periodonto por ser tóxico aos fibroblastos gengivais",
      "O aumento de coroa cirúrgico só é indicado após falha comprovada de três restaurações cervicais consecutivas",
    ],
    correctIndex: 1,
    explanation: "O espaço biológico (dimensão biológica) corresponde ao sulco gengival + epitélio juncional + inserção conjuntiva, totalizando ~2–3 mm da crista óssea alveolar ao nível gengival. Margens de restaurações que invadem esse espaço causam inflamação periodontal crônica, perda de inserção e retração gengival. Quando necessário colocar margens subgengivais, pode ser necessário aumento de coroa cirúrgico prévio para reposicionar o espaço biológico apicalmente.",
  },
  {
    id: "den-79",
    subject: "Dentística",
    topic: "Histologia dos Tecidos Dentais",
    difficulty: "Intermediário",
    question: "As periquimácias do esmalte dental são clinicamente relevantes porque:",
    options: [
      "São canalículos que atravessam o esmalte radialmente, sendo vias de difusão de ácidos na cárie",
      "São sulcos transversais na superfície do esmalte que correspondem à emergência das estrias de Retzius, sendo mais evidentes em dentes jovens; sua preservação é importante para manter a textura de superfície natural nas restaurações estéticas",
      "Representam áreas de descalcificação natural que devem ser tratadas profilaticamente com flúor",
      "São estruturas que aumentam com o envelhecimento dental por deposição progressiva de minerais",
    ],
    correctIndex: 1,
    explanation: "As periquimácias são os sulcos transversais visíveis na superfície do esmalte, formadas onde as estrias de Retzius emergem. São mais proeminentes em dentes recém-erupcionados e jovens (conferem a textura 'ondulada' característica), e tendem a desaparecer com o desgaste ao longo do tempo. Em restaurações estéticas de dentes anteriores, recriar a textura das periquimácias com brocas ou discos é fundamental para o mimetismo com o dente natural.",
  },
  {
    id: "den-80",
    subject: "Dentística",
    topic: "Tecnologia em Dentística",
    difficulty: "Intermediário",
    question: "Os vidros bioativos representam uma evolução dos ionômeros de vidro tradicionais porque:",
    options: [
      "Têm resistência mecânica tão superior que substituem as resinas compostas em restaurações posteriores de alto estresse",
      "Além de liberar flúor, liberam íons de cálcio, sódio e silício que promovem remineralização ativa da dentina e esmalte adjacentes, formando hidroxiapatita carbonatada na interface dente-material com efeito terapêutico além do meramente restaurador",
      "Eliminam completamente a necessidade de isolamento do campo operatório por sua resistência intrínseca à umidade",
      "São materiais exclusivamente laboratoriais (indiretos), sem versão para aplicação clínica direta",
    ],
    correctIndex: 1,
    explanation: "Os vidros bioativos (como o Activa, Cention N com vidros bioativos, NovaMin) liberam não apenas flúor mas também cálcio, fosfato e silício. Esses íons precipitam como hidroxiapatita carbonatada na superfície dental adjacente, promovendo remineralização ativa. Essa bioatividade 'terapêutica' — além do simples preenchimento da cavidade — representa o conceito de materiais restauradores que participam ativamente da homeostase mineral do dente.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PRÓTESE PARCIAL REMOVÍVEL
  // ══════════════════════════════════════════════════════════════════════════

  // ── CAP. 1 — CONCEITOS GERAIS E INDICAÇÕES ────────────────────────────────
  {
    id: "ppr-01",
    subject: "Prótese Parcial Removível",
    topic: "Conceitos Gerais e Indicações",
    difficulty: "Básico",
    question: "O que caracteriza uma prótese parcial removível (PPR)?",
    options: [
      "Prótese fixa cimentada sobre dentes preparados",
      "Prótese que repõe dentes ausentes em arco parcialmente edêntulo e pode ser removida pelo paciente",
      "Prótese que substitui todos os dentes de um arco edêntulo total",
      "Prótese unitária aparafusada sobre implante",
    ],
    correctIndex: 1,
    explanation:
      "A PPR repõe um ou mais dentes (mas não todos) em um arco parcialmente edêntulo e é removível pelo próprio paciente para higienização. Difere da prótese total (arco totalmente edêntulo) e da prótese fixa (cimentada, não removível).",
  },
  {
    id: "ppr-02",
    subject: "Prótese Parcial Removível",
    topic: "Conceitos Gerais e Indicações",
    difficulty: "Básico",
    question: "Qual situação clínica favorece a indicação de PPR em vez de prótese parcial fixa?",
    options: [
      "Espaço protético curto com um único dente ausente entre dois pilares hígidos",
      "Áreas edêntulas extensas, ausência de pilar posterior (extremidade livre) ou necessidade de suporte de rebordo",
      "Paciente jovem com excelente higiene e dentes pilares íntegros",
      "Espaço protético com perda óssea mínima e oclusão estável",
    ],
    correctIndex: 1,
    explanation:
      "A PPR é especialmente indicada em espaços edêntulos extensos, em arcos com extremidade livre (sem pilar posterior, onde a ponte fixa em cantiléver seria desfavorável) e quando há necessidade de devolver suporte de rebordo/tecido. Espaços curtos com pilares hígidos favorecem prótese fixa ou implante.",
  },
  {
    id: "ppr-03",
    subject: "Prótese Parcial Removível",
    topic: "Conceitos Gerais e Indicações",
    difficulty: "Básico",
    question: "Como são classificadas as PPRs quanto ao tipo de suporte?",
    options: [
      "Dentossuportada, mucossuportada e dentomucossuportada",
      "Provisória, definitiva e imediata",
      "Metálica, acrílica e flexível",
      "Anterior, posterior e total",
    ],
    correctIndex: 0,
    explanation:
      "Quanto ao suporte, a PPR pode ser dentossuportada (forças transmitidas apenas aos dentes pilares, como nos espaços limitados anterior e posteriormente por dentes — Classe III), mucossuportada (raro, apoio só na mucosa) ou dentomucossuportada (extremidade livre, em que o suporte é compartilhado entre dente e rebordo).",
  },
  {
    id: "ppr-04",
    subject: "Prótese Parcial Removível",
    topic: "Conceitos Gerais e Indicações",
    difficulty: "Intermediário",
    question: "Qual é uma desvantagem biológica relevante da PPR em relação à prótese fixa ou implantossuportada?",
    options: [
      "Impossibilidade de repor mais de um dente",
      "Maior acúmulo de biofilme e risco aumentado de cárie e doença periodontal nos pilares",
      "Custo muito mais elevado",
      "Incapacidade de devolver estética anterior",
    ],
    correctIndex: 1,
    explanation:
      "Por ser removível e cobrir superfícies dentais e gengivais com seus componentes, a PPR favorece a retenção de biofilme. Sem higiene rigorosa, há maior risco de cárie nos pilares, gengivite e doença periodontal. O controle de placa é determinante para o prognóstico.",
  },
  {
    id: "ppr-05",
    subject: "Prótese Parcial Removível",
    topic: "Conceitos Gerais e Indicações",
    difficulty: "Intermediário",
    question: "Segundo os princípios biomecânicos da PPR, quais são os objetivos fundamentais do planejamento?",
    options: [
      "Apenas devolver estética ao paciente",
      "Preservar as estruturas remanescentes (dentes e rebordo), distribuir forças adequadamente e devolver função e estética",
      "Maximizar a retenção, ignorando o suporte e a estabilidade",
      "Cobrir a maior área de mucosa possível",
    ],
    correctIndex: 1,
    explanation:
      "O tripé biomecânico da PPR é suporte (resistência às forças verticais de intrusão), estabilidade (resistência a forças horizontais) e retenção (resistência ao deslocamento de remoção). O objetivo maior é preservar as estruturas remanescentes ao mesmo tempo em que se devolve função e estética.",
  },

  // ── CAP. 2 — CLASSIFICAÇÃO DE KENNEDY ─────────────────────────────────────
  {
    id: "ppr-06",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Básico",
    question: "Na classificação de Kennedy, o que define a Classe I?",
    options: [
      "Área edêntula unilateral posterior aos dentes remanescentes",
      "Áreas edêntulas bilaterais localizadas posteriormente aos dentes remanescentes (extremidade livre bilateral)",
      "Área edêntula unilateral limitada anterior e posteriormente por dentes",
      "Área edêntula única que cruza a linha média, anterior aos dentes remanescentes",
    ],
    correctIndex: 1,
    explanation:
      "A Classe I de Kennedy corresponde a áreas edêntulas bilaterais posteriores aos dentes naturais remanescentes — as clássicas extremidades livres bilaterais (dentomucossuportada). É a situação mais desafiadora biomecanicamente.",
  },
  {
    id: "ppr-07",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Básico",
    question: "A Classe II de Kennedy é definida por:",
    options: [
      "Área edêntula bilateral posterior",
      "Área edêntula unilateral posterior aos dentes remanescentes (extremidade livre unilateral)",
      "Área edêntula limitada por dentes anterior e posteriormente",
      "Espaço edêntulo anterior cruzando a linha média",
    ],
    correctIndex: 1,
    explanation:
      "A Classe II é uma área edêntula unilateral localizada posteriormente aos dentes remanescentes — uma extremidade livre de um só lado. Como há dente posterior do outro lado, o comportamento biomecânico é assimétrico.",
  },
  {
    id: "ppr-08",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Básico",
    question: "A Classe III de Kennedy corresponde a:",
    options: [
      "Extremidade livre bilateral",
      "Área edêntula unilateral limitada por dentes naturais anterior e posteriormente (dentossuportada)",
      "Área edêntula anterior que cruza a linha média",
      "Ausência de todos os molares",
    ],
    correctIndex: 1,
    explanation:
      "Na Classe III há uma área edêntula unilateral com dentes naturais tanto anterior quanto posteriormente ao espaço. Por ser limitada por pilares dos dois lados, é tipicamente dentossuportada — a situação mais favorável biomecanicamente.",
  },
  {
    id: "ppr-09",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Básico",
    question: "A Classe IV de Kennedy é caracterizada por:",
    options: [
      "Área edêntula posterior bilateral",
      "Área edêntula única, bilateral, anterior aos dentes remanescentes e cruzando a linha média",
      "Duas áreas edêntulas posteriores",
      "Espaço unilateral limitado por dentes",
    ],
    correctIndex: 1,
    explanation:
      "A Classe IV é uma área edêntula única e bilateral situada anteriormente aos dentes remanescentes, cruzando a linha média (ex.: perda dos incisivos). Por definição, a Classe IV NÃO admite modificações.",
  },
  {
    id: "ppr-10",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Intermediário",
    question: "O que são as 'modificações' na classificação de Kennedy-Applegate?",
    options: [
      "Alterações no desenho do grampo",
      "Áreas edêntulas adicionais além da que determina a classe, designadas pelo número (modificação 1, 2...)",
      "Mudanças no tipo de conector maior",
      "Dentes que precisam de tratamento endodôntico",
    ],
    correctIndex: 1,
    explanation:
      "As modificações são áreas edêntulas adicionais àquela que define a classe. Elas são nomeadas pelo número de espaços extras (modificação 1, modificação 2...), e não pela extensão. Ex.: Classe I modificação 1 = extremidade livre bilateral + um espaço adicional limitado por dentes.",
  },
  {
    id: "ppr-11",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Intermediário",
    question: "Segundo as regras de Applegate, qual área edêntula determina a classificação de Kennedy?",
    options: [
      "A área edêntula mais anterior",
      "A maior área edêntula",
      "A área edêntula mais posterior",
      "A primeira área a ser reabilitada",
    ],
    correctIndex: 2,
    explanation:
      "Pela regra de Applegate, a área edêntula mais posterior é a que determina a classe principal. As demais áreas, mais anteriores, passam a ser consideradas modificações. Por isso uma extremidade livre posterior 'domina' a classificação.",
  },
  {
    id: "ppr-12",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Intermediário",
    question: "De acordo com as regras de Applegate, a classificação deve ser feita:",
    options: [
      "Antes de qualquer extração planejada",
      "Após as extrações que fizerem parte do plano de tratamento",
      "Apenas com base na radiografia panorâmica inicial",
      "Somente após a instalação da prótese",
    ],
    correctIndex: 1,
    explanation:
      "Applegate determina que a classificação seja feita APÓS as extrações previstas no plano de tratamento, pois remover um dente pode mudar a classe. Também: terceiros molares ausentes e não repostos não entram na classificação, e o dente mais posterior ausente e não reposto não é considerado.",
  },
  {
    id: "ppr-13",
    subject: "Prótese Parcial Removível",
    topic: "Classificação de Kennedy",
    difficulty: "Avançado",
    question: "Um paciente apresenta ausência dos dentes 36, 37, 46 e 47 (molares inferiores bilaterais) e também do 24 (pré-molar superior). Considerando apenas o arco inferior, qual é a classificação de Kennedy?",
    options: [
      "Classe II modificação 1",
      "Classe III modificação 1",
      "Classe I (extremidade livre bilateral)",
      "Classe IV",
    ],
    correctIndex: 2,
    explanation:
      "No arco inferior há perda bilateral de molares posteriores aos dentes remanescentes, sem dente distal — duas extremidades livres bilaterais. Isso é Classe I. O 24 é de outro arco e não influencia a classificação do arco inferior. Como não há outra área edêntula no mesmo arco inferior, não há modificação.",
  },

  // ── CAP. 3 — COMPONENTES DA PPR ───────────────────────────────────────────
  {
    id: "ppr-14",
    subject: "Prótese Parcial Removível",
    topic: "Componentes da PPR",
    difficulty: "Básico",
    question: "Quais são os principais componentes de uma PPR de armação metálica?",
    options: [
      "Apenas dentes artificiais e base de resina",
      "Conector maior, conectores menores, apoios, retentores diretos, retentores indiretos e bases com dentes artificiais",
      "Somente grampos e selas",
      "Coroa, núcleo e pino",
    ],
    correctIndex: 1,
    explanation:
      "A armação da PPR é composta por: conector maior (une os componentes dos dois lados/hemiarcos), conectores menores (ligam a armação aos apoios e grampos), apoios (suporte vertical), retentores diretos/grampos (retenção), retentores indiretos (resistem ao deslocamento das selas) e bases com dentes artificiais.",
  },
  {
    id: "ppr-15",
    subject: "Prótese Parcial Removível",
    topic: "Componentes da PPR",
    difficulty: "Básico",
    question: "Qual é a função do conector maior na PPR?",
    options: [
      "Reter a prótese contra forças de remoção",
      "Unir os componentes de um lado do arco aos do outro lado, conferindo rigidez ao conjunto",
      "Apoiar a prótese no fundo de sulco",
      "Promover estética anterior",
    ],
    correctIndex: 1,
    explanation:
      "O conector maior é a estrutura que une os componentes situados em um lado do arco aos do lado oposto. Sua característica essencial é a RIGIDEZ, que permite a distribuição adequada das forças por toda a prótese e protege os tecidos.",
  },
  {
    id: "ppr-16",
    subject: "Prótese Parcial Removível",
    topic: "Componentes da PPR",
    difficulty: "Intermediário",
    question: "Por que o conector maior deve ser obrigatoriamente rígido?",
    options: [
      "Para aumentar a retenção friccional nos pilares",
      "Para distribuir e dissipar as forças funcionais entre os elementos de suporte, evitando concentração de carga e trauma aos pilares e rebordo",
      "Para facilitar a remoção pelo paciente",
      "Para permitir flexão durante a mastigação",
    ],
    correctIndex: 1,
    explanation:
      "A rigidez do conector maior é fundamental porque ele distribui as forças aplicadas em qualquer ponto da prótese para todos os elementos de suporte (dentes e rebordo). Um conector flexível concentraria forças, causando trauma localizado, torque nos pilares e desconforto.",
  },
  {
    id: "ppr-17",
    subject: "Prótese Parcial Removível",
    topic: "Componentes da PPR",
    difficulty: "Intermediário",
    question: "Qual componente da PPR transmite as forças oclusais diretamente para os dentes pilares através dos nichos?",
    options: [
      "O conector maior",
      "O apoio (oclusal, incisal ou de cíngulo)",
      "A base de resina acrílica",
      "O braço de oposição do grampo",
    ],
    correctIndex: 1,
    explanation:
      "O apoio é o elemento que se assenta no nicho preparado no dente pilar e transmite as forças oclusais ao longo eixo do dente, fornecendo SUPORTE vertical. Também impede o assentamento da prótese sobre os tecidos moles e mantém os componentes do grampo na posição planejada.",
  },

  // ── CAP. 4 — CONECTORES MAIORES ───────────────────────────────────────────
  {
    id: "ppr-18",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Básico",
    question: "Qual é o conector maior inferior mais utilizado quando há espaço suficiente no assoalho bucal?",
    options: [
      "Placa lingual",
      "Barra lingual",
      "Barra labial",
      "Placa palatina total",
    ],
    correctIndex: 1,
    explanation:
      "A barra lingual é o conector maior inferior de primeira escolha por cobrir menos tecido. É indicada quando há espaço vertical suficiente entre a margem gengival lingual e o assoalho da boca (em geral ≥ 7–8 mm).",
  },
  {
    id: "ppr-19",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Intermediário",
    question: "Qual é o espaço vertical mínimo necessário, entre a margem gengival lingual e o assoalho da boca, para a indicação de uma barra lingual?",
    options: [
      "Cerca de 3 mm",
      "Cerca de 5 mm",
      "Cerca de 7 a 8 mm",
      "Cerca de 12 mm",
    ],
    correctIndex: 2,
    explanation:
      "São necessários aproximadamente 7 a 8 mm de altura para acomodar uma barra lingual (cuja secção é em meia-pera, com ~4–5 mm de altura) mantendo sua borda superior a pelo menos 3 mm da margem gengival livre. Com menos espaço, indica-se a placa lingual.",
  },
  {
    id: "ppr-20",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Intermediário",
    question: "Em qual situação a placa lingual é preferível à barra lingual?",
    options: [
      "Quando há grande profundidade de assoalho bucal",
      "Quando o espaço vertical é insuficiente (< 7–8 mm) ou se deseja ferulizar dentes anteroinferiores com suporte periodontal reduzido",
      "Quando o paciente tem excelente higiene",
      "Quando se quer minimizar o contato com os dentes",
    ],
    correctIndex: 1,
    explanation:
      "A placa lingual é indicada quando o espaço para barra lingual é insuficiente, quando há tórus mandibular volumoso, ou quando se deseja estabilizar/ferulizar dentes anteroinferiores periodontalmente comprometidos. Exige apoios nas extremidades para não intruir os dentes.",
  },
  {
    id: "ppr-21",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Básico",
    question: "Qual conector maior superior oferece grande rigidez com bom suporte e é frequentemente usado em extremidades livres bilaterais (Classe I superior)?",
    options: [
      "Barra palatina única estreita",
      "Banda/placa palatina ou conector palatino em U",
      "Barra lingual",
      "Conector em ferradura simples e fino",
    ],
    correctIndex: 1,
    explanation:
      "Em Classe I superior, conectores que oferecem ampla cobertura e rigidez — como a banda palatina larga (placa palatina) ou a barra palatina ântero-posterior (em duplo) — são preferidos para distribuir as forças das selas de extremidade livre e dar suporte.",
  },
  {
    id: "ppr-22",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Intermediário",
    question: "Quando se indica o conector maior superior em forma de 'U' (ferradura)?",
    options: [
      "Sempre que houver extremidade livre bilateral, por ser o mais rígido",
      "Na presença de tórus palatino volumoso que não possa ser removido, ou quando há necessidade de não cobrir a região anterior do palato",
      "Quando se deseja o máximo de suporte mucoso",
      "Em arcos totalmente dentados",
    ],
    correctIndex: 1,
    explanation:
      "O conector em 'U' (ferradura) é uma escolha de compromisso, indicado principalmente quando há tórus palatino inoperável ou necessidade de evitar a cobertura de certas áreas. É o conector palatino menos rígido, então deve ser evitado quando rigidez é prioritária (ex.: extremidades livres).",
  },
  {
    id: "ppr-23",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Avançado",
    question: "Qual é a vantagem biomecânica da barra palatina ântero-posterior (conector palatino em duplo) em relação à barra palatina única?",
    options: [
      "Cobre mais mucosa e aumenta o suporte mucoso",
      "Combina rigidez elevada com cobertura tecidual reduzida, devido à configuração que resiste melhor à flexão",
      "Permite o uso sem qualquer apoio dentário",
      "Elimina a necessidade de retentores indiretos",
    ],
    correctIndex: 1,
    explanation:
      "A configuração ântero-posterior (duas barras unidas lateralmente formando uma estrutura fechada) confere alta rigidez resistindo à flexão, ao mesmo tempo em que deixa a porção central do palato exposta, reduzindo a cobertura tecidual. É excelente quando se quer rigidez sem cobertura total.",
  },
  {
    id: "ppr-24",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Maiores",
    difficulty: "Avançado",
    question: "A borda superior de uma barra lingual deve estar posicionada a qual distância da margem gengival livre dos dentes?",
    options: [
      "Em contato direto com a margem gengival",
      "Pelo menos 3 mm abaixo da margem gengival livre",
      "Exatamente 1 mm abaixo da margem",
      "Acima da margem, cobrindo o terço cervical",
    ],
    correctIndex: 1,
    explanation:
      "A borda superior da barra lingual deve ficar a pelo menos 3 mm da margem gengival livre para evitar impacção de alimentos e irritação gengival. Se não há espaço para isso (assoalho raso), opta-se pela placa lingual, que então contata os dentes com apoios definidos.",
  },

  // ── CAP. 5 — CONECTORES MENORES ───────────────────────────────────────────
  {
    id: "ppr-25",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Menores",
    difficulty: "Básico",
    question: "Qual é a função do conector menor na PPR?",
    options: [
      "Reter a prótese diretamente nos undercuts",
      "Unir o conector maior aos demais componentes (apoios, grampos, bases), transferindo forças entre eles",
      "Cobrir todo o palato",
      "Substituir os dentes ausentes esteticamente",
    ],
    correctIndex: 1,
    explanation:
      "Os conectores menores ligam o conector maior aos outros componentes da prótese — apoios, grampos e bases. Eles transferem as forças funcionais dos dentes para o restante da estrutura e, reciprocamente, distribuem o estresse da prótese aos pilares.",
  },
  {
    id: "ppr-26",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Menores",
    difficulty: "Intermediário",
    question: "Como o conector menor deve se relacionar com as superfícies dentárias adjacentes (espaços interproximais)?",
    options: [
      "Deve ser fino e arredondado, sem contato",
      "Deve ocupar o nicho interproximal de forma triangular/arredondada, contatando os planos-guia sem invadir áreas retentivas e respeitando a papila",
      "Deve ser largo e plano, cobrindo a papila gengival",
      "Deve engajar a região retentiva para reter a prótese",
    ],
    correctIndex: 1,
    explanation:
      "O conector menor que cruza a margem gengival deve fazê-lo em ângulo reto, ser levemente triangular/arredondado, situar-se nos embrasures (nichos) e contatar os planos-guia. Não deve invadir áreas retentivas (para permitir inserção) nem comprimir a papila. Deve ter espessura suficiente para rigidez.",
  },
  {
    id: "ppr-27",
    subject: "Prótese Parcial Removível",
    topic: "Conectores Menores",
    difficulty: "Avançado",
    question: "O conector menor que se estende ao longo de um plano-guia proximal de um pilar de extremidade livre (proximal plate) tem qual papel adicional no sistema RPI?",
    options: [
      "Aumenta a retenção friccional permanentemente",
      "Atua como elemento de reciprocidade e, sob carga funcional da sela, desliza para gengival liberando o pilar de torque (efeito de alívio de estresse)",
      "Funciona como apoio oclusal principal",
      "Serve de retentor indireto",
    ],
    correctIndex: 1,
    explanation:
      "No sistema RPI (Rest mesial, Proximal plate, I-bar), a placa proximal contata o plano-guia e oferece reciprocidade e estabilização. Quando a sela de extremidade livre recebe carga e gira em torno do apoio mesial, a placa proximal e a barra I se desengajam (movem-se para gengival e mesial), reduzindo o torque transmitido ao pilar.",
  },

  // ── CAP. 6 — APOIOS E NICHOS ──────────────────────────────────────────────
  {
    id: "ppr-28",
    subject: "Prótese Parcial Removível",
    topic: "Apoios e Nichos",
    difficulty: "Básico",
    question: "Qual é a principal função do apoio oclusal e seu respectivo nicho?",
    options: [
      "Reter a prótese contra a remoção",
      "Fornecer suporte vertical, transmitindo as forças oclusais ao longo eixo do dente pilar",
      "Promover estética",
      "Selar a borda da prótese",
    ],
    correctIndex: 1,
    explanation:
      "O apoio oclusal assentado no nicho fornece SUPORTE vertical, dirigindo as forças oclusais ao longo eixo do dente pilar. Também evita o deslocamento gengival da prótese, mantém os grampos na posição correta e impede a extrusão do pilar.",
  },
  {
    id: "ppr-29",
    subject: "Prótese Parcial Removível",
    topic: "Apoios e Nichos",
    difficulty: "Intermediário",
    question: "Qual deve ser a forma ideal do nicho oclusal preparado no dente pilar?",
    options: [
      "Plano e raso, paralelo à superfície oclusal",
      "Em forma de colher (triangular arredondada), com o assoalho inclinado para o centro do dente, mais profundo na porção central",
      "Retangular com ângulos vivos a 90°",
      "Em forma de caixa retentiva, com paredes paralelas",
    ],
    correctIndex: 1,
    explanation:
      "O nicho oclusal deve ter forma de colher (oval/triangular arredondada), com o assoalho inclinado para o centro do dente. O ângulo formado entre o apoio e o conector menor deve ser MENOR que 90° para que as forças sejam dirigidas ao longo eixo do dente, e não lateralmente.",
  },
  {
    id: "ppr-30",
    subject: "Prótese Parcial Removível",
    topic: "Apoios e Nichos",
    difficulty: "Intermediário",
    question: "Por que o ângulo entre o apoio oclusal e o conector menor deve ser menor que 90°?",
    options: [
      "Para facilitar a fundição da peça",
      "Para que as forças oclusais sejam direcionadas ao longo eixo do dente, e não como componente horizontal que desloca o pilar",
      "Para aumentar a retenção friccional",
      "Para reduzir a espessura do metal",
    ],
    correctIndex: 1,
    explanation:
      "Um ângulo menor que 90° (assoalho do nicho inclinado para o centro do dente) garante que a força seja transmitida verticalmente, ao longo eixo do dente. Um ângulo maior ou igual a 90° (nicho raso/plano) geraria um vetor horizontal, deslizando o apoio e aplicando força lateral indesejável ao pilar.",
  },
  {
    id: "ppr-31",
    subject: "Prótese Parcial Removível",
    topic: "Apoios e Nichos",
    difficulty: "Intermediário",
    question: "Em dentes anteriores, qual tipo de apoio é geralmente preferível e por quê?",
    options: [
      "Apoio incisal, por ser mais estético",
      "Apoio de cíngulo, por estar mais próximo do centro de rotação do dente e ser mais estético e menos lesivo que o incisal",
      "Apoio oclusal, único possível",
      "Nenhum apoio é necessário em anteriores",
    ],
    correctIndex: 1,
    explanation:
      "Em caninos e incisivos, o apoio de cíngulo é preferível ao incisal: fica mais próximo do longo eixo/centro de rotação (gerando menor braço de alavanca), é mais estético e expõe menos o apoio a forças deflexivas. O apoio incisal, embora funcional, é menos estético e cria maior alavanca.",
  },
  {
    id: "ppr-32",
    subject: "Prótese Parcial Removível",
    topic: "Apoios e Nichos",
    difficulty: "Avançado",
    question: "Em uma extremidade livre (Classe I/II), por que se prefere o apoio na face MESIAL do pilar (mesial rest) em vez da face distal?",
    options: [
      "Por ser mais fácil de preparar",
      "Porque o apoio mesial cria um eixo de rotação que, sob carga da sela, dissipa o estresse e reduz o torque distal sobre o pilar (princípio do RPI)",
      "Porque o apoio distal é antiestético",
      "Porque o apoio mesial aumenta a retenção da prótese",
    ],
    correctIndex: 1,
    explanation:
      "Na extremidade livre, o apoio mesial (sistema RPI) posiciona o fulcro mesialmente. Quando a sela recebe carga e tende a afundar, a prótese gira em torno desse apoio, e a placa proximal e a barra I se desengajam, em vez de aplicar torque distal ao pilar. O apoio distal, ao contrário, transformaria o pilar em fulcro de um movimento de alavanca de classe I, prejudicial.",
  },

  // ── CAP. 7 — RETENTORES DIRETOS (GRAMPOS) ─────────────────────────────────
  {
    id: "ppr-33",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Básico",
    question: "O que é um retentor direto (grampo) na PPR?",
    options: [
      "Componente que une os dois lados do arco",
      "Componente que engata uma área retentiva do dente pilar para resistir ao deslocamento da prótese na direção de remoção",
      "Componente que apenas fornece suporte vertical",
      "Estrutura que repõe o dente ausente",
    ],
    correctIndex: 1,
    explanation:
      "O retentor direto (grampo) é o componente que proporciona RETENÇÃO: sua ponta engata uma região retentiva (abaixo da linha de maior contorno) do dente pilar, resistindo às forças que tendem a deslocar a prótese no sentido de remoção. Um conjunto de grampo completo inclui apoio, braço retentivo, braço de oposição e conector menor.",
  },
  {
    id: "ppr-34",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Básico",
    question: "Qual é a diferença entre grampos circunferenciais (suprabulge) e grampos de barra (infrabulge/Roach)?",
    options: [
      "Os circunferenciais são feitos só de resina; os de barra, só de metal",
      "Os circunferenciais abordam a área retentiva por oclusal (acima da linha de contorno); os de barra abordam por gengival (a partir do conector)",
      "Os circunferenciais não têm apoio; os de barra têm dois apoios",
      "Não há diferença prática entre eles",
    ],
    correctIndex: 1,
    explanation:
      "O grampo circunferencial (suprabulge, ex.: grampo de Aker) origina-se acima da linha de maior contorno e desce até a área retentiva, abordando-a por OCLUSAL. O grampo de barra (infrabulge, tipo Roach — T, Y, I, L) origina-se do conector menor/sela na gengiva e sobe até a área retentiva, abordando-a por GENGIVAL.",
  },
  {
    id: "ppr-35",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Intermediário",
    question: "Qual a profundidade de área retentiva (undercut) geralmente recomendada para a ponta de um grampo retentivo fundido em liga de cromo-cobalto?",
    options: [
      "0,01 polegada (0,25 mm)",
      "0,05 polegada (1,25 mm)",
      "0,10 polegada (2,5 mm)",
      "Não importa a profundidade",
    ],
    correctIndex: 0,
    explanation:
      "Para grampos fundidos em Co-Cr (liga mais rígida e menos flexível), utiliza-se tipicamente uma área retentiva de 0,01 polegada (0,25 mm). Ligas de ouro e fios encurvados (wrought wire), por serem mais flexíveis, podem engatar áreas retentivas maiores, de 0,02 polegada (0,5 mm).",
  },
  {
    id: "ppr-36",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Intermediário",
    question: "Qual porção do braço retentivo do grampo deve ser flexível e por quê?",
    options: [
      "O terço cervical/proximal (junto ao corpo), para dar rigidez",
      "O terço terminal (a ponta), que deve flexionar ao passar pela linha de maior contorno durante a inserção/remoção e então engatar a área retentiva",
      "Toda a extensão do braço deve ser igualmente rígida",
      "Apenas o apoio, não o braço",
    ],
    correctIndex: 1,
    explanation:
      "Apenas o terço terminal (a ponta) do braço retentivo deve ser flexível, pois é ele que deflete ao passar sobre a linha de maior contorno e penetra na área retentiva. A porção mais próxima do corpo (sobre a linha de contorno) deve ser rígida, atuando como estabilização. Por isso o braço afila gradualmente da base à ponta.",
  },
  {
    id: "ppr-37",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Intermediário",
    question: "O que é reciprocidade (oposição) em um conjunto de grampo e por que é importante?",
    options: [
      "A capacidade do grampo de reter mais força",
      "A neutralização da força horizontal gerada pelo braço retentivo, exercida por um braço rígido (de oposição) no lado oposto do dente, evitando deslocamento lateral do pilar",
      "A troca alternada de grampos",
      "A capacidade de remover a prótese reciprocamente",
    ],
    correctIndex: 1,
    explanation:
      "Reciprocidade é o equilíbrio das forças laterais: quando o braço retentivo flexível passa pela linha de contorno, ele empurra o dente; o braço de oposição (rígido, situado na altura ou acima da linha de contorno do lado oposto) deve contatar o dente simultaneamente para neutralizar essa força e impedir que o pilar seja deslocado lateralmente.",
  },
  {
    id: "ppr-38",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Intermediário",
    question: "Qual é a extensão mínima de abraçamento (encircling) que um grampo deve proporcionar ao dente pilar para garantir estabilidade?",
    options: [
      "90° da circunferência do dente",
      "Mais de 180° da circunferência do dente",
      "Exatamente 45°",
      "360°, envolvendo todo o dente",
    ],
    correctIndex: 1,
    explanation:
      "Para evitar que o grampo se afaste do dente e perca a retenção (efeito de escape), ele deve abraçar mais de 180° da circunferência do pilar, contatando-o em pelo menos três pontos. Esse abraçamento garante que o dente esteja contido dentro do conjunto do grampo.",
  },
  {
    id: "ppr-39",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Avançado",
    question: "Por que o sistema de grampo RPI (com barra I) é frequentemente preferido aos grampos circunferenciais em pilares de extremidade livre?",
    options: [
      "Porque é mais retentivo que qualquer outro grampo",
      "Porque oferece contato mínimo com o dente, melhor estética e, sob carga da sela, seus componentes se desengajam, reduzindo o torque transmitido ao pilar",
      "Porque dispensa o uso de apoio",
      "Porque é mais fácil de fundir",
    ],
    correctIndex: 1,
    explanation:
      "O RPI (apoio mesial, placa proximal e barra I) reduz o estresse no pilar de extremidade livre: na carga funcional, a prótese gira em torno do apoio mesial e a barra I e a placa proximal se afastam do dente (em direção gengival/mesial), liberando o pilar de torque. Ainda tem contato dentário mínimo (melhor estética e menor retenção de placa).",
  },
  {
    id: "ppr-40",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Diretos (Grampos)",
    difficulty: "Avançado",
    question: "Quando o grampo circunferencial de Aker (suprabulge) é contraindicado em favor de um grampo de barra (infrabulge)?",
    options: [
      "Quando a área retentiva está na região cervical do lado adjacente à sela e o grampo precisa abordá-la por gengival, ou em pilares de extremidade livre por questões de alívio de estresse e estética",
      "Sempre que o pilar for um molar",
      "Quando há excelente higiene oral",
      "Quando o dente tem coroa muito alta",
    ],
    correctIndex: 0,
    explanation:
      "Os grampos de barra são preferidos quando a área retentiva está localizada de forma que a abordagem gengival é mais favorável (ex.: undercut cervical próximo à sela), quando se deseja melhor estética (menor exibição de metal) e, em extremidades livres, pelo seu comportamento de alívio de estresse. São contraindicados em undercuts teciduais acentuados ou vestíbulo raso.",
  },

  // ── CAP. 8 — RETENTORES INDIRETOS ─────────────────────────────────────────
  {
    id: "ppr-41",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Indiretos",
    difficulty: "Básico",
    question: "Qual é a função de um retentor indireto?",
    options: [
      "Engatar a área retentiva principal do pilar",
      "Resistir ao deslocamento (rotação) das bases de extremidade livre para longe dos tecidos, atuando do lado oposto à linha de fulcro",
      "Substituir o conector maior",
      "Aumentar a estética da prótese",
    ],
    correctIndex: 1,
    explanation:
      "O retentor indireto resiste à rotação/levantamento das selas de extremidade livre quando forças (ex.: alimentos pegajosos) tendem a deslocá-las dos tecidos. Ele atua do lado oposto à linha de fulcro, normalmente como um apoio posicionado anteriormente, longe das selas.",
  },
  {
    id: "ppr-42",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Indiretos",
    difficulty: "Intermediário",
    question: "Em que tipo de PPR os retentores indiretos são indispensáveis?",
    options: [
      "Em PPRs dentossuportadas Classe III",
      "Em PPRs com extremidade livre (Classe I e II), que sofrem rotação em torno da linha de fulcro",
      "Em qualquer PPR, independentemente da classe",
      "Apenas em PPRs Classe IV pequenas",
    ],
    correctIndex: 1,
    explanation:
      "Os retentores indiretos são essenciais nas próteses de extremidade livre (Classe I e II), porque essas selas tendem a girar e se afastar do rebordo quando forças de remoção atuam sobre elas. Em PPRs dentossuportadas (Classe III sem extensão distal), não há esse movimento de rotação, dispensando retentores indiretos.",
  },
  {
    id: "ppr-43",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Indiretos",
    difficulty: "Avançado",
    question: "Para que um retentor indireto seja mais eficaz, como ele deve se posicionar em relação à linha de fulcro?",
    options: [
      "O mais próximo possível da linha de fulcro",
      "O mais perpendicular e distante possível da linha de fulcro, maximizando o braço de resistência",
      "Sobre a própria linha de fulcro",
      "Do mesmo lado das selas de extremidade livre",
    ],
    correctIndex: 1,
    explanation:
      "Quanto maior a distância perpendicular do retentor indireto à linha de fulcro (eixo de rotação que passa pelos apoios mais posteriores dos pilares principais), maior o braço de alavanca de resistência e mais eficaz a oposição ao levantamento da sela. Por isso costuma ser posicionado o mais anterior possível (ex.: cíngulo de canino).",
  },
  {
    id: "ppr-44",
    subject: "Prótese Parcial Removível",
    topic: "Retentores Indiretos",
    difficulty: "Intermediário",
    question: "Qual destes pode atuar como retentor indireto em uma PPR Classe I?",
    options: [
      "A barra retentiva da sela distal",
      "Um apoio de cíngulo em canino ou um apoio oclusal em pré-molar situado anteriormente à linha de fulcro",
      "O próprio conector maior posterior",
      "O dente artificial mais distal",
    ],
    correctIndex: 1,
    explanation:
      "Apoios posicionados anteriormente à linha de fulcro funcionam como retentores indiretos — tipicamente apoios de cíngulo em caninos ou apoios oclusais em pré-molares. Quando a sela tende a se levantar, esses apoios anteriores se opõem ao movimento, mantendo a prótese assentada.",
  },

  // ── CAP. 9 — DELINEADOR E PLANEJAMENTO ────────────────────────────────────
  {
    id: "ppr-45",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Básico",
    question: "Qual é a principal finalidade do delineador (surveyor) no planejamento da PPR?",
    options: [
      "Medir a oclusão do paciente",
      "Determinar e registrar o eixo de inserção/remoção, localizar áreas retentivas e a linha de maior contorno no modelo de estudo",
      "Fundir a armação metálica",
      "Polir a prótese acabada",
    ],
    correctIndex: 1,
    explanation:
      "O delineador é o instrumento que analisa o paralelismo das superfícies dentárias no modelo, determinando o eixo de inserção/remoção, identificando e marcando a linha de maior contorno (equador protético) e medindo as áreas retentivas. É a base do desenho da armação.",
  },
  {
    id: "ppr-46",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Básico",
    question: "O que é a 'linha de maior contorno' (equador protético) de um dente?",
    options: [
      "A linha da margem gengival",
      "A linha que demarca a maior circunferência do dente em relação a um dado eixo de inserção, separando a área suprabulge (não retentiva) da infrabulge (retentiva)",
      "A borda incisal do dente",
      "A linha da junção amelocementária",
    ],
    correctIndex: 1,
    explanation:
      "A linha de maior contorno (height of contour / equador protético) é a linha de maior perímetro do dente para um determinado eixo de inserção. Acima dela está a região suprabulge (não retentiva, onde ficam apoios e porções rígidas); abaixo, a região infrabulge (retentiva, onde a ponta do grampo engata).",
  },
  {
    id: "ppr-47",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Intermediário",
    question: "Qual instrumento do delineador é usado para medir a profundidade exata da área retentiva (0,01\", 0,02\", 0,03\")?",
    options: [
      "A ponta analisadora (haste de análise)",
      "O medidor de retenção (undercut gauge)",
      "A ponta de carbono (grafite)",
      "A mesa de delineamento",
    ],
    correctIndex: 1,
    explanation:
      "O medidor de retenção (undercut gauge) possui pontas calibradas (0,01; 0,02; 0,03 polegada) que permitem localizar o ponto exato em que o dente apresenta a profundidade de área retentiva desejada para a ponta do grampo. A ponta analisadora apenas avalia paralelismo; a de carbono marca a linha de contorno.",
  },
  {
    id: "ppr-48",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Intermediário",
    question: "O que são planos-guia (guiding planes) e qual sua importância?",
    options: [
      "Áreas retentivas onde os grampos engatam",
      "Superfícies proximais paralelas entre si (e ao eixo de inserção) que orientam um caminho de inserção único, conferem estabilidade e reduzem espaços livres",
      "As bordas das selas de extremidade livre",
      "Marcas para montagem dos dentes",
    ],
    correctIndex: 1,
    explanation:
      "Planos-guia são superfícies proximais (geralmente preparadas no esmalte) paralelas ao eixo de inserção. Eles definem um caminho de inserção/remoção único, aumentam a estabilidade e a retenção friccional, eliminam espaços que reteriam alimento e garantem reciprocidade efetiva dos grampos.",
  },
  {
    id: "ppr-49",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Avançado",
    question: "O que é o 'tripoidismo' (tripoding) no procedimento de delineamento?",
    options: [
      "Uso de três grampos na prótese",
      "Marcação de três pontos de referência no modelo (com a ponta analisadora travada em altura) para permitir reposicionar o modelo no mesmo eixo de inserção em ocasiões futuras",
      "Preparo de três planos-guia",
      "Posicionamento de três apoios oclusais",
    ],
    correctIndex: 1,
    explanation:
      "O tripoidismo consiste em registrar três pontos amplamente separados nas superfícies do modelo, com a haste analisadora fixa em uma altura, mantendo o modelo no ângulo de inserção escolhido. Isso permite reposicionar o modelo exatamente no mesmo eixo no delineador em sessões posteriores, caso as linhas a lápis se apaguem.",
  },
  {
    id: "ppr-50",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Avançado",
    question: "Como a inclinação (tilt) do modelo no delineador afeta o planejamento das áreas retentivas?",
    options: [
      "Não tem qualquer efeito sobre as áreas retentivas",
      "Alterar a inclinação muda a localização e a magnitude das áreas retentivas e a relação dos planos-guia, permitindo equalizar a retenção e estabelecer um eixo de inserção favorável",
      "A inclinação só altera a cor das marcações",
      "A inclinação determina a liga metálica a ser usada",
    ],
    correctIndex: 1,
    explanation:
      "A inclinação do modelo modifica o eixo de inserção relativo e, portanto, redistribui as áreas retentivas (aumentando de um lado, diminuindo de outro) e o paralelismo dos planos-guia. O cirurgião-dentista ajusta o tilt para equalizar a retenção bilateral, criar um caminho de inserção estético e funcional e contornar interferências.",
  },
  {
    id: "ppr-51",
    subject: "Prótese Parcial Removível",
    topic: "Delineador e Planejamento",
    difficulty: "Intermediário",
    question: "Por que o eixo de inserção e remoção da PPR deve ser único e bem definido?",
    options: [
      "Para que a prótese só possa ser fabricada em laboratório",
      "Para garantir assentamento previsível, retenção friccional pelos planos-guia, distribuição correta das forças e proteção dos pilares",
      "Para aumentar o número de grampos necessários",
      "Para permitir que a prótese seja inserida em qualquer direção",
    ],
    correctIndex: 1,
    explanation:
      "Um eixo de inserção único (definido pelos planos-guia) assegura que a prótese assente sempre da mesma forma, com retenção friccional adequada, sem traumatizar os tecidos e distribuindo as forças conforme o planejado. Caminhos de inserção múltiplos comprometeriam estabilidade e retenção e poderiam lesar os pilares.",
  },

  // ── CAP. 10 — BIOMECÂNICA E EXTREMIDADE LIVRE ─────────────────────────────
  {
    id: "ppr-52",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Básico",
    question: "Por que a prótese de extremidade livre (Classe I e II) é biomecanicamente mais complexa que a dentossuportada?",
    options: [
      "Porque usa mais metal",
      "Porque o suporte é compartilhado entre o dente (rígido, via ligamento periodontal) e a mucosa do rebordo (compressível), que têm graus de deslocamento muito diferentes sob carga",
      "Porque não permite grampos",
      "Porque é sempre maior",
    ],
    correctIndex: 1,
    explanation:
      "Na extremidade livre não há pilar posterior, então a sela apoia-se sobre a mucosa, que é compressível e se desloca muito mais (~0,5 mm ou mais) que o dente sustentado pelo ligamento periodontal (~0,1 mm). Essa diferença de resiliência gera movimentos de rotação e exige recursos de alívio de estresse (RPI, apoio mesial, moldagem funcional).",
  },
  {
    id: "ppr-53",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Intermediário",
    question: "O que é a 'linha de fulcro' em uma PPR de extremidade livre?",
    options: [
      "A linha que une os dentes artificiais",
      "O eixo imaginário, passando pelos apoios mais posteriores dos pilares principais, em torno do qual a prótese tende a girar sob carga",
      "A borda posterior do conector maior",
      "A linha de maior contorno do pilar",
    ],
    correctIndex: 1,
    explanation:
      "A linha de fulcro é o eixo de rotação da prótese, passando geralmente pelos apoios oclusais mais posteriores dos pilares terminais. As selas de extremidade livre giram em torno dessa linha — para gengival sob carga oclusal e para oclusal quando forças tracionam a prótese. Os retentores indiretos opõem-se a esse último movimento.",
  },
  {
    id: "ppr-54",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Intermediário",
    question: "Quais recursos ajudam a reduzir o estresse sobre o pilar de extremidade livre?",
    options: [
      "Aumentar a profundidade da área retentiva do grampo ao máximo",
      "Apoio mesial (RPI), bases amplas que distribuam a carga pelo rebordo, moldagem funcional/anatômica corrigida e grampos com alívio de estresse",
      "Usar grampos circunferenciais rígidos com retenção máxima",
      "Eliminar os retentores indiretos",
    ],
    correctIndex: 1,
    explanation:
      "Para proteger o pilar de extremidade livre, lança-se mão de: apoio mesial e sistema RPI (que desengaja sob carga), bases extensas que cobrem o máximo de rebordo (distribuindo a força sobre maior área), técnica de moldagem funcional (modelo corrigido) e grampos flexíveis de alívio de estresse. Aumentar a retenção do grampo, ao contrário, aumentaria o torque.",
  },
  {
    id: "ppr-55",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Básico",
    question: "Qual princípio resume a relação entre área da base protética e pressão sobre o rebordo?",
    options: [
      "Quanto menor a base, menor a pressão",
      "Quanto maior a área de cobertura da base, menor a pressão por unidade de área transmitida ao rebordo (melhor distribuição de carga)",
      "A área da base não influencia a pressão",
      "A pressão depende apenas do número de grampos",
    ],
    correctIndex: 1,
    explanation:
      "Pressão = força / área. Ampliando a área de cobertura da base sobre o rebordo (dentro dos limites anatômicos), distribui-se a mesma força mastigatória por uma superfície maior, reduzindo a pressão por unidade de área e o trauma ao rebordo. Por isso, em extremidades livres, busca-se a máxima extensão admissível da sela.",
  },
  {
    id: "ppr-56",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Avançado",
    question: "Qual movimento as selas de extremidade livre realizam sob forças de tração (ex.: alimento pegajoso) e qual componente o neutraliza?",
    options: [
      "Movem-se em direção ao rebordo; neutralizado pelos apoios",
      "Giram afastando-se do rebordo (para oclusal) em torno da linha de fulcro; neutralizado pelos retentores indiretos",
      "Deslocam-se lateralmente; neutralizado pelo conector maior",
      "Não realizam movimento algum",
    ],
    correctIndex: 1,
    explanation:
      "Forças de tração (alimentos pegajosos, ação muscular) tendem a levantar as selas de extremidade livre, fazendo-as girar para oclusal em torno da linha de fulcro. Os retentores indiretos, situados anteriormente à linha de fulcro, opõem-se a esse movimento mantendo a prótese assentada. Os grampos retentivos também contribuem, mas o retentor indireto é o recurso específico.",
  },
  {
    id: "ppr-57",
    subject: "Prótese Parcial Removível",
    topic: "Biomecânica",
    difficulty: "Avançado",
    question: "Por que aumentar excessivamente a retenção friccional/mecânica do grampo em um pilar de extremidade livre pode ser prejudicial?",
    options: [
      "Porque deixa a prótese instável",
      "Porque, sob a rotação da sela, uma retenção rígida e excessiva transmite torque ampliado ao pilar, podendo causar mobilidade e dano periodontal",
      "Porque torna a prótese mais leve",
      "Porque elimina a necessidade de apoios",
    ],
    correctIndex: 1,
    explanation:
      "Em extremidade livre, o pilar terminal está sujeito a forças de alavanca quando a sela gira. Um grampo demasiadamente retentivo e rígido converte esse movimento em torque elevado sobre o pilar, sobrecarregando o ligamento periodontal e podendo causar mobilidade. Prefere-se retenção mínima necessária e mecanismos de alívio de estresse.",
  },

  // ── CAP. 11 — MOLDAGEM ────────────────────────────────────────────────────
  {
    id: "ppr-58",
    subject: "Prótese Parcial Removível",
    topic: "Moldagem",
    difficulty: "Básico",
    question: "Qual é a finalidade da moldagem anatômica inicial (de estudo) na PPR?",
    options: [
      "Registrar o rebordo em função sob carga",
      "Obter o modelo de estudo para diagnóstico, delineamento, planejamento e confecção de moldeira individual",
      "Substituir a moldagem de trabalho",
      "Registrar a oclusão final",
    ],
    correctIndex: 1,
    explanation:
      "A moldagem anatômica inicial (geralmente com alginato em moldeira de estoque) fornece o modelo de estudo, usado para diagnóstico, análise no delineador, planejamento do desenho da armação e confecção da moldeira individual. Não registra o rebordo sob carga funcional.",
  },
  {
    id: "ppr-59",
    subject: "Prótese Parcial Removível",
    topic: "Moldagem",
    difficulty: "Intermediário",
    question: "Em que consiste a técnica de moldagem do modelo corrigido (altered cast / moldagem funcional) e quando é indicada?",
    options: [
      "Moldar todo o arco de uma só vez com silicone, em qualquer caso",
      "Registrar os dentes em forma anatômica e, em seguida, corrigir a porção da sela de extremidade livre com material que capta o rebordo sob forma funcional, indicada em Classe I e II",
      "Moldar apenas os dentes pilares, ignorando o rebordo",
      "Usar somente alginato para todo o procedimento",
    ],
    correctIndex: 1,
    explanation:
      "Na técnica do modelo corrigido, primeiro se obtém o modelo de trabalho com os dentes em forma anatômica; a armação é fundida e provada; então uma moldagem funcional da área de extremidade livre é feita (com a armação em posição), e essa região do modelo é seccionada e refundida com o novo registro do rebordo. Isso harmoniza o suporte dente/mucosa em Classe I e II.",
  },
  {
    id: "ppr-60",
    subject: "Prótese Parcial Removível",
    topic: "Moldagem",
    difficulty: "Intermediário",
    question: "Por que a moldagem funcional do rebordo é importante nas extremidades livres?",
    options: [
      "Para deixar a prótese mais retentiva nos dentes",
      "Para registrar a mucosa em uma forma que aproxime sua posição sob carga mastigatória, distribuindo melhor as forças e reduzindo a discrepância de suporte com os dentes",
      "Para diminuir a área da base",
      "Apenas por questões estéticas",
    ],
    correctIndex: 1,
    explanation:
      "A moldagem funcional capta o rebordo em uma forma mais próxima de como ele se comporta sob carga, permitindo que a sela contate uniformemente a mucosa durante a função. Isso minimiza o balanço (rotação) da sela, distribui melhor as forças e reduz a diferença entre o suporte dentário (pouco deslocável) e o mucoso (mais deslocável).",
  },
  {
    id: "ppr-61",
    subject: "Prótese Parcial Removível",
    topic: "Moldagem",
    difficulty: "Básico",
    question: "Qual material é mais comumente utilizado para a moldagem anatômica inicial de estudo na PPR?",
    options: [
      "Silicone de adição leve",
      "Hidrocoloide irreversível (alginato)",
      "Godiva de baixa fusão",
      "Pasta zincoeugenólica",
    ],
    correctIndex: 1,
    explanation:
      "O alginato (hidrocoloide irreversível) é o material padrão para a moldagem de estudo na PPR: é econômico, de fácil manipulação e reproduz adequadamente os detalhes necessários ao planejamento. Para moldagens de trabalho mais precisas, podem-se usar elastômeros (silicone, poliéter).",
  },
  {
    id: "ppr-62",
    subject: "Prótese Parcial Removível",
    topic: "Moldagem",
    difficulty: "Avançado",
    question: "Qual a diferença conceitual entre as filosofias de moldagem com 'pressão seletiva' e 'mucostática' nas selas de extremidade livre?",
    options: [
      "Ambas são idênticas na prática",
      "A mucostática registra a mucosa em repouso (mínima pressão); a de pressão seletiva aplica mais pressão nas áreas capazes de suportar carga e alívio nas áreas sensíveis",
      "A mucostática usa apenas godiva; a seletiva apenas alginato",
      "A pressão seletiva ignora completamente os tecidos de suporte",
    ],
    correctIndex: 1,
    explanation:
      "A técnica mucostática registra a mucosa em estado de repouso/sem deformação, transferindo as cargas a todas as áreas igualmente. A técnica de pressão seletiva direciona maior carga às áreas anatomicamente mais aptas a suportar força (ex.: rebordo residual firme) e alivia áreas de tecido fino ou estruturas sensíveis, otimizando a distribuição de força na extremidade livre.",
  },

  // ── CAP. 12 — PREPARO DE BOCA ─────────────────────────────────────────────
  {
    id: "ppr-63",
    subject: "Prótese Parcial Removível",
    topic: "Preparo de Boca",
    difficulty: "Básico",
    question: "O preparo de boca para PPR inclui quais procedimentos?",
    options: [
      "Apenas a profilaxia dental",
      "Procedimentos cirúrgicos/periodontais e restauradores prévios, além do preparo dos pilares (nichos, planos-guia, contornos retentivos)",
      "Somente a moldagem de trabalho",
      "Apenas a seleção da cor dos dentes",
    ],
    correctIndex: 1,
    explanation:
      "O preparo de boca abrange três fases: (1) preparos cirúrgicos/periodontais (exodontias, frenectomias, controle de doença periodontal); (2) preparos restauradores (tratar cáries, ajustar coroas dos pilares); e (3) preparos nos pilares para receber a armação — nichos para apoios, planos-guia e ajuste de contornos retentivos.",
  },
  {
    id: "ppr-64",
    subject: "Prótese Parcial Removível",
    topic: "Preparo de Boca",
    difficulty: "Intermediário",
    question: "Em que ordem devem ser executados os preparos nos dentes pilares?",
    options: [
      "Nichos primeiro, depois planos-guia e por último ajustes de contorno retentivo",
      "Planos-guia e redução de áreas de contorno excessivo primeiro, depois os nichos para os apoios",
      "Tanto faz a ordem",
      "Apoios e grampos ao mesmo tempo, sem sequência definida",
    ],
    correctIndex: 1,
    explanation:
      "Recomenda-se preparar primeiro os planos-guia proximais e ajustar os contornos (reduzir áreas retentivas excessivas, criar contornos adequados), pois isso pode alterar a posição/forma onde o nicho será feito. Os nichos para apoios são preparados por último, garantindo profundidade e forma corretas no contorno já ajustado.",
  },
  {
    id: "ppr-65",
    subject: "Prótese Parcial Removível",
    topic: "Preparo de Boca",
    difficulty: "Avançado",
    question: "Quando um dente pilar apresenta inclinação ou contorno desfavorável que impede um eixo de inserção adequado, qual recurso pode ser empregado?",
    options: [
      "Sempre extrair o dente",
      "Confeccionar uma coroa total no pilar com o contorno e os nichos ideais (pilar protético), ou realizar plastia de contorno em esmalte/restauração",
      "Ignorar o problema e instalar a prótese mesmo assim",
      "Usar apenas grampos de fio mais flexíveis, sem outras providências",
    ],
    correctIndex: 1,
    explanation:
      "Quando o contorno natural é inadequado (área retentiva mal posicionada, ausência de superfície para plano-guia, inclinação acentuada), pode-se confeccionar uma coroa total no pilar já com a linha de maior contorno, nicho e plano-guia ideais, ou realizar plastias de contorno (recontorno em esmalte ou resina). Isso permite estabelecer o eixo de inserção planejado.",
  },

  // ── CAP. 13 — OCLUSÃO E MONTAGEM DE DENTES ────────────────────────────────
  {
    id: "ppr-66",
    subject: "Prótese Parcial Removível",
    topic: "Oclusão e Montagem de Dentes",
    difficulty: "Básico",
    question: "Qual é o objetivo oclusal geral na confecção de uma PPR?",
    options: [
      "Criar contatos prematuros para aumentar a retenção",
      "Estabelecer uma oclusão harmônica e estável, com contatos bilaterais simultâneos e distribuição equilibrada de forças, em harmonia com a oclusão remanescente",
      "Deixar os dentes artificiais sem contato oclusal",
      "Concentrar a carga apenas nos dentes anteriores",
    ],
    correctIndex: 1,
    explanation:
      "A meta oclusal da PPR é obter contatos bilaterais simultâneos e estáveis em máxima intercuspidação, harmonizando os dentes artificiais com os naturais remanescentes, sem interferências em movimentos excursivos. Isso preserva os pilares e o rebordo e dá estabilidade à prótese.",
  },
  {
    id: "ppr-67",
    subject: "Prótese Parcial Removível",
    topic: "Oclusão e Montagem de Dentes",
    difficulty: "Intermediário",
    question: "Em uma PPR de extremidade livre, por que às vezes se reduz o número de dentes posteriores ou a largura vestibulolingual de suas faces oclusais?",
    options: [
      "Para economizar material",
      "Para diminuir a carga mastigatória transmitida ao rebordo residual, reduzindo o trauma e a reabsorção sob a sela",
      "Para aumentar a estética",
      "Para facilitar a fala apenas",
    ],
    correctIndex: 1,
    explanation:
      "Reduzir o número de dentes posteriores (ex.: não repor o segundo molar) ou estreitar suas mesas oclusais diminui a área e a carga sobre o rebordo residual da extremidade livre. Menos carga significa menos trauma à mucosa e menor reabsorção óssea do rebordo ao longo do tempo.",
  },
  {
    id: "ppr-68",
    subject: "Prótese Parcial Removível",
    topic: "Oclusão e Montagem de Dentes",
    difficulty: "Avançado",
    question: "Em que situação se utiliza a montagem dos dentes posteriores da PPR em relação de oclusão balanceada bilateral, semelhante à da prótese total?",
    options: [
      "Em qualquer PPR dentossuportada",
      "Quando a PPR se opõe a uma prótese total (sobretudo em extremidades livres extensas), para estabilizar ambas as próteses durante as excursões",
      "Nunca, pois PPR sempre usa guia canina",
      "Apenas em Classe IV anterior",
    ],
    correctIndex: 1,
    explanation:
      "A oclusão balanceada bilateral é considerada quando a PPR (especialmente de extremidade livre) se opõe a uma prótese total. Os contatos balanceados durante as excursões ajudam a estabilizar a prótese total antagonista e a distribuir as forças. Em arcos com dentes naturais funcionais remanescentes, prefere-se geralmente a oclusão mutuamente protegida/guia em dentes naturais.",
  },

  // ── CAP. 14 — MATERIAIS ───────────────────────────────────────────────────
  {
    id: "ppr-69",
    subject: "Prótese Parcial Removível",
    topic: "Materiais",
    difficulty: "Básico",
    question: "Qual liga metálica é a mais utilizada na confecção da armação de PPRs convencionais?",
    options: [
      "Liga de cobre-alumínio",
      "Liga de cromo-cobalto (Co-Cr)",
      "Liga de prata-estanho (amálgama)",
      "Liga de ouro tipo I (mole)",
    ],
    correctIndex: 1,
    explanation:
      "As ligas de cromo-cobalto (Co-Cr) são as mais empregadas em armações de PPR por sua alta rigidez (elevado módulo de elasticidade), baixa densidade (próteses mais leves), boa resistência à corrosão e custo inferior ao do ouro. Sua dureza, porém, dificulta ajustes e polimento.",
  },
  {
    id: "ppr-70",
    subject: "Prótese Parcial Removível",
    topic: "Materiais",
    difficulty: "Intermediário",
    question: "Qual propriedade do cromo-cobalto explica por que braços de grampo fundidos nessa liga devem engatar áreas retentivas menores que os de ouro?",
    options: [
      "Sua baixa resistência à corrosão",
      "Seu alto módulo de elasticidade (maior rigidez / menor flexibilidade), que torna o grampo menos capaz de flexionar sem deformação permanente",
      "Sua alta densidade",
      "Sua cor escura",
    ],
    correctIndex: 1,
    explanation:
      "O Co-Cr tem módulo de elasticidade cerca de duas vezes maior que o do ouro, ou seja, é mais rígido e flexiona menos antes de deformar permanentemente. Por isso seus grampos engatam áreas retentivas menores (~0,25 mm); engatar áreas maiores excederia o limite elástico, deformando ou fraturando o braço.",
  },
  {
    id: "ppr-71",
    subject: "Prótese Parcial Removível",
    topic: "Materiais",
    difficulty: "Básico",
    question: "De que material são geralmente feitas as bases (selas) e os dentes artificiais da PPR?",
    options: [
      "Cerâmica feldspática pura",
      "Resina acrílica (polimetilmetacrilato), tanto para a base quanto, frequentemente, para os dentes",
      "Cromo-cobalto fundido",
      "Resina composta fotopolimerizável de uso direto",
    ],
    correctIndex: 1,
    explanation:
      "As bases (selas) que recobrem o rebordo e suportam os dentes artificiais são tipicamente de resina acrílica (PMMA), que adere ao rebordo retido pela malha metálica da armação e permite reembasamentos. Os dentes artificiais costumam ser de resina acrílica (ou, menos comum, porcelana).",
  },
  {
    id: "ppr-72",
    subject: "Prótese Parcial Removível",
    topic: "Materiais",
    difficulty: "Avançado",
    question: "As PPRs flexíveis confeccionadas em poliamida (nylon, ex.: Valplast) apresentam qual limitação biomecânica importante?",
    options: [
      "São excessivamente rígidas e fraturam facilmente",
      "Por serem flexíveis e geralmente sem apoios oclusais rígidos, oferecem suporte deficiente e transmitem carga predominantemente à mucosa, podendo acelerar a reabsorção do rebordo",
      "Não permitem nenhuma estética",
      "São impossíveis de higienizar",
    ],
    correctIndex: 1,
    explanation:
      "As PPRs flexíveis de poliamida têm boa estética (ausência de grampos metálicos visíveis) e conforto, mas sua flexibilidade e a falta de apoios oclusais rígidos comprometem o suporte e a distribuição de forças: a carga recai sobre a mucosa, favorecendo reabsorção do rebordo. Também são difíceis de reembasar/ajustar. Costumam ser indicadas como solução provisória ou em casos selecionados.",
  },

  // ── CAP. 15 — INSTALAÇÃO E MANUTENÇÃO ─────────────────────────────────────
  {
    id: "ppr-73",
    subject: "Prótese Parcial Removível",
    topic: "Instalação e Manutenção",
    difficulty: "Básico",
    question: "Na consulta de instalação da PPR, o que deve ser verificado e ajustado?",
    options: [
      "Apenas a cor dos dentes",
      "Assentamento da armação (apoios nos nichos), adaptação das bases, ausência de pontos de pressão, retenção/estabilidade dos grampos e ajuste oclusal",
      "Somente a retenção dos grampos",
      "Apenas a estética anterior",
    ],
    correctIndex: 1,
    explanation:
      "Na instalação verifica-se: assentamento completo da armação com os apoios totalmente alojados nos nichos, ausência de interferências no eixo de inserção, adaptação das bases ao rebordo sem pontos de compressão dolorosos (uso de evidenciadores de pressão), retenção e estabilidade adequadas dos grampos e ajuste dos contatos oclusais.",
  },
  {
    id: "ppr-74",
    subject: "Prótese Parcial Removível",
    topic: "Instalação e Manutenção",
    difficulty: "Intermediário",
    question: "Por que as PPRs de extremidade livre exigem reembasamentos periódicos ao longo do tempo?",
    options: [
      "Porque o metal se desgasta rapidamente",
      "Porque o rebordo residual sob a sela sofre reabsorção contínua, criando um espaço entre a base e a mucosa que aumenta o balanço e a sobrecarga dos pilares",
      "Porque a resina muda de cor",
      "Porque os grampos perdem o brilho",
    ],
    correctIndex: 1,
    explanation:
      "O rebordo residual sob a sela de extremidade livre reabsorve progressivamente. Isso cria um vão entre a base e a mucosa, fazendo a sela 'balançar' e transferir mais carga e torque aos pilares (efeito de alavanca). O reembasamento periódico restabelece a adaptação da base, redistribuindo o suporte e protegendo os pilares.",
  },
  {
    id: "ppr-75",
    subject: "Prótese Parcial Removível",
    topic: "Instalação e Manutenção",
    difficulty: "Básico",
    question: "Quais orientações de higiene devem ser dadas ao paciente usuário de PPR?",
    options: [
      "Dormir com a prótese sempre e nunca removê-la",
      "Remover e higienizar a prótese após as refeições, escovar dentes e tecidos, deixar a prótese fora da boca durante o sono e mantê-la em meio úmido",
      "Limpar apenas com água quente fervente",
      "Nunca remover a prótese para não perder a adaptação",
    ],
    correctIndex: 1,
    explanation:
      "O paciente deve remover a PPR após as refeições e higienizá-la (escova própria/sabão neutro, evitando dentifrícios abrasivos), escovar os dentes remanescentes e os tecidos, e idealmente deixar a prótese fora da boca durante o sono (repouso dos tecidos), armazenando-a em meio úmido. Boa higiene previne cárie nos pilares, doença periodontal e estomatite protética.",
  },
  {
    id: "ppr-76",
    subject: "Prótese Parcial Removível",
    topic: "Instalação e Manutenção",
    difficulty: "Avançado",
    question: "Um paciente retorna relatando dor sob a sela de extremidade livre e mobilidade do pilar terminal meses após a instalação. Qual a causa mais provável e a conduta?",
    options: [
      "Grampo frouxo; apertar o grampo manualmente resolve",
      "Reabsorção do rebordo gerando desadaptação da base e sobrecarga em alavanca do pilar; conduta é reembasar a sela e reavaliar a oclusão e os apoios",
      "Cor dos dentes inadequada; trocar os dentes artificiais",
      "Excesso de saliva; prescrever anticolinérgico",
    ],
    correctIndex: 1,
    explanation:
      "Dor sob a sela e mobilidade do pilar terminal meses após a instalação sugerem reabsorção do rebordo residual: a base perde adaptação, a sela balança e transfere carga em alavanca ao pilar, traumatizando mucosa e ligamento periodontal. A conduta é reembasar a sela (restabelecendo o suporte mucoso), reavaliar a oclusão (eliminar contatos traumáticos) e checar apoios/retentores. Apertar grampo aumentaria o torque e pioraria o quadro.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 1 — MORFOLOGIA DO COMPLEXO DENTINO-PULPAR
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c01-01",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Básico",
    question: "Qual das seguintes afirmações sobre a morfologia da câmara pulpar é CORRETA?",
    options: [
      "O número de cornos pulpares corresponde ao número de cúspides do dente",
      "A câmara pulpar é menor em dentes jovens do que em dentes adultos",
      "Os cornos pulpares se aprofundam progressivamente com o envelhecimento",
      "A câmara pulpar tem paredes independentes dos túbulos dentinários",
    ],
    correctIndex: 0,
    explanation:
      "Os cornos pulpares são projeções da câmara em direção às cúspides, e seu número corresponde ao de cúspides. Em dentes jovens a câmara é maior; com a deposição contínua de dentina secundária ela diminui progressivamente com a idade (Hargreaves/Berman, Cohen — Caminhos da Polpa).",
  },
  {
    id: "endo-c01-02",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Básico",
    question: "Qual é o número mais frequente de canais radiculares no primeiro molar superior?",
    options: [
      "Dois canais, ambos na raiz palatina",
      "Dois canais, um mesiovestibular e um distovestibular",
      "Três canais, um por raiz, distribuídos igualmente",
      "Quatro canais, com dois canais na raiz mesiovestibular (MV1 e MV2)",
    ],
    correctIndex: 3,
    explanation:
      "O primeiro molar superior possui frequentemente 4 canais: MV1 e MV2 na raiz mesiovestibular (prevalência de MV2 de 70–95% em estudos com CBCT), um distovestibular e um palatino. A não localização do MV2 compromete o prognóstico (Vertucci; Lopes & Siqueira, Endodontia: Biologia e Técnica).",
  },
  {
    id: "endo-c01-03",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Intermediário",
    question: "Segundo a classificação de Vertucci, um canal que se origina único na câmara, divide-se em dois ao longo da raiz e reúne-se em um único forame apical é classificado como:",
    options: [
      "Tipo I — canal único da câmara ao forame",
      "Tipo III — padrão 1-2-1: único que bifurca e reúne",
      "Tipo IV — dois canais separados da câmara ao forame",
      "Tipo V — canal único que bifurca em dois forames distintos",
    ],
    correctIndex: 1,
    explanation:
      "Na classificação de Vertucci, o Tipo III descreve o padrão 1-2-1: um canal único origina-se na câmara, divide-se em dois ao longo da raiz e reúne-se em um forame apical único. O Tipo I é único do início ao fim; o Tipo IV possui dois canais separados; o Tipo V bifurca-se em dois forames (Vertucci FJ, J Endod 1984; Lopes & Siqueira).",
  },
  {
    id: "endo-c01-04",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Intermediário",
    question: "Qual característica dos túbulos dentinários é clinicamente relevante para a sensibilidade dentinária e a penetração de microrganismos?",
    options: [
      "O diâmetro dos túbulos é constante da junção amelodentinária ao limite pulpar",
      "A dentina peritubular é mais porosa que a intertubular, facilitando a penetração bacteriana",
      "A densidade de túbulos e seu diâmetro aumentam em direção à polpa, facilitando a condução de estímulos",
      "Os túbulos são preenchidos por fibras de colágeno que impedem a penetração de qualquer substância",
    ],
    correctIndex: 2,
    explanation:
      "A densidade de túbulos aumenta de ~15.000/mm² na periferia para ~65.000/mm² próximo à polpa, e o diâmetro de ~0,5 µm para ~2–3 µm. Isso explica a maior sensibilidade da dentina profunda e a progressão das infecções em direção pulpar (Lopes & Siqueira, Endodontia: Biologia e Técnica).",
  },
  {
    id: "endo-c01-05",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Avançado",
    question: "A zona de Weil (zona acelular subodontoblástica), presente na polpa normal, é caracterizada por:",
    options: [
      "Ausência de corpos celulares e riqueza em fibras e prolongamentos, localizada entre a camada odontoblástica e a zona rica em células",
      "Presença de macrófagos e células dendríticas como principal componente de defesa local",
      "Ser a região onde ocorre a deposição de predentina antes de sua mineralização",
      "Conter os principais vasos sanguíneos e nervos que nutrem a polpa coronária",
    ],
    correctIndex: 0,
    explanation:
      "A zona de Weil situa-se entre a camada odontoblástica e a zona rica em células, é pobre em núcleos mas rica em fibras de Korff, capilares e prolongamentos celulares. É proeminente em polpas jovens e pode desaparecer em polpas envelhecidas ou inflamadas (Nanci, Ten Cate — Histologia Oral).",
  },
  {
    id: "endo-c01-06",
    subject: "Endodontia",
    topic: "Morfologia do Complexo Dentino-Pulpar",
    difficulty: "Avançado",
    question: "Qual das seguintes afirmações sobre o forame apical e o delta apical é CORRETA?",
    options: [
      "O forame apical coincide sempre com o vértice anatômico do dente",
      "A constricção dentino-cementária (CDC) localiza-se exatamente no forame principal",
      "O delta apical é mais comum em dentes anteriores jovens do que em molares maduros",
      "Em dentes com rizogênese completa, a CDC situa-se cerca de 0,5–1,0 mm aquém do forame, sendo o limite de instrumentação recomendado",
    ],
    correctIndex: 3,
    explanation:
      "A constricção dentino-cementária (CDC) é o ponto de menor diâmetro do canal, localizado em média 0,5–1,0 mm aquém do forame apical radiográfico. É o limite biológico de trabalho recomendado, pois preserva o coto cementário e o tecido periapical. O forame raramente coincide com o vértice anatômico (deslocamento lateral médio de ~0,5 mm). O delta apical é mais prevalente em molares (Lopes & Siqueira; Hargreaves/Berman, Cohen).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 2 — BIOLOGIA E FISIOPATOLOGIA PULPAR
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c02-01",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Básico",
    question: "Qual é a principal célula responsável pela produção de dentina e qual é sua origem embriológica?",
    options: [
      "Ameloblasto, derivado do epitélio interno do órgão do esmalte",
      "Odontoblasto, derivado das células da crista neural (ectomesênquima)",
      "Fibroblasto, derivado do mesênquima da papila dentária interna",
      "Cementoblasto, derivado do folículo dental",
    ],
    correctIndex: 1,
    explanation:
      "O odontoblasto é a célula especializada na produção de dentina, derivado das células da crista neural (ectomesênquima da papila dentária). Sua diferenciação é induzida pelo epitélio interno do órgão do esmalte. Possui prolongamento citoplasmático que penetra nos túbulos dentinários (Nanci, Ten Cate; Hargreaves/Berman).",
  },
  {
    id: "endo-c02-02",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Básico",
    question: "Na teoria hidrodinâmica de Brännström, a dor dentinária é explicada por:",
    options: [
      "Movimento do fluido dentinário nos túbulos em resposta a estímulos, ativando mecanorreceptores nervosos na junção predentina-polpa",
      "Ativação direta de nociceptores livres pelo agente estimulante que penetra nos túbulos",
      "Desmineralização da dentina peritubular que libera Ca²⁺ e ativa as fibras nervosas",
      "Espasmo dos odontoblastos em resposta ao frio, comprimindo as fibras nervosas adjacentes",
    ],
    correctIndex: 0,
    explanation:
      "A teoria hidrodinâmica de Brännström estabelece que estímulos externos (frio, calor, osmóticos, táteis) causam deslocamento de fluido nos túbulos dentinários, e esse movimento mecânico estimula mecanorreceptores (fibras Aδ) na região pulpodentinária, gerando dor aguda e localizada. É a teoria mais aceita para a hipersensibilidade dentinária (Hargreaves/Berman, Cohen — Caminhos da Polpa).",
  },
  {
    id: "endo-c02-03",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Intermediário",
    question: "Do ponto de vista histológico, a pulpite irreversível caracteriza-se por:",
    options: [
      "Infiltrado de linfócitos exclusivamente na polpa coronal, com polpa radicular intacta",
      "Vasodilatação transitória e edema leve, completamente reversíveis após remoção do estímulo",
      "Infiltrado inflamatório persistente, com necrose focal ou difusa e incapacidade de reparo tecidual",
      "Ausência de microrganismos na câmara, com inflamação restrita ao tecido periapical",
    ],
    correctIndex: 2,
    explanation:
      "A pulpite irreversível histologicamente apresenta infiltrado inflamatório misto (PMN e células crônicas), focos de necrose, microabscessos e destruição do arcabouço pulpar, com perda da capacidade de reparo. A pulpite reversível, em contraste, mostra inflamação mínima, sem necrose, ainda capaz de reparação (Hargreaves/Berman; Lopes & Siqueira).",
  },
  {
    id: "endo-c02-04",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Intermediário",
    question: "Qual mediador inflamatório está implicado na dor da pulpite sintomática e é o principal alvo dos AINEs?",
    options: [
      "Serotonina, sintetizada pelas plaquetas durante a agregação plaquetária no vaso pulpar",
      "Interleucina-1β (IL-1β), produzida por macrófagos e responsável pela destruição óssea periapical",
      "Fator de necrose tumoral-α (TNF-α), que recruta neutrófilos para o sítio inflamatório pulpar",
      "Prostaglandinas (especialmente PGE₂), sintetizadas via ciclooxigenase a partir do ácido araquidônico",
    ],
    correctIndex: 3,
    explanation:
      "As prostaglandinas, especialmente a PGE₂, são produzidas pela via da ciclooxigenase (COX-1 e COX-2) a partir do ácido araquidônico durante a inflamação pulpar. São potentes sensibilizadores de nociceptores. Os AINEs bloqueiam a COX, reduzindo a síntese de prostaglandinas e aliviando a dor (Hargreaves/Berman, Cohen — Caminhos da Polpa).",
  },
  {
    id: "endo-c02-05",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Avançado",
    question: "Qual é a diferença fundamental entre dentina reacional e dentina reparacional (terciária)?",
    options: [
      "A dentina reacional é produzida por odontoclastos em resposta à reabsorção; a reparacional é formada por odontoblastos em resposta à cárie",
      "A dentina reacional é depositada pelos odontoblastos primários sobreviventes em resposta a estímulo leve; a reparacional é produzida por células diferenciadas de progenitores pulpares quando os odontoblastos originais são destruídos",
      "A dentina reparacional é mais mineralizada e organizada que a reacional, sendo indistinguível da dentina primária histologicamente",
      "Ambas são produzidas pelos mesmos odontoblastos, diferindo apenas na velocidade de deposição",
    ],
    correctIndex: 1,
    explanation:
      "A dentina terciária inclui dois subtipos: a reacional, depositada pelos odontoblastos primários sobreviventes a estímulos de baixa intensidade (estrutura tubular mais regular); e a reparacional, produzida por células semelhantes a odontoblastos diferenciadas de células progenitoras pulpares quando os odontoblastos originais são destruídos — geralmente mais atubular e irregular (dentina osteóide) (Nanci, Ten Cate; Hargreaves/Berman).",
  },
  {
    id: "endo-c02-06",
    subject: "Endodontia",
    topic: "Biologia e Fisiopatologia Pulpar",
    difficulty: "Avançado",
    question: "Qual das seguintes afirmações sobre os cálculos pulpares (pedras pulpares) é CORRETA?",
    options: [
      "Podem ser verdadeiros (com estrutura dentinária tubular) ou falsos (massa calcificada desestruturada), e sua presença dificulta a localização e instrumentação dos canais",
      "São sempre patológicos e indicam necessidade de tratamento endodôntico imediato",
      "Ocorrem exclusivamente em pacientes idosos por deposição contínua de dentina secundária",
      "Sua remoção cirúrgica é o tratamento de eleição antes de qualquer procedimento restaurador",
    ],
    correctIndex: 0,
    explanation:
      "Os cálculos pulpares podem ser verdadeiros (com estrutura semelhante à dentina, com túbulos) ou falsos (massas de minerais amorfos). Geralmente são achados radiográficos sem significado patológico por si sós, mas podem dificultar enormemente a localização dos canais e a instrumentação. Não são indicação de tratamento endodôntico isoladamente (Hargreaves/Berman, Cohen; Lopes & Siqueira).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 3 — MICROBIOLOGIA ENDODÔNTICA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c03-01",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Básico",
    question: "Qual grupo microbiano predomina no canal radicular com necrose pulpar e lesão periapical crônica?",
    options: [
      "Bactérias Gram-positivas aeróbias, especialmente Streptococcus mutans",
      "Fungos do gênero Candida, associados à doença cárie avançada",
      "Bactérias anaeróbias estritas Gram-negativas (Fusobacterium, Prevotella, Porphyromonas)",
      "Vírus do grupo Herpes, responsáveis pela inflamação periapical aguda",
    ],
    correctIndex: 2,
    explanation:
      "O canal com necrose pulpar e periodontite apical crônica alberga predominantemente bactérias anaeróbias estritas Gram-negativas: Fusobacterium nucleatum, Prevotella spp., Porphyromonas endodontalis, além de Gram-positivos como Peptostreptococcus. O ambiente hipóxico favorece essa microbiota (Lopes & Siqueira; Kakehashi et al.).",
  },
  {
    id: "endo-c03-02",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Básico",
    question: "O Enterococcus faecalis é clinicamente relevante em Endodontia principalmente porque:",
    options: [
      "É o principal microrganismo nas infecções primárias de dentes com vitalidade pulpar",
      "Está associado às infecções persistentes e retratamentos, pela alta resistência e capacidade de sobreviver em canais tratados",
      "Produz endotoxinas potentes que causam necrose óssea aguda periapical",
      "É o único fungo que coloniza o canal radicular, dificultando o tratamento",
    ],
    correctIndex: 1,
    explanation:
      "E. faecalis, embora raro nas infecções primárias, é encontrado em alta frequência (até ~77% em alguns estudos) em canais de dentes tratados sem sucesso. Sua virulência deve-se à resistência ao hidróxido de cálcio, capacidade de penetrar nos túbulos dentinários, formação de biofilme e tolerância à alcalinidade (Lopes & Siqueira; Stuart et al., 2006).",
  },
  {
    id: "endo-c03-03",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Básico",
    question: "Por que a presença de biofilme bacteriano nos canais radiculares dificulta o tratamento endodôntico?",
    options: [
      "O biofilme confere proteção física e metabólica às bactérias, tornando-as até 1.000 vezes mais resistentes a antimicrobianos do que em forma planctônica",
      "O biofilme contém exclusivamente fungos que não respondem a irrigantes convencionais",
      "As bactérias em biofilme produzem esporos que sobrevivem à instrumentação e à medicação intracanal",
      "O biofilme impermeabiliza completamente os túbulos dentinários, tornando ineficaz qualquer irrigante",
    ],
    correctIndex: 0,
    explanation:
      "O biofilme é uma comunidade microbiana organizada em matriz extracelular que confere resistência física e metabólica. Nessa forma, os microrganismos são até 1.000× mais resistentes a antimicrobianos do que em forma planctônica, justificando a combinação de instrumentação mecânica e irrigação química (Lopes & Siqueira; Costerton et al.).",
  },
  {
    id: "endo-c03-04",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Intermediário",
    question: "As endotoxinas (lipopolissacarídeo — LPS) presentes no canal radicular são clinicamente relevantes porque:",
    options: [
      "São totalmente eliminadas pela instrumentação mecânica sem necessidade de irrigação complementar",
      "Causam apenas reações alérgicas locais reversíveis, sem comprometimento ósseo periapical",
      "São produzidas exclusivamente por bactérias Gram-positivas do canal radicular",
      "Ativam macrófagos via TLR-4, estimulando citocinas pró-inflamatórias (IL-1, TNF-α, PGE₂) que induzem osteoclastogênese e reabsorção óssea periapical",
    ],
    correctIndex: 3,
    explanation:
      "O LPS é componente da parede de bactérias Gram-negativas. No periápice, ativa macrófagos via TLR-4, induzindo IL-1β, TNF-α e PGE₂, que estimulam RANKL e promovem diferenciação de osteoclastos — base da lesão periapical crônica. O hipoclorito não destrói o LPS; EDTA e hidróxido de cálcio auxiliam na sua neutralização (Lopes & Siqueira; Siqueira & Lopes, 2001).",
  },
  {
    id: "endo-c03-05",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Intermediário",
    question: "Em quais situações pode ocorrer infecção extrarradicular verdadeira, justificando insucesso de tratamento endodôntico bem executado?",
    options: [
      "Em todos os casos de periodontite apical crônica, pois os microrganismos sempre colonizam o osso periapical",
      "Apenas em casos de abscesso dentoalveolar agudo com drenagem purulenta estabelecida",
      "Em casos de actinomicose apical (Actinomyces spp.) ou biofilme aderido à superfície apical externa, inacessíveis ao tratamento intrarradicular",
      "Somente em pacientes imunossuprimidos, onde as defesas não contêm os microrganismos ao espaço do canal",
    ],
    correctIndex: 2,
    explanation:
      "A infecção extrarradicular verdadeira é incomum e ocorre principalmente com Actinomyces israelii/radicidentis (actinomicose apical), que formam colônias aderidas à superfície apical e são inacessíveis ao preparo e à medicação. Nesses casos, a cirurgia apical pode ser necessária (Lopes & Siqueira; Nair et al.).",
  },
  {
    id: "endo-c03-06",
    subject: "Endodontia",
    topic: "Microbiologia Endodôntica",
    difficulty: "Avançado",
    question: "Qual é o principal mecanismo de ação do hipoclorito de sódio (NaOCl) como irrigante e qual é sua principal limitação?",
    options: [
      "Dissolução do biofilme por oxidação do DNA bacteriano; limitação: alto custo e instabilidade da solução concentrada",
      "Dissolução de tecido orgânico e ação antimicrobiana por íons hipoclorito; limitação: não remove smear layer e não penetra eficientemente em áreas inacessíveis à instrumentação",
      "Precipitação de proteínas bacterianas por alta osmolaridade; limitação: inativação rápida em contato com sangue",
      "Desnaturação de proteínas da matriz extracelular por pH ácido extremo; limitação: corrosão dos instrumentos de NiTi",
    ],
    correctIndex: 1,
    explanation:
      "O NaOCl atua pela proteólise via íon hipoclorito (OCl⁻) e bactericidia por oxidação de grupos sulfidrila. Sua principal limitação é a incapacidade de remover a smear layer (camada de esfregaço) — necessita de EDTA — e de alcançar istmos, ramificações e zonas não instrumentadas. A eficiência aumenta com maior concentração e temperatura (Lopes & Siqueira; Zehnder, J Endod 2006).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 4 — DIAGNÓSTICO PULPAR E PERIAPICAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c04-01",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Básico",
    question: "Segundo a classificação diagnóstica da AAE, um dente com dor ao frio que persiste por mais de 30 segundos após remoção do estímulo deve ser classificado como:",
    options: [
      "Polpa normal",
      "Pulpite reversível",
      "Necrose pulpar",
      "Pulpite irreversível sintomática",
    ],
    correctIndex: 3,
    explanation:
      "A pulpite irreversível sintomática (PIS) caracteriza-se por dor provocada que persiste após a remoção do estímulo (especialmente ao frio por mais de 30 segundos), frequentemente latejante. Na reversível, a dor cessa rapidamente com a remoção do estímulo (Glossário da AAE, 6ª ed.; Hargreaves/Berman, Cohen).",
  },
  {
    id: "endo-c04-02",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Básico",
    question: "O abscesso apical agudo é caracterizado clinicamente por:",
    options: [
      "Dor intensa e espontânea, sensibilidade extrema à percussão, exsudato purulento e ausência de lesão radiolúcida periapical bem definida na radiografia",
      "Ausência de sintomas, com grande área de radiolucidez periapical visível na radiografia",
      "Dor ao frio persistente, sem sensibilidade à percussão, e canal com polpa vital",
      "Edema flutuante indolor e trismo, sem sintomas à percussão e sem resposta aos testes de vitalidade",
    ],
    correctIndex: 0,
    explanation:
      "O abscesso apical agudo apresenta: dor intensa, sensibilidade extrema à percussão e palpação, exsudato purulento (às vezes com flutuação e edema extra/intraoral) e ausência de resposta aos testes de vitalidade. Radiograficamente pode ter apenas espessamento do ligamento periodontal, pois o pus está nos tecidos moles (AAE Glossary; Hargreaves/Berman).",
  },
  {
    id: "endo-c04-03",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Básico",
    question: "Qual condição periapical apresenta radiolucência periapical bem delimitada, ausência de sintomas espontâneos, mas pode exibir leve sensibilidade à palpação?",
    options: [
      "Periodontite apical aguda",
      "Periodontite apical crônica (assintomática)",
      "Abscesso apical agudo",
      "Polpa normal com hipersensibilidade dentinária",
    ],
    correctIndex: 1,
    explanation:
      "A periodontite apical crônica (assintomática) apresenta radiolucência periapical, geralmente sem sintomas espontâneos, podendo haver leve sensibilidade à palpação/percussão. Não há resposta aos testes de vitalidade. Representa a resposta imune crônica ao conteúdo infeccioso do canal (AAE Glossary; Hargreaves/Berman, Cohen).",
  },
  {
    id: "endo-c04-04",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Intermediário",
    question: "Paciente com dor à percussão horizontal, sondagem de 9 mm na face mesial, ausência de resposta ao frio, sem cárie ou trauma. O diagnóstico mais provável é:",
    options: [
      "Pulpite irreversível sintomática com envolvimento de furcação",
      "Abscesso apical agudo com drenagem via sulco gengival",
      "Lesão periodontal primária com envolvimento endodôntico secundário (lesão endo-pério)",
      "Cisto periodontal lateral com comunicação com o espaço endodôntico",
    ],
    correctIndex: 2,
    explanation:
      "O quadro descreve uma lesão endo-perio: perda óssea vertical profunda via sondagem (componente periodontal), ausência de vitalidade pulpar (componente endodôntico), sem história de cárie ou trauma. A origem periodontal primária com envolvimento endodôntico secundário é a mais provável, demandando abordagem combinada (Hargreaves/Berman; Simon et al., lesão endopério).",
  },
  {
    id: "endo-c04-05",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Intermediário",
    question: "A principal característica radiográfica que distingue a reabsorção radicular interna da reabsorção externa é:",
    options: [
      "Na reabsorção interna, a imagem radiolúcida permanece centrada no canal ao mudar a angulação do feixe; na externa, ela se desloca em relação ao canal",
      "A reabsorção interna produz imagem radiolúcida limitada ao terço apical; a externa afeta apenas o terço cervical",
      "A reabsorção externa é sempre assintomática, ao contrário da interna, que cursa com dor intensa",
      "Na reabsorção interna os contornos do canal são sempre lisos, enquanto na externa são irregulares",
    ],
    correctIndex: 0,
    explanation:
      "Pela técnica de excentricidade de Clark (SLOB), na reabsorção interna a lesão segue o canal e permanece centrada em diferentes angulações; na externa, desloca-se em relação ao canal. O CBCT é definitivo para o diagnóstico diferencial. A reabsorção interna é causada por odontoclastos dentro da polpa, frequentemente após trauma (Hargreaves/Berman; Patel et al., Int Endod J 2010).",
  },
  {
    id: "endo-c04-06",
    subject: "Endodontia",
    topic: "Diagnóstico Pulpar e Periapical",
    difficulty: "Avançado",
    question: "Qual característica é útil mas NÃO definitiva para distinguir cisto periapical de granuloma periapical?",
    options: [
      "Resposta positiva ao teste de vitalidade elétrica",
      "Sensibilidade à percussão vertical intensa e espontânea",
      "Presença de reabsorção radicular externa no ápice do dente",
      "Tamanho e definição da lâmina dura (lesões maiores e mais bem delimitadas sugerem cisto, mas o diagnóstico definitivo é histopatológico)",
    ],
    correctIndex: 3,
    explanation:
      "Radiograficamente, cistos tendem a ser maiores, com cortical bem definida, enquanto granulomas são menores e de bordas difusas — porém isso não é definitivo. Apenas a análise histopatológica após extração ou apicectomia confirma o diagnóstico. Clinicamente ambos cursam de forma assintomática na maioria dos casos (Hargreaves/Berman; Nair, 2004, J Endod).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 5 — EXAMES COMPLEMENTARES EM ENDODONTIA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c05-01",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Básico",
    question: "Qual é a diferença fundamental entre testes de vitalidade pulpar e testes de sensibilidade pulpar?",
    options: [
      "Os testes de vitalidade avaliam a resposta dolorosa à percussão; os de sensibilidade testam a resposta ao frio",
      "Os testes de sensibilidade avaliam a integridade das fibras nervosas pulpares; os de vitalidade medem o fluxo sanguíneo real (como o laser Doppler)",
      "Os testes de vitalidade são mais confiáveis por serem objetivos, ao contrário dos de sensibilidade, que são subjetivos",
      "Os testes de sensibilidade são aplicados apenas em dentes com restaurações extensas, pois avaliam a dentina residual",
    ],
    correctIndex: 1,
    explanation:
      "Testes de sensibilidade (frio, elétrico) avaliam a resposta das fibras nervosas e podem dar falso-positivo ou falso-negativo. Testes de vitalidade verdadeiros medem a circulação pulpar (fluxometria laser Doppler, oximetria de pulso) e são mais precisos, porém ainda pouco disponíveis na clínica rotineira (Hargreaves/Berman, Cohen).",
  },
  {
    id: "endo-c05-02",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Básico",
    question: "O teste de sensibilidade ao frio com gás refrigerante é considerado o padrão clínico para avaliação pulpar porque:",
    options: [
      "Causa desmineralização temporária da dentina, permitindo visualizar o limite de vitalidade",
      "Ativa seletivamente fibras C amielínicas, produzindo resposta dolorosa que persiste por horas",
      "Produz resposta rápida via fibras Aδ, sendo altamente sensível e aplicável mesmo sobre coroas metálicas via dentina exposta",
      "É o único teste sem falso-negativo em dentes com canais calcificados",
    ],
    correctIndex: 2,
    explanation:
      "O teste ao frio ativa fibras Aδ mielinizadas (dor aguda, localizada, curta duração). Pode ser aplicado sobre coroas metálicas via dentina cervical ou raiz exposta. É o teste mais sensível e específico na prática clínica. Falsos-negativos podem ocorrer em canais calcificados ou polpas senescentes (Hargreaves/Berman; Petersson et al., 1999).",
  },
  {
    id: "endo-c05-03",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Básico",
    question: "Qual é a principal limitação da radiografia periapical convencional no diagnóstico de lesões periapicais em início?",
    options: [
      "Só detecta lesões quando há pelo menos 30–40% de desmineralização óssea, pois a imagem é bidimensional e a cortical tangencia a lesão",
      "Não permite avaliação do espaço do ligamento periodontal, impedindo o diagnóstico de periodontite apical aguda",
      "É extremamente sensível ao movimento do paciente, tornando-a impraticável em situações de dor aguda",
      "Superestima sempre o tamanho das lesões devido à magnificação inerente ao sensor digital",
    ],
    correctIndex: 0,
    explanation:
      "A radiografia periapical convencional tem baixa sensibilidade para lesões iniciais porque detecta alteração óssea apenas após comprometimento da cortical ou quando há >30–40% de perda mineral. Lesões cancelares sem envolvimento cortical podem ser invisíveis. O CBCT supera essa limitação (Bender & Seltzer, 1961; Estrela et al., 2008).",
  },
  {
    id: "endo-c05-04",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Intermediário",
    question: "Em quais situações o CBCT está mais claramente indicado em endodontia, segundo diretrizes da AAE?",
    options: [
      "Diagnóstico de cárie interproximal e avaliação de profundidade de bolsa em todos os novos pacientes",
      "Estimativa do comprimento de trabalho em dentes unirradiculares anteriores com anatomia simples",
      "Avaliação de condição pulpar em todos os dentes anteriores antes do tratamento de canal",
      "Diagnóstico de canais extras (MV2), fraturas radiculares verticais, reabsorções complexas e lesões periapicais de origem incerta",
    ],
    correctIndex: 3,
    explanation:
      "O CBCT em endodontia é indicado nas situações de maior complexidade: detectar canais adicionais (MV2), diferenciar reabsorção interna de externa, identificar fraturas radiculares verticais, localizar lesões periapicais não visíveis na radiografia convencional e avaliar geometria de canais complexos. Não é indicado de rotina para casos simples (AAE Position Statement on CBCT; Patel et al.).",
  },
  {
    id: "endo-c05-05",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Intermediário",
    question: "Sensibilidade à percussão vertical em dente com tratamento endodôntico realizado há 6 meses, sem dor espontânea e sem progressão radiográfica da lesão periapical, indica mais provavelmente:",
    options: [
      "Falha do tratamento endodôntico com necessidade imediata de retratamento",
      "Periodontite apical sintomática persistente (fase de reparo em curso) ou suspeita de fratura radicular; requer acompanhamento clínico-radiográfico antes de indicar retratamento",
      "Microfissura coronária com envolvimento da câmara pulpar não tratada",
      "Presença de instrumento fraturado gerando corpo estranho e reação inflamatória periapical aguda",
    ],
    correctIndex: 1,
    explanation:
      "Sensibilidade à percussão após 6 meses, sem progressão radiográfica e sem dor espontânea, pode representar reparo em curso (a periapical leva até 2–4 anos para normalizar) ou suspeita de fratura radicular vertical. O protocolo recomenda acompanhamento com radiografias seriadas (6, 12, 24 meses) antes de indicar retratamento, salvo piora clínica (Hargreaves/Berman; Friedman, Endodontics: Colleagues for Excellence).",
  },
  {
    id: "endo-c05-06",
    subject: "Endodontia",
    topic: "Exames Complementares em Endodontia",
    difficulty: "Avançado",
    question: "Um paciente apresenta: sem resposta ao frio, resposta ao teste elétrico presente, percussão negativa, palpação negativa, sem radiolucência periapical. Qual diagnóstico é mais consistente com esses achados?",
    options: [
      "Polpa normal, pois a resposta elétrica positiva confirma vitalidade completa",
      "Necrose pulpar total, pois a ausência de resposta ao frio é patognomônica",
      "Pulpite irreversível assintomática ou calcificação pulpar extensa, pois a resposta elétrica residual sugere alguma inervação funcional sem adequada microcirculação",
      "Periodontite apical crônica estabelecida, pois a ausência de resposta ao frio indica necrose e a lesão óssea é sempre visível",
    ],
    correctIndex: 2,
    explanation:
      "Ausência de resposta ao frio com resposta elétrica presente é perfil atípico que sugere calcificação pulpar extensa (reduzindo o estímulo térmico) ou polpa envelhecida/fibrosada. Não é necessariamente necrose total. O teste elétrico detecta fibras neurais mesmo sem boa vascularização. CBCT e correlação clínica completa são essenciais antes de indicar tratamento (Hargreaves/Berman; Gopikrishna et al., 2009).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 6 — ACESSO CORONÁRIO E ANATOMIA DOS CANAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c06-01",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Básico",
    question: "A \"forma de conveniência\" durante o preparo de acesso coronário refere-se a:",
    options: [
      "Formato da cavidade que preserva o máximo de estrutura dental, independentemente da acessibilidade aos canais",
      "Abertura mínima para introdução apenas do instrumento endodôntico inicial",
      "Remoção seletiva de dentina cariada antes de localizar os canais",
      "Conformação da cavidade que permite instrumentação reta e desobstruída até a câmara pulpar e ao terço médio dos canais",
    ],
    correctIndex: 3,
    explanation:
      "A forma de conveniência é a modificação do acesso para permitir que os instrumentos cheguem aos canais sem deflexão, tangenciando as paredes sem contato prematuro. Isso reduz curvatura artificial e facilita a instrumentação, compondo os princípios da cavidade de acesso junto à forma de contorno e de resistência (Hargreaves/Berman, Cohen; Ingle).",
  },
  {
    id: "endo-c06-02",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Básico",
    question: "Qual é a forma clássica da cavidade de acesso ao incisivo central superior e por que essa geometria é adotada?",
    options: [
      "Triangular com base para incisal, pois a câmara pulpar tem essa forma com corno incisal e dois cornos palatinos, garantindo acesso a toda a câmara",
      "Circular, pois o canal é único e cilíndrico, e a broca esférica cria automaticamente essa forma",
      "Oval alongada no sentido mesiodistal, para abranger os dois canais frequentemente presentes",
      "Retangular com ângulos retos, para preservar as cristas marginais e dar resistência à coroa",
    ],
    correctIndex: 0,
    explanation:
      "O acesso ao incisivo central superior tem forma triangular com base voltada para o bordo incisal, reproduzindo a câmara pulpar jovem com corno incisal e dois cornos palatinos (mesial e distal). Isso garante acesso a toda a câmara sem remoção excessiva de dentina (Hargreaves/Berman, Cohen; Ingle & Bakland).",
  },
  {
    id: "endo-c06-03",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Básico",
    question: "Qual é a configuração anatômica mais comum do sistema de canais no incisivo lateral inferior?",
    options: [
      "Duas raízes distintas, cada uma com um canal individual",
      "Uma raiz única com canal achatado no sentido vestibulolingual, frequentemente com bifurcação (Tipo III ou V de Vertucci)",
      "Uma raiz com três canais: vestibular, lingual e lateral",
      "Duas raízes fundidas com quatro canais em delta apical",
    ],
    correctIndex: 1,
    explanation:
      "Os incisivos inferiores possuem frequentemente uma única raiz com canal achatado no sentido vestibulolingual. A bifurcação (Tipos III ou V de Vertucci) ocorre em 20–45% dos incisivos inferiores, justificando radiografias em múltiplas angulações e exploração cuidadosa com instrumento fino (Lopes & Siqueira; Vertucci 1984).",
  },
  {
    id: "endo-c06-04",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Intermediário",
    question: "Ao realizar o acesso coronário no primeiro molar inferior, a boca de entrada do canal mesiolingual (ML) é frequentemente localizada:",
    options: [
      "Na mesma linha do canal mesiobucal, diretamente na cúspide mesiovestibular",
      "Imediatamente distal ao canal distovestibular, na linha intercanal",
      "Ligeiramente lingual ao mesiobucal, dentro do triângulo de Gordon (área de dentina escura na câmara)",
      "Na bifurcação de furca, acessível apenas por remoção do soalho da câmara",
    ],
    correctIndex: 2,
    explanation:
      "O canal mesiolingual (ML) do primeiro molar inferior situa-se mais para lingual que o mesiobucal (MB), formando um triângulo mesial com MB e o canal distal. Está frequentemente coberto por uma projeção de dentina e pode ser encontrado explorando o triângulo escuro de Gordon no soalho da câmara com explorador DG16 (Vertucci; Lopes & Siqueira).",
  },
  {
    id: "endo-c06-05",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Intermediário",
    question: "A taxa de prevalência do canal MV2 no primeiro molar superior em estudos com CBCT é aproximadamente:",
    options: [
      "70–95%, sendo encontrado com muito maior frequência quando se usa magnificação e iluminação adequadas",
      "10–20%, limitado a populações asiáticas com alta variação anatômica",
      "30–40%, com variação entre faixas etárias mas sem diferença entre sexos",
      "50–55%, estabilizando-se nesse valor independentemente da técnica de acesso",
    ],
    correctIndex: 0,
    explanation:
      "Estudos com CBCT e magnificação mostram prevalência de MV2 entre 70–95% no primeiro molar superior. O não encontrar o MV2 está associado a acesso inadequado, soalho calcificado e instrumentação incompleta. Sua localização requer magnificação (lupas ou microscópio), iluminação, explorador DG16 e, por vezes, remoção de dentina cervical (Vertucci; Stropko, 1999; estudos CBCT).",
  },
  {
    id: "endo-c06-06",
    subject: "Endodontia",
    topic: "Acesso Coronário e Anatomia dos Canais",
    difficulty: "Avançado",
    question: "Qual é a complicação mais direta da \"strip perfuração\" durante instrumentação do terço cervical de molares curvos?",
    options: [
      "Fratura do instrumento no terço apical por excesso de torque compensatório",
      "Comunicação entre o canal e a furca pela perfuração da parede mais fina do canal (parede de perigo), comprometendo o suporte periodontal",
      "Transporte apical com criação de degrau e perda do comprimento de trabalho",
      "Calcificação rápida do canal após a perfuração, tornando impossível a continuação do tratamento",
    ],
    correctIndex: 1,
    explanation:
      "A strip perfuração ocorre no terço cervical de canais curvos, especialmente na raiz mesial de molares, quando o instrumento remove excessivamente a parede interna da curvatura (parede de perigo, mais fina). Resulta em comunicação com o assoalho da câmara ou o ligamento periodontal de furca, comprometendo gravemente o prognóstico (Hargreaves/Berman; Ingle; Lopes & Siqueira).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 7 — INSTRUMENTAÇÃO DOS CANAIS RADICULARES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c07-01",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Básico",
    question: "O comprimento de trabalho (CT) em endodontia é definido como:",
    options: [
      "A distância da borda incisal ou cuspídea até o vértice radiográfico do dente",
      "A distância da extremidade apical do canal até o forame apical, medida pelo localizador apical",
      "A distância da borda de referência coronária até o ponto de instrumentação e obturação, idealmente na constricção dentino-cementária (CDC)",
      "O comprimento total do dente medido na radiografia periapical, sem nenhum ajuste",
    ],
    correctIndex: 2,
    explanation:
      "O CT é a distância desde o ponto de referência coronário até o limite apical de trabalho (CDC), situada ~0,5–1,0 mm aquém do forame radiográfico. É determinado pela combinação de radiografia e localizador eletrônico apical. O CT correto garante instrumentação e obturação dentro do espaço do canal sem extrusão periapical (Hargreaves/Berman; Lopes & Siqueira).",
  },
  {
    id: "endo-c07-02",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Básico",
    question: "Qual é o princípio de funcionamento dos localizadores eletrônicos apicais (LEAs) de terceira e quarta gerações?",
    options: [
      "Emitem pulso elétrico de baixa frequência e medem a resistência da mucosa oral, que cai quando o instrumento atravessa o forame",
      "Detectam a temperatura do líquido irrigante no terço apical, que aumenta quando o instrumento passa pelo forame",
      "Utilizam diferença de pressão entre câmara pulpar e tecido periapical para calcular a posição do instrumento",
      "Medem a razão de impedância elétrica em duas frequências; quando o instrumento atinge a CDC/forame, a proporção se estabiliza em valor previsível",
    ],
    correctIndex: 3,
    explanation:
      "Os LEAs de 3ª e 4ª gerações usam duas frequências elétricas e calculam a razão de impedância/resistência entre elas. Quando o instrumento atinge a CDC/forame, essa razão atinge um valor constante previsível, independentemente do conteúdo do canal, com precisão de ~85–90% (Hargreaves/Berman; Lopes & Siqueira; Kobayashi & Suda, 1994).",
  },
  {
    id: "endo-c07-03",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "A técnica crown-down (escalonamento regressivo) apresenta, em relação ao stepback, qual vantagem principal?",
    options: [
      "Desobstrui o terço cervical e médio antes do apical, melhorando o acesso do irrigante ao ápice, reduzindo extrusão de debris periapicais e mantendo melhor o comprimento de trabalho",
      "Permite maior instrumentação apical com limas de maior calibre sem risco de fratura",
      "Elimina a necessidade de irrigação durante a instrumentação por facilitar a saída de debris pela coroa",
      "Reduz o tempo clínico total à metade por permitir uso de apenas dois instrumentos no canal",
    ],
    correctIndex: 0,
    explanation:
      "Na técnica crown-down, instrui-se do cervical para o apical, removendo biofilme e debris progressivamente. Isso: melhora o acesso do hipoclorito ao terço apical; reduz extrusão apical de material infeccioso (menor incidência de flare-up); facilita a determinação precisa do CT; e reduz desvio apical. É a base das técnicas mecanizadas atuais (Hargreaves/Berman; Buchanan, 1994).",
  },
  {
    id: "endo-c07-04",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "Qual propriedade metalúrgica do níquel-titânio (NiTi) é responsável pela superelasticidade e pela capacidade de instrumentar canais curvos com menor risco de transporte?",
    options: [
      "Dureza Vickers superior à do aço inoxidável, que confere rigidez estrutural no terço apical",
      "Transformação de fase entre austenita e martensita induzida por tensão mecânica, que permite deformação elástica de até ~8% sem deformação permanente",
      "Alto teor de carbono na liga, que aumenta a elasticidade por redução de dislocações cristalinas",
      "Revestimento de titânio sobre aço que atua como mola, devolvendo o formato original após dobramento",
    ],
    correctIndex: 1,
    explanation:
      "O NiTi é uma liga com memória de forma baseada na transformação reversível austenita ↔ martensita. Induzida por tensão mecânica (superelasticidade), permite que o instrumento deforme até ~8% e retorne ao formato original. Em temperatura corporal, o NiTi está em fase austenítica, com flexibilidade muito superior ao aço (módulo de elasticidade ~5× menor) (Hargreaves/Berman; Thompson, 2000).",
  },
  {
    id: "endo-c07-05",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "Qual é o principal mecanismo de fratura de instrumentos rotatórios de NiTi em canais curvos?",
    options: [
      "Corrosão eletroquímica pela solução irrigante de hipoclorito, que corrói as paredes do instrumento por oxidação",
      "Excesso de torque aplicado pelo motor, que supera o limite de torção antes de qualquer curvatura",
      "Sobrecarga de compressão pelo avanço excessivo e compactação de debris no terço apical",
      "Fadiga cíclica: ciclos alternados de compressão e tensão na curvatura durante a rotação, acumulando micro-trincas até a ruptura frágil sem deformação macroscópica prévia",
    ],
    correctIndex: 3,
    explanation:
      "A fratura por fadiga cíclica ocorre quando o instrumento gira em canal curvo: cada rotação submete o ponto de máxima curvatura a um ciclo de compressão/tensão. O acúmulo de micro-fissuras em NiTi (fratura frágil) pode ocorrer sem sinais visíveis de deformação, sendo o modo mais comum em instrumentos sem uso excessivo de força (Hargreaves/Berman; Sattapan et al., 2000; Pruett et al., 1997).",
  },
  {
    id: "endo-c07-06",
    subject: "Endodontia",
    topic: "Instrumentação dos Canais Radiculares",
    difficulty: "Avançado",
    question: "O sistema de instrumentação por reciprocação (ex.: WaveOne, Reciproc) reduz a fadiga cíclica em relação à rotação contínua porque:",
    options: [
      "Usa velocidade de rotação muito maior (>500 RPM), completando o ciclo antes de atingir o limite de fadiga",
      "Instrumenta o canal apical em sentido único (apenas anti-horário), eliminando o ciclo alternado de tensão",
      "O ângulo de corte anti-horário (maior) remove dentina e o ângulo menor em sentido horário libera o instrumento; o número de ciclos de tensão/compressão completos por unidade de comprimento é muito reduzido",
      "Aquece o NiTi acima da temperatura de transição, convertendo-o para fase martensítica, mais resistente à fadiga",
    ],
    correctIndex: 2,
    explanation:
      "Na reciprocação, o instrumento corta em sentido anti-horário (~150°) e recua em sentido horário (~30°), sem completar uma rotação de 360°. Isso reduz drasticamente os ciclos de tensão/compressão no ponto de curvatura por unidade de trabalho, diminuindo a fadiga cíclica, com eficiência de corte comparável à rotação contínua (De-Deus et al., 2010; Plotino et al.; Hargreaves/Berman).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 8 — IRRIGAÇÃO E MEDICAÇÃO INTRACANAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c08-01",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Básico",
    question: "Qual concentração de hipoclorito de sódio (NaOCl) é considerada clinicamente ideal por equilibrar eficácia antimicrobiana, dissolução de tecido e menor toxicidade periapical?",
    options: [
      "2,5–5,25%, que oferece boa dissolução de tecido e ação antimicrobiana com toxicidade aceitável quando usada com pressão controlada",
      "0,5% (hipoclorito diluído), única concentração comprovadamente segura sem risco de acidente",
      "10–15%, pois a maior concentração garante eliminação de 100% dos microrganismos resistentes em único ciclo",
      "0,9% com hipoclorito, pois o sal aumenta a estabilidade do cloro livre na solução",
    ],
    correctIndex: 0,
    explanation:
      "O NaOCl em 2,5–5,25% é o mais usado por conciliar poder antimicrobiano, dissolução de tecido orgânico e toxicidade manejável. Concentrações >5,25% aumentam a toxicidade sem ganho proporcional; concentrações muito baixas perdem dissolução tecidual. O acidente depende da pressão, não apenas da concentração (Hargreaves/Berman; Zehnder, J Endod 2006; Lopes & Siqueira).",
  },
  {
    id: "endo-c08-02",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Básico",
    question: "O EDTA (ácido etilenodiamino tetra-acético) é utilizado como irrigante adjunto em endodontia para:",
    options: [
      "Dissolver tecido orgânico necrótico e eliminar biofilme bacteriano no terço apical",
      "Neutralizar o pH ácido criado pelo hipoclorito de sódio, evitando irritação periapical",
      "Criar uma camada protetora de cálcio nos túbulos dentinários, impedindo recontaminação bacteriana",
      "Remover a smear layer pela quelação do cálcio do componente inorgânico da dentina, promovendo abertura dos túbulos dentinários",
    ],
    correctIndex: 3,
    explanation:
      "O EDTA é um agente quelante que complexa o cálcio dos cristais de hidroxiapatita, removendo o componente inorgânico da smear layer e abrindo os túbulos dentinários. Usado em 17% por 1–3 min antes da obturação, facilita a penetração dos sealers. O NaOCl remove o orgânico; o EDTA remove o inorgânico — a combinação é sinérgica (Hargreaves/Berman; Yamada et al.; Torabinejad et al.).",
  },
  {
    id: "endo-c08-03",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Intermediário",
    question: "Qual é a vantagem da ativação ultrassônica passiva (PUI) sobre a irrigação convencional com seringa?",
    options: [
      "Aquece o NaOCl acima de 80°C, potencializando a dissolução tecidual por hidrólise térmica acelerada",
      "Cria microcorrentes acústicas e efeito de cavitação que agitam o irrigante em toda a extensão do canal, melhorando a penetração em istmos, ramificações e debris não alcançados pela instrumentação",
      "Substitui completamente a irrigação manual, eliminando a necessidade de aspiração entre cada seringa",
      "Eleva o pH do NaOCl a valores >13, tornando-o bactericida contra E. faecalis sem agente quelante",
    ],
    correctIndex: 1,
    explanation:
      "A PUI utiliza instrumento ultrassônico em vibrações livres (sem tocar as paredes) dentro do irrigante. As oscilações geram microcorrentes acústicas (acoustic streaming) e bolhas de cavitação que agitam o líquido nos istmos, ramificações e áreas inacessíveis mecanicamente, potencializando a ação antimicrobiana (Hargreaves/Berman; van der Sluis et al., Int Endod J 2007).",
  },
  {
    id: "endo-c08-04",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Intermediário",
    question: "Qual é o principal mecanismo de ação antimicrobiana do hidróxido de cálcio [Ca(OH)₂] como medicação intracanal?",
    options: [
      "Liberação de íons cálcio que precipitam proteínas bacterianas, desnaturando enzimas essenciais ao metabolismo microbiano",
      "Produção de espécies reativas de oxigênio que oxidam a membrana lipídica bacteriana",
      "Elevação do pH para ~12,5, causando dano à membrana citoplasmática, inativação de enzimas pH-sensíveis, desnaturação proteica e hidrólise do LPS bacteriano",
      "Liberação de hipoclorito endógeno a partir da reação com a água intratubular",
    ],
    correctIndex: 2,
    explanation:
      "Ca(OH)₂ dissocia-se em íons OH⁻ e Ca²⁺. Os íons hidroxila elevam o pH a ~12,5, promovendo: dano à membrana celular bacteriana (peroxidação de lipídios); inibição de enzimas críticas; desnaturação de DNA e proteínas; e hidrólise do lipídio A do LPS, inativando sua atividade biológica. É a medicação intracanal de referência (Lopes & Siqueira; Siqueira & Lopes, 1999).",
  },
  {
    id: "endo-c08-05",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Intermediário",
    question: "Qual a conduta imediata correta em caso de acidente com extrusão de hipoclorito de sódio para os tecidos periapicais?",
    options: [
      "Irrigar abundantemente o canal com soro fisiológico, posicionar o paciente, aplicar compressas de gelo, prescrever analgésico e antibiótico se necessário, e acompanhar o caso",
      "Realizar apicectomia de emergência para remover o tecido necrosado pelo NaOCl e evitar progressão do dano",
      "Infiltrar adrenalina intralesional para vasoconstricção e redução da difusão do hipoclorito nos tecidos",
      "Neutralizar o NaOCl com solução ácida (ácido cítrico a 10%) injetada nos tecidos para reverter a alcalinidade",
    ],
    correctIndex: 0,
    explanation:
      "O acidente com NaOCl causa necrose tecidual química e equimose, com dor intensa e edema rápido. A conduta é: irrigar copiosamente com SF; controle da dor (analgésicos); compressas de gelo nas primeiras 24h; antibiótico se houver risco de infecção secundária; acompanhamento clínico — a maioria resolve sem sequelas permanentes. Apicectomia e ácido intralesional são contraindicados (Hargreaves/Berman; Kavanagh & Taylor, 1998).",
  },
  {
    id: "endo-c08-06",
    subject: "Endodontia",
    topic: "Irrigação e Medicação Intracanal",
    difficulty: "Avançado",
    question: "Qual interação química indesejável ocorre quando hipoclorito de sódio e gluconato de clorexidina entram em contato direto durante a irrigação endodôntica?",
    options: [
      "Produção de gás cloro tóxico em concentração suficiente para queimar a mucosa e o tecido pulpar",
      "Precipitação de cloreto de sódio que obstrui os túbulos dentinários e impede a ação posterior do EDTA",
      "Hidrólise mútua que inativa ambas as substâncias e cria pH neutro, eliminando o benefício antimicrobiano de cada uma",
      "Formação de paracloroanilina (PCA), composto potencialmente carcinogênico, e precipitado alaranjado-marrom que pode comprometer a obturação",
    ],
    correctIndex: 3,
    explanation:
      "A reação entre NaOCl e clorexidina forma paracloroanilina (4-cloroanilina/PCA), classificada pela IARC como possível carcinógeno, além de precipitado alaranjado-marrom visível. Por isso, nunca devem ser usados sequencialmente sem lavar com SF entre eles. O protocolo recomendado é: NaOCl → SF → EDTA → SF ou CHX (Zehnder 2006; Vivacqua-Gomes et al., 2002; Hargreaves/Berman).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 9 — OBTURAÇÃO DOS CANAIS RADICULARES
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c09-01",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Básico",
    question: "Qual é a composição principal da guta-percha endodôntica e por que ela é considerada o material de preenchimento de referência?",
    options: [
      "Polímero de poliuretano reforçado com silicone, biocompatível e radiopaco por incorporação de sulfato de bário",
      "Matriz de guta-percha natural (~20%), óxido de zinco (~70%), sulfato de bário e plastificantes; biocompatível, radiopaca, termoplástica, quimicamente inerte e removível para retratamento",
      "Goma-laca com cimento à base de eugenol que proporciona selamento hermético sem necessidade de cimento obturador",
      "Resina epóxi reforçada com hidroxiapatita, que mineraliza progressivamente com comportamento similar à dentina",
    ],
    correctIndex: 1,
    explanation:
      "A guta-percha convencional é composta por ~20% de guta-percha natural (trans-poliisopreno), ~70% de ZnO, sulfato de bário (radiopacificador) e plastificantes. É biocompatível, inerte, radiopaca, termoplástica (~60°C), insolúvel em fluidos bucais e removível com solventes no retratamento. Esses atributos a mantêm como padrão-ouro (Hargreaves/Berman; Cohen; Grossman).",
  },
  {
    id: "endo-c09-02",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Básico",
    question: "Na técnica de condensação lateral a frio, o spreader é utilizado para:",
    options: [
      "Comprimir o cone principal verticalmente e vedar o forame apical com pressão hidrostática",
      "Amolecer termicamente os cones acessórios e promover sua fusão com o cone principal",
      "Criar espaço lateral ao cone principal para inserção de cones acessórios, compactando a guta-percha no sentido lateral e apical",
      "Injetar cimento obturador entre o cone e as paredes dentinárias sob pressão positiva",
    ],
    correctIndex: 2,
    explanation:
      "O spreader é um instrumento cônico usado na condensação lateral: após o assentamento do cone principal com cimento, o spreader é introduzido lateralmente, comprimindo a guta-percha contra as paredes e criando espaço para cones acessórios. Repetindo a sequência, obtém-se preenchimento tridimensional (Hargreaves/Berman; Lopes & Siqueira).",
  },
  {
    id: "endo-c09-03",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "Qual das seguintes propriedades é considerada essencial para um cimento obturador (sealer) endodôntico ideal segundo os critérios de Grossman?",
    options: [
      "Biocompatibilidade, boa adesão à dentina e à guta-percha, boa fluidez, tempo de trabalho adequado e radiopacidade",
      "Alta solubilidade em água para favorecer a reabsorção em caso de extrusão e facilitar o retratamento",
      "Endurecimento rápido (menos de 2 minutos) para diminuir o risco de contaminação salivar durante a sessão",
      "pH alcalino permanente (>10) após presa para manutenção do efeito antimicrobiano por toda a vida do dente",
    ],
    correctIndex: 0,
    explanation:
      "Os critérios de Grossman para o sealer ideal incluem: biocompatibilidade, adesão às paredes do canal e à guta-percha, fluidez para preencher irregularidades, tempo de trabalho adequado, radiopacidade, baixa solubilidade após presa, sem contração, bacteriostático e solúvel em solventes para retratamento (Hargreaves/Berman; Grossman LI).",
  },
  {
    id: "endo-c09-04",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "Qual é a principal vantagem da compactação vertical a quente (warm vertical compaction) sobre a condensação lateral a frio?",
    options: [
      "Elimina a necessidade de cimento obturador, pois a fusão da guta-percha cria vedamento completo",
      "Permite a obturação de canais abertos (ápice imaturo) sem risco de extrusão apical",
      "É executada com instrumentos mais simples e baratos, diminuindo o custo do tratamento",
      "Adapta melhor a guta-percha à anatomia tridimensional do canal (istmos, ramificações laterais, delta apical) por meio da plastificação térmica e condensação vertical",
    ],
    correctIndex: 3,
    explanation:
      "A compactação vertical a quente (System B, Calamus etc.) aquece a guta-percha in situ, tornando-a plástica e adaptável às irregularidades do canal — istmos, ramificações laterais e delta apical são preenchidos mais eficientemente do que com condensação lateral a frio. O cimento ainda é necessário (Hargreaves/Berman; Buchanan 1994; Schilder 1967).",
  },
  {
    id: "endo-c09-05",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Intermediário",
    question: "Segundo os critérios clínico-radiográficos de sucesso, uma obturação endodôntica adequada deve:",
    options: [
      "Ter a ponta da guta-percha exatamente no vértice radiográfico, com cimento extruído para confirmar o preenchimento apical completo",
      "Terminar 0,5–2,0 mm aquém do vértice radiográfico, ser radiopaca e homogênea, sem espaços visíveis, e o cimento não deve estar extruído para os tecidos periapicais",
      "Estender-se 1–2 mm além do forame apical, pois a sobreobturação estimula a cicatrização periapical",
      "Ser completamente radiotransparente para permitir avaliação futura do tecido periapical em transparência",
    ],
    correctIndex: 1,
    explanation:
      "A obturação ideal termina na CDC (~0,5–2,0 mm aquém do vértice radiográfico), é densa, homogênea, sem bolhas de ar e sem extrusão de cimento ou guta-percha para o periápice. A sobreobturação pode causar reação de corpo estranho e dificultar o reparo. O sucesso radiográfico é avaliado aos 6, 12 e 24 meses (Hargreaves/Berman; Friedman & Mor, 2004).",
  },
  {
    id: "endo-c09-06",
    subject: "Endodontia",
    topic: "Obturação dos Canais Radiculares",
    difficulty: "Avançado",
    question: "Os sealers biocerâmicos (ex.: BioRoot RCS, Total Fill BC Sealer) apresentam qual característica que os diferencia dos cimentos convencionais à base de óxido de zinco-eugenol?",
    options: [
      "São completamente radiotransparentes, facilitando a avaliação radiográfica da obturação",
      "Requerem aquecimento externo a 120°C antes do uso, tornando o protocolo mais complexo",
      "São hidrofílicos, endurecem na presença de umidade dentinária, apresentam biocompatibilidade superior, potencial de bioatividade e expansão leve durante a presa, melhorando o selamento marginal",
      "Dissolvem completamente o biofilme residual de E. faecalis após a presa, substituindo a medicação intracanal com Ca(OH)₂",
    ],
    correctIndex: 2,
    explanation:
      "Os sealers biocerâmicos (à base de silicato de cálcio) são hidrofílicos — endurecem usando a umidade da dentina — e liberam hidróxido de cálcio ao endurecer, com pH alcalino (bioatividade e ação antimicrobiana). Apresentam expansão leve (~0,2%) durante a presa, adaptando-se às microirregularidades, e não contêm eugenol. São recomendados com técnica de cone único ou compactação a quente (Torabinejad et al.; Koch & Brave, 2009).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ENDODONTIA — CAP. 10 — RETRATAMENTO ENDODÔNTICO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "endo-c10-01",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Básico",
    question: "Qual é a principal indicação do retratamento endodôntico não-cirúrgico?",
    options: [
      "Dente com obturação adequada e assintomático, que será utilizado como pilar de prótese extensa",
      "Dente com calcificação total do canal, inacessível a qualquer instrumento",
      "Fratura radicular vertical confirmada ao CBCT, com bolsa periodontal associada",
      "Falha do tratamento anterior, evidenciada por persistência de sintomas, lesão periapical que não regrediu em 4 anos ou progressão da lesão periapical",
    ],
    correctIndex: 3,
    explanation:
      "O retratamento não-cirúrgico é indicado quando o tratamento original falhou: sintomas persistentes, lesão periapical que não regride no prazo esperado (>4 anos) ou piora radiográfica. Outras indicações incluem canal não instrumentado ou obturação deficiente com sintomas. A fratura radicular vertical é geralmente indicação de extração (Hargreaves/Berman; Friedman 2002).",
  },
  {
    id: "endo-c10-02",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Básico",
    question: "Qual combinação de técnica e material é mais frequentemente utilizada para remover a guta-percha durante o retratamento endodôntico?",
    options: [
      "Instrumentos rotatórios de NiTi específicos para retratamento (ex.: ProTaper Retreatment, D-RaCe) associados a solventes (eucaliptol ou clorofórmio) quando necessário",
      "Laser Er:YAG em modo pulsado, que vaporiza a guta-percha sem necessidade de instrumentação mecânica",
      "Instrumentos de aço ultrafinos manuais, associados a irrigação com água morna",
      "Brocas de alta rotação em canal seco, sem solvente, para evitar amolecimento excessivo da guta-percha",
    ],
    correctIndex: 0,
    explanation:
      "O retratamento utiliza instrumentos rotatórios de NiTi com geometria específica (ex.: ProTaper Retreatment D1/D2/D3; D-RaCe; Mtwo R) que desgastam a guta-percha e o cimento, auxiliados quando necessário por solventes (eucaliptol é preferido por menor toxicidade). A combinação é mais eficiente e segura que instrumentação manual isolada (Hargreaves/Berman; Lopes & Siqueira; Hülsmann & Bluhm, 2004).",
  },
  {
    id: "endo-c10-03",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Intermediário",
    question: "Em quais situações a cirurgia apical (apicectomia + curetagem periapical) é preferida ao retratamento não-cirúrgico?",
    options: [
      "Sempre que houver lesão periapical, pois a cirurgia tem maior taxa de sucesso em todas as situações",
      "Quando o acesso ao canal está obstruído por pino inextricável, instrumento fraturado no terço apical inacessível, ou quando o retratamento já foi realizado sem sucesso e a anatomia apical é inacessível por via coronária",
      "Em todos os casos de dente assintomático com imagem periapical, para diagnóstico histopatológico do tecido periapical",
      "Quando o paciente recusa o tratamento endodôntico convencional e opta pela cirurgia como alternativa mais rápida",
    ],
    correctIndex: 1,
    explanation:
      "A cirurgia apical é indicada quando: o canal está inacessível via coronária (pino solidário, instrumento fraturado no 1/3 apical, calcificação do 1/3 apical); retratamento não-cirúrgico já foi tentado sem sucesso; necessidade de biópsia da lesão periapical; ou lesão não resolvida após retratamento adequado (possível actinomicose). O retratamento não-cirúrgico tem taxa de sucesso de ~77% e é a primeira escolha quando o canal é acessível (Hargreaves/Berman; Setzer et al., J Endod 2010).",
  },
  {
    id: "endo-c10-04",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Intermediário",
    question: "Qual é o material de retro-obturação considerado padrão-ouro atualmente na cirurgia apical?",
    options: [
      "Amálgama de prata, por sua excelente estabilidade dimensional, baixo custo e facilidade de condensação na cripta óssea",
      "Óxido de zinco-eugenol reforçado (IRM), pela capacidade de presa rápida em ambiente úmido e biocompatibilidade comprovada",
      "MTA (Mineral Trioxide Aggregate) ou sealers biocerâmicos à base de silicato de cálcio, pela biocompatibilidade superior, capacidade de endurecer em ambiente úmido, bioatividade e selamento hermético",
      "Guta-percha termoplástica injetável, pela adaptação perfeita à cavidade retrógrada irregular sem necessidade de condensação",
    ],
    correctIndex: 2,
    explanation:
      "O MTA (ProRoot MTA, MTA Angelus) e os biocerâmicos similares são o padrão atual para retro-obturação: endurecem na presença de umidade do osso; são biocompatíveis e bioativos (estimulam deposição de cemento/osso); oferecem selamento hermético e pH alcalino antibacteriano; com excelentes taxas de sucesso cirúrgico (~90%). O amálgama foi abandonado por corrosão e mercúrio (Hargreaves/Berman; Torabinejad & Parirokh; Setzer et al., 2010).",
  },
  {
    id: "endo-c10-05",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Intermediário",
    question: "Quando um instrumento endodôntico fraturam no terço apical com lesão periapical extensa, qual fator é o mais importante para definir a conduta?",
    options: [
      "Se o canal estava infectado ou vital no momento da fratura, e se o instrumento está além ou aquém da curvatura — canal vital com instrumento aquém da curvatura tem prognóstico favorável sem remoção obrigatória",
      "O material do instrumento fraturado (NiTi vs. aço), pois o NiTi é mais solúvel no NaOCl e pode ser dissolvido",
      "O comprimento do fragmento fraturado, pois fragmentos >6 mm sempre exigem remoção cirúrgica imediata",
      "A presença de cárie residual, pois sem cárie o instrumento fraturado não interfere no prognóstico",
    ],
    correctIndex: 0,
    explanation:
      "O prognóstico de instrumento fraturado depende principalmente de: (1) estágio da infecção (canal necrótico infectado tem pior prognóstico se o instrumento impede o preparo); (2) localização (aquém ou além da curvatura e do forame); (3) capacidade de contornar ou remover o fragmento. Canal previamente vital, fraturado antes da contaminação, com instrumento aquém da curvatura: bom prognóstico sem remoção (Hargreaves/Berman; Spili et al., 2005).",
  },
  {
    id: "endo-c10-06",
    subject: "Endodontia",
    topic: "Retratamento Endodôntico",
    difficulty: "Avançado",
    question: "Segundo a revisão sistemática de Friedman & Mor (2004) e a literatura atual de outcomes endodônticos, qual é a taxa de sucesso esperada do retratamento não-cirúrgico em dentes com periodontite apical?",
    options: [
      "Semelhante à do tratamento inicial (~90–95%), pois a reinfecção é totalmente eliminável com protocolo rigoroso",
      "Inferior a 50%, pois a presença de biofilme resistente torna o retratamento ineficaz na maioria dos casos",
      "Igual à da cirurgia apical com MTA (>90%), tornando as duas abordagens equivalentes em qualquer cenário",
      "Aproximadamente 75–80%, inferior à do tratamento inicial em dentes vitais (~90%), refletindo a maior complexidade de eliminar infecção estabelecida",
    ],
    correctIndex: 3,
    explanation:
      "Meta-análises (Friedman & Mor, 2004; Ng et al., 2008) mostram taxa de sucesso do retratamento não-cirúrgico de ~75–80% em dentes com periodontite apical estabelecida, inferior ao tratamento inicial de dentes vitais (~90%). A diferença reflete a dificuldade de eliminar biofilme em canais previamente obturados, ramificações e dentina infectada (Hargreaves/Berman; Ng et al., IJED 2008).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 1 — PERIODONTO NORMAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c01-01",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Básico",
    question: "O periodonto de sustentação (ou de inserção) é formado por quais estruturas?",
    options: [
      "Esmalte, dentina, polpa e cemento radicular",
      "Cemento, ligamento periodontal e osso alveolar",
      "Gengiva inserida, gengiva livre e mucosa alveolar",
      "Mucosa mastigatória, mucosa de revestimento e mucosa especializada",
    ],
    correctIndex: 1,
    explanation:
      "O periodonto de sustentação (inserção) é composto por cemento, ligamento periodontal e osso alveolar. A gengiva integra o periodonto de proteção. Esmalte, dentina e polpa pertencem ao dente, não ao periodonto (Carranza/Lindhe).",
  },
  {
    id: "perio-c01-02",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Básico",
    question: "Qual epitélio realiza a inserção da gengiva à superfície dental por meio de hemidesmossomos e lâmina basal interna?",
    options: [
      "Epitélio oral (gengival externo)",
      "Epitélio sulcular",
      "Epitélio juncional",
      "Epitélio reduzido do órgão do esmalte",
    ],
    correctIndex: 2,
    explanation:
      "O epitélio juncional adere-se à superfície dental por hemidesmossomos e lâmina basal interna, formando a inserção epitelial. O epitélio sulcular reveste o sulco e o epitélio oral recobre a gengiva externa (Carranza).",
  },
  {
    id: "perio-c01-03",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Básico",
    question: "Em condições de saúde, a profundidade de sondagem do sulco gengival situa-se geralmente entre:",
    options: [
      "1 e 3 mm",
      "4 e 5 mm",
      "0 e 0,5 mm",
      "5 e 7 mm",
    ],
    correctIndex: 0,
    explanation:
      "Em saúde, a profundidade de sondagem do sulco gengival varia em torno de 1 a 3 mm. Valores de 4 mm ou mais sugerem aprofundamento patológico (bolsa) ou pseudobolsa por edema (Carranza/Lindhe).",
  },
  {
    id: "perio-c01-04",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Intermediário",
    question: "Segundo o estudo clássico de Gargiulo, Wentz & Orban (1961), o espaço biológico (inserção supracrestal) mede em média cerca de 2,04 mm e é composto por:",
    options: [
      "epitélio sulcular de 0,69 mm e cemento de 1,07 mm",
      "sulco gengival de 0,97 mm e osso alveolar de 1,07 mm",
      "epitélio juncional de 0,69 mm e tecido conjuntivo de 1,35 mm",
      "epitélio juncional de 0,97 mm e tecido conjuntivo de 1,07 mm",
    ],
    correctIndex: 3,
    explanation:
      "Gargiulo et al. (1961) descreveram epitélio juncional médio de ~0,97 mm e inserção conjuntiva de ~1,07 mm, somando o espaço biológico de ~2,04 mm. O sulco (~0,69 mm) não integra essa medida (Carranza).",
  },
  {
    id: "perio-c01-05",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Intermediário",
    question: "No ligamento periodontal, o grupo de fibras principais mais numeroso e que resiste às forças intrusivas (axiais) da mastigação é o:",
    options: [
      "grupo da crista alveolar",
      "grupo horizontal",
      "grupo oblíquo",
      "grupo apical",
    ],
    correctIndex: 2,
    explanation:
      "As fibras oblíquas são as mais numerosas do ligamento periodontal e transformam a força mastigatória axial (intrusiva) em tração sobre o osso alveolar. As da crista alveolar e horizontais resistem a forças laterais (Lindhe).",
  },
  {
    id: "perio-c01-06",
    subject: "Periodontia",
    topic: "Periodonto Normal",
    difficulty: "Avançado",
    question: "Em relação ao cemento radicular, qual afirmativa está correta?",
    options: [
      "O cemento celular (secundário) predomina no terço apical e nas furcas e forma-se após a erupção do dente",
      "O cemento acelular cobre principalmente o ápice e contém cementócitos alojados em lacunas",
      "O cemento é mais espesso na região cervical e torna-se mais fino em direção ao ápice ao longo da vida",
      "O cemento não sofre aposição contínua e mantém espessura constante após a erupção dental",
    ],
    correctIndex: 0,
    explanation:
      "O cemento celular (secundário) localiza-se sobretudo no terço apical e nas furcas, contém cementócitos e forma-se após a erupção, com aposição contínua. O acelular (primário) cobre o terço cervical/médio. O cemento é mais espesso no ápice (Carranza/Lindhe).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 2 — ETIOLOGIA: BIOFILME E CÁLCULO DENTAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c02-01",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Básico",
    question: "O biofilme dental (placa bacteriana) é melhor definido como:",
    options: [
      "depósito mineralizado aderido à superfície dental, removível apenas por instrumentos",
      "acúmulo de restos alimentares facilmente eliminados pelo jato de água",
      "película adquirida acelular composta por glicoproteínas salivares",
      "comunidade microbiana organizada em matriz de polissacarídeos, aderida a superfícies",
    ],
    correctIndex: 3,
    explanation:
      "O biofilme dental é uma comunidade microbiana estruturada em matriz de exopolissacarídeos, aderida a superfícies. O depósito mineralizado é o cálculo; a película adquirida é a base acelular sobre a qual o biofilme se forma (Carranza/Lindhe).",
  },
  {
    id: "perio-c02-02",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Básico",
    question: "A primeira etapa na formação do biofilme sobre a superfície limpa do esmalte é:",
    options: [
      "a deposição da película adquirida, formada por glicoproteínas salivares",
      "a adesão dos colonizadores secundários, como Fusobacterium",
      "a mineralização da matriz por sais de cálcio e fosfato",
      "a colonização por bactérias anaeróbias gram-negativas",
    ],
    correctIndex: 0,
    explanation:
      "A formação do biofilme inicia-se com a película adquirida (glicoproteínas salivares) sobre o esmalte; só então aderem os colonizadores primários, seguidos dos secundários. A mineralização leva ao cálculo, etapa posterior (Carranza).",
  },
  {
    id: "perio-c02-03",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Básico",
    question: "Os colonizadores primários (iniciais) do biofilme supragengival são predominantemente:",
    options: [
      "bastonetes anaeróbios gram-negativos, como Porphyromonas gingivalis",
      "cocos gram-positivos, como Streptococcus e Actinomyces",
      "espiroquetas móveis, como Treponema denticola",
      "fusobactérias que servem de ponte entre os colonizadores",
    ],
    correctIndex: 1,
    explanation:
      "Os colonizadores iniciais são sobretudo cocos e bastonetes gram-positivos (Streptococcus, Actinomyces). P. gingivalis e Treponema são colonizadores tardios; Fusobacterium funciona como ponte entre precoces e tardios (Carranza/Lindhe).",
  },
  {
    id: "perio-c02-04",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Intermediário",
    question: "Sobre o cálculo dental subgengival, é correto afirmar que:",
    options: [
      "é esbranquiçado e localiza-se acima da margem gengival",
      "sua principal fonte de minerais é a saliva",
      "costuma ser escuro e duro, e sua fonte mineral principal é o fluido crevicular/exsudato",
      "não se associa à inflamação gengival quando está bem aderido",
    ],
    correctIndex: 2,
    explanation:
      "O cálculo subgengival é escuro, duro e densamente aderido, com minerais derivados do fluido crevicular/exsudato inflamatório. O supragengival é claro e mineralizado pela saliva. Ambos retêm biofilme e perpetuam a inflamação (Carranza).",
  },
  {
    id: "perio-c02-05",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Intermediário",
    question: "Qual é o papel do cálculo dental na doença periodontal?",
    options: [
      "Atua como fator retentivo: sua superfície porosa abriga o biofilme, que é o agente etiológico primário",
      "É o agente etiológico primário, e sua remoção isolada elimina a inflamação sem controle do biofilme",
      "É totalmente inerte e irrelevante, não interferindo na progressão da doença",
      "Causa a doença por liberar diretamente endotoxinas a partir de seus cristais minerais",
    ],
    correctIndex: 0,
    explanation:
      "O cálculo está sempre recoberto por biofilme vivo, que é o agente etiológico primário; o cálculo age como fator retentivo secundário, dificultando o controle do biofilme. Sua remoção é importante, mas não substitui o controle do biofilme (Carranza/Lindhe).",
  },
  {
    id: "perio-c02-06",
    subject: "Periodontia",
    topic: "Biofilme e Cálculo Dental",
    difficulty: "Avançado",
    question: "Segundo os complexos microbianos de Socransky (1998), o 'complexo vermelho', fortemente associado à periodontite, é composto por:",
    options: [
      "Aggregatibacter actinomycetemcomitans, Capnocytophaga e Eikenella",
      "Streptococcus sanguinis, Actinomyces e Veillonella",
      "Fusobacterium nucleatum, Prevotella intermedia e Campylobacter",
      "Porphyromonas gingivalis, Tannerella forsythia e Treponema denticola",
    ],
    correctIndex: 3,
    explanation:
      "O complexo vermelho de Socransky reúne Porphyromonas gingivalis, Tannerella forsythia e Treponema denticola, fortemente ligados à periodontite. O complexo laranja inclui Fusobacterium e Prevotella; A. actinomycetemcomitans fica fora desses complexos (Carranza).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 3 — PATOGÊNESE, RESPOSTA DO HOSPEDEIRO E FATORES DE RISCO
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c03-01",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Básico",
    question: "As bactérias gram-negativas do biofilme subgengival liberam um componente da parede celular que estimula intensa resposta inflamatória do hospedeiro. Esse componente é:",
    options: [
      "o ácido lipoteicoico",
      "uma exotoxina proteica secretada",
      "o lipopolissacarídeo (LPS, endotoxina)",
      "o peptidoglicano da cápsula bacteriana",
    ],
    correctIndex: 2,
    explanation:
      "O lipopolissacarídeo (LPS), ou endotoxina, é componente da membrana externa das gram-negativas e potente ativador da resposta inflamatória do hospedeiro. O ácido lipoteicoico é característico de gram-positivas (Carranza/Lindhe).",
  },
  {
    id: "perio-c03-02",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Básico",
    question: "Qual mediador do hospedeiro tem papel central na reabsorção do osso alveolar durante a periodontite?",
    options: [
      "A imunoglobulina A secretora da saliva",
      "As citocinas pró-inflamatórias (IL-1β, TNF-α) e a via RANKL/OPG",
      "O fator de crescimento epidérmico (EGF) tecidual",
      "A enzima fosfatase alcalina de origem salivar",
    ],
    correctIndex: 1,
    explanation:
      "Citocinas pró-inflamatórias como IL-1β e TNF-α, atuando pela via RANKL/OPG, ativam osteoclastos e medeiam a reabsorção óssea na periodontite. A destruição é, em grande parte, resultado da resposta do hospedeiro (Lindhe).",
  },
  {
    id: "perio-c03-03",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Intermediário",
    question: "A degradação do colágeno do tecido conjuntivo gengival na periodontite é mediada principalmente por:",
    options: [
      "fosfolipases bacterianas, de forma exclusiva",
      "radicais livres liberados pelos cristais do cálculo",
      "imunocomplexos depositados na membrana basal",
      "metaloproteinases da matriz (MMPs), sobretudo colagenases de neutrófilos e fibroblastos",
    ],
    correctIndex: 3,
    explanation:
      "As metaloproteinases da matriz (MMPs), especialmente colagenases liberadas por neutrófilos e fibroblastos em resposta ao estímulo bacteriano, são as principais responsáveis pela degradação do colágeno gengival (Carranza/Lindhe).",
  },
  {
    id: "perio-c03-04",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Intermediário",
    question: "Sobre o tabagismo como fator de risco para periodontite, é correto afirmar que:",
    options: [
      "agrava a gravidade e a progressão da doença e tende a mascarar o sangramento à sondagem por vasoconstrição",
      "aumenta o sangramento gengival, o que torna o diagnóstico clínico mais evidente",
      "não exerce qualquer influência sobre a resposta ao tratamento periodontal",
      "protege contra a perda óssea por um efeito antimicrobiano direto da nicotina",
    ],
    correctIndex: 0,
    explanation:
      "O tabagismo é o principal fator de risco modificável: aumenta gravidade e progressão, prejudica a cicatrização e a resposta ao tratamento, e a vasoconstrição reduz o sangramento, podendo mascarar a inflamação (Carranza/Lindhe).",
  },
  {
    id: "perio-c03-05",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Intermediário",
    question: "A relação entre diabetes mellitus e periodontite é considerada:",
    options: [
      "inexistente, pois envolvem órgãos sem qualquer relação fisiológica",
      "bidirecional: o diabetes mal controlado agrava a periodontite, e a periodontite dificulta o controle glicêmico",
      "unidirecional, com a periodontite atuando como causa do diabetes tipo 1",
      "protetora, pois a hiperglicemia inibe a flora bacteriana subgengival",
    ],
    correctIndex: 1,
    explanation:
      "A relação diabetes-periodontite é bidirecional: a hiperglicemia mal controlada amplifica a inflamação e a destruição periodontal, e a periodontite, por sua carga inflamatória sistêmica, dificulta o controle glicêmico (Carranza/Lindhe).",
  },
  {
    id: "perio-c03-06",
    subject: "Periodontia",
    topic: "Patogênese e Fatores de Risco",
    difficulty: "Avançado",
    question: "A teoria contemporânea da etiopatogenia da periodontite (hipótese da placa disbiótica / patógeno-chave) propõe que:",
    options: [
      "uma única espécie bacteriana é necessária e suficiente para causar a doença em qualquer indivíduo",
      "a quantidade total de biofilme é o único determinante, independentemente de sua composição",
      "a disbiose da microbiota, modulada por patógenos-chave (ex.: P. gingivalis) e pela resposta do hospedeiro, desencadeia a destruição",
      "a doença resulta apenas de deficiência imunológica do hospedeiro, sem participação bacteriana",
    ],
    correctIndex: 2,
    explanation:
      "O modelo atual (Hajishengallis) propõe que patógenos-chave como P. gingivalis, mesmo em baixa proporção, subvertem a resposta do hospedeiro e induzem disbiose da microbiota, gerando a destruição. Supera as hipóteses da placa específica (espécie única) e inespecífica (quantidade) (Carranza).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 4 — CLASSIFICAÇÃO DAS DOENÇAS PERIODONTAIS (2017 AAP/EFP)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c04-01",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Básico",
    question: "A classificação das doenças e condições periodontais e peri-implantares de 2017 (AAP/EFP) distinguiu-se da de 1999 principalmente por:",
    options: [
      "introduzir o estadiamento (stages) e a graduação (grades) da periodontite e categorias peri-implantares",
      "eliminar por completo o conceito de gengivite da classificação",
      "unificar todas as periodontites sob o termo 'periodontite agressiva'",
      "restringir o diagnóstico apenas à profundidade de sondagem isolada",
    ],
    correctIndex: 0,
    explanation:
      "A classificação de 2017 introduziu o sistema de estágios (gravidade/complexidade) e graus (risco de progressão) para a periodontite, além de categorias específicas para saúde e doenças peri-implantares (Caton et al., 2018; Carranza).",
  },
  {
    id: "perio-c04-02",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Básico",
    question: "Na classificação de 2017, as antigas categorias 'periodontite crônica' e 'periodontite agressiva' foram:",
    options: [
      "mantidas como duas doenças completamente distintas e independentes",
      "renomeadas, respectivamente, como gengivite localizada e generalizada",
      "transformadas em subtipos de condições peri-implantares",
      "agrupadas em uma única doença, 'periodontite', caracterizada por estágios e graus",
    ],
    correctIndex: 3,
    explanation:
      "A classificação de 2017 abandonou a distinção crônica vs. agressiva, agrupando-as sob a doença única 'periodontite', cuja descrição passa a usar estágio e grau (Caton et al., 2018).",
  },
  {
    id: "perio-c04-03",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Intermediário",
    question: "No sistema de 2017, o estágio (stage) da periodontite é determinado principalmente pela:",
    options: [
      "velocidade de progressão estimada pela perda óssea dividida pela idade",
      "presença ou ausência de sangramento à sondagem nos sítios",
      "gravidade e complexidade do manejo (perda de inserção, perda óssea radiográfica e perda dentária)",
      "contagem de Porphyromonas gingivalis no biofilme subgengival",
    ],
    correctIndex: 2,
    explanation:
      "O estágio (I a IV) baseia-se na gravidade e na complexidade do tratamento, considerando perda de inserção interdental, extensão/padrão da perda óssea radiográfica e perda dentária. A velocidade de progressão define o grau, não o estágio (Carranza).",
  },
  {
    id: "perio-c04-04",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Intermediário",
    question: "O grau (grade) na classificação de 2017 reflete o risco de progressão e considera, entre outros fatores:",
    options: [
      "o número de dentes ausentes por motivo de cárie dentária",
      "a razão perda óssea radiográfica/idade, além de tabagismo e controle glicêmico do diabetes",
      "a profundidade de sondagem máxima isolada de um único sítio",
      "a extensão localizada (<30%) ou generalizada (≥30%) das lesões",
    ],
    correctIndex: 1,
    explanation:
      "O grau (A, B ou C) estima o risco/velocidade de progressão pela razão perda óssea/idade e é modificado por fatores como tabagismo (cigarros/dia) e nível de HbA1c no diabetes. A extensão é descritor à parte (Carranza).",
  },
  {
    id: "perio-c04-05",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Intermediário",
    question: "Na periodontite, o estágio é definido na maioria dos casos pela perda de inserção clínica (PIC) interdental no sítio mais acometido. O Estágio I corresponde a:",
    options: [
      "PIC ≥ 5 mm com perda dentária por motivo periodontal",
      "PIC de 3 a 4 mm",
      "PIC ≥ 5 mm sem perda dentária associada",
      "PIC de 1 a 2 mm",
    ],
    correctIndex: 3,
    explanation:
      "No sistema de 2017, a PIC interdental define: Estágio I = 1–2 mm; II = 3–4 mm; III = ≥5 mm (com risco de perda dentária); IV = ≥5 mm com perda dentária extensa e reabilitação complexa (Caton et al., 2018).",
  },
  {
    id: "perio-c04-06",
    subject: "Periodontia",
    topic: "Classificação 2017 (AAP/EFP)",
    difficulty: "Avançado",
    question: "Um paciente jovem, não fumante e não diabético, apresenta razão perda óssea radiográfica/idade maior que 1,0. Segundo o sistema de graduação de 2017, isso indica:",
    options: [
      "Grau C, padrão de progressão rápida",
      "Grau A, padrão de progressão lenta",
      "Grau B, padrão de progressão moderada",
      "Estágio IV, independentemente da progressão",
    ],
    correctIndex: 0,
    explanation:
      "A razão perda óssea/idade define o grau: <0,25 = Grau A (lenta); 0,25–1,0 = Grau B (moderada); >1,0 = Grau C (rápida). Em paciente jovem sem fatores modificadores, esse valor aponta progressão rápida (Grau C) (Carranza).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 5 — DOENÇAS GENGIVAIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c05-01",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Básico",
    question: "A gengivite associada ao biofilme dental caracteriza-se por:",
    options: [
      "perda óssea alveolar irreversível detectável radiograficamente",
      "inflamação restrita à gengiva, sem perda de inserção, reversível com controle do biofilme",
      "migração apical do epitélio juncional com formação de bolsa verdadeira",
      "necrose das papilas interdentais recobertas por pseudomembrana",
    ],
    correctIndex: 1,
    explanation:
      "A gengivite induzida por biofilme é uma inflamação limitada à gengiva, sem perda de inserção clínica, e reverte com o controle do biofilme. Perda óssea/inserção caracteriza periodontite; necrose papilar caracteriza doenças necrosantes (Carranza/Lindhe).",
  },
  {
    id: "perio-c05-02",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Básico",
    question: "Qual conjunto de sinais clínicos é típico da gengivite?",
    options: [
      "Retração gengival acentuada, mobilidade dentária e supuração",
      "Palidez da mucosa, fibrose e ausência completa de sangramento",
      "Edema, vermelhidão, sangramento à sondagem e perda do pontilhado",
      "Necrose das papilas, halitose intensa e linfadenopatia regional",
    ],
    correctIndex: 2,
    explanation:
      "A gengivite manifesta-se por edema, eritema (vermelhidão), sangramento à sondagem e perda do aspecto pontilhado ('casca de laranja'). Mobilidade e retração relacionam-se a perda de inserção (periodontite) (Carranza).",
  },
  {
    id: "perio-c05-03",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Básico",
    question: "O aumento da profundidade de sondagem na gengivite, sem perda de inserção, decorre do edema/aumento de volume da margem gengival e é denominado:",
    options: [
      "pseudobolsa (bolsa gengival)",
      "bolsa infraóssea",
      "bolsa supraóssea verdadeira",
      "deiscência óssea alveolar",
    ],
    correctIndex: 0,
    explanation:
      "Na pseudobolsa (bolsa gengival), o aprofundamento resulta do aumento de volume da margem gengival sem migração apical do epitélio juncional — não há perda de inserção, diferentemente das bolsas verdadeiras (Carranza).",
  },
  {
    id: "perio-c05-04",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Intermediário",
    question: "O aumento gengival (hiperplasia/crescimento gengival) associado ao uso de fármacos é classicamente provocado por:",
    options: [
      "amoxicilina, paracetamol e omeprazol",
      "ibuprofeno, dipirona e cafeína",
      "insulina, levotiroxina e ácido fólico",
      "fenitoína, ciclosporina e bloqueadores dos canais de cálcio (ex.: nifedipino)",
    ],
    correctIndex: 3,
    explanation:
      "O crescimento gengival induzido por fármacos associa-se classicamente a anticonvulsivantes (fenitoína), imunossupressores (ciclosporina) e bloqueadores dos canais de cálcio (ex.: nifedipino). O biofilme é fator agravante (Carranza/Lindhe).",
  },
  {
    id: "perio-c05-05",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Intermediário",
    question: "A gengivite ulcerativa necrosante (GUN) apresenta como tríade clássica de sinais e sintomas:",
    options: [
      "mobilidade dentária, retração gengival e hipersensibilidade radicular",
      "dor, necrose/ulceração das papilas interdentais (aspecto 'em saca-bocado') e sangramento gengival",
      "edema indolor, aumento de volume e palidez da mucosa marginal",
      "febre alta, trismo e disfagia, obrigatoriamente presentes em todos os casos",
    ],
    correctIndex: 1,
    explanation:
      "A GUN caracteriza-se pela tríade dor, necrose/ulceração das papilas interdentais com aspecto 'em saca-bocado' (crateras) e sangramento. Pseudomembrana acinzentada e halitose fétida são achados frequentes (Carranza).",
  },
  {
    id: "perio-c05-06",
    subject: "Periodontia",
    topic: "Doenças Gengivais",
    difficulty: "Avançado",
    question: "Sobre a etiologia e os fatores predisponentes da gengivite ulcerativa necrosante, é correto afirmar que:",
    options: [
      "é causada por um vírus e independe de qualquer alteração da resposta do hospedeiro",
      "ocorre tipicamente em pacientes com excelente higiene bucal e baixo nível de estresse",
      "tem flora fusoespiroquetal (Fusobacterium, Treponema, Prevotella intermedia) e é favorecida por estresse, tabagismo e imunossupressão",
      "é uma condição não infecciosa, de origem puramente traumática ou mecânica",
    ],
    correctIndex: 2,
    explanation:
      "A GUN associa-se a flora fusoespiroquetal (Fusobacterium, Treponema, Prevotella intermedia) e a fatores predisponentes como estresse, tabagismo, má higiene, desnutrição e imunossupressão (incluindo HIV) (Carranza/Lindhe).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 6 — PERIODONTITE: FORMAS E CARACTERÍSTICAS CLÍNICAS
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c06-01",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Básico",
    question: "A característica que distingue fundamentalmente a periodontite da gengivite é:",
    options: [
      "a presença de sangramento à sondagem nos sítios afetados",
      "o acúmulo de biofilme dental supragengival na margem",
      "a vermelhidão e o edema da margem gengival livre",
      "a perda de inserção clínica com migração apical do epitélio juncional e reabsorção óssea",
    ],
    correctIndex: 3,
    explanation:
      "O que define a periodontite é a perda de inserção clínica, com migração apical do epitélio juncional e reabsorção do osso alveolar. Sangramento, edema e biofilme também ocorrem na gengivite, que é reversível e sem perda de inserção (Carranza).",
  },
  {
    id: "perio-c06-02",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Básico",
    question: "A bolsa periodontal verdadeira é definida como:",
    options: [
      "aprofundamento patológico do sulco por migração apical do epitélio juncional",
      "aumento de profundidade por edema gengival, sem perda de inserção",
      "espaço fisiológico normal entre o dente e a gengiva livre",
      "exposição da superfície radicular causada por retração da margem gengival",
    ],
    correctIndex: 0,
    explanation:
      "A bolsa periodontal verdadeira resulta da migração apical do epitélio juncional e da destruição de tecidos de suporte (perda de inserção). O aumento por edema é pseudobolsa; a exposição radicular por retração é recessão (Carranza/Lindhe).",
  },
  {
    id: "perio-c06-03",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Intermediário",
    question: "A diferença entre bolsa supraóssea e bolsa infraóssea (intraóssea) é que, na bolsa infraóssea:",
    options: [
      "o fundo está coronal à crista óssea, com perda óssea de padrão horizontal",
      "não há perda óssea associada, apenas aumento de volume gengival",
      "o fundo está apical à crista óssea adjacente, associando-se a defeito ósseo vertical/angular",
      "a lesão atinge obrigatoriamente a região de furca dos molares",
    ],
    correctIndex: 2,
    explanation:
      "Na bolsa infraóssea, o fundo localiza-se apical à crista óssea adjacente, associando-se a defeito ósseo vertical/angular. Na supraóssea, o fundo é coronal à crista, com perda óssea horizontal (Carranza/Lindhe).",
  },
  {
    id: "perio-c06-04",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Intermediário",
    question: "As doenças periodontais necrosantes (gengivite e periodontite necrosantes) associam-se fortemente a:",
    options: [
      "uso prolongado de bloqueadores dos canais de cálcio para hipertensão",
      "comprometimento imunológico, como na infecção avançada por HIV/AIDS e na desnutrição grave",
      "excesso de gengiva queratinizada inserida ao redor dos dentes",
      "hiperfunção das glândulas salivares maiores e menores",
    ],
    correctIndex: 1,
    explanation:
      "As doenças necrosantes ocorrem sobretudo em hospedeiros com a resposta imune comprometida — HIV/AIDS avançado, desnutrição grave, imunossupressão — além de estresse intenso e tabagismo (Carranza/Lindhe).",
  },
  {
    id: "perio-c06-05",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Intermediário",
    question: "A periodontite grave e de início precoce associada a doenças sistêmicas (ex.: síndrome de Papillon-Lefèvre, neutropenias) é classificada, no sistema de 2017, como:",
    options: [
      "periodontite como manifestação de doença sistêmica",
      "gengivite induzida por biofilme dental",
      "abscesso periodontal de evolução aguda",
      "periodontite estável em terapia periodontal de suporte",
    ],
    correctIndex: 0,
    explanation:
      "Quando uma condição sistêmica (Papillon-Lefèvre, neutropenias, etc.) determina a destruição periodontal grave e precoce, a classificação de 2017 a enquadra como 'periodontite como manifestação de doença sistêmica' (Caton et al., 2018).",
  },
  {
    id: "perio-c06-06",
    subject: "Periodontia",
    topic: "Periodontite: Formas Clínicas",
    difficulty: "Avançado",
    question: "A forma antes denominada 'periodontite agressiva localizada' (hoje periodontite, frequentemente grau C) caracteriza-se classicamente por:",
    options: [
      "perda óssea generalizada e uniforme em todos os dentes, em pacientes idosos",
      "ausência de qualquer agregação familiar e progressão sempre muito lenta",
      "grande acúmulo de cálculo proporcional à intensa destruição óssea, em todos os casos",
      "perda óssea acentuada em primeiros molares e incisivos, em jovens, associada a A. actinomycetemcomitans e agregação familiar",
    ],
    correctIndex: 3,
    explanation:
      "A antiga periodontite agressiva localizada acomete jovens, com perda óssea acentuada em primeiros molares e incisivos, agregação familiar e associação a Aggregatibacter actinomycetemcomitans, frequentemente com biofilme/cálculo discretos em relação à destruição (Carranza).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 7 — DIAGNÓSTICO E EXAME CLÍNICO PERIODONTAL
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c07-01",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Básico",
    question: "O instrumento de eleição para medir a profundidade de sondagem e o nível de inserção clínica é:",
    options: [
      "a cureta de Gracey área-específica",
      "a sonda periodontal milimetrada",
      "o explorador nº 5 (sonda exploradora)",
      "a sonda de Nabers, usada de forma exclusiva",
    ],
    correctIndex: 1,
    explanation:
      "A sonda periodontal milimetrada é o instrumento de eleição para medir profundidade de sondagem e nível de inserção. A sonda de Nabers é específica para avaliar furcas; o explorador detecta cálculo/cárie (Carranza).",
  },
  {
    id: "perio-c07-02",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Básico",
    question: "O sangramento à sondagem (SS) é um indicador clínico que, em periodontia:",
    options: [
      "confirma sempre a presença de perda óssea ativa no sítio sondado",
      "indica necessidade imediata de exodontia do dente afetado",
      "mede diretamente, em milímetros, a profundidade da bolsa",
      "reflete inflamação; sua ausência é bom preditor de estabilidade periodontal",
    ],
    correctIndex: 3,
    explanation:
      "O sangramento à sondagem reflete inflamação tecidual. Seu valor preditivo positivo para progressão é baixo, mas a ausência de sangramento tem alto valor preditivo negativo, sendo bom indicador de estabilidade (Carranza/Lindhe).",
  },
  {
    id: "perio-c07-03",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Intermediário",
    question: "O nível de inserção clínica (NIC/PIC) é medido a partir de qual referência fixa?",
    options: [
      "Da margem gengival livre até o fundo da bolsa",
      "Da crista óssea alveolar até o ápice radicular",
      "Da junção cemento-esmalte (JCE) até o fundo do sulco/bolsa",
      "Da papila interdental até a linha mucogengival",
    ],
    correctIndex: 2,
    explanation:
      "O nível de inserção clínica mede-se da junção cemento-esmalte (referência fixa) até o fundo do sulco/bolsa. Medir a partir da margem gengival (móvel) fornece a profundidade de sondagem, não a inserção (Carranza).",
  },
  {
    id: "perio-c07-04",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Intermediário",
    question: "Na classificação de Hamp para lesões de furca (componente horizontal), o Grau III corresponde a:",
    options: [
      "destruição horizontal que atravessa toda a furca, de lado a lado (passante)",
      "perda horizontal de tecidos de suporte de até 3 mm, sem atravessar",
      "perda horizontal maior que 3 mm, porém ainda não passante",
      "envolvimento apenas vertical da furca, sem componente horizontal",
    ],
    correctIndex: 0,
    explanation:
      "Na classificação horizontal de Hamp: Grau I = perda até 3 mm; Grau II = perda >3 mm, não passante; Grau III = destruição passante (de lado a lado), em que a sonda atravessa toda a furca (Carranza/Lindhe).",
  },
  {
    id: "perio-c07-05",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Intermediário",
    question: "Na classificação de mobilidade dentária de Miller, o Grau 3 indica:",
    options: [
      "mobilidade fisiológica imperceptível ao exame clínico",
      "mobilidade horizontal perceptível menor que 1 mm",
      "mobilidade horizontal maior que 1 mm associada a mobilidade vertical (dente depressível no alvéolo)",
      "mobilidade horizontal entre 1 e 2 mm, sem qualquer componente vertical",
    ],
    correctIndex: 2,
    explanation:
      "Na classificação de Miller: Grau 1 = mobilidade horizontal <1 mm; Grau 2 = >1 mm horizontal; Grau 3 = >1 mm horizontal somada à mobilidade vertical (dente depressível no alvéolo) (Carranza).",
  },
  {
    id: "perio-c07-06",
    subject: "Periodontia",
    topic: "Diagnóstico e Exame Clínico",
    difficulty: "Avançado",
    question: "Sobre o exame radiográfico no diagnóstico periodontal, é correto afirmar que:",
    options: [
      "substitui a sondagem, pois fornece a profundidade exata de todas as bolsas",
      "avalia bem a perda óssea interproximal e seu padrão, mas subestima a destruição e não mostra as tabelas vestibular/lingual",
      "mostra com precisão os defeitos ósseos das faces vestibular e lingual",
      "detecta de forma confiável a atividade inflamatória dos tecidos moles",
    ],
    correctIndex: 1,
    explanation:
      "A radiografia avalia bem o nível e o padrão (horizontal/vertical) da perda óssea interproximal, mas tende a subestimar a destruição, não revela defeitos das tabelas vestibular/lingual nem o estado dos tecidos moles. Não substitui a sondagem (Carranza/Lindhe).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 8 — TERAPIA PERIODONTAL NÃO-CIRÚRGICA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c08-01",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Básico",
    question: "O objetivo principal da raspagem e alisamento radicular (RAR) é:",
    options: [
      "remover cirurgicamente o tecido de granulação do interior da bolsa",
      "regenerar por completo o osso alveolar que foi perdido",
      "remover biofilme e cálculo das superfícies dental e radicular, tornando-as biologicamente compatíveis",
      "promover a osseointegração de implantes dentários osseointegráveis",
    ],
    correctIndex: 2,
    explanation:
      "A RAR visa remover biofilme e cálculo das superfícies dental e radicular, deixando uma superfície limpa e biologicamente compatível que permita a resolução da inflamação e a cicatrização dos tecidos (Carranza/Lindhe).",
  },
  {
    id: "perio-c08-02",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Básico",
    question: "A principal diferença entre as curetas de Gracey (área-específicas) e as curetas universais é que as de Gracey:",
    options: [
      "possuem apenas uma borda cortante ativa por lâmina e angulação específica para certos grupos/superfícies",
      "possuem duas bordas cortantes e servem igualmente para todas as superfícies",
      "destinam-se exclusivamente à remoção de cálculo supragengival visível",
      "têm a ponta ativa em forma de foice (sickle) para uso em espaços interproximais",
    ],
    correctIndex: 0,
    explanation:
      "As curetas de Gracey são área-específicas: a lâmina é angulada (offset) e apenas uma borda cortante é ativa, adaptando-se a grupos dentais/superfícies definidos. As universais têm duas bordas cortantes e uso mais amplo (Carranza).",
  },
  {
    id: "perio-c08-03",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Básico",
    question: "Os instrumentos ultrassônicos e sônicos utilizados na raspagem atuam por:",
    options: [
      "aplicação de calor direto sobre o cálculo, que assim se derrete",
      "liberação contínua de antibiótico no interior da bolsa periodontal",
      "pressão manual constante, de modo semelhante à da cureta",
      "vibração da ponta ativa, que fragmenta o cálculo, com irrigação para refrigeração e cavitação",
    ],
    correctIndex: 3,
    explanation:
      "Os aparelhos ultrassônicos/sônicos vibram a ponta ativa em alta frequência, fragmentando o cálculo; a irrigação resfria a ponta e gera cavitação/lavagem (lavage) que auxilia a desorganização do biofilme (Carranza/Lindhe).",
  },
  {
    id: "perio-c08-04",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Intermediário",
    question: "Após raspagem e alisamento radicular bem-sucedidos, a cicatrização ocorre tipicamente por:",
    options: [
      "regeneração completa, com novo cemento, ligamento periodontal e osso alveolar",
      "reparo, com formação de um epitélio juncional longo aderido à superfície radicular",
      "anquilose, com fusão direta entre o osso alveolar e a raiz dentária",
      "reepitelização superficial, sem qualquer redução da profundidade de sondagem",
    ],
    correctIndex: 1,
    explanation:
      "A terapia não-cirúrgica cicatriza por reparo, com formação de um epitélio juncional longo aderido à raiz, e não por regeneração verdadeira (novo cemento, ligamento e osso), objetivo reservado a técnicas regenerativas específicas (Carranza/Lindhe).",
  },
  {
    id: "perio-c08-05",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Intermediário",
    question: "O uso de antimicrobianos sistêmicos como coadjuvantes da terapia mecânica em periodontia:",
    options: [
      "está indicado de rotina em todos os casos de gengivite associada a biofilme",
      "substitui a necessidade de raspagem na maioria dos pacientes com periodontite",
      "constitui a primeira escolha isolada, dispensando o desbridamento mecânico",
      "é reservado a casos selecionados (ex.: progressão rápida/grau C), sempre associado ao desbridamento mecânico",
    ],
    correctIndex: 3,
    explanation:
      "Antimicrobianos sistêmicos são coadjuvantes reservados a casos selecionados (ex.: formas de progressão rápida, grau C) e jamais substituem o desbridamento mecânico do biofilme, que permanece a base do tratamento (Carranza/Lindhe).",
  },
  {
    id: "perio-c08-06",
    subject: "Periodontia",
    topic: "Terapia Não-Cirúrgica",
    difficulty: "Avançado",
    question: "A reavaliação após a terapia periodontal não-cirúrgica, para verificar a resposta dos tecidos antes de decidir por terapia adicional, deve ocorrer, em geral:",
    options: [
      "cerca de 4 a 8 semanas após a raspagem, permitindo cicatrização e maturação do conjuntivo",
      "nas primeiras 24 a 48 horas, antes que qualquer cicatrização se inicie",
      "somente após 12 meses do término, independentemente do quadro clínico",
      "imediatamente ao final da última sessão de raspagem realizada",
    ],
    correctIndex: 0,
    explanation:
      "A reavaliação é feita cerca de 4 a 8 semanas após a RAR, tempo necessário para a cicatrização e a maturação do tecido conjuntivo, permitindo avaliar de forma confiável a resposta antes de indicar terapia adicional (Carranza/Lindhe).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 9 — TERAPIA PERIODONTAL CIRÚRGICA E REGENERATIVA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c09-01",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Básico",
    question: "Uma das principais indicações da cirurgia periodontal de retalho é:",
    options: [
      "tratar a gengivite leve sem qualquer perda de inserção clínica",
      "permitir acesso e visualização para desbridar bolsas profundas que não responderam à terapia não-cirúrgica",
      "substituir a necessidade de controle de biofilme realizado pelo paciente",
      "realizar a exodontia de todos os dentes que apresentem bolsa periodontal",
    ],
    correctIndex: 1,
    explanation:
      "A cirurgia de retalho proporciona acesso e visualização direta para desbridamento e tratamento de defeitos em bolsas profundas que não responderam à terapia não-cirúrgica, além de permitir correção de defeitos ósseos (Carranza/Lindhe).",
  },
  {
    id: "perio-c09-02",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Básico",
    question: "A gengivectomia é particularmente indicada para:",
    options: [
      "tratamento de defeitos ósseos infraósseos profundos com perda angular",
      "correção de recessões gengivais com ampla exposição radicular",
      "remoção de aumentos gengivais e pseudobolsas supraósseas, com gengiva queratinizada suficiente",
      "regeneração óssea guiada em lesões de furca de grau III passantes",
    ],
    correctIndex: 2,
    explanation:
      "A gengivectomia é indicada para remover excesso de tecido gengival (aumentos/hiperplasias) e eliminar pseudobolsas supraósseas, desde que haja faixa adequada de gengiva queratinizada. Não trata defeitos infraósseos nem recessões (Carranza).",
  },
  {
    id: "perio-c09-03",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Intermediário",
    question: "Na cirurgia óssea ressectiva, a diferença entre osteoplastia e ostectomia é que:",
    options: [
      "a osteoplastia remodela o contorno ósseo sem remover osso de suporte, enquanto a ostectomia remove osso de suporte inserido ao dente",
      "a osteoplastia remove osso de suporte, ao passo que a ostectomia apenas remodela o contorno",
      "ambas adicionam material de enxerto ósseo ao defeito a fim de ganhar inserção",
      "são termos sinônimos, sem qualquer diferença prática na execução",
    ],
    correctIndex: 0,
    explanation:
      "Na osteoplastia remodela-se o contorno ósseo sem remover osso de suporte (inserido ao dente); na ostectomia remove-se osso de suporte para eliminar defeitos e recriar arquitetura positiva. Nenhuma das duas adiciona enxerto (Carranza/Lindhe).",
  },
  {
    id: "perio-c09-04",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Intermediário",
    question: "O princípio da regeneração tecidual guiada (RTG) no tratamento de defeitos periodontais baseia-se em:",
    options: [
      "remover toda a gengiva queratinizada para acelerar a cicatrização do retalho",
      "preencher o defeito apenas com o coágulo sanguíneo, sem uso de barreira",
      "estimular o crescimento rápido do epitélio para o interior do defeito ósseo",
      "usar membrana-barreira que impede a migração apical do epitélio, permitindo repovoamento por células do ligamento periodontal",
    ],
    correctIndex: 3,
    explanation:
      "A RTG emprega uma membrana-barreira que exclui o epitélio e o conjuntivo gengival do defeito, permitindo que as células do ligamento periodontal repovoem a superfície radicular e formem nova inserção (cemento, ligamento e osso) (Carranza/Lindhe).",
  },
  {
    id: "perio-c09-05",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Avançado",
    question: "Um enxerto ósseo proveniente de outro indivíduo da mesma espécie (de banco de tecidos humano) é classificado como:",
    options: [
      "autógeno (autoenxerto), do próprio paciente",
      "xenógeno (xenoenxerto), de espécie diferente",
      "homógeno/alógeno (aloenxerto), da mesma espécie",
      "aloplástico, de material puramente sintético",
    ],
    correctIndex: 2,
    explanation:
      "Enxerto entre indivíduos da mesma espécie (banco de tecidos humano) é homógeno/alógeno (aloenxerto). Autógeno vem do próprio paciente; xenógeno, de outra espécie; aloplástico é material sintético (Carranza/Lindhe).",
  },
  {
    id: "perio-c09-06",
    subject: "Periodontia",
    topic: "Terapia Cirúrgica e Regenerativa",
    difficulty: "Avançado",
    question: "Na classificação de Miller para recessões gengivais, em quais classes se espera recobrimento radicular total (100%) previsível com cirurgia plástica periodontal?",
    options: [
      "Apenas na Classe IV, com grande perda óssea interproximal",
      "Classes I e II, nas quais não há perda de tecido interproximal",
      "Classes III e IV, com perda óssea/tecidual interproximal associada",
      "Em todas as classes de forma indistinta, sempre que houver recessão",
    ],
    correctIndex: 1,
    explanation:
      "Na classificação de Miller, espera-se recobrimento radicular total previsível nas Classes I e II (sem perda de tecido interproximal). Na Classe III o recobrimento é parcial; na Classe IV é improvável (Miller, 1985; Carranza).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERIODONTIA — CAP. 10 — TERAPIA DE SUPORTE E PERIODONTIA MÉDICA
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "perio-c10-01",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Básico",
    question: "A terapia periodontal de suporte (manutenção) tem como objetivo principal:",
    options: [
      "substituir a escovação e o controle de biofilme feitos pelo paciente em casa",
      "realizar uma nova cirurgia periodontal a cada consulta de retorno",
      "regenerar espontaneamente o osso já perdido, sem qualquer intervenção",
      "monitorar e controlar o biofilme periodicamente para prevenir recidiva e progressão",
    ],
    correctIndex: 3,
    explanation:
      "A terapia de suporte (manutenção) consiste em retornos periódicos para monitorar a saúde periodontal e controlar o biofilme, prevenindo a recidiva e a progressão da doença após a fase ativa do tratamento (Carranza/Lindhe).",
  },
  {
    id: "perio-c10-02",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Básico",
    question: "Para a maioria dos pacientes tratados de periodontite, o intervalo de retorno para a terapia de suporte mais comumente recomendado é de:",
    options: [
      "cerca de 3 meses, ajustado conforme o risco individual do paciente",
      "5 anos, de forma fixa e independentemente do risco apresentado",
      "apenas quando surgirem sintomas dolorosos ou sangramento espontâneo",
      "1 semana, mantido por tempo indefinido após a alta da fase ativa",
    ],
    correctIndex: 0,
    explanation:
      "O intervalo de manutenção mais utilizado é de aproximadamente 3 meses, período compatível com a recolonização bacteriana, devendo ser individualizado conforme o risco de cada paciente (Carranza/Lindhe).",
  },
  {
    id: "perio-c10-03",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Intermediário",
    question: "A principal causa de recidiva da periodontite após a fase ativa de tratamento é:",
    options: [
      "o uso de escova dental de cerdas macias na higiene diária",
      "o controle inadequado do biofilme e a baixa adesão à terapia de suporte",
      "o excesso de consultas de manutenção ao longo do ano",
      "a presença de uma faixa adequada de gengiva queratinizada",
    ],
    correctIndex: 1,
    explanation:
      "A recidiva relaciona-se sobretudo ao controle insuficiente do biofilme e à baixa adesão (compliance) à terapia de suporte. O cumprimento das consultas de manutenção é determinante para a estabilidade a longo prazo (Carranza/Lindhe).",
  },
  {
    id: "perio-c10-04",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Intermediário",
    question: "Sobre a relação entre periodontite e desfechos da gestação, a literatura atual sugere que:",
    options: [
      "a periodontite materna comprovadamente não guarda nenhuma associação com a gravidez",
      "o tratamento periodontal está formalmente contraindicado durante toda a gestação",
      "há associação epidemiológica com desfechos adversos (ex.: parto prematuro), e a terapia não-cirúrgica é segura na gestação",
      "a gengivite gravídica decorre de uma infecção de origem exclusivamente fúngica",
    ],
    correctIndex: 2,
    explanation:
      "Estudos epidemiológicos associam a periodontite a desfechos adversos da gestação, como parto prematuro e baixo peso, ainda que a causalidade não esteja firmada. O tratamento periodontal não-cirúrgico é considerado seguro durante a gravidez (Carranza/Lindhe).",
  },
  {
    id: "perio-c10-05",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Avançado",
    question: "A respeito da associação entre periodontite e doenças cardiovasculares ateroscleróticas, a interpretação mais adequada é que:",
    options: [
      "há associação epidemiológica e plausibilidade biológica, mas a relação causal direta ainda não está plenamente estabelecida",
      "a periodontite é causa direta e comprovada de infarto do miocárdio em todos os indivíduos",
      "não existe, na literatura, qualquer estudo que relacione as duas condições",
      "tratar a periodontite reverte por completo a aterosclerose já instalada nas artérias",
    ],
    correctIndex: 0,
    explanation:
      "Há associação epidemiológica e plausibilidade biológica (inflamação sistêmica, bacteremia) entre periodontite e doença cardiovascular aterosclerótica, mas a relação causal direta ainda não está plenamente estabelecida (Carranza/Lindhe).",
  },
  {
    id: "perio-c10-06",
    subject: "Periodontia",
    topic: "Terapia de Suporte e Periodontia Médica",
    difficulty: "Avançado",
    question: "Diante de um abscesso periodontal agudo com coleção purulenta localizada, a conduta inicial mais apropriada é:",
    options: [
      "prescrever antibiótico sistêmico isolado, sem realizar qualquer intervenção local",
      "indicar a exodontia imediata do dente envolvido em todos os casos",
      "prescrever apenas analgésico e reavaliar o paciente somente após 30 dias",
      "promover a drenagem e o desbridamento local, reservando o antibiótico a sinais sistêmicos/disseminação",
    ],
    correctIndex: 3,
    explanation:
      "No abscesso periodontal agudo, a conduta inicial é a drenagem (via bolsa ou incisão) e o desbridamento local para alívio e controle da infecção; o antibiótico sistêmico fica reservado a casos com envolvimento sistêmico ou disseminação (Carranza/Lindhe).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HISTOLOGIA E EMBRIOLOGIA — referências: Ten Cate (Nanci), Katchburian &
  // Arana, Junqueira & Carneiro
  // ══════════════════════════════════════════════════════════════════════════

  // ═══ CAP. 1 — TECIDOS FUNDAMENTAIS E MÉTODOS EM HISTOLOGIA ═══
  {
    id: "hist-c01-01",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Básico",
    question: "Os tecidos do corpo humano são agrupados em quatro tipos fundamentais. Qual conjunto representa corretamente essa classificação?",
    options: [
      "Ósseo, cartilaginoso, sanguíneo e adiposo",
      "Epitelial, glandular, muscular e ósseo",
      "Epitelial, conjuntivo, muscular e nervoso",
      "Conjuntivo, nervoso, linfático e glandular",
    ],
    correctIndex: 2,
    explanation:
      "Os quatro tecidos básicos são o epitelial, o conjuntivo, o muscular e o nervoso. Ósseo, cartilaginoso, sangue e adiposo são variedades de tecido conjuntivo, e não tipos fundamentais à parte (Junqueira & Carneiro).",
  },
  {
    id: "hist-c01-02",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Básico",
    question: "Na coloração de rotina pela hematoxilina e eosina (HE), quais componentes a hematoxilina cora preferencialmente?",
    options: [
      "Estruturas ácidas (basófilas), como a cromatina nuclear e o RNA",
      "As fibras colágenas e o citoplasma acidófilo",
      "Os grânulos de secreção eosinófilos do citoplasma",
      "A matriz mineralizada do esmalte maduro",
    ],
    correctIndex: 0,
    explanation:
      "A hematoxilina é um corante básico (catiônico) e cora estruturas ácidas/basófilas — DNA da cromatina e RNA — em tons de azul-arroxeado; a eosina, ácida, cora estruturas acidófilas (citoplasma, colágeno) em rosa (Junqueira & Carneiro).",
  },
  {
    id: "hist-c01-03",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Básico",
    question: "A mucosa de revestimento da cavidade oral, como a mucosa jugal, é recoberta por epitélio do tipo:",
    options: [
      "Cúbico simples",
      "Cilíndrico pseudoestratificado ciliado",
      "Pavimentoso estratificado queratinizado",
      "Pavimentoso estratificado não queratinizado",
    ],
    correctIndex: 3,
    explanation:
      "A mucosa de revestimento (jugal, assoalho bucal, ventre lingual) é revestida por epitélio pavimentoso (escamoso) estratificado não queratinizado; a mucosa mastigatória (gengiva inserida, palato duro) é queratinizada (Ten Cate).",
  },
  {
    id: "hist-c01-04",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Intermediário",
    question: "Sobre a membrana basal que separa o epitélio do tecido conjuntivo subjacente, é correto afirmar que:",
    options: [
      "É formada apenas por fibras elásticas do conjuntivo",
      "Contém lâmina basal com colágeno tipo IV e laminina, ancorando o epitélio",
      "Corresponde à camada córnea mais superficial do epitélio",
      "É constituída somente por células epiteliais pavimentosas",
    ],
    correctIndex: 1,
    explanation:
      "A membrana basal é uma matriz extracelular especializada; sua lâmina basal contém colágeno tipo IV, laminina, nidogênio e proteoglicanos, ancorando o epitélio ao tecido conjuntivo (Junqueira & Carneiro).",
  },
  {
    id: "hist-c01-05",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Intermediário",
    question: "Qual junção celular promove a adesão da superfície basal de uma célula epitelial à matriz extracelular subjacente?",
    options: [
      "Hemidesmossomo, via integrinas à lâmina basal",
      "Desmossomo, unindo duas células vizinhas",
      "Junção comunicante, permitindo a passagem de íons",
      "Zônula de oclusão, vedando o espaço intercelular",
    ],
    correctIndex: 0,
    explanation:
      "O hemidesmossomo ancora a membrana basal da célula epitelial à lâmina basal — mecanismo também usado na inserção do epitélio juncional ao dente; o desmossomo une célula a célula (Ten Cate).",
  },
  {
    id: "hist-c01-06",
    subject: "Histologia e Embriologia",
    topic: "Tecidos Fundamentais e Métodos",
    difficulty: "Avançado",
    question: "Para confeccionar cortes de um dente incluído em parafina e corados em HE, qual procedimento é indispensável antes da microtomia?",
    options: [
      "Congelar a peça em nitrogênio líquido para criomicrotomia",
      "Impregnar a peça com tetróxido de ósmio",
      "Descalcificar a peça com ácido ou quelante (EDTA)",
      "Submeter a peça a desgaste abrasivo progressivo",
    ],
    correctIndex: 2,
    explanation:
      "Tecidos mineralizados exigem descalcificação (ácidos fórmico/nítrico ou o quelante EDTA) antes da inclusão em parafina e do corte. O desgaste é usado quando se quer preservar o mineral (esmalte), mas não permite a coloração de rotina (Katchburian & Arana).",
  },

  // ═══ CAP. 2 — EMBRIOLOGIA GERAL E DESENVOLVIMENTO DA FACE E CAVIDADE ORAL ═══
  {
    id: "hist-c02-01",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Básico",
    question: "A maior parte do tecido conjuntivo da face e dos tecidos dentários (exceto o esmalte) origina-se de células que migram de qual estrutura embrionária?",
    options: [
      "Endoderma do intestino primitivo",
      "Crista neural (ectomesênquima)",
      "Mesoderma paraxial dos somitos",
      "Notocorda axial",
    ],
    correctIndex: 1,
    explanation:
      "As células da crista neural migram e formam o ectomesênquima, origem da dentina, polpa, cemento, ligamento periodontal e osso da face; apenas o esmalte deriva do epitélio (ectoderma) (Ten Cate / Katchburian).",
  },
  {
    id: "hist-c02-02",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Básico",
    question: "O primeiro arco faríngeo (mandibular) dá origem à cartilagem de Meckel e está associado a qual nervo craniano?",
    options: [
      "Nervo facial (VII)",
      "Nervo glossofaríngeo (IX)",
      "Nervo hipoglosso (XII)",
      "Nervo trigêmeo (V)",
    ],
    correctIndex: 3,
    explanation:
      "O 1º arco faríngeo origina a cartilagem de Meckel, os músculos da mastigação e é inervado pelo trigêmeo (V). O 2º arco relaciona-se à cartilagem de Reichert, aos músculos da expressão facial e ao nervo facial (VII) (Moore / Ten Cate).",
  },
  {
    id: "hist-c02-03",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Básico",
    question: "Os processos (proeminências) que circundam o estomódeo e participam da formação da face são:",
    options: [
      "Apenas os processos maxilar direito e esquerdo",
      "O septo nasal e os dois processos palatinos laterais",
      "Somente o processo frontonasal, de origem ímpar",
      "Frontonasal, dois maxilares e dois mandibulares",
    ],
    correctIndex: 3,
    explanation:
      "A face forma-se a partir de cinco proeminências ao redor do estomódeo: o processo frontonasal (ímpar), dois processos maxilares e dois mandibulares, estes derivados do primeiro arco faríngeo (Moore).",
  },
  {
    id: "hist-c02-04",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Intermediário",
    question: "A fissura labial (lábio leporino) típica resulta da falha de fusão entre:",
    options: [
      "Os dois processos mandibulares na linha média",
      "O processo maxilar e o processo nasal medial",
      "Os processos palatinos secundários entre si",
      "O processo frontonasal e a notocorda",
    ],
    correctIndex: 1,
    explanation:
      "A fenda labial decorre da falta de fusão do processo maxilar com o processo nasal medial (que forma o segmento intermaxilar/filtro). A fenda palatina, por sua vez, decorre da não fusão das lâminas palatinas (Moore).",
  },
  {
    id: "hist-c02-05",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Intermediário",
    question: "O palato secundário, que forma a maior parte do palato duro e o palato mole, origina-se:",
    options: [
      "Das lâminas (processos) palatinas dos processos maxilares",
      "Do segmento intermaxilar (palato primário)",
      "Do processo frontonasal exclusivamente",
      "Da cartilagem de Meckel do primeiro arco",
    ],
    correctIndex: 0,
    explanation:
      "O palato secundário forma-se pela elevação e fusão das lâminas palatinas dos processos maxilares; o palato primário (pré-maxila) deriva do segmento intermaxilar. A fusão completa-se por volta da 12ª semana (Moore / Ten Cate).",
  },
  {
    id: "hist-c02-06",
    subject: "Histologia e Embriologia",
    topic: "Embriologia da Face e Cavidade Oral",
    difficulty: "Avançado",
    question: "Uma característica singular da crista neural cefálica (cranial), em comparação com a do tronco, é a capacidade de formar:",
    options: [
      "Apenas melanócitos e neurônios sensitivos",
      "Exclusivamente células de Schwann",
      "Tecido esquelético e conjuntivo (cartilagem, osso, dentina)",
      "Somente a medula da glândula suprarrenal",
    ],
    correctIndex: 2,
    explanation:
      "A crista neural cefálica origina um ectomesênquima com potencial esquelético — cartilagem, osso, dentina, cemento e conjuntivo da face — além dos derivados neurais comuns; a crista do tronco não forma esqueleto (Ten Cate).",
  },

  // ═══ CAP. 3 — ODONTOGÊNESE: DESENVOLVIMENTO DO GERME DENTÁRIO ═══
  {
    id: "hist-c03-01",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Básico",
    question: "O desenvolvimento dos dentes inicia-se com o espessamento do epitélio oral que forma:",
    options: [
      "A bainha epitelial de Hertwig",
      "A lâmina dentária",
      "O órgão do esmalte já maduro",
      "A papila dentária",
    ],
    correctIndex: 1,
    explanation:
      "A odontogênese começa com a lâmina dentária, um espessamento do epitélio oral (ectoderma) por volta da 6ª semana de vida intrauterina, do qual brotam os germes dentários (Ten Cate).",
  },
  {
    id: "hist-c03-02",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Básico",
    question: "Qual é a sequência correta dos estágios morfológicos do desenvolvimento dentário?",
    options: [
      "Campânula → capuz → botão",
      "Capuz → botão → campânula",
      "Botão → campânula → capuz",
      "Botão → capuz → campânula",
    ],
    correctIndex: 3,
    explanation:
      "O germe dentário evolui por botão (broto), capuz e campânula, refletindo a proliferação e a morfodiferenciação progressivas do órgão do esmalte (Katchburian & Arana).",
  },
  {
    id: "hist-c03-03",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Intermediário",
    question: "No estágio de capuz, a estrutura transitória que funciona como centro sinalizador (organizador) da morfogênese da coroa é:",
    options: [
      "O nó do esmalte (enamel knot)",
      "O retículo estrelado",
      "A alça cervical",
      "O epitélio dentário externo",
    ],
    correctIndex: 0,
    explanation:
      "O nó do esmalte é um centro de sinalização (Shh, BMP, FGF, Wnt) presente no capuz/campânula que regula o dobramento epitelial e o padrão de cúspides; não prolifera e sofre apoptose (Ten Cate).",
  },
  {
    id: "hist-c03-04",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Intermediário",
    question: "No órgão do esmalte em campânula, a camada central de células estreladas, separadas por matriz rica em glicosaminoglicanos, é:",
    options: [
      "O epitélio dentário interno",
      "O estrato intermédio",
      "O retículo estrelado",
      "O epitélio dentário externo",
    ],
    correctIndex: 2,
    explanation:
      "O retículo estrelado é a camada central, com células estreladas e abundante matriz hidrofílica (GAGs), que protege e nutre o epitélio dentário interno; as demais camadas são EDI, estrato intermédio e EDE (Katchburian & Arana).",
  },
  {
    id: "hist-c03-05",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Intermediário",
    question: "A papila dentária e o folículo (saco) dentário, ambos derivados do ectomesênquima, darão origem, respectivamente, a:",
    options: [
      "Esmalte e cemento, ambos de origem epitelial",
      "Esmalte (papila) e ligamento periodontal (folículo)",
      "Polpa e esmalte, respectivamente",
      "Dentina/polpa e cemento/ligamento/osso alveolar",
    ],
    correctIndex: 3,
    explanation:
      "A papila dentária forma a dentina e a polpa; o folículo dentário origina o cemento, o ligamento periodontal e o osso alveolar. O esmalte provém do epitélio (órgão do esmalte), não do ectomesênquima (Ten Cate).",
  },
  {
    id: "hist-c03-06",
    subject: "Histologia e Embriologia",
    topic: "Odontogênese",
    difficulty: "Avançado",
    question: "A diferenciação dos odontoblastos a partir das células ectomesenquimais da papila dentária é desencadeada por:",
    options: [
      "Contato direto com a bainha de Hertwig já formada",
      "Sinais do epitélio dentário interno sobre a papila (indução recíproca)",
      "Mineralização prévia do esmalte adjacente",
      "Invasão vascular precoce do retículo estrelado",
    ],
    correctIndex: 1,
    explanation:
      "Há indução recíproca: o epitélio dentário interno induz células da papila a se diferenciarem em odontoblastos; a primeira dentina por eles depositada induz, então, os ameloblastos a secretar esmalte (Ten Cate).",
  },

  // ═══ CAP. 4 — ESMALTE E AMELOGÊNESE ═══
  {
    id: "hist-c04-01",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Básico",
    question: "O esmalte dentário maduro é o tecido mais mineralizado do organismo. Sua composição aproximada, em peso, é:",
    options: [
      "70% inorgânico, 20% orgânico e 10% água",
      "50% inorgânico, 25% orgânico e 25% água",
      "96% inorgânico, ~1% orgânico e ~3% água",
      "30% inorgânico, 50% orgânico e 20% água",
    ],
    correctIndex: 2,
    explanation:
      "O esmalte maduro é cerca de 96% mineral (hidroxiapatita) em peso e ~4% de matéria orgânica e água, sendo o tecido mais duro do corpo. A composição ~70/20/10 corresponde à dentina (Ten Cate).",
  },
  {
    id: "hist-c04-02",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Básico",
    question: "Sobre o esmalte dentário, é correto afirmar que:",
    options: [
      "É produzido por ameloblastos de origem epitelial (ectoderma)",
      "É produzido pelos odontoblastos da polpa",
      "Contém células e vasos sanguíneos no seu interior",
      "Regenera-se plenamente após sua formação completa",
    ],
    correctIndex: 0,
    explanation:
      "O esmalte é secretado por ameloblastos derivados do epitélio (ectoderma); é acelular e avascular, e os ameloblastos são perdidos com a erupção — por isso o esmalte não se regenera (Ten Cate).",
  },
  {
    id: "hist-c04-03",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Intermediário",
    question: "A unidade estrutural básica do esmalte, cujo trajeto e orientação são definidos pelo processo de Tomes do ameloblasto, é:",
    options: [
      "O prisma (bastão) de esmalte",
      "O túbulo dentinário",
      "A fibra de Sharpey",
      "O canalículo de cemento",
    ],
    correctIndex: 0,
    explanation:
      "O prisma de esmalte é a unidade estrutural, formado pela secreção de matriz através do processo de Tomes do ameloblasto, o que confere a orientação característica dos cristais de hidroxiapatita (Katchburian & Arana).",
  },
  {
    id: "hist-c04-04",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Intermediário",
    question: "As estrias de Retzius, observadas no esmalte, representam:",
    options: [
      "Os trajetos dos túbulos dentinários",
      "Áreas de dentina interglobular hipomineralizada",
      "Linhas incrementais que registram o ritmo de aposição do esmalte",
      "Fibras colágenas mineralizadas do esmalte",
    ],
    correctIndex: 2,
    explanation:
      "As estrias de Retzius são linhas incrementais que refletem a deposição rítmica da matriz do esmalte; a linha neonatal é uma estria acentuada que marca o nascimento, separando o esmalte pré e pós-natal (Ten Cate).",
  },
  {
    id: "hist-c04-05",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Intermediário",
    question: "Durante a fase de maturação do esmalte, os ameloblastos atuam principalmente para:",
    options: [
      "Secretar a espessa matriz orgânica inicial",
      "Diferenciar os odontoblastos da papila",
      "Formar a bainha epitelial de Hertwig",
      "Remover matriz e água, elevando o teor mineral",
    ],
    correctIndex: 3,
    explanation:
      "A amelogênese tem fase secretora (deposição da matriz, esmalte parcialmente mineralizado) e fase de maturação (remoção de proteínas como a amelogenina e de água, com grande influxo de mineral até ~96%) (Ten Cate).",
  },
  {
    id: "hist-c04-06",
    subject: "Histologia e Embriologia",
    topic: "Esmalte e Amelogênese",
    difficulty: "Avançado",
    question: "A proteína mais abundante da matriz do esmalte em formação, cuja remoção é essencial para a maturação, é:",
    options: [
      "O colágeno tipo I",
      "A amelogenina",
      "A laminina",
      "A osteocalcina",
    ],
    correctIndex: 1,
    explanation:
      "A amelogenina é a proteína predominante da matriz do esmalte secretório; sua remoção na maturação permite o crescimento dos cristais. Mutações em seu gene causam amelogênese imperfeita. O colágeno tipo I é característico de dentina e osso, não do esmalte (Ten Cate).",
  },

  // ═══ CAP. 5 — DENTINA E DENTINOGÊNESE ═══
  {
    id: "hist-c05-01",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Básico",
    question: "A composição aproximada da dentina, em peso, é:",
    options: [
      "96% inorgânico e 4% orgânico/água",
      "50% inorgânico e 50% orgânico",
      "20% inorgânico, 70% orgânico e 10% água",
      "70% inorgânico, 20% orgânico e 10% água",
    ],
    correctIndex: 3,
    explanation:
      "A dentina tem cerca de 70% de mineral (hidroxiapatita), ~20% de matriz orgânica (predominantemente colágeno tipo I) e ~10% de água em peso, sendo menos mineralizada e mais resiliente que o esmalte (Ten Cate).",
  },
  {
    id: "hist-c05-02",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Básico",
    question: "O prolongamento do odontoblasto (processo odontoblástico) aloja-se em qual estrutura da dentina?",
    options: [
      "Na fibra de Sharpey",
      "No túbulo dentinário",
      "No prisma de esmalte",
      "Na lacuna do cementócito",
    ],
    correctIndex: 1,
    explanation:
      "O corpo do odontoblasto permanece na periferia da polpa e seu prolongamento ocupa o túbulo dentinário, atravessando a espessura da dentina; isso ajuda a explicar a sensibilidade dentinária (Katchburian & Arana).",
  },
  {
    id: "hist-c05-03",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Intermediário",
    question: "A faixa de matriz orgânica ainda não mineralizada, situada entre os odontoblastos e a dentina mineralizada, é denominada:",
    options: [
      "Dentina interglobular",
      "Dentina esclerótica",
      "Pré-dentina",
      "Camada granulosa de Tomes",
    ],
    correctIndex: 2,
    explanation:
      "A pré-dentina é a matriz recém-secretada e ainda não mineralizada, adjacente aos odontoblastos; mantém-se durante toda a vida porque a dentinogênese é contínua (Ten Cate).",
  },
  {
    id: "hist-c05-04",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Intermediário",
    question: "A dentina formada de modo localizado em resposta a um estímulo nocivo (cárie, desgaste), pelos próprios odontoblastos ou por novas células odontoblastoides, é a:",
    options: [
      "Dentina terciária (reacional/reparadora)",
      "Dentina primária",
      "Dentina secundária fisiológica",
      "Dentina do manto (mantle)",
    ],
    correctIndex: 0,
    explanation:
      "A dentina terciária (reacional, do próprio odontoblasto; reparadora, de novas células) forma-se localmente frente a agressões. A primária constitui o dente antes da erupção, e a secundária deposita-se lentamente após a formação radicular (Ten Cate).",
  },
  {
    id: "hist-c05-05",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Intermediário",
    question: "Na dentina radicular, a faixa de aspecto granuloso situada logo abaixo do cemento, decorrente de mineralização incompleta, é a:",
    options: [
      "Linha incremental de von Ebner",
      "Camada granulosa de Tomes",
      "Estria de Retzius",
      "Linha de contorno de Owen",
    ],
    correctIndex: 1,
    explanation:
      "A camada granulosa de Tomes localiza-se na dentina radicular, logo abaixo do cemento, e resulta da fusão incompleta dos calcosferitos (hipomineralização); na coroa, áreas semelhantes constituem a dentina interglobular (Ten Cate).",
  },
  {
    id: "hist-c05-06",
    subject: "Histologia e Embriologia",
    topic: "Dentina e Dentinogênese",
    difficulty: "Avançado",
    question: "A mineralização da dentina ocorre predominantemente por um padrão em que focos esféricos (calcosferitos) crescem e se fundem. Esse padrão é chamado de mineralização:",
    options: [
      "Em prismas, como no esmalte",
      "Linear contínua exclusiva",
      "Por matriz amelogênica",
      "Globular (calcosferítica)",
    ],
    correctIndex: 3,
    explanation:
      "A dentina mineraliza-se de forma globular (calcosferitos que se fundem) e, em parte, linear. Quando os calcosferitos não se fundem, restam zonas hipomineralizadas, como a dentina interglobular e a camada granulosa de Tomes (Katchburian & Arana).",
  },

  // ═══ CAP. 6 — POLPA DENTAL ═══
  {
    id: "hist-c06-01",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Básico",
    question: "A polpa dental é constituída principalmente por:",
    options: [
      "Tecido conjuntivo frouxo, ricamente vascularizado e inervado",
      "Tecido epitelial estratificado queratinizado",
      "Tecido muscular liso involuntário",
      "Tecido ósseo esponjoso vascularizado",
    ],
    correctIndex: 0,
    explanation:
      "A polpa é um tecido conjuntivo frouxo especializado, com odontoblastos na periferia, fibroblastos, vasos e nervos; ocupa a câmara e os canais e é responsável pela nutrição e sensibilidade do dente (Ten Cate).",
  },
  {
    id: "hist-c06-02",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Básico",
    question: "Imediatamente abaixo da camada odontoblástica, na periferia da polpa coronária, existe uma região pobre em células denominada:",
    options: [
      "Zona rica em células de Höhl",
      "Plexo nervoso de Raschkow definitivo",
      "Zona acelular (camada de Weil)",
      "Núcleo (centro) pulpar",
    ],
    correctIndex: 2,
    explanation:
      "A zona acelular de Weil (oligocelular) situa-se logo abaixo dos odontoblastos; abaixo dela vem a zona rica em células e, no centro, o núcleo pulpar. O plexo de Raschkow é nervoso e atravessa essa região (Katchburian & Arana).",
  },
  {
    id: "hist-c06-03",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Básico",
    question: "Entre as funções clássicas da polpa dental, NÃO se inclui:",
    options: [
      "Formação de dentina (função formativa)",
      "Nutrição da dentina",
      "Produção de esmalte de reparo",
      "Sensibilidade e defesa",
    ],
    correctIndex: 2,
    explanation:
      "As funções da polpa são formativa (dentina), nutritiva, sensorial e defensiva (dentina terciária e resposta imune). A polpa NÃO produz esmalte — este é formado apenas por ameloblastos, antes da erupção (Ten Cate).",
  },
  {
    id: "hist-c06-04",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Intermediário",
    question: "Com o envelhecimento, é comum observar na polpa dental:",
    options: [
      "Fibrose, redução de células e vasos e nódulos pulpares",
      "Aumento progressivo do volume da câmara pulpar",
      "Substituição da polpa por tecido ósseo lamelar",
      "Proliferação de ameloblastos residuais",
    ],
    correctIndex: 0,
    explanation:
      "Com a idade, a polpa torna-se mais fibrosa, com menos células e vasos, e surgem calcificações (nódulos pulpares e calcificações difusas); a câmara reduz pela deposição de dentina secundária e terciária (Ten Cate).",
  },
  {
    id: "hist-c06-05",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Intermediário",
    question: "A dor aguda e bem localizada associada à teoria hidrodinâmica da sensibilidade dentinária é conduzida principalmente por:",
    options: [
      "Fibras C amielínicas, de dor difusa",
      "Fibras A-delta mielínicas, de condução rápida",
      "Fibras pós-ganglionares simpáticas",
      "Fibras motoras somáticas",
    ],
    correctIndex: 1,
    explanation:
      "As fibras A-delta (mielínicas) conduzem a dor aguda e rápida desencadeada pelo movimento do fluido dentinário (teoria hidrodinâmica de Brännström); as fibras C, amielínicas, conduzem dor surda e tardia, ligada à inflamação (Ten Cate).",
  },
  {
    id: "hist-c06-06",
    subject: "Histologia e Embriologia",
    topic: "Polpa Dental",
    difficulty: "Avançado",
    question: "Após a morte de odontoblastos por uma agressão, a nova geração de células que pode reassumir a produção de dentina reparadora deriva de:",
    options: [
      "Ameloblastos remanescentes do órgão do esmalte",
      "Cementoblastos migrados do periodonto",
      "Células endoteliais dos capilares pulpares",
      "Células-tronco/indiferenciadas da polpa (zona rica em células)",
    ],
    correctIndex: 3,
    explanation:
      "Os odontoblastos são pós-mitóticos; quando morrem, células progenitoras/indiferenciadas da polpa (incluindo a zona rica em células e as células de Höhl) diferenciam-se em novos odontoblastos, formando dentina reparadora (Ten Cate).",
  },

  // ═══ CAP. 7 — CEMENTO ═══
  {
    id: "hist-c07-01",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Básico",
    question: "O cemento é um tecido mineralizado que:",
    options: [
      "Recobre a dentina radicular e ancora as fibras do ligamento periodontal",
      "Recobre a coroa anatômica do dente",
      "Forma a parte central vascularizada do dente",
      "Constitui o tecido mais duro do organismo",
    ],
    correctIndex: 0,
    explanation:
      "O cemento é um tecido mineralizado avascular que recobre a dentina da raiz; nele se inserem as fibras de Sharpey do ligamento periodontal, fixando o dente ao osso alveolar (Ten Cate).",
  },
  {
    id: "hist-c07-02",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Básico",
    question: "O cemento acelular (primário) localiza-se predominantemente:",
    options: [
      "No ápice radicular e nas regiões de furca",
      "Recobrindo o esmalte cervical",
      "Nos dois terços cervicais da raiz",
      "Apenas no interior dos túbulos dentinários",
    ],
    correctIndex: 2,
    explanation:
      "O cemento acelular (primário) cobre sobretudo os dois terços cervicais da raiz e é o principal responsável pela ancoragem; o cemento celular (secundário) predomina no terço apical e nas furcas, onde a aposição é mais rápida (Ten Cate).",
  },
  {
    id: "hist-c07-03",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Intermediário",
    question: "As células aprisionadas em lacunas no interior do cemento celular, à semelhança dos osteócitos no osso, são os:",
    options: [
      "Cementoblastos",
      "Cementócitos",
      "Odontoblastos",
      "Fibroblastos do ligamento",
    ],
    correctIndex: 1,
    explanation:
      "Os cementoblastos depositam a matriz na superfície; quando englobados por ela, tornam-se cementócitos, alojados em lacunas e comunicando-se por canalículos — análogos aos osteócitos (Katchburian & Arana).",
  },
  {
    id: "hist-c07-04",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Intermediário",
    question: "Uma diferença importante entre o cemento e o osso alveolar é que o cemento:",
    options: [
      "É mais mineralizado que o esmalte maduro",
      "Possui rica vascularização interna própria",
      "Sofre remodelação contínua, como o osso",
      "É avascular e não sofre remodelação fisiológica contínua",
    ],
    correctIndex: 3,
    explanation:
      "Diferentemente do osso, o cemento é avascular, não inervado e não sofre remodelação contínua — apenas aposição ao longo da vida. Por isso resiste mais à reabsorção, o que viabiliza o movimento ortodôntico sem grande perda radicular (Ten Cate).",
  },
  {
    id: "hist-c07-05",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Intermediário",
    question: "Na junção cemento-esmalte (JCE), o padrão de relação mais frequentemente descrito é aquele em que:",
    options: [
      "O esmalte sempre recobre o cemento",
      "Há sempre amplo espaço com dentina exposta",
      "O cemento recobre levemente o esmalte (leve sobreposição)",
      "Cemento e esmalte nunca se tocam em qualquer dente",
    ],
    correctIndex: 2,
    explanation:
      "Descrevem-se três relações na JCE; a mais comum (cerca de 60% dos casos) é o cemento sobrepondo-se levemente ao esmalte. Nas demais, há contato topo a topo ou ausência de contato, com dentina exposta (Ten Cate).",
  },
  {
    id: "hist-c07-06",
    subject: "Histologia e Embriologia",
    topic: "Cemento",
    difficulty: "Avançado",
    question: "A deposição excessiva de cemento, que pode ocorrer em dentes sem antagonista, em sobrecarga oclusal ou em certas condições sistêmicas, é denominada:",
    options: [
      "Hipercementose",
      "Anquilose alveolodentária",
      "Reabsorção radicular externa",
      "Hipoplasia de cemento",
    ],
    correctIndex: 0,
    explanation:
      "A hipercementose é o espessamento do cemento (frequentemente apical), associada a sobrecarga, ausência de antagonista, inflamação periapical ou doença de Paget; difere da anquilose, em que há fusão ao osso com obliteração do ligamento (Ten Cate / Neville).",
  },

  // ═══ CAP. 8 — LIGAMENTO PERIODONTAL E OSSO ALVEOLAR ═══
  {
    id: "hist-c08-01",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Básico",
    question: "O componente fibroso predominante do ligamento periodontal, que suporta as forças mastigatórias, é constituído por fibras de:",
    options: [
      "Elastina madura, predominantemente",
      "Reticulina isolada em rede frouxa",
      "Feixes de fibras musculares lisas",
      "Colágeno tipo I (fibras principais)",
    ],
    correctIndex: 3,
    explanation:
      "O ligamento periodontal é formado sobretudo por feixes de colágeno tipo I (fibras principais), organizados em grupos; há também fibras oxitalânicas (elásticas imaturas), porém em menor proporção (Ten Cate).",
  },
  {
    id: "hist-c08-02",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Básico",
    question: "A largura média do espaço do ligamento periodontal, em um dente funcional, é de aproximadamente:",
    options: [
      "1,0 mm",
      "0,2 mm (faixa de ~0,15 a 0,38 mm)",
      "3,0 mm",
      "0,01 mm",
    ],
    correctIndex: 1,
    explanation:
      "A largura média do ligamento periodontal é de cerca de 0,2 mm (faixa de 0,15 a 0,38 mm), sendo mais estreito no terço médio da raiz (formato de ampulheta) e diminuindo com a idade (Ten Cate).",
  },
  {
    id: "hist-c08-03",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Intermediário",
    question: "Entre os grupos de fibras principais do ligamento periodontal, o mais numeroso e que resiste às forças oclusais axiais, convertendo-as em tração sobre o osso, é o grupo:",
    options: [
      "Da crista alveolar",
      "Oblíquo",
      "Apical",
      "Inter-radicular",
    ],
    correctIndex: 1,
    explanation:
      "O grupo oblíquo é o mais numeroso do ligamento; suas fibras correm da raiz (mais apical) ao osso (mais coronal), convertendo a pressão oclusal em tração distribuída sobre o osso alveolar (Ten Cate).",
  },
  {
    id: "hist-c08-04",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Intermediário",
    question: "Os restos celulares epiteliais encontrados no ligamento periodontal, remanescentes da fragmentação da bainha epitelial de Hertwig, são os:",
    options: [
      "Corpúsculos de Meissner",
      "Cementículos livres",
      "Nódulos pulpares",
      "Restos epiteliais de Malassez",
    ],
    correctIndex: 3,
    explanation:
      "Os restos epiteliais de Malassez derivam da fragmentação da bainha de Hertwig após a formação radicular; permanecem no ligamento e podem originar cistos radiculares e tumores odontogênicos (Ten Cate / Neville).",
  },
  {
    id: "hist-c08-05",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Intermediário",
    question: "A camada de osso alveolar que reveste o alvéolo e na qual se inserem as fibras de Sharpey, vista radiograficamente como 'lâmina dura', corresponde ao:",
    options: [
      "Osso esponjoso medular",
      "Osso cortical vestibular externo",
      "Osso alveolar próprio (lâmina cribriforme / osso fasciculado)",
      "Periósteo da basal mandibular",
    ],
    correctIndex: 2,
    explanation:
      "O osso alveolar próprio (lâmina cribriforme, perfurada por canais de Volkmann) reveste o alvéolo, recebe as fibras de Sharpey e aparece como lâmina dura radiopaca; parte dele é osso fasciculado (bundle bone) (Ten Cate).",
  },
  {
    id: "hist-c08-06",
    subject: "Histologia e Embriologia",
    topic: "Ligamento Periodontal e Osso Alveolar",
    difficulty: "Avançado",
    question: "Durante o movimento ortodôntico, no lado de pressão do ligamento periodontal ocorre predominantemente:",
    options: [
      "Reabsorção óssea por osteoclastos",
      "Aposição óssea por osteoblastos",
      "Mineralização do ligamento (anquilose fisiológica)",
      "Formação de esmalte radicular",
    ],
    correctIndex: 0,
    explanation:
      "No lado de pressão há reabsorção óssea (osteoclastos), permitindo o deslocamento do dente; no lado de tração, as fibras estiradas estimulam aposição óssea (osteoblastos). O ligamento viabiliza e regula esse movimento (Ten Cate).",
  },

  // ═══ CAP. 9 — ERUPÇÃO E ESFOLIAÇÃO DENTÁRIA ═══
  {
    id: "hist-c09-01",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Básico",
    question: "Quando a coroa do dente em erupção se aproxima da mucosa, o epitélio reduzido do esmalte funde-se ao epitélio oral formando:",
    options: [
      "A cutícula de Nasmyth definitiva isolada",
      "A bainha de Hertwig",
      "O epitélio juncional (epitélio de união) inicial",
      "Um novo retículo estrelado",
    ],
    correctIndex: 2,
    explanation:
      "A fusão do epitélio reduzido do esmalte com o epitélio oral forma o epitélio de união (juncional) e abre um canal para a coroa irromper sem hemorragia; esse epitélio reduzido origina a inserção epitelial inicial (Ten Cate).",
  },
  {
    id: "hist-c09-02",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Básico",
    question: "Os dentes permanentes que substituem os decíduos (incisivos, caninos e pré-molares) desenvolvem-se a partir de qual estrutura?",
    options: [
      "Da papila dentária do dente decíduo",
      "Do folículo do molar decíduo",
      "Da bainha de Hertwig do decíduo",
      "Da lâmina dentária sucessional, lingual ao decíduo",
    ],
    correctIndex: 3,
    explanation:
      "Os dentes sucessores formam-se a partir da lâmina sucessional, que brota por lingual do germe decíduo; os molares permanentes (acessionais) surgem de uma extensão posterior da lâmina dentária, sem predecessor decíduo (Ten Cate).",
  },
  {
    id: "hist-c09-03",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Básico",
    question: "A fase de erupção que vai do início do movimento até o dente alcançar o plano oclusal e entrar em função é a fase:",
    options: [
      "Pré-funcional (eruptiva ativa)",
      "De iniciação da lâmina dentária",
      "De aposição do esmalte",
      "De esfoliação",
    ],
    correctIndex: 0,
    explanation:
      "A erupção tem fase pré-eruptiva (movimentos do germe), pré-funcional/eruptiva (movimento até o plano oclusal) e funcional (após a irrupção, com ajustes contínuos). A esfoliação refere-se à perda dos dentes decíduos (Ten Cate).",
  },
  {
    id: "hist-c09-04",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Intermediário",
    question: "A reabsorção das raízes dos dentes decíduos durante a esfoliação é realizada por células denominadas:",
    options: [
      "Cementoblastos",
      "Odontoclastos (clastos semelhantes a osteoclastos)",
      "Fibroblastos do folículo",
      "Ameloblastos residuais",
    ],
    correctIndex: 1,
    explanation:
      "A esfoliação dos decíduos decorre da reabsorção radicular por odontoclastos (células multinucleadas semelhantes a osteoclastos), estimulada pela pressão do germe permanente em erupção e por mediadores locais (Ten Cate).",
  },
  {
    id: "hist-c09-05",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Intermediário",
    question: "Estudos experimentais indicam que a estrutura essencial para coordenar a reabsorção e a aposição óssea necessárias à abertura do trajeto de erupção é:",
    options: [
      "O esmalte da coroa",
      "A polpa dental",
      "O retículo estrelado",
      "O folículo dentário",
    ],
    correctIndex: 3,
    explanation:
      "O folículo dentário é indispensável à erupção: coordena, por sinalização molecular, a formação de osteoclastos (reabsorção coronal, abrindo o caminho) e a aposição óssea na base da cripta. Sem ele, o dente não irrompe (Ten Cate).",
  },
  {
    id: "hist-c09-06",
    subject: "Histologia e Embriologia",
    topic: "Erupção e Esfoliação Dentária",
    difficulty: "Avançado",
    question: "Sobre os mecanismos de erupção dentária, é correto afirmar que:",
    options: [
      "A formação radicular isolada é a única força envolvida",
      "A erupção cessa por completo ao atingir a oclusão",
      "É multifatorial; o folículo e a remodelação óssea são determinantes",
      "O crescimento do esmalte é o que empurra o dente para fora",
    ],
    correctIndex: 2,
    explanation:
      "A erupção é multifatorial; embora o crescimento radicular contribua, dentes com raiz incompleta ainda irrompem, e o folículo com a remodelação óssea é determinante. A erupção também continua após a oclusão (erupção contínua/compensatória) (Ten Cate).",
  },

  // ═══ CAP. 10 — MUCOSA ORAL ═══
  {
    id: "hist-c10-01",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Básico",
    question: "Funcionalmente, a mucosa oral é classificada em três tipos. São eles:",
    options: [
      "Serosa, mucosa e mista",
      "De revestimento, mastigatória e especializada",
      "Queratinizada, glandular e muscular",
      "Simples, estratificada e pseudoestratificada",
    ],
    correctIndex: 1,
    explanation:
      "A mucosa oral divide-se em mucosa de revestimento (lábios, bochecha, assoalho), mastigatória (gengiva e palato duro, queratinizada) e especializada (dorso da língua, com papilas e botões gustativos) (Ten Cate).",
  },
  {
    id: "hist-c10-02",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Básico",
    question: "A mucosa mastigatória, queratinizada e firmemente aderida ao osso subjacente, recobre:",
    options: [
      "A gengiva inserida e o palato duro",
      "A mucosa jugal e o assoalho bucal",
      "O ventre da língua e o palato mole",
      "O fundo de vestíbulo e os lábios",
    ],
    correctIndex: 0,
    explanation:
      "A mucosa mastigatória (queratinizada ou paraqueratinizada, com mucoperiósteo aderido) recobre a gengiva inserida e o palato duro, áreas sujeitas ao atrito da mastigação (Ten Cate).",
  },
  {
    id: "hist-c10-03",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Básico",
    question: "Dentre as papilas linguais, as mais numerosas, queratinizadas e SEM botões gustativos são as papilas:",
    options: [
      "Filiformes",
      "Fungiformes",
      "Circunvaladas (valadas)",
      "Folhadas (foliáceas)",
    ],
    correctIndex: 0,
    explanation:
      "As papilas filiformes são as mais numerosas, queratinizadas e de função mecânica, sem botões gustativos; fungiformes, circunvaladas e folhadas contêm botões gustativos (Ten Cate / Junqueira & Carneiro).",
  },
  {
    id: "hist-c10-04",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Intermediário",
    question: "As papilas circunvaladas, dispostas em 'V' na base da língua, associam-se a glândulas serosas que lavam o sulco e auxiliam a gustação, denominadas glândulas de:",
    options: [
      "Blandin-Nuhn",
      "von Ebner",
      "Weber",
      "Brunner",
    ],
    correctIndex: 1,
    explanation:
      "As glândulas serosas de von Ebner desembocam no sulco das papilas circunvaladas (e folhadas), lavando os botões gustativos e secretando lipase lingual; estão ligadas à percepção do gosto (Ten Cate).",
  },
  {
    id: "hist-c10-05",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Intermediário",
    question: "O epitélio juncional adere-se à superfície do dente por meio de:",
    options: [
      "Fibras de Sharpey mineralizadas",
      "Tecido conjuntivo denso modelado",
      "Junções de oclusão com o esmalte",
      "Lâmina basal interna e hemidesmossomos",
    ],
    correctIndex: 3,
    explanation:
      "O epitélio juncional fixa-se ao dente por uma lâmina basal interna e hemidesmossomos (inserção epitelial); é um epitélio não queratinizado, de alta renovação e permeabilidade, fundamental na defesa do sulco gengival (Ten Cate).",
  },
  {
    id: "hist-c10-06",
    subject: "Histologia e Embriologia",
    topic: "Mucosa Oral",
    difficulty: "Avançado",
    question: "As células dendríticas apresentadoras de antígeno presentes no epitélio da mucosa oral, importantes na defesa imunológica, são as células de:",
    options: [
      "Merkel",
      "Melanócitos",
      "Langerhans",
      "Paneth",
    ],
    correctIndex: 2,
    explanation:
      "As células de Langerhans são células dendríticas do epitélio que captam e apresentam antígenos aos linfócitos. As de Merkel são mecanorreceptoras e os melanócitos produzem melanina — todas presentes no epitélio oral, mas só Langerhans tem função apresentadora (Ten Cate).",
  },

  // ═══ CAP. 11 — GLÂNDULAS SALIVARES ═══
  {
    id: "hist-c11-01",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Básico",
    question: "Quanto ao tipo de secreção, a glândula parótida é classificada como predominantemente:",
    options: [
      "Mucosa",
      "Serosa",
      "Mista de predomínio mucoso",
      "Sebácea",
    ],
    correctIndex: 1,
    explanation:
      "A parótida é uma glândula serosa pura; a submandibular é mista, com predomínio seroso, e a sublingual é mista, com predomínio mucoso (Junqueira & Carneiro / Ten Cate).",
  },
  {
    id: "hist-c11-02",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Básico",
    question: "A unidade secretora terminal das glândulas salivares, formada por células dispostas em torno de uma luz, é denominada:",
    options: [
      "Ácino",
      "Néfron",
      "Folículo",
      "Glomérulo",
    ],
    correctIndex: 0,
    explanation:
      "O ácino é a porção secretora terminal (serosa, mucosa ou mista); a saliva produzida segue pelos ductos intercalar, estriado e excretor até a cavidade oral (Junqueira & Carneiro).",
  },
  {
    id: "hist-c11-03",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Intermediário",
    question: "Em ácinos mistos, as células serosas frequentemente se dispõem como um capuz sobre as células mucosas, formando estruturas chamadas:",
    options: [
      "Ductos intercalares",
      "Células mioepiteliais",
      "Grânulos de zimogênio",
      "Semilunas serosas (de Gianuzzi)",
    ],
    correctIndex: 3,
    explanation:
      "As semilunas serosas (crescentes de Gianuzzi) são agrupamentos de células serosas sobre ácinos mucosos, com secreção alcançando a luz por canalículos intercelulares; parte pode ser artefato de fixação, mas o conceito clássico permanece (Junqueira & Carneiro).",
  },
  {
    id: "hist-c11-04",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Intermediário",
    question: "Os ductos estriados das glândulas salivares têm como função principal:",
    options: [
      "Apenas conduzir a saliva sem alterá-la",
      "Produzir a secreção mucosa primária",
      "Modificar a saliva, reabsorvendo sódio e secretando potássio",
      "Contrair-se para expelir a saliva, como células musculares",
    ],
    correctIndex: 2,
    explanation:
      "Os ductos estriados (com invaginações basais e mitocôndrias, que produzem as estrias) reabsorvem Na+ e secretam K+/bicarbonato, tornando a saliva hipotônica. A contração para expelir a saliva é função das células mioepiteliais (Junqueira & Carneiro).",
  },
  {
    id: "hist-c11-05",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Avançado",
    question: "As células contráteis que envolvem ácinos e ductos intercalares, auxiliando na expulsão da saliva, são as células:",
    options: [
      "Mioepiteliais",
      "Caliciformes",
      "Plasmáticas",
      "Enteroendócrinas",
    ],
    correctIndex: 0,
    explanation:
      "As células mioepiteliais (em cesto) situam-se entre as células secretoras e a lâmina basal, têm propriedades contráteis e impulsionam a secreção para os ductos (Junqueira & Carneiro).",
  },
  {
    id: "hist-c11-06",
    subject: "Histologia e Embriologia",
    topic: "Glândulas Salivares",
    difficulty: "Avançado",
    question: "Sobre a saliva e as glândulas salivares menores, é correto afirmar que:",
    options: [
      "As glândulas menores são exclusivamente serosas",
      "As glândulas menores são em geral mucosas e dispersas pela mucosa oral",
      "A saliva é hipertônica em relação ao plasma",
      "As glândulas maiores produzem menos de 10% da saliva total",
    ],
    correctIndex: 1,
    explanation:
      "As glândulas salivares menores (labiais, palatinas, linguais) são predominantemente mucosas e espalham-se pela submucosa oral. A saliva é hipotônica em relação ao plasma, e as glândulas maiores produzem a maior parte do volume (Ten Cate).",
  },

  // ═══ CAP. 12 — ARTICULAÇÃO TEMPOROMANDIBULAR (ATM) ═══
  {
    id: "hist-c12-01",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Básico",
    question: "A articulação temporomandibular é do tipo sinovial e possui um disco articular que divide a cavidade em:",
    options: [
      "Uma única cavidade indivisa",
      "Três compartimentos iguais",
      "Dois compartimentos (supra e infradiscal)",
      "Compartimentos preenchidos por tecido ósseo",
    ],
    correctIndex: 2,
    explanation:
      "O disco articular fibroso divide a ATM em compartimento superior (temporodiscal, de translação) e inferior (disco-condilar, de rotação); trata-se de uma articulação sinovial composta (Ten Cate / Madeira).",
  },
  {
    id: "hist-c12-02",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Básico",
    question: "Diferentemente da maioria das articulações sinoviais, as superfícies articulares da ATM são recobertas principalmente por:",
    options: [
      "Cartilagem hialina espessa",
      "Epitélio estratificado",
      "Osso compacto exposto",
      "Tecido conjuntivo fibroso (fibrocartilagem)",
    ],
    correctIndex: 3,
    explanation:
      "As superfícies articulares da ATM (côndilo e eminência/fossa) são revestidas por tecido conjuntivo fibroso denso (fibrocartilagem), e não por cartilagem hialina, o que lhes confere maior resistência e capacidade reparadora (Ten Cate).",
  },
  {
    id: "hist-c12-03",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Intermediário",
    question: "O disco articular da ATM, em sua porção central (zona intermediária), caracteriza-se por ser:",
    options: [
      "Ricamente vascularizado e bem inervado",
      "Constituído por cartilagem hialina lisa",
      "Formado por tecido ósseo esponjoso",
      "Fibroso, avascular e não inervado no centro",
    ],
    correctIndex: 3,
    explanation:
      "A zona intermediária do disco é fibrosa, avascular e não inervada (suporta carga); vasos e nervos concentram-se na região posterior (zona bilaminar/retrodiscal), o que tem implicação na dor das disfunções (Ten Cate).",
  },
  {
    id: "hist-c12-04",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Intermediário",
    question: "A cartilagem do côndilo mandibular, importante centro de crescimento da mandíbula, é classificada como:",
    options: [
      "Cartilagem hialina primária típica",
      "Cartilagem elástica",
      "Cartilagem secundária, de crescimento adaptativo",
      "Tecido ósseo membranoso puro",
    ],
    correctIndex: 2,
    explanation:
      "A cartilagem condilar é uma cartilagem secundária; cresce por aposição/diferenciação a partir de uma camada de células mesenquimais, responde a estímulos funcionais e participa do crescimento mandibular até a 2ª década (Ten Cate / Enlow).",
  },
  {
    id: "hist-c12-05",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Avançado",
    question: "A membrana sinovial que reveste internamente a cápsula da ATM tem como função principal:",
    options: [
      "Produzir o líquido sinovial, lubrificando a articulação",
      "Mineralizar progressivamente o disco articular",
      "Originar a fibrocartilagem do côndilo",
      "Inervar a zona intermediária do disco",
    ],
    correctIndex: 0,
    explanation:
      "A membrana sinovial (com sinoviócitos tipo A, macrofágicos, e tipo B, secretores) produz o líquido sinovial rico em ácido hialurônico, que lubrifica e nutre as superfícies articulares avasculares (Ten Cate).",
  },
  {
    id: "hist-c12-06",
    subject: "Histologia e Embriologia",
    topic: "Articulação Temporomandibular",
    difficulty: "Avançado",
    question: "A região retrodiscal (zona bilaminar) da ATM caracteriza-se por:",
    options: [
      "Ser fibrosa, avascular e sem inervação",
      "Ser ricamente vascularizada e inervada, com tecido elástico",
      "Ser formada por cartilagem hialina",
      "Corresponder à superfície articular do côndilo",
    ],
    correctIndex: 1,
    explanation:
      "A zona bilaminar (retrodiscal) é um tecido conjuntivo frouxo, ricamente vascularizado e inervado, com fibras elásticas na lâmina superior; por isso participa da dor das disfunções e do reposicionamento do disco (Ten Cate).",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CARIOLOGIA E OCLUSÃO
  // Referências: Fejerskov & Kidd, Cárie Dentária; Okeson, Tratamento das DTM e Oclusão
  // ══════════════════════════════════════════════════════════════════════════

  // ═══ CAP. 1 — CONCEITOS, ETIOLOGIA E MICROBIOLOGIA DA CÁRIE ═══
  {
    id: "cario-c01-01",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Básico",
    question: "A cárie dentária é mais bem definida, na cariologia contemporânea, como:",
    options: [
      "uma infecção exógena aguda, transmitida exclusivamente pela saliva dos cuidadores",
      "uma doença de origem puramente genética, independente da dieta e da higiene",
      "uma doença multifatorial, dieta-dependente e mediada pelo biofilme, de natureza dinâmica",
      "uma lesão traumática e irreversível das superfícies de esmalte e dentina",
    ],
    correctIndex: 2,
    explanation:
      "Cárie é uma doença multifatorial, açúcar/dieta-dependente, mediada pelo biofilme e de caráter dinâmico (alternância de desmineralização e remineralização), e não uma infecção clássica ou lesão traumática (Fejerskov & Kidd).",
  },
  {
    id: "cario-c01-02",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Básico",
    question: "No diagrama clássico de Keyes, a cárie depende da coincidência de três fatores. São eles:",
    options: [
      "hospedeiro suscetível, microbiota cariogênica e substrato fermentável da dieta",
      "idade do paciente, sexo biológico e predisposição hereditária familiar",
      "concentração de flúor, fluxo salivar e presença de selantes oclusais",
      "trauma oclusal, hábito de bruxismo e apertamento dental noturno",
    ],
    correctIndex: 0,
    explanation:
      "O diagrama de Keyes reúne hospedeiro, microbiota e substrato (dieta); Newbrun acrescentou o tempo como quarto fator. Os demais itens não compõem a tríade etiológica.",
  },
  {
    id: "cario-c01-03",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Básico",
    question: "Qual microrganismo é classicamente associado à INICIAÇÃO da lesão de cárie, por ser acidogênico, acidúrico e produtor de glucanos a partir da sacarose?",
    options: [
      "Porphyromonas gingivalis, do complexo vermelho subgengival",
      "Lactobacillus acidophilus, predominante em lesões já cavitadas",
      "Actinomyces viscosus, ligado sobretudo à cárie de cemento",
      "Streptococcus mutans, colonizador acidogênico de superfícies lisas",
    ],
    correctIndex: 3,
    explanation:
      "O S. mutans é classicamente associado à iniciação da cárie (acidogênico, acidúrico e produtor de glucanos pela glicosiltransferase); o Lactobacillus relaciona-se mais à progressão e a P. gingivalis é periodontopatógeno.",
  },
  {
    id: "cario-c01-04",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Intermediário",
    question: "De acordo com a hipótese ecológica da placa (Marsh), a cárie surge quando:",
    options: [
      "um único patógeno exógeno e específico invade e coloniza o esmalte hígido",
      "exposições frequentes a açúcares selecionam uma microbiota acidogênica (disbiose)",
      "ocorre ausência completa de biofilme sobre as superfícies dentais",
      "fungos do gênero Candida substituem totalmente a microbiota bacteriana",
    ],
    correctIndex: 1,
    explanation:
      "Na hipótese ecológica, quedas repetidas de pH selecionam espécies acidogênicas e acidúricas, gerando disbiose do biofilme; não se trata de infecção por um patógeno único nem de ausência de biofilme (Marsh).",
  },
  {
    id: "cario-c01-05",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Intermediário",
    question: "A sacarose é o carboidrato mais cariogênico da dieta principalmente porque:",
    options: [
      "é substrato para a síntese de glucanos extracelulares, reforçando a matriz do biofilme",
      "é o único açúcar capaz de ser fermentado pela microbiota bucal acidogênica",
      "possui pH intrinsecamente ácido, já situado abaixo do pH crítico do esmalte",
      "não pode ser removida pela higiene mecânica nem diluída pela saliva",
    ],
    correctIndex: 0,
    explanation:
      "Além de fermentável, a sacarose é o substrato para a glicosiltransferase sintetizar glucanos, que aumentam a adesão e a matriz do biofilme; outros açúcares fermentam, mas não formam glucanos com a mesma eficiência.",
  },
  {
    id: "cario-c01-06",
    subject: "Cariologia e Oclusão",
    topic: "Conceitos, Etiologia e Microbiologia da Cárie",
    difficulty: "Avançado",
    question: "A visão contemporânea (Fejerskov & Kidd) sobre o controle da cárie sustenta que a doença:",
    options: [
      "tem como objetivo central a erradicação total do S. mutans com antibióticos sistêmicos",
      "é uma doença infecciosa clássica e transmissível, comparável à tuberculose",
      "independe da dieta, bastando a mera presença de biofilme para que ocorra",
      "é um desequilíbrio ecológico do biofilme, manejável pelo controle de seus determinantes",
    ],
    correctIndex: 3,
    explanation:
      "A cárie é entendida como manifestação de desequilíbrio ecológico do biofilme comensal; controla-se manejando determinantes (dieta, biofilme, flúor, saliva), e não erradicando uma espécie nem tratando-a como infecção exógena clássica.",
  },

  // ═══ CAP. 2 — DESMINERALIZAÇÃO, REMINERALIZAÇÃO E SALIVA ═══
  {
    id: "cario-c02-01",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Básico",
    question: "Qual é o valor aproximado do pH crítico para o início da desmineralização do esmalte?",
    options: [
      "em torno de 7,0",
      "em torno de 5,5",
      "em torno de 6,5",
      "em torno de 4,0",
    ],
    correctIndex: 1,
    explanation:
      "Abaixo de pH ≈ 5,5 o meio fica subsaturado em relação à hidroxiapatita e o esmalte começa a se dissolver; esse é o pH crítico do esmalte (Fejerskov & Kidd).",
  },
  {
    id: "cario-c02-02",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Básico",
    question: "O processo de cárie no esmalte é mais bem descrito como:",
    options: [
      "uma destruição contínua e unidirecional, sem qualquer possibilidade de reversão",
      "um fenômeno exclusivamente bacteriano, sem componente físico-químico",
      "um processo que só se inicia depois que a cavitação se torna visível",
      "um equilíbrio dinâmico entre episódios de desmineralização e de remineralização",
    ],
    correctIndex: 3,
    explanation:
      "Há alternância contínua de perdas e ganhos minerais conforme o pH; quando a remineralização supera a desmineralização, lesões iniciais podem ser revertidas — daí o caráter dinâmico do processo.",
  },
  {
    id: "cario-c02-03",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Básico",
    question: "A curva de Stephan representa:",
    options: [
      "a queda do pH do biofilme após exposição a açúcar e seu retorno gradual ao basal",
      "a relação entre a idade do paciente e o número de lesões cariosas ativas",
      "a oscilação da temperatura intrabucal ao longo do ciclo mastigatório",
      "o aumento progressivo do fluxo salivar durante a alimentação diária",
    ],
    correctIndex: 0,
    explanation:
      "Após um bochecho de sacarose, o pH do biofilme cai abaixo do crítico em poucos minutos e retorna ao basal em cerca de 30–60 min pela ação tampão e pelo clearance salivar — a curva de Stephan.",
  },
  {
    id: "cario-c02-04",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Intermediário",
    question: "Qual mecanismo salivar atua diretamente na PROTEÇÃO contra a cárie?",
    options: [
      "o aumento da aderência do biofilme às superfícies dentais",
      "a redução das concentrações de cálcio e fosfato no meio bucal",
      "o tamponamento dos ácidos e o fornecimento de cálcio e fosfato à remineralização",
      "a diminuição do clearance dos açúcares retidos na cavidade bucal",
    ],
    correctIndex: 2,
    explanation:
      "A saliva tampona ácidos (bicarbonato/fosfato), é supersaturada em cálcio e fosfato (favorecendo a remineralização) e promove o clearance dos açúcares; os demais itens descrevem o oposto do efeito protetor.",
  },
  {
    id: "cario-c02-05",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Avançado",
    question: "Histologicamente, a lesão de mancha branca em esmalte caracteriza-se por:",
    options: [
      "perda mineral homogênea em toda a espessura do esmalte, já com superfície cavitada",
      "destruição precoce da junção amelodentinária com exposição da polpa",
      "depósito de cálculo mineralizado sobre uma superfície de esmalte íntegra",
      "desmineralização subsuperficial (corpo da lesão) sob camada superficial preservada",
    ],
    correctIndex: 3,
    explanation:
      "Na mancha branca, a maior perda mineral concentra-se no corpo subsuperficial da lesão, enquanto a camada superficial permanece relativamente intacta — por isso a lesão é potencialmente reversível por remineralização.",
  },
  {
    id: "cario-c02-06",
    subject: "Cariologia e Oclusão",
    topic: "Desmineralização, Remineralização e Saliva",
    difficulty: "Avançado",
    question: "Em relação ao esmalte, o pH crítico da dentina e do cemento radicular é:",
    options: [
      "muito menor, em torno de 3,0, devido à sua elevada mineralização",
      "exatamente igual ao do esmalte, fixado em 5,5 nas duas estruturas",
      "mais alto (≈ 6,2–6,5), tornando a raiz suscetível em meio menos ácido",
      "inexistente, pois dentina e cemento não sofrem desmineralização ácida",
    ],
    correctIndex: 2,
    explanation:
      "Por terem menor conteúdo mineral e mais matriz orgânica, dentina e cemento têm pH crítico mais alto (~6,2–6,5); por isso a cárie radicular progride em pH menos ácido do que o necessário para o esmalte (Fejerskov & Kidd).",
  },

  // ═══ CAP. 3 — DIAGNÓSTICO E DETECÇÃO DE LESÕES (ICDAS) ═══
  {
    id: "cario-c03-01",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Básico",
    question: "O sistema ICDAS tem como finalidade:",
    options: [
      "detectar e classificar visualmente os estágios da lesão de cárie, do esmalte à cavidade",
      "medir a profundidade das bolsas periodontais com sonda milimetrada calibrada",
      "quantificar o fluxo salivar estimulado em mililitros por minuto de coleta",
      "classificar as más oclusões dentárias segundo as chaves de Angle",
    ],
    correctIndex: 0,
    explanation:
      "O ICDAS gradua visualmente a lesão em códigos de 0 (hígido) a 6 (cavidade extensa em dentina), padronizando a detecção; não avalia periodonto, saliva nem oclusão.",
  },
  {
    id: "cario-c03-02",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Básico",
    question: "No exame clínico de cárie, a conduta correta quanto ao uso da sonda exploradora é:",
    options: [
      "pressioná-la com força nas fissuras para confirmar o amolecimento do esmalte",
      "substituí-la sempre pela sonda periodontal milimetrada na detecção de cárie",
      "usá-la apenas com ponta romba e sem pressão, para remover biofilme e sentir textura",
      "aquecê-la previamente para, ao tocar o dente, testar a sensibilidade dentinária",
    ],
    correctIndex: 2,
    explanation:
      "A sondagem sob pressão com ponta afiada pode cavitar lesões iniciais remineralizáveis e não aumenta a acurácia; recomenda-se sonda de ponta romba, sem pressão, associada à inspeção visual de superfícies limpas e secas.",
  },
  {
    id: "cario-c03-03",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Intermediário",
    question: "No ICDAS, o código 1 corresponde a:",
    options: [
      "cavidade ampla com dentina exposta em grande parte da superfície dental",
      "primeira alteração visual no esmalte, percebida somente após secagem com ar",
      "sombra acinzentada da dentina subjacente sob esmalte aparentemente íntegro",
      "microcavidade restrita ao esmalte por cárie, ainda sem dentina visível",
    ],
    correctIndex: 1,
    explanation:
      "O código 1 é a primeira alteração visual (mancha) vista apenas após secagem prolongada; o código 2 já é visível com o dente úmido, o 3 é microcavidade em esmalte, o 4 é sombra de dentina e os 5–6 são cavidades com dentina exposta.",
  },
  {
    id: "cario-c03-04",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Intermediário",
    question: "Qual exame é mais indicado para detectar lesões de cárie proximais ainda não visíveis clinicamente?",
    options: [
      "a radiografia panorâmica de rotina",
      "a radiografia oclusal total da arcada",
      "a tomografia de feixe cônico (TCFC) de rotina",
      "a radiografia interproximal (bitewing)",
    ],
    correctIndex: 3,
    explanation:
      "A bitewing é o padrão para lesões proximais e oclusais ocultas, com boa resolução e baixa dose; a panorâmica tem resolução insuficiente para cárie e a TCFC não se justifica como rotina pela dose mais alta.",
  },
  {
    id: "cario-c03-05",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Intermediário",
    question: "O aparelho de fluorescência a laser (DIAGNOdent) auxilia o diagnóstico de cárie ao:",
    options: [
      "medir diretamente a profundidade da bolsa periodontal vizinha à lesão",
      "captar a fluorescência de porfirinas bacterianas e de tecido desmineralizado",
      "emitir raios X de baixa dose para imagem das superfícies proximais",
      "aplicar leve corrente elétrica para medir a resistência elétrica do esmalte",
    ],
    correctIndex: 1,
    explanation:
      "O DIAGNOdent emite luz vermelha (~655 nm) e mede a fluorescência de porfirinas bacterianas e de tecido alterado; é um método coadjuvante, sujeito a falso-positivo por manchas e biofilme.",
  },
  {
    id: "cario-c03-06",
    subject: "Cariologia e Oclusão",
    topic: "Diagnóstico e Detecção de Lesões",
    difficulty: "Avançado",
    question: "Uma limitação relevante dos métodos de fluorescência a laser na detecção de cárie é:",
    options: [
      "a frequência de resultados falso-positivos por pigmentações, cálculo ou biofilme",
      "a total incapacidade de avaliar quaisquer superfícies oclusais dos dentes",
      "a exposição do paciente a doses elevadas de radiação ionizante",
      "a exigência de desgaste do esmalte para permitir a leitura do aparelho",
    ],
    correctIndex: 0,
    explanation:
      "Manchas, cálculo, biofilme e resíduos elevam a leitura e geram falso-positivos; por isso a fluorescência deve complementar — e não substituir — o exame visual e o radiográfico.",
  },

  // ═══ CAP. 4 — AVALIAÇÃO DE RISCO E ATIVIDADE DE CÁRIE ═══
  {
    id: "cario-c04-01",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Básico",
    question: "Uma lesão de mancha branca ATIVA, comparada a uma inativa, tende a apresentar-se:",
    options: [
      "brilhante, lisa, dura à sondagem e de coloração escurecida",
      "totalmente cavitada, com dentina amolecida e exposta ao meio",
      "restrita à face oclusal, sempre acompanhada de dor espontânea",
      "opaca, fosca e rugosa, próxima à margem gengival e recoberta por biofilme",
    ],
    correctIndex: 3,
    explanation:
      "A lesão ativa é opaca/fosca, rugosa, costuma situar-se junto à gengiva e sob biofilme; a inativa (paralisada) é lisa, brilhante e dura. A atividade — e não apenas a presença — orienta a conduta (Fejerskov & Kidd).",
  },
  {
    id: "cario-c04-02",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Básico",
    question: "Qual é o melhor preditor isolado do risco futuro de cárie de um paciente?",
    options: [
      "o tipo sanguíneo e os antecedentes hereditários da família",
      "a experiência (história) passada de cárie do próprio indivíduo",
      "a cor e o grau de apinhamento dos dentes anteriores",
      "o número total de restaurações estéticas já existentes",
    ],
    correctIndex: 1,
    explanation:
      "A experiência prévia de cárie é o preditor isolado mais forte do risco futuro; integra-se a dieta, biofilme, fluxo salivar e exposição ao flúor na avaliação global de risco.",
  },
  {
    id: "cario-c04-03",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Intermediário",
    question: "O índice CPO-D, amplamente usado em epidemiologia da cárie, expressa:",
    options: [
      "a profundidade média das bolsas periodontais por sextante examinado",
      "a porcentagem de superfícies dentais recobertas por biofilme visível",
      "o número de dentes permanentes cariados, perdidos e obturados",
      "a quantidade de flúor incorporada ao esmalte, medida em ppm",
    ],
    correctIndex: 2,
    explanation:
      "O CPO-D conta dentes permanentes Cariados, Perdidos (por cárie) e Obturados; sua versão para dentes decíduos é o ceo-d. Mede a experiência de cárie acumulada, não o periodonto nem o biofilme.",
  },
  {
    id: "cario-c04-04",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Intermediário",
    question: "Qual condição aumenta diretamente o risco de cárie por reduzir a proteção salivar?",
    options: [
      "a hipossalivação/xerostomia por fármacos ou radioterapia de cabeça e pescoço",
      "o fluxo salivar elevado com alta capacidade tampão mantida",
      "a dieta pobre em sacarose e em outros carboidratos fermentáveis",
      "o uso diário e supervisionado de dentifrício fluoretado",
    ],
    correctIndex: 0,
    explanation:
      "A redução do fluxo salivar (xerostomia por medicamentos, síndrome de Sjögren ou radioterapia) diminui o tamponamento, o clearance e o aporte de cálcio/fosfato, elevando muito o risco; as outras situações reduzem o risco.",
  },
  {
    id: "cario-c04-05",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Intermediário",
    question: "Uma lesão de cárie INATIVA (paralisada) caracteriza-se por ser:",
    options: [
      "fosca, mole e rugosa, com avanço rápido em direção à polpa",
      "sempre dolorosa ao frio e ao toque do explorador clínico",
      "obrigatoriamente cavitada e contaminada por biofilme espesso",
      "lisa, brilhante e dura à sondagem, frequentemente escurecida",
    ],
    correctIndex: 3,
    explanation:
      "A lesão paralisada apresenta superfície lisa, brilhante, dura e em geral escurecida, refletindo remineralização e ausência de progressão; a aparência fosca e rugosa indica atividade.",
  },
  {
    id: "cario-c04-06",
    subject: "Cariologia e Oclusão",
    topic: "Avaliação de Risco e Atividade de Cárie",
    difficulty: "Avançado",
    question: "Na avaliação de risco individual (ex.: cariograma/CAMBRA), a conduta recomendada é:",
    options: [
      "tratar todos os pacientes com o mesmo protocolo preventivo padronizado",
      "basear a decisão apenas no número de lesões cavitadas já existentes",
      "ponderar múltiplos determinantes para individualizar a intensidade preventiva",
      "adiar qualquer medida preventiva até a instalação de novas cavidades",
    ],
    correctIndex: 2,
    explanation:
      "Modelos como o cariograma e o CAMBRA integram dieta, biofilme, flúor, saliva e história de cárie para estimar o risco e calibrar a intensidade das medidas preventivas de cada paciente, em vez de protocolos únicos.",
  },

  // ═══ CAP. 5 — FLÚOR E PREVENÇÃO ═══
  {
    id: "cario-c05-01",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Básico",
    question: "Segundo o entendimento atual, o principal mecanismo de ação anticárie do flúor é:",
    options: [
      "sistêmico e pré-eruptivo, por incorporação maciça ao esmalte em formação",
      "tópico e pós-eruptivo, inibindo a desmineralização e favorecendo a remineralização",
      "antibiótico, eliminando por completo as bactérias do biofilme dental",
      "mecânico, formando uma barreira física impermeável sobre o esmalte",
    ],
    correctIndex: 1,
    explanation:
      "O efeito predominante do flúor é tópico/local e pós-eruptivo: na presença de flúor no meio, reduz-se a desmineralização e favorece-se a remineralização (esmalte tipo fluorapatita), além de leve inibição enzimática bacteriana; o efeito sistêmico é secundário.",
  },
  {
    id: "cario-c05-02",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Básico",
    question: "Qual é a faixa de concentração de flúor dos dentifrícios convencionais recomendados para o controle de cárie?",
    options: [
      "1.000 a 1.500 ppm de flúor",
      "10 a 50 ppm de flúor",
      "5.000 a 10.000 ppm de flúor",
      "100 a 300 ppm de flúor",
    ],
    correctIndex: 0,
    explanation:
      "Dentifrícios convencionais eficazes têm cerca de 1.000–1.500 ppm de flúor (no Brasil, 1.450 ppm é comum); abaixo de ~1.000 ppm a eficácia anticárie cai, e formulações de 5.000 ppm são de uso específico para alto risco.",
  },
  {
    id: "cario-c05-03",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Intermediário",
    question: "O verniz fluoretado de aplicação profissional, com 5% de fluoreto de sódio, contém aproximadamente:",
    options: [
      "1.450 ppm de flúor",
      "12.300 ppm de flúor",
      "5.000 ppm de flúor",
      "22.600 ppm de flúor",
    ],
    correctIndex: 3,
    explanation:
      "O verniz a 5% de NaF equivale a ~22.600 ppm de flúor; o gel acidulado (APF) a 1,23% tem ~12.300 ppm. A alta concentração do verniz, aderente e de liberação lenta e com baixo risco de ingestão, torna-o seguro inclusive em crianças.",
  },
  {
    id: "cario-c05-04",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Intermediário",
    question: "A fluorose dentária resulta de:",
    options: [
      "uso tópico ocasional de verniz fluoretado em adultos de alto risco",
      "deficiência crônica de flúor mantida ao longo de toda a vida adulta",
      "ingestão crônica excessiva de flúor durante a formação do esmalte",
      "aplicação de selante resinoso sobre dentes recém-erupcionados",
    ],
    correctIndex: 2,
    explanation:
      "A fluorose é uma hipomineralização do esmalte causada por ingestão sistêmica excessiva e crônica de flúor no período de formação dental; por isso supervisiona-se a quantidade de dentifrício em crianças pequenas.",
  },
  {
    id: "cario-c05-05",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Básico",
    question: "A concentração de flúor recomendada na fluoretação das águas de abastecimento público gira em torno de:",
    options: [
      "5,0 ppm",
      "0,7 ppm",
      "10 ppm",
      "0,05 ppm",
    ],
    correctIndex: 1,
    explanation:
      "A fluoretação da água é ajustada para cerca de 0,7 ppm (faixa ~0,6–0,8 conforme clima e consumo), equilibrando o benefício anticárie e o risco de fluorose.",
  },
  {
    id: "cario-c05-06",
    subject: "Cariologia e Oclusão",
    topic: "Flúor e Prevenção",
    difficulty: "Avançado",
    question: "A chamada dose provavelmente tóxica (DPT) de flúor, a partir da qual se recomenda intervenção, é de aproximadamente:",
    options: [
      "0,5 mg de flúor por kg de peso corporal",
      "50 mg de flúor por kg de peso corporal",
      "0,05 mg de flúor por kg de peso corporal",
      "5 mg de flúor por kg de peso corporal",
    ],
    correctIndex: 3,
    explanation:
      "A dose provavelmente tóxica é estimada em ~5 mg F/kg de peso; acima dela há indicação de medidas (oferta de leite/cálcio, indução de êmese e atendimento). É parâmetro relevante sobretudo na ingestão acidental por crianças.",
  },

  // ═══ CAP. 6 — MANEJO NÃO-OPERATÓRIO E MÍNIMA INTERVENÇÃO ═══
  {
    id: "cario-c06-01",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Básico",
    question: "Na odontologia de mínima intervenção, qual é a conduta diante de uma lesão de cárie ATIVA, porém NÃO cavitada?",
    options: [
      "controle não-operatório com flúor, manejo do biofilme e da dieta, buscando inativá-la",
      "preparo cavitário imediato e restauração definitiva com resina composta",
      "extração do dente envolvido para evitar a progressão da lesão",
      "selamento com coroa total provisória até a reavaliação anual",
    ],
    correctIndex: 0,
    explanation:
      "Lesões não-cavitadas podem ser remineralizadas/inativadas por medidas não-operatórias (flúor, controle de biofilme e dieta); a intervenção restauradora reserva-se a lesões cavitadas que não se conseguem higienizar.",
  },
  {
    id: "cario-c06-02",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Básico",
    question: "Os selantes de fóssulas e fissuras atuam na prevenção da cárie ao:",
    options: [
      "liberar antibióticos que eliminam o biofilme das superfícies lisas",
      "remineralizar quimicamente as lesões já cavitadas em dentina",
      "formar barreira física que isola fóssulas e fissuras do biofilme e do substrato",
      "substituir a necessidade de escovação e de exposição ao flúor",
    ],
    correctIndex: 2,
    explanation:
      "O selante cria uma barreira física que impede o acúmulo de biofilme e o acesso de açúcares às fóssulas e fissuras, sítios de difícil higienização; não dispensa a escovação nem o flúor.",
  },
  {
    id: "cario-c06-03",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Intermediário",
    question: "O Tratamento Restaurador Atraumático (ART) caracteriza-se por:",
    options: [
      "preparo cavitário com alta rotação, sob anestesia e isolamento absoluto",
      "remoção do tecido cariado com instrumentos manuais e restauração com ionômero de vidro",
      "aplicação exclusiva de verniz fluoretado, sem qualquer remoção de tecido",
      "confecção de coroas metálicas pré-fabricadas em molares decíduos",
    ],
    correctIndex: 1,
    explanation:
      "O ART remove o tecido cariado amolecido com instrumentos manuais (curetas/escavadores) e restaura com ionômero de vidro, que adere e libera flúor; é útil em campo e em pacientes com acesso difícil a equipos.",
  },
  {
    id: "cario-c06-04",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Intermediário",
    question: "Em lesões de cárie profundas, próximas à polpa, a remoção SELETIVA de tecido cariado recomenda:",
    options: [
      "remover toda a dentina amolecida até atingir dentina dura, mesmo expondo a polpa",
      "não remover tecido algum e apenas selar a cavidade sobre a cárie ativa",
      "realizar pulpectomia preventiva antes de qualquer tentativa de restauração",
      "deixar dentina amolecida sobre a polpa e remover até dentina firme nas paredes",
    ],
    correctIndex: 3,
    explanation:
      "Na lesão profunda, remove-se até dentina firme/dura nas paredes (margem de selamento) e mantém-se dentina amolecida sobre a parede pulpar para evitar exposição; o selamento marginal interrompe o suprimento à lesão (remoção seletiva).",
  },
  {
    id: "cario-c06-05",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Intermediário",
    question: "A técnica de infiltração de resina (ex.: ICON) é indicada principalmente para:",
    options: [
      "lesões proximais iniciais não cavitadas, paralisando-as sem preparo cavitário",
      "cavidades extensas em dentina com comprometimento de cúspides",
      "lesões de cárie radicular acompanhadas de mobilidade dental avançada",
      "fraturas coronárias com exposição pulpar e dor espontânea intensa",
    ],
    correctIndex: 0,
    explanation:
      "A infiltração de resina preenche os poros do corpo de lesões proximais iniciais não cavitadas, criando uma barreira ao avanço sem desgaste; não substitui restauração em cavidades extensas.",
  },
  {
    id: "cario-c06-06",
    subject: "Cariologia e Oclusão",
    topic: "Manejo Não-Operatório e Mínima Intervenção",
    difficulty: "Avançado",
    question: "O diamino fluoreto de prata (SDF) a 38% é empregado no manejo de cárie para:",
    options: [
      "clarear a coloração das lesões de cárie que já se encontram paralisadas",
      "anestesiar a dentina antes de um preparo cavitário convencional",
      "paralisar lesões cariosas ativas, embora escureça o tecido tratado",
      "selar fisicamente fóssulas e fissuras hígidas de pré-molares",
    ],
    correctIndex: 2,
    explanation:
      "O SDF a 38% paralisa lesões ativas pela ação antimicrobiana da prata e remineralizante do flúor, sendo útil quando a restauração não é viável; o principal inconveniente é o escurecimento (mancha enegrecida) do tecido tratado.",
  },

  // ═══ CAP. 7 — OCLUSÃO: ANATOMIA FUNCIONAL E ATM ═══
  {
    id: "cario-c07-01",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Básico",
    question: "A articulação temporomandibular (ATM) é classificada como uma articulação:",
    options: [
      "do tipo sutura, imóvel e de natureza fibrosa",
      "esferóidea pura, de movimento exclusivamente rotacional",
      "cartilaginosa primária, sem disco articular interposto",
      "ginglimoartroidal, combinando movimento de dobradiça e de deslizamento",
    ],
    correctIndex: 3,
    explanation:
      "A ATM é ginglimoartroidal: 'gínglimo' (dobradiça/rotação) no compartimento inferior e 'artroidal' (deslizamento/translação) no superior, separados pelo disco articular (Okeson).",
  },
  {
    id: "cario-c07-02",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Básico",
    question: "Quais músculos são os principais ELEVADORES da mandíbula (fechamento da boca)?",
    options: [
      "bucinador, orbicular da boca e platisma",
      "masseter, temporal e pterigóideo medial",
      "esternocleidomastóideo, trapézio e escaleno",
      "digástrico, milo-hióideo e gênio-hióideo",
    ],
    correctIndex: 1,
    explanation:
      "Masseter, temporal e pterigóideo medial são os elevadores; os supra-hióideos (como o digástrico) participam da abertura, e os demais não pertencem à musculatura mastigatória elevadora.",
  },
  {
    id: "cario-c07-03",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Básico",
    question: "A inervação motora dos músculos da mastigação provém de qual nervo craniano?",
    options: [
      "do nervo trigêmeo (V par), por meio do seu ramo mandibular",
      "do nervo facial (VII par), por meio dos seus ramos terminais",
      "do nervo glossofaríngeo (IX par), na região da orofaringe",
      "do nervo hipoglosso (XII par), responsável pela língua",
    ],
    correctIndex: 0,
    explanation:
      "Os músculos da mastigação são inervados pelo ramo mandibular (V3) do trigêmeo; o facial inerva a musculatura da mímica, não a mastigatória.",
  },
  {
    id: "cario-c07-04",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Intermediário",
    question: "O disco articular divide a ATM em dois compartimentos. Os movimentos predominantes em cada um são:",
    options: [
      "rotação no compartimento superior e translação no inferior",
      "translação em ambos os compartimentos, de forma simétrica",
      "rotação no compartimento inferior e translação no superior",
      "ausência de movimento, pois o disco trava a articulação",
    ],
    correctIndex: 2,
    explanation:
      "O compartimento inferior (côndilo–disco) realiza sobretudo rotação; o superior (disco–fossa) realiza translação. Por isso o complexo côndilo-disco se move como uma unidade (Okeson).",
  },
  {
    id: "cario-c07-05",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Intermediário",
    question: "Qual é a principal ação do feixe INFERIOR do músculo pterigóideo lateral?",
    options: [
      "elevar a mandíbula para o fechamento da boca",
      "estabilizar o disco articular durante o fechamento",
      "retrair a mandíbula no movimento de fechamento terminal",
      "protruir a mandíbula e auxiliar a abertura e o movimento contralateral",
    ],
    correctIndex: 3,
    explanation:
      "O feixe inferior do pterigóideo lateral traciona o côndilo para frente (protrusão, abertura e desvio contralateral); o feixe superior atua na estabilização do disco e do côndilo durante o fechamento.",
  },
  {
    id: "cario-c07-06",
    subject: "Cariologia e Oclusão",
    topic: "Anatomia Funcional e ATM",
    difficulty: "Avançado",
    question: "Sobre a vascularização e a inervação do disco articular e do tecido retrodiscal, é correto afirmar que:",
    options: [
      "todo o disco é ricamente vascularizado e inervado, inclusive a zona intermediária",
      "o disco é avascular e aneural no centro, mas o tecido retrodiscal é vascularizado e inervado",
      "tanto o disco quanto o tecido retrodiscal são completamente avasculares e aneurais",
      "apenas a zona intermediária do disco contém vasos e nervos em abundância",
    ],
    correctIndex: 1,
    explanation:
      "A porção funcional do disco (zona intermediária) é avascular e aneural; já o tecido retrodiscal (zona bilaminar) é ricamente vascularizado e inervado, sendo importante fonte de dor quando sobrecarregado, como no deslocamento de disco.",
  },

  // ═══ CAP. 8 — MOVIMENTOS MANDIBULARES E DETERMINANTES ═══
  {
    id: "cario-c08-01",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Básico",
    question: "Na fase INICIAL da abertura bucal (primeiros milímetros), o movimento condilar predominante é:",
    options: [
      "rotação em torno de um eixo, no compartimento inferior da ATM",
      "translação anterior completa do côndilo sobre a eminência articular",
      "deslocamento lateral puro, correspondente ao movimento de Bennett",
      "retrusão do côndilo contra o tecido retrodiscal posterior",
    ],
    correctIndex: 0,
    explanation:
      "A abertura começa por rotação (compartimento inferior); a partir de ~20–25 mm soma-se a translação do complexo côndilo-disco para baixo e para frente sobre a eminência (Okeson).",
  },
  {
    id: "cario-c08-02",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Básico",
    question: "Em um movimento mandibular lateral (por exemplo, para a direita), o lado de TRABALHO é:",
    options: [
      "o lado oposto ao do movimento, onde o côndilo translada para frente e medialmente",
      "sempre o lado anterior, definido pelo contato dos dentes incisivos",
      "indeterminado, pois não há diferença funcional entre os dois lados",
      "o lado para o qual a mandíbula se desloca, onde está o côndilo de rotação",
    ],
    correctIndex: 3,
    explanation:
      "O lado de trabalho é aquele para o qual a mandíbula se move (côndilo de rotação); o lado oposto é o de balanceio (não-trabalho), cujo côndilo translada para frente, para baixo e medialmente.",
  },
  {
    id: "cario-c08-03",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Intermediário",
    question: "O movimento de Bennett corresponde:",
    options: [
      "à rotação pura do côndilo de balanceio em torno de um eixo vertical",
      "ao deslizamento protrusivo simétrico e simultâneo de ambos os côndilos",
      "ao deslocamento lateral do corpo mandibular em direção ao lado de trabalho",
      "à abertura máxima da boca a partir da posição de relação cêntrica",
    ],
    correctIndex: 2,
    explanation:
      "O movimento de Bennett é o deslocamento lateral da mandíbula em direção ao lado de trabalho durante a excursão lateral; o ângulo de Bennett descreve o trajeto do côndilo do lado de balanceio no plano horizontal.",
  },
  {
    id: "cario-c08-04",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Intermediário",
    question: "Quais são, respectivamente, os determinantes POSTERIOR e ANTERIOR do movimento mandibular?",
    options: [
      "o plano oclusal e a curva de Spee",
      "a guia condilar (ATM) e a guia anterior (dentes anteriores)",
      "a posição da língua e dos lábios em repouso funcional",
      "o ângulo de Bennett e a distância intercondilar fixa",
    ],
    correctIndex: 1,
    explanation:
      "O determinante posterior é a guia condilar (anatomia e trajetória da ATM), fixo; o anterior é a guia anterior (relação dos dentes anteriores), modificável pelo profissional. Entre eles situam-se os dentes posteriores.",
  },
  {
    id: "cario-c08-05",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Intermediário",
    question: "A curva de Spee é definida como:",
    options: [
      "a curvatura ântero-posterior do plano oclusal, observada em norma lateral",
      "a curvatura no plano frontal das cúspides dos dentes posteriores",
      "o ângulo formado entre a guia condilar e o plano horizontal de referência",
      "a distância média entre os centros dos dois côndilos mandibulares",
    ],
    correctIndex: 0,
    explanation:
      "A curva de Spee é a curvatura ântero-posterior do plano oclusal (vista sagital); a curvatura no plano frontal (vestíbulo-lingual das cúspides) é a curva de Wilson. Ambas são determinantes da morfologia oclusal.",
  },
  {
    id: "cario-c08-06",
    subject: "Cariologia e Oclusão",
    topic: "Movimentos Mandibulares e Determinantes da Oclusão",
    difficulty: "Avançado",
    question: "O diagrama de Posselt (envelope de movimento, no plano sagital) representa:",
    options: [
      "apenas a trajetória de abertura e fechamento mantida em relação cêntrica",
      "a distribuição das forças oclusais sobre cada um dos dentes posteriores",
      "a relação entre o fluxo salivar e a amplitude do movimento mandibular",
      "os limites extremos de movimento do ponto interincisal mandibular",
    ],
    correctIndex: 3,
    explanation:
      "O envelope de Posselt delimita todos os movimentos de borda do ponto interincisal no plano sagital — do arco de fechamento terminal em RC à protrusão e à abertura máxima —, definindo o limite externo da função mandibular.",
  },

  // ═══ CAP. 9 — OCLUSÃO FUNCIONAL (RC, MIH, GUIAS) ═══
  {
    id: "cario-c09-01",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Básico",
    question: "A máxima intercuspidação habitual (MIH) é definida como:",
    options: [
      "a posição mais retruída e forçada possível do côndilo dentro da fossa",
      "a posição de repouso fisiológico da mandíbula, sem contato entre os dentes",
      "a posição de máximo entrelaçamento das cúspides, determinada pelos dentes",
      "a posição assumida pela mandíbula durante a abertura bucal máxima",
    ],
    correctIndex: 2,
    explanation:
      "A MIH (ou posição de intercuspidação) é a relação de máximo contato/entrelaçamento das cúspides, definida pelos próprios dentes, independentemente da posição condilar.",
  },
  {
    id: "cario-c09-02",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Básico",
    question: "Pela definição contemporânea, a relação cêntrica (RC) corresponde à posição condilar:",
    options: [
      "mais ântero-superior na fossa, contra a vertente posterior da eminência, com disco interposto",
      "mais posterior e inferior possível, forçada contra o tecido retrodiscal",
      "determinada exclusivamente pelo máximo contato existente entre os dentes",
      "de translação máxima do côndilo para frente sobre a eminência articular",
    ],
    correctIndex: 0,
    explanation:
      "A definição atual de RC posiciona os côndilos em relação ântero-superior na fossa, apoiados nas vertentes posteriores das eminências, com os discos interpostos — posição musculoesquelética estável e reprodutível, independente dos dentes (Okeson).",
  },
  {
    id: "cario-c09-03",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Intermediário",
    question: "No conceito de oclusão mutuamente protegida, ocorre que:",
    options: [
      "os dentes posteriores guiam todos os movimentos excursivos da mandíbula",
      "os anteriores protegem os posteriores nas excursões, e os posteriores protegem os anteriores em MIH",
      "apenas os caninos suportam todas as cargas durante a máxima intercuspidação",
      "não há proteção recíproca, pois todos os dentes contatam igualmente em tudo",
    ],
    correctIndex: 1,
    explanation:
      "Na oclusão mutuamente protegida, em MIH os dentes posteriores recebem as cargas axiais e protegem os anteriores; nas excursões, a guia anterior desoclui os posteriores, protegendo-os de cargas laterais.",
  },
  {
    id: "cario-c09-04",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Intermediário",
    question: "A diferença entre guia canina e função em grupo, nos movimentos de lateralidade, é que:",
    options: [
      "na guia canina todos os dentes posteriores do lado de trabalho contatam juntos",
      "a função em grupo concentra todo o contato exclusivamente sobre o canino",
      "ambas mantêm contatos no lado de balanceio durante a excursão lateral",
      "na guia canina só o canino contata; na função em grupo, vários dentes do lado de trabalho contatam",
    ],
    correctIndex: 3,
    explanation:
      "Na guia canina, apenas os caninos contatam e desocluem os demais na lateralidade; na função em grupo, vários dentes do lado de trabalho compartilham o contato. Em nenhuma das duas deve haver contato no lado de balanceio.",
  },
  {
    id: "cario-c09-05",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Intermediário",
    question: "O espaço funcional livre (freeway space) corresponde:",
    options: [
      "à distância horizontal de sobressaliência entre os incisivos (overjet)",
      "ao trespasse vertical dos incisivos superiores sobre os inferiores",
      "à diferença entre a dimensão vertical de repouso e a de oclusão (~2–4 mm)",
      "à folga existente entre o disco articular e o teto da fossa mandibular",
    ],
    correctIndex: 2,
    explanation:
      "O espaço funcional livre é a diferença entre a dimensão vertical de repouso e a de oclusão, em geral de ~2–4 mm; sua ausência ou excesso pode gerar sobrecarga muscular e é crítico na reabilitação protética.",
  },
  {
    id: "cario-c09-06",
    subject: "Cariologia e Oclusão",
    topic: "Oclusão Funcional",
    difficulty: "Avançado",
    question: "Por que a interferência oclusal no lado de BALANCEIO (não-trabalho) é considerada particularmente nociva?",
    options: [
      "incide longe do eixo de rotação, gerando torques desfavoráveis sobre o dente e a ATM",
      "ocorre apenas em prótese total e nunca na dentição natural do paciente",
      "é facilmente percebida e eliminada de forma espontânea pelo próprio paciente",
      "protege a ATM ao distribuir as cargas pelos dois lados de modo igualitário",
    ],
    correctIndex: 0,
    explanation:
      "O contato de balanceio atua como fulcro distante do eixo condilar, criando torques e cargas potencialmente lesivas ao dente e à articulação; por isso é alvo prioritário do ajuste oclusal (exceto na oclusão balanceada bilateral planejada em prótese total).",
  },

  // ═══ CAP. 10 — DTM: ETIOLOGIA, CLASSIFICAÇÃO E DIAGNÓSTICO ═══
  {
    id: "cario-c10-01",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Básico",
    question: "O termo disfunção temporomandibular (DTM) designa:",
    options: [
      "uma única doença degenerativa específica da cartilagem do côndilo",
      "um conjunto de distúrbios dos músculos mastigatórios, da ATM e estruturas associadas",
      "qualquer dor de origem dental ou periodontal localizada na região posterior",
      "uma alteração exclusivamente psicológica, sem sinais físicos detectáveis",
    ],
    correctIndex: 1,
    explanation:
      "DTM é um termo coletivo para distúrbios que envolvem a musculatura mastigatória, a ATM e estruturas associadas, manifestando-se por dor, ruídos articulares e limitação de movimento (Okeson).",
  },
  {
    id: "cario-c10-02",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Básico",
    question: "Entre os ruídos articulares, a CREPITAÇÃO está mais associada a:",
    options: [
      "deslocamento de disco com redução, ainda em fase inicial",
      "contração normal e fisiológica dos músculos elevadores",
      "abertura bucal mantida dentro dos limites de normalidade",
      "alterações degenerativas das superfícies articulares (osteoartrite)",
    ],
    correctIndex: 3,
    explanation:
      "A crepitação (ruído de atrito, múltiplo) indica alterações degenerativas das superfícies articulares (osteoartrite); o clique/estalido único costuma relacionar-se ao deslocamento de disco com redução.",
  },
  {
    id: "cario-c10-03",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Intermediário",
    question: "O clique recíproco (estalido na abertura e novo estalido no fechamento) é característico de:",
    options: [
      "deslocamento de disco COM redução",
      "deslocamento de disco SEM redução (travamento)",
      "anquilose óssea completa da articulação",
      "espasmo isolado do músculo masseter",
    ],
    correctIndex: 0,
    explanation:
      "No deslocamento com redução, o côndilo 'recaptura' o disco na abertura (1º clique) e o perde no fechamento (2º clique) — o clique recíproco. Sem redução, o disco não é recapturado e há limitação sem clique.",
  },
  {
    id: "cario-c10-04",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Intermediário",
    question: "O deslocamento de disco SEM redução, na fase aguda, manifesta-se tipicamente por:",
    options: [
      "abertura bucal ampla e indolor, acompanhada de clique recíproco intenso",
      "ausência completa de sintomas, com amplitude de movimento normal",
      "limitação da abertura bucal com desvio para o lado afetado, sem clique",
      "mordida aberta anterior progressiva, indolor e de instalação bilateral",
    ],
    correctIndex: 2,
    explanation:
      "No deslocamento sem redução agudo (travamento/'closed lock'), o disco bloqueia a translação: há limitação de abertura (~25–30 mm), desvio para o lado afetado e desaparecimento do clique antes presente.",
  },
  {
    id: "cario-c10-05",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Avançado",
    question: "Sobre a etiologia das DTM, o entendimento atual é que:",
    options: [
      "as interferências oclusais são a causa única e principal da maioria dos casos",
      "a origem é multifatorial (trauma, sobrecarga, parafunção, fatores psicossociais), com papel oclusal limitado",
      "os quadros decorrem exclusivamente de infecções bacterianas da articulação",
      "são sempre congênitas e independem de hábitos ou de níveis de estresse",
    ],
    correctIndex: 1,
    explanation:
      "A literatura atual considera a DTM multifatorial — trauma, sobrecarga funcional, parafunção (bruxismo) e fatores psicossociais —, com participação dos fatores oclusais hoje tida como limitada e não causal isolada.",
  },
  {
    id: "cario-c10-06",
    subject: "Cariologia e Oclusão",
    topic: "DTM: Etiologia, Classificação e Diagnóstico",
    difficulty: "Avançado",
    question: "Qual exame de imagem é o de escolha para avaliar a POSIÇÃO e a integridade do DISCO articular?",
    options: [
      "a radiografia panorâmica convencional",
      "a tomografia computadorizada (TC) dos tecidos ósseos",
      "a cintilografia óssea com radiofármaco",
      "a ressonância magnética (RM) da ATM",
    ],
    correctIndex: 3,
    explanation:
      "A RM é o padrão para avaliar tecidos moles, incluindo posição e morfologia do disco; a TC/TCFC avalia melhor as estruturas ósseas (degeneração), e a panorâmica serve apenas como triagem inicial.",
  },

  // ═══ CAP. 11 — TRATAMENTO DA DTM E PLACAS OCLUSAIS ═══
  {
    id: "cario-c11-01",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Básico",
    question: "Qual abordagem deve ser priorizada no manejo inicial da maioria das DTM?",
    options: [
      "tratamento conservador e reversível (orientação, autocuidado, fisioterapia, placa)",
      "ajuste oclusal por desgaste seletivo extenso e de caráter definitivo",
      "cirurgia articular aberta, adotada como primeira escolha terapêutica",
      "reabilitação protética total e imediata de ambas as arcadas dentárias",
    ],
    correctIndex: 0,
    explanation:
      "A maioria das DTM responde a medidas conservadoras e reversíveis (educação, autocuidado, termoterapia, fisioterapia, fármacos e placa); intervenções irreversíveis ficam reservadas a casos selecionados (Okeson).",
  },
  {
    id: "cario-c11-02",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Básico",
    question: "A principal finalidade da placa oclusal estabilizadora (placa miorrelaxante) é:",
    options: [
      "corrigir definitivamente a posição dos dentes, como faz um aparelho ortodôntico",
      "aumentar de forma permanente a dimensão vertical de oclusão do paciente",
      "reduzir a sobrecarga muscular/articular e proteger os dentes do desgaste por bruxismo",
      "substituir os dentes ausentes, restabelecendo a função mastigatória perdida",
    ],
    correctIndex: 2,
    explanation:
      "A placa estabilizadora distribui contatos de forma uniforme e reduz a hiperatividade muscular, protegendo dentes e ATM da sobrecarga e do bruxismo; é reversível e não move dentes nem altera permanentemente a oclusão.",
  },
  {
    id: "cario-c11-03",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Intermediário",
    question: "Quais são características de uma placa oclusal estabilizadora bem confeccionada?",
    options: [
      "cobertura parcial de apenas alguns dentes posteriores, em resina mole",
      "contatos pesados somente nos dentes anteriores, sem apoio posterior",
      "ausência de qualquer contato dental, para 'descansar' a articulação",
      "cobertura total da arcada, em RC, com contatos uniformes e guia anterior nas excursões",
    ],
    correctIndex: 3,
    explanation:
      "A placa estabilizadora é rígida, de cobertura total, ajustada em relação cêntrica, com contatos simultâneos e uniformes e desoclusão dos posteriores pela guia anterior nas excursões; placas parciais podem causar extrusão e movimentação indesejada.",
  },
  {
    id: "cario-c11-04",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Intermediário",
    question: "A placa reposicionadora anterior é indicada classicamente para:",
    options: [
      "casos de osteoartrite avançada com perda total do espaço articular",
      "deslocamento de disco com redução, reposicionando a mandíbula à frente",
      "anquilose óssea bilateral da articulação temporomandibular",
      "aumento permanente e definitivo da dimensão vertical de oclusão",
    ],
    correctIndex: 1,
    explanation:
      "A placa reposicionadora anterior reposiciona temporariamente a mandíbula para frente, para manter a relação côndilo-disco em casos selecionados de deslocamento com redução; seu uso é criterioso pelo risco de alterações oclusais.",
  },
  {
    id: "cario-c11-05",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Intermediário",
    question: "Em relação aos tratamentos oclusais IRREVERSÍVEIS (ajuste por desgaste, ortodontia, prótese) nas DTM:",
    options: [
      "devem ser reservados a indicações específicas, não sendo primeira linha de rotina",
      "constituem a primeira escolha para todo paciente com qualquer tipo de DTM",
      "são isentos de risco e podem ser indicados de forma empírica e ampla",
      "substituem com vantagem qualquer medida conservadora ou reversível",
    ],
    correctIndex: 0,
    explanation:
      "Procedimentos irreversíveis não têm respaldo como terapia inicial rotineira da DTM; primeiro esgotam-se as medidas conservadoras/reversíveis, reservando-se o tratamento oclusal definitivo a indicações bem definidas.",
  },
  {
    id: "cario-c11-06",
    subject: "Cariologia e Oclusão",
    topic: "Tratamento da DTM e Placas Oclusais",
    difficulty: "Avançado",
    question: "Sobre o manejo do bruxismo associado à DTM, é correto afirmar que:",
    options: [
      "a placa oclusal cura definitivamente o hábito de ranger os dentes",
      "o bruxismo deve sempre ser tratado por meio de cirurgia da ATM",
      "a placa protege as estruturas, mas não elimina por si só a atividade parafuncional",
      "não há qualquer benefício no uso de placa em pacientes bruxômanos",
    ],
    correctIndex: 2,
    explanation:
      "A placa oclusal protege dentes e articulação e pode reduzir sintomas, mas não 'cura' o bruxismo, cujo controle envolve também fatores como estresse e qualidade do sono; o manejo é multifatorial e conservador.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MATERIAIS DENTÁRIOS — ancorado em Anusavice (Phillips) e Craig
  // ══════════════════════════════════════════════════════════════════════════

  // ── CAP. 1 — PROPRIEDADES GERAIS DOS MATERIAIS ────────────────────────────

  {
    id: "mat-c01-01",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Básico",
    question: "O módulo de elasticidade (módulo de Young) de um material restaurador expressa qual propriedade?",
    options: [
      "ductilidade — capacidade de sofrer deformação permanente sem fraturar",
      "tenacidade — energia total absorvida até o momento da fratura",
      "rigidez — resistência do material à deformação elástica",
      "dureza — resistência da superfície à formação de riscos",
    ],
    correctIndex: 2,
    explanation:
      "O módulo de elasticidade é a razão entre tensão e deformação na fase elástica e mede a rigidez: quanto maior, mais o material resiste à deformação reversível. As demais alternativas descrevem ductilidade, tenacidade e dureza (Anusavice/Phillips).",
  },
  {
    id: "mat-c01-02",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Básico",
    question: "Os ensaios de Knoop e Vickers são empregados para avaliar qual propriedade dos materiais odontológicos?",
    options: [
      "a dureza, pela resistência da superfície à indentação",
      "a tenacidade, pela energia absorvida até a fratura",
      "a ductilidade, pela deformação plástica sob tração",
      "a fluência, pela deformação lenta sob carga constante",
    ],
    correctIndex: 0,
    explanation:
      "Knoop e Vickers são testes de microdureza por indentação, em que um penetrador piramidal de diamante deixa uma marca cuja dimensão indica a resistência da superfície à penetração (Phillips).",
  },
  {
    id: "mat-c01-03",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Básico",
    question: "É desejável que o coeficiente de expansão térmica de um material restaurador seja próximo ao do dente para:",
    options: [
      "aumentar a condutividade térmica para isolar a polpa de estímulos frios",
      "elevar a resistência à compressão frente aos esforços mastigatórios intensos",
      "permitir a liberação contínua de íons flúor para o esmalte ao redor",
      "reduzir a microinfiltração marginal, evitando fendas por contração e expansão desiguais",
    ],
    correctIndex: 3,
    explanation:
      "Quando o coeficiente de expansão térmica do material difere muito do dente, variações de temperatura na boca causam contração e expansão desiguais, abrindo fendas na margem (percolação) e favorecendo a microinfiltração (Phillips).",
  },
  {
    id: "mat-c01-04",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Intermediário",
    question: "Em uma curva tensão-deformação, o limite de escoamento corresponde a:",
    options: [
      "tensão máxima que o material suporta imediatamente antes de fraturar",
      "tensão a partir da qual se inicia a deformação permanente (plástica) do material",
      "deformação elástica que é totalmente recuperada após a remoção da carga",
      "razão entre tensão e deformação no trecho inicial e linear da curva",
    ],
    correctIndex: 1,
    explanation:
      "O limite de escoamento marca a transição entre deformação elástica (reversível) e plástica (permanente); acima dele o material não retorna à forma original. A tensão máxima é a resistência última, e a razão tensão/deformação é o módulo de elasticidade (Phillips).",
  },
  {
    id: "mat-c01-05",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Intermediário",
    question: "Os testes de citotoxicidade in vitro, etapa inicial da avaliação de biocompatibilidade, medem:",
    options: [
      "a resistência do material à degradação por enzimas presentes na saliva",
      "a quantidade de monômero residual liberada ao longo da polimerização",
      "o efeito tóxico do material ou de seus componentes sobre células em cultura",
      "a adesão de bactérias cariogênicas à superfície do material restaurador",
    ],
    correctIndex: 2,
    explanation:
      "Os testes de citotoxicidade em cultura celular são o primeiro nível da avaliação de biocompatibilidade, medindo efeitos tóxicos do material ou de seus componentes lixiviáveis sobre as células; depois vêm os testes em animais e os ensaios de uso (Phillips).",
  },
  {
    id: "mat-c01-06",
    subject: "Materiais Dentários",
    topic: "Propriedades Gerais dos Materiais",
    difficulty: "Avançado",
    question: "O comportamento viscoelástico de materiais como elastômeros de moldagem e amálgama manifesta-se por:",
    options: [
      "fluência e relaxamento de tensão dependentes do tempo e da temperatura",
      "fratura frágil imediata assim que a tensão ultrapassa o limite elástico",
      "aumento instantâneo e linear da deformação proporcional à carga aplicada",
      "recuperação elástica completa e imediata após a remoção da carga",
    ],
    correctIndex: 0,
    explanation:
      "Materiais viscoelásticos combinam comportamento elástico e viscoso, exibindo respostas dependentes do tempo, como fluência (deformação lenta sob carga constante) e relaxamento de tensão. O creep do amálgama, por exemplo, associa-se à fase gama-2 (Phillips).",
  },

  // ── CAP. 2 — MATERIAIS DE MOLDAGEM ────────────────────────────────────────

  {
    id: "mat-c02-01",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Básico",
    question: "O alginato, material de moldagem amplamente usado para modelos de estudo, é classificado como:",
    options: [
      "hidrocoloide reversível",
      "hidrocoloide irreversível",
      "elastômero de polimerização",
      "material termoplástico rígido",
    ],
    correctIndex: 1,
    explanation:
      "O alginato é um hidrocoloide irreversível: a presa ocorre por reação química irreversível entre o alginato de sódio/potássio e o sulfato de cálcio. O ágar é o hidrocoloide reversível, que alterna gel-sol pela temperatura (Phillips).",
  },
  {
    id: "mat-c02-02",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Básico",
    question: "Por que o molde de alginato deve ser vazado em gesso o mais rápido possível após a moldagem?",
    options: [
      "porque endurece progressivamente e impede a remoção do modelo de gesso",
      "porque libera oxigênio que cria bolhas na superfície do gesso vazado",
      "porque reage quimicamente com o gesso, acelerando sua presa final",
      "porque sofre sinérese e embebição, perdendo a precisão dimensional com o tempo",
    ],
    correctIndex: 3,
    explanation:
      "Os hidrocoloides sofrem sinérese (exsudação de líquido, com contração) e embebição (absorção de água, com expansão), o que distorce o molde. Vazar imediatamente preserva a precisão dimensional (Phillips).",
  },
  {
    id: "mat-c02-03",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Intermediário",
    question: "Entre os materiais elastoméricos de moldagem, qual apresenta a melhor estabilidade dimensional e maior precisão?",
    options: [
      "silicone de adição (polivinilsiloxano)",
      "silicone de condensação",
      "polissulfeto (mercaptana)",
      "poliéter",
    ],
    correctIndex: 0,
    explanation:
      "O silicone de adição (polivinilsiloxano) é o elastômero mais estável dimensionalmente, com mínima contração e sem subprodutos voláteis, ao contrário do silicone de condensação, que libera álcool etílico. O poliéter é preciso, porém hidrofílico e sujeito a distorção em meio úmido (Phillips).",
  },
  {
    id: "mat-c02-04",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Intermediário",
    question: "Uma característica importante do silicone de adição (polivinilsiloxano) durante sua manipulação é que:",
    options: [
      "deve ser espatulado com água para iniciar a reação de geleificação",
      "libera etanol como subproduto, exigindo vazamento imediato do molde",
      "luvas de látex e seu enxofre podem inibir a reação de presa do material",
      "amolece com o calor e endurece ao ser resfriado na cavidade bucal",
    ],
    correctIndex: 2,
    explanation:
      "O enxofre de luvas de látex (e de alguns retratores) pode inibir a reação de adição catalisada por platina do polivinilsiloxano, comprometendo a presa. A liberação de etanol ocorre no silicone de condensação, e o amolecimento térmico é dos materiais termoplásticos (Phillips).",
  },
  {
    id: "mat-c02-05",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Intermediário",
    question: "O poliéter é um material de moldagem conhecido por sua:",
    options: [
      "alta hidrofobicidade, exigindo total secagem do campo antes da moldagem",
      "boa hidrofilicidade, mas com tendência a absorver água e distorcer em meio úmido",
      "presa por evaporação de solvente, com grande contração no endurecimento",
      "natureza termoplástica, podendo ser reaproveitada após novo aquecimento",
    ],
    correctIndex: 1,
    explanation:
      "O poliéter é o mais hidrofílico dos elastômeros, capturando bem detalhes em campo levemente úmido; contudo absorve água e se distorce se ficar imerso em desinfetante ou em ambiente úmido por tempo prolongado, devendo ser vazado em poucas horas (Phillips).",
  },
  {
    id: "mat-c02-06",
    subject: "Materiais Dentários",
    topic: "Materiais de Moldagem",
    difficulty: "Avançado",
    question: "Qual diferença na reação de presa distingue o silicone de condensação do silicone de adição?",
    options: [
      "o de adição libera água como subproduto, ficando menos estável que o de condensação",
      "ambos liberam hidrogênio gasoso, exigindo espera de horas antes de vazar o gesso",
      "o de condensação dispensa catalisador, enquanto o de adição usa peróxido orgânico",
      "o de condensação libera etanol volátil, causando contração tardia, ausente no de adição",
    ],
    correctIndex: 3,
    explanation:
      "Na polimerização por condensação há liberação de subproduto volátil (etanol), cuja evaporação provoca contração progressiva — daí vazar logo. O silicone de adição não gera voláteis (pode liberar traços de hidrogênio, controlados por captadores), sendo bem mais estável (Phillips).",
  },

  // ── CAP. 3 — GESSO ODONTOLÓGICO ───────────────────────────────────────────

  {
    id: "mat-c03-01",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Básico",
    question: "Os produtos de gesso odontológico são obtidos a partir da calcinação de qual composto?",
    options: [
      "fosfato de cálcio, que se converte em hidroxiapatita ao ser aquecido",
      "carbonato de cálcio, que libera gás carbônico durante a queima",
      "óxido de cálcio, que se reidrata formando hidróxido de cálcio",
      "sulfato de cálcio di-hidratado, que perde água e se torna hemi-hidratado",
    ],
    correctIndex: 3,
    explanation:
      "O gesso parte do sulfato de cálcio di-hidratado (CaSO4·2H2O); a calcinação remove água formando o hemi-hidratado (CaSO4·½H2O). Ao ser manipulado com água, o hemi-hidratado volta a di-hidratado e endurece (Phillips).",
  },
  {
    id: "mat-c03-02",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Básico",
    question: "A diferença entre o gesso-pedra (tipos III/IV) e o gesso-paris comum (tipo II) está principalmente:",
    options: [
      "na composição química — um é sulfato e o outro, fosfato de cálcio hidratado",
      "na forma do hemi-hidrato — partículas α densas no gesso-pedra, β porosas no comum",
      "na cor do pó — o gesso-pedra é sempre branco e o comum, sempre rosado",
      "na presença de flúor — somente o gesso-pedra libera flúor para o modelo",
    ],
    correctIndex: 1,
    explanation:
      "Ambos são hemi-hidrato de sulfato de cálcio, mas diferem na forma cristalina: o α-hemi-hidrato (gesso-pedra) tem partículas densas e regulares, exige menos água e gera maior resistência; o β-hemi-hidrato (gesso comum) tem partículas porosas e irregulares, exigindo mais água (Phillips).",
  },
  {
    id: "mat-c03-03",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Básico",
    question: "Comparando os tipos de gesso, qual afirmação sobre a relação água/pó está correta?",
    options: [
      "o gesso comum tipo II usa menos água, sendo o mais resistente dos três",
      "todos os tipos usam a mesma relação água/pó, definida em norma",
      "o gesso-pedra tipo IV usa menos água por grama de pó, resultando em maior resistência",
      "quanto mais água adicionada, maior a resistência final do modelo",
    ],
    correctIndex: 2,
    explanation:
      "Quanto menor a relação água/pó, mais denso e resistente o gesso. O gesso-paris (tipo II) requer ~0,45–0,50 mL/g; o gesso-pedra (tipo III) ~0,28–0,30; o gesso-pedra de alta resistência (tipo IV) ~0,22–0,24. Mais água gera mais porosidade e menos resistência (Phillips).",
  },
  {
    id: "mat-c03-04",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Intermediário",
    question: "Sobre a expansão de presa do gesso, é correto afirmar que:",
    options: [
      "ocorre durante a cristalização e pode ser reduzida com aceleradores e ajuste da relação água/pó",
      "é sempre nula, pois o gesso é dimensionalmente estável durante a presa",
      "aumenta indefinidamente enquanto o modelo permanecer armazenado úmido",
      "é causada exclusivamente pela evaporação da água de manipulação",
    ],
    correctIndex: 0,
    explanation:
      "A expansão de presa decorre do crescimento e empuxo dos cristais de di-hidratado. Pode ser controlada por aceleradores/retardadores, espatulação e relação água/pó. Há ainda a expansão higroscópica (maior, quando a presa ocorre sob água), explorada em revestimentos (Phillips).",
  },
  {
    id: "mat-c03-05",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Intermediário",
    question: "Para controlar o tempo de presa do gesso, o operador pode lançar mão de aditivos. Qual associação está correta?",
    options: [
      "o cloreto de sódio sempre retarda a presa, independentemente da concentração",
      "aumentar a temperatura da água acima de 50 °C acelera fortemente a presa",
      "sulfato de potássio acelera a presa; o bórax (tetraborato de sódio) a retarda",
      "espatular por mais tempo e mais vigorosamente retarda a presa do gesso",
    ],
    correctIndex: 2,
    explanation:
      "O sulfato de potássio é acelerador clássico e o bórax, retardador. O NaCl acelera em baixas concentrações e retarda em altas (não é sempre). A espatulação mais intensa acelera (mais núcleos de cristalização), e a temperatura tem efeito complexo, invertendo-se perto de ~50 °C (Phillips).",
  },
  {
    id: "mat-c03-06",
    subject: "Materiais Dentários",
    topic: "Gesso Odontológico",
    difficulty: "Avançado",
    question: "Na escala de cinco tipos de gesso da norma, o que caracteriza o gesso tipo V em relação ao tipo IV?",
    options: [
      "maior expansão de presa, compensando a contração de ligas para fundição de troquéis",
      "menor resistência à compressão, sendo indicado apenas para modelos de estudo",
      "ausência de expansão de presa, garantindo total estabilidade dimensional",
      "composição à base de fosfato, dispensando o sulfato de cálcio",
    ],
    correctIndex: 0,
    explanation:
      "O gesso tipo V (alta resistência, alta expansão) tem expansão de presa maior que o tipo IV para compensar a contração de solidificação de algumas ligas metálicas, mantendo a precisão do troquel. Ambos são α-hemi-hidrato de alta resistência (Phillips).",
  },

  // ── CAP. 4 — CIMENTOS E PROTEÇÃO DO COMPLEXO DENTINO-PULPAR ────────────────

  {
    id: "mat-c04-01",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Básico",
    question: "Qual é a principal função de um material forrador (liner) sob uma restauração?",
    options: [
      "substituir a dentina perdida e suportar diretamente as forças mastigatórias",
      "promover a adesão micromecânica permanente da restauração ao esmalte",
      "proteger o complexo dentino-pulpar e estimular respostas pulpares favoráveis",
      "liberar pigmentos que melhoram a estética final da restauração",
    ],
    correctIndex: 2,
    explanation:
      "Forradores (ex.: hidróxido de cálcio, ionômero de vidro em fina camada) protegem a polpa de agressões térmicas e químicas e, no caso do hidróxido de cálcio, estimulam dentina reparadora. As bases, em camadas mais espessas, é que dão suporte mecânico (Phillips).",
  },
  {
    id: "mat-c04-02",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Básico",
    question: "O cimento de hidróxido de cálcio é indicado em proteção pulpar principalmente por sua capacidade de:",
    options: [
      "liberar flúor em longo prazo e prevenir cárie secundária na margem",
      "adquirir alta resistência à compressão, suportando o esforço mastigatório",
      "aderir quimicamente ao esmalte e à dentina sem necessidade de adesivo",
      "estimular a formação de dentina reparadora devido ao seu pH alcalino",
    ],
    correctIndex: 3,
    explanation:
      "O hidróxido de cálcio tem pH muito alcalino (~12), com ação antibacteriana e estímulo à neoformação de dentina (dentina reparadora) quando próximo à polpa. Sua resistência mecânica é baixa, por isso é usado em fina camada (Phillips).",
  },
  {
    id: "mat-c04-03",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Intermediário",
    question: "Entre as vantagens do cimento de ionômero de vidro convencional está:",
    options: [
      "a altíssima resistência à fratura, equiparável à das resinas compostas",
      "a adesão química à estrutura dental e a liberação de flúor ao longo do tempo",
      "a estética superior, com translucidez idêntica à do esmalte natural",
      "a presa exclusivamente fotoativada, dispensando a reação ácido-base",
    ],
    correctIndex: 1,
    explanation:
      "O ionômero de vidro adere quimicamente ao esmalte e à dentina (quelação do cálcio pelos grupos carboxílicos) e libera flúor (efeito anticariogênico), com coeficiente de expansão próximo ao dente. Sua resistência e estética são inferiores às das resinas, e o convencional tem presa ácido-base (Phillips).",
  },
  {
    id: "mat-c04-04",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Intermediário",
    question: "Ao manipular o cimento de fosfato de zinco, espatula-se o pó em incrementos sobre uma placa de vidro resfriada para:",
    options: [
      "dissipar o calor da reação exotérmica e prolongar o tempo de trabalho",
      "acelerar a reação de presa e reduzir o tempo total de cimentação",
      "aumentar a liberação de flúor pelo cimento já endurecido",
      "elevar a acidez inicial e melhorar a adesão química à dentina",
    ],
    correctIndex: 0,
    explanation:
      "A reação do fosfato de zinco (ácido fosfórico + óxido de zinco) é exotérmica; a placa fria e a incorporação lenta do pó dissipam o calor, controlam a acidez e prolongam o tempo de trabalho. O fosfato de zinco não libera flúor nem adere quimicamente, retendo-se por embricamento mecânico (Phillips).",
  },
  {
    id: "mat-c04-05",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Intermediário",
    question: "O cimento de óxido de zinco e eugenol (ZOE) é classicamente descrito como tendo efeito:",
    options: [
      "altamente irritante à polpa, sendo contraindicado em dentina profunda",
      "adesivo químico ao esmalte, dispensando preparo retentivo da cavidade",
      "estético translúcido, indicado para restaurações anteriores definitivas",
      "sedativo/obtundente sobre a polpa, porém com baixa resistência mecânica",
    ],
    correctIndex: 3,
    explanation:
      "O eugenol tem efeito sedativo/obtundente sobre a polpa, tornando o ZOE útil em restaurações provisórias e proteção pulpar. Tem baixa resistência, e o eugenol pode inibir a polimerização de resinas — por isso não se usa ZOE sob restaurações resinosas (Phillips).",
  },
  {
    id: "mat-c04-06",
    subject: "Materiais Dentários",
    topic: "Cimentos e Proteção Pulpar",
    difficulty: "Avançado",
    question: "Por que não se deve usar cimento ou forrador à base de eugenol sob restaurações de resina composta?",
    options: [
      "porque o eugenol acelera demais a presa, fraturando a resina por contração",
      "porque o eugenol residual inibe a polimerização dos monômeros da resina",
      "porque o eugenol dissolve a carga inorgânica da resina composta",
      "porque o eugenol aumenta excessivamente a adesão, dificultando a remoção",
    ],
    correctIndex: 1,
    explanation:
      "O eugenol é um fenol que inibe a polimerização radicalar dos metacrilatos, comprometendo a presa e as propriedades da resina e do adesivo. Quando se prevê restauração resinosa, preferem-se forradores sem eugenol, como hidróxido de cálcio ou ionômero de vidro (Phillips).",
  },

  // ── CAP. 5 — ADESÃO E SISTEMAS ADESIVOS ───────────────────────────────────

  {
    id: "mat-c05-01",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Básico",
    question: "O condicionamento do esmalte com ácido fosfórico a 37% tem como objetivo:",
    options: [
      "criar microporosidades que permitem o embricamento mecânico da resina",
      "remover totalmente o esmalte aprismático da superfície do dente",
      "neutralizar o pH da cavidade antes da inserção da resina",
      "promover a liberação de flúor pelo esmalte condicionado",
    ],
    correctIndex: 0,
    explanation:
      "O ácido fosfórico (~37%, 15–30 s no esmalte) dissolve seletivamente os prismas, criando microrretenções nas quais a resina fluida penetra e polimeriza (tags resinosas), gerando a adesão micromecânica descrita por Buonocore (Phillips).",
  },
  {
    id: "mat-c05-02",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Básico",
    question: "Após o preparo cavitário com instrumentos rotatórios, forma-se sobre a dentina uma camada de detritos chamada:",
    options: [
      "camada híbrida",
      "película adquirida",
      "smear layer (camada de esfregaço)",
      "camada inibida por oxigênio",
    ],
    correctIndex: 2,
    explanation:
      "A smear layer é uma camada de detritos (colágeno, hidroxiapatita, bactérias) que recobre e oblitera os túbulos após o corte. Sistemas convencionais a removem com ácido; os autocondicionantes a incorporam. A camada híbrida é a zona de interdifusão resina-dentina (Phillips).",
  },
  {
    id: "mat-c05-03",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Intermediário",
    question: "A camada híbrida, fundamental para a adesão à dentina, é formada por:",
    options: [
      "deposição de hidroxiapatita nova sobre a superfície dentinária condicionada",
      "precipitação de íons cálcio e fosfato vindos do adesivo sobre a dentina",
      "fusão térmica da resina com os túbulos dentinários durante a fotoativação",
      "infiltração e polimerização de monômeros na malha de colágeno desmineralizada",
    ],
    correctIndex: 3,
    explanation:
      "Descrita por Nakabayashi, a camada híbrida resulta da desmineralização da dentina (expondo a rede de colágeno) e da infiltração de monômeros que polimerizam envolvendo as fibrilas, formando uma zona resina-colágeno que sela e retém a restauração (Phillips).",
  },
  {
    id: "mat-c05-04",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Intermediário",
    question: "Qual a diferença essencial entre os sistemas adesivos de condicionamento total (etch-and-rinse) e os autocondicionantes (self-etch)?",
    options: [
      "o etch-and-rinse dispensa o ácido fosfórico, condicionando apenas com primer",
      "o autocondicionante usa monômeros ácidos que desmineralizam e infiltram a dentina sem lavagem",
      "o autocondicionante não infiltra a dentina, aderindo só por adesão química",
      "o etch-and-rinse não forma camada híbrida, ao contrário do autocondicionante",
    ],
    correctIndex: 1,
    explanation:
      "Nos etch-and-rinse o ácido fosfórico é aplicado e lavado em etapa separada; nos autocondicionantes, monômeros ácidos (ex.: 10-MDP) condicionam e infiltram simultaneamente, sem lavagem, incorporando a smear layer. Ambos formam camada híbrida (Phillips).",
  },
  {
    id: "mat-c05-05",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Intermediário",
    question: "Na técnica de adesão úmida (wet bonding) com adesivos à base de acetona/álcool, a dentina deve permanecer levemente úmida porque:",
    options: [
      "a água mantém a rede de colágeno expandida, permitindo a infiltração do adesivo",
      "a água dilui o ácido residual e neutraliza o pH da superfície dentinária",
      "a umidade acelera a evaporação do solvente e a presa do adesivo",
      "a água aumenta a energia de superfície e a molhabilidade do esmalte",
    ],
    correctIndex: 0,
    explanation:
      "Após o condicionamento, secar demais a dentina colaba a rede de colágeno desmineralizada e impede a entrada do adesivo, criando áreas não infiltradas. Mantendo-a úmida, o colágeno fica expandido e o solvente do adesivo desloca a água, permitindo boa hibridização (Phillips).",
  },
  {
    id: "mat-c05-06",
    subject: "Materiais Dentários",
    topic: "Adesão e Sistemas Adesivos",
    difficulty: "Avançado",
    question: "Um fator associado à degradação da interface adesiva dentinária ao longo do tempo é:",
    options: [
      "o aumento progressivo do grau de conversão do adesivo após meses em função",
      "a contínua remineralização da camada híbrida, que a torna mais rígida e frágil",
      "a hidrólise do colágeno exposto e não infiltrado, mediada por metaloproteinases (MMPs)",
      "a liberação de flúor pelo adesivo, que dissolve lentamente a hidroxiapatita",
    ],
    correctIndex: 2,
    explanation:
      "O colágeno desmineralizado, mas não totalmente infiltrado pela resina, fica vulnerável à degradação hidrolítica e enzimática por MMPs e cisteíno-catepsinas da própria dentina, levando à nanoinfiltração e à perda de adesão. Inibidores de MMP (ex.: clorexidina) são estudados para preservar a interface (Phillips).",
  },

  // ── CAP. 6 — RESINAS COMPOSTAS ────────────────────────────────────────────

  {
    id: "mat-c06-01",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Básico",
    question: "Uma resina composta odontológica é constituída basicamente por:",
    options: [
      "matriz de sulfato de cálcio, água e acelerador de presa",
      "óxido de zinco, eugenol e partículas de prata",
      "monômero de metilmetacrilato puro, sem qualquer carga",
      "matriz orgânica resinosa, partículas de carga inorgânica e agente de união (silano)",
    ],
    correctIndex: 3,
    explanation:
      "A resina composta tem três fases: matriz orgânica (monômeros como Bis-GMA, UDMA, TEGDMA), carga inorgânica (sílica, vidros) e o agente de acoplamento silano, que une a carga à matriz. Pigmentos e iniciadores completam a formulação (Phillips).",
  },
  {
    id: "mat-c06-02",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Básico",
    question: "O monômero base de muitas resinas compostas, desenvolvido por Bowen, é o:",
    options: [
      "Bis-GMA (bisfenol A glicidil metacrilato)",
      "PMMA (polimetilmetacrilato)",
      "HEMA (hidroxietilmetacrilato)",
      "MDP (metacriloiloxidecil di-hidrogenofosfato)",
    ],
    correctIndex: 0,
    explanation:
      "Bowen desenvolveu o Bis-GMA, monômero de alto peso molecular que reduz a contração de polimerização frente ao metilmetacrilato. Por ser muito viscoso, é diluído com monômeros como o TEGDMA. O PMMA é polímero de base de prótese; HEMA e MDP são usados em adesivos (Phillips).",
  },
  {
    id: "mat-c06-03",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Básico",
    question: "A polimerização das resinas compostas fotoativadas é iniciada por um fotoiniciador que absorve luz azul. Esse fotoiniciador é a:",
    options: [
      "hidroquinona, que absorve luz ultravioleta de cerca de 365 nm",
      "peróxido de benzoíla, ativado quimicamente por aminas terciárias",
      "canforoquinona, ativada por luz de comprimento de onda em torno de 468 nm",
      "sílica coloidal, que reflete a luz e dispersa o calor da fotoativação",
    ],
    correctIndex: 2,
    explanation:
      "A canforoquinona é o fotoiniciador mais comum, com pico de absorção na luz azul (~468 nm), por isso os fotopolimerizadores LED emitem nessa faixa; ela atua com uma co-amina. A hidroquinona é inibidor/estabilizante, e o peróxido de benzoíla inicia resinas quimicamente ativadas (Phillips).",
  },
  {
    id: "mat-c06-04",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Intermediário",
    question: "A contração de polimerização das resinas compostas é clinicamente relevante porque:",
    options: [
      "aumenta o volume do material, fraturando as paredes da cavidade",
      "gera tensões na interface adesiva que podem causar fendas e microinfiltração",
      "eleva a temperatura pulpar a níveis irreversíveis durante a presa",
      "reduz a dureza superficial, tornando a restauração mais suscetível a manchas",
    ],
    correctIndex: 1,
    explanation:
      "Ao polimerizar, a resina contrai (cerca de 2–3% em volume), criando tensões na interface dente-restauração. Quando superam a força de adesão, surgem fendas marginais, sensibilidade e microinfiltração. Técnica incremental e fator C favorável ajudam a controlar (Phillips).",
  },
  {
    id: "mat-c06-05",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Intermediário",
    question: "Na classificação das resinas compostas pelo tamanho das partículas de carga, as que melhor combinam resistência e polimento hoje são as:",
    options: [
      "de macropartículas (convencionais)",
      "de micropartículas puras",
      "sem carga (resinas fluidas não preenchidas)",
      "nanoparticuladas e nano-híbridas",
    ],
    correctIndex: 3,
    explanation:
      "As resinas de macropartículas resistiam bem, mas tinham polimento ruim; as microparticuladas polem bem, porém eram mais frágeis. As nanoparticuladas e nano-híbridas combinam boa resistência e excelente lisura de superfície, sendo as de uso universal atual (Phillips).",
  },
  {
    id: "mat-c06-06",
    subject: "Materiais Dentários",
    topic: "Resinas Compostas",
    difficulty: "Avançado",
    question: "O fator C (fator de configuração cavitária) relaciona-se ao estresse de contração da resina porque:",
    options: [
      "quanto maior o número de superfícies livres, maior a contração total do material",
      "quanto maior a razão entre superfícies aderidas e livres, maior o estresse acumulado",
      "ele determina a profundidade máxima de polimerização da luz no incremento",
      "ele expressa a quantidade de calor liberada por cada incremento de resina",
    ],
    correctIndex: 1,
    explanation:
      "O fator C é a razão entre superfícies aderidas e superfícies livres de um incremento. Quanto maior o fator C, menos a resina escoa das superfícies livres para aliviar a contração, acumulando estresse na interface — daí o uso de incrementos pequenos em cavidades de fator C alto (Phillips).",
  },

  // ── CAP. 7 — AMÁLGAMA DENTAL ──────────────────────────────────────────────

  {
    id: "mat-c07-01",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Básico",
    question: "A liga para amálgama dental convencional é composta predominantemente por:",
    options: [
      "ouro e platina, com pequena fração de paládio",
      "prata e estanho, com menores quantidades de cobre e zinco",
      "níquel e cromo, com adição de berílio",
      "cobalto e cromo, com traços de molibdênio",
    ],
    correctIndex: 1,
    explanation:
      "A liga de amálgama é à base de prata e estanho (fase gama, Ag3Sn), com cobre e às vezes zinco; triturada com mercúrio, forma o amálgama. Ni-Cr e Co-Cr são ligas para estruturas de PPR, e Au-Pt, para fundições nobres (Phillips).",
  },
  {
    id: "mat-c07-02",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Básico",
    question: "No amálgama dental, qual é a função do mercúrio?",
    options: [
      "atuar apenas como lubrificante, evaporando completamente após a trituração",
      "liberar flúor de forma contínua, prevenindo cárie ao redor da restauração",
      "reagir com a liga de prata-estanho, formando uma massa plástica que endurece",
      "conferir cor metálica, sem participar de qualquer reação química",
    ],
    correctIndex: 2,
    explanation:
      "O mercúrio molha as partículas da liga e reage com elas (amalgamação), formando as fases gama-1 (Ag2Hg3) e gama-2 (Sn-Hg, nos convencionais), resultando numa massa que pode ser condensada e endurece. O mercúrio é parte integrante da estrutura final (Phillips).",
  },
  {
    id: "mat-c07-03",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Básico",
    question: "Os amálgamas de alto teor de cobre são considerados superiores aos convencionais porque:",
    options: [
      "eliminam ou reduzem a fase gama-2, melhorando a resistência à corrosão e ao creep",
      "contêm o dobro de mercúrio, tornando a massa mais fácil de condensar",
      "liberam flúor, conferindo ação anticariogênica às margens da restauração",
      "dispensam a trituração, sendo aplicados diretamente na forma de pó",
    ],
    correctIndex: 0,
    explanation:
      "A fase gama-2 (Sn-Hg) é a mais fraca, mais corroível e responsável pelo creep e pela degradação marginal. Nos amálgamas de alto cobre, o cobre reage com o estanho (formando Cu6Sn5) e elimina a gama-2, aumentando resistência, integridade marginal e durabilidade (Phillips).",
  },
  {
    id: "mat-c07-04",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Intermediário",
    question: "O creep (escoamento) do amálgama convencional é indesejável porque:",
    options: [
      "provoca a expansão imediata do amálgama logo após a condensação",
      "reduz o tempo de presa, dificultando a escultura da restauração",
      "aumenta a liberação de mercúrio para os tecidos moles adjacentes",
      "leva à protrusão e à fratura das margens da restauração ao longo do tempo",
    ],
    correctIndex: 3,
    explanation:
      "O creep é a deformação plástica lenta sob carga mastigatória repetida; associa-se à fase gama-2 e provoca extrusão das margens, que ficam sem suporte e fraturam (degradação marginal). Amálgamas de alto cobre têm creep muito menor (Phillips).",
  },
  {
    id: "mat-c07-05",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Intermediário",
    question: "A expansão tardia do amálgama, que pode causar dor e deslocamento da restauração, está associada a:",
    options: [
      "trituração excessiva, que aquece e expande o mercúrio residual",
      "uso de liga isenta de zinco em ambiente totalmente seco",
      "contaminação por umidade de amálgamas que contêm zinco durante a condensação",
      "condensação tardia, após o início completo da presa do material",
    ],
    correctIndex: 2,
    explanation:
      "Em amálgamas que contêm zinco, a contaminação por umidade (saliva/sangue) durante a inserção faz o zinco reagir com a água e liberar hidrogênio, gerando expansão tardia (dias a semanas), pressão pulpar e dor — por isso o isolamento absoluto é importante (Phillips).",
  },
  {
    id: "mat-c07-06",
    subject: "Materiais Dentários",
    topic: "Amálgama Dental",
    difficulty: "Avançado",
    question: "Por que o excesso de mercúrio residual no amálgama condensado compromete suas propriedades?",
    options: [
      "porque aumenta a proporção das fases ricas em mercúrio (gama-1 e gama-2), reduzindo a resistência",
      "porque acelera demais a presa, impedindo a escultura adequada da restauração",
      "porque diminui a fase gama-2, deixando o material excessivamente rígido e frágil",
      "porque reage com o zinco, provocando contração acentuada do material",
    ],
    correctIndex: 0,
    explanation:
      "Quanto maior o mercúrio residual, maiores as frações das fases de reação (gama-1 e, nos convencionais, gama-2), mais fracas e corroíveis que as partículas de liga não reagidas — reduzindo resistência e durabilidade. Por isso se controla a relação mercúrio/liga e se condensa para expulsar o excesso (Phillips).",
  },

  // ── CAP. 8 — CERÂMICAS ODONTOLÓGICAS ──────────────────────────────────────

  {
    id: "mat-c08-01",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Básico",
    question: "As cerâmicas odontológicas são valorizadas na estética, mas apresentam como limitação mecânica importante:",
    options: [
      "a baixa resistência à compressão, deformando-se sob a mastigação",
      "a alta condutividade térmica, causando sensibilidade pulpar",
      "a fragilidade, com baixa resistência à tração e à propagação de trincas",
      "a tendência a corroer e liberar íons metálicos na saliva",
    ],
    correctIndex: 2,
    explanation:
      "As cerâmicas são fortes em compressão, mas frágeis: resistem mal à tração e a trincas, que se propagam a partir de defeitos de superfície. Daí a importância do glazeamento, do controle de defeitos e das cerâmicas reforçadas (Phillips).",
  },
  {
    id: "mat-c08-02",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Básico",
    question: "A cerâmica feldspática tradicional, usada em facetas e no recobrimento estético, caracteriza-se por:",
    options: [
      "resistência flexural altíssima (acima de 1000 MPa), dispensando infraestrutura",
      "excelente estética, porém baixa resistência flexural (em torno de 60–100 MPa)",
      "opacidade total, sendo indicada apenas para núcleos metálicos",
      "presa por reação ácido-base, semelhante à do ionômero de vidro",
    ],
    correctIndex: 1,
    explanation:
      "A cerâmica feldspática tem ótima translucidez e estética, mas resistência flexural baixa (~60–100 MPa), por isso costuma recobrir infraestruturas mais resistentes ou ser usada em facetas com suporte adesivo (Phillips).",
  },
  {
    id: "mat-c08-03",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Intermediário",
    question: "A cerâmica de dissilicato de lítio (ex.: IPS e.max) tornou-se popular para coroas monolíticas porque combina:",
    options: [
      "resistência flexural baixa, sendo indicada só para recobrimento estético",
      "opacidade elevada, exigindo sempre uma infraestrutura metálica de suporte",
      "liberação de flúor e adesão química direta ao esmalte e à dentina",
      "boa estética com resistência flexural intermediária (cerca de 360–400 MPa)",
    ],
    correctIndex: 3,
    explanation:
      "O dissilicato de lítio tem resistência flexural intermediária (~360–400 MPa), bem acima da feldspática, com boa translucidez — o que permite coroas monolíticas e facetas, com cimentação adesiva (condicionável com ácido fluorídrico + silano) (Phillips).",
  },
  {
    id: "mat-c08-04",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Intermediário",
    question: "A zircônia tetragonal estabilizada por ítria (Y-TZP) destaca-se entre as cerâmicas por sua:",
    options: [
      "elevada resistência flexural e tenacidade (~900–1200 MPa), com estética inferior à do dissilicato",
      "baixíssima resistência, restrita a restaurações provisórias de curta duração",
      "translucidez idêntica à do esmalte, sendo a mais estética das cerâmicas",
      "presa química por reação ácido-base, dispensando a sinterização",
    ],
    correctIndex: 0,
    explanation:
      "A Y-TZP é a cerâmica de maior resistência (~900–1200 MPa) e tenacidade, suportando próteses extensas; sua estética (mais opaca) é inferior à do dissilicato, embora versões translúcidas tenham reduzido essa diferença (Phillips).",
  },
  {
    id: "mat-c08-05",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Avançado",
    question: "O mecanismo de tenacificação por transformação (transformation toughening) que confere alta tenacidade à zircônia Y-TZP consiste em:",
    options: [
      "formação de uma camada vítrea superficial que sela completamente os defeitos",
      "transformação da fase tetragonal em monoclínica na ponta da trinca, com expansão que freia sua propagação",
      "alinhamento de fibras cerâmicas que absorvem a energia da trinca por tração",
      "liberação de íons que remineralizam e cicatrizam a trinca ao longo do tempo",
    ],
    correctIndex: 1,
    explanation:
      "Sob a tensão na ponta de uma trinca, os grãos tetragonais (metaestáveis) da Y-TZP transformam-se em monoclínicos, com aumento de volume (~3–5%); essa expansão gera tensões compressivas locais que dificultam a propagação da trinca, elevando muito a tenacidade (Phillips).",
  },
  {
    id: "mat-c08-06",
    subject: "Materiais Dentários",
    topic: "Cerâmicas Odontológicas",
    difficulty: "Avançado",
    question: "Diferentemente do dissilicato de lítio, a zircônia Y-TZP tradicional NÃO é eficazmente condicionada com ácido fluorídrico para cimentação adesiva porque:",
    options: [
      "é dissolvida completamente pelo ácido fluorídrico, perdendo a forma da coroa",
      "libera flúor que neutraliza o ácido antes de qualquer condicionamento",
      "possui fase vítrea tão espessa que o ácido não consegue penetrá-la",
      "não possui fase vítrea (sílica) significativa para ser atacada pelo ácido",
    ],
    correctIndex: 3,
    explanation:
      "O ácido fluorídrico condiciona cerâmicas vítreas (feldspática, dissilicato) atacando a matriz de sílica. A zircônia é policristalina, praticamente sem fase vítrea, então o HF não cria microrretenções; sua adesão depende de jateamento e de primers com monômero fosfatado (ex.: MDP) (Phillips).",
  },

  // ── CAP. 9 — LIGAS METÁLICAS E FUNDIÇÃO ────────────────────────────────────

  {
    id: "mat-c09-01",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Básico",
    question: "Na classificação das ligas para fundição odontológica, as ligas nobres caracterizam-se por:",
    options: [
      "alto conteúdo de metais nobres (ouro, platina, paládio), com boa resistência à corrosão",
      "ausência total de ouro, sendo compostas apenas de níquel e cromo",
      "baixo custo e alta dureza, indicadas apenas para grampos de PPR",
      "presa química por reação ácido-base, dispensando a fundição",
    ],
    correctIndex: 0,
    explanation:
      "Ligas nobres contêm proporções significativas de metais nobres (ouro, platina, paládio), resistentes à corrosão e ao deslustre; as ligas básicas (Ni-Cr, Co-Cr) são mais duras, rígidas e baratas, porém mais difíceis de fundir e o níquel pode causar alergia (Phillips).",
  },
  {
    id: "mat-c09-02",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Básico",
    question: "A confecção de uma peça metálica fundida em odontologia baseia-se na técnica:",
    options: [
      "da prensagem a frio, em que o pó metálico é compactado em molde de gesso",
      "da eletrodeposição, em que o metal é depositado por corrente sobre o modelo",
      "da sinterização direta da liga em forno, sem necessidade de molde",
      "da cera perdida, em que um padrão de cera é envolvido por revestimento e substituído pelo metal",
    ],
    correctIndex: 3,
    explanation:
      "Na técnica da cera perdida, o padrão de cera é incluído em revestimento, depois eliminado por calor (deixando um molde oco), e o metal fundido preenche o espaço por força centrífuga ou a vácuo/pressão. É a base das fundições odontológicas (Phillips).",
  },
  {
    id: "mat-c09-03",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Intermediário",
    question: "Os revestimentos de fundição precisam expandir durante o processo para:",
    options: [
      "reduzir a temperatura de fusão da liga e economizar energia no forno",
      "compensar a contração de solidificação da liga e manter a precisão da peça",
      "aumentar a porosidade da peça final, deixando-a mais leve",
      "facilitar a remoção da cera por dissolução em água quente",
    ],
    correctIndex: 1,
    explanation:
      "A liga contrai ao solidificar; para que a peça fundida tenha as dimensões corretas, o molde (revestimento) deve expandir uma quantidade equivalente (expansão térmica + de presa + higroscópica), compensando essa contração (Phillips).",
  },
  {
    id: "mat-c09-04",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Intermediário",
    question: "Para a fundição de ligas de alta temperatura de fusão (como as de metalocerâmica), prefere-se revestimento:",
    options: [
      "aglutinado por gesso, por suportar temperaturas acima de 1200 °C",
      "à base de alginato, por sua estabilidade térmica em altas temperaturas",
      "aglutinado por fosfato, que resiste a temperaturas mais altas que o aglutinado por gesso",
      "à base de silicato de etila, usado exclusivamente para ligas nobres de ouro",
    ],
    correctIndex: 2,
    explanation:
      "Revestimentos aglutinados por gesso degradam-se acima de ~700 °C, servindo para ligas nobres de baixa fusão; para ligas básicas e de metalocerâmica (alta fusão), usam-se revestimentos aglutinados por fosfato (ou silicato), mais refratários (Phillips).",
  },
  {
    id: "mat-c09-05",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Avançado",
    question: "A presença de porosidades por contração (rechupe) numa peça fundida está frequentemente associada a:",
    options: [
      "solidificação inadequada por canal de alimentação (sprue) mal posicionado ou fino demais",
      "temperatura do metal muito baixa, abaixo do ponto de fusão da liga",
      "expansão excessiva do revestimento durante o aquecimento do molde",
      "uso de força centrífuga, que sempre introduz bolhas de ar na peça",
    ],
    correctIndex: 0,
    explanation:
      "A porosidade de contração (rechupe) ocorre quando uma região solidifica isolada da reserva de metal líquido, faltando metal para compensar a contração. Canal de alimentação adequado, com reservatório, e posicionamento correto reduzem o defeito (Phillips).",
  },
  {
    id: "mat-c09-06",
    subject: "Materiais Dentários",
    topic: "Ligas Metálicas e Fundição",
    difficulty: "Avançado",
    question: "Para que a porcelana se una adequadamente à infraestrutura metálica em uma coroa metalocerâmica, é essencial que:",
    options: [
      "a liga tenha coeficiente de expansão térmica muito maior que o da cerâmica",
      "a cerâmica seja aplicada antes de qualquer tratamento da superfície metálica",
      "a liga forme uma camada de óxidos na superfície, que se liga quimicamente à cerâmica",
      "o metal seja totalmente isento de óxidos para não contaminar a cerâmica",
    ],
    correctIndex: 2,
    explanation:
      "A união metal-cerâmica depende de uma fina camada de óxidos na superfície da liga (formada na degaseificação/oxidação), que estabelece ligação química com a cerâmica, somada à união mecânica. Além disso, os coeficientes de expansão térmica devem ser compatíveis (o do metal levemente maior) para evitar trincas (Phillips).",
  },

  // ── CAP. 10 — RESINAS ACRÍLICAS PARA BASE DE PRÓTESE ──────────────────────

  {
    id: "mat-c10-01",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Básico",
    question: "O material mais utilizado para a confecção de bases de próteses totais é:",
    options: [
      "o silicone de adição de alta dureza",
      "a resina acrílica de polimetilmetacrilato (PMMA)",
      "o cimento de ionômero de vidro modificado",
      "a cerâmica feldspática de baixa fusão",
    ],
    correctIndex: 1,
    explanation:
      "As bases de prótese são feitas predominantemente de resina acrílica à base de PMMA, por sua estética, facilidade de processamento e de reparo e baixo custo, apesar de propriedades mecânicas modestas (Phillips).",
  },
  {
    id: "mat-c10-02",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Básico",
    question: "A resina acrílica termopolimerizável é apresentada como pó e líquido. O que são esses componentes?",
    options: [
      "o pó é polímero (PMMA) com iniciador; o líquido é o monômero (metilmetacrilato) com inibidor",
      "o pó é gesso e o líquido é água destilada com acelerador de presa",
      "o pó é carga cerâmica e o líquido é ácido fosfórico diluído",
      "o pó é mercúrio em flocos e o líquido é a liga de prata-estanho",
    ],
    correctIndex: 0,
    explanation:
      "O pó é constituído por pérolas de PMMA pré-polimerizado com peróxido de benzoíla (iniciador) e pigmentos; o líquido é o monômero metilmetacrilato com inibidor (hidroquinona) e, às vezes, agente de ligação cruzada. Ao misturar, o monômero plastifica o polímero e polimeriza (Phillips).",
  },
  {
    id: "mat-c10-03",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Intermediário",
    question: "A porosidade gasosa na resina acrílica termopolimerizada ocorre principalmente quando:",
    options: [
      "a proporção pó/líquido tem excesso de pó, deixando a massa muito seca",
      "a prensagem é feita com pressão excessiva sobre a mufla fechada",
      "a resina é polimerizada em temperatura ambiente por tempo prolongado",
      "o aquecimento é muito rápido e o monômero ferve antes de polimerizar",
    ],
    correctIndex: 3,
    explanation:
      "A porosidade gasosa surge quando a temperatura interna ultrapassa o ponto de ebulição do metilmetacrilato (~100,8 °C) antes de a massa polimerizar, formando bolhas — por isso o ciclo de polimerização deve ser controlado e lento. Falta de pressão ou de monômero gera outro tipo de porosidade, por contração (Phillips).",
  },
  {
    id: "mat-c10-04",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Intermediário",
    question: "O monômero residual (metilmetacrilato não reagido) em uma base de prótese é clinicamente relevante porque:",
    options: [
      "aumenta indefinidamente a resistência mecânica da base ao longo do uso",
      "confere à prótese liberação contínua e benéfica de flúor à mucosa",
      "pode atuar como irritante/alérgeno dos tecidos bucais, sobretudo em resinas mal polimerizadas",
      "garante a estabilidade de cor da resina por décadas de uso clínico",
    ],
    correctIndex: 2,
    explanation:
      "O monômero residual é mais alto em resinas autopolimerizáveis e em ciclos inadequados; pode irritar a mucosa e causar reações alérgicas (estomatite de contato). Um ciclo de polimerização adequado e/ou imersão em água reduzem o teor de monômero livre (Phillips).",
  },
  {
    id: "mat-c10-05",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Intermediário",
    question: "Comparada à resina acrílica termopolimerizável, a resina autopolimerizável (quimicamente ativada) geralmente apresenta:",
    options: [
      "menor teor de monômero residual e cor muito mais estável",
      "maior teor de monômero residual e propriedades mecânicas um pouco inferiores",
      "polimerização iniciada por luz azul, dispensando ativador químico",
      "resistência mecânica muito superior, sendo a escolha para bases definitivas",
    ],
    correctIndex: 1,
    explanation:
      "A resina autopolimerizável usa amina terciária para iniciar a presa à temperatura ambiente; tende a ter menor grau de conversão, mais monômero residual, menor estabilidade de cor e propriedades mecânicas levemente inferiores às da termopolimerizável, embora seja útil para reparos e reembasamentos (Phillips).",
  },
  {
    id: "mat-c10-06",
    subject: "Materiais Dentários",
    topic: "Resinas Acrílicas para Base de Prótese",
    difficulty: "Avançado",
    question: "A contração de polimerização da resina acrílica de base de prótese contribui para:",
    options: [
      "uma expansão da base que melhora progressivamente a retenção da prótese",
      "o aumento espontâneo da dureza superficial sem qualquer alteração de forma",
      "a liberação de calor suficiente para esterilizar a superfície interna da base",
      "pequenas alterações dimensionais que afetam a adaptação da base ao rebordo",
    ],
    correctIndex: 3,
    explanation:
      "O PMMA contrai ao polimerizar (a contração do monômero é atenuada pelo uso de polímero pré-formado no pó), gerando leve desadaptação da base; cuidados de prensagem, ciclo de polimerização e alívio de tensões pós-processamento minimizam o efeito sobre a adaptação ao rebordo (Phillips).",
  },

];

// ── Helpers ───────────────────────────────────────────────────────────────

export const QUESTION_COUNT = questions.length;

export const subjects: Subject[] = [
  "Implantodontia",
  "Prótese Parcial Fixa",
  "Prótese Total",
  "Prótese Parcial Removível",
  "Dentística",
  "Cirurgia Bucomaxilofacial",
  "Endodontia",
  "Periodontia",
  "Cariologia e Oclusão",
  "Farmacologia e Anestesiologia",
  "Materiais Dentários",
  "Histologia e Embriologia",
];

export const difficulties: Difficulty[] = ["Básico", "Intermediário", "Avançado"];

export function getTopics(subject: Subject): string[] {
  const topics = new Set(
    questions.filter((q) => q.subject === subject).map((q) => q.topic)
  );
  return Array.from(topics).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

// Omitting a filter key means "match all". Empty string is treated as omitted.
export function filterQuestions(opts: {
  subject?: Subject;
  topic?: string;
  difficulty?: Difficulty;
}): Question[] {
  return questions.filter((q) => {
    if (opts.subject && q.subject !== opts.subject) return false;
    if (opts.topic?.trim() && q.topic !== opts.topic) return false;
    if (opts.difficulty && q.difficulty !== opts.difficulty) return false;
    return true;
  });
}

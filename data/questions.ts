export type Difficulty = "Básico" | "Intermediário" | "Avançado";
export type Subject = "Implantodontia" | "Prótese Parcial Fixa" | "Prótese Total";

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
];

// ── Helpers ───────────────────────────────────────────────────────────────

export const subjects: Subject[] = [
  "Implantodontia",
  "Prótese Parcial Fixa",
  "Prótese Total",
];

export const difficulties: Difficulty[] = ["Básico", "Intermediário", "Avançado"];

export function getTopics(subject: Subject): string[] {
  const topics = new Set(
    questions.filter((q) => q.subject === subject).map((q) => q.topic)
  );
  return Array.from(topics).sort();
}

export function filterQuestions(opts: {
  subject?: Subject;
  topic?: string;
  difficulty?: Difficulty;
}): Question[] {
  return questions.filter((q) => {
    if (opts.subject && q.subject !== opts.subject) return false;
    if (opts.topic && q.topic !== opts.topic) return false;
    if (opts.difficulty && q.difficulty !== opts.difficulty) return false;
    return true;
  });
}

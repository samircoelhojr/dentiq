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

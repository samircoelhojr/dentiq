// Questões de Radiologia baseadas em imagens. Diferente de data/questions.ts
// (texto puro): cada questão mostra uma radiografia e o aluno escolhe a
// alternativa correta. Imagens em public/radiologia/ — créditos em
// public/radiologia/ATRIBUICOES.md e no campo `credit` de cada imagem.

export type RadioDifficulty = "Básico" | "Intermediário" | "Avançado";

export interface RadioImage {
  src: string;
  alt: string;
  credit: string;
}

export const radioImages = {
  "panoramica-normal": {
    src: "/radiologia/panoramica-normal.png",
    alt: "Radiografia panorâmica de dentição permanente completa",
    credit: "Roquex, CC0, via Wikimedia Commons",
  },
  "panoramica-adolescente": {
    src: "/radiologia/panoramica-adolescente.jpg",
    alt: "Radiografia panorâmica de adolescente com terceiros molares",
    credit: "Coronation Dental Specialty Group, CC BY 3.0, via Wikimedia Commons",
  },
  "periapical-abscesso-36": {
    src: "/radiologia/periapical-abscesso-36.jpg",
    alt: "Radiografia periapical de molares inferiores com setas indicando lesão periapical",
    credit: "Coronation Dental Specialty Group, CC BY-SA 3.0, via Wikimedia Commons",
  },
  "periapical-radiolucencia": {
    src: "/radiologia/periapical-radiolucencia.jpg",
    alt: "Radiografia periapical de dentes anteriores superiores com radiolucência periapical",
    credit: "Shaimaa Abdellatif, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "panoramica-impactacao-mesioangular": {
    src: "/radiologia/panoramica-impactacao-mesioangular.jpg",
    alt: "Radiografia panorâmica com terceiros molares inclusos em posição mesioangular",
    credit: "Challiyan, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "cisto-dentigero": {
    src: "/radiologia/cisto-dentigero.jpg",
    alt: "Radiografia panorâmica com dente incluso e radiolucência associada (cisto dentígero)",
    credit: "Pidalka44, Domínio público, via Wikimedia Commons",
  },
  "panoramica-denticao-mista": {
    src: "/radiologia/panoramica-canino-incluso.jpg",
    alt: "Radiografia panorâmica de criança em dentição mista",
    credit: "Challiyan, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "talon-cusp": {
    src: "/radiologia/talon-cusp.png",
    alt: "Radiografia periapical de incisivo com cúspide em garra",
    credit: "Matthew Ferguson 57, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "periapical-restauracao": {
    src: "/radiologia/periapical-perda-ossea.jpg",
    alt: "Radiografia periapical de molares inferiores com restauração metálica",
    credit: "Shaimaa Abdellatif, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "panoramica-restauracoes": {
    src: "/radiologia/panoramica-abscesso-molar.jpg",
    alt: "Radiografia panorâmica de adulto com múltiplas restaurações metálicas",
    credit: "O'Dea, CC BY-SA 3.0, via Wikimedia Commons",
  },
} satisfies Record<string, RadioImage>;

export type RadioImageKey = keyof typeof radioImages;

export interface RadioQuestion {
  id: string;
  image: RadioImageKey;
  topic: string;
  difficulty: RadioDifficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const radioQuestions: RadioQuestion[] = [
  // ── Anatomia Radiográfica (panorâmica) ──
  {
    id: "rad-01",
    image: "panoramica-normal",
    topic: "Anatomia Radiográfica",
    difficulty: "Básico",
    question:
      "Nesta radiografia panorâmica, as amplas áreas radiolúcidas acima das raízes dos dentes posteriores superiores correspondem a:",
    options: ["Fossas nasais", "Seios maxilares", "Cistos radiculares", "Forames mentuais"],
    correctIndex: 1,
    explanation:
      "Os seios maxilares são cavidades aéreas na maxila e aparecem como áreas radiolúcidas (escuras) acima dos ápices dos pré-molares e molares superiores. São referência anatômica normal e não devem ser confundidos com lesões.",
  },
  {
    id: "rad-02",
    image: "panoramica-normal",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question:
      "Que exame radiográfico é este, que mostra ambas as arcadas, seios maxilares e côndilos em uma única imagem?",
    options: [
      "Radiografia periapical",
      "Radiografia interproximal (bitewing)",
      "Radiografia panorâmica",
      "Radiografia oclusal",
    ],
    correctIndex: 2,
    explanation:
      "A radiografia panorâmica (ortopantomografia) registra em uma única imagem ambos os maxilares, dentes, seios maxilares, côndilos e ramos mandibulares, sendo ideal para uma visão geral.",
  },
  {
    id: "rad-03",
    image: "panoramica-normal",
    topic: "Anatomia Radiográfica",
    difficulty: "Intermediário",
    question:
      "As estruturas radiopacas arredondadas nas extremidades superiores direita e esquerda da imagem, que se articulam com a base do crânio, são:",
    options: ["Processos coronoides", "Côndilos mandibulares", "Tuberosidades maxilares", "Espinhas nasais"],
    correctIndex: 1,
    explanation:
      "Os côndilos da mandíbula aparecem nas extremidades superiores da panorâmica e articulam-se com a fossa mandibular do osso temporal, formando a articulação temporomandibular (ATM).",
  },
  {
    id: "rad-04",
    image: "panoramica-normal",
    topic: "Anatomia Radiográfica",
    difficulty: "Básico",
    question:
      "A estrutura radiopaca vertical na linha média da maxila, separando as duas fossas nasais, é o(a):",
    options: ["Septo nasal", "Canal incisivo", "Sutura palatina mediana", "Espinha nasal anterior"],
    correctIndex: 0,
    explanation:
      "O septo nasal é a parede mediana que divide a cavidade nasal; na panorâmica aparece como uma linha radiopaca vertical na linha média, acima dos incisivos superiores.",
  },
  {
    id: "rad-05",
    image: "panoramica-normal",
    topic: "Anatomia Radiográfica",
    difficulty: "Intermediário",
    question: "O canal mandibular, referência essencial para cirurgia e implantes, aparece na panorâmica como:",
    options: [
      "Faixa radiolúcida linear delimitada por finas linhas radiopacas no corpo da mandíbula",
      "Área radiopaca homogênea no ramo",
      "Espaço radiolúcido ao redor das coroas",
      "Linha radiopaca contínua no rebordo alveolar",
    ],
    correctIndex: 0,
    explanation:
      "O canal mandibular aloja o feixe vásculo-nervoso alveolar inferior e é visto como uma faixa radiolúcida (escura) limitada por duas linhas corticais radiopacas, percorrendo o corpo da mandíbula até o forame mentual.",
  },
  {
    id: "rad-06",
    image: "panoramica-normal",
    topic: "Anatomia Radiográfica",
    difficulty: "Intermediário",
    question:
      "Em uma panorâmica de adulto jovem com dentição completa, os dentes mais posteriores de cada quadrante, últimos a irromper, são os:",
    options: ["Primeiros molares", "Segundos pré-molares", "Terceiros molares", "Caninos"],
    correctIndex: 2,
    explanation:
      "Os terceiros molares (sisos) são os dentes mais posteriores de cada quadrante e os últimos a irromper, normalmente entre os 17 e 21 anos.",
  },
  // ── Dentes Inclusos ──
  {
    id: "rad-07",
    image: "panoramica-adolescente",
    topic: "Dentes Inclusos",
    difficulty: "Básico",
    question: "Os dentes mais posteriores desta panorâmica, ainda não irrompidos atrás dos segundos molares, são os:",
    options: ["Caninos", "Terceiros molares (sisos)", "Primeiros pré-molares", "Incisivos laterais"],
    correctIndex: 1,
    explanation:
      "São os terceiros molares. Quando não atingem o plano oclusal por falta de espaço ou posição desfavorável, são considerados inclusos (impactados).",
  },
  {
    id: "rad-08",
    image: "panoramica-adolescente",
    topic: "Dentes Inclusos",
    difficulty: "Intermediário",
    question:
      "Dentes que não irromperam para o plano oclusal na época esperada, permanecendo retidos no osso, são chamados de:",
    options: ["Supranumerários", "Decíduos", "Inclusos (impactados)", "Anquilosados"],
    correctIndex: 2,
    explanation:
      "Dente incluso (ou impactado) é aquele que não irrompeu na época normal e permanece total ou parcialmente retido no osso. Os terceiros molares são os mais frequentemente acometidos.",
  },
  {
    id: "rad-09",
    image: "panoramica-adolescente",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question: "Comparada à radiografia periapical, a principal vantagem da panorâmica é:",
    options: [
      "Maior detalhe de um único dente",
      "Visão ampla de ambos os maxilares e estruturas vizinhas em uma única imagem",
      "Detecção precisa de cárie interproximal incipiente",
      "Melhor avaliação do ligamento periodontal dente a dente",
    ],
    correctIndex: 1,
    explanation:
      "A panorâmica oferece visão ampla e geral, útil para terceiros molares, lesões extensas e avaliação dos maxilares. Já a periapical fornece mais detalhe de poucos dentes.",
  },
  // ── Lesões Periapicais ──
  {
    id: "rad-10",
    image: "periapical-abscesso-36",
    topic: "Lesões Periapicais",
    difficulty: "Intermediário",
    question: "As setas vermelhas apontam, junto aos ápices radiculares, uma área radiolúcida compatível com:",
    options: [
      "Forame mentual",
      "Seio maxilar normal",
      "Lesão periapical (rarefação óssea de origem endodôntica)",
      "Esmalte dentário",
    ],
    correctIndex: 2,
    explanation:
      "A radiolucência periapical indicada representa perda óssea (rarefação) ao redor do ápice, geralmente decorrente de necrose pulpar e infecção do canal radicular.",
  },
  {
    id: "rad-11",
    image: "periapical-abscesso-36",
    topic: "Lesões Periapicais",
    difficulty: "Avançado",
    question: "Uma radiolucência periapical associada a um dente com comprometimento pulpar pode corresponder a:",
    options: [
      "Granuloma, cisto radicular ou abscesso periapical",
      "Tumor maligno, sempre",
      "Estrutura anatômica normal",
      "Reabsorção fisiológica de dente decíduo",
    ],
    correctIndex: 0,
    explanation:
      "As lesões periapicais inflamatórias de origem endodôntica incluem granuloma, cisto radicular e abscesso. A diferenciação definitiva é histológica, mas o contexto clínico (dente sem vitalidade) orienta o diagnóstico.",
  },
  {
    id: "rad-12",
    image: "periapical-radiolucencia",
    topic: "Lesões Periapicais",
    difficulty: "Básico",
    question: "A imagem radiolúcida bem delimitada ao redor do ápice do dente anterior superior sugere:",
    options: ["Polpa normal", "Lesão periapical (rarefação óssea)", "Esmalte hígido", "Cemento radicular"],
    correctIndex: 1,
    explanation:
      "A área escura (radiolúcida) circunscrita ao ápice indica perda de osso por processo inflamatório periapical, tipicamente de origem endodôntica.",
  },
  {
    id: "rad-13",
    image: "periapical-radiolucencia",
    topic: "Lesões Periapicais",
    difficulty: "Intermediário",
    question: "Diante de uma radiolucência periapical, o exame que melhor confirma a origem endodôntica (necrose pulpar) é:",
    options: ["Teste de vitalidade pulpar", "Apenas a inspeção visual", "Fotografia intraoral", "Modelo de gesso"],
    correctIndex: 0,
    explanation:
      "A radiografia mostra a lesão, mas o teste de vitalidade (sensibilidade) pulpar é essencial para confirmar se a polpa está necrosada, indicando tratamento endodôntico.",
  },
  {
    id: "rad-14",
    image: "periapical-radiolucencia",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question: "Uma estrutura é descrita como 'radiolúcida' na radiografia quando aparece:",
    options: [
      "Mais escura, por ser menos densa aos raios X",
      "Mais clara/branca, por ser mais densa",
      "Sempre patológica",
      "Sempre localizada na mandíbula",
    ],
    correctIndex: 0,
    explanation:
      "Radiolúcido = escuro: tecidos menos densos (ar, lesões, polpa) absorvem menos raios X. Radiopaco = claro: estruturas densas (esmalte, osso, metal) absorvem mais.",
  },
  {
    id: "rad-15",
    image: "panoramica-impactacao-mesioangular",
    topic: "Dentes Inclusos",
    difficulty: "Básico",
    question:
      "Os terceiros molares inferiores têm a coroa inclinada em direção ao segundo molar. Pela classificação de Winter, essa posição é:",
    options: ["Distoangular", "Vertical", "Mesioangular", "Horizontal"],
    correctIndex: 2,
    explanation:
      "Na classificação de Winter (angulação do longo eixo), mesioangular significa coroa inclinada para mesial (em direção ao 2º molar) — a impactação mais comum dos sisos inferiores.",
  },
  {
    id: "rad-16",
    image: "panoramica-impactacao-mesioangular",
    topic: "Dentes Inclusos",
    difficulty: "Intermediário",
    question: "A impactação mesioangular de um terceiro molar é clinicamente relevante porque tende a favorecer:",
    options: [
      "Cárie e reabsorção na face distal do segundo molar",
      "Erupção espontânea em posição correta",
      "Fechamento do seio maxilar",
      "Anquilose do côndilo",
    ],
    correctIndex: 0,
    explanation:
      "A coroa do siso mesioangular pressiona e retém placa na distal do 2º molar, predispondo a cárie, reabsorção radicular e bolsa periodontal nessa região.",
  },
  {
    id: "rad-17",
    image: "panoramica-impactacao-mesioangular",
    topic: "Dentes Inclusos",
    difficulty: "Básico",
    question: "Quantos terceiros molares inclusos podem ser identificados nesta panorâmica?",
    options: ["Um", "Dois", "Quatro", "Nenhum"],
    correctIndex: 2,
    explanation:
      "Identificam-se os quatro terceiros molares (superiores e inferiores, direito e esquerdo) retidos, sem atingir o plano oclusal.",
  },
  // ── Cistos e Lesões Ósseas ──
  {
    id: "rad-18",
    image: "cisto-dentigero",
    topic: "Cistos e Lesões Ósseas",
    difficulty: "Intermediário",
    question:
      "A imagem radiolúcida bem delimitada associada à coroa de um dente incluso, deslocando-o, é característica de:",
    options: ["Granuloma periapical", "Cisto dentígero (folicular)", "Seio maxilar", "Forame mentual"],
    correctIndex: 1,
    explanation:
      "O cisto dentígero envolve a coroa de um dente não irrompido e pode deslocá-lo. Radiograficamente é uma radiolucência unilocular bem definida ao redor da coroa.",
  },
  {
    id: "rad-19",
    image: "cisto-dentigero",
    topic: "Cistos e Lesões Ósseas",
    difficulty: "Avançado",
    question: "No cisto dentígero, a lesão radiolúcida insere-se no dente incluso na altura da:",
    options: [
      "Junção amelocementária (envolvendo a coroa)",
      "Apenas o ápice radicular",
      "Toda a raiz isoladamente",
      "Furca de um dente já irrompido",
    ],
    correctIndex: 0,
    explanation:
      "O cisto dentígero origina-se do epitélio reduzido do órgão do esmalte e adere-se à junção amelocementária, envolvendo a coroa do dente não irrompido.",
  },
  // ── Dentição Mista ──
  {
    id: "rad-20",
    image: "panoramica-denticao-mista",
    topic: "Dentição Mista",
    difficulty: "Básico",
    question:
      "Esta panorâmica de uma criança mostra dentes decíduos e germes dentários em criptas ósseas. Essa fase é chamada de:",
    options: ["Dentição permanente completa", "Dentição mista", "Edentulismo", "Dentição decídua completa"],
    correctIndex: 1,
    explanation:
      "Na dentição mista coexistem dentes decíduos e permanentes (alguns ainda em formação/irrompendo), fase típica entre aproximadamente 6 e 12 anos.",
  },
  {
    id: "rad-21",
    image: "panoramica-denticao-mista",
    topic: "Dentição Mista",
    difficulty: "Intermediário",
    question: "Os dentes permanentes ainda não irrompidos aparecem nesta imagem:",
    options: [
      "Já posicionados no plano oclusal",
      "Em formação dentro de criptas ósseas, abaixo/atrás dos decíduos",
      "Ausentes",
      "Com coroas metálicas",
    ],
    correctIndex: 1,
    explanation:
      "Os germes dos permanentes aparecem como coroas calcificadas dentro de criptas ósseas, apicalmente aos decíduos, aguardando a erupção.",
  },
  {
    id: "rad-22",
    image: "panoramica-denticao-mista",
    topic: "Dentição Mista",
    difficulty: "Intermediário",
    question: "A panorâmica é muito útil em odontopediatria e ortodontia porque permite avaliar:",
    options: [
      "A presença, a posição e o desenvolvimento dos germes dentários",
      "A vitalidade pulpar",
      "A cor dos dentes",
      "A oclusão funcional dinâmica",
    ],
    correctIndex: 0,
    explanation:
      "Permite verificar agenesias, supranumerários, sequência e posição dos germes — informação-chave para o planejamento ortodôntico e o acompanhamento da erupção.",
  },
  // ── Anomalias Dentárias ──
  {
    id: "rad-23",
    image: "talon-cusp",
    topic: "Anomalias Dentárias",
    difficulty: "Avançado",
    question:
      "Uma projeção radiopaca em forma de garra sobreposta à coroa de um incisivo, partindo da região do cíngulo, caracteriza:",
    options: ["Dens in dente", "Taurodontia", "Cúspide em garra (talon cusp)", "Fusão dentária"],
    correctIndex: 2,
    explanation:
      "A cúspide em garra (talon cusp) é uma cúspide acessória de esmalte e dentina no cíngulo de incisivos, que se sobrepõe à coroa criando uma imagem radiopaca em forma de garra.",
  },
  // ── Interpretação Radiográfica / Materiais ──
  {
    id: "rad-24",
    image: "periapical-restauracao",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question:
      "Nesta radiografia periapical, a área intensamente radiopaca (branca) sobre a coroa do molar corresponde, mais provavelmente, a:",
    options: ["Cárie profunda", "Câmara pulpar", "Restauração metálica (ex.: amálgama)", "Osso esponjoso"],
    correctIndex: 2,
    explanation:
      "Materiais metálicos como o amálgama são muito densos e bloqueiam quase todos os raios X, aparecendo intensamente radiopacos (brancos) e bem definidos.",
  },
  {
    id: "rad-25",
    image: "periapical-restauracao",
    topic: "Interpretação Radiográfica",
    difficulty: "Intermediário",
    question: "A radiografia periapical é o exame de escolha para avaliar em detalhe:",
    options: [
      "Um dente específico e seus tecidos de suporte (ápice, ligamento, osso periapical)",
      "Ambas as arcadas inteiras",
      "A ATM bilateralmente",
      "Os seios maxilares em conjunto",
    ],
    correctIndex: 0,
    explanation:
      "A periapical mostra todo o dente (da coroa ao ápice) e o osso periapical com alta definição, sendo ideal para o diagnóstico endodôntico e periapical.",
  },
  {
    id: "rad-26",
    image: "panoramica-restauracoes",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question: "As múltiplas imagens intensamente radiopacas nas coroas de molares e pré-molares correspondem a:",
    options: ["Cáries", "Restaurações metálicas", "Cistos", "Polpa dentária"],
    correctIndex: 1,
    explanation:
      "Restaurações metálicas (amálgama, coroas metalocerâmicas) aparecem como áreas muito claras (radiopacas) e bem delimitadas nas coroas.",
  },
  {
    id: "rad-27",
    image: "panoramica-restauracoes",
    topic: "Interpretação Radiográfica",
    difficulty: "Intermediário",
    question: "Um espaço sem dente, com rebordo ósseo cicatrizado, observado entre os dentes na panorâmica, indica:",
    options: [
      "Ausência dentária (extração prévia ou agenesia)",
      "Dente incluso irrompendo",
      "Cárie oclusal",
      "Seio maxilar",
    ],
    correctIndex: 0,
    explanation:
      "A ausência de um dente com rebordo alveolar presente sugere perda dentária (exodontia) ou, quando o dente nunca se formou, agenesia.",
  },
  {
    id: "rad-28",
    image: "panoramica-restauracoes",
    topic: "Lesões Periapicais",
    difficulty: "Avançado",
    question: "Em um dente com restauração extensa e sintomático, uma área radiolúcida no ápice sugere:",
    options: [
      "Lesão periapical secundária a comprometimento pulpar",
      "Anatomia normal",
      "Restauração satisfatória",
      "Erupção dentária em curso",
    ],
    correctIndex: 0,
    explanation:
      "Restaurações profundas podem levar à inflamação/necrose pulpar; a radiolucência apical resultante indica lesão periapical, demandando avaliação endodôntica.",
  },
  {
    id: "rad-29",
    image: "panoramica-normal",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question: "Em radiografia, estruturas mais densas (esmalte, osso cortical, metal) aparecem:",
    options: [
      "Radiopacas (claras/brancas)",
      "Radiolúcidas (escuras)",
      "Invisíveis",
      "Sempre em tons uniformes de cinza",
    ],
    correctIndex: 0,
    explanation:
      "Quanto maior a densidade e o número atômico do tecido/material, maior a absorção dos raios X e mais clara (radiopaca) a imagem.",
  },
  {
    id: "rad-30",
    image: "panoramica-impactacao-mesioangular",
    topic: "Dentes Inclusos",
    difficulty: "Intermediário",
    question: "A principal estrutura a avaliar na radiografia antes da exodontia de um terceiro molar inferior incluso é:",
    options: [
      "A relação das raízes com o canal mandibular",
      "A cor da coroa",
      "O número de cúspides",
      "A textura da mucosa",
    ],
    correctIndex: 0,
    explanation:
      "A proximidade ou sobreposição das raízes ao canal mandibular indica risco de lesão do nervo alveolar inferior; achados de risco podem indicar tomografia (TCFC) complementar.",
  },
  {
    id: "rad-31",
    image: "periapical-abscesso-36",
    topic: "Interpretação Radiográfica",
    difficulty: "Básico",
    question: "Uma radiografia que mostra em detalhe poucos dentes, incluindo seus ápices e o osso ao redor, é uma:",
    options: ["Radiografia periapical", "Panorâmica", "Telerradiografia (cefalométrica)", "Radiografia oclusal"],
    correctIndex: 0,
    explanation:
      "A radiografia periapical registra a coroa, a raiz completa (ápice) e o osso periapical de poucos dentes, com alta definição.",
  },
];

export const RADIO_QUESTION_COUNT = radioQuestions.length;

export const radioDifficulties: RadioDifficulty[] = ["Básico", "Intermediário", "Avançado"];

export function getRadioTopics(): string[] {
  const topics = new Set(radioQuestions.map((q) => q.topic));
  return Array.from(topics).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export function filterRadioQuestions(opts: { topic?: string; difficulty?: RadioDifficulty }): RadioQuestion[] {
  return radioQuestions.filter(
    (q) =>
      (!opts.topic || q.topic === opts.topic) &&
      (!opts.difficulty || q.difficulty === opts.difficulty)
  );
}

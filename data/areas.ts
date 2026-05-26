import type { Subject } from "./questions";

export interface Disciplina {
  id: string;
  label: string;
  subject?: Subject; // presente apenas quando há questões de texto disponíveis
  gameHref?: string; // rota de jogo dedicado (ex.: quiz de imagens de Radiologia)
}

export interface Area {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  description: string;
  disciplinas: Disciplina[];
}

export const areas: Area[] = [
  {
    id: "ciclo-basico",
    label: "Ciclo Básico",
    shortLabel: "Ciclo Básico",
    icon: "◈",
    description: "Fundamentos das ciências biológicas aplicadas à odontologia.",
    disciplinas: [
      { id: "anatomia-humana", label: "Anatomia Humana" },
      { id: "histologia-embriologia", label: "Histologia e Embriologia", subject: "Histologia e Embriologia" },
      { id: "bioquimica", label: "Bioquímica" },
      { id: "fisiologia", label: "Fisiologia" },
      { id: "microbiologia-imunologia", label: "Microbiologia e Imunologia" },
      { id: "patologia", label: "Patologia Geral e Bucal" },
    ],
  },
  {
    id: "pre-clinicas",
    label: "Pré-clínicas",
    shortLabel: "Pré-clínicas",
    icon: "◇",
    description: "Ciências odontológicas específicas e técnicas laboratoriais.",
    disciplinas: [
      { id: "anatomia-dental", label: "Anatomia Dental e Escultura Dental" },
      { id: "radiologia", label: "Radiologia e Imaginologia", gameHref: "/jogos/radiologia" },
      { id: "farmacologia", label: "Farmacologia e Anestesiologia", subject: "Farmacologia e Anestesiologia" },
      { id: "materiais-dentarios", label: "Materiais Dentários", subject: "Materiais Dentários" },
      { id: "cariologia-oclusao", label: "Cariologia e Oclusão", subject: "Cariologia e Oclusão" },
    ],
  },
  {
    id: "clinica",
    label: "Clínica Odontológica",
    shortLabel: "Clínica",
    icon: "◎",
    description: "Disciplinas clínicas e especialidades odontológicas.",
    disciplinas: [
      { id: "dentistica", label: "Dentística", subject: "Dentística" },
      { id: "endodontia", label: "Endodontia", subject: "Endodontia" },
      { id: "periodontia", label: "Periodontia", subject: "Periodontia" },
      { id: "cirurgia", label: "Cirurgia Bucomaxilofacial", subject: "Cirurgia Bucomaxilofacial" },
      { id: "ortodontia", label: "Ortodontia" },
      { id: "odontopediatria", label: "Odontopediatria" },
      { id: "estomatologia", label: "Estomatologia" },
      { id: "protese-total", label: "Prótese Total", subject: "Prótese Total" },
      { id: "protese-parcial-removivel", label: "Prótese Parcial Removível", subject: "Prótese Parcial Removível" },
      { id: "protese-parcial-fixa", label: "Prótese Parcial Fixa", subject: "Prótese Parcial Fixa" },
      { id: "implantodontia", label: "Implantodontia", subject: "Implantodontia" },
    ],
  },
  {
    id: "saude-coletiva",
    label: "Saúde Coletiva e Ética",
    shortLabel: "Saúde Coletiva",
    icon: "△",
    description: "Saúde pública, ética profissional e gestão de consultório.",
    disciplinas: [
      { id: "saude-coletiva-sus", label: "Saúde Coletiva e Políticas Públicas" },
      { id: "etica-legislacao", label: "Ética e Legislação Odontológica" },
      { id: "biosseguranca", label: "Biossegurança e Ergonomia" },
      { id: "gestao-consultorio", label: "Gestão e Administração de Consultório" },
    ],
  },
];

export function getArea(id: string): Area | undefined {
  return areas.find((a) => a.id === id);
}

export function getDisciplina(areaId: string, disciplinaId: string): Disciplina | undefined {
  return getArea(areaId)?.disciplinas.find((d) => d.id === disciplinaId);
}

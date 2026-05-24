export interface DropZone {
  id: string;
  label: string;
  cx: number;
  cy: number;
}

export interface DragDropChallenge {
  id: string;
  title: string;
  subtitle: string;
  svgWidth: number;
  svgHeight: number;
  dropZones: DropZone[];
}

export const implantChallenge: DragDropChallenge = {
  id: "implant-anatomy",
  title: "Anatomia do Implante Osseointegrado",
  subtitle: "Arraste cada rótulo para o ponto correto na ilustração.",
  svgWidth: 300,
  svgHeight: 440,
  dropZones: [
    { id: "coroa",        label: "Coroa protética",       cx: 150, cy: 38  },
    { id: "abutment",     label: "Abutment (pilar)",      cx: 150, cy: 92  },
    { id: "conexao",      label: "Conexão implante-pilar", cx: 150, cy: 138 },
    { id: "colo",         label: "Colo do implante",      cx: 150, cy: 182 },
    { id: "corpo",        label: "Corpo do implante",     cx: 150, cy: 250 },
    { id: "osseo",        label: "Osso cortical",         cx: 150, cy: 196 },
    { id: "esponjoso",    label: "Osso esponjoso",        cx: 150, cy: 290 },
    { id: "apice",        label: "Ápice do implante",     cx: 150, cy: 360 },
  ],
};

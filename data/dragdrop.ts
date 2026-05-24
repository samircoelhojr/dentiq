export interface DropZone {
  id: string;
  label: string;
  x: number; // % from left of image
  y: number; // % from top of image
}

export interface DragDropChallenge {
  id: string;
  title: string;
  subtitle: string;
  dropZones: DropZone[];
}

// Positions calibrated to the educational implant diagram image
export const implantChallenge: DragDropChallenge = {
  id: "implant-anatomy",
  title: "Anatomia do Implante Osseointegrado",
  subtitle: "Selecione um rótulo e toque no ponto correto na imagem.",
  dropZones: [
    { id: "coroa",    label: "Coroa protética",  x: 50, y: 9  },
    { id: "abutment", label: "Abutment (pilar)",  x: 50, y: 24 },
    { id: "colo",     label: "Colo do implante",  x: 50, y: 41 },
    { id: "corpo",    label: "Corpo do implante", x: 50, y: 59 },
    { id: "apice",    label: "Ápice",             x: 50, y: 76 },
  ],
};

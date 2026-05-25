"use client";

import Link from "next/link";
import Nav from "../components/Nav";

const games = [
  {
    id: "quiz",
    label: "Quiz",
    description: "Múltipla escolha com feedback imediato por questão.",
    icon: "◎",
    href: "/jogos/quiz/configurar",
    available: true,
  },
  {
    id: "dragedrop",
    label: "Drag & Drop",
    description: "Arraste os nomes das estruturas para os pontos corretos.",
    icon: "⊹",
    available: false,
  },
  {
    id: "diagnostico",
    label: "Diagnóstico Clínico",
    description: "Resolva casos clínicos completos com imagens e anamnese.",
    icon: "◈",
    available: false,
  },
  {
    id: "rx",
    label: "RX Challenge",
    description: "Identifique estruturas em radiografias reais.",
    icon: "◇",
    available: false,
  },
  {
    id: "materiais",
    label: "Materiais Master",
    description: "Associe propriedades a materiais odontológicos.",
    icon: "△",
    available: false,
  },
];

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide breadcrumbs={[{ label: "Jogos" }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="font-syne font-extrabold text-3xl mb-2">Escolha seu treino</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          Selecione um jogo para começar.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((g) => (
            <div
              key={g.id}
              className={`border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 flex flex-col gap-4 ${
                !g.available ? "opacity-50" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[#1D9E75] text-2xl">{g.icon}</span>
                {!g.available && (
                  <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-2 py-0.5">
                    Em breve
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-syne font-bold text-base mb-1">{g.label}</h3>
                <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">
                  {g.description}
                </p>
              </div>
              {g.available && g.href ? (
                <Link
                  href={g.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  Jogar →
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-auto inline-flex items-center justify-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#4a5a4a] font-dm text-sm px-4 py-2.5 rounded-lg cursor-not-allowed"
                >
                  Disponível em breve
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

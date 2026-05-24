"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import { implantChallenge } from "@/data/dragdrop";

type Phase = "playing" | "finished";

interface Placement {
  zoneId: string;
  label: string;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildInitialLabels() {
  return shuffle(implantChallenge.dropZones.map((z) => z.label));
}

export default function DragDropPage() {
  const challenge = implantChallenge;

  const [labels, setLabels] = useState<string[]>(buildInitialLabels);
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("playing");

  const placedLabels = placements.map((p) => p.label);
  const remainingLabels = labels.filter((l) => !placedLabels.includes(l));

  function handleChipTap(label: string) {
    setSelected((prev) => (prev === label ? null : label));
  }

  function handleZoneTap(zoneId: string) {
    if (selected) {
      setPlacements((prev) => {
        const withoutZone = prev.filter((p) => p.zoneId !== zoneId);
        const withoutLabel = withoutZone.filter((p) => p.label !== selected);
        return [...withoutLabel, { zoneId, label: selected }];
      });
      setSelected(null);
    } else {
      // Tap on occupied zone with nothing selected → remove it
      setPlacements((prev) => prev.filter((p) => p.zoneId !== zoneId));
    }
  }

  function reset() {
    setPlacements([]);
    setSelected(null);
    setPhase("playing");
    setLabels(buildInitialLabels());
  }

  const correctCount = placements.filter((p) => {
    const zone = challenge.dropZones.find((z) => z.id === p.zoneId);
    return zone?.label === p.label;
  }).length;

  if (phase === "finished") {
    const total = challenge.dropZones.length;
    const accuracy = Math.round((correctCount / total) * 100);
    return (
      <ResultScreen
        correct={correctCount}
        wrong={total - correctCount}
        total={total}
        accuracy={accuracy}
        placements={placements}
        zones={challenge.dropZones}
        onRetry={reset}
      />
    );
  }

  const allPlaced = placements.length === challenge.dropZones.length;

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide breadcrumbs={[{ label: "Jogos", href: "/jogos" }, { label: "Drag & Drop" }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl sm:text-3xl mb-1">{challenge.title}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">{challenge.subtitle}</p>
        </div>

        {/* Selected label indicator */}
        <div className={`mb-4 px-4 py-2.5 rounded-lg border transition-all text-sm font-dm ${
          selected
            ? "border-[#1D9E75] bg-[#1D9E7510] text-[#1D9E75]"
            : "border-[#1e2a1e] border-[0.5px] bg-[#111611] text-[#4a5a4a]"
        }`}>
          {selected
            ? <>Selecionado: <strong>{selected}</strong> — toque em um ponto na imagem</>
            : "Selecione um rótulo abaixo e toque no ponto correspondente na imagem"}
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-start">

          {/* Image panel */}
          <div className="border border-[#1e2a1e] border-[0.5px] rounded-2xl bg-[#111611] overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/implant-diagram.png"
                alt="Diagrama do implante dentário osseointegrado"
                fill
                className="object-contain"
                priority
              />

              {/* Drop zone overlays */}
              {challenge.dropZones.map((zone) => {
                const placed = placements.find((p) => p.zoneId === zone.id);
                const isSelected = selected !== null;
                return (
                  <button
                    key={zone.id}
                    onClick={() => handleZoneTap(zone.id)}
                    style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 flex items-center justify-center font-dm font-semibold
                      ${placed
                        ? "w-8 h-8 sm:w-10 sm:h-10 bg-[#1D9E75] border-2 border-[#1D9E75] text-white text-[9px] sm:text-[10px] shadow-lg"
                        : isSelected
                          ? "w-8 h-8 sm:w-10 sm:h-10 bg-[#1D9E7520] border-2 border-[#1D9E75] border-dashed text-[#1D9E75] text-lg animate-pulse"
                          : "w-7 h-7 sm:w-9 sm:h-9 bg-[#0a0f0aCC] border border-[#1e2a1e] border-[0.5px] text-[#4a5a4a] text-lg"
                      }`}
                    aria-label={placed ? `${zone.label}: ${placed.label} — toque para remover` : `Posicionar em ${zone.label}`}
                  >
                    {placed ? (
                      <span className="leading-tight text-center px-0.5 line-clamp-2">✓</span>
                    ) : (
                      <span>+</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Placed labels below image */}
            {placements.length > 0 && (
              <div className="px-4 py-3 border-t border-[#1e2a1e] border-[0.5px] flex flex-wrap gap-2">
                {placements.map((p) => {
                  const zone = challenge.dropZones.find((z) => z.id === p.zoneId);
                  return (
                    <button
                      key={p.zoneId}
                      onClick={() => handleZoneTap(p.zoneId)}
                      className="flex items-center gap-1.5 text-xs font-dm bg-[#1D9E7515] border border-[#1D9E75] border-[0.5px] rounded-full px-3 py-1 text-[#1D9E75] hover:bg-[#1D9E7530] transition-colors"
                    >
                      <span className="text-[#4a5a4a]">{zone?.label}:</span>
                      {p.label}
                      <span className="text-[#4a5a4a] ml-0.5">✕</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4">
            {/* Progress */}
            <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4">
              <div className="flex justify-between text-xs font-dm text-[#8a9e8a] mb-2">
                <span>Progresso</span>
                <span>{placements.length}/{challenge.dropZones.length}</span>
              </div>
              <div className="h-1.5 bg-[#1e2a1e] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1D9E75] rounded-full transition-all duration-300"
                  style={{ width: `${(placements.length / challenge.dropZones.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Label chips */}
            <div>
              <p className="text-xs font-dm text-[#8a9e8a] mb-2 uppercase tracking-wider">
                Rótulos disponíveis
              </p>
              <div className="flex flex-col gap-2">
                {remainingLabels.length === 0 ? (
                  <p className="text-xs font-dm text-[#4a5a4a] py-2">
                    Todos os rótulos foram posicionados.
                  </p>
                ) : (
                  remainingLabels.map((label) => (
                    <button
                      key={label}
                      onClick={() => handleChipTap(label)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-dm transition-all ${
                        selected === label
                          ? "bg-[#1D9E75] border-[#1D9E75] text-white"
                          : "bg-[#111611] border-[#1e2a1e] border-[0.5px] text-[#e8f0e8] hover:border-[#1D9E75] hover:bg-[#1D9E7508]"
                      }`}
                    >
                      {label}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Action buttons */}
            <button
              onClick={() => setPhase("finished")}
              disabled={!allPlaced}
              className="w-full bg-[#1D9E75] hover:bg-[#17805e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-dm font-medium text-sm px-4 py-3 rounded-xl transition-colors"
            >
              {allPlaced
                ? "Verificar respostas →"
                : `Faltam ${challenge.dropZones.length - placements.length} rótulo(s)`}
            </button>
            <button
              onClick={reset}
              className="w-full border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm text-sm px-4 py-2.5 rounded-xl transition-colors"
            >
              Recomeçar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// ── Result Screen ─────────────────────────────────────────────────────────
function ResultScreen({
  correct, wrong, total, accuracy, placements, zones, onRetry,
}: {
  correct: number;
  wrong: number;
  total: number;
  accuracy: number;
  placements: Placement[];
  zones: typeof implantChallenge.dropZones;
  onRetry: () => void;
}) {
  const emoji = accuracy >= 80 ? "◎" : accuracy >= 50 ? "◈" : "◇";
  const message = accuracy >= 80 ? "Excelente!" : accuracy >= 50 ? "Bom progresso!" : "Continue praticando!";

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav breadcrumbs={[{ label: "Resultado" }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <span className="text-5xl block mb-4 text-[#1D9E75]">{emoji}</span>
          <h1 className="font-syne font-extrabold text-3xl mb-1">{message}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">Drag & Drop · Anatomia do Implante</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Acertos", value: correct, color: "text-[#1D9E75]" },
            { label: "Erros", value: wrong, color: "text-red-400" },
            { label: "Precisão", value: `${accuracy}%`, color: "text-[#e8f0e8]" },
          ].map((s) => (
            <div key={s.label} className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4 text-center">
              <span className={`font-syne font-extrabold text-3xl block ${s.color}`}>{s.value}</span>
              <span className="font-dm text-[#4a5a4a] text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] divide-y divide-[#1e2a1e] mb-8">
          <div className="px-4 sm:px-5 py-3 grid grid-cols-3 text-xs font-dm text-[#4a5a4a] uppercase tracking-wider">
            <span>Estrutura</span>
            <span>Sua resposta</span>
            <span>Resultado</span>
          </div>
          {zones.map((zone) => {
            const placed = placements.find((p) => p.zoneId === zone.id);
            const isCorrect = placed?.label === zone.label;
            return (
              <div key={zone.id} className="px-4 sm:px-5 py-3 grid grid-cols-3 items-center gap-2">
                <span className="text-xs font-dm text-[#e8f0e8] leading-tight">{zone.label}</span>
                <span className="text-xs font-dm text-[#8a9e8a] leading-tight">
                  {placed?.label ?? <em className="text-[#4a5a4a]">—</em>}
                </span>
                <span className={`text-xs font-dm font-semibold ${isCorrect ? "text-[#1D9E75]" : "text-red-400"}`}>
                  {isCorrect ? "✓ Correto" : "✗ Errado"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 justify-center flex-wrap">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Tentar novamente
          </button>
          <Link
            href="/jogos"
            className="inline-flex items-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm font-medium text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Outros jogos
          </Link>
        </div>
      </div>
    </main>
  );
}

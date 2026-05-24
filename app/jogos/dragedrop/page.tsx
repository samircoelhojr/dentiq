"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { implantChallenge } from "@/data/dragdrop";

type Phase = "playing" | "finished";

interface Placement {
  zoneId: string;
  label: string;
}

// ── SVG implant illustration ──────────────────────────────────────────────
function ImplantSVG({
  placements,
  dropZones,
  dragOverZone,
  onDrop,
  onRemove,
}: {
  placements: Placement[];
  dropZones: typeof implantChallenge.dropZones;
  dragOverZone: string | null;
  onDrop: (zoneId: string) => void;
  onRemove: (zoneId: string) => void;
}) {
  return (
    <svg
      viewBox="0 0 300 440"
      width="100%"
      className="max-w-[260px] mx-auto select-none"
      aria-label="Ilustração de implante dentário"
    >
      {/* Background */}
      <rect width="300" height="440" fill="#0a0f0a" rx="12" />

      {/* ── Gum tissue ── */}
      <ellipse cx="150" cy="160" rx="90" ry="22" fill="#c06060" opacity="0.25" />
      <rect x="100" y="155" width="100" height="18" rx="4" fill="#b05050" opacity="0.3" />

      {/* ── Bone (cortical) ── */}
      <rect x="80" y="175" width="140" height="28" rx="3" fill="#c8b98a" opacity="0.35" />

      {/* ── Bone (spongy) ── */}
      <rect x="85" y="200" width="130" height="200" rx="6" fill="#c8b98a" opacity="0.18" />
      {/* spongy texture lines */}
      {[210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((y) => (
        <line
          key={y}
          x1="90"
          y1={y}
          x2="210"
          y2={y}
          stroke="#c8b98a"
          strokeWidth="0.6"
          opacity="0.2"
        />
      ))}

      {/* ── Crown ── */}
      <path
        d="M120 60 Q110 20 130 15 Q150 10 165 18 Q185 25 178 60 Z"
        fill="#e8e0d0"
        stroke="#ccc0b0"
        strokeWidth="1"
        opacity="0.9"
      />
      <path d="M122 60 Q135 50 150 52 Q165 50 178 60" fill="#d8d0c0" opacity="0.7" />

      {/* ── Abutment ── */}
      <rect x="135" y="60" width="30" height="35" rx="3" fill="#b0b8c8" stroke="#8898a8" strokeWidth="0.8" />
      <rect x="138" y="62" width="24" height="6" rx="2" fill="#c8d0e0" opacity="0.6" />

      {/* ── Implant body (fixture) ── */}
      {/* colo */}
      <rect x="132" y="93" width="36" height="22" rx="2" fill="#9aaabe" stroke="#7a8aae" strokeWidth="0.8" />

      {/* corpo com roscas */}
      <rect x="134" y="113" width="32" height="200" rx="6" fill="#8090a0" stroke="#6070a0" strokeWidth="0.8" />
      {/* thread lines */}
      {Array.from({ length: 16 }, (_, i) => 120 + i * 12).map((y) => (
        <line
          key={y}
          x1="132"
          y1={y}
          x2="168"
          y2={y}
          stroke="#6070a0"
          strokeWidth="1.2"
          opacity="0.6"
        />
      ))}

      {/* apice */}
      <path
        d="M134 313 Q150 350 166 313 Z"
        fill="#8090a0"
        stroke="#6070a0"
        strokeWidth="0.8"
      />

      {/* ── Drop zones (hotspots) ── */}
      {dropZones.map((zone) => {
        const placed = placements.find((p) => p.zoneId === zone.id);
        const isOver = dragOverZone === zone.id;
        return (
          <g key={zone.id}>
            {/* connector line */}
            <line
              x1={zone.cx < 150 ? zone.cx + 10 : zone.cx - 10}
              y1={zone.cy}
              x2={150}
              y2={zone.cy}
              stroke="#1D9E75"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.4"
            />
            {/* hotspot circle */}
            <circle
              cx={zone.cx < 150 ? zone.cx - 60 : zone.cx + 60}
              cy={zone.cy}
              r={isOver ? 14 : 12}
              fill={placed ? "#1D9E75" : isOver ? "#1D9E7540" : "#111611"}
              stroke={placed ? "#1D9E75" : isOver ? "#1D9E75" : "#1e2a1e"}
              strokeWidth={isOver ? 1.5 : 0.5}
              style={{ cursor: placed ? "pointer" : "default" }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(zone.id)}
              onClick={() => placed && onRemove(zone.id)}
              role="button"
              aria-label={`Zona: ${zone.label}`}
            />
            {placed ? (
              <text
                x={zone.cx < 150 ? zone.cx - 60 : zone.cx + 60}
                y={zone.cy + 4}
                textAnchor="middle"
                fontSize="6"
                fill="white"
                fontFamily="var(--font-dm-sans)"
                style={{ pointerEvents: "none" }}
              >
                ✓
              </text>
            ) : (
              <text
                x={zone.cx < 150 ? zone.cx - 60 : zone.cx + 60}
                y={zone.cy + 4}
                textAnchor="middle"
                fontSize="7"
                fill="#4a5a4a"
                fontFamily="var(--font-dm-sans)"
                style={{ pointerEvents: "none" }}
              >
                +
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ── Label chip (draggable) ────────────────────────────────────────────────
function LabelChip({
  label,
  onDragStart,
}: {
  label: string;
  onDragStart: (label: string) => void;
}) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(label)}
      className="border border-[#1e2a1e] border-[0.5px] rounded-lg px-3 py-2 text-xs font-dm text-[#e8f0e8] bg-[#111611] cursor-grab active:cursor-grabbing hover:border-[#1D9E75] hover:bg-[#1D9E7508] transition-colors select-none"
    >
      {label}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function DragDropPage() {
  const challenge = implantChallenge;
  const allLabels = challenge.dropZones.map((z) => z.label);

  const [placements, setPlacements] = useState<Placement[]>([]);
  const [dragLabel, setDragLabel] = useState<string | null>(null);
  const [dragOverZone, setDragOverZone] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("playing");

  const placedLabels = placements.map((p) => p.label);
  const remainingLabels = allLabels.filter((l) => !placedLabels.includes(l));

  function handleDrop(zoneId: string) {
    if (!dragLabel) return;
    setPlacements((prev) => {
      const withoutZone = prev.filter((p) => p.zoneId !== zoneId);
      const withoutLabel = withoutZone.filter((p) => p.label !== dragLabel);
      return [...withoutLabel, { zoneId, label: dragLabel }];
    });
    setDragLabel(null);
    setDragOverZone(null);
  }

  function handleRemove(zoneId: string) {
    setPlacements((prev) => prev.filter((p) => p.zoneId !== zoneId));
  }

  function checkAnswers() {
    setPhase("finished");
  }

  function reset() {
    setPlacements([]);
    setDragLabel(null);
    setDragOverZone(null);
    setPhase("playing");
  }

  const correctCount = placements.filter((p) => {
    const zone = challenge.dropZones.find((z) => z.id === p.zoneId);
    return zone?.label === p.label;
  }).length;

  if (phase === "finished") {
    const total = challenge.dropZones.length;
    const wrong = total - correctCount;
    const accuracy = Math.round((correctCount / total) * 100);
    return <DragDropResult
      correct={correctCount}
      wrong={wrong}
      total={total}
      accuracy={accuracy}
      placements={placements}
      zones={challenge.dropZones}
      onRetry={reset}
    />;
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      {/* Nav */}
      <nav className="border-b border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="font-syne font-bold text-lg tracking-tight text-[#1D9E75]">
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <Link href="/jogos" className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors">
            Jogos
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <span className="text-sm font-dm text-[#8a9e8a]">Drag & Drop</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="font-syne font-extrabold text-3xl mb-1">{challenge.title}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">{challenge.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* SVG panel */}
          <div
            className="border border-[#1e2a1e] border-[0.5px] rounded-2xl bg-[#111611] p-6"
            onDragOver={(e) => e.preventDefault()}
          >
            <ImplantSVG
              placements={placements}
              dropZones={challenge.dropZones}
              dragOverZone={dragOverZone}
              onDrop={handleDrop}
              onRemove={handleRemove}
            />
            <p className="text-center text-xs font-dm text-[#4a5a4a] mt-4">
              Clique em um rótulo já posicionado para removê-lo
            </p>
          </div>

          {/* Labels panel */}
          <div className="flex flex-col gap-5">
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

            {/* Remaining labels */}
            <div>
              <p className="text-xs font-dm text-[#8a9e8a] mb-3 uppercase tracking-wider">
                Arraste para os pontos →
              </p>
              <div className="flex flex-col gap-2">
                {remainingLabels.length === 0 ? (
                  <p className="text-xs font-dm text-[#4a5a4a]">
                    Todos os rótulos foram posicionados.
                  </p>
                ) : (
                  remainingLabels.map((label) => (
                    <LabelChip
                      key={label}
                      label={label}
                      onDragStart={setDragLabel}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Placed summary */}
            {placements.length > 0 && (
              <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4">
                <p className="text-xs font-dm text-[#8a9e8a] mb-3 uppercase tracking-wider">
                  Posicionados
                </p>
                <div className="flex flex-col gap-1.5">
                  {placements.map((p) => {
                    const zone = challenge.dropZones.find((z) => z.id === p.zoneId);
                    return (
                      <div key={p.zoneId} className="flex items-center justify-between gap-2">
                        <span className="text-xs font-dm text-[#8a9e8a] truncate">{p.label}</span>
                        <button
                          onClick={() => handleRemove(p.zoneId)}
                          className="text-[#4a5a4a] hover:text-red-400 text-xs transition-colors shrink-0"
                          aria-label={`Remover ${p.label}`}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Check button */}
            <button
              onClick={checkAnswers}
              disabled={placements.length < challenge.dropZones.length}
              className="w-full bg-[#1D9E75] hover:bg-[#17805e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-dm font-medium text-sm px-4 py-3 rounded-lg transition-colors"
            >
              {placements.length < challenge.dropZones.length
                ? `Posicione mais ${challenge.dropZones.length - placements.length} rótulo(s)`
                : "Verificar respostas"}
            </button>

            <button
              onClick={reset}
              className="w-full border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              Recomeçar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// ── Result screen ─────────────────────────────────────────────────────────
function DragDropResult({
  correct,
  wrong,
  total,
  accuracy,
  placements,
  zones,
  onRetry,
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
  const message =
    accuracy >= 80 ? "Excelente!" : accuracy >= 50 ? "Bom progresso!" : "Continue praticando!";

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <nav className="border-b border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="font-syne font-bold text-lg tracking-tight text-[#1D9E75]">
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <span className="text-sm font-dm text-[#8a9e8a]">Resultado</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-5xl block mb-4 text-[#1D9E75]">{emoji}</span>
          <h1 className="font-syne font-extrabold text-3xl mb-1">{message}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">Drag & Drop · Anatomia do Implante</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Acertos", value: correct, color: "text-[#1D9E75]" },
            { label: "Erros", value: wrong, color: "text-red-400" },
            { label: "Precisão", value: `${accuracy}%`, color: "text-[#e8f0e8]" },
          ].map((s) => (
            <div key={s.label} className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-5 text-center">
              <span className={`font-syne font-extrabold text-3xl block ${s.color}`}>{s.value}</span>
              <span className="font-dm text-[#4a5a4a] text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Detail list */}
        <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] divide-y divide-[#1e2a1e] mb-10">
          <div className="px-5 py-3 grid grid-cols-3 text-xs font-dm text-[#4a5a4a] uppercase tracking-wider">
            <span>Estrutura</span>
            <span>Sua resposta</span>
            <span>Resultado</span>
          </div>
          {zones.map((zone) => {
            const placed = placements.find((p) => p.zoneId === zone.id);
            const isCorrect = placed?.label === zone.label;
            return (
              <div key={zone.id} className="px-5 py-3 grid grid-cols-3 items-center gap-2">
                <span className="text-xs font-dm text-[#e8f0e8]">{zone.label}</span>
                <span className="text-xs font-dm text-[#8a9e8a]">
                  {placed?.label ?? <em className="text-[#4a5a4a]">não posicionado</em>}
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
            className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Tentar novamente
          </button>
          <Link
            href="/jogos"
            className="inline-flex items-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Outros jogos
          </Link>
        </div>
      </div>
    </main>
  );
}

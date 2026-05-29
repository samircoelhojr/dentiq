"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav";
import {
  radioImages,
  radioDifficulties,
  filterRadioQuestions,
  RADIO_QUESTION_COUNT,
} from "@/data/radiologia";
import type { RadioQuestion, RadioDifficulty } from "@/data/radiologia";

type Stage = "config" | "playing" | "answered" | "finished";
type TopicResult = { correct: number; total: number };
type TopicResults = Record<string, TopicResult>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(q: RadioQuestion): RadioQuestion {
  const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
  const shuffled = shuffle(indexed);
  return {
    ...q,
    options: shuffled.map((x) => x.opt),
    correctIndex: shuffled.findIndex((x) => x.isCorrect),
  };
}

export default function RadiologiaPage() {
  const [difficulty, setDifficulty] = useState<RadioDifficulty | "Todas">("Todas");
  const [count, setCount] = useState(10);

  const [pool, setPool] = useState<RadioQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [stage, setStage] = useState<Stage>("config");
  const [score, setScore] = useState(0);
  const [topicResults, setTopicResults] = useState<TopicResults>({});
  const [wrong, setWrong] = useState<RadioQuestion[]>([]);

  const available = filterRadioQuestions({
    difficulty: difficulty !== "Todas" ? difficulty : undefined,
  }).length;
  const sliderMax = Math.max(1, available);

  function start(questions: RadioQuestion[]) {
    setPool(shuffle(questions).slice(0, count).map(shuffleOptions));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setTopicResults({});
    setWrong([]);
    setStage("playing");
  }

  function startFromConfig() {
    const filtered = filterRadioQuestions({
      difficulty: difficulty !== "Todas" ? difficulty : undefined,
    });
    start(filtered);
  }

  function restartWrong() {
    const toReview = wrong;
    setPool(shuffle(toReview).map(shuffleOptions));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setTopicResults({});
    setWrong([]);
    setStage("playing");
  }

  const current = pool[index];
  const isLast = index === pool.length - 1;

  function handleSelect(idx: number) {
    if (stage !== "playing") return;
    setSelected(idx);
    setStage("answered");
    const isCorrect = idx === current.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    else setWrong((prev) => (prev.some((q) => q.id === current.id) ? prev : [...prev, current]));
    setTopicResults((prev) => {
      const entry = prev[current.topic] ?? { correct: 0, total: 0 };
      return {
        ...prev,
        [current.topic]: {
          correct: entry.correct + (isCorrect ? 1 : 0),
          total: entry.total + 1,
        },
      };
    });
  }

  function handleNext() {
    if (isLast) {
      setStage("finished");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setStage("playing");
    }
  }

  // ── Tela de configuração ──
  if (stage === "config") {
    return (
      <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
        <Nav wide breadcrumbs={[{ label: "Jogos", href: "/jogos" }, { label: "Radiologia" }]} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <span className="text-[#1D9E75] text-3xl block mb-3">⊡</span>
          <h1 className="font-syne font-extrabold text-3xl mb-2">Radiologia · Quiz de Imagens</h1>
          <p className="font-dm text-[#8a9e8a] text-sm mb-10 leading-relaxed">
            Observe a radiografia e escolha a alternativa correta. {RADIO_QUESTION_COUNT} questões
            cobrindo anatomia, lesões periapicais, dentes inclusos, cistos, anomalias e interpretação.
          </p>

          <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 mb-8">
            <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider mb-5">
              Configurar sessão
            </p>

            <div className="mb-5">
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Dificuldade</label>
              <div className="flex gap-2">
                {(["Todas", ...radioDifficulties] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d as RadioDifficulty | "Todas")}
                    className={`flex-1 py-2 rounded-lg text-xs font-dm border transition-colors ${
                      difficulty === d
                        ? "bg-[#1D9E75] border-[#1D9E75] text-white"
                        : "border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:border-[#1D9E75] hover:text-[#e8f0e8]"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-dm text-[#8a9e8a]">Quantidade de questões</label>
                <span className="font-syne font-bold text-lg text-[#1D9E75]">
                  {Math.min(count, sliderMax)}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={sliderMax}
                value={Math.min(count, sliderMax)}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className="w-full accent-[#1D9E75] cursor-pointer"
              />
              <div className="flex justify-between mt-1 text-xs font-dm text-[#4a5a4a]">
                <span>1</span>
                <span>{sliderMax}</span>
              </div>
              <p className="mt-4 text-xs font-dm text-[#8a9e8a]">
                <span className="text-[#1D9E75] font-semibold">{available}</span>{" "}
                {available === 1 ? "questão disponível" : "questões disponíveis"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={startFromConfig}
              className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Iniciar →
            </button>
            <Link
              href="/jogos"
              className="inline-flex items-center gap-2 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors"
            >
              ← Voltar aos jogos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Tela de resultado ──
  if (stage === "finished") {
    const accuracy = pool.length > 0 ? Math.round((score / pool.length) * 100) : 0;
    const errors = pool.length - score;
    const emoji = accuracy >= 80 ? "◎" : accuracy >= 50 ? "◈" : "◇";
    const message =
      accuracy >= 80 ? "Excelente desempenho!" : accuracy >= 50 ? "Bom progresso, continue!" : "Continue praticando!";
    const sortedTopics = Object.entries(topicResults).sort(
      (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total
    );

    return (
      <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
        <Nav breadcrumbs={[{ label: "Resultado" }]} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
          <div className="text-center mb-8">
            <span className="text-5xl block mb-4 text-[#1D9E75]">{emoji}</span>
            <h1 className="font-syne font-extrabold text-3xl mb-2">{message}</h1>
            <p className="font-dm text-[#8a9e8a] text-sm">Radiologia · Quiz de Imagens</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "Acertos", value: score, color: "text-[#1D9E75]" },
              { label: "Erros", value: errors, color: "text-red-400" },
              { label: "Precisão", value: `${accuracy}%`, color: "text-[#e8f0e8]" },
              { label: "Questões", value: pool.length, color: "text-[#8a9e8a]" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4 flex flex-col items-center gap-1"
              >
                <span className={`font-syne font-extrabold text-2xl ${s.color}`}>{s.value}</span>
                <span className="font-dm text-[#4a5a4a] text-xs">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="h-2 bg-[#1e2a1e] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${accuracy}%`,
                  background: accuracy >= 80 ? "#1D9E75" : accuracy >= 50 ? "#f59e0b" : "#ef4444",
                }}
              />
            </div>
          </div>

          {sortedTopics.length > 0 && (
            <div className="mb-8">
              <p className="font-syne font-bold text-xs text-[#8a9e8a] uppercase tracking-wider mb-4">
                Desempenho por assunto
              </p>
              <div className="flex flex-col gap-3">
                {sortedTopics.map(([topicName, r]) => {
                  const pct = Math.round((r.correct / r.total) * 100);
                  const barColor = pct >= 80 ? "#1D9E75" : pct >= 60 ? "#f59e0b" : "#ef4444";
                  const textColor = pct >= 80 ? "text-[#1D9E75]" : pct >= 60 ? "text-amber-400" : "text-red-400";
                  return (
                    <div key={topicName} className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] px-4 py-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-dm text-sm text-[#e8f0e8] leading-tight">{topicName}</span>
                        <span className={`font-syne font-bold text-sm shrink-0 ml-4 ${textColor}`}>
                          {r.correct}/{r.total}
                        </span>
                      </div>
                      <div className="h-1 bg-[#1e2a1e] rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: barColor }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
            {wrong.length > 0 && (
              <button
                onClick={restartWrong}
                className="inline-flex items-center justify-center gap-2 border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Revisar {wrong.length} erro{wrong.length !== 1 ? "s" : ""} →
              </button>
            )}
            <button
              onClick={() => setStage("config")}
              className="inline-flex items-center justify-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Jogar novamente
            </button>
            <Link
              href="/jogos"
              className="inline-flex items-center justify-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Escolher outro tema
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Jogo ──
  const img = radioImages[current.image];
  const progress = ((index + (stage === "answered" ? 1 : 0)) / pool.length) * 100;

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <Nav breadcrumbs={[{ label: "Jogos", href: "/jogos" }, { label: "Radiologia" }]} exitHref="/jogos" />

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-dm text-[#8a9e8a]">
              Questão {index + 1} de {pool.length}
            </span>
            <DifficultyBadge difficulty={current.difficulty} />
          </div>
          <span className="text-xs font-dm text-[#8a9e8a]">
            {score} acerto{score !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="h-[2px] bg-[#1e2a1e] rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-[#1D9E75] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        {/* Radiografia */}
        <div className="relative w-full aspect-[16/10] bg-black rounded-xl overflow-hidden border border-[#1e2a1e] border-[0.5px] mb-2">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
        <p className="text-[10px] font-dm text-[#4a5a4a] mb-6 text-right">Imagem: {img.credit}</p>

        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1">
            {current.topic}
          </span>
        </div>

        <h2 className="font-syne font-bold text-xl sm:text-2xl leading-snug mb-8">{current.question}</h2>

        <div className="flex flex-col gap-3">
          {current.options.map((option, idx) => {
            const isCorrect = idx === current.correctIndex;
            const isSelected = idx === selected;
            let variant = "default";
            if (stage === "answered") {
              if (isCorrect) variant = "correct";
              else if (isSelected && !isCorrect) variant = "wrong";
              else variant = "dimmed";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={stage === "answered"}
                className={optionClass(variant)}
              >
                <span className={optionLetterClass(variant)}>{String.fromCharCode(65 + idx)}</span>
                <span className="font-dm text-sm leading-snug text-left">{option}</span>
                {stage === "answered" && isCorrect && <span className="ml-auto shrink-0 text-[#1D9E75] text-base">✓</span>}
                {stage === "answered" && isSelected && !isCorrect && (
                  <span className="ml-auto shrink-0 text-red-400 text-base">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {stage === "answered" && (
          <div className="mt-6 border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-5">
            <p className="text-xs font-dm font-semibold text-[#1D9E75] uppercase tracking-wider mb-2">Explicação</p>
            <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">{current.explanation}</p>
          </div>
        )}

        {stage === "answered" && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              {isLast ? "Ver resultado" : "Próxima questão →"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function optionClass(variant: string) {
  const base = "w-full flex items-center gap-4 border rounded-xl px-4 py-3.5 transition-all text-left";
  switch (variant) {
    case "correct": return `${base} border-[#1D9E75] bg-[#1D9E7510] text-[#e8f0e8]`;
    case "wrong":   return `${base} border-red-500/40 bg-red-500/10 text-[#e8f0e8]`;
    case "dimmed":  return `${base} border-[#1e2a1e] border-[0.5px] bg-[#111611] text-[#4a5a4a]`;
    default:        return `${base} border-[#1e2a1e] border-[0.5px] bg-[#111611] hover:border-[#1D9E75] hover:bg-[#1D9E7508] text-[#e8f0e8] cursor-pointer`;
  }
}

function optionLetterClass(variant: string) {
  const base = "shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-syne font-bold";
  switch (variant) {
    case "correct": return `${base} bg-[#1D9E75] text-white`;
    case "wrong":   return `${base} bg-red-500/40 text-red-300`;
    case "dimmed":  return `${base} bg-[#1e2a1e] text-[#4a5a4a]`;
    default:        return `${base} bg-[#1e2a1e] text-[#8a9e8a]`;
  }
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Básico: "text-emerald-400 border-emerald-400/30",
    Intermediário: "text-amber-400 border-amber-400/30",
    Avançado: "text-red-400 border-red-400/30",
  };
  return (
    <span className={`text-xs font-dm border border-[0.5px] rounded-full px-2 py-0.5 ${colors[difficulty] ?? "text-[#8a9e8a] border-[#1e2a1e]"}`}>
      {difficulty}
    </span>
  );
}

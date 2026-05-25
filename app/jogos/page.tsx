"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { subjects, difficulties, getTopics, filterQuestions } from "@/data/questions";
import type { Subject, Difficulty } from "@/data/questions";

const games = [
  {
    id: "quiz",
    label: "Quiz",
    description: "Múltipla escolha com feedback imediato por questão.",
    icon: "◎",
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

const COUNT_OPTIONS = [5, 10, 15, 20];

export default function JogosPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | "Todas">("Todas");
  const [selectedTopic, setSelectedTopic] = useState("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "Todas">("Todas");
  const [questionCount, setQuestionCount] = useState(10);

  const topics =
    selectedSubject !== "Todas" ? getTopics(selectedSubject as Subject) : [];

  const matchCount = filterQuestions({
    subject: selectedSubject !== "Todas" ? (selectedSubject as Subject) : undefined,
    topic: selectedTopic !== "Todos" ? selectedTopic : undefined,
    difficulty: selectedDifficulty !== "Todas" ? (selectedDifficulty as Difficulty) : undefined,
  }).length;

  const effectiveCount = Math.min(questionCount, matchCount);

  function buildQuizHref() {
    const params = new URLSearchParams();
    if (selectedSubject !== "Todas") params.set("subject", selectedSubject);
    if (selectedTopic !== "Todos") params.set("topic", selectedTopic);
    if (selectedDifficulty !== "Todas") params.set("difficulty", selectedDifficulty);
    params.set("count", String(questionCount));
    return `/jogos/quiz?${params.toString()}`;
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide breadcrumbs={[{ label: "Jogos" }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="font-syne font-extrabold text-3xl mb-2">Escolha seu treino</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          Selecione um jogo para começar.
        </p>

        {/* ── Game Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {games.map((g) => {
            const isSelected = selectedGame === g.id;
            return (
              <div
                key={g.id}
                className={`border rounded-xl bg-[#111611] p-6 flex flex-col gap-4 transition-colors ${
                  isSelected
                    ? "border-[#1D9E75]"
                    : !g.available
                    ? "border-[#1e2a1e] border-[0.5px] opacity-50"
                    : "border-[#1e2a1e] border-[0.5px]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[#1D9E75] text-2xl">{g.icon}</span>
                  {!g.available && (
                    <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-2 py-0.5">
                      Em breve
                    </span>
                  )}
                  {isSelected && (
                    <span className="text-xs font-dm text-[#1D9E75] border border-[#1D9E75] border-[0.5px] rounded-full px-2 py-0.5">
                      Selecionado
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-base mb-1">{g.label}</h3>
                  <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">
                    {g.description}
                  </p>
                </div>
                {g.available ? (
                  <button
                    onClick={() => setSelectedGame(isSelected ? null : g.id)}
                    className={`mt-auto inline-flex items-center justify-center gap-2 font-dm font-medium text-sm px-4 py-2.5 rounded-lg transition-colors ${
                      isSelected
                        ? "bg-[#1e2a1e] text-[#8a9e8a] hover:text-[#e8f0e8]"
                        : "bg-[#1D9E75] hover:bg-[#17805e] text-white"
                    }`}
                  >
                    {isSelected ? "Cancelar" : "Selecionar →"}
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-auto inline-flex items-center justify-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#4a5a4a] font-dm text-sm px-4 py-2.5 rounded-lg cursor-not-allowed"
                  >
                    Disponível em breve
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Quiz Filters (only when quiz is selected) ── */}
        {selectedGame === "quiz" && (
          <div className="border border-[#1D9E75] border-[0.5px] rounded-xl bg-[#111611] p-6">
            <p className="font-syne font-semibold text-sm mb-5 text-[#8a9e8a] uppercase tracking-wider">
              Configurar Quiz
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Subject */}
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Matéria
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value as Subject | "Todas");
                    setSelectedTopic("Todos");
                  }}
                  className="w-full bg-[#0a0f0a] border border-[#1e2a1e] border-[0.5px] rounded-lg px-3 py-2 text-sm font-dm text-[#e8f0e8] focus:outline-none focus:border-[#1D9E75] transition-colors"
                >
                  <option value="Todas">Todas as matérias</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Assunto
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  disabled={selectedSubject === "Todas"}
                  className="w-full bg-[#0a0f0a] border border-[#1e2a1e] border-[0.5px] rounded-lg px-3 py-2 text-sm font-dm text-[#e8f0e8] focus:outline-none focus:border-[#1D9E75] transition-colors disabled:opacity-40"
                >
                  <option value="Todos">Todos os assuntos</option>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Dificuldade
                </label>
                <div className="flex gap-2">
                  {(["Todas", ...difficulties] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDifficulty(d as Difficulty | "Todas")}
                      className={`flex-1 py-2 rounded-lg text-xs font-dm border transition-colors ${
                        selectedDifficulty === d
                          ? "bg-[#1D9E75] border-[#1D9E75] text-white"
                          : "border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:border-[#1D9E75] hover:text-[#e8f0e8]"
                      }`}
                    >
                      {d === "Todas" ? "Todas" : d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Question count */}
            <div className="mt-5 pt-5 border-t border-[#1e2a1e] border-[0.5px]">
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                Número de questões
              </label>
              <div className="flex gap-2">
                {COUNT_OPTIONS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`px-4 py-2 rounded-lg text-xs font-dm border transition-colors ${
                      questionCount === n
                        ? "bg-[#1D9E75] border-[#1D9E75] text-white"
                        : "border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:border-[#1D9E75] hover:text-[#e8f0e8]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Match count + Start button */}
            <div className="mt-5 pt-5 border-t border-[#1e2a1e] border-[0.5px] flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs font-dm text-[#8a9e8a]">
                <span className="text-[#1D9E75] font-semibold">{matchCount}</span>{" "}
                {matchCount === 1 ? "questão encontrada" : "questões encontradas"}
                {effectiveCount < questionCount && matchCount > 0 && (
                  <span className="text-[#4a5a4a]"> · serão usadas {effectiveCount}</span>
                )}
              </span>
              <Link
                href={buildQuizHref()}
                className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Iniciar Quiz →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

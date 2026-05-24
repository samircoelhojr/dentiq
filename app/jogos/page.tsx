"use client";

import { useState } from "react";
import Link from "next/link";
import { subjects, difficulties, getTopics, filterQuestions } from "@/data/questions";
import type { Subject, Difficulty } from "@/data/questions";

const games = [
  {
    id: "quiz",
    label: "Quiz",
    description: "Múltipla escolha com feedback imediato por questão.",
    icon: "◎",
    href: "/jogos/quiz",
    available: true,
  },
  {
    id: "dragedrop",
    label: "Drag & Drop",
    description: "Arraste os nomes das estruturas para os pontos corretos.",
    icon: "⊹",
    href: "/jogos/dragedrop",
    available: true,
  },
  {
    id: "diagnostico",
    label: "Diagnóstico Clínico",
    description: "Resolva casos clínicos completos com imagens e anamnese.",
    icon: "◈",
    href: "#",
    available: false,
  },
  {
    id: "rx",
    label: "RX Challenge",
    description: "Identifique estruturas em radiografias reais.",
    icon: "◇",
    href: "#",
    available: false,
  },
  {
    id: "materiais",
    label: "Materiais Master",
    description: "Associe propriedades a materiais odontológicos.",
    icon: "△",
    href: "#",
    available: false,
  },
];

const COUNT_OPTIONS = [5, 10, 15, 20];

export default function JogosPage() {
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

  function buildHref(baseHref: string) {
    const params = new URLSearchParams();
    if (selectedSubject !== "Todas") params.set("subject", selectedSubject);
    if (selectedTopic !== "Todos") params.set("topic", selectedTopic);
    if (selectedDifficulty !== "Todas") params.set("difficulty", selectedDifficulty);
    params.set("count", String(questionCount));
    const qs = params.toString();
    return qs ? `${baseHref}?${qs}` : baseHref;
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      {/* Nav */}
      <nav className="border-b border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link
            href="/"
            className="font-syne font-bold text-lg tracking-tight text-[#1D9E75]"
          >
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <span className="text-sm font-dm text-[#8a9e8a]">Jogos</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="font-syne font-extrabold text-3xl mb-2">Escolha seu treino</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          Filtre por matéria, assunto e dificuldade. Depois selecione o jogo.
        </p>

        {/* ── Filters ── */}
        <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 mb-10">
          <p className="font-syne font-semibold text-sm mb-5 text-[#8a9e8a] uppercase tracking-wider">
            Filtros
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

          {/* Match count */}
          <div className="mt-4">
            <span className="text-xs font-dm text-[#8a9e8a]">
              <span className="text-[#1D9E75] font-semibold">{matchCount}</span>{" "}
              {matchCount === 1 ? "questão encontrada" : "questões encontradas"} com
              esses filtros
              {effectiveCount < questionCount && matchCount > 0 && (
                <span className="text-[#4a5a4a]"> · serão usadas {effectiveCount}</span>
              )}
            </span>
          </div>
        </div>

        {/* ── Game Cards ── */}
        <h2 className="font-syne font-bold text-lg mb-5">Jogos disponíveis</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((g) => {
            const href = g.available ? buildHref(g.href) : "#";
            return (
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
                {g.available ? (
                  <Link
                    href={href}
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
            );
          })}
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Nav from "../../../components/Nav";
import { getArea, getDisciplina } from "@/data/areas";
import { difficulties } from "@/data/questions";
import { fetchTopics, fetchQuestionCount } from "@/lib/questions-db";
import type { Subject, Difficulty } from "@/data/questions";

const gameModes = [
  {
    id: "quiz",
    label: "Quiz",
    description: "Múltipla escolha com feedback imediato e explicação em cada questão.",
    icon: "◎",
    available: true,
  },
  {
    id: "dragedrop",
    label: "Drag & Drop",
    description: "Associe estruturas a pontos em imagens anatômicas.",
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
];

export default function DisciplinaPage() {
  const { area: areaId, disciplina: disciplinaId } = useParams<{
    area: string;
    disciplina: string;
  }>();

  const area = getArea(areaId);
  const disciplina = getDisciplina(areaId, disciplinaId);

  const [selectedTopic, setSelectedTopic] = useState("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "Todas">("Todas");
  const [questionCount, setQuestionCount] = useState(10);

  // Async state fetched from Supabase
  const [topics, setTopics] = useState<string[]>([]);
  const [matchCount, setMatchCount] = useState(0);
  const [countLoading, setCountLoading] = useState(true);

  const subject = disciplina?.subject as Subject | undefined;

  // Fetch topics when the subject is known
  useEffect(() => {
    if (!subject) return;
    fetchTopics(subject).then(setTopics).catch(() => {});
  }, [subject]);

  // Fetch question count whenever filters change
  useEffect(() => {
    if (!subject) return;
    setCountLoading(true);
    fetchQuestionCount({
      subject,
      topic: selectedTopic !== "Todos" ? selectedTopic : undefined,
      difficulty: selectedDifficulty !== "Todas" ? selectedDifficulty : undefined,
    })
      .then((n) => { setMatchCount(n); setCountLoading(false); })
      .catch(() => { setCountLoading(false); });
  }, [subject, selectedTopic, selectedDifficulty]);

  // Clamp slider when filters reduce available questions
  useEffect(() => {
    setQuestionCount((prev) => (matchCount > 0 ? Math.min(prev, matchCount) : prev));
  }, [matchCount]);

  if (!area || !disciplina) {
    return (
      <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex items-center justify-center">
        <p className="font-dm text-[#8a9e8a] text-sm">Disciplina não encontrada.</p>
      </main>
    );
  }

  if (!disciplina.subject) {
    return (
      <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
        <Nav
          wide
          breadcrumbs={[
            { label: "Jogos", href: "/jogos" },
            { label: area.shortLabel, href: `/jogos/${areaId}` },
            { label: disciplina.label },
          ]}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="font-syne font-extrabold text-3xl mb-2">{disciplina.label}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm mb-10">{area.label}</p>
          <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-10 text-center">
            <span className="text-[#4a5a4a] text-3xl block mb-4">◇</span>
            <p className="font-syne font-bold text-lg mb-2">Conteúdo em breve</p>
            <p className="font-dm text-[#8a9e8a] text-sm">
              Estamos preparando questões para esta disciplina.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href={`/jogos/${areaId}`}
              className="inline-flex items-center gap-2 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors"
            >
              ← Voltar às disciplinas
            </Link>
          </div>
        </div>
      </main>
    );
  }

  function buildQuizHref() {
    const params = new URLSearchParams();
    params.set("subject", subject!);
    if (selectedTopic !== "Todos") params.set("topic", selectedTopic);
    if (selectedDifficulty !== "Todas") params.set("difficulty", selectedDifficulty);
    params.set("count", String(questionCount));
    return `/jogos/quiz?${params.toString()}`;
  }

  const sliderMax = Math.max(1, matchCount);

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav
        wide
        breadcrumbs={[
          { label: "Jogos", href: "/jogos" },
          { label: area.shortLabel, href: `/jogos/${areaId}` },
          { label: disciplina.label },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="font-syne font-extrabold text-3xl mb-1">{disciplina.label}</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">{area.label}</p>

        {/* ── Filtros ── */}
        <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 mb-8">
          <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider mb-5">
            Filtrar questões
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
            {/* Assunto */}
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Assunto</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1e2a1e] border-[0.5px] rounded-lg px-3 py-2 text-sm font-dm text-[#e8f0e8] focus:outline-none focus:border-[#1D9E75] transition-colors"
              >
                <option value="Todos">Todos os assuntos</option>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Dificuldade */}
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Dificuldade</label>
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
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slider de quantidade */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-dm text-[#8a9e8a]">Quantidade de questões</label>
              {countLoading ? (
                <div className="h-5 w-8 bg-[#1e2a1e] rounded animate-pulse" />
              ) : (
                <span className="font-syne font-bold text-lg text-[#1D9E75]">{matchCount > 0 ? questionCount : 0}</span>
              )}
            </div>
            {countLoading ? (
              <div className="h-2 w-full bg-[#1e2a1e] rounded-full animate-pulse" />
            ) : (
              <input
                type="range"
                min={1}
                max={sliderMax}
                value={matchCount > 0 ? questionCount : 1}
                onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                disabled={matchCount === 0}
                className="w-full accent-[#1D9E75] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              />
            )}
            <div className="flex justify-between mt-1 text-xs font-dm text-[#4a5a4a]">
              <span>1</span>
              {!countLoading && <span>{sliderMax}</span>}
            </div>
          </div>

          <p className="mt-4 text-xs font-dm text-[#8a9e8a]">
            {countLoading ? (
              <span className="inline-block h-4 w-32 bg-[#1e2a1e] rounded animate-pulse" />
            ) : (
              <>
                <span className="text-[#1D9E75] font-semibold">{matchCount}</span>{" "}
                {matchCount === 1 ? "questão encontrada" : "questões encontradas"}
              </>
            )}
          </p>
        </div>

        {/* ── Modalidades ── */}
        <h2 className="font-syne font-bold text-lg mb-5">Escolha a modalidade</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {gameModes.map((g) => (
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
                <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">{g.description}</p>
              </div>
              {g.available ? (
                <Link
                  href={buildQuizHref()}
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-dm font-medium text-sm px-4 py-2.5 rounded-lg transition-colors ${
                    matchCount === 0
                      ? "bg-[#1e2a1e] text-[#4a5a4a] pointer-events-none"
                      : "bg-[#1D9E75] hover:bg-[#17805e] text-white"
                  }`}
                >
                  Iniciar →
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

        <div className="mt-8">
          <Link
            href={`/jogos/${areaId}`}
            className="inline-flex items-center gap-2 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors"
          >
            ← Voltar às disciplinas
          </Link>
        </div>
      </div>
    </main>
  );
}

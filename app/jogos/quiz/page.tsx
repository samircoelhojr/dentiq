"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { filterQuestions, questions as allQuestions } from "@/data/questions";
import type { Question, Subject, Difficulty } from "@/data/questions";

type GameState = "playing" | "answered" | "finished";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shuffleOptions(q: Question): Question {
  const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
  const shuffled = shuffle(indexed);
  return {
    ...q,
    options: shuffled.map((x) => x.opt),
    correctIndex: shuffled.findIndex((x) => x.isCorrect),
  };
}

function QuizGame() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subject = searchParams.get("subject") as Subject | null;
  const topic = searchParams.get("topic");
  const difficulty = searchParams.get("difficulty") as Difficulty | null;
  const countParam = searchParams.get("count");
  const questionLimit = countParam ? Math.max(1, parseInt(countParam, 10)) : 10;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const loadQuestions = useCallback(() => {
    const filtered = filterQuestions({
      subject: subject ?? undefined,
      topic: topic ?? undefined,
      difficulty: difficulty ?? undefined,
    });
    const pool = filtered.length > 0 ? filtered : allQuestions;
    setQuestions(shuffle(pool).slice(0, Math.min(questionLimit, pool.length)).map(shuffleOptions));
    setCurrentIndex(0);
    setSelectedOption(null);
    setGameState("playing");
    setScore(0);
    setAnswers([]);
  }, [subject, topic, difficulty, questionLimit]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(idx: number) {
    if (gameState !== "playing") return;
    setSelectedOption(idx);
    setGameState("answered");
    if (idx === current.correctIndex) {
      setScore((s) => s + 1);
    }
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = idx;
      return next;
    });
  }

  function handleNext() {
    if (isLast) {
      setGameState("finished");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setGameState("playing");
    }
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0f0a] flex items-center justify-center">
        <span className="text-[#8a9e8a] font-dm text-sm">Carregando questões…</span>
      </div>
    );
  }

  if (gameState === "finished") {
    const accuracy = Math.round((score / questions.length) * 100);
    const wrong = questions.length - score;
    return <ResultScreen
      score={score}
      total={questions.length}
      wrong={wrong}
      accuracy={accuracy}
      onRetry={loadQuestions}
      subject={subject}
      topic={topic}
      difficulty={difficulty}
    />;
  }

  const progress = ((currentIndex + (gameState === "answered" ? 1 : 0)) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      {/* Nav */}
      <nav className="border-b border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="font-syne font-extrabold text-2xl tracking-tight text-[#1D9E75]">
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <Link href="/jogos" className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors">
            Jogos
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <span className="text-sm font-dm text-[#8a9e8a]">Quiz</span>
        </div>
      </nav>

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-6 py-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-dm text-[#8a9e8a]">
              Questão {currentIndex + 1} de {questions.length}
            </span>
            {current.difficulty && (
              <DifficultyBadge difficulty={current.difficulty} />
            )}
          </div>
          <span className="text-xs font-dm text-[#8a9e8a]">
            {score} acerto{score !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] bg-[#1e2a1e] rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-[#1D9E75] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Topic chip */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1">
            {current.subject}
          </span>
          <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1">
            {current.topic}
          </span>
        </div>

        {/* Question */}
        <h2 className="font-syne font-bold text-xl sm:text-2xl leading-snug mb-8">
          {current.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {current.options.map((option, idx) => {
            const isCorrect = idx === current.correctIndex;
            const isSelected = idx === selectedOption;
            let variant = "default";
            if (gameState === "answered") {
              if (isCorrect) variant = "correct";
              else if (isSelected && !isCorrect) variant = "wrong";
              else variant = "dimmed";
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={gameState === "answered"}
                className={optionClass(variant)}
              >
                <span className={optionLetterClass(variant)}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-dm text-sm leading-snug text-left">{option}</span>
                {gameState === "answered" && isCorrect && (
                  <span className="ml-auto shrink-0 text-[#1D9E75] text-base">✓</span>
                )}
                {gameState === "answered" && isSelected && !isCorrect && (
                  <span className="ml-auto shrink-0 text-red-400 text-base">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {gameState === "answered" && (
          <div className="mt-6 border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-5">
            <p className="text-xs font-dm font-semibold text-[#1D9E75] uppercase tracking-wider mb-2">
              Explicação
            </p>
            <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">
              {current.explanation}
            </p>
          </div>
        )}

        {/* Next button */}
        {gameState === "answered" && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              {isLast ? "Ver resultado" : "Próxima questão"} →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function optionClass(variant: string) {
  const base =
    "w-full flex items-center gap-4 border rounded-xl px-4 py-3.5 transition-all text-left";
  switch (variant) {
    case "correct":
      return `${base} border-[#1D9E75] bg-[#1D9E7510] text-[#e8f0e8]`;
    case "wrong":
      return `${base} border-red-500/40 bg-red-500/10 text-[#e8f0e8]`;
    case "dimmed":
      return `${base} border-[#1e2a1e] border-[0.5px] bg-[#111611] text-[#4a5a4a]`;
    default:
      return `${base} border-[#1e2a1e] border-[0.5px] bg-[#111611] hover:border-[#1D9E75] hover:bg-[#1D9E7508] text-[#e8f0e8] cursor-pointer`;
  }
}

function optionLetterClass(variant: string) {
  const base = "shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-syne font-bold";
  switch (variant) {
    case "correct":
      return `${base} bg-[#1D9E75] text-white`;
    case "wrong":
      return `${base} bg-red-500/40 text-red-300`;
    case "dimmed":
      return `${base} bg-[#1e2a1e] text-[#4a5a4a]`;
    default:
      return `${base} bg-[#1e2a1e] text-[#8a9e8a]`;
  }
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Básico: "text-emerald-400 border-emerald-400/30",
    Intermediário: "text-amber-400 border-amber-400/30",
    Avançado: "text-red-400 border-red-400/30",
  };
  return (
    <span
      className={`text-xs font-dm border border-[0.5px] rounded-full px-2 py-0.5 ${colors[difficulty] ?? "text-[#8a9e8a] border-[#1e2a1e]"}`}
    >
      {difficulty}
    </span>
  );
}

interface ResultProps {
  score: number;
  total: number;
  wrong: number;
  accuracy: number;
  onRetry: () => void;
  subject: string | null;
  topic: string | null;
  difficulty: string | null;
}

function ResultScreen({ score, total, wrong, accuracy, onRetry, subject, topic, difficulty }: ResultProps) {
  const emoji = accuracy >= 80 ? "◎" : accuracy >= 50 ? "◈" : "◇";
  const message =
    accuracy >= 80
      ? "Excelente desempenho!"
      : accuracy >= 50
      ? "Bom progresso, continue!"
      : "Continue praticando!";

  const stats = [
    { label: "Acertos", value: score, color: "text-[#1D9E75]" },
    { label: "Erros", value: wrong, color: "text-red-400" },
    { label: "Precisão", value: `${accuracy}%`, color: "text-[#e8f0e8]" },
    { label: "Questões", value: total, color: "text-[#8a9e8a]" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <nav className="border-b border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="font-syne font-bold text-lg tracking-tight text-[#1D9E75]">
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          <span className="text-[#1e2a1e] text-lg">/</span>
          <span className="text-sm font-dm text-[#8a9e8a]">Resultado</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 flex-1 flex flex-col items-center justify-center text-center">
        <span className="text-5xl block mb-4 text-[#1D9E75]">{emoji}</span>
        <h1 className="font-syne font-extrabold text-3xl mb-2">{message}</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          {subject ? `${subject}${topic ? ` · ${topic}` : ""}${difficulty ? ` · ${difficulty}` : ""}` : "Questões gerais"}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-md mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4 flex flex-col items-center gap-1"
            >
              <span className={`font-syne font-extrabold text-2xl ${s.color}`}>
                {s.value}
              </span>
              <span className="font-dm text-[#4a5a4a] text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Accuracy bar */}
        <div className="w-full max-w-md mb-10">
          <div className="flex justify-between text-xs font-dm text-[#8a9e8a] mb-2">
            <span>Precisão</span>
            <span>{accuracy}%</span>
          </div>
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

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Jogar novamente
          </button>
          <Link
            href="/jogos"
            className="inline-flex items-center gap-2 border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Escolher outro tema
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0f0a] flex items-center justify-center">
        <span className="text-[#8a9e8a] font-dm text-sm">Carregando…</span>
      </div>
    }>
      <QuizGame />
    </Suspense>
  );
}

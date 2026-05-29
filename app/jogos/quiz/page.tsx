"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import { supabase } from "@/lib/supabase";
import { fetchQuestions } from "@/lib/questions-db";
import type { Question, Subject, Difficulty } from "@/data/questions";

type GameState = "playing" | "answered" | "finished";
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

function shuffleOptions(q: Question): Question {
  const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
  const shuffled = shuffle(indexed);
  return {
    ...q,
    options: shuffled.map((x) => x.opt),
    correctIndex: shuffled.findIndex((x) => x.isCorrect),
  };
}

function calcPoints(correct: number, total: number): number {
  const base = correct * 10;
  const ratio = total > 0 ? correct / total : 0;
  const bonus = ratio >= 0.9 ? 25 : ratio >= 0.8 ? 15 : ratio >= 0.7 ? 5 : 0;
  return base + bonus;
}

function QuizGame() {
  const searchParams = useSearchParams();

  const subject = searchParams.get("subject") as Subject | null;
  const topic = searchParams.get("topic");
  const difficulty = searchParams.get("difficulty") as Difficulty | null;
  const countParam = searchParams.get("count");

  const contextLabel = [subject, topic, difficulty].filter(Boolean).join(" · ") || "Quiz";
  const parsedCount = parseInt(countParam ?? "", 10);
  const questionLimit = !isNaN(parsedCount) ? Math.max(1, parsedCount) : 10;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [score, setScore] = useState(0);
  const [topicResults, setTopicResults] = useState<TopicResults>({});
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  // Review mode state
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewTotal, setReviewTotal] = useState(0);
  const [reviewCleared, setReviewCleared] = useState(0);

  const loadQuestions = useCallback(async () => {
    setQuestions([]);
    let pool = await fetchQuestions({
      subject: subject ?? undefined,
      topic: topic ?? undefined,
      difficulty: difficulty ?? undefined,
    });
    if (pool.length === 0) {
      pool = await fetchQuestions();
    }
    setQuestions(shuffle(pool).slice(0, Math.min(questionLimit, pool.length)).map(shuffleOptions));
    setCurrentIndex(0);
    setSelectedOption(null);
    setGameState("playing");
    setScore(0);
    setTopicResults({});
    setWrongQuestions([]);
    setReviewMode(false);
  }, [subject, topic, difficulty, questionLimit]);

  function startReview(wrong: Question[]) {
    const queue = shuffle(wrong).map(shuffleOptions);
    setQuestions(queue);
    setCurrentIndex(0);
    setSelectedOption(null);
    setGameState("playing");
    setReviewMode(true);
    setReviewTotal(wrong.length);
    setReviewCleared(0);
  }

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(idx: number) {
    if (gameState !== "playing") return;
    setSelectedOption(idx);
    setGameState("answered");
    const isCorrect = idx === current.correctIndex;
    if (!reviewMode) {
      if (isCorrect) setScore((s) => s + 1);
      else setWrongQuestions((prev) => prev.some((q) => q.id === current.id) ? prev : [...prev, current]);
      setTopicResults((prev) => {
        const key = current.topic;
        const entry = prev[key] ?? { correct: 0, total: 0 };
        return { ...prev, [key]: { correct: entry.correct + (isCorrect ? 1 : 0), total: entry.total + 1 } };
      });
    }
  }

  function handleNext() {
    if (reviewMode) {
      const wasCorrect = selectedOption === current.correctIndex;
      if (wasCorrect) {
        const remaining = questions.slice(1);
        setReviewCleared((c) => c + 1);
        if (remaining.length === 0) {
          setGameState("finished");
        } else {
          setQuestions(remaining);
          setSelectedOption(null);
          setGameState("playing");
        }
      } else {
        // Move current question to end of queue (will come back)
        setQuestions((q) => [...q.slice(1), q[0]]);
        setSelectedOption(null);
        setGameState("playing");
      }
      return;
    }
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
      <div className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
        <Nav breadcrumbs={[{ label: "Jogos", href: "/jogos" }, { label: contextLabel }]} exitHref="/jogos" />
        <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-pulse">
          <div className="h-2 bg-[#1e2a1e] rounded-full mb-8" />
          <div className="flex gap-2 mb-6">
            <div className="h-6 w-24 bg-[#1e2a1e] rounded-full" />
            <div className="h-6 w-16 bg-[#1e2a1e] rounded-full" />
          </div>
          <div className="h-7 bg-[#1e2a1e] rounded w-4/5 mb-3" />
          <div className="h-7 bg-[#1e2a1e] rounded w-2/3 mb-8" />
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-14 bg-[#111611] border border-[#1e2a1e] rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "finished") {
    if (reviewMode) {
      return <ReviewDoneScreen total={reviewTotal} onPlayAgain={loadQuestions} />;
    }
    const accuracy = Math.round((score / questions.length) * 100);
    return (
      <ResultScreen
        score={score}
        total={questions.length}
        accuracy={accuracy}
        topicResults={topicResults}
        wrongQuestions={wrongQuestions}
        onRetry={loadQuestions}
        onStartReview={startReview}
        subject={subject}
        topic={topic}
        difficulty={difficulty}
      />
    );
  }

  const progress = reviewMode
    ? (reviewCleared / reviewTotal) * 100
    : ((currentIndex + (gameState === "answered" ? 1 : 0)) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <Nav breadcrumbs={[{ label: "Jogos", href: "/jogos" }, { label: contextLabel }]} exitHref="/jogos" />

      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {reviewMode && (
          <div className="inline-flex items-center gap-2 self-start border border-amber-400/30 bg-amber-400/5 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            <span className="text-xs font-dm text-amber-400">Modo revisão · {questions.length} restante{questions.length !== 1 ? "s" : ""}</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-dm text-[#8a9e8a]">
              {reviewMode ? `${reviewCleared} de ${reviewTotal} concluídas` : `Questão ${currentIndex + 1} de ${questions.length}`}
            </span>
            {current.difficulty && <DifficultyBadge difficulty={current.difficulty} />}
          </div>
          {!reviewMode && (
            <span className="text-xs font-dm text-[#8a9e8a]">
              {score} acerto{score !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="h-[2px] bg-[#1e2a1e] rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-[#1D9E75] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1">
            {current.subject}
          </span>
          <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1">
            {current.topic}
          </span>
        </div>

        <h2 className="font-syne font-bold text-xl sm:text-2xl leading-snug mb-8">
          {current.question}
        </h2>

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

        {gameState === "answered" && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              {reviewMode
                ? (questions.length === 1 && selectedOption === current.correctIndex ? "Concluir revisão" : "Próxima →")
                : (isLast ? "Ver resultado" : "Próxima questão →")}
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

interface ResultProps {
  score: number;
  total: number;
  accuracy: number;
  topicResults: TopicResults;
  wrongQuestions: Question[];
  onRetry: () => void;
  onStartReview: (wrong: Question[]) => void;
  subject: string | null;
  topic: string | null;
  difficulty: string | null;
}

function ResultScreen({ score, total, accuracy, topicResults, wrongQuestions, onRetry, onStartReview, subject, topic, difficulty }: ResultProps) {
  const hasSaved = useRef(false);
  const [pointsEarned, setPointsEarned] = useState<number | null>(null);
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    if (hasSaved.current) return;
    hasSaved.current = true;

    async function save() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setIsAnonymous(true);
        return;
      }

      const points = calcPoints(score, total);

      await supabase.from("quiz_sessions").insert({
        user_id: session.user.id,
        subject: subject ?? "Geral",
        topic: topic ?? null,
        difficulty: difficulty ?? null,
        total_questions: total,
        correct_answers: score,
        points,
      });

      setPointsEarned(points);
    }

    save();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const wrong = total - score;
  const emoji = accuracy >= 80 ? "◎" : accuracy >= 50 ? "◈" : "◇";
  const message =
    accuracy >= 80 ? "Excelente desempenho!" : accuracy >= 50 ? "Bom progresso, continue!" : "Continue praticando!";

  const sortedTopics = Object.entries(topicResults).sort(
    (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total
  );
  const weakTopics = sortedTopics.filter(([, r]) => Math.round((r.correct / r.total) * 100) < 60);

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <Nav breadcrumbs={[{ label: "Resultado" }]} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
        {/* ── Cabeçalho ── */}
        <div className="text-center mb-8">
          <span className="text-5xl block mb-4 text-[#1D9E75]">{emoji}</span>
          <h1 className="font-syne font-extrabold text-3xl mb-2">{message}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">
            {subject ? `${subject}${topic ? ` · ${topic}` : ""}${difficulty ? ` · ${difficulty}` : ""}` : "Questões gerais"}
          </p>
        </div>

        {/* ── Pontos / CTA conversão ── */}
        {pointsEarned !== null && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-[#1D9E75]/30 bg-[#1D9E75]/10 rounded-full px-4 py-1.5">
              <span className="text-[#1D9E75] text-sm font-syne font-bold">+{pointsEarned} pts</span>
              <span className="text-xs font-dm text-[#8a9e8a]">adicionados ao seu perfil</span>
            </div>
          </div>
        )}
        {isAnonymous && (
          <div className="border border-[#1D9E75]/30 bg-[#1D9E75]/5 rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-syne font-bold text-sm text-[#e8f0e8] mb-1">Salve seu progresso</p>
              <p className="font-dm text-xs text-[#8a9e8a]">
                Crie sua conta grátis para acompanhar sua evolução, histórico de sessões e desempenho por disciplina.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link
                href="/cadastro"
                className="inline-flex items-center gap-1.5 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Criar conta grátis
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 border border-[#1e2a1e] border-[0.5px] text-[#8a9e8a] hover:text-[#e8f0e8] hover:border-[#1D9E75] font-dm text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Entrar
              </Link>
            </div>
          </div>
        )}

        {/* ── Stats cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[
            { label: "Acertos", value: score, color: "text-[#1D9E75]" },
            { label: "Erros", value: wrong, color: "text-red-400" },
            { label: "Precisão", value: `${accuracy}%`, color: "text-[#e8f0e8]" },
            { label: "Questões", value: total, color: "text-[#8a9e8a]" },
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

        {/* ── Barra de precisão geral ── */}
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

        {/* ── Áreas fracas (destaque) ── */}
        {weakTopics.length > 0 && (
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-xl p-5 mb-6">
            <p className="font-syne font-bold text-xs text-amber-400 uppercase tracking-wider mb-3">
              ⚠ Áreas para reforçar
            </p>
            <div className="flex flex-col gap-2">
              {weakTopics.map(([topicName, r]) => {
                const pct = Math.round((r.correct / r.total) * 100);
                return (
                  <div key={topicName} className="flex items-center justify-between">
                    <span className="font-dm text-sm text-[#e8f0e8]">{topicName}</span>
                    <span className="font-syne font-bold text-sm text-red-400">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Breakdown por assunto ── */}
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
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, background: barColor }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Ações ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
          {wrongQuestions.length > 0 && (
            <button
              onClick={() => onStartReview(wrongQuestions)}
              className="inline-flex items-center justify-center gap-2 border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Revisar {wrongQuestions.length} erro{wrongQuestions.length !== 1 ? "s" : ""} →
            </button>
          )}
          <button
            onClick={onRetry}
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

function ReviewDoneScreen({ total, onPlayAgain }: { total: number; onPlayAgain: () => void }) {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <Nav breadcrumbs={[{ label: "Revisão concluída" }]} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 flex-1 flex flex-col items-center justify-center text-center">
        <span className="text-5xl block mb-4 text-[#1D9E75]">◎</span>
        <h1 className="font-syne font-extrabold text-3xl mb-2">Revisão concluída!</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          Você acertou todas as {total} questão{total !== 1 ? "s" : ""} da revisão.
        </p>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={onPlayAgain}
            className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
          >
            Novo quiz
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

import { supabase } from "./supabase";
import {
  filterQuestions,
  getTopics,
  type Difficulty,
  type Question,
  type Subject,
} from "@/data/questions";

// ── DB row shape (Supabase column names) ──────────────────────────────────

interface DBRow {
  id: string;
  materia: string;
  assunto: string;
  dificuldade: string;
  pergunta: string;
  opcoes: string[];
  resposta_correta: number;
  explicacao: string;
}

function rowToQuestion(row: DBRow): Question {
  return {
    id: row.id,
    subject: row.materia as Subject,
    topic: row.assunto,
    difficulty: row.dificuldade as Difficulty,
    question: row.pergunta,
    options: row.opcoes,
    correctIndex: row.resposta_correta,
    explanation: row.explicacao,
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

export async function fetchQuestions(opts: {
  subject?: Subject;
  topic?: string;
  difficulty?: Difficulty;
} = {}): Promise<Question[]> {
  try {
    let query = supabase.from("questions").select("*");
    if (opts.subject) query = query.eq("materia", opts.subject);
    if (opts.topic?.trim()) query = query.eq("assunto", opts.topic);
    if (opts.difficulty) query = query.eq("dificuldade", opts.difficulty);

    const { data, error } = await query;
    if (error) throw error;

    return (data as DBRow[]).map(rowToQuestion);
  } catch {
    // Fallback to local data (table not yet seeded or network error)
    return filterQuestions(opts);
  }
}

export async function fetchTopics(subject: Subject): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("questions")
      .select("assunto")
      .eq("materia", subject);

    if (error) throw error;

    const set = new Set((data ?? []).map((r: { assunto: string }) => r.assunto));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
  } catch {
    return getTopics(subject);
  }
}

export async function fetchQuestionCount(opts: {
  subject?: Subject;
  topic?: string;
  difficulty?: Difficulty;
} = {}): Promise<number> {
  try {
    let query = supabase
      .from("questions")
      .select("id", { count: "exact", head: true });
    if (opts.subject) query = query.eq("materia", opts.subject);
    if (opts.topic?.trim()) query = query.eq("assunto", opts.topic);
    if (opts.difficulty) query = query.eq("dificuldade", opts.difficulty);

    const { count, error } = await query;
    if (error) throw error;
    return count ?? 0;
  } catch {
    return filterQuestions(opts).length;
  }
}

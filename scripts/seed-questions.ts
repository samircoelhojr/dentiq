/**
 * Popula a tabela `questions` no Supabase com os dados de data/questions.ts.
 *
 * Pré-requisitos:
 *   1. Execute o SQL em supabase/migrations/20260525000000_create_questions.sql
 *      no SQL Editor do Supabase.
 *   2. Adicione SUPABASE_SERVICE_ROLE_KEY ao .env.local (recomendado),
 *      ou use a ANON KEY (garanta que RLS permita INSERT para anon).
 *
 * Como rodar:
 *   npx tsx scripts/seed-questions.ts
 */

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { questions } from "../data/questions";

dotenv.config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("❌  NEXT_PUBLIC_SUPABASE_URL ou chave Supabase não encontrada em .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

const rows = questions.map((q) => ({
  id: q.id,
  materia: q.subject,
  assunto: q.topic,
  dificuldade: q.difficulty,
  pergunta: q.question,
  opcoes: q.options,
  resposta_correta: q.correctIndex,
  explicacao: q.explanation,
}));

async function run() {
  console.log(`⏳  Inserindo ${rows.length} questões…`);

  const { error } = await supabase.from("questions").upsert(rows, { onConflict: "id" });

  if (error) {
    console.error("❌  Erro:", error.message);
    process.exit(1);
  }

  console.log(`✅  ${rows.length} questões inseridas com sucesso!`);
}

run().catch((e) => { console.error(e); process.exit(1); });

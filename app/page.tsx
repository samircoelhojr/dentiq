"use client";

import Link from "next/link";
import Nav from "./components/Nav";
import { QUESTION_COUNT, subjects as subjectList } from "@/data/questions";

// Número de marketing — trocar pelo total real de estudantes quando houver métrica.
const STUDENTS_LABEL = "+1.200";

const features = [
  {
    icon: "◎",
    title: "Quiz Interativo",
    description:
      "Múltipla escolha com correção imediata a cada resposta, no seu ritmo.",
  },
  {
    icon: "◈",
    title: "Explicação em Cada Questão",
    description:
      "Toda questão traz o porquê da resposta certa para você entender, não só decorar.",
  },
  {
    icon: "◇",
    title: "Filtros por Matéria",
    description:
      "Escolha a disciplina, o assunto, a dificuldade e quantas questões quer treinar.",
  },
  {
    icon: "⊹",
    title: "Pontuação e Progresso",
    description:
      "Acompanhe acertos, erros e precisão ao final de cada sessão de estudo.",
  },
];

const subjects = [
  { label: "Implantodontia", available: true },
  { label: "Prótese Parcial Fixa", available: true },
  { label: "Prótese Parcial Removível", available: true },
  { label: "Prótese Total", available: true },
  { label: "Cirurgia Bucomaxilofacial", available: true },
  { label: "Dentística", available: true },
  { label: "Radiologia", available: true },
  { label: "Periodontia", available: false },
  { label: "Materiais Dentários", available: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      {/* ── Nav ── */}
      <Nav wide />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#1e2a1e] border-[0.5px] rounded-full px-3 py-1 mb-5 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] inline-block" />
              <span className="text-xs font-dm text-[#8a9e8a] tracking-wide">
                Plataforma educacional · Odontologia
              </span>
            </div>

            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight mb-4 sm:mb-6 pb-1.5">
              Aprenda odontologia{" "}
              <span className="text-[#1D9E75]">jogando.</span>
            </h1>

            <p className="font-dm text-[#8a9e8a] text-base sm:text-lg leading-relaxed max-w-lg mb-7 sm:mb-10">
              Questões e casos clínicos com explicação em cada resposta para
              você fixar Implantodontia, Cirurgia Bucomaxilofacial, Dentística e
              as três Próteses — Total, Parcial Fixa e Removível. Na dificuldade
              certa, na hora que precisar revisar.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/jogos"
                className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Escolher um jogo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/cadastro"
                className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors"
              >
                Criar conta gratuita →
              </Link>
            </div>
          </div>

          {/* Right — stats card */}
          <div>
            <div className="border border-[#1e2a1e] border-[0.5px] rounded-2xl bg-[#111611] p-6 flex flex-col gap-5">
              <p className="text-xs font-dm text-[#4a5a4a] uppercase tracking-wider">
                Visão geral da plataforma
              </p>

              <div className="flex items-center gap-3">
                <span className="flex -space-x-2">
                  {["#1D9E75", "#17805e", "#2a3a2a"].map((c, i) => (
                    <span
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#111611]"
                      style={{ background: c }}
                    />
                  ))}
                </span>
                <div>
                  <p className="font-syne font-extrabold text-2xl text-[#e8f0e8] leading-none">
                    {STUDENTS_LABEL}
                  </p>
                  <p className="text-xs font-dm text-[#4a5a4a] mt-1">
                    estudantes já praticaram
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl p-4">
                  <p className="font-syne font-extrabold text-3xl text-[#1D9E75] leading-none">
                    {QUESTION_COUNT}
                  </p>
                  <p className="text-xs font-dm text-[#4a5a4a] mt-2">
                    questões disponíveis
                  </p>
                </div>
                <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl p-4">
                  <p className="font-syne font-extrabold text-3xl text-[#e8f0e8] leading-none">
                    {subjectList.length}
                  </p>
                  <p className="text-xs font-dm text-[#4a5a4a] mt-2">
                    matérias com conteúdo
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1e2a1e] border-[0.5px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] inline-block" />
                <p className="text-xs font-dm text-[#8a9e8a]">
                  Acesso 100% gratuito durante o Beta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="border-t border-[#1e2a1e] border-[0.5px]" />

      {/* ── Features ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="font-syne font-bold text-2xl mb-12 text-[#e8f0e8]">
          Como funciona
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-[#1e2a1e] border-[0.5px] rounded-xl p-6 bg-[#111611]"
            >
              <span className="text-[#1D9E75] text-2xl block mb-4">{f.icon}</span>
              <h3 className="font-syne font-bold text-base mb-2">{f.title}</h3>
              <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Subjects ── */}
      <section className="border-t border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="font-syne font-bold text-2xl mb-6 sm:mb-10 text-[#e8f0e8]">
            Matérias disponíveis
          </h2>
          <div className="flex flex-wrap gap-3">
            {subjects.map((s) => (
              <span
                key={s.label}
                className={`border border-[0.5px] rounded-full px-4 py-1.5 text-sm font-dm flex items-center gap-2 ${
                  s.available
                    ? "border-[#1e2a1e] text-[#8a9e8a]"
                    : "border-[#1e2a1e] text-[#4a5a4a]"
                }`}
              >
                {s.label}
                {!s.available && (
                  <span className="text-[10px] text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-1.5 py-0.5 leading-none">
                    Em breve
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="border-t border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-syne font-bold text-2xl text-[#e8f0e8]">
              O que dizem os estudantes
            </h2>
            <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-2 py-0.5">
              Beta
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                quote: "Finalmente entendi osseointegração de verdade. As explicações após cada questão fazem toda a diferença.",
                name: "Ana Clara M.",
                role: "6° período · UFMG",
                initials: "AC",
              },
              {
                quote: "Uso antes das provas para revisar Prótese. A interface é limpa e não distrai — foco total no conteúdo.",
                name: "Rafael S.",
                role: "8° período · USP",
                initials: "RS",
              },
              {
                quote: "Melhor forma de estudar no ônibus. Rápido, objetivo e com feedback imediato em cada questão.",
                name: "Bianca T.",
                role: "5° período · PUC-PR",
                initials: "BT",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 flex flex-col gap-5"
              >
                <span className="text-[#1D9E75] font-syne font-bold text-3xl leading-none">"</span>
                <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed -mt-2">
                  {r.quote}
                </p>
                <div className="mt-auto pt-4 border-t border-[#1e2a1e] border-[0.5px] flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#1D9E75]/15 border border-[#1D9E75]/30 border-[0.5px] flex items-center justify-center shrink-0">
                    <span className="font-syne font-bold text-xs text-[#1D9E75]">{r.initials}</span>
                  </span>
                  <div>
                    <p className="font-syne font-bold text-sm text-[#e8f0e8]">{r.name}</p>
                    <p className="font-dm text-xs text-[#4a5a4a]">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="border border-[#1e2a1e] border-[0.5px] rounded-2xl bg-[#111611] p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-syne font-bold text-2xl mb-2">
                Pronto para começar?
              </h2>
              <p className="font-dm text-[#8a9e8a] text-sm">
                Escolha uma matéria, defina a dificuldade e comece agora.
              </p>
            </div>
            <Link
              href="/jogos"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Acessar jogos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1e2a1e] border-[0.5px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between text-xs font-dm text-[#4a5a4a]">
          <span>
            <span className="text-[#1D9E75] font-syne font-bold">DentIQ</span>{" "}
            · Plataforma educacional de odontologia
          </span>
          <span>MVP · 2025</span>
        </div>
      </footer>
    </main>
  );
}

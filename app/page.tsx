"use client";

import Link from "next/link";
import Nav from "./components/Nav";
import { questions } from "@/data/questions";

const features = [
  {
    icon: "◎",
    title: "Quiz Interativo",
    description:
      "Múltipla escolha com feedback imediato e explicação detalhada em cada questão.",
  },
  {
    icon: "⊹",
    title: "Drag & Drop",
    description:
      "Arraste estruturas anatômicas para os pontos corretos e consolide o conhecimento visual.",
  },
  {
    icon: "◈",
    title: "Filtros por Matéria",
    description:
      "Selecione a disciplina, o assunto e o nível de dificuldade que deseja treinar.",
  },
  {
    icon: "◇",
    title: "Pontuação e Progresso",
    description:
      "Acompanhe acertos, erros e precisão ao final de cada sessão de estudo.",
  },
];

const subjects = [
  "Implantodontia",
  "Prótese Parcial Fixa",
  "Prótese Total",
  "Periodontia",
  "Radiologia",
  "Materiais Dentários",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      {/* ── Nav ── */}
      <Nav
        wide
        right={
          <>
            <Link
              href="/cadastro"
              className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors border border-[#1e2a1e] border-[0.5px] px-4 py-2 rounded-lg hover:border-[#1D9E75]"
            >
              Criar conta
            </Link>
            <Link
              href="/jogos"
              className="text-sm font-dm font-medium bg-[#1D9E75] hover:bg-[#17805e] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Começar →
            </Link>
          </>
        }
      />

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

            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Aprenda odontologia{" "}
              <span className="text-[#1D9E75]">jogando.</span>
            </h1>

            <p className="font-dm text-[#8a9e8a] text-base sm:text-lg leading-relaxed max-w-lg mb-7 sm:mb-10">
              Quizzes, drag &amp; drop e casos clínicos para você fixar
              Implantodontia, Prótese, Periodontia e mais — na dificuldade
              certa, na hora que precisar.
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
          <div className="hidden lg:block">
            <div className="border border-[#1e2a1e] border-[0.5px] rounded-2xl bg-[#111611] p-6 flex flex-col gap-4">
              <p className="text-xs font-dm text-[#4a5a4a] uppercase tracking-wider mb-1">
                Visão geral do curso
              </p>
              {[
                { label: "Implantodontia", pct: 78, color: "#1D9E75" },
                { label: "Prótese Parcial Fixa", pct: 54, color: "#1D9E75" },
                { label: "Prótese Total", pct: 31, color: "#1D9E75" },
                { label: "Periodontia", pct: 12, color: "#2a3a2a" },
                { label: "Radiologia", pct: 0, color: "#2a3a2a" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs font-dm mb-1.5">
                    <span className={item.pct > 0 ? "text-[#8a9e8a]" : "text-[#4a5a4a]"}>
                      {item.label}
                    </span>
                    <span className={item.pct > 0 ? "text-[#1D9E75]" : "text-[#4a5a4a]"}>
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-1 bg-[#1e2a1e] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${item.pct}%`, background: item.pct > 0 ? "#1D9E75" : "transparent" }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-2 pt-4 border-t border-[#1e2a1e] border-[0.5px] flex items-center justify-between">
                <div>
                  <p className="font-syne font-bold text-2xl text-[#e8f0e8]">{questions.length}</p>
                  <p className="text-xs font-dm text-[#4a5a4a]">questões disponíveis</p>
                </div>
                <div className="text-right">
                  <p className="font-syne font-bold text-2xl text-[#1D9E75]">5</p>
                  <p className="text-xs font-dm text-[#4a5a4a]">jogos</p>
                </div>
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
                key={s}
                className="border border-[#1e2a1e] border-[0.5px] rounded-full px-4 py-1.5 text-sm font-dm text-[#8a9e8a]"
              >
                {s}
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
              },
              {
                quote: "Uso antes das provas para revisar Prótese. A interface é limpa e não distrai — foco total no conteúdo.",
                name: "Rafael S.",
                role: "8° período · USP",
              },
              {
                quote: "Melhor forma de estudar no ônibus. Rápido, objetivo e com feedback imediato em cada questão.",
                name: "Bianca T.",
                role: "5° período · PUC-PR",
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
                <div className="mt-auto pt-4 border-t border-[#1e2a1e] border-[0.5px]">
                  <p className="font-syne font-bold text-sm text-[#e8f0e8]">{r.name}</p>
                  <p className="font-dm text-xs text-[#4a5a4a]">{r.role}</p>
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

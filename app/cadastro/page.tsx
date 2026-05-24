"use client";

import Link from "next/link";
import Nav from "../components/Nav";

export default function CadastroPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex flex-col">
      <Nav
        wide
        right={
          <Link href="/jogos" className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors">
            Entrar
          </Link>
        }
      />

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="font-syne font-extrabold text-3xl mb-2">Criar conta</h1>
            <p className="font-dm text-[#8a9e8a] text-sm">
              Acompanhe sua evolução e histórico de jogos.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D9E75] hover:bg-[#17805e] text-white font-dm font-medium text-sm py-3 rounded-lg transition-colors mt-2"
            >
              Criar conta
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#1e2a1e] border-[0.5px] text-center">
            <span className="text-xs font-dm text-[#4a5a4a]">
              Integração com Supabase em breve.{" "}
              <Link href="/jogos" className="text-[#1D9E75] hover:underline">
                Jogar sem conta →
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

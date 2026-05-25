"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("E-mail ou senha incorretos.");
      setLoading(false);
    } else {
      router.push("/jogos");
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide />

      <div className="max-w-sm mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <h1 className="font-syne font-extrabold text-3xl mb-2">Entrar</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">Continue de onde parou.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-dm text-[#8a9e8a] mb-2">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClass}
            />
          </div>

          {error && (
            <p className="text-sm font-dm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1D9E75] hover:bg-[#17805e] disabled:opacity-50 text-white font-dm font-medium text-sm py-3 rounded-lg transition-colors mt-2"
          >
            {loading ? "Entrando..." : "Entrar →"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#1e2a1e] border-[0.5px] text-center">
          <span className="text-xs font-dm text-[#4a5a4a]">
            Não tem conta?{" "}
            <Link href="/cadastro" className="text-[#1D9E75] hover:underline">
              Criar conta →
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}

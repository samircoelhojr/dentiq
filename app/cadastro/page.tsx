"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";
import { supabase, type UserRole } from "@/lib/supabase";

const roleOptions: { value: UserRole; label: string }[] = [
  { value: "estudante_odontologia", label: "Estudante de Odontologia" },
  { value: "estudante_outro_curso", label: "Estudante de outro curso" },
  { value: "professor", label: "Professor universitário" },
  { value: "dentista", label: "Dentista formado" },
];

const howHeardOptions = [
  { value: "redes_sociais", label: "Redes sociais (Instagram, TikTok...)" },
  { value: "indicacao", label: "Indicação de amigo ou colega" },
  { value: "google", label: "Busca no Google" },
  { value: "professor_indicou", label: "Professor indicou" },
  { value: "outro", label: "Outro" },
];

const semesterOptions = Array.from({ length: 10 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1}º período`,
}));

const inputClass =
  "w-full bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors";

export default function CadastroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<UserRole | "">("");
  const [university, setUniversity] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [howHeard, setHowHeard] = useState("");

  const showUniversity =
    role === "estudante_odontologia" ||
    role === "estudante_outro_curso" ||
    role === "professor";
  const showSemester = role === "estudante_odontologia";
  const showCourse = role === "estudante_outro_curso";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!role) {
      setError("Selecione seu cargo.");
      return;
    }
    if (!howHeard) {
      setError("Informe como você conheceu a plataforma.");
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("Erro ao criar conta.");

      const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user.id,
        full_name: fullName,
        phone: phone || null,
        role,
        university: showUniversity ? university || null : null,
        semester: showSemester && semester ? parseInt(semester) : null,
        course: showCourse ? course || null : null,
        how_heard: howHeard,
      });

      if (profileError) throw profileError;

      router.push("/jogos");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao criar conta.";
      if (msg.includes("already registered") || msg.includes("already been registered")) {
        setError("Este e-mail já está cadastrado. Tente entrar.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-8">
          <h1 className="font-syne font-extrabold text-3xl mb-2">Criar conta</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">
            Acompanhe sua evolução e evite questões repetidas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* ── Acesso ── */}
          <section className="flex flex-col gap-4">
            <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider">
              Acesso
            </p>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                Nome completo
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Seu nome completo"
                className={inputClass}
              />
            </div>
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
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                Telefone{" "}
                <span className="text-[#4a5a4a]">(opcional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(11) 99999-9999"
                className={inputClass}
              />
            </div>
          </section>

          {/* ── Perfil ── */}
          <section className="flex flex-col gap-4 pt-6 border-t border-[#1e2a1e] border-[0.5px]">
            <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider">
              Perfil
            </p>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-3">
                Qual é o seu cargo?
              </label>
              <div className="flex flex-col gap-2">
                {roleOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 border border-[0.5px] rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                      role === opt.value
                        ? "border-[#1D9E75] bg-[#0f1e16]"
                        : "border-[#1e2a1e] hover:border-[#2a3e2a]"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
                        role === opt.value ? "border-[#1D9E75]" : "border-[#4a5a4a]"
                      }`}
                    >
                      {role === opt.value && (
                        <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
                      )}
                    </span>
                    <input
                      type="radio"
                      className="hidden"
                      value={opt.value}
                      checked={role === opt.value}
                      onChange={() => setRole(opt.value)}
                    />
                    <span className="text-sm font-dm text-[#e8f0e8]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {showUniversity && (
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Universidade
                </label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Ex: USP, UFMG, PUC-PR..."
                  className={inputClass}
                />
              </div>
            )}

            {showSemester && (
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Período</label>
                <select
                  required={showSemester}
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Selecione o período</option>
                  {semesterOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showCourse && (
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Qual curso?
                </label>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Ex: Medicina, Biomedicina..."
                  className={inputClass}
                />
              </div>
            )}
          </section>

          {/* ── Como conheceu ── */}
          <section className="flex flex-col gap-4 pt-6 border-t border-[#1e2a1e] border-[0.5px]">
            <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider">
              Nos conta
            </p>
            <div>
              <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                Como você conheceu o DentIQ?
              </label>
              <select
                required
                value={howHeard}
                onChange={(e) => setHowHeard(e.target.value)}
                className={inputClass}
              >
                <option value="">Selecione uma opção</option>
                {howHeardOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {error && (
            <p className="text-sm font-dm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1D9E75] hover:bg-[#17805e] disabled:opacity-50 text-white font-dm font-medium text-sm py-3 rounded-lg transition-colors"
          >
            {loading ? "Criando conta..." : "Criar conta →"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#1e2a1e] border-[0.5px] text-center">
          <span className="text-xs font-dm text-[#4a5a4a]">
            Já tem conta?{" "}
            <Link href="/login" className="text-[#1D9E75] hover:underline">
              Entrar →
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}

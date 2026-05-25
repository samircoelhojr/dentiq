"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";
import { supabase, type Profile, type UserRole } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

const LEVELS = [
  { name: "Calouro",      min: 0,    max: 99 },
  { name: "Estudante",    min: 100,  max: 299 },
  { name: "Residente",    min: 300,  max: 699 },
  { name: "Especialista", min: 700,  max: 1499 },
  { name: "Doutor",       min: 1500, max: Infinity },
];

function getLevel(pts: number) {
  return LEVELS.find((l) => pts >= l.min && pts <= l.max) ?? LEVELS[0];
}

function getLevelProgress(pts: number) {
  const idx = LEVELS.findIndex((l) => pts >= l.min && pts <= l.max);
  if (idx === LEVELS.length - 1) return 100;
  const l = LEVELS[idx];
  return Math.round(((pts - l.min) / (l.max - l.min + 1)) * 100);
}

const roleOptions: { value: UserRole; label: string }[] = [
  { value: "estudante_odontologia", label: "Estudante de Odontologia" },
  { value: "estudante_outro_curso", label: "Estudante de outro curso" },
  { value: "professor",             label: "Professor universitário" },
  { value: "dentista",              label: "Dentista formado" },
];

const roleLabels: Record<UserRole, string> = {
  estudante_odontologia: "Estudante de Odontologia",
  estudante_outro_curso: "Estudante de outro curso",
  professor:             "Professor universitário",
  dentista:              "Dentista formado",
};

const inputClass =
  "w-full bg-[#0a0f0a] border border-[#1e2a1e] border-[0.5px] rounded-lg px-4 py-3 text-sm font-dm text-[#e8f0e8] placeholder-[#4a5a4a] focus:outline-none focus:border-[#1D9E75] transition-colors";

interface Stats {
  totalPoints: number;
  totalSessions: number;
  totalQuestions: number;
  totalCorrect: number;
}

export default function PerfilPage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [stats, setStats] = useState<Stats>({
    totalPoints: 0, totalSessions: 0, totalQuestions: 0, totalCorrect: 0,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveMsg, setSaveMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  // Edit form
  const [fullName, setFullName]   = useState("");
  const [phone, setPhone]         = useState("");
  const [role, setRole]           = useState<UserRole | "">("");
  const [university, setUniversity] = useState("");
  const [semester, setSemester]   = useState("");
  const [course, setCourse]       = useState("");

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }
      setUser(user);

      const { data: p } = await supabase
        .from("profiles").select("*").eq("id", user.id).single();

      if (p) {
        setProfile(p);
        setFullName(p.full_name);
        setPhone(p.phone ?? "");
        setRole(p.role);
        setUniversity(p.university ?? "");
        setSemester(p.semester ? String(p.semester) : "");
        setCourse(p.course ?? "");
      }

      const { data: sessions } = await supabase
        .from("quiz_sessions")
        .select("total_questions, correct_answers, points")
        .eq("user_id", user.id);

      if (sessions?.length) {
        setStats({
          totalPoints:    sessions.reduce((s, r) => s + (r.points ?? 0), 0),
          totalSessions:  sessions.length,
          totalQuestions: sessions.reduce((s, r) => s + r.total_questions, 0),
          totalCorrect:   sessions.reduce((s, r) => s + r.correct_answers, 0),
        });
      }

      setLoading(false);
    }
    load();
  }, [router]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaveMsg(null);
    setSaving(true);

    const showUniversity = role === "estudante_odontologia" || role === "estudante_outro_curso" || role === "professor";
    const showSemester   = role === "estudante_odontologia";
    const showCourse     = role === "estudante_outro_curso";

    const { error } = await supabase.from("profiles").update({
      full_name:  fullName,
      phone:      phone || null,
      role,
      university: showUniversity ? university || null : null,
      semester:   showSemester && semester ? parseInt(semester) : null,
      course:     showCourse ? course || null : null,
    }).eq("id", user!.id);

    setSaveMsg(error
      ? { type: "err", text: "Erro ao salvar. Tente novamente." }
      : { type: "ok",  text: "Dados atualizados com sucesso!" }
    );
    setSaving(false);
    if (!error) setTimeout(() => setSaveMsg(null), 3000);
  }

  async function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setUploading(true);

    const ext  = file.name.split(".").pop();
    const path = `${user.id}/avatar.${ext}`;

    const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });

    if (!error) {
      const { data } = supabase.storage.from("avatars").getPublicUrl(path);
      await supabase.from("profiles").update({ avatar_url: data.publicUrl }).eq("id", user.id);
      setProfile((p) => p ? { ...p, avatar_url: data.publicUrl } : p);
    }
    setUploading(false);
  }

  function getInitials(): string {
    if (fullName) {
      const parts = fullName.trim().split(" ");
      return parts.length > 1
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : parts[0].slice(0, 2).toUpperCase();
    }
    return (user?.email ?? "??").slice(0, 2).toUpperCase();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0a0f0a] flex items-center justify-center">
        <span className="text-[#8a9e8a] font-dm text-sm">Carregando…</span>
      </main>
    );
  }

  const level      = getLevel(stats.totalPoints);
  const nextLevel  = LEVELS[LEVELS.indexOf(level) + 1];
  const levelPct   = getLevelProgress(stats.totalPoints);
  const accuracy   = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;

  const showUniversity = role === "estudante_odontologia" || role === "estudante_outro_curso" || role === "professor";
  const showSemester   = role === "estudante_odontologia";
  const showCourse     = role === "estudante_outro_curso";

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide breadcrumbs={[{ label: "Meu perfil" }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
          <div className="relative shrink-0">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#1D9E75]"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#1D9E75] flex items-center justify-center text-2xl font-syne font-bold text-white">
                {getInitials()}
              </div>
            )}
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              title="Alterar foto"
              className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#111611] border border-[#1e2a1e] rounded-full flex items-center justify-center text-[#8a9e8a] hover:text-[#1D9E75] transition-colors text-xs"
            >
              {uploading ? "…" : "✎"}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="font-syne font-extrabold text-2xl mb-1 truncate">{fullName || user?.email}</h1>
            <p className="font-dm text-[#8a9e8a] text-sm mb-3">
              {profile ? roleLabels[profile.role] : ""}
              {profile?.university ? ` · ${profile.university}` : ""}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-dm text-[#1D9E75] border border-[#1D9E75]/30 rounded-full px-3 py-1">
                {level.name}
              </span>
              <span className="text-xs font-dm text-[#4a5a4a]">{stats.totalPoints} pts</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* ── Esquerda: stats + nível ── */}
          <div className="flex flex-col gap-6">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Pontos",   value: stats.totalPoints,   color: "text-[#1D9E75]" },
                { label: "Quizzes",  value: stats.totalSessions,  color: "text-[#e8f0e8]" },
                { label: "Questões", value: stats.totalQuestions, color: "text-[#e8f0e8]" },
                { label: "Precisão", value: `${accuracy}%`,       color: accuracy >= 70 ? "text-[#1D9E75]" : "text-[#8a9e8a]" },
              ].map((s) => (
                <div key={s.label} className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-4 flex flex-col items-center gap-1">
                  <span className={`font-syne font-extrabold text-2xl ${s.color}`}>{s.value}</span>
                  <span className="font-dm text-[#4a5a4a] text-xs">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Level progress */}
            <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-syne font-bold text-base">{level.name}</p>
                  <p className="font-dm text-[#4a5a4a] text-xs mt-0.5">
                    {nextLevel
                      ? `Próximo: ${nextLevel.name} (${nextLevel.min} pts)`
                      : "Nível máximo atingido"}
                  </p>
                </div>
                <span className="font-syne font-extrabold text-xl text-[#1D9E75]">
                  {stats.totalPoints} pts
                </span>
              </div>
              <div className="h-2 bg-[#1e2a1e] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1D9E75] rounded-full transition-all duration-700"
                  style={{ width: `${levelPct}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs font-dm text-[#4a5a4a]">
                <span>{level.min} pts</span>
                <span>{nextLevel ? `${nextLevel.min} pts` : "∞"}</span>
              </div>
            </div>

            {/* Pontos info */}
            <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6">
              <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider mb-4">
                Como ganhar pontos
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { rule: "Resposta correta",    pts: "+10 pts" },
                  { rule: "Precisão ≥ 70%",      pts: "+5 pts bônus" },
                  { rule: "Precisão ≥ 80%",      pts: "+15 pts bônus" },
                  { rule: "Precisão ≥ 90%",      pts: "+25 pts bônus" },
                ].map((r) => (
                  <div key={r.rule} className="flex items-center justify-between">
                    <span className="font-dm text-sm text-[#8a9e8a]">{r.rule}</span>
                    <span className="font-dm text-sm text-[#1D9E75] font-medium">{r.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Direita: edit form ── */}
          <div className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 self-start">
            <p className="font-syne font-semibold text-xs text-[#8a9e8a] uppercase tracking-wider mb-6">
              Dados pessoais
            </p>

            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Nome completo</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">E-mail</label>
                <input type="email" disabled value={user?.email ?? ""} className={inputClass + " opacity-40 cursor-not-allowed"} />
              </div>
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">
                  Telefone <span className="text-[#4a5a4a]">(opcional)</span>
                </label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(11) 99999-9999" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Cargo</label>
                <select value={role} onChange={(e) => setRole(e.target.value as UserRole)} className={inputClass}>
                  {roleOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              {showUniversity && (
                <div>
                  <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Universidade</label>
                  <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} placeholder="Ex: USP, UFMG..." className={inputClass} />
                </div>
              )}
              {showSemester && (
                <div>
                  <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Período</label>
                  <select value={semester} onChange={(e) => setSemester(e.target.value)} className={inputClass}>
                    <option value="">Selecione</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={String(i + 1)}>{i + 1}º período</option>
                    ))}
                  </select>
                </div>
              )}
              {showCourse && (
                <div>
                  <label className="block text-xs font-dm text-[#8a9e8a] mb-2">Qual curso?</label>
                  <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Ex: Medicina..." className={inputClass} />
                </div>
              )}

              {saveMsg && (
                <p className={`text-sm font-dm rounded-lg px-4 py-3 ${
                  saveMsg.type === "ok"
                    ? "text-[#1D9E75] bg-[#1D9E75]/10 border border-[#1D9E75]/20"
                    : "text-red-400 bg-red-400/10 border border-red-400/20"
                }`}>
                  {saveMsg.text}
                </p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-[#1D9E75] hover:bg-[#17805e] disabled:opacity-50 text-white font-dm font-medium text-sm py-3 rounded-lg transition-colors mt-2"
              >
                {saving ? "Salvando..." : "Salvar alterações"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

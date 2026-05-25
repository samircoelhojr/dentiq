"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

interface NavProps {
  breadcrumbs?: { label: string; href?: string }[];
  wide?: boolean;
  right?: React.ReactNode;
}

export default function Nav({ breadcrumbs, wide = false, right }: NavProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const maxW = wide ? "max-w-6xl" : "max-w-3xl";

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null)
    );

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setMenuOpen(false);
    router.push("/");
  }

  function getInitials(u: User): string {
    const name = u.user_metadata?.full_name as string | undefined;
    if (name) {
      const parts = name.trim().split(" ");
      return parts.length > 1
        ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
        : parts[0].slice(0, 2).toUpperCase();
    }
    return (u.email ?? "??").slice(0, 2).toUpperCase();
  }

  const defaultRight = user ? (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1D9E75] text-white text-xs font-syne font-bold hover:bg-[#17805e] transition-colors"
      >
        {getInitials(user)}
      </button>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-10 z-20 w-44 bg-[#111611] border border-[#1e2a1e] border-[0.5px] rounded-xl overflow-hidden shadow-xl">
            <Link
              href="/perfil"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] hover:bg-[#1a251a] transition-colors"
            >
              Meu perfil
            </Link>
            <Link
              href="/jogos"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] hover:bg-[#1a251a] transition-colors"
            >
              Jogos
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-3 text-sm font-dm text-[#4a5a4a] hover:text-red-400 hover:bg-[#1a251a] transition-colors border-t border-[#1e2a1e] border-[0.5px]"
            >
              Sair
            </button>
          </div>
        </>
      )}
    </div>
  ) : (
    <>
      <Link
        href="/login"
        className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors border border-[#1e2a1e] border-[0.5px] px-4 py-2 rounded-lg hover:border-[#1D9E75]"
      >
        Entrar
      </Link>
      <Link
        href="/cadastro"
        className="text-sm font-dm font-medium bg-[#1D9E75] hover:bg-[#17805e] text-white px-4 py-2 rounded-lg transition-colors"
      >
        Criar conta
      </Link>
    </>
  );

  return (
    <nav className="border-b border-[#1e2a1e] border-[0.5px]">
      <div
        className={`${maxW} mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="font-syne font-extrabold text-xl tracking-tight text-[#1D9E75] shrink-0"
          >
            Dent<span className="text-[#e8f0e8]">IQ</span>
          </Link>
          {breadcrumbs?.map((crumb, i) => (
            <span key={i} className="flex items-center gap-3 min-w-0">
              <span className="text-[#1e2a1e]">/</span>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors truncate"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-sm font-dm text-[#8a9e8a] truncate">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end shrink-0">
          {right ?? defaultRight}
        </div>
      </div>
    </nav>
  );
}

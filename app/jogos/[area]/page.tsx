"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Nav from "../../components/Nav";
import { getArea } from "@/data/areas";

export default function AreaPage() {
  const { area: areaId } = useParams<{ area: string }>();
  const area = getArea(areaId);

  if (!area) {
    return (
      <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8] flex items-center justify-center">
        <p className="font-dm text-[#8a9e8a] text-sm">Área não encontrada.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav
        wide
        breadcrumbs={[
          { label: "Jogos", href: "/jogos" },
          { label: area.shortLabel },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-10">
          <span className="text-[#1D9E75] text-3xl block mb-3">{area.icon}</span>
          <h1 className="font-syne font-extrabold text-3xl mb-2">{area.label}</h1>
          <p className="font-dm text-[#8a9e8a] text-sm">{area.description}</p>
        </div>

        <h2 className="font-syne font-bold text-lg mb-5 text-[#8a9e8a] uppercase tracking-wider text-sm">
          Disciplinas
        </h2>

        {(() => {
          const available = area.disciplinas.filter((d) => !!d.subject || !!d.gameHref);
          const comingSoon = area.disciplinas.filter((d) => !d.subject && !d.gameHref);
          return (
            <>
              {available.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {available.map((d) => (
                    <Link
                      key={d.id}
                      href={d.gameHref ?? `/jogos/${areaId}/${d.id}`}
                      className="group border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] px-5 py-4 flex items-center justify-between hover:border-[#1D9E75] transition-colors"
                    >
                      <span className="font-dm text-sm text-[#e8f0e8] group-hover:text-[#1D9E75] transition-colors">
                        {d.label}
                      </span>
                      <span className="text-[#1D9E75] text-sm opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {comingSoon.length > 0 && (
                <>
                  <p className="font-syne font-semibold text-xs text-[#4a5a4a] uppercase tracking-wider mb-3">
                    Em breve
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {comingSoon.map((d) => (
                      <div
                        key={d.id}
                        className="border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] px-5 py-4 flex items-center justify-between opacity-40"
                      >
                        <span className="font-dm text-sm text-[#8a9e8a]">{d.label}</span>
                        <span className="text-xs font-dm text-[#4a5a4a] border border-[#1e2a1e] border-[0.5px] rounded-full px-2 py-0.5 shrink-0 ml-3">
                          Em breve
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          );
        })()}

        <div className="mt-8">
          <Link
            href="/jogos"
            className="inline-flex items-center gap-2 text-sm font-dm text-[#8a9e8a] hover:text-[#e8f0e8] transition-colors"
          >
            ← Voltar às áreas
          </Link>
        </div>
      </div>
    </main>
  );
}

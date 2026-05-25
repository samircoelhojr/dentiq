"use client";

import Link from "next/link";
import Nav from "../components/Nav";
import { areas } from "@/data/areas";

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0a] text-[#e8f0e8]">
      <Nav wide breadcrumbs={[{ label: "Jogos" }]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="font-syne font-extrabold text-3xl mb-2">Área de conhecimento</h1>
        <p className="font-dm text-[#8a9e8a] text-sm mb-10">
          Selecione a área que deseja estudar.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {areas.map((area) => {
            const availableCount = area.disciplinas.filter((d) => d.subject).length;
            return (
              <Link
                key={area.id}
                href={`/jogos/${area.id}`}
                className="group border border-[#1e2a1e] border-[0.5px] rounded-xl bg-[#111611] p-6 flex flex-col gap-4 hover:border-[#1D9E75] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[#1D9E75] text-2xl">{area.icon}</span>
                  <span className="text-xs font-dm text-[#4a5a4a]">
                    {area.disciplinas.length} disciplinas
                  </span>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-lg mb-1 group-hover:text-[#1D9E75] transition-colors">
                    {area.label}
                  </h3>
                  <p className="font-dm text-[#8a9e8a] text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1e2a1e] border-[0.5px]">
                  <span className="text-xs font-dm text-[#4a5a4a]">
                    {availableCount > 0 ? (
                      <span>
                        <span className="text-[#1D9E75]">{availableCount}</span> com questões disponíveis
                      </span>
                    ) : (
                      "Em breve"
                    )}
                  </span>
                  <span className="text-xs font-dm text-[#1D9E75] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorar →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

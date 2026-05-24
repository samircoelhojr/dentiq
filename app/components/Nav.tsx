import Link from "next/link";

interface NavProps {
  breadcrumbs?: { label: string; href?: string }[];
  wide?: boolean;
  right?: React.ReactNode;
}

export default function Nav({ breadcrumbs, wide = false, right }: NavProps) {
  const maxW = wide ? "max-w-6xl" : "max-w-3xl";
  return (
    <nav className="border-b border-[#1e2a1e] border-[0.5px]">
      <div className={`${maxW} mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2`}>
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
                <span className="text-sm font-dm text-[#8a9e8a] truncate">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
        {right && (
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end shrink-0">
            {right}
          </div>
        )}
      </div>
    </nav>
  );
}

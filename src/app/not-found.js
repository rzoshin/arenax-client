import Link from "next/link";
import { HouseSimple, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#00E5A0]/40 rounded-tl-sm" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-[#00E5A0]/40 rounded-br-sm" />

      {/* Page not found badge */}
      <div className="mb-8 flex items-center gap-2 bg-[#1C1010] border border-[#E53E3E]/30 text-[#E53E3E] text-sm font-medium px-4 py-2 rounded-full">
        <span className="text-base">⚠</span>
        <span>Page not found</span>
      </div>

      {/* 404 */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[180px] font-black text-[#1C2438] leading-none tracking-tighter">
            404
          </span>
        </div>
        <span className="relative text-[180px] font-black leading-none tracking-tighter">
          <span className="text-[#1C2438]">4</span>
          <span className="text-[#00E5A0]">0</span>
          <span className="text-[#1C2438]">4</span>
        </span>
      </div>

      {/* Text */}
      <h1 className="text-white text-3xl font-bold mb-3">You&apos;re offside.</h1>
      <p className="text-[#64748B] text-center text-base max-w-sm mb-10 leading-relaxed">
        Looks like this page doesn&apos;t exist or has been moved.
        <br />
        Let&apos;s get you back on the pitch.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-transparent border border-[#2D3748] text-white font-semibold text-sm hover:border-[#00E5A0] hover:text-[#00E5A0] transition-all duration-300"
        >
          <HouseSimple size={18} weight="bold" />
          Back to Home
        </Link>
        <Link
          href="/facilities"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-transparent border border-[#2D3748] text-white font-semibold text-sm hover:border-[#00E5A0] hover:text-[#00E5A0] transition-all duration-300"
        >
          <MagnifyingGlass size={18} weight="bold" />
          Browse Facilities
        </Link>
      </div>

      {/* Bottom soccer ball */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-16 h-px bg-[#2D3748]" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 6.32 2.26L12 8.5 5.68 4.26A10 10 0 0 1 12 2Z" />
          <path d="m5.68 4.26-2.3 7.08L8 15.5l4-1.5 4 1.5 4.62-4.16-2.3-7.08" />
          <path d="M8 15.5 6.5 22M16 15.5l1.5 6.5M12 7v5.5" />
        </svg>
      </div>
    </div>
  );
}

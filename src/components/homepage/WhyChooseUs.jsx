"use client";
import { Trophy, Lightning, ShieldCheck, Clock } from "@phosphor-icons/react";

const STATS = [
  { value: "150+", label: "Venues Live" },
  { value: "12K+", label: "Bookings Made" },
  { value: "98%", label: "Confirmed On Time" },
  { value: "8", label: "Sports Covered" },
];

const REASONS = [
  {
    Icon: Lightning,
    title: "Instant Confirmation",
    body:
      "No waiting, no phone calls. Book a slot and get real-time confirmation in under 60 seconds — any time of day.",
  },
  {
    Icon: ShieldCheck,
    title: "Verified Venues Only",
    body:
      "Every facility on ArenaX is inspected and verified. You always know exactly what you're booking before you show up.",
  },
  {
    Icon: Clock,
    title: "Flexible Time Slots",
    body:
      "Early morning runs or late-night sessions — browse live availability and lock in the time that fits your schedule.",
  },
  {
    Icon: Trophy,
    title: "Built for Winners",
    body:
      "From casual weekend kickabouts to competitive league matches, ArenaX scales with your ambition and your team.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Faint grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00E5A0 1px, transparent 1px), linear-gradient(90deg, #00E5A0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
            <span className="text-[#00E5A0] text-xs font-bold uppercase tracking-[0.15em]">
              Why ArenaX
            </span>
          </div>
          <h2 className="font-black leading-tight tracking-tighter"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            The Smarter Way to{" "}
            <span className="text-[#00E5A0]">Play</span>
          </h2>
          <p className="text-[#64748B] mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Thousands of players across Bangladesh trust ArenaX to find, book,
            and show up — every single week.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-14">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className=" py-8 flex flex-col items-center justify-center gap-1 hover:bg-[#0F1620] transition-colors duration-300"
            >
              <span className="text-[#00E5A0] font-black leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {value}
              </span>
              <span className="text-[#64748B] text-sm uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group border rounded-3xl p-6 hover:border-[#00E5A0]/30 hover:shadow-xl hover:shadow-[#00E5A0]/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#00E5A0]/10 flex items-center justify-center mb-5 group-hover:bg-[#00E5A0]/20 transition-colors duration-300">
                <Icon size={22} weight="bold" className="text-[#00E5A0]" />
              </div>
              <h3 className="font-bold text-base mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

"use client";

import { motion } from "motion/react";
import Link from "next/link";

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

// ── Ball path keyframes ───────────────────────────────────────────────────────
const BALL_PATH = {
  x: ["9%", "53%", "85%", "53%", "9%"],
  y: ["50%", "22%", "50%", "78%", "50%"],
};

const BALL_TRANSITION = {
  duration: 3.5,
  repeat: Infinity,
  ease: [0.4, 0, 0.2, 1],
  times: [0, 0.25, 0.5, 0.75, 1],
};

const TRAILS = [
  { size: 12, opacity: 0.35, delay: -0.06 },
  { size: 8,  opacity: 0.18, delay: -0.12 },
  { size: 5,  opacity: 0.08, delay: -0.18 },
];

// ── Pitch SVG — larger, more visible lines ────────────────────────────────────
function FootballPitch() {
  return (
    <svg
      width="480"
      height="400"
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0"
    >
      {/* Outer boundary */}
      <rect x="24" y="24" width="432" height="352" rx="5"
        stroke="rgba(0,229,160,0.18)" strokeWidth="1.5" />

      {/* Halfway line */}
      <line x1="240" y1="24" x2="240" y2="376"
        stroke="rgba(0,229,160,0.12)" strokeWidth="1" />

      {/* Centre circle */}
      <circle cx="240" cy="200" r="56"
        stroke="rgba(0,229,160,0.14)" strokeWidth="1.5" />
      <circle cx="240" cy="200" r="4"
        fill="rgba(0,229,160,0.28)" />

      {/* Penalty areas */}
      <rect x="24" y="144" width="80" height="112" rx="3"
        stroke="rgba(0,229,160,0.11)" strokeWidth="1" />
      <rect x="376" y="144" width="80" height="112" rx="3"
        stroke="rgba(0,229,160,0.11)" strokeWidth="1" />

      {/* Goal mouths */}
      <rect x="24" y="168" width="28" height="64" rx="2"
        stroke="rgba(255,75,43,0.16)" strokeWidth="1" />
      <rect x="428" y="168" width="28" height="64" rx="2"
        stroke="rgba(255,75,43,0.16)" strokeWidth="1" />

      {/* Penalty spot arcs */}
      <circle cx="104" cy="200" r="28"
        stroke="rgba(0,229,160,0.07)" strokeWidth="1" />
      <circle cx="376" cy="200" r="28"
        stroke="rgba(0,229,160,0.07)" strokeWidth="1" />

      {/* Corner arcs */}
      <path d="M24 40 Q40 24 56 24"
        stroke="rgba(0,229,160,0.10)" strokeWidth="1" fill="none" />
      <path d="M424 24 Q456 24 456 56"
        stroke="rgba(0,229,160,0.10)" strokeWidth="1" fill="none" />
      <path d="M24 360 Q24 376 40 376"
        stroke="rgba(0,229,160,0.10)" strokeWidth="1" fill="none" />
      <path d="M456 360 Q456 376 440 376"
        stroke="rgba(0,229,160,0.10)" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: "90vh",
        maxHeight: "800px",
        background: "#0D1520",
      }}
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0,229,160,0.045) 0%, rgba(0,229,160,0.012) 40%, transparent 70%)",
        }}
      />

      {/* ── Pitch + ball (right side, larger) ── */}
      <motion.div
        className="absolute right-30 top-1/2 -translate-y-1/2"
        style={{ width: 550, height: 400 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative w-full h-full">
          <FootballPitch />

          {/* Mint trail dots */}
          {TRAILS.map((trail, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#00E5A0] -translate-x-1/2 -translate-y-1/2"
              style={{ width: trail.size, height: trail.size, opacity: trail.opacity }}
              animate={BALL_PATH}
              transition={{ ...BALL_TRANSITION, delay: trail.delay }}
            />
          ))}

          {/* The ball */}
          <motion.div
            className="absolute w-5 h-5 rounded-full bg-[#F1F5F9] border-2 border-[#CBD5E1] shadow-[0_0_8px_rgba(241,245,249,0.5)] -translate-x-1/2 -translate-y-1/2"
            animate={BALL_PATH}
            transition={BALL_TRANSITION}
          />
        </div>
      </motion.div>

      {/* ── Left fade overlay — softer, wider ── */}
      <div
        className="absolute inset-y-0 left-0 w-[65%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #0D1520 45%, rgba(13,21,32,0.75) 75%, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0D1520, transparent)",
        }}
      />

      {/* ── Corner accents ── */}
      <motion.div
        className="absolute top-5 left-5 w-10 h-10 border-t border-l border-[rgba(0,229,160,0.2)] pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
      />
      <motion.div
        className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-[rgba(0,229,160,0.2)] pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.95 }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col px-20 sm:px-14 lg:px-20 max-w-xl">

        {/* Badge */}
        <motion.div
          className="self-start mb-6 flex items-center gap-2 rounded-full border border-[rgba(0,229,160,0.18)] bg-[rgba(0,229,160,0.07)] px-4 py-1.5"
          {...fadeUp(0)}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#00E5A0] flex-shrink-0"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00E5A0] whitespace-nowrap">
            150+ Venues Live Now
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <motion.h1
          className="mb-5 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.035em]"
          variants={headlineContainer}
          initial="hidden"
          animate="show"
        >
          <span className="flex gap-x-4 mb-1">
            {["Book", "Your"].map((w) => (
              <motion.span key={w} variants={wordVariants} className="inline-block text-[#E8EFF8]">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="flex gap-x-4">
            {["Dream", "Arena"].map((w) => (
              <motion.span key={w} variants={wordVariants} className="inline-block text-[#00E5A0]">
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subheading — brighter, more readable */}
        <motion.p
          className="mb-9 max-w-sm text-sm sm:text-base leading-relaxed text-[#7B90A8]"
          {...fadeUp(0.5)}
        >
          Football turfs, badminton courts, swimming lanes — real-time slots,
          instant confirmation across Bangladesh.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="flex flex-wrap items-center gap-3" {...fadeUp(0.65)}>
          <Link
            href="/facilities"
            className="flex items-center gap-2 rounded-[10px] bg-[#00E5A0] px-6 py-3 text-sm font-bold text-[#0D1520] hover:bg-[#00f0a8] active:scale-[0.98] transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            Explore Facilities
          </Link>

          <Link
            href="/about"
            className="rounded-[10px] border border-[#1E2D40] px-6 py-3 text-sm font-medium text-[#7B90A8] hover:border-[#2A3F58] hover:text-[#A8BDD0] transition-colors duration-200"
          >
            Watch Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
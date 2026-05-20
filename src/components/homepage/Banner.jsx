"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

const BALL_PATH = {
  x: ["5%", "50%", "95%", "50%", "5%"],
  y: ["50%", "6%", "50%", "94%", "50%"],
};

const BALL_TRANSITION = {
  duration: 4,
  repeat: Infinity,
  ease: [0.4, 0, 0.2, 1],
  times: [0, 0.25, 0.5, 0.75, 1],
};

const TRAILS = [
  { size: 12, opacity: 0.35, delay: -0.07 },
  { size: 8,  opacity: 0.18, delay: -0.14 },
  { size: 5,  opacity: 0.08, delay: -0.21 },
];

// ── Theme-aware pitch colors ──────────────────────────────────────────────────
function getPitchColors(isDark) {
  return {
    field:     isDark ? "rgba(0,229,160,0.40)"  : "rgba(0,160,110,0.35)",
    line:      isDark ? "rgba(0,229,160,0.28)"  : "rgba(0,140,95,0.28)",
    circle:    isDark ? "rgba(0,229,160,0.32)"  : "rgba(0,140,95,0.30)",
    dot:       isDark ? "rgba(0,229,160,0.60)"  : "rgba(0,140,95,0.55)",
    box:       isDark ? "rgba(0,229,160,0.28)"  : "rgba(0,140,95,0.25)",
    goal:      isDark ? "rgba(255,75,43,0.45)"  : "rgba(210,55,20,0.40)",
    arc:       isDark ? "rgba(0,229,160,0.16)"  : "rgba(0,140,95,0.14)",
    corner:    isDark ? "rgba(0,229,160,0.25)"  : "rgba(0,140,95,0.22)",
    penalty:   isDark ? "rgba(0,229,160,0.50)"  : "rgba(0,140,95,0.45)",
  };
}

function FootballPitch({ isDark }) {
  const c = getPitchColors(isDark);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="24" y="24" width="432" height="352" rx="5" stroke={c.field} strokeWidth="1.5" />
      <line x1="240" y1="24" x2="240" y2="376" stroke={c.line} strokeWidth="1" />
      <circle cx="240" cy="200" r="56" stroke={c.circle} strokeWidth="1.5" />
      <circle cx="240" cy="200" r="4" fill={c.dot} />
      <rect x="24" y="144" width="80" height="112" rx="3" stroke={c.box} strokeWidth="1" />
      <rect x="376" y="144" width="80" height="112" rx="3" stroke={c.box} strokeWidth="1" />
      <rect x="24" y="168" width="28" height="64" rx="2" stroke={c.goal} strokeWidth="1.2" />
      <rect x="428" y="168" width="28" height="64" rx="2" stroke={c.goal} strokeWidth="1.2" />
      <circle cx="104" cy="200" r="28" stroke={c.arc} strokeWidth="1" />
      <circle cx="376" cy="200" r="28" stroke={c.arc} strokeWidth="1" />
      <path d="M24 40 Q40 24 56 24"   stroke={c.corner} strokeWidth="1" fill="none" />
      <path d="M424 24 Q456 24 456 56" stroke={c.corner} strokeWidth="1" fill="none" />
      <path d="M24 360 Q24 376 40 376" stroke={c.corner} strokeWidth="1" fill="none" />
      <path d="M456 360 Q456 376 440 376" stroke={c.corner} strokeWidth="1" fill="none" />
      <circle cx="88"  cy="200" r="2.5" fill={c.penalty} />
      <circle cx="392" cy="200" r="2.5" fill={c.penalty} />
    </svg>
  );
}

// ── Theme-aware design tokens ─────────────────────────────────────────────────
function getTokens(isDark) {
  return {
    bg:           isDark ? "#0D1520"              : "#EEF7F3",
    bgGradLeft:   isDark
      ? "linear-gradient(to right, #0D1520 0%, #0D1520 40%, rgba(13,21,32,0.5) 75%, transparent 100%)"
      : "linear-gradient(to right, #EEF7F3 0%, #EEF7F3 40%, rgba(238,247,243,0.6) 72%, transparent 100%)",
    bgFadeBottom: isDark
      ? "linear-gradient(to top, #0D1520, transparent)"
      : "linear-gradient(to top, #EEF7F3, transparent)",
    mobileDim:    isDark ? "rgba(13,21,32,0.68)" : "rgba(238,247,243,0.72)",
    pillBorder:   isDark ? "rgba(0,229,160,0.25)" : "rgba(0,160,110,0.30)",
    pillBg:       isDark ? "rgba(0,229,160,0.10)" : "rgba(0,160,110,0.08)",
    pillText:     isDark ? "#00E5A0"              : "#00916A",
    pillDot:      isDark ? "#00E5A0"              : "#00916A",
    headlineWhite:isDark ? "#E8EFF8"              : "#1A2016",
    headlineGreen:isDark ? "#00E5A0"              : "#007A55",
    subText:      isDark ? "#7B90A8"              : "#5A7060",
    cornerBorder: isDark ? "rgba(0,229,160,0.3)"  : "rgba(0,140,95,0.35)",
    watchBorder:  isDark ? "#1E2D40"              : "#B8D4C4",
    watchText:    isDark ? "#7B90A8"              : "#5A7060",
    watchHoverBorder: isDark ? "#2A3F58"          : "#8ABAA4",
    watchHoverText:   isDark ? "#A8BDD0"          : "#2D5040",
    ballBg:       isDark ? "#F1F5F9"              : "#FFFFFF",
    ballBorder:   isDark ? "#CBD5E1"              : "#A0C8B0",
    ballGlow:     isDark
      ? "0 0 12px rgba(241,245,249,0.7), 0 0 4px rgba(0,229,160,0.5)"
      : "0 0 12px rgba(180,230,200,0.6), 0 0 4px rgba(0,160,110,0.4)",
    trailColor:   isDark ? "#00E5A0"              : "#00916A",
  };
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Use dark as default until mounted (avoids flash)
  const isDark = !mounted || resolvedTheme !== "light";
  const t = getTokens(isDark);

  return (
    <section
      className="relative w-full overflow-hidden min-h-[90vh] transition-colors duration-300"
      style={{ backgroundColor: t.bg }}
    >
      {/* ── Pitch + Ball ── */}
      <motion.div
        className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[58%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative w-full h-full">
          <FootballPitch isDark={isDark} />

          {TRAILS.map((trail, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: trail.size,
                height: trail.size,
                opacity: trail.opacity,
                translateX: "-50%",
                translateY: "-50%",
                backgroundColor: t.trailColor,
              }}
              animate={BALL_PATH}
              transition={{ ...BALL_TRANSITION, delay: trail.delay }}
            />
          ))}

          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 20,
              height: 20,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: "50%",
              border: `2px solid ${t.ballBorder}`,
              background: t.ballBg,
              boxShadow: t.ballGlow,
            }}
            animate={BALL_PATH}
            transition={BALL_TRANSITION}
          />
        </div>
      </motion.div>

      {/* ── Overlays ── */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: t.mobileDim }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden md:block"
        style={{ width: "55%", background: t.bgGradLeft }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{ background: t.bgFadeBottom }}
      />

      {/* ── Corner accents ── */}
      <motion.div
        className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t sm:h-10 sm:w-10 sm:left-5 sm:top-5"
        style={{ borderColor: t.cornerBorder }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r sm:h-10 sm:w-10 sm:bottom-5 sm:right-5"
        style={{ borderColor: t.cornerBorder }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.95 }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="flex w-full flex-col px-6 py-20 sm:px-10 md:px-14 lg:px-20 md:max-w-xl lg:max-w-2xl">

          {/* Pill badge */}
          <motion.div
            className="mb-5 self-start flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4"
            style={{ border: `1px solid ${t.pillBorder}`, background: t.pillBg }}
            {...fadeUp(0)}
          >
            <motion.span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: t.pillDot }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <span
              className="text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap sm:text-xs"
              style={{ color: t.pillText }}
            >
              150+ Venues Live Now
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-7xl"
            variants={headlineContainer}
            initial="hidden"
            animate="show"
          >
            <span className="flex gap-x-3 mb-1 sm:gap-x-4">
              {["Book", "Your"].map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariants}
                  className="inline-block"
                  style={{ color: t.headlineWhite }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="flex gap-x-3 sm:gap-x-4">
              {["Dream", "Arena"].map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariants}
                  className="inline-block"
                  style={{ color: t.headlineGreen }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mb-8 max-w-xs text-sm leading-relaxed sm:max-w-sm sm:text-base"
            style={{ color: t.subText }}
            {...fadeUp(0.5)}
          >
            Football turfs, badminton courts, swimming lanes — real-time slots,
            instant confirmation across Bangladesh.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap items-center gap-3" {...fadeUp(0.65)}>
            <Link
              href="/facilities"
              className="flex items-center gap-2 rounded-[10px] px-5 py-2.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] sm:px-6 sm:py-3"
              style={{ backgroundColor: t.pillDot, color: "#0D1520" }}
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
              className="rounded-[10px] px-5 py-2.5 text-sm font-medium transition-colors duration-200 sm:px-6 sm:py-3"
              style={{
                border: `1px solid ${t.watchBorder}`,
                color: t.watchText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.watchHoverBorder;
                e.currentTarget.style.color = t.watchHoverText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.watchBorder;
                e.currentTarget.style.color = t.watchText;
              }}
            >
              Watch Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";

const ABOUT_CARDS = [
  {
    number: "01",
    title: "Born from the Field",
    body:
      "ArenaX was built by athletes who were tired of calling around, showing up to locked courts, and losing weekends to bad booking systems. We created the platform we always wished existed — instant, reliable, real.",
  },
  {
    number: "02",
    title: "Every Sport, One Place",
    body:
      "From floodlit football turfs in Uttara to Olympic-grade swimming pools in Dhanmondi — ArenaX brings every type of venue under a single roof. No more app-switching, no more guesswork.",
  },
  {
    number: "03",
    title: "Community at the Core",
    body:
      "We don't just connect players to pitches. We're building a sports culture in Bangladesh — where facilities thrive, bookings are effortless, and every game gets played.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#ff4b2bb4] relative overflow-hidden py-24 px-4">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Large watermark text */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter pr-4 hidden lg:block">
        ARENA
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left — label */}
          <div className="lg:w-56 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/60" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </div>
            <h2
              className="text-white font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              ABOUT
              <br />
              US
            </h2>
            {/* Decorative line */}
            <div className="mt-6 w-12 h-1.5 bg-white rounded-full" />
          </div>

          {/* Right — cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CARDS.map((card) => (
              <div
                key={card.number}
                className="group relative bg-white/10 border border-white/20 rounded-3xl p-7 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                {/* Number */}
                <span className="text-white/25 text-5xl font-black leading-none block mb-5 group-hover:text-white/40 transition-colors duration-300">
                  {card.number}
                </span>
                {/* Title */}
                <h3 className="text-white text-lg font-bold mb-3 leading-snug">
                  {card.title}
                </h3>
                {/* Body */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {card.body}
                </p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-px bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

"use client";
import React from "react";

const ABOUT_CARDS = [
  {
    number: "01",
    title: "Born from the Field",
    body: "ArenaX was built by athletes who were tired of calling around, showing up to locked courts, and losing weekends to bad booking systems. We created the platform we always wished existed — instant, reliable, real.",
    position: "bottom-left",
  },
  {
    number: "02",
    title: "Every Sport, One Place",
    body: "From floodlit football turfs in Uttara to Olympic-grade swimming pools in Dhanmondi — ArenaX brings every type of venue under a single roof. No more app-switching, no more guesswork.",
    position: "top-center",
  },
  {
    number: "03",
    title: "Community at the Core",
    body: "We don't just connect players to pitches. We're building a sports culture in Bangladesh — where facilities thrive, bookings are effortless, and every game gets played.",
    position: "bottom-right",
  },
];

const zigzagClass = {
  "bottom-left":  "lg:absolute lg:left-0 lg:bottom-0",
  "top-center":   "lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0",
  "bottom-right": "lg:absolute lg:right-0 lg:bottom-0",
};

const AboutUs = () => {
  return (
    <section
      className="bg-gray-50 dark:bg-[#0A0E1A] relative overflow-hidden py-20 px-4 min-h-[80vh]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Watermark */}
      <span
        className="absolute right-0 bottom-10 text-[180px] font-black leading-none select-none pointer-events-none tracking-tighter pr-4 hidden lg:block
          text-black/3 dark:text-[#00E5A0]/4"
      >
        ARENA
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — label + heading */}
          <div className="lg:w-56 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#007A55] dark:bg-[#00E5A0] opacity-70" />
              <span className="text-[#007A55] dark:text-[#00E5A0] text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                Who We Are
              </span>
            </div>
            <h2
              className="text-gray-900 dark:text-[#E2E8F0] font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              ABOUT
              <br />
              US
            </h2>
            <div className="mt-6 w-12 h-1.5 bg-[#007A55] dark:bg-[#00E5A0] rounded-full" />
          </div>

          {/* Right — zigzag cards */}
          <div
            className="flex-1 w-[80%] flex flex-col gap-4 lg:relative lg:flex-none lg:block"
          >
            <style>{`
              @media (min-width: 1024px) {
                .zigzag-container { height: 380px; }
              }
            `}</style>

            <div className="zigzag-container flex flex-col lg:block gap-4 lg:gap-0 relative w-full">
              {ABOUT_CARDS.map((card) => (
                <div
                  key={card.number}
                  className={[
                    "group",
                    "w-full md:w-auto lg:w-[31%]",
                    zigzagClass[card.position],
                    // Light: white card with gray border
                    // Dark: #111827 card with mint border
                    "bg-white dark:bg-[#111827]",
                    "border border-gray-200 dark:border-[#00E5A0]/15",
                    "hover:border-[#007A55]/40 dark:hover:border-[#00E5A0]/40",
                    "hover:bg-gray-50 dark:hover:bg-[#1C2438]",
                    "rounded-3xl p-6 md:p-7",
                    "transition-all duration-300",
                    "relative overflow-hidden",
                  ].join(" ")}
                >
                  {/* Number — dark mint outline on light, bright mint outline on dark */}
                  <span
                    className="text-4xl md:text-5xl font-black leading-none block mb-4 md:mb-5
                      text-transparent"
                    style={{
                      WebkitTextStroke: "1.5px",
                      // CSS variable trick so Tailwind dark mode can control stroke color
                    }}
                  >
                    <span
                      className="[--stroke:#007A55] dark:[--stroke:#00E5A0]"
                      style={{ WebkitTextStroke: "1.5px var(--stroke)" }}
                    >
                      {card.number}
                    </span>
                  </span>

                  <h3 className="text-gray-900 dark:text-[#E2E8F0] text-sm md:text-base font-bold mb-2 md:mb-3 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {card.body}
                  </p>

                  {/* Arena Red bottom accent on hover */}
                  <div className="absolute bottom-0 left-6 right-6 lg:left-7 lg:right-7 h-px bg-[#FF4B2B] rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
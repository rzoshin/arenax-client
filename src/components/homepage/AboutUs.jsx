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

// Zigzag offsets only apply on lg+; on smaller screens cards stack normally
const zigzagClass = {
  "bottom-left":  "lg:absolute lg:left-0 lg:bottom-0",
  "top-center":   "lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0",
  "bottom-right": "lg:absolute lg:right-0 lg:bottom-0",
};

const AboutUs = () => {
  return (
    <section
      className="bg-[#e95f50f9] dark:bg-[#c0392b] relative overflow-hidden py-20 px-4"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Watermark */}
      <span className="absolute right-0 bottom-10 text-[180px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter pr-4 hidden lg:block">
        ARENA
      </span>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — label + heading */}
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
            <div className="mt-6 w-12 h-1.5 bg-white rounded-full" />
          </div>

          {/* Right — zigzag on lg, stacked on smaller */}
          <div
            className={[
              "flex-1 w-full",
              // Mobile / tablet: normal flex column
              "flex flex-col gap-4",
              // Large: switch to relative container with absolute-positioned cards
              "lg:relative lg:flex-none lg:block",
            ].join(" ")}
            // Height only matters when cards are absolutely positioned (lg+)
            style={{ "--lg-h": "380px" }}
          >
            {/* Inject lg height via a small style tag so it only applies at lg */}
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
                    // Mobile: full width; md: side-by-side; lg: absolute zigzag
                    "w-full md:w-auto",
                    "lg:w-[31%]",
                    zigzagClass[card.position],
                    "bg-white/10 border border-white/20 rounded-3xl p-6 md:p-7",
                    "backdrop-blur-sm",
                    "hover:bg-black/20 hover:border-white/40",
                    "transition-all duration-300",
                    "relative", // needed for the hover underline pseudo
                  ].join(" ")}
                >
                  <span className="text-white text-4xl md:text-5xl font-black leading-none block mb-4 md:mb-5">
                    {card.number}
                  </span>
                  <h3 className="text-white text-sm md:text-base font-bold mb-2 md:mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {card.body}
                  </p>
                  <div className="absolute bottom-0 left-6 right-6 lg:left-7 lg:right-7 h-px bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-full" />
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

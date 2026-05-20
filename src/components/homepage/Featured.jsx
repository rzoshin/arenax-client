import FeaturedCarousel from "./FeaturedCarousel";

const Featured = async () => {
  const res = await fetch("http://localhost:8000/facilities", {
    cache: "no-store",
  });
  const facilities = await res.json();
  const featuredFacilities = facilities.slice(0, 6);

  return (
    <section className="bg-[#0D1321] py-24 px-4 relative overflow-hidden">
      {/* Subtle teal glow top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00E5A0]/5 blur-3xl pointer-events-none" />
      {/* Subtle glow bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#00E5A0]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
              <span className="text-[#00E5A0] text-xs font-bold uppercase tracking-[0.15em]">
                Top Picks
              </span>
            </div>
            <h2
              className="text-white font-black leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Featured{" "}
              <span className="text-[#00E5A0]">Facilities</span>
            </h2>
            <p className="text-[#64748B] mt-3 max-w-md text-base leading-relaxed">
              Hand-picked venues across Bangladesh — rated highly by players,
              ready to book right now.
            </p>
          </div>

          {/* Right — divider line + label */}
          <div className="hidden md:flex items-center gap-4 pb-1">
            <div className="w-24 h-px bg-[#1C2438]" />
            <span className="text-[#64748B] text-sm whitespace-nowrap">
              Swipe to explore
            </span>
          </div>
        </div>

        {/* Carousel */}
        <FeaturedCarousel facilities={featuredFacilities} />
      </div>
    </section>
  );
};

export default Featured;

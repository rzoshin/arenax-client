"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import FacilityCard from "../facilities/FacilityCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCarousel = ({ facilities }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {facilities.map((facility) => (
            <div
              key={facility._id}
              className="flex-none w-[calc((100%-2*1.5rem)/3)]" // 3 cards minus 2 gaps
            >
              <FeaturedCard facility={facility} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute -left-7 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border text-primary flex items-center justify-center hover:text-accent transition-colors"
        aria-label="Previous"
      >
        <ArrowLeftIcon size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-7 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border text-primary flex items-center justify-center hover:text-accent transition-colors"
        aria-label="Next"
      >
        <ArrowRightIcon size={24} />
      </button>
    </div>
  );
};

export default FeaturedCarousel;
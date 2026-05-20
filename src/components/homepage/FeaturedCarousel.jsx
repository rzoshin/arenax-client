"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import FeaturedCard from "./FeaturedCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const FeaturedCarousel = ({ facilities }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-5 lg:gap-6">
          {facilities.map((facility) => (
            <div
              key={facility._id}
              className="flex-none w-[85%] sm:w-[calc((100%-1*1.25rem)/2)] lg:w-[calc((100%-2*1.5rem)/3)]"
              // mobile: 1 card (85% so next card peeks)
              // sm:    2 cards minus 1 gap
              // lg:    3 cards minus 2 gaps
            >
              <FeaturedCard facility={facility} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 sm:-left-2 lg:-left-7 top-1/2 -translate-y-1/2 z-10
                   w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                   rounded-full bg-card border border-border text-primary
                   flex items-center justify-center hover:text-accent transition-colors"
        aria-label="Previous"
      >
        <ArrowLeftIcon size={20} />
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        className="absolute right-0 sm:-right-2 lg:-right-7 top-1/2 -translate-y-1/2 z-10
                   w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10
                   rounded-full bg-card border border-border text-primary
                   flex items-center justify-center hover:text-accent transition-colors"
        aria-label="Next"
      >
        <ArrowRightIcon size={20} />
      </button>
    </div>
  );
};

export default FeaturedCarousel;

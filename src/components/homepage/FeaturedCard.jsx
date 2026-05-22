"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import { ArrowUpRightIcon, MapPinIcon} from "@phosphor-icons/react";

const FeaturedCard = ({ facility }) => {
  const {
    _id,
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
  } = facility;

  return (
    <Card
      className="
        group
        border border-[#E2E8F0] dark:border-[#1C2438]
        bg-white dark:bg-[#111827]
        rounded-3xl overflow-hidden
        hover:border-[#00E5A0]/40
        hover:shadow-2xl hover:shadow-[#00E5A0]/10
        transition-all duration-300
        flex flex-col
      "
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={facilityName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* Location chip */}
        <Chip
          size="sm"
          className="absolute left-3 top-3 bg-white/10 backdrop-blur-md text-[#E2E8F0] border border-white/10"
          
        >
          {location}
        </Chip>

        {/* Facility type badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#00E5A0] text-[#0A0E1A] text-xs font-bold uppercase tracking-wider">
          {facilityType}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <h3 className="text-[#0F172A] dark:text-[#E2E8F0] text-2xl font-bold leading-snug mb-3 line-clamp-1 transition-colors duration-300">
          {facilityName}
        </h3>

        {/* Footer */}
        <div className="mt-auto pt-5 border-t border-[#E2E8F0] dark:border-[#1C2438] flex items-center justify-between transition-colors duration-300">

          {/* Price */}
          <div>
            <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-0.5">
              Starting From
            </p>
            <h4 className="text-[#0F172A] dark:text-[#E2E8F0] text-2xl font-bold transition-colors duration-300">
              ৳ {pricePerHour}
              <span className="text-sm text-[#64748B] font-normal">/hour</span>
            </h4>
          </div>

          {/* Button */}
          <Link href={`/facilities/${_id}`}>
            <Button
              className="bg-[#00E5A0] text-[#0A0E1A] font-semibold rounded-xl px-5 hover:scale-105 transition-transform"
              endContent={<ArrowUpRightIcon size={18} />}
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedCard;
"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import { ArrowUpRightIcon, MapPinAreaIcon, PinwheelIcon } from "@phosphor-icons/react";
const FacilityCard = ({ facility }) => {
  const {
    _id,
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlots,
    description,
  } = facility;
  return (
    <Card className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col">
      <div className='relative w-full aspect-video overflow-hidden'>
        <Image
            src={image}
            alt={facilityName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='rounded-xl object-cover'
            />
            <Chip size="sm" color="default" className='absolute left-2 top-2'>{location}</Chip>
        </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs text-indigo-400 font-medium uppercase tracking-wide">
          {facilityType}
        </span>
        <h3 className="font-bold text-[#002f5f] text-base leading-snug line-clamp-2">
          {facilityName}
        </h3>
        <p>{description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <span className="text-sm font-medium text-gray-700">$ {pricePerHour}</span>
          {/* <Link href={`/facilities/${id}`} className="text-xs text-gray-400"> */}
            <Button>
              View Details
              <ArrowUpRightIcon />
            </Button>
          {/* </Link> */}
        </div>
      </div>
    </Card>
  );
};

export default FacilityCard;

// import { ArrowDownToLine, ArrowUpRight } from "@gravity-ui/icons";
// import { Button } from "@heroui/react";


// const CourseCard = ({ course }) => {
//   const levelColor = {
//   Beginner: "bg-green-50 text-green-700 border-green-200",
//   Intermediate: "bg-yellow-50 text-yellow-700 border-yellow-200",
//   Advanced: "bg-red-50 text-red-700 border-red-200",
// };
//   const { id, title, instructor, rating, level, duration, category, image } = course;
//   return (

//   );
// };

// export default CourseCard;

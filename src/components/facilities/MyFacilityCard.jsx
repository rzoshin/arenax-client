"use client";

import {
  UserIcon,
  ImagesIcon,
  PencilIcon,
  TrashIcon,
  MapPinIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@heroui/react";

export function MyFacilityCard({ facility}) {
  const {
    _id,
    facilityName,
    facilityType,
    description,
    pricePerHour,
    location,
    capacity,
    image
  } = facility;

  return (
    <>
      <article className="group relative flex overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
        {/* Top gradient bar on hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-emerald-400 to-orange-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative w-44 shrink-0 overflow-hidden bg-[#1C2438]">
          {image ? (
            <Image
              src={image}
              alt={facilityName}
              width={200}
              height={100}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-600">
              <ImagesIcon size={40} weight="thin" />
            </div>
          )}
          <span className="absolute left-2 top-2 rounded bg-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0A0E1A]">
            Active
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-1 overflow-hidden px-5 py-4">
          {facilityType && (
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              {facilityType}
            </span>
          )}
          <h3 className="truncate text-xl font-bold text-slate-100">
            {facilityName}
          </h3>
          {description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          )}

          <div className="mt-1 flex flex-wrap gap-3">
            {location && (
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <MapPinIcon size={13} /> {location}
              </span>
            )}
            {capacity && (
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <UserIcon size={13} /> Capacity: {capacity}
              </span>
            )}
          </div>

          <div className="mt-2 inline-flex w-fit items-baseline gap-1 rounded-md border border-white/10 bg-[#1C2438] px-3 py-1">
            <span className="text-lg font-bold text-emerald-400">
              ৳{Number(pricePerHour).toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-500">/ hr</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-col justify-center gap-2 px-4 py-4">
          <Button
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1C2438] px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#0A0E1A]"
          >
            <PencilIcon size={13} /> Update
          </Button>
          <Button
            className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-transparent px-4 py-2 text-xs font-semibold text-red-500 transition-colors hover:bg-red-500 hover:text-white"
          >
            <TrashIcon size={13} /> Delete
          </Button>
        </div>
      </article>
    </>
  );
}

export default MyFacilityCard;

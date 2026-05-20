"use client";

import { Chip } from "@heroui/react";

import {
  BuildingsIcon,
  CalendarBlankIcon,
  ClockIcon,
  TimerIcon,
} from "@phosphor-icons/react";

import Image from "next/image";
import { CancelBooking } from "../modals/CancelBooking";

export function MyBookingCard({ booking }) {
  const {
    facilityName = "Unknown Facility",
    bookingDate  = null,
    timeSlot     = "",
    hours        = 0,
    totalPrice   = 0,
    status       = "pending",
    userImage    = null,
    userName     = null,
  } = booking;

  const formattedDate = bookingDate
    ? new Date(bookingDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <article className="flex overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-[#111827] dark:hover:shadow-xl">
      {/* Left accent bar */}
      <div className="w-1 shrink-0 bg-linear-to-b from-emerald-400 to-emerald-600" />

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <BuildingsIcon size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            <h3 className="font-bold text-slate-800 dark:text-slate-100">
              {facilityName}
            </h3>
          </div>
          <Chip
            size="xs"
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
              status === "pending"
                ? "bg-yellow-400/10 text-yellow-400 border-yellow-400/30"
                : status === "confirmed"
                ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/30"
                : status === "cancelled"
                ? "bg-red-500/10 text-red-400 border-red-500/30"
                : status === "completed"
                ? "bg-slate-400/10 text-slate-400 border-slate-400/30"
                : "bg-gray-200/10 text-gray-400 border-gray-200/30"
            }`}
          >
            {status}
          </Chip>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {formattedDate && (
            <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <CalendarBlankIcon size={13} /> {formattedDate}
            </span>
          )}
          {timeSlot && (
            <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <ClockIcon size={13} /> {timeSlot}
            </span>
          )}
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <TimerIcon size={13} /> {hours} hr{hours !== 1 ? "s" : ""}
          </span>
          <span className="text-lg font-bold text-emerald-400">
              ৳{Number(totalPrice).toLocaleString()}
            </span>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between border-t border-black/5 pt-2 dark:border-white/5">
          {userName && (
            <div className="flex items-center gap-1.5">
              {userImage ? (
                <Image
                  src={userImage}
                  alt={userName}
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover"
                />
              ) : null}
              <span className="text-xs text-slate-400">{userName}</span>
            </div>
          )}
          <div className="ml-auto flex items-baseline gap-1">
            <CancelBooking booking={booking} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyBookingCard;

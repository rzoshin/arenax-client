"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Chip,
  DatePicker,
  Input,
  TextField,
} from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import toast from "react-hot-toast";

const BookingCard = ({ facility }) => {
  const { _id, facilityName, pricePerHour, availableTimeSlots } = facility;
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookingDate, setBookingDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [hours, setHours] = useState(1);

  const totalPrice = Number(hours) * Number(pricePerHour);

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      facilityId: _id,
      facilityName,
      bookingDate: bookingDate?.toString(),
      timeSlot,
      hours: Number(hours),
      totalPrice,
      status: "pending",
    };

    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    console.log(data);
    toast.success("Booking request submitted!");
  };

  // Mirrors AddFacility inputWrapper theme
  const inputWrapper =
    "bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] hover:border-emerald-400/40 dark:hover:border-[#00E5A0]/40 focus-within:!border-emerald-500 dark:focus-within:!border-[#00E5A0] rounded-2xl h-14 transition-all";
  const inputText =
    "text-slate-800 dark:text-[#E2E8F0] placeholder:text-slate-400 dark:placeholder:text-[#64748B]";
  const labelClass = "text-slate-500 dark:text-[#64748B] text-sm mb-1";

  return (
    <div className="w-full lg:w-105 shrink-0">
      <Card className="sticky top-24 bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1C2438] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/60 dark:shadow-black/30 transition-colors duration-300">
        {/* TOP ACCENT */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-500" />

        <div className="p-7">
          {/* HEADER */}
          <div className="mb-8">
            <Chip className="bg-emerald-100 dark:bg-[#00E5A0]/10 text-emerald-600 dark:text-[#00E5A0] border border-emerald-200 dark:border-[#00E5A0]/20 mb-4">
              Booking Form
            </Chip>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-[#E2E8F0] leading-tight">
              Reserve Your Slot
            </h2>
            <p className="text-slate-500 dark:text-[#64748B] mt-2">
              Complete your booking in just a few clicks.
            </p>
          </div>

          {/* PRICE DISPLAY */}
          <div className="bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] rounded-3xl p-5 mb-8">
            <p className="text-slate-500 dark:text-[#64748B] text-sm mb-1">
              Price Per Hour
            </p>
            <h1 className="text-5xl font-bold text-emerald-500 dark:text-[#00E5A0]">
              ৳ {pricePerHour}
            </h1>
          </div>

          {/* FORM */}
          <form onSubmit={handleBooking} className="space-y-5">
            {/* Facility Name */}
            <div>
              <label className={labelClass}>Facility Name</label>
              <Input
                value={facilityName}
                isReadOnly
                classNames={{ inputWrapper, input: inputText }}
              />
            </div>

            {/* Booking Date */}
            <div>
              <label className={labelClass}>Booking Date</label>
              <Input
                type="date"
                onChange={(e) => setBookingDate(e.target.value)}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className={labelClass}>Time Slot</label>
              <Select
                placeholder="Select a slot"
                selectedKeys={timeSlot ? [timeSlot] : []}
                onSelectionChange={(keys) => setTimeSlot([...keys][0])}
                classNames={{
                  trigger: inputWrapper,
                  value: "text-slate-800 dark:text-[#E2E8F0]",
                  placeholder: "text-slate-400 dark:text-[#64748B]",
                  popoverContent:
                    "bg-white dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] rounded-2xl",
                }}
              >
                {(availableTimeSlots ?? []).map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </Select>
            </div>

            {/* Hours */}
            <div>
              <label className={labelClass}>Hours</label>
              <Input
                type="number"
                value={String(hours)}
                min={1}
                onChange={(e) => setHours(Number(e.target.value))}
                classNames={{ inputWrapper, input: inputText }}
              />
            </div>

            {/* Total Price */}
            <div>
              <label className={labelClass}>Total Price</label>
              <Input
                value={`৳ ${totalPrice}`}
                isReadOnly
                classNames={{
                  inputWrapper,
                  input: `${inputText} font-semibold`,
                }}
              />
            </div>

            {/* Booking Status */}
            <div className="flex items-center justify-between bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] rounded-2xl p-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-[#64748B]">
                  Booking Status
                </p>
                <h4 className="text-slate-800 dark:text-[#E2E8F0] font-semibold capitalize">
                  Pending
                </h4>
              </div>
              <Chip className="bg-orange-100 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                Pending
              </Chip>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-emerald-400 dark:bg-[#00E5A0] text-slate-900 dark:text-[#0A0E1A] font-bold text-base hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-400/20 dark:hover:shadow-[#00E5A0]/20 transition-all duration-300"
            >
              Confirm Booking
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;

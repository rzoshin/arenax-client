"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, DatePicker, Input, Card, Chip } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import toast from "react-hot-toast";
import {
  CalendarDotsIcon, ClockIcon, CurrencyDollarIcon,
  BuildingsIcon, TimerIcon, ArrowRightIcon,
} from "@phosphor-icons/react";

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

    const res = await fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    console.log(data);
    toast.success("Booking request submitted!");
  };

  const inputStyles = {
    inputWrapper: "bg-input border border-border rounded-2xl h-14",
    input: "text-primary",
    label: "text-muted",
  };

  return (
    <div className="w-full lg:w-105 shrink-0">
      <Card className="sticky top-24 bg-card border border-border rounded-[32px] overflow-hidden shadow-2xl shadow-black/20">

        {/* TOP ACCENT */}
        <div className="h-1.5 w-full bg-linear-to-r from-accent via-cyan-400 to-danger" />

        <div className="p-7">
          {/* HEADER */}
          <div className="mb-8">
            <Chip className="bg-accent/10 text-accent border border-accent/20 mb-4">
              Booking Form
            </Chip>
            <h2 className="text-3xl font-bold text-primary leading-tight">
              Reserve Your Slot
            </h2>
            <p className="text-muted mt-2">Complete your booking in just a few clicks.</p>
          </div>

          {/* PRICE */}
          <div className="bg-price border border-border rounded-3xl p-5 mb-8">
            <p className="text-muted text-sm mb-1">Price Per Hour</p>
            <h1 className="text-5xl font-bold text-accent">৳ {pricePerHour}</h1>
          </div>

          {/* FORM */}
          <form onSubmit={handleBooking} className="space-y-6">
            <Input
              label="Facility Name"
              value={facilityName}
              isReadOnly
              startContent={<BuildingsIcon size={18} className="text-muted" />}
              classNames={inputStyles}
            />

            <DatePicker
              label="Booking Date"
              onChange={setBookingDate}
              startContent={<CalendarDotsIcon size={18} className="text-muted" />}
              classNames={inputStyles}
            />

            <Select
              label="Time Slot"
              placeholder="Select a slot"
              selectedKeys={timeSlot ? [timeSlot] : []}
              onSelectionChange={(keys) => setTimeSlot([...keys][0] ?? "")}
              startContent={<ClockIcon size={18} className="text-muted" />}
              items={availableTimeSlots?.map((slot) => ({ key: slot, label: slot })) ?? []}
              classNames={{
                trigger: "bg-input border border-border rounded-2xl h-14 text-primary",
                label: "text-muted",
                value: "text-primary",
              }}
            >
              {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
            </Select>

            <Input
              type="number"
              label="Hours"
              min={1}
              value={String(hours)}
              onChange={(e) => setHours(Number(e.target.value))}
              startContent={<TimerIcon size={18} className="text-muted" />}
              classNames={inputStyles}
            />

            <Input
              label="Total Price"
              value={`৳ ${totalPrice}`}
              isReadOnly
              startContent={<CurrencyDollarIcon size={18} className="text-muted" />}
              classNames={{
                inputWrapper: "bg-price border border-accent/20 rounded-2xl h-14",
                input: "text-accent font-bold text-lg",
                label: "text-muted",
              }}
            />

            {/* STATUS */}
            <div className="flex items-center justify-between bg-input border border-border rounded-2xl p-4">
              <div>
                <p className="text-sm text-muted">Booking Status</p>
                <h4 className="text-primary font-semibold capitalize">Pending</h4>
              </div>
              <Chip className="bg-danger/10 text-danger border border-danger/20">
                Pending
              </Chip>
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-accent text-base font-bold text-[#0A0E1A] hover:scale-[1.01] hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
              endContent={<ArrowRightIcon size={20} />}
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
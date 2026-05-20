"use client";

import {
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Button,
  Card,
  Chip,
  Form,
} from "@heroui/react";

import React from "react";
import toast from "react-hot-toast";

import {
  BuildingsIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UsersIcon,
  ClockIcon,
  PlusCircleIcon,
} from "@phosphor-icons/react";
import { authClient } from "@/lib/auth-client";

const AddFacility = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    facility.availableTimeSlots = facility.availableTimeSlots
      .split(",")
      .map((slot) => slot.trim());

    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(facility),
      }
    );

    const data = await res.json();
    toast.success("Facility added successfully!");
    console.log(data);
    e.target.reset();
  };

  // Shared input wrapper classes — dark bg in dark mode, white/gray in light
  const inputWrapper =
    "bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] hover:border-emerald-400/40 dark:hover:border-[#00E5A0]/40 focus-within:!border-emerald-500 dark:focus-within:!border-[#00E5A0] rounded-2xl h-14 transition-all";
  const inputText =
    "text-slate-800 dark:text-[#E2E8F0] placeholder:text-slate-400 dark:placeholder:text-[#64748B]";
  const labelClass = "text-slate-700 dark:text-[#E2E8F0] mb-2 font-medium";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0E1A] py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <Chip className="bg-emerald-100 dark:bg-[#00E5A0]/10 text-emerald-600 dark:text-[#00E5A0] border border-emerald-200 dark:border-[#00E5A0]/20 mb-4">
            Facility Management
          </Chip>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-[#E2E8F0] leading-tight">
            Add New Facility
          </h1>
          <p className="text-slate-500 dark:text-[#64748B] text-lg mt-4 max-w-2xl">
            Create premium sports facilities for players to discover, book, and
            enjoy seamlessly.
          </p>
        </div>

        {/* FORM CARD */}
        <Card className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1C2438] rounded-[32px] shadow-xl shadow-slate-200/60 dark:shadow-black/30 overflow-hidden transition-colors duration-300">

          {/* TOP ACCENT */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-500" />

          <Form onSubmit={onSubmit} className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* FACILITY NAME */}
              <TextField name="facilityName" isRequired className="md:col-span-2">
                <Label className={labelClass}>Facility Name</Label>
                <Input
                  placeholder="ArenaX Football Turf"
                  className="text-slate-400 dark:text-[#64748B]" />
                <FieldError />
              </TextField>

              {/* FACILITY TYPE */}
              <div>
                <Select name="facilityType" isRequired placeholder="Select facility type">
                  <Label className={labelClass}>Facility Type</Label>
                  <Select.Trigger className="bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] hover:border-emerald-400/40 dark:hover:border-[#00E5A0]/40 rounded-2xl h-14 text-slate-800 dark:text-[#E2E8F0] transition-all">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {["Football", "Badminton", "Swimming", "Tennis", "Basketball", "Cricket", "Volleyball"].map(
                        (sport) => (
                          <ListBox.Item key={sport} id={sport} textValue={sport}>
                            {sport}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        )
                      )}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* LOCATION */}
              <TextField name="location" isRequired>
                <Label className={labelClass}>Location</Label>
                <Input
                  placeholder="Dhanmondi, Dhaka"
                  startContent={<MapPinIcon size={18} className="text-slate-400 dark:text-[#64748B]" />}

                />
              </TextField>

              {/* PRICE */}
              <TextField name="pricePerHour" type="number" isRequired>
                <Label className={labelClass}>Price Per Hour</Label>
                <Input
                  placeholder="4500"
                  startContent={<CurrencyDollarIcon size={18} className="text-slate-400 dark:text-[#64748B]" />}

                />
              </TextField>

              {/* CAPACITY */}
              <TextField name="capacity" type="number" isRequired>
                <Label className={labelClass}>Capacity</Label>
                <Input
                  placeholder="14"
                  className="text-slate-400 dark:text-[#64748B]" />
              </TextField>

              {/* TIME SLOTS */}
              <TextField name="availableTimeSlots" isRequired className="md:col-span-2">
                <Label className={labelClass}>Available Time Slots</Label>
                <Input
                  placeholder="06:00 AM - 07:00 AM, 07:00 AM - 08:00 AM"
                  classNames={{ inputWrapper, input: inputText }}
                />
              </TextField>

              {/* IMAGE URL */}
              <TextField name="image" isRequired className="md:col-span-2">
                <Label className={labelClass}>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://i.ibb.co.com/example.jpg"
                  classNames={{ inputWrapper, input: inputText }}
                />
              </TextField>

              {/* DESCRIPTION */}
              <TextField name="description" isRequired className="md:col-span-2">
                <Label className={labelClass}>Description</Label>
                <TextArea
                  placeholder="Describe the sports facility..."
                  classNames={{
                    inputWrapper:
                      "bg-slate-100 dark:bg-[#1C2438] border border-slate-200 dark:border-[#25304A] hover:border-emerald-400/40 dark:hover:border-[#00E5A0]/40 focus-within:!border-emerald-500 dark:focus-within:!border-[#00E5A0] rounded-3xl transition-all",
                    input: inputText,
                  }}
                />
              </TextField>

              {/* OWNER EMAIL */}
              <TextField name="ownerEmail" defaultValue={user?.email} isReadOnly className="md:col-span-2">
                <Label className={labelClass}>Owner Email</Label>
                <Input
                  classNames={{
                    inputWrapper:
                      "bg-slate-100 dark:bg-[#0F172A] border border-slate-200 dark:border-[#25304A] rounded-2xl h-14 opacity-70",
                    input: "text-slate-500 dark:text-[#94A3B8]",
                  }}
                />
              </TextField>
            </div>

            {/* SUBMIT */}
            <div className="mt-10">
              <Button
                type="submit"
                className="w-full h-14 rounded-2xl bg-emerald-400 dark:bg-[#00E5A0] text-slate-900 dark:text-[#0A0E1A] font-bold text-base hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-400/20 dark:hover:shadow-[#00E5A0]/20 transition-all duration-300"
        
              >
                Add Facility
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AddFacility;

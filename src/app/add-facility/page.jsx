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
  ImageIcon,
  NotePencilIcon,
  PlusCircleIcon,
} from "@phosphor-icons/react";
import { authClient } from "@/lib/auth-client";

const AddFacility = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData =
      new FormData(e.currentTarget);

    const facility =
      Object.fromEntries(formData.entries());

    facility.availableTimeSlots =
      facility.availableTimeSlots
        .split(",")
        .map(slot => slot.trim());

    const {data:tokenData} = await authClient.token();
    const res = await fetch(
      "http://localhost:8000/facilities",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(facility),
      }
    );

    const data = await res.json();
    toast.success("Facility added successfully!");
    console.log(data);
    e.target.reset();
  };
  return (
    <div
      className="
        min-h-screen
        bg-[#0A0E1A]
        py-16
        px-4
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <Chip
            className="
              bg-[#00E5A0]/10
              text-[#00E5A0]
              border
              border-[#00E5A0]/20
              mb-4
            "
          >
            Facility Management
          </Chip>
          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-[#E2E8F0]
              leading-tight
            "
          >
            Add New Facility
          </h1>
          <p
            className="
              text-[#64748B]
              text-lg
              mt-4
              max-w-2xl
            "
          >
            Create premium sports facilities
            for players to discover, book,
            and enjoy seamlessly.
          </p>

        </div>

        {/* FORM CARD */}
        <Card
          className="
            bg-[#111827]
            border
            border-[#1C2438]
            rounded-[32px]
            shadow-2xl
            shadow-black/30
            overflow-hidden
          "
        >

          {/* TOP ACCENT */}
          <div
            className="
              h-1.5
              w-full
              bg-gradient-to-r
              from-[#00E5A0]
              via-cyan-400
              to-[#FF4B2B]
            "
          />

          <Form
            onSubmit={onSubmit}
            className="p-8 md:p-12"
          >

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-8
              "
            >

              {/* FACILITY NAME */}
              <TextField
                name="facilityName"
                isRequired
                className="md:col-span-2"
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Facility Name
                </Label>

                <Input
                  placeholder="ArenaX Football Turf"
                  startContent={
                    <BuildingsIcon
                      size={18}
                      className="text-[#64748B]"
                    />
                  }
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14 transition-all",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

                <FieldError />

              </TextField>

              {/* FACILITY TYPE */}
              <div>

                <Select
                  name="facilityType"
                  isRequired
                  placeholder="Select facility type"
                >

                  <Label className="text-[#E2E8F0] mb-2">
                    Facility Type
                  </Label>

                  <Select.Trigger
                    className="
                      bg-[#1C2438]
                      border
                      border-[#25304A]
                      hover:border-[#00E5A0]/40
                      rounded-2xl
                      h-14
                      text-[#E2E8F0]
                    "
                  >
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>

                    <ListBox>

                      {[
                        "Football",
                        "Badminton",
                        "Swimming",
                        "Tennis",
                        "Basketball",
                        "Cricket",
                        "Volleyball",
                      ].map((sport) => (

                        <ListBox.Item
                          key={sport}
                          id={sport}
                          textValue={sport}
                        >
                          {sport}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                      ))}

                    </ListBox>

                  </Select.Popover>

                </Select>

              </div>

              {/* LOCATION */}
              <TextField
                name="location"
                isRequired
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Location
                </Label>

                <Input
                  placeholder="Dhanmondi, Dhaka"
                  startContent={
                    <MapPinIcon
                      size={18}
                      className="text-[#64748B]"
                    />
                  }
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

              </TextField>

              {/* PRICE */}
              <TextField
                name="pricePerHour"
                type="number"
                isRequired
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Price Per Hour
                </Label>

                <Input
                  placeholder="4500"
                  startContent={
                    <CurrencyDollarIcon
                      size={18}
                      className="text-[#64748B]"
                    />
                  }
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

              </TextField>

              {/* CAPACITY */}
              <TextField
                name="capacity"
                type="number"
                isRequired
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Capacity
                </Label>

                <Input
                  placeholder="14"
                  startContent={
                    <UsersIcon
                      size={18}
                      className="text-[#64748B]"
                    />
                  }
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

              </TextField>

              {/* TIME SLOTS */}
              <TextField
                name="availableTimeSlots"
                isRequired
                className="md:col-span-2"
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Available Time Slots
                </Label>

                <Input
                  placeholder="06:00 AM - 07:00 AM, 07:00 AM - 08:00 AM"
                  startContent={
                    <ClockIcon
                      size={18}
                      className="text-[#64748B]"
                    />
                  }
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

              </TextField>

              {/* IMAGE URL */}
              <TextField
                name="image"
                isRequired
                className="md:col-span-2"
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Image URL
                </Label>

                <Input
                  type="url"
                  placeholder="https://i.ibb.co.com/example.jpg"
                />

              </TextField>

              {/* DESCRIPTION */}
              <TextField
                name="description"
                isRequired
                className="md:col-span-2"
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Description
                </Label>

                <TextArea
                  placeholder="Describe the sports facility..."
                  minRows={5}
                  
                  classNames={{
                    inputWrapper:
                      "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-3xl",
                    input:
                      "text-[#E2E8F0] placeholder:text-[#64748B]",
                  }}
                />

              </TextField>

              {/* OWNER EMAIL */}
              <TextField
                name="ownerEmail"
                defaultValue={user?.email}
                isReadOnly
                className="md:col-span-2"
              >

                <Label className="text-[#E2E8F0] mb-2">
                  Owner Email
                </Label>

                <Input
                  classNames={{
                    inputWrapper:
                      "bg-[#0F172A] border border-[#25304A] rounded-2xl h-14 opacity-70",
                    input:
                      "text-[#94A3B8]",
                  }}
                />
              </TextField>
            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <Button
                type="submit"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-[#00E5A0]
                  text-[#0A0E1A]
                  font-bold
                  text-base
                  hover:scale-[1.01]
                  hover:shadow-xl
                  hover:shadow-[#00E5A0]/20
                  transition-all
                  duration-300
                "
                startContent={
                  <PlusCircleIcon size={22} />
                }
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
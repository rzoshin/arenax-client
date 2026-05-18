"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";

const AddFacility = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());

    console.log("New Facility:", facility);

    const res = await fetch("http://localhost:8000/facilities", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(facility),
    });

    const data = await res.json();
    toast.success("Facility added successfully!");

    console.log(data);
  };
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-5xl">Add New Facility</h1>
      <div className="mt-8">
        <form
          onSubmit={onSubmit}
          className="p-10 space-y-8 border border-gray-300 shadow-sm bg-[#1C2438] rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {/* Facility Name */}
            <div className="md:col-span-2">
              <TextField name="facilityName" isRequired>
                <Label className="text-[#E2E8F0]">Facility Name</Label>
                <Input
                  placeholder="ArenaX Football Turf"
                  className="rounded-2xl bg-[#111827] text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Facility Type */}
            <div>
              <Select
                name="facilityType"
                isRequired
                className="w-full"
                placeholder="Select facility type"
              >
                <Label className="text-[#E2E8F0]">Facility Type</Label>

                <Select.Trigger className="rounded-2xl bg-[#111827] text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Football" textValue="Football">
                      Football
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Badminton" textValue="Badminton">
                      Badminton
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Swimming" textValue="Swimming">
                      Swimming
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Tennis" textValue="Tennis">
                      Tennis
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Basketball" textValue="Basketball">
                      Basketball
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Cricket" textValue="Cricket">
                      Cricket
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Volleyball" textValue="Volleyball">
                      Volleyball
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label className="text-[#E2E8F0]">Location</Label>
              <Input placeholder="Dhanmondi, Dhaka" className="rounded-2xl bg-[#111827] text-white" />
              <FieldError />
            </TextField>

            {/* Price Per Hour */}
            <TextField name="pricePerHour" type="number" isRequired>
              <Label className="text-[#E2E8F0]">Price Per Hour (৳)</Label>
              <Input type="number" placeholder="4500" className="rounded-2xl bg-[#111827] text-white" />
              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField name="capacity" type="number" isRequired>
              <Label className="text-[#E2E8F0]">Capacity</Label>
              <Input type="number" placeholder="14" className="rounded-2xl bg-[#111827] text-white" />
              <FieldError />
            </TextField>

            {/* Available Time Slots */}
            <div className="md:col-span-2">
              <TextField name="availableTimeSlots" isRequired>
                <Label className="text-[#E2E8F0]">Available Time Slots</Label>
                <Input
                  placeholder="06:00 AM - 07:00 AM, 07:00 AM - 08:00 AM"
                  className="rounded-2xl bg-[#111827] text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label className="text-[#E2E8F0]">Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://i.ibb.co.com/example.jpg"
                  className="rounded-2xl bg-[#111827] text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-[#E2E8F0]">Description</Label>
                <TextArea
                  placeholder="Describe the sports facility..."
                  className="rounded-3xl bg-[#111827] text-white"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Owner Email */}
            <div className="md:col-span-2">
              <TextField
                name="ownerEmail"
                defaultValue="owner@gmail.com"
                isReadOnly
              >
                <Label className="text-[#E2E8F0]">Owner Email</Label>
                <Input className="rounded-2xl bg-[#111827] text-white" />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="rounded-none w-full bg-[#00E5A0] text-black font-semibold"
          >
            Add Facility
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddFacility;

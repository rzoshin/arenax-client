"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

import {
  BuildingsIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ImageIcon,
  MapPinIcon,
  NotePencilIcon,
  PencilIcon,
  PlusCircleIcon,
  UsersIcon,
} from "@phosphor-icons/react";

export function EditModal({ facility }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    _id,
    facilityName,
    facilityType,
    description,
    pricePerHour,
    location,
    capacity,
    image,
    availableTimeSlots
  } = facility;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/facilities/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(facility),
    });

    const data = await res.json();

    console.log(data);
  };
  return (
    <Modal>
      <Button
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1C2438] px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#0A0E1A]"
          >
            <PencilIcon size={13} /> Update
          </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PencilIcon />
              </Modal.Icon>
              <Modal.Heading>Update Facility</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-8 md:p-12">
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
                      defaultValue={facilityName}
                    >
                      <Label className="text-[#E2E8F0] mb-2">
                        Facility Name
                      </Label>

                      <Input
                        placeholder="ArenaX Football Turf"
                        startContent={
                          <BuildingsIcon size={18} className="text-[#64748B]" />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14 transition-all",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
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
                        defaultValue={facilityType}
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
                    <TextField name="location" defaultValue={location} isRequired>
                      <Label className="text-[#E2E8F0] mb-2">Location</Label>          
                      <Input
                        placeholder="Dhanmondi, Dhaka"
                        startContent={
                          <MapPinIcon size={18} className="text-[#64748B]" />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
                        }}
                      />
                    </TextField>

                    {/* PRICE */}
                    <TextField name="pricePerHour" type="number" defaultValue={pricePerHour} isRequired>
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
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
                        }}
                      />
                    </TextField>

                    {/* CAPACITY */}
                    <TextField name="capacity" type="number" defaultValue={capacity} isRequired>
                      <Label className="text-[#E2E8F0] mb-2">Capacity</Label>

                      <Input
                        placeholder="14"
                        startContent={
                          <UsersIcon size={18} className="text-[#64748B]" />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
                        }}
                      />
                    </TextField>

                    {/* TIME SLOTS */}
                    <TextField
                      name="availableTimeSlots"
                      isRequired
                      className="md:col-span-2"
                      defaultValue={availableTimeSlots?.join(", ")}
                    >
                      <Label className="text-[#E2E8F0] mb-2">
                        Available Time Slots
                      </Label>

                      <Input
                        placeholder="06:00 AM - 07:00 AM, 07:00 AM - 08:00 AM"
                        startContent={
                          <ClockIcon size={18} className="text-[#64748B]" />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
                        }}
                      />
                    </TextField>

                    {/* IMAGE URL */}
                    <TextField
                      name="image"
                      isRequired
                      className="md:col-span-2"
                      defaultValue={image}
                    >
                      <Label className="text-[#E2E8F0] mb-2">Image URL</Label>

                      <Input
                        type="url"
                        placeholder="https://i.ibb.co.com/example.jpg"
                        startContent={
                          <ImageIcon size={18} className="text-[#64748B]" />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-2xl h-14",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
                        }}
                      />
                    </TextField>

                    {/* DESCRIPTION */}
                    <TextField
                      name="description"
                      isRequired
                      className="md:col-span-2"
                      defaultValue={description}
                    >
                      <Label className="text-[#E2E8F0] mb-2">Description</Label>

                      <TextArea
                        placeholder="Describe the sports facility..."
                        minRows={5}
                        startContent={
                          <NotePencilIcon
                            size={18}
                            className="text-[#64748B] mt-1"
                          />
                        }
                        classNames={{
                          inputWrapper:
                            "bg-[#1C2438] border border-[#25304A] hover:border-[#00E5A0]/40 focus-within:!border-[#00E5A0] rounded-3xl",
                          input: "text-[#E2E8F0] placeholder:text-[#64748B]",
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
                      <Label className="text-[#E2E8F0] mb-2">Owner Email</Label>

                      <Input
                        classNames={{
                          inputWrapper:
                            "bg-[#0F172A] border border-[#25304A] rounded-2xl h-14 opacity-70",
                          input: "text-[#94A3B8]",
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
                      startContent={<PlusCircleIcon size={22} />}
                    >
                      Edit Facility
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

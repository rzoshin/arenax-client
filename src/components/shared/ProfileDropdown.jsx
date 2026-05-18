import {Avatar, Dropdown, Label} from "@heroui/react";
import { GearIcon, PersonIcon, SignOutIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function ProfileDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">Jane Doe</p>
              <p className="text-xs leading-none text-muted">jane@example.com</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="My Bookings">
            <Label><Link href="/bookings">My Bookings</Link></Label>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Add Facility">
            <Label><Link href="/add-facility">Add Facility</Link></Label>
          </Dropdown.Item>
          <Dropdown.Item id="settings" textValue="Manage Facilities">
            <div className="flex w-full items-center justify-between gap-2">
              <Label><Link href="/manage-facility">Manage My Facilities</Link></Label>
              <GearIcon className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <SignOutIcon className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
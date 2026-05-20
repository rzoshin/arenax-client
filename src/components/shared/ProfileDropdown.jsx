import { authClient } from "@/lib/auth-client";
import {Avatar, Button, Dropdown, Label} from "@heroui/react";
import { GearIcon, PersonIcon, SignOutIcon } from "@phosphor-icons/react";
import Link from "next/link";

export function ProfileDropdown({user}) {
  const handleSignOut = async() => {
    await authClient.signOut()
};
  const {name, image, email} = user || {};
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={name}
            src={image}
          />
          <Avatar.Fallback delayMs={600}>{name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={name}
                src={image}
              />
              <Avatar.Fallback delayMs={600}>{name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{name}</p>
              <p className="text-xs leading-none text-muted">{email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="My Bookings">
            <Link href="/bookings">My Bookings</Link>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Add Facility">
            <Link href="/add-facility">Add Facility</Link>
          </Dropdown.Item>
          <Dropdown.Item id="settings" textValue="Manage Facilities">
            <div className="flex w-full items-center justify-between gap-2">
              <Link href="/manage-facility">Manage My Facilities</Link>
              <GearIcon className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <Button onClick={handleSignOut}>Log Out</Button>
              <SignOutIcon className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
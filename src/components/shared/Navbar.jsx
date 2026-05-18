"use client";
import logo from "../../../public/assets/ArenaX.png";

import { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import {UserCircleIcon} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { ProfileDropdown } from "./ProfileDropdown";
import NavLink from "./NavLink";
// import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const { data: session } = authClient.useSession();

//   const user = session?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };
 const user = null

  return (
    <nav className="sticky top-0 z-40 bg-[#111827] w-full backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="ArenaX Logo" width={60} height={60} />
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              href="/facilities"
              className="border-none"
            >
              All Facilities
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink href="/bookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink href="/add-facility">Add Facility</NavLink>
              </li>
              <li>
                <NavLink href="/manage-facility">Manage My Facilities</NavLink>
              </li>
            </>
          ) : (
            <>
            </>
          )}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <ProfileDropdown />
            </>
          ) : (
            <>
              <Button className="bg-[#00E5A0] text-black rounded-sm"><Link href="/login">Login</Link></Button>
            </>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              href="/facilities"
            >
              All Facilities
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink href="/bookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink href="/add-facility">Add Facility</NavLink>
              </li>
              <li>
                <NavLink href="/manage-facility">Manage My Facilities</NavLink>
              </li>
            </>
          ) : (
            <>
            </>
          )}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {user ? (
                <>
                  <ProfileDropdown />
                </>
              ) : (
                <>
                  <Button className="bg-[#00E5A0] text-black rounded-sm"><Link href="/login">Login</Link> </Button>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

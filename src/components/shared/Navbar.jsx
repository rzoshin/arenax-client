"use client";

import logo from "../../../public/assets/ArenaX2.png";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { ProfileDropdown } from "./ProfileDropdown";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#1C2438] bg-[#111827] text-[#64748B] transition-all hover:border-[#334155] hover:text-[#00E5A0]"
    >
      {/* Sun icon — shown in dark mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>

      {/* Moon icon — shown in light mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`absolute transition-all duration-300 ${
          !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="sticky top-0 z-40 bg-[#0D1520] w-full">
      <header className="mx-auto flex h-22 max-w-7xl items-center justify-between px-6">

        {/* Left — hamburger + logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-[#64748B] hover:text-[#E2E8F0] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Image src={logo} alt="ArenaX Logo" width={50} height={50} />
          <h1 className="text-4xl font-bold">Arena<span className="text-[#00E5A0]">X</span></h1>
        </div>

        {/* Center — nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/facilities">All Facilities</NavLink></li>
          {user && (
            <>
              <li><NavLink href="/bookings">My Bookings</NavLink></li>
              <li><NavLink href="/add-facility">Add Facility</NavLink></li>
              <li><NavLink href="/manage-facility">Manage My Facilities</NavLink></li>
            </>
          )}
        </ul>

        {/* Right — theme toggle + auth */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {user ? (
            <ProfileDropdown user={user} />
          ) : (
            <Button className="bg-[#00E5A0] text-black rounded-lg font-semibold text-sm px-5 h-9 min-w-0">
              <Link
              href="/login" 
              >
              Login
              </Link>
            </Button>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-[#1C2438] md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/facilities">All Facilities</NavLink></li>
            {user && (
              <>
                <li><NavLink href="/bookings">My Bookings</NavLink></li>
                <li><NavLink href="/add-facility">Add Facility</NavLink></li>
                <li><NavLink href="/manage-facility">Manage My Facilities</NavLink></li>
              </>
            )}
            <li className="mt-4 flex items-center gap-3 border-t border-[#1C2438] pt-4">
              <ThemeToggle />
              {user ? (
                <ProfileDropdown user={user} />
              ) : (
                <Button
                  as={Link}
                  href="/login"
                  className="bg-[#00E5A0] text-black rounded-lg font-semibold text-sm flex-1 h-9"
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

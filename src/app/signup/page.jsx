"use client";

import {
  Button,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import Image from "next/image";
import logo from "../../../public/assets/ArenaX.png";
import { EnvelopeIcon, ImageIcon, LockIcon, UserIcon } from "@phosphor-icons/react";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogo,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/arenax", Icon: FacebookLogoIcon },
  { label: "Instagram", href: "https://instagram.com/arenax", Icon: InstagramLogoIcon },
  { label: "YouTube", href: "https://youtube.com/@arenax", Icon: YoutubeLogo },
  { label: "Twitter / X", href: "https://twitter.com/arenax", Icon: TwitterLogoIcon },
];

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4 gap-4">
      {/* ── Left – Form ── */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-sm space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-1">
            <Image src={logo} alt="ArenaX Logo" width={40} height={40} />
            <span className="font-semibold text-lg">ArenaX</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold">Create account</h1>
            <p className="text-sm text-gray-500 mt-1">
              Join 17,000+ athletes already booking on ArenaX.
            </p>
          </div>

          {/* Full name */}
          <TextField isRequired name="name" type="text">
            <Label>Full name</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <UserIcon className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full" placeholder="Alex Johnson" />
            </InputGroup>
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Please enter a valid email address"
                : null
            }
          >
            <Label>Email address</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <EnvelopeIcon className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full" placeholder="name@email.com" />
            </InputGroup>
          </TextField>

          <TextField name="image" type="text">
            <Label>Profile Image URL</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <ImageIcon className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full" placeholder="https://example.com/image.jpg" />
            </InputGroup>
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Must contain at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <LockIcon className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full" placeholder="Min. 8 characters" />
            </InputGroup>
          </TextField>

          {/* Confirm password */}
          <TextField isRequired minLength={8} name="confirmPassword" type="password">
            <Label>Confirm password</Label>
            <InputGroup>
              <InputGroup.Prefix>
                <LockIcon className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full" placeholder="Repeat your password" />
            </InputGroup>
          </TextField>

          {/* Terms */}
          <p className="text-xs text-gray-400">
            By creating an account you agree to our{" "}
            <a href="#" className="text-black underline">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-black underline">Privacy Policy</a>.
          </p>

          {/* Submit */}
          <Button className="w-full bg-[#00E5A0] text-black font-semibold" type="submit">
            Create free account
          </Button>

          {/* Sign-in link */}
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-black font-semibold hover:underline">
              Sign in
            </a>
          </p>

          {/* Divider */}
          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or sign up with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-3">
            {[
              { name: "Google", letter: "G" },
              { name: "GitHub", letter: "GH" },
              { name: "Facebook", letter: "f" },
            ].map(({ name, letter }) => (
              <Button
                key={name}
                aria-label={`Sign up with ${name}`}
                variant="outline"
                className="flex-1 h-11 rounded-xl text-xs font-medium border border-gray-200 hover:bg-gray-50"
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right – Dark Panel ── */}
      <div className="hidden lg:flex w-[52%] bg-[#0d1117] rounded-2xl flex-col items-center justify-center p-10 overflow-hidden relative">
        {/* Subtle grid texture overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px), repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />

        <div className="flex flex-col items-center text-center z-10 max-w-xs">
          {/* Logo */}
          <Image src={logo} alt="ArenaX Logo" width={96} height={96} className="mb-6" />

          {/* Brand name */}
          <p className="text-[#00E5A0] text-xs font-semibold tracking-widest uppercase mb-3">
            ArenaX
          </p>

          {/* Headline */}
          <h2 className="text-white text-3xl font-extrabold leading-tight mb-4">
            Play more, hassle less.
          </h2>

          {/* Tagline */}
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            One free account unlocks every facility on the platform — from 
            five-a-side pitches to Olympic-size pools. Sign up in 30 seconds.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Connect label */}
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">
            Follow us
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-[#00E5A0] hover:border-[#00E5A0]/40 hover:bg-[#00E5A0]/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-gray-600 text-xs mt-10">
            © {new Date().getFullYear()} ArenaX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  Button,
  Label,
  TextField,
  InputGroup,
  Form,
} from "@heroui/react";
import Image from "next/image";
import logo from "../../../public/assets/ArenaX.png";
import { EnvelopeIcon, GoogleLogoIcon, LockIcon, YoutubeLogoIcon, FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, } from "@phosphor-icons/react";
import { Bebas_Neue } from "next/font/google";

import { createAuthClient } from "better-auth/client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
const authClient = createAuthClient();

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com/arenax",
    Icon: FacebookLogoIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/arenax",
    Icon: InstagramLogoIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@arenax",
    Icon: YoutubeLogoIcon,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/arenax",
    Icon: TwitterLogoIcon,
  },
];

export default function LoginPage() {
  const onSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());
  
      console.log(user);
  
      const { data, error } = await authClient.signIn.email({
        email: user.email, // required
        password: user.password, // required
      });
  
      console.log(data, error);
      if (data) {
        toast.success("Logged in successfully!");
        redirect("/");
      }
      if (error) {
        // toast
        toast.error(error.message || "An error occurred during login");
      }
    };
  
    const handleGoogleSignIn = async () => {
      await authClient.signIn.social({
      provider: "google",
    });
  }
  return (
    <div className="flex min-h-screen bg-base p-4 gap-4">
      {/* ── Left – Form ── */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-sm space-y-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="ArenaX Logo" width={40} height={40} />
            <span className="font-bold text-xl text-primary">
              Arena<span className="text-accent">X</span>
            </span>
          </div>

          <div>
            <h1 className={`text-4xl font-extrabold text-primary ${bebas.className}`}>
              Sign in
            </h1>
            <p className="text-sm text-muted mt-1">
              Book your next session in seconds.
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(v) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? "Please enter a valid email address"
                  : null
              }
            >
              <Label className="text-sm font-medium text-primary">Email address</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <EnvelopeIcon className="size-4 text-muted" />
                </InputGroup.Prefix>
                <InputGroup.Input className="w-full" placeholder="name@email.com" />
              </InputGroup>
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(v) => {
                if (v.length < 8) return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(v)) return "Must contain at least one uppercase letter";
                if (!/[0-9]/.test(v)) return "Must contain at least one number";
                return null;
              }}
            >
              <Label className="text-sm font-medium text-primary">Password</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <LockIcon className="size-4 text-muted" />
                </InputGroup.Prefix>
                <InputGroup.Input className="w-full" placeholder="••••••••" />
              </InputGroup>
            </TextField>

            {/* Forgot password */}
            <div className="text-right -mt-2">
              <a href="#" className="text-xs text-accent hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              className="w-full bg-accent text-[#0A0E1A] font-semibold rounded-xl h-10"
              type="submit"
            >
              Sign in
            </Button>
          </Form>

          {/* Sign-up link */}
          <p className="text-sm text-muted text-center">
            New to ArenaX?{" "}
            <a href="/signup" className="text-primary font-semibold hover:text-accent transition-colors">
              Create a free account
            </a>
          </p>

          {/* Divider */}
          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google */}
          <Button
            onClick={handleGoogleSignIn}
            className="w-full rounded-xl border border-border bg-card text-primary hover:border-accent/40 transition-all"
            variant="outline"
          >
            <GoogleLogoIcon className="size-4 mr-2" />
            Continue with Google
          </Button>
        </div>
      </div>

      {/* ── Right – Dark Panel (always dark, intentional brand panel) ── */}
      <div className="hidden lg:flex w-[52%] bg-[#0d1117] rounded-2xl flex-col items-center justify-center p-10 overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px), repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />
        <div className="flex flex-col items-center text-center z-10 max-w-xs">
          <Image src={logo} alt="ArenaX Logo" width={96} height={96} className="mb-6" />
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
            ArenaX
          </p>
          <h2 className={`text-white text-4xl font-extrabold leading-tight mb-4 ${bebas.className}`}>
            Your game starts here.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Discover and book sports facilities near you — football pitches,
            basketball courts, swimming pools, and more, all in one place.
          </p>
          <div className="w-full h-px bg-white/10 mb-8" />
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">Follow us</p>
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-10">
            © {new Date().getFullYear()} ArenaX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

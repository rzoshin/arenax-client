"use client";

import Link from "next/link";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

const SOCIAL = [
  { Icon: TwitterLogoIcon,   href: "#", label: "Twitter"   },
  { Icon: InstagramLogoIcon, href: "#", label: "Instagram" },
  { Icon: YoutubeLogoIcon,   href: "#", label: "YouTube"   },
  { Icon: FacebookLogoIcon,  href: "#", label: "Facebook"  },
];

const QUICK_LINKS = [
  { label: "Home",        href: "/"                },
  { label: "Facilities",  href: "/facilities"      },
  { label: "My Bookings", href: "/bookings"        },
  { label: "My Profile",  href: "/profile"         },
];

const SUPPORT_LINKS = [
  { label: "Help Center",       href: "#" },
  { label: "Terms of Service",  href: "#" },
  { label: "Privacy Policy",    href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-border text-muted px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Brand */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-primary leading-none">
            Arena<span className="text-[#00E5A0]">X</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Book football turfs, badminton courts, swimming lanes and more —
            real-time slots, instant confirmation across Bangladesh.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Newsletter */}
          <div>
            <h3 className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed">
              Subscribe for exclusive venue drops and booking deals.
            </p>
            <div className="flex items-center bg-input border border-border rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm px-4 py-3 text-primary placeholder:text-muted"
              />
              <button
                aria-label="Subscribe"
                className="h-full px-4 text-accent hover:bg-accent hover:text-[#0A0E1A] transition-colors duration-200"
              >
                ↗
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>786 901 1622</li>
              <li>
                <a
                  href="mailto:info@arenax.com"
                  className="hover:text-accent transition-colors duration-200"
                >
                  info@arenax.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 ArenaX. All rights reserved.</p>
          <div className="flex gap-4">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

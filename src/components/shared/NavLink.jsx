"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors
        ${isActive
          ? 'text-[#00E5A0] font-semibold'
          : 'text-white hover:text-[#00E5A0]'
        }`}>
      {children}
    </Link>
  );
};

export default NavLink;
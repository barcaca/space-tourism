import React from "react"; // Core React library
import Link from "next/link"; // Link component from Next.js
import { BlurredBackground } from "./BlurredBackground"; // Custom component

interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ href: string; number: string; text: string }>;
  activePage: string;
  handleClick: () => void;
}

export function MobileNav({
  isOpen,
  navLinks,
  activePage,
  handleClick,
}: MobileNavProps) {
  return (
    <nav
      className={`fixed right-0 top-0 h-screen w-64 transition duration-200 ease-linear md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <BlurredBackground />
      <BlurredBackground />
      <ul
        className={`flex w-full flex-col gap-8 pl-8 pt-[118px] uppercase text-white ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li
            className={`flex gap-3 font-body tracking-[.15rem]
        ${activePage === link.href ? "border-r-4 border-white" : ""}`}
            key={link.href}
          >
            <span className="font-bold tracking-[.15rem]">{link.number}</span>
            <Link href={link.href} onClick={handleClick}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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
        className={`flex w-full flex-col gap-8 pl-8 pt-[118px] uppercase text-white transition ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li
            className={`font-body tracking-[.15rem] hover:border-r-4 hover:border-gray-500 hover:text-gray-500
        ${activePage === link.href ? "border-r-4 border-white" : ""}`}
            key={link.href}
          >
            <Link
              href={link.href}
              onClick={handleClick}
              className="flex gap-3 "
            >
              <span className="font-bold tracking-[.15rem]">{link.number}</span>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

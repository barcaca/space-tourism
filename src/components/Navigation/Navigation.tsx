"use client";
import React, { useEffect, useState } from "react"; // Core React library and hooks
import Image from "next/image"; // Image component from Next.js
import Link from "next/link"; // Link component from Next.js
import { usePathname } from "next/navigation"; // Navigation hook from Next.js

import { MobileNav } from "./MobileNav"; // Custom navigation components
import { DesktopNav } from "./DesktopNav";

export function Navigation() {
  // State variables for managing menu visibility and active page
  const [isOpen, setIsOpen] = useState(false); // Tracks whether the menu is open or closed
  const [activePage, setActivePage] = useState(usePathname()); // Stores the current active page

  // Retrieves the current pathname from the URL
  const pathname = usePathname();

  // Persists active page in localStorage and updates state when pathname changes
  useEffect(() => {
    localStorage.setItem("activePage", activePage); // Saves the active page to localStorage

    // If the pathname has changed, update the activePage state
    if (pathname !== activePage) {
      setActivePage(pathname);
    }
  }, [activePage, pathname]);

  // Function to toggle menu visibility and update active page
  const handleClick = () => {
    setIsOpen(!isOpen); // Toggles the isOpen state, opening or closing the menu
    setActivePage(pathname); // Updates the activePage state to the current pathname
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "/", number: "00", text: "Home" },
    { href: "/Destination", number: "01", text: "Destination" },
    { href: "/Crew", number: "02", text: "Crew" },
    { href: "/Technology", number: "03", text: "Technology" },
  ];

  return (
    <div className="relative flex w-full items-center justify-between xl:justify-stretch">
      <Link href={"/"}>
        <Image src={"/shared/logo.svg"} alt={"logo"} width={40} height={40} />
      </Link>
      <hr className="z-50 hidden h-px w-[30%] bg-white opacity-25 xl:ml-16  xl:block 2xl:w-1/2" />
      <Image
        src={isOpen ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"}
        alt={"icon menu"}
        width={24}
        height={21}
        onClick={handleClick}
        className="z-50 cursor-pointer md:hidden"
      />

      <DesktopNav
        navLinks={navLinks}
        activePage={activePage}
        handleClick={handleClick}
        setActivePage={setActivePage}
      />
      <MobileNav
        isOpen={isOpen}
        navLinks={navLinks}
        activePage={activePage}
        handleClick={handleClick}
      />
    </div>
  );
}

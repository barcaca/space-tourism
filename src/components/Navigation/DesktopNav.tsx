import Link from "next/link"; // Link component from Next.js
import { BlurredBackground } from "./BlurredBackground"; // Custom component

interface DesktopNavProps {
  navLinks: Array<{ href: string; number: string; text: string }>;
  activePage: string;
  setActivePage: (page: string) => void;
  handleClick: () => void;
}

export function DesktopNav({
  navLinks,
  activePage,
  handleClick,
  setActivePage,
}: DesktopNavProps) {
  return (
    <nav className="fixed right-0 top-0 hidden h-24 md:block xl:top-10 xl:pl-[124px] xl:pr-[166px]  ">
      <BlurredBackground />
      <BlurredBackground />
      <ul className="flex items-center justify-center gap-9 px-12 uppercase tracking-[.15em] text-white xl:gap-12">
        {navLinks.map((link) => (
          <li
            className={`z-30 flex gap-3 py-9 font-body hover:border-b-4 hover:border-gray-500 md:text-sm xl:text-base
              ${activePage === link.href ? "border-b-4 border-white  " : ""}`}
            key={link.href}
          >
            <span className="font-bold md:hidden xl:block">{link.number}</span>
            <Link
              href={link.href}
              className="hover:text-gray-500"
              onClick={() => {
                handleClick();
                setActivePage(link.href);
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

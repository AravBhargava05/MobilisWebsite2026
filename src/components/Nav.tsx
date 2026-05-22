"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Technology", href: "#technology" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-foreground/10 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-14"
      >
        <a
          href="#"
          className="shrink-0 text-[0.8125rem] font-medium tracking-[0.2em] text-foreground uppercase"
        >
          Mobilis
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-[0.625rem] tracking-[0.12em] uppercase sm:text-[0.6875rem]">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="flex items-center">
              {i > 0 && (
                <span aria-hidden="true" className="mx-2 text-foreground/25">
                  ·
                </span>
              )}
              <a
                href={link.href}
                className="font-medium text-foreground/75 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

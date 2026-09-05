"use client";

import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import ThemeToggle from "./ThemeToggle";
import config from "@/data/config.json";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      document.querySelector("#home"),
      ...config.nav.map((item) => document.querySelector(item.href)),
    ].filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      // { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      // { rootMargin: "-30% 0px -100% 0px", threshold: 0 }
      { rootMargin: "-30% 0px -100% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-lg text-foreground font-bold"
          onClick={handleLogoClick}
        >
          {config.name}<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {config.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                active === item.href
                  ? "text-foreground! font-medium!"
                  : "text-foreground/70! hover:text-accent!"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground cursor-pointer hover:border-accent hover:text-accent"
          >
            {menuOpen ? <TbX size={18} /> : <TbMenu2 size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {config.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 text-sm ${
                active === item.href
                  ? "text-foreground! font-medium!"
                  : "text-foreground/70! hover:text-foreground!"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
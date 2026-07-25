"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "How It Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 text-white py-4 shadow-lg"
          : isTransparent
          ? "bg-transparent text-white py-6 lg:py-8"
          : "bg-slate-900/90 backdrop-blur-md text-white py-4"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Brand Name / Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-0.5 group tracking-wider"
          aria-label="A & B Trading Home"
        >
          <span className="font-bold text-lg sm:text-xl font-display text-white uppercase tracking-widest">
            FREIGHT
          </span>
          <span className="text-xs text-white/80 font-mono align-super">
            ®
          </span>
        </Link>

        {/* Center: Normal Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors py-1 ${
                  active
                    ? "text-white border-b border-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right: REQUEST A QUOTE Link & Mobile Hamburger */}
        <div className="flex items-center gap-6">
          <Link
            href="/quote"
            className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white hover:text-white/80 transition-colors py-1 border-b border-transparent hover:border-white/40"
          >
            Request A Quote
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/90 hover:text-white p-1 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 space-y-3 mt-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm uppercase tracking-widest py-2 px-3 rounded transition-colors ${
                  pathname === href
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Ship, ChevronRight } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled && !isOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
            : isTransparent
            ? "bg-transparent"
            : "bg-white/45 backdrop-blur-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="A & B Trading Home"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-95 ${
                isTransparent ? "bg-white" : "bg-slate-900"
              }`}>
                <Ship className={`w-5 h-5 transition-colors duration-250 ${
                  isTransparent ? "text-slate-900" : "text-white"
                }`} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <span className={`block font-semibold text-lg tracking-tight font-display transition-colors duration-250 ${
                  isTransparent ? "text-white" : "text-slate-900"
                }`}>
                  A &amp; B <span className="text-gold-600 font-bold">Trading</span>
                </span>
                <span className={`block text-[9px] tracking-widest uppercase font-medium leading-none mt-0.5 transition-colors duration-250 ${
                  isTransparent ? "text-slate-300" : "text-slate-500"
                }`}>
                  Cambodia Shipping
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      active
                        ? isTransparent
                          ? "text-white"
                          : "text-slate-900"
                        : isTransparent
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="relative py-1">
                      {label}
                      {active && (
                        <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          isTransparent ? "bg-white" : "bg-slate-900"
                        }`} />
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/quote"
                className="btn-gold flex items-center gap-2 px-6 py-3 rounded-lg text-sm transition-all"
              >
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white hover:text-white/85 hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-slate-200/80 px-6 py-6 space-y-3">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                      active
                        ? "text-slate-900 bg-slate-100"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                    {active && <ChevronRight className="w-4 h-4 text-slate-900" />}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <Link
                  href="/quote"
                  className="btn-gold flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg text-base"
                >
                  Get a Free Quote
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        top: "16px",
        width: "85%",
        maxWidth: "1152px",
        borderRadius: "6px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        paddingTop: scrolled ? "10px" : "14px",
        paddingBottom: scrolled ? "10px" : "14px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="fixed left-0 right-0 mx-auto z-50 backdrop-blur-md text-slate-900 overflow-hidden"
    >
      <div className="w-full px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Name / Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-0.5 group tracking-wider"
          aria-label="A & B Trading Home"
        >
          <span className="font-bold text-lg sm:text-xl font-display text-slate-900 uppercase tracking-widest">
            FREIGHT
          </span>
          <span className="text-xs font-mono align-super text-slate-500">
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
                    ? "text-slate-900 border-b border-slate-900"
                    : "text-slate-600 hover:text-slate-900"
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
            className="text-xs sm:text-sm font-medium tracking-widest uppercase text-slate-900 hover:text-slate-700 transition-colors py-1 border-b border-transparent hover:border-slate-300"
          >
            Request A Quote
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 hover:text-slate-700 p-1 focus:outline-none transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden px-6 py-6 space-y-3 mt-3 rounded-b-md bg-white text-slate-900 border-t border-slate-100"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm uppercase tracking-widest py-2 px-3 rounded transition-colors ${
                    pathname === href
                      ? "text-slate-900 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

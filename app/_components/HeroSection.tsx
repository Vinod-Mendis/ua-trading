"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-slate-950 pt-28 lg:pt-36"
      aria-label="Hero"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
          src="https://res.cloudinary.com/vccpsacloud/video/upload/f_auto,q_auto,w_1280,fps_30/v1784470263/12973389_1920_1080_60fps_online-video-cutter.com_pkgmsr.webm"
        />
        {/* Subtle Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
      </div>

      {/* Full-width Divider Line Across Screen */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full flex items-center gap-4 px-6 sm:px-10 lg:px-16 mb-12 lg:mb-20"
      >
        <div className="flex items-center gap-1.5 text-white/90 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
          <span className="text-white/60">+</span> HOME
        </div>
        <div className="h-px flex-1 bg-white/25" />
      </motion.div>

      {/* Hero Content Container (Full Width Aligned) */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-16 lg:pb-24">
        {/* Hero Split Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Stacked Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-white tracking-tight leading-tight">
              Delivering Excellence,
              <br />
              Delivering Tomorrow
            </h1>
          </motion.div>

          {/* Right Column: Corner Bracket Paragraph & Glass CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-start"
          >
            {/* Paragraph with Corner Elbow Bracket Symbol & Compact Standard Max-Width */}
            <div className="flex items-start gap-2.5 mb-8 text-white/90 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
              <span className="text-white/70 select-none font-mono text-xl leading-none pt-0.5">
                └
              </span>
              <p>We understand the complexities of modern logistics.</p>
            </div>

            {/* Translucent Glass Rectangular Button */}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 hover:border-white/40 text-white font-normal text-sm tracking-wide px-8 py-3.5 rounded-none transition-all duration-200 hover:shadow-lg shadow-black/20"
            >
              Request A Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

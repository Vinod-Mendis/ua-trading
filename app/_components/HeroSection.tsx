"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MessageCircle, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 lg:pt-32"
      aria-label="Hero"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://res.cloudinary.com/vccpsacloud/video/upload/f_auto,q_auto,w_1280,fps_30/v1784470263/12973389_1920_1080_60fps_online-video-cutter.com_pkgmsr.webm"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/85" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center py-16 lg:py-24">
        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 text-xs uppercase tracking-widest font-semibold mb-8"
        >
          <Globe className="w-3.5 h-3.5 text-gold-400" />
          International Logistics &amp; Sourcing
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-display leading-[1.15] mb-8"
        >
          Connecting Cambodia
          <br />
          <span className="text-gold-400 font-extrabold">with the World</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Reliable shipping and sourcing solutions from Cambodia to Sri Lanka and
          destinations worldwide. Transparent process, competitive rates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <Link
            href="/quote"
            className="bg-gold-600 hover:bg-gold-500 text-white font-semibold flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm w-full sm:w-auto shadow-lg shadow-gold-600/10 transition-all duration-250 hover:-translate-y-[1px]"
          >
            Get a Shipping Quote
            <ChevronRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20shipping%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 backdrop-blur-md text-white font-medium flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm w-full sm:w-auto transition-all duration-250 hover:-translate-y-[1px]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

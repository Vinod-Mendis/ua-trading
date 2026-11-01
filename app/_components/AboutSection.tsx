"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 text-slate-900 border-b border-slate-100">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: + WHAT WE DO Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 pt-1"
          >
            <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl tracking-widest font-mono font-semibold uppercase text-slate-600">
              <span className="text-slate-400">+</span> WHAT WE DO
            </div>
          </motion.div>

          {/* Right Column: Statement Typography (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-9 w-full"
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 leading-tight tracking-tight w-full max-w-none">
              We empower businesses to move goods smarter, faster, and more
              sustainably with innovative logistics solutions that drive growth
              and transform{" "}
              <span className="bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]">
                global shipping
              </span>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

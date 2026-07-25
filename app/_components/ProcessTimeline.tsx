"use client";

import { motion } from "framer-motion";

const phases = [
  {
    step: "01",
    title: "Contact Us",
    duration: "Step 01",
    offsetClass: "pt-32 sm:pt-36 lg:pt-44", // Lowest position
    items: [
      "Reach out via WhatsApp or quote form",
      "Share package weight & cargo details",
      "Consult on shipping speed options",
      "Initial shipping route verification",
    ],
  },
  {
    step: "02",
    title: "Receive Quote",
    duration: "Step 02",
    offsetClass: "pt-20 sm:pt-24 lg:pt-28", // Second position
    items: [
      "Clear, upfront transparent pricing",
      "Weight & dimensional calculations",
      "Sea freight & air freight choices",
      "Customs declaration estimates",
    ],
  },
  {
    step: "03",
    title: "Prepare Goods",
    duration: "Step 03",
    offsetClass: "pt-10 sm:pt-12 lg:pt-14", // Third position
    items: [
      "Packaging & box wrapping support",
      "Professional labeling & barcoding",
      "Export documentation checks",
      "Warehousing & pre-shipment inspection",
    ],
  },
  {
    step: "04",
    title: "Safe Delivery",
    duration: "Step 04",
    offsetClass: "pt-0", // Highest position
    items: [
      "Departure from Cambodia handlers",
      "End-to-end cargo tracking updates",
      "Destination port customs clearance",
      "Final door-to-door handoff",
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 text-slate-900 relative overflow-hidden" id="process">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header Grid: Title on Left, Sub-description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] font-display">
              Our Shipping <br />
              Process
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 lg:pt-2 flex lg:justify-end"
          >
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md lg:ml-auto">
              A simple, transparent flow from initial quote to final delivery, connecting Cambodia to Sri Lanka and global destinations worldwide.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Separator Line (with faded ends) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-12 lg:my-16" />

        {/* Staggered 4-Column Timeline Grid with Faded End Vertical Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${phase.offsetClass} flex flex-col justify-start min-h-[320px] relative lg:pr-6`}
            >
              {/* Vertical Separator between steps with faded top and bottom ends */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent pointer-events-none" />
              )}

              {/* Title with light yellow duration tag */}
              <div className="flex items-start gap-2 mb-6 relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">
                  {phase.title}
                </h3>
                <span className="bg-yellow-100/90 text-amber-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center -mt-1 shrink-0">
                  {phase.duration}
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed">
                {phase.items.map((item) => (
                  <li key={item} className="hover:text-slate-600 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Animated Pill Capsules Wave Graphic (Pure Scale animation from center outward) */}
      <div className="w-full mt-24 sm:mt-32 relative overflow-hidden">
        <div className="flex justify-center items-end gap-1.5 sm:gap-2.5 px-4 w-full">
          {Array.from({ length: 32 }).map((_, i) => {
            const total = 32;
            const centerIndex = (total - 1) / 2; // 15.5
            const distanceFromCenter = Math.abs(i - centerIndex);
            
            // Bell curve max opacity for soft left & right edge fade
            const normalized = i / (total - 1);
            const edgeFade = Math.sin(normalized * Math.PI);
            const targetOpacity = Math.max(0.1, edgeFade * 0.85);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: targetOpacity, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.3,
                  delay: distanceFromCenter * 0.03, // Middle first, spreading out fast to both sides
                  ease: [0.34, 1.56, 0.64, 1], // Smooth pop scale easing
                }}
                className="w-5 sm:w-8 lg:w-10 h-20 sm:h-24 lg:h-32 rounded-full bg-yellow-200/90 shrink-0"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

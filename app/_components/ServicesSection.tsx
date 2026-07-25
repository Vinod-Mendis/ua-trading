"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "cargo",
    title: "International Cargo",
    subtitle: "Sea & Air Freight Solutions",
    description:
      "Reliable transportation of commercial goods and bulk consignments from Cambodia to Sri Lanka and destinations worldwide.",
    diagram: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect
          x="14"
          y="14"
          width="26"
          height="26"
          transform="rotate(45 27 27)"
          stroke="#f97316"
          strokeWidth="1.5"
        />
        <path
          d="M21 27H33M29 23L33 27L29 31"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="23"
          y="23"
          width="26"
          height="26"
          transform="rotate(45 36 36)"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    id: "personal",
    title: "Personal Packages",
    subtitle: "Door-to-Door Assurance",
    description:
      "Send personal belongings, gifts, and packages safely from Cambodia to family and friends abroad with full package assurance.",
    diagram: (
      <svg className="w-28 h-16" viewBox="0 0 96 64" fill="none">
        <line x1="16" y1="12" x2="16" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="12" x2="28" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="12" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="12" x2="60" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="72" y1="12" x2="72" y2="20" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28H80M72 22L80 28L72 34" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="36" x2="16" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="36" x2="28" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="36" x2="40" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="36" x2="60" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="72" y1="36" x2="72" y2="44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "sourcing",
    title: "Product Sourcing",
    subtitle: "Local Supplier Network",
    description:
      "Helping customers find and purchase quality products from Cambodia. Connecting you directly with trusted local suppliers.",
    diagram: (
      <svg className="w-28 h-16" viewBox="0 0 96 64" fill="none">
        <path d="M12 18C32 18 40 32 60 32M12 32H60M12 46C32 46 40 32 60 32" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 32H80M72 26L80 32L72 38" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "export",
    title: "Export Assistance",
    subtitle: "Documentation & Customs Clearance",
    description:
      "Full support with packaging, documentation, and shipment coordination. Simplifying the export process for hassle-free delivery.",
    diagram: (
      <svg className="w-28 h-16" viewBox="0 0 96 64" fill="none">
        <line x1="12" y1="32" x2="24" y2="32" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="20" r="7" stroke="#f97316" strokeWidth="1.5" fill="white" />
        <circle cx="28" cy="32" r="7" stroke="#f97316" strokeWidth="1.5" fill="white" />
        <circle cx="44" cy="32" r="7" stroke="#f97316" strokeWidth="1.5" fill="white" />
        <circle cx="36" cy="44" r="7" stroke="#f97316" strokeWidth="1.5" fill="white" />
        <path d="M48 32H78M70 26L78 32L70 38" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f4f4f6] py-20 sm:py-28 lg:py-36 text-slate-900" id="services">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Full-width Section Title Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex items-center gap-4 mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl tracking-widest font-mono font-semibold uppercase text-slate-600 whitespace-nowrap">
            <span className="text-slate-400">+</span> OUR SOLUTIONS
          </div>
          <div className="h-px flex-1 bg-slate-300/70" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* First Cell: Intro Text Block & Black Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between p-4 lg:p-6"
          >
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-sm">
              <p>Welcome to the digital future of international logistics.</p>
              <p className="text-slate-600">
                A real-time shipping network helps you to make better and faster decisions based on smart tracking. It&apos;s a framework that allows your business to go from local sourcing to global shipping effortlessly.
              </p>
            </div>
            <div className="pt-8 flex flex-col items-start">
              <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                It&apos;s not magic, it&apos;s purely disruptive logistics engineering.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-none transition-colors mt-6"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="bg-white p-8 lg:p-10 flex flex-col justify-between min-h-[380px] lg:min-h-[420px] shadow-none"
            >
              {/* Top Diagram Illustration */}
              <div className="h-20 flex items-center justify-start">
                {service.diagram}
              </div>

              {/* Title & Description Content */}
              <div className="mt-8">
                <h3 className="text-2xl lg:text-3xl font-display font-medium text-slate-900 mb-12 lg:mb-16">
                  {service.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-rose-500 tracking-wide">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

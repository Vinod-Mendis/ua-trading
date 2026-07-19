"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Package, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contact Us",
    description:
      "Reach out via WhatsApp or our online quote form with your shipping details.",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    number: "02",
    icon: FileText,
    title: "Receive Quote",
    description:
      "Get a clear, upfront quote for weight, dimensions, and speed options.",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    number: "03",
    icon: Package,
    title: "Prepare Goods",
    description:
      "We assist with packaging, labeling, and all necessary export paperwork.",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    number: "04",
    icon: Truck,
    title: "Safe Delivery",
    description:
      "Your cargo departs Cambodia and arrives safely at the destination address.",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28 bg-slate-50 border-b border-slate-100" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 font-display mb-6"
          >
            Our Shipping Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed"
          >
            A simple, transparent flow from Cambodia to your global destination.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center space-y-4"
                >
                  {/* Icon Box */}
                  <div
                    className={`relative w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 text-slate-800`} strokeWidth={1.5} />
                    {/* Number Badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border border-white flex items-center justify-center text-[10px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-slate-900 font-semibold text-lg font-display">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

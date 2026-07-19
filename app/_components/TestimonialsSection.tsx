"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Dilshan Perera",
    country: "Sri Lanka",
    flag: "🇱🇰",
    role: "Business Owner",
    rating: 5,
    review:
      "A & B Trading made sending goods from Cambodia to Sri Lanka simple and stress-free. Our shipment arrived safely and on schedule.",
  },
  {
    name: "Priya Kumari",
    country: "Sri Lanka",
    flag: "🇱🇰",
    role: "Retail Owner",
    rating: 5,
    review:
      "I've been using their services for commercial cargo. The pricing is transparent, communication is clean, and the goods arrive intact.",
  },
  {
    name: "Chaminda Wijesena",
    country: "Sri Lanka",
    flag: "🇱🇰",
    role: "Private Client",
    rating: 5,
    review:
      "Needed to send family packages from Phnom Penh. The team helped with securing the parcels and handling document submissions.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-white border-b border-slate-100 animate-fade-in" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 font-display mb-6">
            Trusted by Businesses &amp; Individuals
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            See how we help clients manage safe deliveries between Cambodia and Sri Lanka.
          </p>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={0.15} className="mb-20">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "500+", label: "Parcels Delivered" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "2+ Years", label: "Active Service" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200/60"
              >
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {value}
                </p>
                <p className="text-slate-500 text-xs mt-1.5 font-medium leading-none">{label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex"
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

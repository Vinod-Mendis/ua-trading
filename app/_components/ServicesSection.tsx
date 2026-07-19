"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Container,
  Package,
  ShoppingBag,
  FileText,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    id: "cargo",
    icon: Container,
    title: "International Cargo",
    description:
      "Reliable transportation of goods from Cambodia to Sri Lanka and other countries. Handling bulk cargo, commercial shipments, and large consignments.",
    features: [
      "Sea & air freight options",
      "Real-time shipment tracking",
      "Customs documentation support",
      "Bulk & commercial cargo",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    id: "personal",
    icon: Package,
    title: "Personal Packages",
    description:
      "Send personal belongings, gifts, and packages safely from Cambodia to your family and friends abroad with full assurance.",
    features: [
      "Door-to-door delivery",
      "Secure packaging assistance",
      "Gift & personal items",
      "Fast turnaround options",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    id: "sourcing",
    icon: ShoppingBag,
    title: "Product Sourcing",
    description:
      "Helping customers find and purchase quality products from Cambodia. Connecting you with trusted local suppliers and handlers.",
    features: [
      "Local supplier network",
      "Quality verification",
      "Bulk purchase support",
      "Cambodia-made products",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    id: "export",
    icon: FileText,
    title: "Export Assistance",
    description:
      "Full support with packaging, documentation, and shipment coordination. Simplifying the export process for hassle-free delivery.",
    features: [
      "Export documentation",
      "Packaging & labeling",
      "Customs clearance help",
      "Shipment coordination",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white border-b border-slate-100" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 font-display mb-6">
            Logistics &amp; Sourcing Solutions
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From personal parcels to commercial goods — we provide structured, reliable shipping from Cambodia.
          </p>
        </AnimatedSection>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <AnimatedSection className="text-center mt-16" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-900 font-semibold hover:text-gold-600 transition-colors group"
          >
            Explore all services in detail
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

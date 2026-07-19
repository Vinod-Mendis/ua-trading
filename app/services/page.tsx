import type { Metadata } from "next";
import {
  Container,
  Package,
  ShoppingBag,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore international cargo shipping, personal parcels delivery, Cambodian supplier sourcing, and export declaration coordination services by A & B Trading.",
};

const services = [
  {
    id: "cargo",
    icon: Container,
    badge: "Commercial Focus",
    title: "International Cargo Shipping",
    description:
      "Reliable bulk cargo and commercial shipping services connecting Cambodia to Sri Lanka and other global ports. We handle shipment bookings, declarations, and tracking milestones.",
    features: [
      "Sea freight & air freight bookings",
      "Full and less-than-container loads",
      "Customs clearing document checks",
      "Cargo transit updates",
      "Commercial cargo handling",
      "Door-to-port coordination options",
      "Secure cargo sorting",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    badgeColor: "bg-slate-900 text-white",
  },
  {
    id: "personal",
    icon: Package,
    badge: "Individual Focus",
    title: "Personal Package Delivery",
    description:
      "Send personal parcels, gifts, family care packages, and clothing safely abroad. We organize pick-ups and help verify packaging conforms to shipping rules.",
    features: [
      "Gifts and family care packages",
      "Clothing, footwear and accessories",
      "Secure box wrapping checks",
      "Affordable parcel pricing weight brackets",
      "WhatsApp shipping updates",
      "Simple pick-up scheduling",
      "Permitted dry goods shipping",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-700 border border-slate-200",
  },
  {
    id: "sourcing",
    icon: ShoppingBag,
    badge: "Supplier Search",
    title: "Product Sourcing from Cambodia",
    description:
      "Looking to purchase quality Cambodian dry goods or local manufactures? We assist with locating trusted suppliers, checking products, and shipping purchases.",
    features: [
      "Cambodian dry goods supplier locating",
      "Basic supplier checks",
      "Local procurement coordination",
      "Handicrafts and textiles sourcing support",
      "Bulk purchase coordination",
      "Pre-shipment packaging reviews",
      "Consolidated shipping preparation",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-700 border border-slate-200",
  },
  {
    id: "export",
    icon: FileText,
    badge: "Documentation",
    title: "Export Coordination & Documentation",
    description:
      "Simplify your export coordination. We help verify invoices, packing lists, and clearance certificates required to ensure smooth border exits from Cambodia.",
    features: [
      "Export invoice format checking",
      "Packing list review templates",
      "Customs declaration submission checks",
      "Border clearance document checking",
      "Packaging standard reviews",
      "Regulatory alignment guidance",
      "Coordination with local handlers",
    ],
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    badgeColor: "bg-slate-100 text-slate-700 border border-slate-200",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              Our Services
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              From personal package dispatches to commercial cargo forwarding, we simplify shipping and sourcing in Cambodia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection
                  key={service.id}
                  direction={isEven ? "left" : "right"}
                  delay={0.05}
                >
                  <div
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12 rounded-xl bg-white border border-slate-200/80 hover:border-slate-350 transition-all duration-300`}
                  >
                    {/* Content details */}
                    <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-lg ${service.bg} border border-slate-200 flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${service.color}`} strokeWidth={1.75} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 text-sm text-slate-900 font-semibold hover:text-gold-600 transition-colors group"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>

                    {/* Features checklist box */}
                    <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                      <div className={`p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200`}>
                        <h3 className="text-slate-900 font-semibold text-xs uppercase tracking-widest mb-4">
                          Service Details
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2.5">
                              <CheckCircle2 className={`w-4 h-4 text-slate-800 shrink-0 mt-0.5`} strokeWidth={2} />
                              <span className="text-slate-600 text-xs sm:text-sm leading-normal">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 font-display mb-4">
              Need a Custom Logistics Plan?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Describe your package volume or import frequency, and our coordinators will suggest a competitive freight route.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/quote"
                className="btn-gold flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Get Quote
              </Link>
              <a
                href="https://wa.me/85512345678?text=Hello%2C%20I%20have%20questions%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

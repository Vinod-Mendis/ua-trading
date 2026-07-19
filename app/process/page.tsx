import type { Metadata } from "next";
import {
  MessageCircle,
  FileText,
  Package,
  Truck,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import ProcessTimeline from "../_components/ProcessTimeline";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Explore the step-by-step cargo pickup, quoting, customs documentation, and destination delivery flow by A & B Trading.",
};

const detailedSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Request Quotation",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    details: [
      "Contact us via our WhatsApp line or online form.",
      "Submit cargo description, estimated weight, and measurements.",
      "Provide pickup city in Cambodia and destination details.",
    ],
    tip: "Include approximate carton count for faster quote estimates.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Receive Transparent Quote",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    details: [
      "Receive weight-based calculations and transparent rates.",
      "Choose economy sea freight or expedited air options.",
      "Get final pricing validation without hidden handling costs.",
    ],
    tip: "Quotes are provided promptly during business hours.",
  },
  {
    number: "03",
    icon: Package,
    title: "Packaging & Document Prep",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    details: [
      "Arrange pickup service or drop packages at our hub.",
      "Our team checks box wrapping compliance.",
      "We prepare import-export customs declaration manifests.",
    ],
    tip: "Secure box packing is essential to prevent transit damage.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Safe Dispatch & Delivery",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    details: [
      "Cargo departs Phnom Penh on scheduled transit dates.",
      "Receive progress notifications directly via WhatsApp chat.",
      "Package delivered safely to destination address.",
    ],
    tip: "WhatsApp updates keep you informed at major milestones.",
  },
];

const faqs = [
  {
    q: "How long does shipping to Sri Lanka take?",
    a: "Sea cargo generally requires 14–21 days. Air shipping takes about 3–7 days depending on regulatory checks.",
  },
  {
    q: "Do you coordinate customs clearances?",
    a: "Yes, A & B Trading manages customs documentation preparation. You only need to supply basic description and invoice lists.",
  },
  {
    q: "Are there weight or size limits?",
    a: "We accommodate both small personal packages and large commercial pallet cargo. Details can be coordinated during quote reviews.",
  },
  {
    q: "Is packaging verification included?",
    a: "Yes, we check boxes to ensure safety compliance prior to dispatch. If needed, we advise on box reinforcements.",
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Our Method
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              How Our Shipping Works
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Straightforward and coordinated milestones, from Phnom Penh pickup to destination delivery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <ProcessTimeline />

      {/* Steps Detail */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display">
              Step-by-Step Overview
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={index * 0.05} direction="left">
                  <div className="p-8 rounded-lg bg-white border border-slate-200 hover:border-slate-350 transition-all flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                    {/* Circle Icon Badge */}
                    <div className={`w-14 h-14 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-slate-900" strokeWidth={1.5} />
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600">
                          Step {step.number}
                        </span>
                        <h3 className="text-slate-900 font-semibold text-lg font-display">
                          {step.title}
                        </h3>
                      </div>

                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2.5 text-slate-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-slate-800 mt-0.5 shrink-0" strokeWidth={2} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="p-3.5 rounded bg-slate-50 border border-slate-200/60 text-xs text-slate-500 leading-relaxed">
                        <strong>Advice:</strong> {step.tip}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Support FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <AnimatedSection key={q} delay={i * 0.05}>
                <details className="group p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-350 cursor-pointer transition-all">
                  <summary className="flex items-center justify-between gap-4 text-slate-900 font-semibold text-sm list-none">
                    <span>{q}</span>
                    <ChevronDown className="w-4.5 h-4.5 text-slate-500 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {a}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

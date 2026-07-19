import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Handshake,
  Globe2,
  CheckCircle2,
  Award,
} from "lucide-react";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A & B Trading — Cambodia's trusted international shipping and export company. Our mission, vision, values, and why customers choose us.",
};

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We honor our commitments. If we promise a shipment arrival date, we execute on it.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "We treat your goods with maximum attention to detail and care, handling them safely.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and zero hidden surcharges.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: Globe2,
    title: "Global Link",
    description:
      "Bridging distances directly and simplifying cross-border regulations.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
];

const stats = [
  { value: "500+", label: "Shipments Completed" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Countries Connected" },
  { value: "2+", label: "Years of Trust" },
];

const trustReasons = [
  "Licensed international cargo & logistics provider",
  "Specialized knowledge in Cambodia to Sri Lanka trade rules",
  "End-to-end customs declarations & document prep",
  "Proactive WhatsApp notifications and tracking milestones",
  "Safe warehouse handling and heavy package loading",
  "Clear, upfront quotation and competitive prices",
  "Friendly, responsive client service team",
  "Verified record of successful deliveries",
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Company Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              About A &amp; B Trading
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Specialized international freight forwarding and trade logistics solutions, connecting Cambodia with global destinations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story & Stats */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Our Origin
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display mb-6">
                Bridging Distances Simply
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed text-base font-normal">
                <p>
                  A &amp; B Trading was established to simplify export logistics for individuals and business entities operating out of Cambodia. We recognized a common challenge: clients needed an international shipping provider that offered reliable coordination, clear pricing, and consistent follow-through.
                </p>
                <p>
                  With specialized focus on Cambodia-to-Sri Lanka transport lanes, we developed precise knowledge of local regulatory requirements, border clearances, and air/sea freight routing. Our team handles the heavy lifting, giving you complete peace of mind.
                </p>
              </div>
            </AnimatedSection>

            {/* Stat Cards */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-xl space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="text-center p-5 rounded-lg bg-white border border-slate-200/50"
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                        {value}
                      </p>
                      <p className="text-slate-500 text-xs mt-1.5 font-medium leading-none">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-4.5 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-slate-900 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">
                        Verified Shipping Partner
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Phnom Penh Coordination Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Target,
                label: "Mission",
                text:
                  "To deliver reliable, straightforward, and professional global shipping support that helps clients coordinate cargo and parcel exports without regulatory complications or unexpected pricing.",
              },
              {
                icon: Eye,
                label: "Vision",
                text:
                  "To remain Cambodia's preferred logistics partner for specialized trade corridors — distinguished by professional consistency, straightforward customer support, and accessible services.",
              },
            ].map(({ icon: Icon, label, text }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
                <div className="p-8 rounded-xl bg-white border border-slate-200/60 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-250/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-slate-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 font-display mb-4">
                    Our {label}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display">
              Our Professional Values
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description, color, bg, border }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-350 transition-all text-center h-full flex flex-col items-center">
                  <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Service Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display mb-6">
                Why Clients Choose Us
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We focus on simple coordination, transparent quotation pricing, and keeping clients updated on their freight status.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {trustReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-slate-800 mt-0.5 shrink-0" strokeWidth={1.75} />
                    <span className="text-slate-600 text-sm leading-normal">{reason}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-white border border-slate-200 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <Users className="w-8 h-8 text-slate-800" strokeWidth={1.5} />
                  <div>
                    <p className="text-slate-900 font-semibold text-base">
                      Our Operating Pledge
                    </p>
                    <p className="text-slate-400 text-xs">
                      Reliable coordination flow
                    </p>
                  </div>
                </div>
                {[
                  "Prompt cargo pickups from major hubs in Cambodia",
                  "Accurate declarations and paperwork compliance checks",
                  "Clear progress reports delivered over convenient WhatsApp chat",
                  "Safe warehousing, package security, and sorting",
                  "Follow-up checks upon delivery arrival at destination",
                ].map((commitment) => (
                  <div
                    key={commitment}
                    className="flex items-start gap-3 mb-4.5 last:mb-0"
                  >
                    <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-slate-700" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {commitment}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Ship?"
        description="Book your next international package dispatch or commercial shipment with A & B Trading."
      />
    </div>
  );
}

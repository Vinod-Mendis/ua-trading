import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, Shield } from "lucide-react";
import QuoteForm from "../_components/QuoteForm";
import AnimatedSection from "../_components/AnimatedSection";

export const metadata: Metadata = {
  title: "Request a Shipping Quote",
  description:
    "Get a free shipping quote from Cambodia to Sri Lanka and other international destinations. Fill out the A & B Trading quotation request form.",
};

const highlights = [
  {
    icon: Shield,
    label: "Quote Terms",
    text: "Free, no obligation estimates",
    color: "text-slate-900",
  },
  {
    icon: MessageCircle,
    label: "Coordinators",
    text: "Prompt reply within 24 hours",
    color: "text-slate-900",
  },
  {
    icon: Phone,
    label: "WhatsApp Support",
    text: "+855 12 345 678",
    color: "text-slate-900",
  },
  {
    icon: Mail,
    label: "Direct Email",
    text: "info@abandtrading.com",
    color: "text-slate-900",
  },
];

export default function QuotePage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Get Started
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              Request a Shipping Quote
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Provide your package description and destination address below for a transparent, weight-based quotation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Page Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left">
                <div className="space-y-6 sticky top-28">
                  {/* Highlights list */}
                  <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-lg space-y-5">
                    <h2 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-4">
                      Quote Highlights
                    </h2>
                    <div className="space-y-4">
                      {highlights.map(({ icon: Icon, label, text, color }) => (
                        <div key={label} className="flex gap-3 items-start">
                          <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0">
                            <Icon className={`w-4 h-4 ${color}`} strokeWidth={1.75} />
                          </div>
                          <div>
                            <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                              {label}
                            </p>
                            <p className="text-slate-900 text-sm font-semibold mt-0.5">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Chat Link */}
                  <a
                    href="https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20a%20shipping%20quote%20from%20Cambodia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-lg border border-slate-250 bg-white hover:border-slate-450 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded bg-slate-50 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm leading-none">
                        Prefer WhatsApp Chat?
                      </p>
                      <p className="text-slate-400 text-xs mt-1.5 group-hover:underline">
                        Chat directly with us →
                      </p>
                    </div>
                  </a>

                  {/* Flow note */}
                  <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
                    <h3 className="text-slate-900 font-semibold text-xs uppercase tracking-wider mb-3">
                      Processing Steps
                    </h3>
                    <ol className="space-y-2.5 text-xs text-slate-500 font-medium list-decimal list-inside leading-relaxed">
                      <li>We review specifications.</li>
                      <li>We check customs rules.</li>
                      <li>We send transparent rate plans.</li>
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form section */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs">
                  <div className="mb-8">
                    <h2 className="text-slate-900 font-semibold text-xl font-display mb-2">
                      Submit Your Inquiry
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Please enter exact requirements for precise cost estimates. Required fields are marked with asterisk.
                    </p>
                  </div>
                  <QuoteForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

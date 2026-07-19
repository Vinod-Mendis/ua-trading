import type { Metadata } from "next";
import ContactSection from "../_components/ContactSection";
import AnimatedSection from "../_components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with A & B Trading. Reach our coordinators via WhatsApp, phone, email, or submission message form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              Contact A &amp; B Trading
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Reach out with any shipping bookings, customs documentation questions, or product sourcing requests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Office Details */}
      <section className="py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Business Hours */}
            <AnimatedSection direction="left">
              <div className="bg-white border border-slate-200 p-8 rounded-lg">
                <h3 className="text-slate-900 font-semibold text-base uppercase tracking-wider mb-6">
                  Operating Hours
                </h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "WhatsApp Coordination Only" },
                  ].map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between border-b border-slate-100 pb-3.5 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-500 text-sm">{day}</span>
                      <span className="text-slate-900 text-sm font-semibold">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-400 text-xs font-medium">
                  Indochina Time (ICT, UTC+7) — Phnom Penh, Cambodia.
                </p>
              </div>
            </AnimatedSection>

            {/* Office Address Location */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white border border-slate-200 p-8 rounded-lg h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-900 font-semibold text-base uppercase tracking-wider mb-6">
                    Office Location
                  </h3>
                  <address className="not-italic space-y-2">
                    <p className="text-slate-900 font-semibold text-sm">A &amp; B Trading</p>
                    <p className="text-slate-500 text-sm">Phnom Penh, Cambodia</p>
                    <p className="text-slate-400 text-xs mt-2.5">
                      Export pickup operations coordinated throughout Cambodia.
                    </p>
                  </address>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=Phnom+Penh,+Cambodia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-900 hover:text-gold-600 flex items-center gap-1"
                  >
                    🗺️ View Location on Google Maps →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

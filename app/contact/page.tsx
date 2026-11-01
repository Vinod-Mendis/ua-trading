import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import ContactSection from "../_components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach A & B Trading in Phnom Penh by WhatsApp, phone, or email. Monday to Saturday, Indochina time.",
};

const highlight =
  "bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pt-28 lg:pt-36 pb-16 lg:pb-24" aria-label="Contact">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-20">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
                <span className="text-slate-400">+</span> CONTACT
              </div>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <AnimatedSection className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-[1.15]">
                Write, call,
                <br />
                <span className={highlight}>or send a note.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-4">
              <div className="flex items-start gap-2.5 text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
                <span className="text-slate-400 select-none font-mono text-xl leading-none pt-0.5">
                  └
                </span>
                <p>The desk in Phnom Penh answers on WhatsApp, phone, and email.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

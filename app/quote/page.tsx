import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import QuoteForm from "../_components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Shipping Quote",
  description:
    "Ask A & B Trading for a weight-based quote from Cambodia to Sri Lanka or another destination.",
};

const highlight =
  "bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]";

const notes = [
  { label: "Reply", value: "Within one business day" },
  { label: "WhatsApp", value: "+855 12 345 678", href: "https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20a%20shipping%20quote%20from%20Cambodia." },
  { label: "Email", value: "info@abandtrading.com", href: "mailto:info@abandtrading.com" },
];

export default function QuotePage() {
  return (
    <>
      <section className="bg-white pt-28 lg:pt-36 pb-16 lg:pb-24" aria-label="Request a quote">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-20">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
                <span className="text-slate-400">+</span> QUOTE
              </div>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <AnimatedSection className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-[1.15]">
                Tell us the weight
                <br />
                <span className={highlight}>and where it goes.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-4">
              <div className="flex items-start gap-2.5 text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
                <span className="text-slate-400 select-none font-mono text-xl leading-none pt-0.5">
                  └
                </span>
                <p>Sea and air prices come back with the handling already included.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f6] py-20 sm:py-28 lg:py-36">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <aside className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Before you send it
              </p>
              <ul className="mt-8 divide-y divide-slate-300/80">
                {notes.map((note) => (
                  <li key={note.label} className="py-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      {note.label}
                    </p>
                    {note.href ? (
                      <a
                        href={note.href}
                        target={note.href.startsWith("http") ? "_blank" : undefined}
                        rel={note.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-lg text-slate-900 hover:underline"
                      >
                        {note.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg text-slate-900">{note.value}</p>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-500 leading-relaxed max-w-sm">
                We read the details, check the lane, and send the rate. No account, no deposit to ask.
              </p>
            </aside>

            <div className="lg:col-span-8 bg-white p-6 sm:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

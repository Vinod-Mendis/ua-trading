import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A & B Trading is a Phnom Penh freight desk. We ship commercial cargo and personal packages from Cambodia to Sri Lanka, with the documents and the tracking included.",
};

const practices = [
  {
    kicker: "The lane",
    title: "Cambodia to Sri Lanka",
    description:
      "Sea and air freight from Phnom Penh, with onward ports when the cargo needs them.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Shipping containers stacked at a port",
  },
  {
    kicker: "The documents",
    title: "Cleared before it leaves",
    description:
      "Invoices, packing lists, and customs papers checked before the shipment moves.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Shipping documents being reviewed on a desk",
  },
  {
    kicker: "The updates",
    title: "WhatsApp, not a portal",
    description:
      "Pickup, departure, and arrival sent on the same thread you used to book.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse team handling outbound freight",
  },
];

const record = [
  { value: "99.8%", label: "On-time cargo delivery" },
  { value: "50+", label: "Destination ports" },
  { value: "24/7", label: "Tracking updates" },
];

const highlight =
  "bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-28 lg:pt-36 pb-8 lg:pb-12" aria-label="About">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-20">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
                <span className="text-slate-400">+</span> ABOUT
              </div>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <AnimatedSection className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-[1.15]">
                A freight desk in
                <br />
                <span className={highlight}>Phnom Penh.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-4">
              <div className="flex items-start gap-2.5 text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
                <span className="text-slate-400 select-none font-mono text-xl leading-none pt-0.5">
                  └
                </span>
                <p>
                  Commercial cargo and personal packages, quoted in the open and followed until they land.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.18} className="mt-14 lg:mt-20">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
                alt="Shipping containers stacked on a cargo vessel"
                className="w-full h-[42vh] min-h-[260px] max-h-[520px] object-cover"
              />
              <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-400">
                Sea freight leaving for Sri Lanka
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full bg-white py-20 sm:py-28 lg:py-36 text-slate-900 border-t border-slate-100">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <AnimatedSection className="lg:col-span-3 pt-1">
              <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl tracking-widest font-mono font-semibold uppercase text-slate-600">
                <span className="text-slate-400">+</span> OUR STORY
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-9">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 leading-[1.25] tracking-tight">
                Shippers here were losing days to vague quotes and customs
                paperwork. We still do the same three things: price the
                shipment, prepare the documents, and{" "}
                <span className={highlight}>stay on it</span> until delivery.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f6] py-20 sm:py-28 lg:py-36 text-slate-900">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-16">
              <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl tracking-widest font-mono font-semibold uppercase text-slate-600 whitespace-nowrap">
                <span className="text-slate-400">+</span> HOW WE OPERATE
              </div>
              <div className="h-px flex-1 bg-slate-300/70" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {practices.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <article className="bg-white h-full">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-medium text-rose-500 tracking-wide">
                      {item.kicker}
                    </p>
                    <h2 className="mt-6 text-2xl lg:text-3xl font-display font-medium text-slate-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
            {record.map((item, index) => (
              <AnimatedSection key={item.label} delay={0.15 + index * 0.08}>
                <div className="bg-slate-950 text-white p-8 h-full">
                  <p className="text-4xl sm:text-5xl font-bold font-display text-[#FFE67B] tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm text-white/70">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

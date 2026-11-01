import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How a shipment moves with A & B Trading: contact, quote, packing and paperwork, then delivery from Cambodia to Sri Lanka.",
};

const highlight =
  "bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]";

const steps = [
  {
    number: "01",
    title: "Contact us",
    description:
      "Send the weight, the carton count, and where it is going. WhatsApp or the quote form both work.",
    points: ["Pickup city in Cambodia", "Destination address", "Sea or air, if you already know"],
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=80",
    alt: "Someone sending a message from a phone",
  },
  {
    number: "02",
    title: "Receive a quote",
    description:
      "You get a weight-based price for sea and for air. The number includes the handling we already know about.",
    points: ["Sea and air options", "No added handling line later", "Sent during business hours"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    alt: "Paperwork and a calculator spread on a desk",
  },
  {
    number: "03",
    title: "Prepare the goods",
    description:
      "We pick the shipment up or you drop it at the hub. The box is checked, labeled, and the export papers are written.",
    points: ["Pickup or drop-off", "Box check before it leaves", "Invoice and packing list"],
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1400&q=80",
    alt: "Packed parcels stacked for dispatch",
  },
  {
    number: "04",
    title: "Deliver it",
    description:
      "It leaves Phnom Penh on the date we quoted. You get WhatsApp when it departs, clears, and arrives.",
    points: ["Departure from Cambodia", "Customs at the destination", "Handoff at the address"],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    alt: "An airplane wing above the clouds",
  },
];

const questions = [
  {
    q: "How long does Sri Lanka take?",
    a: "Sea is usually 14–21 days. Air is about 3–7 days, once the papers clear.",
  },
  {
    q: "Who handles customs?",
    a: "We prepare the declaration. You send a description of the goods and the invoice.",
  },
  {
    q: "Is there a size limit?",
    a: "Personal parcels and pallet cargo both move. The limit is set in the quote, not after pickup.",
  },
  {
    q: "Do you check the packing?",
    a: "Yes, before it leaves. If the box needs reinforcement, we tell you then.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-white pt-28 lg:pt-36 pb-8 lg:pb-12" aria-label="How it works">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-20">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
                <span className="text-slate-400">+</span> HOW IT WORKS
              </div>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <AnimatedSection className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-[1.15]">
                Quote, pack,
                <br />
                <span className={highlight}>then it leaves.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-4">
              <div className="flex items-start gap-2.5 text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
                <span className="text-slate-400 select-none font-mono text-xl leading-none pt-0.5">
                  └
                </span>
                <p>Four steps from the first message in Phnom Penh to the handoff abroad.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.18} className="mt-14 lg:mt-20">
            <figure>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[42vh] min-h-[260px] max-h-[520px] object-cover"
                src="https://res.cloudinary.com/vccpsacloud/video/upload/f_auto,q_auto,w_1600/v1784470263/12973389_1920_1080_60fps_online-video-cutter.com_pkgmsr.webm"
                aria-label="Freight moving through a shipping yard"
              />
              <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-400">
                Pickup to handoff
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
                <span className="text-slate-400">+</span> THE PATH
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-9">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 leading-[1.25] tracking-tight">
                You send the weight and the destination. We price it, check the
                box, and move it.{" "}
                <span className={highlight}>Nothing else</span> sits between
                those steps.
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
                <span className="text-slate-400">+</span> FOUR STEPS
              </div>
              <div className="h-px flex-1 bg-slate-300/70" />
            </div>
          </AnimatedSection>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <AnimatedSection key={step.number}>
                  <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className={`w-full aspect-[4/3] object-cover lg:col-span-6 ${
                        imageFirst ? "" : "lg:order-2"
                      }`}
                    />
                    <div className={`lg:col-span-6 ${imageFirst ? "" : "lg:order-1"}`}>
                      <p className="text-xs font-mono font-medium tracking-widest text-slate-400">
                        {step.number}
                      </p>
                      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 tracking-tight">
                        {step.title}
                      </h2>
                      <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                      <ul className="mt-6 space-y-2 text-sm text-slate-500">
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-16 lg:mt-20">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 transition-colors"
            >
              Request a quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full bg-white py-20 sm:py-28 lg:py-36 text-slate-900">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-16">
              <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl tracking-widest font-mono font-semibold uppercase text-slate-600 whitespace-nowrap">
                <span className="text-slate-400">+</span> QUESTIONS
              </div>
              <div className="h-px flex-1 bg-slate-300/70" />
            </div>
          </AnimatedSection>

          <div>
            {questions.map((item, index) => (
              <AnimatedSection key={item.q} delay={index * 0.05}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-slate-200">
                  <h2 className="lg:col-span-5 text-2xl sm:text-3xl font-display font-normal text-slate-900 tracking-tight">
                    {item.q}
                  </h2>
                  <p className="lg:col-span-7 text-slate-500 text-base sm:text-lg leading-relaxed">
                    {item.a}
                  </p>
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

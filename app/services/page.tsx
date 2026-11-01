import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "International cargo, personal packages, product sourcing, and export paperwork from Cambodia to Sri Lanka.",
};

const highlight =
  "bg-yellow-200 px-[0.2em] box-decoration-clone [box-decoration-break:clone]";

const services = [
  {
    id: "cargo",
    kicker: "Sea & air freight",
    title: "International Cargo",
    description:
      "Commercial consignments from Cambodia to Sri Lanka and onward ports. Full containers and smaller loads, booked and tracked.",
    points: ["Sea or air", "Container and smaller loads", "Departure to arrival updates"],
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80",
    alt: "Shipping containers stacked at a port",
  },
  {
    id: "personal",
    kicker: "Door to door",
    title: "Personal Packages",
    description:
      "Gifts, clothes, and family parcels picked up in Cambodia and delivered abroad. The quote is based on weight, not a surprise at the dock.",
    points: ["Pickup in Phnom Penh", "Weight-based quote", "Updates on WhatsApp"],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
    alt: "Packages prepared for delivery",
  },
  {
    id: "sourcing",
    kicker: "Local suppliers",
    title: "Product Sourcing",
    description:
      "We find a Cambodian supplier, check the goods, and ship the purchase as one consignment.",
    points: ["Dry goods and textiles", "Supplier check before you pay", "Packed and shipped together"],
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=80",
    alt: "Folded textiles ready for sourcing",
  },
  {
    id: "export",
    kicker: "Customs paperwork",
    title: "Export Assistance",
    description:
      "Invoices, packing lists, and clearance papers prepared so the shipment can leave Cambodia without a last-minute hold.",
    points: ["Invoice and packing list", "Customs declaration", "Coordination with local handlers"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    alt: "Export documents spread across a desk",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pt-28 lg:pt-36 pb-8 lg:pb-12" aria-label="Services">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full flex items-center gap-4 mb-12 lg:mb-20">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs sm:text-sm tracking-widest font-mono font-medium uppercase whitespace-nowrap">
                <span className="text-slate-400">+</span> SERVICES
              </div>
              <div className="h-px flex-1 bg-slate-300/80" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <AnimatedSection className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-[1.15]">
                Cargo, parcels,
                <br />
                <span className={highlight}>sourcing, paperwork.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-4">
              <div className="flex items-start gap-2.5 text-slate-600 text-base sm:text-lg lg:text-xl font-light leading-snug max-w-xs">
                <span className="text-slate-400 select-none font-mono text-xl leading-none pt-0.5">
                  └
                </span>
                <p>Four services from one desk in Phnom Penh. The quote covers the one you actually need.</p>
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
                src="https://res.cloudinary.com/vccpsacloud/video/upload/v1784984148/container-video_dwxqwd.mp4"
                aria-label="Containers moving through a freight terminal"
              />
              <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-400">
                Freight leaving Cambodia
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
                <span className="text-slate-400">+</span> WHAT YOU CAN BOOK
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="lg:col-span-9">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 leading-[1.25] tracking-tight">
                We move commercial cargo, send personal packages, find the
                supplier, and prepare the export papers{" "}
                <span className={highlight}>before it leaves</span> Phnom Penh.
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
                <span className="text-slate-400">+</span> THE SERVICES
              </div>
              <div className="h-px flex-1 bg-slate-300/70" />
            </div>
          </AnimatedSection>

          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <AnimatedSection key={service.id}>
                  <article
                    id={service.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-32"
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      className={`w-full aspect-[4/3] object-cover lg:col-span-6 ${
                        imageFirst ? "" : "lg:order-2"
                      }`}
                    />
                    <div className={`lg:col-span-6 ${imageFirst ? "" : "lg:order-1"}`}>
                      <p className="text-xs font-medium text-rose-500 tracking-wide">
                        {service.kicker}
                      </p>
                      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2 text-sm text-slate-500">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <Link
                        href="/quote"
                        className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 mt-8 transition-colors"
                      >
                        Request a quote
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

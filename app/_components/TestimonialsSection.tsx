"use client";

import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    number: "01",
    name: "Beau Miller",
    company: "Forbes",
    role: "IT & Network Manager",
    country: "Sri Lanka",
    review:
      "Before A & B Trading was in place, this was all done manually and was taking an extreme amount of time. The whole process from start to finish was eating a few days for at least 2 people. Now, with A & B Trading, we’re down to minutes a day for these orders",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: "02",
    name: "Alexander Vance",
    company: "Global Logistics",
    role: "Operations Director",
    country: "Sri Lanka",
    review:
      "We’ve been working with A & B Trading for over two years now. We almost forgot how complex shipping used to be. The custom clearance and dispatch functions are completely handled without hassle, and our packages are always delivered on schedule",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: "03",
    name: "Dilshan Perera",
    company: "Ceylon Trade Co",
    role: "Retail & Import Lead",
    country: "Sri Lanka",
    review:
      "A & B Trading made sending goods from Cambodia to Sri Lanka simple and stress-free. Our shipments arrive safely, customer support is responsive, and transparency in pricing is unmatched",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: "04",
    name: "Samantha Reed",
    company: "Apex Cargo",
    role: "Supply Chain Manager",
    country: "Sri Lanka",
    review:
      "Outstanding speed and communication! Tracking international goods from Phnom Penh to Colombo used to be stressful, but A & B Trading handles every detail with ultimate care and efficiency",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    number: "05",
    name: "Rohan Fernando",
    company: "Lanka Imports",
    role: "Managing Director",
    country: "Sri Lanka",
    review:
      "The most reliable freight partner between Cambodia and Sri Lanka. Their document handling and customer assistance make cross-border trade completely effortless",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white border-b border-slate-100 animate-fade-in overflow-hidden w-full relative" id="testimonials">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Section Header Grid: Title on Left, Sub-description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          <AnimatedSection className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] font-display">
              Trusted By <br />
              Our Clients
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-6 lg:pt-2 flex lg:justify-end">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md lg:ml-auto">
              See how we help businesses and individuals manage safe, reliable deliveries between Cambodia, Sri Lanka, and worldwide destinations.
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal Separator Line (with faded ends) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-12 lg:my-16" />
      </div>

      {/* Full-width Testimonials Marquee */}
      <AnimatedSection delay={0.2} className="w-full relative overflow-hidden py-4">
        <Marquee
          pauseOnHover={true}
          speed={40}
          gradient={true}
          gradientColor="255, 255, 255"
          gradientWidth={80}
          className="py-4 overflow-hidden"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[360px] sm:w-[420px] px-3 flex-shrink-0 flex items-stretch h-[400px]"
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </Marquee>
      </AnimatedSection>
    </section>
  );
}




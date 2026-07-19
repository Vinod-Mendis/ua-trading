import type { Metadata } from "next";
import GalleryGrid from "../_components/GalleryGrid";
import AnimatedSection from "../_components/AnimatedSection";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View images representing cargo loading, secure package handling, and delivered shipments by A & B Trading.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white pt-20">
      {/* Title Banner */}
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <AnimatedSection>
            <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
              Our Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display mb-6">
              Operations &amp; Delivery Images
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Visual records detailing cargo preparations, container loading, and safe arrivals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid Container */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Coordinate Your Cargo With Us"
        description="Book your next international package dispatch or commercial shipment with A & B Trading."
      />
    </div>
  );
}

import type { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import TrustBadges from "./_components/TrustBadges";
import ServicesSection from "./_components/ServicesSection";
import ProcessTimeline from "./_components/ProcessTimeline";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";

export const metadata: Metadata = {
  title: "A & B Trading | Cambodia International Shipping & Export",
  description:
    "Cambodia's #1 shipping and trading company. We deliver goods from Cambodia to Sri Lanka and worldwide. Reliable, affordable, and trusted. Get your free shipping quote today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

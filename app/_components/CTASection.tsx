import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
}

export default function CTASection({}: CTASectionProps) {
  return (
    <section className="w-full bg-yellow-200 py-16 sm:py-20 lg:py-28 text-slate-900 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-slate-900 tracking-tight leading-tight">
          Let&apos;s work <span className="font-bold">together!</span>
        </h2>
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-10 py-4 rounded-none transition-colors shadow-none"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}



import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
}

export default function CTASection({
  title = "Ready to Ship from Cambodia?",
  description = "Get a free, transparent shipping quote today. Our team is ready to coordinate your logistics requirements.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-150 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Accent indicator */}
        <div className="w-12 h-1 bg-slate-900 rounded-full mx-auto mb-10" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 font-display mb-6">
          {title}
        </h2>
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto sm:max-w-none">
          <Link
            href={primaryHref}
            className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold w-full sm:w-auto shadow-xs"
          >
            {primaryLabel}
            <ChevronRight className="w-4 h-4" />
          </Link>
          {showWhatsApp && (
            <a
              href="https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20a%20shipping%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

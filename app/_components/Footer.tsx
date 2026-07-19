import Link from "next/link";
import {
  Ship,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Share2,
  AtSign,
  Send,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/process", label: "How It Works" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#cargo", label: "International Cargo" },
    { href: "/services#personal", label: "Personal Packages" },
    { href: "/services#sourcing", label: "Product Sourcing" },
    { href: "/services#export", label: "Export Assistance" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                <Ship className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <span className="block text-slate-900 font-semibold text-lg font-display">
                  A &amp; B <span className="text-gold-600 font-bold">Trading</span>
                </span>
                <span className="block text-slate-400 text-[9px] tracking-widest uppercase">
                  Cambodia Export &amp; Shipping
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Providing modern, simple, and reliable international shipping solutions from Cambodia. Built on transparency and professional service.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Share2, href: "#", label: "Facebook" },
                { Icon: AtSign, href: "#", label: "Instagram" },
                { Icon: Send, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-xs uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-250 text-slate-900" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-xs uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-250 text-slate-900" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-semibold text-xs uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/85512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                  <span>+855 12 345 678 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+85512345678"
                  className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-slate-700" />
                  <span>+855 12 345 678</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abandtrading.com"
                  className="flex items-start gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-slate-700" />
                  <span>info@abandtrading.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-700" />
                <span>Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            &copy; {year} A &amp; B Trading. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs tracking-wider uppercase font-medium">
            Connecting Cambodia with the World
          </p>
        </div>
      </div>
    </footer>
  );
}

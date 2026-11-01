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
    <footer className="bg-white text-slate-600 border-t border-slate-100 pt-8 sm:pt-10 lg:pt-12 overflow-hidden w-full relative">
      {/* Outer Card Wrapper */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative">
        {/* Main Off-White Card Container - Compact Vertical Padding */}
        <div className="bg-[#f4f4f6] rounded-md p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xs">
          {/* Top Section: Logo & Description on Left, Social Icons on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 sm:mb-10">
            {/* Left Brand Area */}
            <div className="space-y-3 max-w-lg">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-slate-950 flex items-center justify-center shadow-xs">
                  <Ship className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <div className="leading-tight">
                  <span className="block text-slate-950 font-bold text-lg font-display">
                    A &amp; B <span className="text-gold-600">Trading</span>
                  </span>
                  <span className="block text-slate-400 text-[9px] tracking-widest uppercase">
                    Cambodia Export &amp; Shipping
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-0.5">
                Providing modern, simple, and reliable international shipping solutions from Cambodia. Built on transparency and professional service.
              </p>
            </div>

            {/* Right Social Media Pills */}
            <div className="flex items-center gap-2.5 self-start lg:self-auto">
              {[
                { Icon: Share2, href: "#", label: "Facebook" },
                { Icon: AtSign, href: "#", label: "Instagram" },
                { Icon: Send, href: "#", label: "Twitter" },
                { Icon: MessageCircle, href: "https://wa.me/85512345678", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9.5 h-9.5 rounded-xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links & Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-2 pb-6 border-b border-slate-200/80">
            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-slate-950 font-semibold text-xs uppercase tracking-widest">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-xs sm:text-sm text-slate-500 hover:text-slate-950 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-3">
              <h3 className="text-slate-950 font-semibold text-xs uppercase tracking-widest">
                Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-xs sm:text-sm text-slate-500 hover:text-slate-950 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-2">
              <h3 className="text-slate-950 font-semibold text-xs uppercase tracking-widest">
                Contact &amp; Location
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-500">
                <li>
                  <a
                    href="https://wa.me/85512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-slate-950 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+855 12 345 678 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+85512345678"
                    className="flex items-center gap-2 hover:text-slate-950 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>+855 12 345 678</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@abandtrading.com"
                    className="flex items-center gap-2 hover:text-slate-950 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>info@abandtrading.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>Phnom Penh, Cambodia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Bottom Row: Copyright & Legal */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-5">
              <Link href="/services" className="hover:text-slate-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="hover:text-slate-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-slate-400 font-medium">
              All rights reserved {year} @ A &amp; B Trading
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Seamless Blended Ocean Video at Bottom of Footer */}
      <div className="w-full relative overflow-hidden bg-white h-[240px] sm:h-[300px] lg:h-[380px] select-none pointer-events-none border-none shadow-none mt-8 sm:mt-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center mix-blend-multiply contrast-[1.14] brightness-[1.04] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_100%)]"
          src="https://res.cloudinary.com/vccpsacloud/video/upload/v1785058941/Cargo_ships_sailing_on_ocean_202607261639_zsrpcx.mp4"
        />
      </div>
    </footer>
  );
}



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  Share2,
  AtSign,
  Rss,
  User,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+855 12 345 678",
    href: "https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    color: "text-emerald-600",
    bg: "bg-emerald-50/50",
    border: "border-slate-200",
    cta: "Message Us",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+855 12 345 678",
    href: "tel:+85512345678",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    cta: "Call Us",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@abandtrading.com",
    href: "mailto:info@abandtrading.com",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    cta: "Email Us",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Phnom Penh, Cambodia",
    href: "https://maps.google.com/?q=Phnom+Penh,+Cambodia",
    color: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
    cta: "View Map",
  },
];

const socials = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: Rss, href: "#", label: "Twitter" },
];

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<ContactForm> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof ContactForm])
      setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSent(true);
  };

  const inputBase =
    "form-input w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-all duration-200";

  const labelClass =
    "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5";

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-10">
            <div>
              <span className="inline-block text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                Contact A &amp; B Trading with questions, shipping bookings, or sourcing support. We typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, value, href, color, bg, border, cta }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex flex-col p-5 rounded-lg bg-white border ${border} hover:border-slate-350 transition-all group`}
                >
                  <div className={`w-9 h-9 rounded-lg ${bg} border border-slate-200/50 flex items-center justify-center mb-4`}>
                    <Icon className={`w-4.5 h-4.5 ${color}`} strokeWidth={1.75} />
                  </div>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mb-1">
                    {title}
                  </p>
                  <p className="text-slate-900 text-sm font-semibold mb-3 truncate">
                    {value}
                  </p>
                  <span className="text-xs text-slate-900 font-medium group-hover:text-gold-600 flex items-center gap-1 mt-auto">
                    {cta} →
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">
                Follow Us
              </p>
              <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-350 transition-all"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8">
            <h3 className="text-slate-900 font-semibold text-lg font-display mb-6">
              Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-slate-900 font-semibold text-base mb-1">
                    Message Sent
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Thank you. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", subject: "", message: "" });
                      setSent(false);
                    }}
                    className="mt-5 text-sm text-gold-600 hover:underline font-medium"
                  >
                    New message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  id="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputBase} ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="General inquiry, Booking request..."
                      value={form.subject}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Type your message here..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputBase} resize-none ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={submitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold disabled:opacity-75"
                  >
                    {submitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

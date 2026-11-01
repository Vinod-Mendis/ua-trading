"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const channels = [
  {
    label: "WhatsApp",
    value: "+855 12 345 678",
    href: "https://wa.me/85512345678?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  },
  {
    label: "Phone",
    value: "+855 12 345 678",
    href: "tel:+85512345678",
  },
  {
    label: "Email",
    value: "info@abandtrading.com",
    href: "mailto:info@abandtrading.com",
  },
  {
    label: "Office",
    value: "Phnom Penh, Cambodia",
    href: "https://maps.google.com/?q=Phnom+Penh,+Cambodia",
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 – 18:00" },
  { day: "Saturday", time: "9:00 – 16:00" },
  { day: "Sunday", time: "WhatsApp only" },
];

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fieldClass =
  "form-input w-full bg-white border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm";

const labelClass =
  "block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2";

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
    const next: Partial<ContactForm> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm])
      setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <section className="w-full bg-[#f4f4f6] py-20 sm:py-28 lg:py-36 text-slate-900">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Reach the desk
            </p>
            <ul className="mt-8 divide-y divide-slate-300/80">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-baseline justify-between gap-6 py-4 group"
                  >
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      {channel.label}
                    </span>
                    <span className="text-base sm:text-lg text-slate-900 group-hover:underline text-right">
                      {channel.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Hours, ICT
              </p>
              <ul className="mt-6 space-y-3">
                {hours.map((row) => (
                  <li key={row.day} className="flex items-baseline justify-between gap-6 text-sm">
                    <span className="text-slate-500">{row.day}</span>
                    <span className="text-slate-900">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-10"
                >
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Sent
                  </p>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-display font-normal text-slate-900 tracking-tight">
                    We have the message.
                  </h2>
                  <p className="mt-4 text-slate-500 max-w-md">
                    Expect a reply by email. If it is urgent, use WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ name: "", email: "", subject: "", message: "" });
                      setSent(false);
                    }}
                    className="mt-8 text-xs font-mono uppercase tracking-widest text-slate-900 underline"
                  >
                    Write another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  id="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${fieldClass} ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                      )}
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
                      placeholder="Booking, paperwork, sourcing"
                      value={form.subject}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      placeholder="What do you need moved?"
                      value={form.message}
                      onChange={handleChange}
                      className={`${fieldClass} resize-none ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={submitting}
                    className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Sending
                      </>
                    ) : (
                      "Send message"
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

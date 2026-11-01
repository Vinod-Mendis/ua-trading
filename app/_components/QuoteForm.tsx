"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  whatsapp: string;
  email: string;
  pickupLocation: string;
  destinationCountry: string;
  goodsType: string;
  weight: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const destinationOptions = [
  "Sri Lanka",
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Japan",
  "South Korea",
  "Germany",
  "France",
  "Other",
];

const goodsOptions = [
  "Personal Belongings",
  "Gifts & Souvenirs",
  "Clothing & Textiles",
  "Electronics",
  "Food & Beverages",
  "Handicrafts",
  "Commercial Goods",
  "Documents",
  "Other",
];

const emptyForm: FormData = {
  fullName: "",
  whatsapp: "",
  email: "",
  pickupLocation: "",
  destinationCountry: "",
  goodsType: "",
  weight: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.whatsapp.trim())
      newErrors.whatsapp = "Phone / WhatsApp number is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.pickupLocation.trim())
      newErrors.pickupLocation = "Pickup location is required.";
    if (!form.destinationCountry)
      newErrors.destinationCountry = "Please select a destination country.";
    if (!form.goodsType)
      newErrors.goodsType = "Please select the type of goods.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (field: string) =>
    `form-input w-full bg-white border px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm ${
      errors[field] ? "border-red-500" : "border-slate-300"
    }`;

  const labelClass =
    "block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-8"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Received
            </p>
            <h3 className="mt-4 text-3xl sm:text-4xl font-display font-normal text-slate-900 tracking-tight">
              The quote is in.
            </h3>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-md">
              Thanks, {form.fullName}. We will send the sea and air rates by email or WhatsApp within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/85512345678?text=Hello%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5"
              >
                WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="text-xs font-mono uppercase tracking-widest text-slate-900 underline text-left"
              >
                Start another
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
            id="quote-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass("fullName")}
                />
                {errors.fullName && (
                  <p className="mt-1 text-red-500 text-xs">{errors.fullName}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className={labelClass}>
                  Phone / WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. +855 12 345 678"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className={inputClass("whatsapp")}
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-red-500 text-xs">{errors.whatsapp}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Pickup Location */}
              <div>
                <label htmlFor="pickupLocation" className={labelClass}>
                  Pickup city
                </label>
                <input
                  id="pickupLocation"
                  name="pickupLocation"
                  type="text"
                  placeholder="Phnom Penh, Cambodia"
                  value={form.pickupLocation}
                  onChange={handleChange}
                  className={inputClass("pickupLocation")}
                />
                {errors.pickupLocation && (
                  <p className="mt-1 text-red-500 text-xs">{errors.pickupLocation}</p>
                )}
              </div>

              {/* Destination Country */}
              <div>
                <label htmlFor="destinationCountry" className={labelClass}>
                  Destination
                </label>
                <select
                  id="destinationCountry"
                  name="destinationCountry"
                  value={form.destinationCountry}
                  onChange={handleChange}
                  className={`${inputClass("destinationCountry")} cursor-pointer`}
                >
                  <option value="" disabled>
                    Choose country...
                  </option>
                  {destinationOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.destinationCountry && (
                  <p className="mt-1 text-red-500 text-xs">{errors.destinationCountry}</p>
                )}
              </div>

              {/* Type of Goods */}
              <div>
                <label htmlFor="goodsType" className={labelClass}>
                  Goods
                </label>
                <select
                  id="goodsType"
                  name="goodsType"
                  value={form.goodsType}
                  onChange={handleChange}
                  className={`${inputClass("goodsType")} cursor-pointer`}
                >
                  <option value="" disabled>
                    Choose type...
                  </option>
                  {goodsOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.goodsType && (
                  <p className="mt-1 text-red-500 text-xs">{errors.goodsType}</p>
                )}
              </div>
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className={labelClass}>
                Weight
              </label>
              <input
                id="weight"
                name="weight"
                type="text"
                placeholder="e.g. 10 kg, 120 kg, 2 tons"
                value={form.weight}
                onChange={handleChange}
                className={inputClass("weight")}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any special handling details, packaging concerns..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass("message")} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Sending
                </>
              ) : (
                "Request a quote"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

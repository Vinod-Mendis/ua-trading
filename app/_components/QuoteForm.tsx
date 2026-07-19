"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Globe2,
  Package,
  Weight,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";

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
    `form-input w-full bg-white border rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 ${
      errors[field] ? "border-red-500" : "border-slate-200 hover:border-slate-350"
    }`;

  const labelClass =
    "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-2";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-xl bg-slate-50 border border-slate-200"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
              Quote Request Received
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">
              Thank you, <strong className="text-slate-900">{form.fullName}</strong>.
              We will calculate your shipping rates and reach out via email or WhatsApp within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/85512345678?text=Hello%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Follow Up on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm"
              >
                New Request
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
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Full Name <span className="text-red-500">*</span>
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
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  Phone / WhatsApp <span className="text-red-500">*</span>
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
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  Email Address <span className="text-red-500">*</span>
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
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Pickup City / Location <span className="text-red-500">*</span>
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
                  <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                  Destination Country <span className="text-red-500">*</span>
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
                  <Package className="w-3.5 h-3.5 text-slate-400" />
                  Type of Goods <span className="text-red-500">*</span>
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
                <Weight className="w-3.5 h-3.5 text-slate-400" />
                Weight Estimate (kg)
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
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                Details or Special Requests
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
              className="btn-gold w-full flex items-center justify-center gap-2 py-4 rounded-lg text-sm font-semibold disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Request Shipping Quote
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

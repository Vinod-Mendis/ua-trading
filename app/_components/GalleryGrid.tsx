"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All",
  "Cargo & Shipping",
  "Packaging",
  "Delivered Goods",
  "Team & Process",
];

const galleryItems = [
  {
    category: "Cargo & Shipping",
    label: "Container Loading",
    emoji: "🚢",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
  {
    category: "Packaging",
    label: "Careful Packaging",
    emoji: "📦",
    bg: "bg-slate-50",
    aspect: "aspect-video",
  },
  {
    category: "Delivered Goods",
    label: "Delivered Safely",
    emoji: "✅",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
  {
    category: "Cargo & Shipping",
    label: "Freight Forwarding",
    emoji: "✈️",
    bg: "bg-slate-50",
    aspect: "aspect-video",
  },
  {
    category: "Team & Process",
    label: "Our Expert Team",
    emoji: "👥",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
  {
    category: "Packaging",
    label: "Secure Packing",
    emoji: "🔒",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
  {
    category: "Delivered Goods",
    label: "Happy Customers",
    emoji: "🎁",
    bg: "bg-slate-50",
    aspect: "aspect-video",
  },
  {
    category: "Cargo & Shipping",
    label: "Port Operations",
    emoji: "⚓",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
  {
    category: "Team & Process",
    label: "Documentation",
    emoji: "📋",
    bg: "bg-slate-50",
    aspect: "aspect-square",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
              active === cat
                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                : "bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:border-slate-350"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((item, index) => (
          <motion.div
            key={`${item.label}-${active}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="break-inside-avoid"
          >
            <div
              className={`relative w-full ${item.aspect} rounded-xl bg-slate-50 border border-slate-200 overflow-hidden group cursor-pointer hover:border-slate-400 hover:shadow-md transition-all duration-300`}
            >
              {/* Inner card content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
                <span className="text-4xl mb-2">{item.emoji}</span>
                <span className="text-slate-800 text-sm font-semibold text-center leading-tight">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  {item.category}
                </span>
              </div>

              {/* Hover highlight */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-all duration-200" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notice */}
      <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 text-center">
        <p className="text-slate-500 text-xs font-medium">
          📸 Operational gallery photos will be updated soon. Emoji mockups show visual grid spacing.
        </p>
      </div>
    </div>
  );
}

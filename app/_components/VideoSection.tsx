"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "99.8%",
    label: "On-Time Cargo Delivery",
    description: "Guaranteed schedule compliance across all sea & air freight routes from Cambodia.",
  },
  {
    value: "50+",
    label: "Global Destination Ports",
    description: "Direct clearance and international forwarding connecting Asian trade routes.",
  },
  {
    value: "24/7",
    label: "Live Tracking & Updates",
    description: "End-to-end visibility from initial dispatch to final destination delivery.",
  },
];

function AnimatedCounter({ value }: { value: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  const numericMatch = value.match(/([\d.]+)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const isDecimal = value.includes(".");
  const suffix = value.replace(/[\d.]+/, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds count up
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = numericValue * easedProgress;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, numericValue]);

  return (
    <span ref={nodeRef}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function VideoSection() {
  return (
    <section className="w-full bg-[#FFE67B] overflow-hidden">
      {/* Video Container (Crop & Shift unchanged) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full relative -mt-[90px] -mb-[40px]"
      >
        <video
          src="https://res.cloudinary.com/vccpsacloud/video/upload/v1784984148/container-video_dwxqwd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
          style={{
            clipPath: "inset(0 0 40px 0)",
          }}
        />
      </motion.div>

      {/* Expanded Bottom Section Content */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pt-16 pb-20 sm:pt-20 sm:pb-28 text-slate-950">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-slate-800 bg-black/10 px-3 py-1 rounded-none mb-4">
            Global Network Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-slate-950 mb-4">
            Next-Generation Shipping & Container Logistics
          </h2>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
            Optimized freight forwarding solutions designed for reliability, speed, and real-time operational efficiency across international borders.
          </p>
        </motion.div>

        {/* Feature Stats Grid - Sharp Cards (rounded-none), Count Up & Opacity 30% description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 text-white p-8 rounded-none shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold font-display text-[#FFE67B] mb-4 tracking-tight">
                  <AnimatedCounter value={item.value} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-white/30 text-xs sm:text-sm leading-relaxed max-w-[230px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

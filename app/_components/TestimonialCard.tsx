import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  country: string;
  flag: string;
  review: string;
  rating: number;
  role?: string;
}

export default function TestimonialCard({
  name,
  country,
  flag,
  review,
  rating,
  role,
}: TestimonialCardProps) {
  return (
    <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-350 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-gold-500 fill-gold-500" : "text-slate-200"}`}
          />
        ))}
      </div>

      {/* Review content */}
      <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-8 relative font-normal">
        <span className="relative">&ldquo;{review}&rdquo;</span>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3.5 border-t border-slate-100 pt-5 mt-auto">
        <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-base">
          {flag}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm">{name}</p>
          <p className="text-slate-400 text-xs mt-0.5">
            {role ? `${role} · ` : ""}
            {country}
          </p>
        </div>
      </div>
    </div>
  );
}

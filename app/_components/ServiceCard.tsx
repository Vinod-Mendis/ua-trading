import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  bg: string;
  border: string;
  id?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  color,
  bg,
  border,
  id,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className={`group relative p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col h-full`}
    >
      <div className="flex-1">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-95 transition-transform duration-300`}
        >
          <Icon className={`w-5 h-5 text-slate-700`} strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-slate-900 text-lg font-semibold font-display mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-2 shrink-0" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

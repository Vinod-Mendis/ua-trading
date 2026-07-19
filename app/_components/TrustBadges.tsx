import { Shield, DollarSign, Globe2, Headphones } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Safe Handling",
    description: "Carefully handled packages",
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Clear, transparent pricing",
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: Globe2,
    title: "Worldwide Delivery",
    description: "Connecting to Sri Lanka & beyond",
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated assistance",
    color: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200/60",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, title, description, color, bg, border }) => (
            <div
              key={title}
              className={`flex items-center gap-4 p-5 rounded-xl bg-white border ${border} transition-all duration-200 hover:shadow-xs`}
            >
              <div className={`w-10 h-10 rounded-lg ${bg} border border-slate-200/50 flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.75} />
              </div>
              <div className="space-y-0.5">
                <p className="text-slate-900 text-sm font-semibold">{title}</p>
                <p className="text-slate-500 text-xs leading-normal">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

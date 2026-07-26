interface TestimonialCardProps {
  number?: string;
  name: string;
  role?: string;
  company?: string;
  country?: string;
  flag?: string;
  review: string;
  rating?: number;
  image?: string;
}

export default function TestimonialCard({
  number = "01",
  name,
  role,
  company,
  country,
  review,
  image,
}: TestimonialCardProps) {
  // Format name to ensure trailing comma matching reference design (e.g. "Beau Miller,")
  const formattedName = name.trim().endsWith(",") ? name.trim() : `${name.trim()},`;

  // Format subtitle (e.g. "IT & Network Manager at Forbes")
  const subtitle = company
    ? `${role || ""} at ${company}`.trim()
    : role
    ? `${role}${country ? ` · ${country}` : ""}`
    : country || "";

  return (
    <div className="bg-[#242426] rounded-none overflow-hidden flex flex-col justify-between h-full w-full border-0 outline-none ring-0 shadow-none transition-opacity duration-300">
      {/* Top Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between overflow-hidden">
        {/* Number Header */}
        <div className="text-zinc-400 font-sans text-lg sm:text-xl font-normal mb-4 tracking-wider">
          {number}
        </div>

        {/* Quote Text */}
        <blockquote className="text-zinc-100 text-sm sm:text-base font-normal leading-relaxed flex-1 font-sans overflow-hidden">
          &ldquo;{review}&rdquo;
        </blockquote>
      </div>

      {/* Separator Element */}
      <div className="h-[1px] w-full bg-[#3a3a3e] flex-shrink-0" />

      {/* Author Section */}
      <div className="bg-[#242426] flex items-center justify-between h-[90px] relative rounded-none flex-shrink-0">
        {/* Author Info */}
        <div className="p-5 flex-1 flex flex-col justify-center pr-3 overflow-hidden">
          <p className="text-white font-sans text-sm sm:text-base font-medium leading-tight truncate">
            {formattedName}
          </p>
          {subtitle && (
            <p className="text-zinc-400 font-sans text-xs sm:text-xs mt-1 leading-normal line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* Author Image - Aspect Square & flush right */}
        {image && (
          <div className="h-full aspect-square flex-shrink-0 overflow-hidden rounded-none">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center grayscale contrast-105 rounded-none block"
            />
          </div>
        )}
      </div>

      {/* Bottom Accent Bar - Pure solid yellow-200 with no subpixel gap */}
      <div className="h-[6px] w-full bg-[#fde68a] flex-shrink-0 relative z-10 block border-0 outline-none -mt-[1px]" />
    </div>
  );
}








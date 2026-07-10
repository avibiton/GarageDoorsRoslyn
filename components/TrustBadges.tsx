const badges = [
  { icon: "⭐", label: "Rated 5.0" },
  { icon: "⚡", label: "Same-Day Service" },
  { icon: "📋", label: "Free Written Estimate" },
  { icon: "🛡️", label: "Written Warranty" },
  { icon: "✅", label: "Licensed & Insured" },
  { icon: "🕐", label: "24/7 Emergency Service" },
];

export default function TrustBadges() {
  return (
    <div className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-1.5 text-slate-700">
              <span className="text-lg" aria-hidden="true">{b.icon}</span>
              <span className="text-sm font-semibold">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

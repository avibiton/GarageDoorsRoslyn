import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/config";
import CouponCard from "@/components/CouponCard";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Garage Door Repair Roslyn NY | Same-Day Service | Garage Doors Roslyn",
  description:
    "Same-day garage door repair in Roslyn NY 11576. Broken springs, off-track doors, cable failure, worn rollers & more. Licensed & insured. Call (516) 629-7163.",
};

const repairServices = [
  {
    title: "Emergency Repair",
    color: "bg-blue-900",
    items: [
      "24/7 Emergency Service",
      "Same-Day Response",
      "Off-Track Door Repair",
      "Evenings & Weekends",
      "Nassau County",
    ],
    cta: `Call ${business.phone}`,
  },
  {
    title: "Cable · Roller · Track",
    color: "bg-slate-800",
    items: [
      "Galvanized Cable Replacement",
      "Nylon Roller Upgrade",
      "Track Realignment",
      "Drum & Bearing Plate",
      "Hinge Replacement",
    ],
    pricing: "From $35/roller · $125 cables",
  },
  {
    title: "Tune-Up & Safety Check",
    color: "bg-slate-700",
    items: [
      "22-Point Inspection",
      "Auto-Reverse Test",
      "Sensor Alignment",
      "Full Lubrication",
      "Written Report",
    ],
    pricing: "Starting from $99",
  },
];

const warningSigns = [
  { sign: "Loud bang from garage", meaning: "Broken torsion spring — stop using door immediately" },
  { sign: "Door opens unevenly", meaning: "Broken cable — call for same-day service" },
  { sign: "Grinding or scraping", meaning: "Worn rollers — track or hardware damage" },
  { sign: "Door moves slower", meaning: "Weakened spring — spring life ending" },
  { sign: "Reverses before closing", meaning: "Sensor misalignment — safety hazard" },
  { sign: "Visible cable fraying", meaning: "Replace immediately — cable failure risk" },
  { sign: "Water under door", meaning: "Failed bottom seal — weather infiltration" },
];

const faqs = [
  {
    q: "Who repairs garage doors in Roslyn NY?",
    a: "Garage Doors Roslyn provides same-day repair throughout Roslyn NY 11576, Roslyn Heights, East Hills, and surrounding Nassau County communities. A real technician answers and dispatches the same day.",
  },
  {
    q: "How fast can you respond to an emergency garage door repair in Roslyn?",
    a: "Most Roslyn calls receive service within 2–4 hours. We dispatch the same day, evenings and weekends included. Call (516) 629-7163 any time.",
  },
  {
    q: "Do you repair garage doors on weekends?",
    a: "Yes — Garage Doors Roslyn is available evenings, weekends, and holidays throughout Roslyn NY 11576. Call (516) 629-7163 any time.",
  },
];

export default function RepairPage() {
  return (
    <>
      <SchemaMarkup pageType="repair" faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/garage-installer.jpg"
          alt="Garage door repair technician working in Roslyn NY"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Same-Day Service · Roslyn NY 11576
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Garage Door Repair Roslyn NY
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Broken spring? Door off track? Cable snapped? We provide same-day emergency garage door
            repair throughout Roslyn NY 11576, Roslyn Heights, East Hills, and Nassau County.
            Licensed &amp; insured. Free written estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={business.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Request Same-Day Service
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-14 px-4 bg-amber-50 border-l-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">
            ⚠️ Stop Using Your Door If You Notice:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {warningSigns.map((w) => (
              <div key={w.sign} className="bg-white border border-amber-200 rounded-lg p-4">
                <p className="font-bold text-amber-700 mb-1">{w.sign}</p>
                <p className="text-gray-600 text-sm">{w.meaning}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={business.phoneTel}
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Call for Emergency Repair — {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Garage Door Repair Services — Roslyn, NY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repairServices.map((s) => (
              <div key={s.title} className={`${s.color} text-white rounded-2xl p-6`}>
                <h3 className="font-bold text-xl mb-4">{s.title}</h3>
                <ul className="space-y-2 mb-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="text-yellow-400" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {s.pricing && (
                  <p className="text-yellow-300 text-sm font-semibold mb-4">{s.pricing}</p>
                )}
                <a
                  href={business.phoneTel}
                  className="block text-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-2.5 rounded-lg text-sm transition-colors"
                >
                  {s.cta ?? `Call ${business.phone}`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Repair */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What We Repair in Roslyn, NY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              "Broken torsion springs",
              "Off-track doors",
              "Cable failure",
              "Worn rollers",
              "Track realignment",
              "Drum and bearing plate issues",
              "Hinge replacement",
              "Sensor misalignment",
              "Failed bottom seals",
              "Older hardware in historic Roslyn homes",
              "Freeze-thaw winter wear in Nassau County",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <span className="text-yellow-500 mt-0.5" aria-hidden="true">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-sm mx-auto">
          <h2 className="text-xl font-bold text-center text-slate-900 mb-6">Current Offer</h2>
          <CouponCard
            title="FREE Service Call With Repair"
            code="FREE911"
            description="Same-Day Emergency Service"
            expires="12/31/2026"
            highlight="No Service Fee With Any Repair"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50 mb-14 md:mb-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ — Garage Door Repair Roslyn NY</h2>
          <FAQAccordion faqs={faqs} />
          <div className="mt-8 text-center">
            <a
              href={business.phoneTel}
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call {business.phone} — Free Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

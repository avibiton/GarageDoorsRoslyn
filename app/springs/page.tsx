import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/config";
import CouponCard from "@/components/CouponCard";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Broken Garage Door Spring Replacement Roslyn NY | Torsion & Extension Springs",
  description:
    "Broken garage door spring replacement in Roslyn NY. Torsion and extension springs, high-cycle upgrades. Same-day service. Free estimate. Call (516) 629-7163.",
};

const springPricing = [
  { service: "Torsion Spring Replacement", price: "Starting From $295" },
  { service: "Extension Spring Pair + Safety Cables", price: "Starting From $165" },
  { service: "High-Cycle Upgrade 25,000 cycles", price: "Starting From $380" },
  { service: "Written Estimate", price: "FREE" },
];

const components = [
  "Torsion Spring",
  "Extension Spring",
  "High-Cycle Spring 25K",
  "Ultra-Cycle Spring 50K",
  "Spring Safety Cable",
  "Winding Bars",
  "Spring Cone",
  "Torsion Shaft",
  "Center Bearing Plate",
];

const faqs = [
  {
    q: "How much does spring replacement cost in Roslyn NY?",
    a: "Extension spring replacement starts from $165. Torsion spring replacement starts from $295. High-cycle upgrades (25,000 cycles) start from $380. Free written estimate before any work — the price we quote is the final price. Use code SPRING10 for 10% off.",
  },
  {
    q: "How do I know if my torsion spring is broken?",
    a: "A broken torsion spring usually announces itself with a loud bang from the garage. The door will feel extremely heavy and may only open a few inches. Stop using the door and call (516) 629-7163 for same-day service.",
  },
  {
    q: "Should I replace one spring or both?",
    a: "We always recommend replacing paired springs together. When one spring breaks, the other is near the end of its service life. Replacing both now avoids a second service call soon after and keeps the door balanced.",
  },
];

export default function SpringsPage() {
  return (
    <>
      <SchemaMarkup pageType="springs" faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/garage-springs.jpg"
          alt="Garage door spring replacement service in Roslyn NY"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Torsion · Extension · High-Cycle
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Broken Garage Door Spring Replacement — Roslyn, NY
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Spring broke with a loud bang? Door too heavy to lift? We provide same-day torsion and
            extension spring replacement throughout Roslyn NY 11576, Roslyn Heights, East Hills, and
            Nassau County. Free written estimate. Use code <strong className="text-yellow-400">SPRING10</strong> for 10% off.
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

      {/* Content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Torsion Springs in Roslyn, NY Homes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Torsion springs are mounted above the garage door opening and do the heavy lifting every
            time the door moves. When a torsion spring breaks, you&apos;ll hear a loud bang — then the
            door becomes dangerously heavy. Do not attempt to use or manually open the door.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Roslyn Heights and East Hills have a mix of larger colonial and split-level homes with
            heavier custom doors, which place extra demand on springs. Choosing the correct spring
            based on door weight is essential — undersized springs fail early and can damage the opener.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Standard torsion springs are rated for around 10,000 cycles. We offer High-Cycle Springs
            at 25,000 cycles and Ultra-Cycle Springs at 50,000 cycles for homeowners who want
            long-term reliability without frequent replacement.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-3">Extension Springs</h3>
          <p className="text-gray-600 leading-relaxed">
            Older Roslyn homes — particularly in the historic village area with low ceiling heights
            — may use extension springs rather than torsion springs. Extension springs require
            spring safety cables, which are mandatory for safe operation and prevent injury if a
            spring snaps. We always install safety cables with every extension spring replacement.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Spring Replacement Pricing — Roslyn, NY
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {springPricing.map((row, i) => (
              <div
                key={row.service}
                className={`flex justify-between items-center px-6 py-4 ${i < springPricing.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="text-gray-800 font-medium">{row.service}</span>
                <span className={`font-bold ${row.price === "FREE" ? "text-green-600 text-lg" : "text-slate-900"}`}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs text-center mt-3">
            Final price confirmed before work begins. No surprises.
          </p>
        </div>
      </section>

      {/* Components */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Spring Components We Stock</h2>
          <div className="flex flex-wrap gap-2">
            {components.map((c) => (
              <span
                key={c}
                className="bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <CouponCard
            title="10% OFF Spring Replacement"
            code="SPRING10"
            description="Free Written Estimate Included"
            expires="12/31/2026"
            highlight="Torsion · Extension · High-Cycle"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white mb-14 md:mb-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            FAQ — Spring Replacement Roslyn NY
          </h2>
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

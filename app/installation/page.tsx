import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/config";
import CouponCard from "@/components/CouponCard";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Garage Door Installation Roslyn NY | New Doors, Carriage House & Insulated",
  description:
    "New garage door installation in Roslyn NY. Carriage house, insulated steel, full-view glass, custom estate doors. Free in-home estimate. Call (516) 629-7163.",
};

const doorStyles = [
  {
    title: "Carriage House Style",
    desc: "The most popular choice for Roslyn's colonial, Victorian, and craftsman homes. Deep wood-grain embossing and period-appropriate decorative hardware complement historic architecture without real wood maintenance.",
  },
  {
    title: "Insulated Triple-Layer Steel",
    desc: "R-12 polyurethane foam insulation for superior thermal performance and noise reduction — essential for attached garages where bedrooms or living areas are adjacent or above.",
  },
  {
    title: "Full-View Aluminum & Glass",
    desc: "Contemporary full-view panels with aluminum frames and glass sections. Increasingly popular in East Hills new construction and modern renovations throughout Roslyn.",
  },
  {
    title: "Solid Wood Doors",
    desc: "Hemlock or cedar solid wood doors for estate properties near Hempstead Harbor. Custom sizes available. Lead time 2–4 weeks for custom specifications.",
  },
  {
    title: "Composite Overlay",
    desc: "Steel doors with composite cladding that is virtually indistinguishable from timber at normal viewing distance. Lower maintenance than real wood with the same curb appeal.",
  },
];

const keywords = [
  "Insulated Triple-Layer Steel",
  "Carriage House Style",
  "Composite Overlay",
  "Glass & Aluminum",
  "Solid Wood",
  "Bottom Seal",
  "Side Seal / Astragal",
  "Top Seal",
  "Weather Stripping",
];

const faqs = [
  {
    q: "What garage door style is best for Roslyn colonial homes?",
    a: "Carriage house style doors are the most requested for Roslyn's colonial, Victorian, and craftsman homes. Deep wood-grain embossing and optional period hardware complement the architecture without the maintenance of real wood. Composite overlay doors are virtually indistinguishable from timber at normal viewing distance. Free in-home estimate — call (516) 629-7163.",
  },
  {
    q: "How long does new garage door installation take in Roslyn?",
    a: "Standard in-stock door installations are typically completed in a single visit. Custom sizes and special-order specifications have a 2–4 week lead time. Call (516) 629-7163 and we'll confirm the timeline for your specific door.",
  },
  {
    q: "Do you install insulated garage doors in Roslyn?",
    a: "Yes — we strongly recommend insulated triple-layer steel doors with R-12 polyurethane foam for attached garages in Roslyn. They dramatically reduce noise and heat transfer, which matters most when a bedroom or living area shares a wall with the garage.",
  },
];

export default function InstallationPage() {
  return (
    <>
      <SchemaMarkup pageType="installation" faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/garage-installation.jpg"
          alt="New garage door installation in Roslyn NY"
          fill
          className="object-cover object-center opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Free In-Home Estimate · Roslyn NY
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            New Garage Door Installation — Roslyn, NY
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Replacing an old door? Upgrading to match your Roslyn home&apos;s architecture? We install
            carriage house, insulated steel, full-view glass, composite overlay, and solid wood doors
            throughout Roslyn NY 11576, Roslyn Heights, East Hills, and Nassau County. Free in-home
            estimate. Use code{" "}
            <strong className="text-yellow-400">NEWDOOR250</strong> for $250 off.
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
              Request Free In-Home Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Door Styles */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Door Styles for Roslyn Homes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doorStyles.map((d) => (
              <div key={d.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Matching Roslyn&apos;s Architecture
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Roslyn has one of the most architecturally diverse housing stocks on Long Island —
            from Victorian homes near Main Street, colonial-era properties on Old Northern Boulevard,
            to estate properties near Hempstead Harbor. Matching a new door to the home&apos;s style
            adds significant curb appeal and property value.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For properties closest to Hempstead Harbor, we recommend galvanized hardware and
            pre-finished doors that resist the moderate salt air exposure from the North Shore location
            near Long Island Sound.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Custom-sized estate garage doors and heavy custom door configurations are available
            with a 2–4 week lead time. Free in-home estimate — call{" "}
            <a href={business.phoneTel} className="text-slate-800 underline font-semibold">
              {business.phone}
            </a>.
          </p>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Products &amp; Accessories We Install</h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <span
                key={k}
                className="bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-700"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coupons */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center text-slate-900 mb-6">Current Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <CouponCard
              title="$250 OFF New Door Installation"
              code="NEWDOOR250"
              description="Free In-Home Estimate"
              expires="12/31/2026"
              highlight="Any New Garage Door"
            />
            <CouponCard
              title="$75 OFF New Door Installation"
              code="INSTALL75"
              description="100% Satisfaction Guaranteed"
              expires="12/31/2026"
              highlight="Any Style, Any Size"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white mb-14 md:mb-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            FAQ — New Garage Door Installation Roslyn NY
          </h2>
          <FAQAccordion faqs={faqs} />
          <div className="mt-8 text-center">
            <a
              href={business.phoneTel}
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call {business.phone} — Free In-Home Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

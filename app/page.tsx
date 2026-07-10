import Image from "next/image";
import Link from "next/link";
import { business, coupons } from "@/lib/config";
import TrustBadges from "@/components/TrustBadges";
import CouponCard from "@/components/CouponCard";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

const whyUs = [
  {
    icon: "📞",
    title: "Real Technician Answers",
    body: "No call centers. A garage door expert picks up and diagnoses your problem before we arrive.",
  },
  {
    icon: "⚡",
    title: "Same-Day in Roslyn",
    body: "Most Roslyn calls receive service within 2–4 hours. 30-minute heads-up call before arrival.",
  },
  {
    icon: "📋",
    title: "Free Written Estimate",
    body: "Full inspection, written price, your approval before any work begins.",
  },
  {
    icon: "🛡️",
    title: "Written Warranty",
    body: "Every repair backed in writing. Not right after we leave? We return at no charge.",
  },
  {
    icon: "🏠",
    title: "All Home Types",
    body: "Victorian, colonial, cape, split-level, estate. We service every garage door configuration in Roslyn.",
  },
  {
    icon: "✅",
    title: "100% Satisfaction",
    body: "Auto-reverse test, sensor check, spring balance verified before we leave every job.",
  },
];

const faqs = [
  {
    q: "Who repairs garage doors in Roslyn NY?",
    a: "Garage Doors Roslyn provides same-day repair throughout Roslyn NY 11576, Roslyn Heights, East Hills, and surrounding Nassau County communities. Call (516) 629-7163 — a real technician answers and dispatches the same day. We typically arrive within 2–4 hours, evenings and weekends included.",
  },
  {
    q: "How much does spring repair cost in Roslyn NY?",
    a: "Extension spring repair in Roslyn starts from $165. Torsion spring replacement starts from $295. For heavier custom doors common on Roslyn estate and colonial properties, commercial-weight springs may be required. Free written estimate before any work — the price we quote is the final price. Use code SPRING10 for 10% off. Call (516) 629-7163.",
  },
  {
    q: "Can you install a garage door opener in a historic Roslyn home with low ceiling clearance?",
    a: "Yes — the LiftMaster 8500W wall-mount opener is the right solution for Roslyn's historic and older homes where overhead clearance won't accommodate a standard rail opener. It mounts on the wall beside the door and requires no overhead rail. It's the quietest opener we install, includes battery backup and MyQ, and works with any standard sectional door. Call (516) 629-7163.",
  },
  {
    q: "Do you repair garage doors on weekends in Roslyn NY?",
    a: "Yes — Garage Doors Roslyn is available evenings, weekends, and holidays throughout Roslyn NY 11576. Garage doors break on their own schedule, not yours. Call (516) 629-7163 any time and a real technician will answer.",
  },
  {
    q: "What garage door styles work best for Roslyn colonial and historic homes?",
    a: "Carriage house style doors are the most requested for Roslyn's colonial, Victorian, and craftsman homes. Deep wood-grain embossing and optional period hardware complement the architecture without the maintenance of real wood. Composite overlay doors are virtually indistinguishable from timber at normal viewing distance. For contemporary renovations, full-view aluminum and glass is also popular. Free in-home estimate — call (516) 629-7163.",
  },
];

const services = [
  { title: "Garage Door Repair", href: "/repair", icon: "🔧", desc: "Springs, cables, tracks, rollers — same-day emergency service throughout Roslyn." },
  { title: "Spring Replacement", href: "/springs", icon: "🔩", desc: "Torsion and extension spring replacement with high-cycle upgrade options." },
  { title: "Opener Repair & Install", href: "/openers", icon: "📡", desc: "LiftMaster, Genie, Chamberlain — quiet belt drive, wall-mount, and smart openers." },
  { title: "New Door Installation", href: "/installation", icon: "🚪", desc: "Carriage house, insulated steel, full-view glass, and custom estate doors." },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup pageType="home" faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-20 px-4 overflow-hidden">
        <Image
          src="/images/garage-luxury.jpg"
          alt="Luxury garage door on a Roslyn NY home"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Roslyn NY · Nassau County · North Shore
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            24/7 Same-Day Garage Door Repair in Roslyn, NY
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Specializing in spring replacement, cable repair, opener installation, and new garage door
            service throughout Roslyn NY 11576. Free written estimate. 100% satisfaction guaranteed.
            Locally owned and operated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={business.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              CALL {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Request Same-Day Service
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span>⭐ Rated 5.0</span>
            <span className="text-slate-600">·</span>
            <span>Licensed &amp; Insured</span>
            <span className="text-slate-600">·</span>
            <span>Free Written Estimate</span>
            <span className="text-slate-600">·</span>
            <span>Written Warranty</span>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-3">
            Garage Door Services in Roslyn, NY
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Every service comes with a free written estimate and written warranty. Call{" "}
            <a href={business.phoneTel} className="text-slate-800 font-semibold underline">{business.phone}</a>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-yellow-400 transition-all group"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
            Why Roslyn Calls Us First
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Locally owned. Real technicians. Same-day service throughout Nassau County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            🚨 Emergency Garage Door Repair — Roslyn, NY
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Door off track? Spring snapped? Stuck open or closed? We dispatch same day throughout
            Roslyn, Roslyn Heights, East Hills, and all Nassau County communities.
          </p>
          <a
            href={business.phoneTel}
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-10 py-4 rounded-xl text-xl transition-colors"
          >
            Call {business.phone} Now
          </a>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Serving Every Home Type in Roslyn, NY
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Roslyn&apos;s neighborhoods range from the historic village homes and Victorian and colonial-era
            properties near Main Street and Old Northern Boulevard, to postwar colonials and split-levels
            in Roslyn Heights, and larger estate properties near Hempstead Harbor, with newer construction
            in East Hills. We service every garage door configuration across all of these communities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Roslyn garage doors include original carriage house conversions, attached two-car garages,
            estate garage systems, heavy custom doors, low-ceiling historic garages, insulated doors
            for attached garages, carriage house style doors, composite overlay doors, full-view
            aluminum and glass doors, and solid wood doors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>North Shore environmental note:</strong> Roslyn&apos;s location near Hempstead Harbor
            and Long Island Sound creates moderate salt air exposure. We recommend galvanized hardware
            for properties closest to the harbor to maximize longevity.
          </p>
        </div>
      </section>

      {/* Coupons */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">
            Special Offers &amp; Coupons
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Mention the coupon code when you call. One coupon per visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((c) => (
              <CouponCard key={c.code} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Garage Door Service Areas — Nassau County, NY
          </h2>
          <p className="text-gray-600 mb-6">
            We serve Roslyn and the surrounding North Shore Nassau County communities. Same-day
            service available throughout our coverage area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Roslyn NY 11576",
              "Roslyn Heights NY 11577",
              "East Hills NY 11548",
              "Greenvale NY 11548",
              "Albertson",
              "Mineola",
              "Nassau County",
              "North Shore Long Island",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-slate-700 font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions — Roslyn NY Garage Doors
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-16 px-4 mb-14 md:mb-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready? Call or Request Service Online
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            A real technician answers every call. Free written estimate. Same-day service throughout
            Roslyn NY 11576 and Nassau County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={business.phoneTel}
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-xl transition-colors"
            >
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-xl text-xl transition-colors"
            >
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

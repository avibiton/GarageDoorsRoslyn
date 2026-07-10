import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/config";
import CouponCard from "@/components/CouponCard";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Garage Door Opener Repair Roslyn NY | LiftMaster & Genie Installation",
  description:
    "Garage door opener repair and installation in Roslyn NY. LiftMaster, Genie, Chamberlain. Belt drive, wall-mount, battery backup, MyQ. Call (516) 629-7163.",
};

const openerPricing = [
  { service: "Gear & Sprocket Replacement", price: "From $130" },
  { service: "Safety Sensor Repair", price: "$75–$150" },
  { service: "Remote / Keypad Programming", price: "$45" },
  { service: "Logic Board Replacement", price: "$85" },
  { service: "Battery Backup Add-On", price: "$195" },
  { service: "Written Estimate", price: "FREE" },
];

const components = [
  "Belt Drive Opener",
  "Chain Drive Opener",
  "Wall-Mount Jackshaft",
  "Main Drive Gear",
  "Gear & Sprocket Kit",
  "Logic Board",
  "Safety Sensor",
  "Battery Backup",
  "MyQ Smart Hub",
  "Remote Control",
  "Keypad",
  "HomeLink",
  "LED Opener Bulb",
];

const models = [
  { name: "LiftMaster 87504", desc: "Ultra-quiet belt drive — ideal for bedrooms or living areas above Roslyn colonial and split-level garages." },
  { name: "LiftMaster 8500W", desc: "Wall-mount jackshaft — the solution for historic Roslyn homes with low ceiling clearance. No overhead rail required." },
  { name: "Genie SilentMax Belt Drive", desc: "Quiet, reliable belt drive with Aladdin Connect for smart home integration." },
];

const faqs = [
  {
    q: "Can you install an opener in a historic Roslyn home with low ceiling?",
    a: "Yes — the LiftMaster 8500W wall-mount opener mounts beside the door with no overhead rail, making it the perfect solution for Roslyn's historic and older homes. It includes battery backup and MyQ smart connectivity. Call (516) 629-7163.",
  },
  {
    q: "My opener motor runs but the door doesn't move. What's wrong?",
    a: "This is almost always a stripped main drive gear or failed gear & sprocket kit. It's a common failure in older LiftMaster, Genie, and Chamberlain openers. We carry parts for most brands and can usually repair the same day. Call (516) 629-7163.",
  },
  {
    q: "Do you install battery backup openers?",
    a: "Yes — we recommend battery backup for all Nassau County homes, given the frequency of nor'easters and storms on the North Shore. The LiftMaster 87504 and 8500W both include built-in battery backup. We also offer battery backup add-ons for existing openers.",
  },
];

export default function OpenersPage() {
  return (
    <>
      <SchemaMarkup pageType="openers" faqs={faqs} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/garage-openers.jpg"
          alt="Garage door opener installation in Roslyn NY"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            LiftMaster · Genie · Chamberlain · Craftsman
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Garage Door Opener Repair &amp; Installation — Roslyn, NY
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
            Opener not responding? Motor running but door not moving? We repair and install all major
            brands throughout Roslyn NY 11576 and Nassau County. Quiet belt drives, wall-mount models
            for low ceilings, battery backup for North Shore storms, and MyQ smart connectivity.
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

      {/* Recommended Models */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Recommended Openers for Roslyn Homes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {models.map((m) => (
              <div key={m.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">{m.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-blue-800 font-semibold mb-1">Battery Backup — North Shore Essential</p>
            <p className="text-blue-700 text-sm">
              Nassau County nor&apos;easters and storms can knock out power for hours. Battery backup keeps
              your garage door operational through outages. We recommend it for every new installation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Opener Service Pricing — Roslyn, NY
          </h2>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {openerPricing.map((row, i) => (
              <div
                key={row.service}
                className={`flex justify-between items-center px-6 py-4 ${i < openerPricing.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="text-gray-800 font-medium">{row.service}</span>
                <span className={`font-bold ${row.price === "FREE" ? "text-green-600 text-lg" : "text-slate-900"}`}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Parts &amp; Components We Stock</h2>
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
            title="$99 OFF New Opener Installation"
            code="OPENER99"
            description="LiftMaster or Genie · Battery Backup · MyQ"
            expires="12/31/2026"
            highlight="Any New Opener Installation"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white mb-14 md:mb-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            FAQ — Opener Repair &amp; Installation Roslyn NY
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

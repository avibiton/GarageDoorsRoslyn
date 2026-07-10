import type { Metadata } from "next";
import Image from "next/image";
import { business, coupons } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import CouponCard from "@/components/CouponCard";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Garage Doors Roslyn | 24/7 Same-Day Garage Door Service",
  description:
    "Contact Garage Doors Roslyn for same-day service in Roslyn NY 11576 and Nassau County. A real technician answers 24/7. Call (516) 629-7163.",
};

const contactCards = [
  {
    icon: "📞",
    title: "Phone",
    primary: business.phone,
    href: business.phoneTel,
    lines: ["Available 24/7", "Same-day service throughout Roslyn, Roslyn Heights,", "East Hills & Nassau County"],
  },
  {
    icon: "🕐",
    title: "Hours",
    primary: "24 Hours · 7 Days a Week",
    lines: ["Evenings, weekends, and holidays"],
  },
  {
    icon: "📍",
    title: "Service Area",
    lines: [
      "Roslyn NY 11576",
      "Roslyn Heights",
      "East Hills",
      "Greenvale",
      "Albertson",
      "Mineola",
      "Nassau County",
    ],
  },
  {
    icon: "🌐",
    title: "Website",
    primary: business.website,
    lines: [],
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup pageType="contact" />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-14 px-4 overflow-hidden">
        <Image
          src="/images/garage-installer.jpg"
          alt="Garage door technician serving Roslyn NY"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Call Garage Doors Roslyn Any Time — Day or Night
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            A real technician answers every call. We diagnose your Roslyn garage door problem over
            the phone, dispatch same day, and provide a free written estimate before any work begins.
            Evenings, weekends, and holidays always available throughout Roslyn and Nassau County.
          </p>
          <a
            href={business.phoneTel}
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-10 py-4 rounded-xl text-2xl transition-colors"
          >
            {business.phone}
          </a>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card) => (
            <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-3xl mb-2" aria-hidden="true">{card.icon}</div>
              <p className="font-bold text-slate-900 mb-1">{card.title}</p>
              {card.href ? (
                <a href={card.href} className="text-yellow-600 font-bold hover:underline block mb-1">
                  {card.primary}
                </a>
              ) : card.primary ? (
                <p className="text-slate-700 font-semibold mb-1">{card.primary}</p>
              ) : null}
              {card.lines.map((line) => (
                <p key={line} className="text-gray-500 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Same-Day Service</h2>
          <p className="text-gray-500 mb-8">
            Fill out the form and a technician will call you back shortly. For immediate service,
            call <a href={business.phoneTel} className="font-bold text-slate-800 underline">{business.phone}</a>.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Coupons */}
      <section className="py-14 px-4 bg-gray-50 mb-14 md:mb-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
            Special Offers &amp; Coupons
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Mention the coupon code when you call. One coupon per visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map((c) => (
              <CouponCard key={c.code} {...c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

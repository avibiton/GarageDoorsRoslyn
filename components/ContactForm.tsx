"use client";

import { useState } from "react";

const services = [
  "Garage Door Repair",
  "Spring Replacement",
  "Opener Repair or Installation",
  "New Garage Door Installation",
  "Tune-Up / Safety Check",
  "Emergency Service",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to email service (e.g. Resend, SendGrid, Formspree) or CRM here.
    // Example with Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden="true">✅</div>
        <h3 className="text-green-800 font-bold text-xl mb-2">Request Received!</h3>
        <p className="text-green-700">
          A technician will call you back shortly. For immediate service, call{" "}
          <a href="tel:+15166297163" className="font-bold underline">(516) 629-7163</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Name <span className="text-blue-700" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone <span className="text-blue-700" aria-label="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            placeholder="(516) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
          placeholder="you@email.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
            Service Needed <span className="text-blue-700" aria-label="required">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
            City / ZIP <span className="text-blue-700" aria-label="required">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            placeholder="Roslyn NY 11576"
          />
        </div>
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-1">
          Preferred Service Time
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
        >
          <option value="">Any time</option>
          <option>As soon as possible (same day)</option>
          <option>Morning (8am – 12pm)</option>
          <option>Afternoon (12pm – 5pm)</option>
          <option>Evening (5pm – 9pm)</option>
          <option>Weekend</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Describe the Problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base resize-none"
          placeholder="What's happening with your garage door?"
        />
      </div>

      <div>
        <label htmlFor="coupon" className="block text-sm font-semibold text-gray-700 mb-1">
          Coupon Code (optional)
        </label>
        <input
          id="coupon"
          name="coupon"
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base uppercase"
          placeholder="e.g. SPRING10"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-slate-900 font-bold py-4 rounded-lg text-lg transition-colors"
      >
        {loading ? "Sending…" : "Request Same-Day Service"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Or call directly:{" "}
        <a href="tel:+15166297163" className="font-bold text-slate-700 underline">
          (516) 629-7163
        </a>{" "}
        — a real technician answers 24/7.
      </p>
    </form>
  );
}

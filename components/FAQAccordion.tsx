"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex justify-between items-start gap-4 py-5 text-left text-slate-800 font-semibold hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-base">{faq.q}</span>
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

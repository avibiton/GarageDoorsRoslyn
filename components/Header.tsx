"use client";

import { useState } from "react";
import Link from "next/link";
import { business, nav } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      {/* Top bar */}
      <div className="bg-yellow-400 text-slate-900 text-center py-1.5 text-sm font-semibold">
        CALL NOW —{" "}
        <a href={business.phoneTel} className="underline font-bold">
          {business.phone}
        </a>{" "}
        · Same-Day Service · Free Estimate · 10% Off For Internet Customers!
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-lg tracking-tight">
            Garage Doors Roslyn
          </span>
          <span className="text-yellow-400 text-xs">
            Roslyn NY · (516) 629-7163
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={business.phoneTel}
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          {business.phone}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700 px-4 pb-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-gray-200 hover:text-yellow-400 font-medium border-b border-slate-700 last:border-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={business.phoneTel}
            className="mt-4 w-full flex justify-center bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg text-lg"
          >
            Call {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

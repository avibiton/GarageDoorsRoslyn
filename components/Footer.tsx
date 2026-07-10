import Link from "next/link";
import { business, nav } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="text-white font-bold text-xl mb-2">{business.name}</p>
          <p className="text-sm leading-relaxed mb-4">
            Professional garage door repair, spring replacement, opener
            installation &amp; new door service throughout Roslyn NY 11576 and
            Nassau County, Long Island.
          </p>
          <a
            href={business.phoneTel}
            className="text-yellow-400 font-bold text-lg hover:text-yellow-300"
          >
            {business.phone}
          </a>
          <p className="text-sm mt-1">{business.website}</p>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/repair" className="hover:text-yellow-400 transition-colors">Garage Door Repair</Link></li>
            <li><Link href="/springs" className="hover:text-yellow-400 transition-colors">Spring Replacement</Link></li>
            <li><Link href="/openers" className="hover:text-yellow-400 transition-colors">Opener Service</Link></li>
            <li><Link href="/installation" className="hover:text-yellow-400 transition-colors">New Door Install</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact &amp; Coupons</Link></li>
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <p className="text-white font-semibold mb-3">Service Area</p>
          <ul className="space-y-2 text-sm">
            <li>Roslyn NY 11576</li>
            <li>Roslyn Heights NY 11577</li>
            <li>East Hills NY 11548</li>
            <li>Greenvale NY 11548</li>
            <li>Albertson</li>
            <li>Mineola</li>
            <li>Nassau County NY</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-6">
        <p className="text-xs text-gray-500 text-center">
          © 2026 Garage Doors Roslyn · garagedoorsroslyn.com · Roslyn NY · Nassau County · Licensed &amp; Insured · DBA Fast Local Service ·{" "}
          <a href={business.phoneTel} className="hover:text-yellow-400">
            {business.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}

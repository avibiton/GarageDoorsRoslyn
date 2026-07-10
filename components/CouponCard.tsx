import { business } from "@/lib/config";

interface CouponProps {
  title: string;
  code: string;
  description: string;
  expires: string;
  highlight: string;
}

export default function CouponCard({ title, code, description, expires, highlight }: CouponProps) {
  return (
    <div className="border-2 border-dashed border-yellow-400 rounded-xl p-5 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">
        SAVE
      </div>
      <p className="text-yellow-400 font-bold text-xl mb-1">{title}</p>
      <p className="text-gray-300 text-sm mb-3">{highlight}</p>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 mb-3 text-center">
        <span className="text-white font-mono font-bold tracking-widest text-lg">{code}</span>
      </div>
      <a
        href={business.phoneTel}
        className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-2.5 rounded-lg text-sm transition-colors"
      >
        Call {business.phone}
      </a>
      <p className="text-gray-500 text-xs text-center mt-2">
        Expires {expires} · Not valid with other offers
      </p>
    </div>
  );
}

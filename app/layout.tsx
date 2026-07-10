import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCallButton from "@/components/MobileStickyCallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garage Doors Roslyn NY | Same-Day Repair & Installation | (516) 629-7163",
  description:
    "Same-day garage door repair, spring replacement, opener installation & new door service in Roslyn NY 11576. Licensed & insured. Free estimate. Call (516) 629-7163.",
  keywords: "garage door repair Roslyn NY, garage door spring replacement, garage door opener Roslyn, garage door installation Nassau County",
  openGraph: {
    title: "Garage Doors Roslyn NY | Same-Day Repair & Installation",
    description: "24/7 garage door repair and installation in Roslyn NY. Licensed & insured. Free estimate. Call (516) 629-7163.",
    url: "https://garagedoorsroslyn.com",
    siteName: "Garage Doors Roslyn",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCallButton />
      </body>
    </html>
  );
}

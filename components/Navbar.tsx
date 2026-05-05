"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-blue-400 transition ${
      pathname === path ? "text-blue-400" : "text-white/80"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold tracking-wide">Novotech</h1>

        <div className="hidden md:flex space-x-8 text-sm">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/portfolio" className={linkClass("/portfolio")}>Portfolio</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link href="/quotation" className={linkClass("/quotation")}>Get Quote</Link>
        </div>

      </div>
    </nav>
  );
}
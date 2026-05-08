import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 text-white border-b border-slate-800 px-6 py-4 flex items-center justify-between">

      {/* LOGO */}
      <div className="font-bold text-lg tracking-wide flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />
        <span>
          NOVO TECH <span className="text-yellow-400">JN</span>
        </span>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-6 text-sm text-gray-300">

        <Link className="hover:text-yellow-400 transition" href="/">Home</Link>
        <Link className="hover:text-yellow-400 transition" href="/about">About</Link>
        <Link className="hover:text-yellow-400 transition" href="/services">Services</Link>
        <Link className="hover:text-yellow-400 transition" href="/portfolio">Portfolio</Link>
        <Link className="hover:text-yellow-400 transition" href="/lighting">Lighting</Link>
        <Link className="hover:text-yellow-400 transition" href="/contact">Contact</Link>

      </div>

      {/* CTA */}
      <Link
        href="/quotation"
        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-yellow-500 hover:to-amber-400 transition px-4 py-2 rounded-lg font-medium"
      >
        Get Quotation
      </Link>

    </nav>
  );
}
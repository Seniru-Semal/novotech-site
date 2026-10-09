import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/lighting", label: "Lighting" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 px-4 py-4 text-white backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          aria-label="Novotech J.N. Pvt. Ltd home"
          className="flex items-center"
        >
          <div className="relative h-10 w-44 overflow-hidden rounded-lg bg-white shadow-sm sm:w-52">
            <Image
              src="/logos/novotech-logo.jpeg"
              alt="Novotech J.N. Pvt. Ltd"
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover object-center"
              priority
            />
          </div>
        </Link>

        <div className="hidden gap-6 text-sm text-slate-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/quotation"
          className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 font-medium transition hover:from-yellow-500 hover:to-amber-400 hover:text-slate-950 md:inline-flex"
        >
          Get Quotation
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-sky-200/60 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-yellow-400 hover:text-yellow-300">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-sky-200/60 bg-slate-950 p-3 shadow-2xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-yellow-300"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/quotation"
                className="mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-3 text-center text-sm font-semibold text-white transition hover:from-yellow-500 hover:to-amber-400 hover:text-slate-950"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
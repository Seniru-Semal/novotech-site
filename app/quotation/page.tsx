import type { Metadata } from "next";
import QuotationForm from "@/components/QuotationForm";

export const metadata: Metadata = {
  title: "Request a Quotation",
  description:
    "Tell Novotech about your engineering, automation, fabrication or architectural lighting requirement.",
};

export default function QuotationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 px-6 py-20 text-center md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
          Start a project conversation
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Request a Quotation
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          Share your requirements and we will help identify the right engineering,
          automation, fabrication or lighting solution.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <aside className="lg:pt-6">
          <h2 className="text-3xl font-bold">What to include</h2>

          <p className="mt-5 leading-relaxed text-slate-400">
            A short outline is enough to start. Include technical requirements,
            site location, dimensions, quantities and target dates where available.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Project scope and intended outcome",
              "Drawings, photos or reference material",
              "Quantity, dimensions and installation location",
              "Any required timeline or target budget",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-sky-200/60 bg-slate-900/60 p-4 text-slate-200"
              >
                <span className="text-yellow-400">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-sky-200/60 bg-blue-950/30 p-6">
            <h3 className="font-semibold text-blue-200">
              Prefer to speak directly?
            </h3>

            <a
              href="tel:+94710421421"
              className="mt-3 inline-block text-xl font-semibold text-white hover:text-yellow-300"
            >
              +94 710 421 421
            </a>
          </div>
        </aside>

        <QuotationForm />
      </section>
    </main>
  );
}
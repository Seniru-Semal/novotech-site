const services = [
  {
    title: "Mechanical Design & Fabrication",
    items: [
      "Structural fabrication",
      "Custom machinery",
      "Welding (MIG, TIG, Arc)",
      "Sheet metal work / Stainless Steel work",
      "Industrial machinery levelling, positioning & installation",
    ],
  },
  {
    title: "Precision Machining",
    items: [
      "Lathe operations",
      "Milling",
      "Component manufacturing",
      "Repair and reconditioning",
    ],
  },
  {
    title: "Electro-Mechanical Systems",
    items: [
      "Custom machine development",
      "Motion systems",
      "Prototype design",
    ],
  },
  {
    title: "PLC & Automation Solutions",
    items: [
      "PLC programming",
      "Control panel design",
      "Industrial automation systems",
      "Process optimization",
    ],
  },
  {
    title: "Architectural & Designer Lighting",
    items: [
      "Custom lighting design",
      "Smart lighting automation",
      "Energy-efficient LED systems",
      "Decorative and facade lighting",
    ],
  },
  {
    title: "Customized Engineering Solutions",
    items: [
      "Tailor-made systems",
      "Special-purpose machinery",
      "Unique problem-solving solutions",
    ],
  },
  {
    title: "Agricultural & Greenhouse Solutions",
    items: [
      "Greenhouse fabrication",
      "Automated irrigation systems",
      "Climate-controlled solutions",
    ],
  },
];

const industries = [
  "Industrial & Manufacturing",
  "Construction & Architecture",
  "Commercial & Retail",
  "Agriculture & Farming",
  "Residential Projects",
];

const strengths = [
  "One team across engineering, fabrication and automation",
  "Solutions shaped around the actual operating environment",
  "Practical designs that can be built and maintained",
  "Clear communication from scope to handover",
  "Quality checks before commissioning",
  "Long-term technical support",
];

const projectSteps = [
  "Requirement Analysis",
  "Concept & Design",
  "Engineering & Fabrication",
  "Integration & Testing",
  "Installation & Commissioning",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Engineering Solutions Built for Performance
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          From fabrication and automation to greenhouse systems and
          architectural lighting, we develop practical solutions for industrial,
          commercial and residential environments.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`h-full rounded-2xl border border-sky-200/60 bg-slate-900 p-8 shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 ${
                services.length % 3 === 1 && index === services.length - 1
                  ? "xl:col-start-2"
                  : ""
              }`}
            >
              <h2 className="mb-6 text-2xl font-bold text-blue-400">
                {service.title}
              </h2>

              <ul className="space-y-3 text-slate-200">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900 px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Industries We Serve
        </h2>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className={`flex min-h-32 items-center justify-center rounded-xl border border-sky-200/60 bg-slate-950 p-6 text-center shadow-lg shadow-slate-950/15 ${
                index === industries.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                  : ""
              }`}
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why Choose Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((strength) => (
            <div
              key={strength}
              className="flex min-h-32 items-center justify-center rounded-xl border border-sky-200/60 bg-slate-900 p-6 text-center shadow-lg shadow-slate-950/15"
            >
              {strength}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900 px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Project Approach
        </h2>

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {projectSteps.map((step, index) => (
            <div
              key={step}
              className={`rounded-xl border border-sky-200/60 bg-slate-950 p-6 text-center shadow-lg shadow-slate-950/15 ${
                index === projectSteps.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                  : ""
              }`}
            >
              <div className="mb-3 text-2xl font-bold text-blue-400">
                {index + 1}
              </div>

              <div>{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Let’s Build Smarter Systems Together
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-slate-300">
          Tell us what you need to achieve, and we will help define the right
          engineering, automation, fabrication or lighting solution.
        </p>

        <a
          href="/quotation"
          className="rounded-xl bg-blue-500 px-8 py-4 transition hover:bg-blue-600"
        >
          Request a Quotation
        </a>
      </section>
    </main>
  );
}
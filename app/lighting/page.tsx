const lightingServices = [
  {
    title: "Architectural Lighting Design",
    items: [
      "Interior & exterior lighting concepts",
      "Ambient, task & accent lighting",
      "Space-enhancing illumination strategies",
    ],
  },
  {
    title: "Custom Lighting Fixtures",
    items: [
      "Bespoke decorative lighting",
      "Feature & statement installations",
      "Designer fixtures manufactured to specification",
    ],
  },
  {
    title: "Facade & Landscape Lighting",
    items: [
      "Building facade illumination",
      "Outdoor & garden lighting",
      "Pathway & feature lighting",
    ],
  },
  {
    title: "Smart Lighting Systems",
    items: [
      "Automated lighting control systems",
      "Sensor-based & programmable lighting",
      "PLC & smart system integration",
    ],
  },
  {
    title: "Energy Efficient LED Solutions",
    items: [
      "Low energy consumption systems",
      "Long-life lighting solutions",
      "Sustainable & cost-effective designs",
    ],
  },
];

const applicationAreas = [
  "Commercial Buildings",
  "Hotels & Restaurants",
  "Retail Spaces",
  "Luxury Residences",
  "Industrial & Outdoor Environments",
];

const lightingBenefits = [
  "Design + Engineering Expertise",
  "Fully Customized Solutions",
  "High-End Aesthetic Appeal",
  "Energy Efficiency & Sustainability",
  "Seamless Automation Integration",
  "Long-Term Reliability",
];

export default function LightingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/25 via-slate-950/45 to-slate-950" />

        <div className="relative z-10">
          <p className="mb-4 uppercase tracking-[0.3em] text-blue-400">
            Premium Lighting Solutions
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Architectural & Designer Lighting Solutions
          </h1>

          <p className="mt-6 text-2xl italic text-slate-200">
            Where Light Becomes Design.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            Lighting has a technical job as well as a visual one. We combine
            layout, fixtures and controls to make spaces feel intentional and
            perform efficiently.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/quotation"
              className="rounded-xl bg-blue-500 px-8 py-4 transition hover:bg-blue-600"
            >
              Request Consultation
            </a>

            <a
              href="/portfolio"
              className="rounded-xl border border-sky-200/60 px-8 py-4 transition hover:bg-slate-100 hover:text-slate-950"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold">
              Lighting Beyond Illumination
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-200">
              <p>
                Every lighting scheme starts with the way a space will be used,
                the atmosphere it should create and the practical limitations of
                the site.
              </p>

              <p>
                From residences and hospitality spaces to commercial and
                industrial settings, our work brings visual comfort and
                functional clarity together.
              </p>

              <p>
                We then select the fixtures, control strategy and installation
                approach needed for reliable long-term performance.
              </p>
            </div>
          </div>

          <div
            className="relative h-96 overflow-hidden rounded-3xl border border-sky-200/60 bg-cover bg-center shadow-lg shadow-slate-950/20"
            style={{ backgroundImage: "url('/projects/lighting-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <p className="absolute bottom-8 left-8 right-8 text-xl font-semibold leading-relaxed text-white">
              Lighting designed as an integrated part of the space.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-950 px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Our Lighting Solutions
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-6">
          {lightingServices.map((service, index) => {
            const isLast = index === lightingServices.length - 1;

            return (
              <article
                key={service.title}
                className={`h-full rounded-3xl border border-sky-200/60 bg-slate-900 p-8 shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800 xl:col-span-2 ${
                  index === 3 ? "xl:col-start-2" : ""
                } ${
                  isLast
                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)] xl:mx-0 xl:w-auto"
                    : ""
                }`}
              >
                <h3 className="mb-6 text-2xl font-bold text-blue-400">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-slate-200">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Application Areas
        </h2>

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
          {applicationAreas.map((area) => (
            <article
              key={area}
              className="flex min-h-36 w-full items-center justify-center rounded-2xl border border-sky-200/60 bg-slate-900 p-8 text-center shadow-lg shadow-slate-950/15 sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)]"
            >
              {area}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-950 px-6 py-24">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Why Our Lighting Solutions
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {lightingBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex min-h-36 items-center justify-center rounded-2xl border border-sky-200/60 bg-slate-900 p-8 text-center shadow-lg shadow-slate-950/15"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight">
          We Don’t Just Install Lights — We Design Experiences.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
          Tell us about the space, the intended mood and the operational needs.
          We will help shape a lighting solution that works on every level.
        </p>

        <p className="mt-10 text-2xl italic text-blue-400">
          “Built to Perform. Designed to Impress.”
        </p>

        <div className="mt-12">
          <a
            href="/contact"
            className="rounded-2xl bg-blue-500 px-10 py-5 text-lg transition hover:bg-blue-600"
          >
            Speak to Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
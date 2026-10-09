const approach = [
  {
    title: "Understand",
    text: "We start with the site, the operating conditions and the result the project must achieve.",
  },
  {
    title: "Design",
    text: "Requirements become a buildable design with clear technical and practical decisions.",
  },
  {
    title: "Build",
    text: "Fabrication and integration follow an approved plan, with attention to fit, finish and function.",
  },
  {
    title: "Deliver",
    text: "We test, commission and hand over systems prepared for real working conditions.",
  },
];

const values = [
  "Integrated Engineering Expertise",
  "Custom-Built Practical Solutions",
  "Reliable Technical Execution",
  "Strong Industrial Experience",
  "High Quality Standards",
  "Long-Term Client Support",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Engineering Experience Applied to Real Work
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Novotech plans, fabricates and integrates systems made to work
          reliably in real operating environments.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Who We Are</h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-200">
          <p>
            NOVO TECH JN PVT LTD is a multidisciplinary engineering company
            working across mechanical fabrication, automation,
            electro-mechanical integration and architectural lighting.
          </p>

          <p>
            Each engagement moves from the initial requirement and site review
            through design, fabrication, integration and commissioning.
          </p>

          <p>
            We bring mechanical construction, control systems and lighting
            design together to meet both technical and visual requirements.
          </p>
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Built on 40+ Years of Engineering Expertise
            </h2>

            <div className="space-y-5 leading-relaxed text-slate-200">
              <p>
                Novotech operates as a subsidiary of the Innovation Center of
                Illukkumbura Industrial Automation Pvt Ltd, a provider of
                engineering systems and industrial solutions.
              </p>

              <p>
                That connection gives our team access to decades of practical
                experience in design, fabrication, automation and project
                execution.
              </p>

              <p>
                We use that foundation to produce solutions that are buildable,
                supportable and prepared for long-term use.
              </p>
            </div>
          </div>

          <div
            className="relative h-80 overflow-hidden rounded-2xl border border-sky-200/60 bg-cover bg-center shadow-lg shadow-slate-950/20"
            style={{ backgroundImage: "url('/projects/mechanical-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <p className="absolute bottom-6 left-6 right-6 text-lg font-semibold text-white">
              Practical engineering experience, from concept through
              installation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold">
          Our Engineering Approach
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {approach.map((item, index) => (
            <article
              key={item.title}
              className="h-full rounded-2xl border border-sky-200/60 bg-slate-900 p-8 shadow-lg shadow-slate-950/15"
            >
              <div className="mb-4 text-2xl font-bold text-blue-400">
                {index + 1}
              </div>

              <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>

              <p className="text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900 px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold">
          Why Clients Trust Us
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="flex min-h-28 items-center justify-center rounded-xl border border-sky-200/60 bg-slate-950 p-6 text-center shadow-lg shadow-slate-950/15"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Let’s Build Innovative Solutions Together
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-slate-300">
          Have a requirement in mind? Our team can help shape it into a
          practical engineering, automation, fabrication or lighting solution.
        </p>

        <a
          href="/contact"
          className="rounded-xl bg-blue-500 px-8 py-4 transition hover:bg-blue-600"
        >
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
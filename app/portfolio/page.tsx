const projects = [
  {
    title: "Industrial Fabrication Project",
    category: "Mechanical Fabrication",
    image: "/projects/fabrication.jpg",
    description:
      "Custom heavy-duty fabrication and structural engineering solution for industrial operations.",
  },

  {
    title: "PLC Automation System",
    category: "Automation",
    image: "/projects/automation.jpg",
    description:
      "Integrated industrial PLC control system with process optimization and monitoring.",
  },

  {
    title: "Architectural Lighting Installation",
    category: "Lighting",
    image: "/projects/lighting.jpg",
    description:
      "Premium lighting design and installation for a modern commercial environment.",
  },

  {
    title: "Greenhouse Automation",
    category: "Agriculture",
    image: "/projects/agriculture.jpg",
    description:
      "Climate-controlled greenhouse system with automated irrigation and monitoring.",
  },

  {
    title: "Custom Electro-Mechanical Machine",
    category: "Electro-Mechanical",
    image: "/projects/electromechanical.jpg",
    description:
      "Special-purpose machine developed for precision industrial manufacturing.",
  },

  {
    title: "Facade Lighting Solution",
    category: "Designer Lighting",
    image: "/projects/facade.jpg",
    description:
      "High-end exterior facade lighting system with programmable smart control.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-slate-800">

        <h1 className="text-5xl md:text-6xl font-bold">
          Our Portfolio
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Explore a collection of engineering, automation, fabrication, and lighting projects delivered with precision, innovation, and reliability.
        </p>

      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-12">

          <div>
            <h2 className="text-3xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-400 mt-2">
              Engineering solutions built for real-world performance.
            </p>
          </div>

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/40 transition transform hover:-translate-y-2"
            >

              {/* IMAGE LAYER */}
              <div className="relative h-60 overflow-hidden">

                <div
                  className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* CATEGORY BADGE */}
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>

              </div>

  {/* CONTENT */}
  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed">
      {project.description}
    </p>

  </div>

</div>
          ))}

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 bg-slate-900">

        <h2 className="text-4xl font-bold text-center mb-14">
          Industries We Have Served
        </h2>

        <div className="grid md:grid-cols-6 gap-6 max-w-7xl mx-auto">

          {[
            "GPV",
            "GRI",
            "INCUBE",
            "BIANCO",
            "IIAL",
            "LOLC",
            "CEYLEKTRA",
          ].map((company, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl h-32 flex items-center justify-center text-center px-4 hover:border-blue-500 transition"
            >
              {company}
            </div>
          ))}

        </div>

      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Precision Engineering Meets Visual Excellence
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">

              <p>
                Our projects are designed to solve practical engineering challenges while delivering long-term reliability, efficiency, and visual quality.
              </p>

              <p>
                From industrial automation systems to premium architectural lighting environments, every solution is developed with attention to detail and technical precision.
              </p>

              <p>
                We continue to expand our portfolio across industrial, agricultural, commercial, and residential sectors.
              </p>

            </div>

          </div>

          {/* Right Visual */}
          <div className="h-96 bg-gradient-to-br from-blue-500/10 to-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center text-gray-500">
            Portfolio Showcase Visual
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-black">

        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Let’s Create Your Next Engineering Success Story
        </h2>

        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
          Our team is ready to design, fabricate, automate, and deliver custom solutions tailored to your requirements.
        </p>

        <div className="mt-12 flex justify-center gap-4">

          <a
            href="/quotation"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl"
          >
            Request a Quotation
          </a>

          <a
            href="/contact"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}
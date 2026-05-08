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

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold">
          Engineering Solutions Built for Performance
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          We deliver integrated engineering, automation, fabrication, and lighting solutions tailored for industrial, commercial, agricultural, and residential applications.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >

              <h2 className="text-2xl font-bold mb-6 text-blue-400">
                {service.title}
              </h2>

              <ul className="space-y-3 text-gray-300">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-6 bg-slate-900">

        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center max-w-6xl mx-auto">

          {[
            "Industrial & Manufacturing",
            "Construction & Architecture",
            "Commercial & Retail",
            "Agriculture & Farming",
            "Residential Projects",
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6"
            >
              {industry}
            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "All-in-One Expertise – Engineering + Automation + Innovative Solutions",
            "Custom-Built Solutions – Designed specifically for your needs",
            "Quality & Precision – Built to last",
            "Practical Approach – Solutions that work in real conditions",
            "Reliable Delivery – On time, every time",
          ].map((point, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              {point}
            </div>
          ))}

        </div>

      </section>

      {/* PROJECT APPROACH */}
      <section className="py-20 px-6 bg-slate-900">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Project Approach
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto text-center">

          {[
            "Requirement Analysis",
            "Concept & Design",
            "Engineering & Fabrication",
            "Integration & Testing",
            "Installation & Commissioning",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-blue-400 font-bold text-2xl mb-3">
                {index + 1}
              </div>

              <div>{step}</div>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Smarter Systems Together
        </h2>

        <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
          Contact us today to discuss your engineering, automation, fabrication, or lighting project requirements.
        </p>

        <a
          href="/quotation"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl"
        >
          Request a Quotation
        </a>

      </section>

    </main>
  );
}
export default function LightingPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>

        <div className="relative z-10">

          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
            Premium Lighting Solutions
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Architectural & Designer Lighting Solutions
          </h1>

          <p className="mt-6 text-2xl text-gray-300 italic">
            Where Light Becomes Design.
          </p>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We create lighting solutions that go beyond illumination — transforming spaces into experiences through engineering precision, elegant aesthetics, and intelligent automation.
          </p>

          <div className="mt-10 flex gap-4 justify-center">

            <a
              href="/quotation"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl"
            >
              Request Consultation
            </a>

            <a
              href="/portfolio"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Lighting Beyond Illumination
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

              <p>
                Our architectural lighting services combine engineering precision with creative design to deliver visually striking, energy-efficient, and fully customized lighting systems.
              </p>

              <p>
                From luxury residences to commercial environments and industrial spaces, we design lighting experiences that elevate architecture, atmosphere, and functionality.
              </p>

              <p>
                Every project is carefully engineered to balance visual appeal, intelligent control, sustainability, and long-term reliability.
              </p>

            </div>

          </div>

          {/* Image Placeholder */}
          <div className="h-96 rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-500/10 to-slate-900 flex items-center justify-center text-gray-500">
            Lighting Showcase Placeholder
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-slate-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Lighting Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

          {[
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

          ].map((service, index) => (
            <div
              key={index}
              className="bg-black border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                {service.title}
              </h3>

              <ul className="space-y-4 text-gray-300">

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

      {/* APPLICATION AREAS */}
      <section className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Application Areas
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">

          {[
            "Commercial Buildings",
            "Hotels & Restaurants",
            "Retail Spaces",
            "Luxury Residences",
            "Industrial & Outdoor Environments",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-slate-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Our Lighting Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "Design + Engineering Expertise",
            "Fully Customized Solutions",
            "High-End Aesthetic Appeal",
            "Energy Efficiency & Sustainability",
            "Seamless Automation Integration",
            "Long-Term Reliability",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border border-slate-800 rounded-2xl p-8 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* CLOSING */}
      <section className="py-32 px-6 text-center">

        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          We Don’t Just Install Lights — We Design Experiences.
        </h2>

        <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Let us help bring your spaces to life with intelligent, elegant, and high-performance lighting solutions.
        </p>

        <p className="mt-10 text-blue-400 text-2xl italic">
          “Built to Perform. Designed to Impress.”
        </p>

        <div className="mt-12">

          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-2xl text-lg"
          >
            Speak to Our Team
          </a>

        </div>

      </section>

    </main>
  );
}
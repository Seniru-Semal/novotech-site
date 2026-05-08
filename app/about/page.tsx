export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-slate-800">

        <h1 className="text-4xl md:text-5xl font-bold">
          Engineering Excellence Backed by Experience
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          We deliver integrated engineering and lighting solutions that bridge the gap between technical performance and visual excellence.
        </p>

      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          Who We Are
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

          <p>
            NOVO TECH JN PVT LTD is a multidisciplinary engineering company specializing in mechanical engineering, industrial fabrication, automation systems, electro-mechanical integration, and premium architectural lighting solutions.
          </p>

          <p>
            We manage projects from concept to completion — ensuring quality, precision, efficiency, and innovation at every stage of the process.
          </p>

          <p>
            Our expertise spans industrial engineering, customized machinery, agricultural systems, automation technologies, and visually impactful lighting environments for commercial and residential applications.
          </p>

        </div>

      </section>

      {/* FOUNDATION SECTION */}
      <section className="py-20 px-6 bg-slate-900">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Built on 40+ Years of Engineering Expertise
            </h2>

            <div className="space-y-5 text-gray-300 leading-relaxed">

              <p>
                We are proud to operate as a subsidiary of the Innovation Center of Illukkumbura Industrial Automation Pvt Ltd, a leading provider of innovative and comprehensive engineering systems.
              </p>

              <p>
                Backed by over four decades of veteran engineering experience, our foundation strengthens our technical capabilities, practical engineering knowledge, and project execution reliability.
              </p>

              <p>
                This heritage allows us to deliver future-ready engineering solutions while maintaining the highest standards of precision and workmanship.
              </p>

            </div>

          </div>

          {/* Visual Placeholder */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl h-80 flex items-center justify-center text-gray-500">
            Company / Factory Image Placeholder
          </div>

        </div>

      </section>

      {/* APPROACH */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-14">
          Our Engineering Approach
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              title: "Understand",
              text: "We carefully analyze project requirements, constraints, and objectives.",
            },

            {
              title: "Design",
              text: "Our team develops intelligent engineering concepts and optimized system designs.",
            },

            {
              title: "Build",
              text: "We fabricate, integrate, and manufacture with precision and reliability.",
            },

            {
              title: "Deliver",
              text: "Projects are tested, commissioned, and delivered to perform in real-world conditions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >

              <div className="text-blue-400 font-bold text-2xl mb-4">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-slate-900">

        <h2 className="text-3xl font-bold text-center mb-14">
          Why Clients Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "Integrated Engineering Expertise",
            "Custom-Built Practical Solutions",
            "Reliable Technical Execution",
            "Strong Industrial Experience",
            "High Quality Standards",
            "Long-Term Client Support",
          ].map((value, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center"
            >
              {value}
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Innovative Solutions Together
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          From industrial engineering systems to premium lighting environments, our team is ready to help bring your ideas to life.
        </p>

        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl"
        >
          Contact Our Team
        </a>

      </section>

    </main>
  );
}
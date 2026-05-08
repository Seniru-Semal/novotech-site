export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-5xl">
          Smart Engineering & Agriculture & Bespoke Architectural Lighting Solutions
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl text-lg">
          Delivering precision engineering, advanced automation, innovative agriculture, and premium lighting solutions tailored for industrial, commercial, and lifestyle environments.
        </p>

        <p className="mt-3 text-blue-400 font-semibold text-lg">
          Hotline: +94 710 421 421
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/quotation"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            Get Quotation
          </a>

          <a
            href="/services"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Explore Services
          </a>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>

        <p className="text-gray-400 leading-relaxed">
          We are a multidisciplinary engineering company specializing in mechanical design, fabrication, automation systems, and architectural lighting solutions. From heavy-duty industrial fabrication to visually striking lighting designs, we provide complete, customized solutions that combine performance, reliability, and aesthetics.
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          We operate as a subsidiary of the Innovation Center of Illukkumbura Industrial Automation Pvt Ltd, backed by over 40 years of engineering expertise.
        </p>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-6 py-20 bg-slate-900">
        <h2 className="text-2xl font-bold text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Mechanical Design & Fabrication",
            "Precision Machining",
            "PLC & Automation",
            "Electro-Mechanical Systems",
            "Architectural Lighting",
            "Agricultural Solutions"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800"
            >
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Powerful Together
        </h2>

        <p className="text-gray-400 mb-6">
          Partner with us to transform your ideas into practical, high-performance engineering solutions.
        </p>

        <a
          href="/quotation"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
        >
          Request a Quotation
        </a>

      </section>

    </main>
  );
}
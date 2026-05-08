export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-slate-800">

        <h1 className="text-5xl md:text-6xl font-bold">
          Let’s Build Something Exceptional Together
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Whether you need a custom engineering solution, automation system, or premium architectural lighting design — our team is ready to assist you.
        </p>

      </section>

      {/* CONTACT GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl font-bold mb-10">
              Speak to an Expert Today
            </h2>

            <div className="space-y-8">

              {/* Hotline */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Hotline
                </h3>

                <p className="text-xl">
                  +94 710 421 421
                </p>

              </div>

              {/* Email */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:heavyfabrication@iial.lk"
                  className="text-xl hover:text-blue-400"
                >
                  heavyfabrication@iial.lk
                </a>

              </div>

              {/* Head Office */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Head Office
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  No.655/1, Gunathilake Gardens,
                  <br />
                  Elvitigala Mawatha,
                  <br />
                  Colombo 05
                </p>

              </div>

              {/* Factory */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Factory
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  No.54/4,
                  <br />
                  Mandawala,
                  <br />
                  Putupagala
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* QUICK MESSAGE */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Instant Support on WhatsApp
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                Chat with us on WhatsApp for quick assistance. Share your requirements, send drawings, and receive fast technical feedback from our engineering team.
              </p>

              <a
                href="https://wa.me/94710421421"
                target="_blank"
                className="block w-full text-center bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-2xl text-lg font-semibold"
              >
                Chat on WhatsApp
              </a>

            </div>

            {/* WHY CONTACT US */}
            <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Why Contact Us?
              </h2>

              <div className="space-y-5 text-gray-300">

                <div className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Fast technical advice from experienced engineers</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Quick quotations and project support</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Tailor-made engineering and lighting solutions</span>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Reliable guidance from concept to completion</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAP PLACEHOLDER */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">

        <div className="h-[450px] bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center text-gray-500">
          Google Maps Integration Placeholder
        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-black">

        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Call, WhatsApp, or Email Us Today
        </h2>

        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
          Let’s turn your engineering ideas into reliable, high-performance solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="tel:+94710421421"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl"
          >
            Call Hotline
          </a>

          <a
            href="https://wa.me/94710421421"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:heavyfabrication@iial.lk"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Send Email
          </a>

        </div>

      </section>

    </main>
  );
}
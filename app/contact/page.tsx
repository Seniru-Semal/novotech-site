export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="py-24 px-6 text-center border-b border-slate-800">

        <h1 className="text-5xl md:text-6xl font-bold">
          Let’s Build Something Exceptional Together
        </h1>

        <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
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
              <div className="bg-slate-900 border border-sky-200/60 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Hotline
                </h3>

                <p className="text-xl">
                  +94 710 421 421
                </p>

              </div>

              {/* Email */}
              <div className="bg-slate-900 border border-sky-200/60 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:info@novotechjn.lk"
                  className="text-xl hover:text-blue-400"
                >
                  info@novotechjn.lk
                </a>

              </div>

              {/* Head Office */}
              <div className="bg-slate-900 border border-sky-200/60 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Head Office
                </h3>

                <p className="text-slate-200 leading-relaxed">
                  No.655/1, Gunathilake Gardens,
                  <br />
                  Elvitigala Mawatha,
                  <br />
                  Colombo 05
                </p>

              </div>

              {/* Factory */}
              <div className="bg-slate-900 border border-sky-200/60 rounded-2xl p-6">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Factory
                </h3>

                <p className="text-slate-200 leading-relaxed">
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
            <div className="bg-slate-900 border border-sky-200/60 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Instant Support on WhatsApp
              </h2>

              <p className="text-slate-300 leading-relaxed mb-8">
                Chat with us on WhatsApp for quick assistance. Share your requirements, send drawings, and receive fast technical feedback from our engineering team.
              </p>

              <a
                href="https://wa.me/94710421421"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-2xl text-lg font-semibold"
              >
                Chat on WhatsApp
              </a>

            </div>

            {/* WHY CONTACT US */}
            <div className="mt-10 bg-slate-900 border border-sky-200/60 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Why Contact Us?
              </h2>

              <div className="space-y-5 text-slate-200">

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
        <div className="min-h-[300px] rounded-3xl border border-sky-200/60 bg-gradient-to-br from-blue-950/60 to-slate-900 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-400">
            Visit our head office
          </p>

          <h2 className="mt-5 text-3xl font-bold">
            Novotech J.N. Pvt. Ltd
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            No.655/1, Gunathilake Gardens, Elvitigala Mawatha, Colombo 05,
            Sri Lanka
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=No.%20655%2F1%2C%20Gunathilake%20Gardens%2C%20Elvitigala%20Mawatha%2C%20Colombo%2005%2C%20Sri%20Lanka"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl border border-sky-200/60 px-6 py-3 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-slate-950">

        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Call, WhatsApp, or Email Us Today
        </h2>

        <p className="mt-8 text-slate-300 max-w-3xl mx-auto text-lg">
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
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:info@novotechjn.lk"
            className="border border-sky-200/60 px-8 py-4 rounded-2xl hover:bg-slate-100 hover:text-slate-950 transition"
          >
            Send Email
          </a>

        </div>

      </section>

    </main>
  );
}
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen space-y-32">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Novotech J.N. Pvt. Ltd
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Engineering innovation across automation, fabrication, electronics, agriculture, and custom systems.
        </p>

        <button className="bg-slate-900 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition transform hover:-translate-y-1">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <Section title="Our Core Services">
        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Automation"
            description="Industrial automation, PLC systems, control panels, and smart systems."
          />

          <ServiceCard
            title="Fabrication"
            description="Light and heavy fabrication for industrial and custom engineering needs."
          />

          <ServiceCard
            title="Electronics"
            description="Embedded systems, circuit design, and electronic solutions."
          />

        </div>
      </Section>

      {/* PLACEHOLDER PORTFOLIO */}
      <Section title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">

          {[1,2,3,4,5,6].map((i) => (
            <div
              key={i}
              className="h-48 bg-slate-800 rounded-xl border border-white/5"
            />
          ))}

        </div>
      </Section>

    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";

const slides = [
  {
    title: "Smart Engineering Solutions",
    subtitle:
      "Automation, fabrication, and industrial systems built with precision.",
    image: "/hero/engineering.jpg",
  },
  {
    title: "Innovative Agricultural Systems",
    subtitle:
      "Modern greenhouse automation and smart farming technologies.",
    image: "/hero/agriculture.jpg",
  },
  {
    title: "Architectural Lighting Design",
    subtitle:
      "Premium lighting solutions that transform spaces and experiences.",
    image: "/hero/lighting.jpg",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 350);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGES (CINEMATIC CROSSFADE) */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              i === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

        {/* BLUE GLOW DEPTH LAYER */}
        <div className="absolute w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full top-1/3 animate-pulse" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">

          <h1
            key={slides[index].title}
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[index].title}
          </h1>

          <p
            key={slides[index].subtitle}
            className={`text-gray-300 max-w-xl mx-auto mb-8 text-lg transition-all duration-700 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[index].subtitle}
          </p>

          {/* HOTLINE */}
          <p className="text-yellow-400 font-semibold mb-8">
            Hotline: +94 710 421 421
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center flex-wrap">

            <a
              href="/services"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition"
            >
              Explore Services
            </a>

            <a
              href="/quotation"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-yellow-500 hover:to-amber-400 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Get Quotation
            </a>

          </div>

        </div>

        {/* INDICATORS */}
        <div className="absolute bottom-10 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-blue-500" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </section>

      {/* SERVICES */}
      <Section>
        <div className="py-20 px-6 max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Services
          </h2>

          <p className="text-gray-400 max-w-2xl mb-12">
            Engineering solutions built for industrial performance, automation, and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <ServiceCard
              title="Automation"
              description="Industrial PLC systems, control panels, and smart automation solutions."
            />

            <ServiceCard
              title="Fabrication"
              description="Light and heavy industrial fabrication and structural engineering."
            />

            <ServiceCard
              title="Electronics"
              description="Embedded systems, circuit design, and electronic engineering solutions."
            />

          </div>

        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section>
        <div className="py-20 px-6 max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mb-12">
            A glimpse into our engineering, automation, and lighting solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-900 border border-white/5 rounded-2xl h-48 hover:border-blue-500/30 hover:-translate-y-1 transform transition"
              />
            ))}

          </div>

        </div>
      </Section>

    </main>
  );
}
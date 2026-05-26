"use client";

import { useEffect, useState } from "react";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";

const slides = [
  {
    title: "Engineering. Agriculture. Lighting.",
    subtitle:
     "Delivering precision engineering, advanced automation, innovative agriculture and premium architectural lighting solutions tailored for industrial, commercial and lifestyle environments.",
    video: "/hero/facility.mp4",
  },

  {
    title: "Mechanical Design & Fabrication",
    subtitle:
      "Structural fabrication, welding, machining, industrial installation and custom engineering solutions.",
    video: "/hero/fabrication.mp4",
  },

  {
    title: "Architectural & Designer Lighting",
    subtitle:
      "Premium lighting systems engineered to transform buildings, landscapes and commercial spaces.",
    image: "/hero/lighting.jpg",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#0a0f1a] text-white min-h-screen">

      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center text-center">

        {/* BACKGROUND MEDIA */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[2000ms] ${
              i === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-110"
            }`}
          >
            {"video" in slide ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            )}
          </div>
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* BLUE GLOW */}
        <div className="absolute w-[900px] h-[900px] bg-blue-500/15 blur-[160px] rounded-full animate-pulse" />

        {/* GOLD GLOW */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-6">
            NOVO TECH JN PVT LTD
          </p>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {slides[index].title}
          </h1>

          <p
            className={`text-base md:text-lg lg:text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {slides[index].subtitle}
          </p>

          <p className="mt-8 text-yellow-400 font-semibold text-lg">
            Hotline: +94 710 421 421
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="/services"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-medium transition"
            >
              Explore Services
            </a>

            <a
              href="/quotation"
              className="bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-400 hover:to-yellow-300 text-black px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Quotation
            </a>

          </div>

        </div>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-10 flex gap-3 z-20">

          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-500 rounded-full ${
                i === index
                  ? "w-10 h-2 bg-yellow-400"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}

        </div>

      </section>

      {/* ========================================= */}
      {/* SERVICES */}
      {/* ========================================= */}

      <Section>
        <div className="py-24 px-6 max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">
            Our Core Services
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mb-8" />

          <p className="text-gray-400 max-w-2xl mb-14">
            Engineering solutions designed to improve performance,
            reliability, efficiency and long-term operational success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <ServiceCard
              title="Automation"
              description="Industrial PLC systems, smart control panels, process automation and monitoring."
            />

            <ServiceCard
              title="Fabrication"
              description="Custom fabrication, structural engineering, welding and industrial installations."
            />

            <ServiceCard
              title="Architectural Lighting"
              description="Premium lighting systems combining engineering precision with visual excellence."
            />

          </div>

        </div>
      </Section>

      {/* ========================================= */}
      {/* COMPANY STATS */}
      {/* ========================================= */}

      <section className="py-24 px-6 bg-slate-900/30">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              40+
            </h3>
            <p className="text-gray-400 mt-2">
              Years of Engineering Expertise
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              100+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              24/7
            </h3>
            <p className="text-gray-400 mt-2">
              Technical Support
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-400">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Custom Solutions
            </p>
          </div>

        </div>

      </section>

      {/* ========================================= */}
      {/* PROJECT SHOWCASE */}
      {/* ========================================= */}

      <Section>
        <div className="py-24 px-6 max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-4">
            Project Showcase
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mb-8" />

          <p className="text-gray-400 max-w-3xl mb-14">
            From premium architectural lighting installations to industrial
            fabrication and automation systems, our projects demonstrate
            engineering precision, innovation and practical performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* LIGHTING 01 */}
            <div className="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-300">

              <div
                className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{
                  backgroundImage:
                    "url('/projects/lighting-1.jpg')",
                }}
              />

              <div className="p-6">

                <p className="text-yellow-400 text-sm mb-2">
                  Architectural Lighting
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Premium Lighting Installation
                </h3>

                <p className="text-gray-400">
                  High-end lighting design engineered to enhance visual impact,
                  ambience and energy efficiency.
                </p>

              </div>

            </div>

            {/* LIGHTING 02 */}
            <div className="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-300">

              <div
                className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{
                  backgroundImage:
                    "url('/projects/lighting-2.jpg')",
                }}
              />

              <div className="p-6">

                <p className="text-yellow-400 text-sm mb-2">
                  Designer Lighting
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Feature Lighting Concept
                </h3>

                <p className="text-gray-400">
                  Bespoke lighting solutions delivering aesthetic excellence
                  and intelligent control integration.
                </p>

              </div>

            </div>

            {/* LIGHTING 03 */}
            <div className="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-300">

              <div
                className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{
                  backgroundImage:
                    "url('/projects/lighting-3.jpg')",
                }}
              />

              <div className="p-6">

                <p className="text-yellow-400 text-sm mb-2">
                  Facade Lighting
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Exterior Illumination System
                </h3>

                <p className="text-gray-400">
                  Precision facade lighting designed to elevate architectural
                  identity and nighttime visibility.
                </p>

              </div>

            </div>

            
            {/* MECHANICAL 01 */}
            <div className="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300">

              <div
                className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{
                  backgroundImage:
                    "url('/projects/mechanical-1.jpg')",
                }}
              />

              <div className="p-6">

                <p className="text-blue-400 text-sm mb-2">
                  Mechanical Fabrication
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Industrial Fabrication Project
                </h3>

                <p className="text-gray-400">
                  Heavy-duty fabrication engineered for reliability,
                  durability and operational efficiency.
                </p>

              </div>

            </div>

            {/* MECHANICAL 02 */}
            <div className="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300">

              <div
                className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-700"
                style={{
                  backgroundImage:
                    "url('/projects/mechanical-2.jpg')",
                }}
              />

              <div className="p-6">

                <p className="text-blue-400 text-sm mb-2">
                  Precision Engineering
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  Custom Machinery Solution
                </h3>

                <p className="text-gray-400">
                  Designed and manufactured to meet demanding industrial
                  performance requirements.
                </p>

              </div>

            </div>

          </div>

          {/* AUTOMATION FEATURE */}

          <div className="mt-16 bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/20 rounded-3xl overflow-hidden">

            <div className="grid lg:grid-cols-2">

              <div
                className="min-h-[350px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/projects/automation-demo.jpg')",
                }}
              />

              <div className="p-10 flex flex-col justify-center">

                <p className="text-blue-400 mb-3">
                  PLC & Industrial Automation
                </p>

                <h3 className="text-3xl font-bold mb-5">
                  Automation Demonstration System
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Integrated PLC control, monitoring and automation
                  technologies developed to improve productivity,
                  reliability and process visibility.
                </p>

                <a
                  href="/portfolio"
                  className="w-fit bg-gradient-to-r from-blue-600 to-blue-500 hover:from-yellow-500 hover:to-amber-400 px-6 py-3 rounded-xl font-medium transition"
                >
                  View Full Portfolio
                </a>

              </div>

            </div>

          </div>

        </div>
      </Section>

    </main>
  );
}
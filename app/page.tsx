"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

type Slide = {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
};

const slides: Slide[] = [
  {
    title: "Engineering, Automation & Lighting",
    subtitle:
      "Novotech designs, fabricates and integrates reliable systems for industrial, commercial and architectural environments.",
    video: "/hero/facility.mp4",
  },
  {
    title: "Mechanical Design & Fabrication",
    subtitle:
      "From structural work to custom machine assemblies, we build solutions that fit the site, the load and the job.",
    image: "/hero/fabrication.jpg",
  },
  {
    title: "Architectural & Designer Lighting",
    subtitle:
      "Lighting systems planned to complement the space, support the intended atmosphere and use energy responsibly.",
    image: "/hero/lighting.png",
  },
];

const featuredProjects = [
  {
    category: "Architectural Lighting",
    title: "Premium Lighting Installation",
    description:
      "Layered lighting selected to define the space, improve comfort and reduce unnecessary energy use.",
    image: "/projects/lighting-1.jpg",
    accent: "gold",
  },
  {
    category: "Designer Lighting",
    title: "Feature Lighting Concept",
    description:
      "A custom feature approach that combines a visual focal point with practical lighting control.",
    image: "/projects/lighting-2.jpg",
    accent: "gold",
  },
  {
    category: "Facade Lighting",
    title: "Exterior Illumination System",
    description:
      "Exterior illumination arranged to strengthen night-time presence without overwhelming the architecture.",
    image: "/projects/lighting-3.jpg",
    accent: "gold",
  },
  {
    category: "Mechanical Fabrication",
    title: "Industrial Fabrication Project",
    description:
      "A robust fabricated assembly prepared for site installation and sustained industrial use.",
    image: "/projects/mechanical-1.jpg",
    accent: "blue",
  },
  {
    category: "Precision Engineering",
    title: "Custom Machinery Solution",
    description:
      "A purpose-built mechanical solution developed around the required dimensions, function and workflow.",
    image: "/projects/mechanical-2.jpg",
    accent: "blue",
  },
] as const;

export default function Home() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const currentSlide = slides[index];

  useEffect(() => {
    let transitionTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setVisible(false);

      transitionTimeout = setTimeout(() => {
        setIndex((previous) => (previous + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 9000);

    return () => {
      clearInterval(interval);

      if (transitionTimeout) {
        clearTimeout(transitionTimeout);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
        <div
          key={`hero-${index}`}
          className={`absolute inset-0 transition-all duration-[2000ms] ${
            visible ? "scale-105 opacity-100" : "scale-110 opacity-0"
          }`}
        >
          {currentSlide.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src={currentSlide.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentSlide.image ?? ""})`,
              }}
            />
          )}
        </div>

        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute h-[900px] w-[900px] rounded-full bg-blue-500/15 blur-[160px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-yellow-400">
            NOVO TECH JN PVT LTD
          </p>

          <h1
            className={`mx-auto max-w-4xl text-4xl font-bold leading-tight transition-all duration-700 md:text-5xl lg:text-6xl ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {currentSlide.title}
          </h1>

          <p
            className={`mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-200 transition-all duration-700 md:text-lg lg:text-xl ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {currentSlide.subtitle}
          </p>

          <p className="mt-8 text-lg font-semibold text-yellow-400">
            Hotline: +94 710 421 421
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="rounded-xl bg-blue-600 px-8 py-4 font-medium transition hover:bg-blue-500"
            >
              Explore Services
            </a>

            <a
              href="/quotation"
              className="rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-4 font-semibold text-slate-950 transition hover:from-yellow-400 hover:to-yellow-300"
            >
              Request Quotation
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 z-20 flex gap-3">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.title}
              className={`rounded-full transition-all duration-500 ${
                slideIndex === index
                  ? "h-2 w-10 bg-yellow-400"
                  : "h-2 w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-sky-200/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-4 text-4xl font-bold">Our Core Services</h2>

          <div className="mb-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-yellow-400" />

          <p className="mb-14 max-w-2xl text-slate-300">
            From fabrication and control panels to lighting installations, we
            turn site requirements into systems that are practical to build,
            operate and maintain.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Automation"
              description="PLC control, monitoring and operator interfaces designed around the way your process actually runs."
            />

            <ServiceCard
              title="Fabrication"
              description="Structures, components and machine assemblies produced for fit-up, strength and long-term serviceability."
            />

            <ServiceCard
              title="Architectural Lighting"
              description="Architectural lighting planned to balance appearance, comfort, control and energy use."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900/45 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["40+", "Years of Engineering Expertise"],
            ["100+", "Projects Delivered"],
            ["24/7", "Technical Support"],
            ["100%", "Custom Solutions"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-5xl font-bold text-yellow-400">{value}</h3>
              <p className="mt-2 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-sky-200/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-4 text-4xl font-bold">Project Showcase</h2>

          <div className="mb-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-yellow-400" />

          <p className="mb-14 max-w-3xl text-slate-300">
            Selected work across lighting, fabrication and automation, each
            developed for a specific site, technical requirement and operating
            outcome.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-6">
            {featuredProjects.map((project, projectIndex) => {
              const isGold = project.accent === "gold";
              const isLastProject =
                projectIndex === featuredProjects.length - 1;

              return (
                <article
                  key={project.title}
                  className={`group h-full overflow-hidden rounded-3xl border border-sky-200/50 bg-slate-900 shadow-lg shadow-slate-950/15 transition-all duration-300 hover:-translate-y-1 ${
                    isGold
                      ? "hover:border-yellow-400"
                      : "hover:border-blue-400"
                  } xl:col-span-2 ${
                    projectIndex === 3 ? "xl:col-start-2" : ""
                  } ${
                    isLastProject
                      ? "md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)] xl:mx-0 xl:w-auto"
                      : ""
                  }`}
                >
                  <div
                    className="h-60 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />

                  <div className="p-6">
                    <p
                      className={`mb-2 text-sm ${
                        isGold ? "text-yellow-400" : "text-blue-400"
                      }`}
                    >
                      {project.category}
                    </p>

                    <h3 className="mb-3 text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-slate-300">{project.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-blue-400/35 bg-gradient-to-r from-blue-950/60 to-slate-900">
            <div className="grid lg:grid-cols-2">
              <div
                className="min-h-[350px] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/projects/automation-demo.jpg')",
                }}
              />

              <div className="flex flex-col justify-center p-10">
                <p className="mb-3 text-blue-400">
                  PLC & Industrial Automation
                </p>

                <h3 className="mb-5 text-3xl font-bold">
                  Automation Demonstration System
                </h3>

                <p className="mb-6 leading-relaxed text-slate-200">
                  A PLC-based demonstration system bringing control, feedback
                  and operating status into one practical interface.
                </p>

                <a
                  href="/portfolio"
                  className="w-fit rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium transition hover:from-yellow-500 hover:to-amber-400 hover:text-slate-950"
                >
                  View Full Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
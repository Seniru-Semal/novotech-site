"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const categories = ["All", "Automation", "Fabrication", "Electronics"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <main className="bg-slate-950 text-white min-h-screen py-24 px-6">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-4">Project Portfolio</h1>
      <p className="text-gray-400 mb-10 max-w-2xl">
        A showcase of engineering, automation, fabrication, and electronics projects.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              active === cat
                ? "bg-blue-500 border-blue-500"
                : "border-white/10 text-white/70 hover:border-blue-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
          />
        ))}
      </div>

    </main>
  );
}
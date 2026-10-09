export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Industrial Fabrication & Structural Engineering",
    category: "Mechanical Fabrication",
    image: "/projects/mechanical-1.jpg",
    description:
      "Custom fabrication and structural engineering designed for dependable industrial operation.",
  },
  {
    title: "Precision Engineering Components",
    category: "Precision Engineering",
    image: "/projects/mechanical-2.jpg",
    description:
      "Purpose-built mechanical work developed to meet demanding project requirements.",
  },
  {
    title: "Industrial Automation & Control",
    category: "Automation",
    image: "/projects/automation-demo.jpg",
    description:
      "Integrated control, monitoring and automation technologies for improved process visibility.",
  },
  {
    title: "Architectural Lighting Installation",
    category: "Architectural Lighting",
    image: "/projects/lighting-1.jpg",
    description:
      "Lighting designed to improve ambience, visual impact and energy efficiency.",
  },
  {
    title: "Designer Lighting Concept",
    category: "Designer Lighting",
    image: "/projects/lighting-2.jpg",
    description:
      "Bespoke lighting concepts that bring aesthetic quality and technical detail together.",
  },
  {
    title: "Facade & Exterior Illumination",
    category: "Facade Lighting",
    image: "/projects/lighting-3.jpg",
    description:
      "Exterior lighting designed to strengthen architectural identity and nighttime visibility.",
  },
];
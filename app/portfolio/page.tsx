import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Novotech engineering, fabrication, automation and architectural lighting work, together with our group-company network and selected customers.",
};

type Organization = {
  name: string;
  logo: string;
};

const groupCompanies: Organization[] = [
  {
    name: "Illukkumbura Industrial Automation",
    logo: "/logos/iial.png",
  },
  {
    name: "Bianco",
    logo: "/logos/bianco.jpg",
  },
  {
    name: "Ceylekra",
    logo: "/logos/ceylektra.png",
  },
  {
    name: "Zeus Power",
    logo: "/logos/zeus power.jpg",
  },
  {
    name: "Cellux",
    logo: "/logos/cellux.jpg",
  },
  {
    name: "Azzuro",
    logo: "/logos/azzuro.jpg",
  },
];

const customers: Organization[] = [
  {
    name: "GPV",
    logo: "/logos/gpv.jpg",
  },
  {
    name: "GRI",
    logo: "/logos/gri.jpg",
  },
  {
    name: "LOLC",
    logo: "/logos/lolc.png",
  },
  {
    name: "Tea Avenue",
    logo: "/logos/tea avenue.jpg",
  },
];

function OrganizationTile({ organization }: { organization: Organization }) {
  return (
    <article className="group flex min-h-52 flex-col justify-between rounded-2xl border border-sky-200/60 bg-slate-800/90 p-6 text-center shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:border-yellow-400/70 hover:bg-slate-800">
      <div className="relative h-24 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner">
        <Image
          src={organization.logo}
          alt={`${organization.name} logo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      <h3 className="mt-8 text-lg font-semibold text-white">
        {organization.name}
      </h3>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
          Selected work and relationships
        </p>

        <h1 className="mt-5 text-5xl font-bold md:text-6xl">
          Our Portfolio
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Examples of engineering and lighting work, together with companies and
          customers connected to the Illukkumbura Group network.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <p className="mt-3 text-slate-300">
            Selected work spanning mechanical fabrication, automation and
            architectural lighting.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-sky-200/60 bg-slate-900 shadow-lg shadow-slate-950/15 transition hover:-translate-y-2 hover:border-blue-400 hover:bg-slate-800"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600/95 px-3 py-1 text-xs font-medium text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold transition group-hover:text-yellow-300">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/30 bg-slate-900/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Our group network
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Illukkumbura Group Companies
            </h2>

            <p className="mt-5 leading-relaxed text-slate-300">
              Companies within the Illukkumbura Group contribute complementary
              engineering, electrical and technical capabilities across the
              wider network.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {groupCompanies.map((company) => (
              <OrganizationTile key={company.name} organization={company} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
            Trusted relationships
          </p>

          <h2 className="mt-4 text-4xl font-bold">Selected Customers</h2>

          <p className="mt-5 leading-relaxed text-slate-300">
            Organisations that have worked with the wider group across
            industrial, commercial and lifestyle environments.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customers.map((customer) => (
            <OrganizationTile key={customer.name} organization={customer} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Precision Engineering Meets Visual Excellence
          </h2>

          <div className="mt-7 space-y-5 leading-relaxed text-slate-200">
            <p>
              Our work is developed to solve practical engineering challenges
              while supporting reliability, efficiency and visual quality.
            </p>

            <p>
              Whether the requirement is an industrial system or an
              architectural lighting environment, the final solution is shaped
              around the site and the way it will be used.
            </p>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-3xl border border-sky-200/60 shadow-lg shadow-slate-950/20">
          <Image
            src="/projects/mechanical-2.jpg"
            alt="Novotech precision engineering work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

          <p className="absolute bottom-7 left-7 right-7 text-lg font-semibold text-white">
            Engineering solutions made for real-world performance.
          </p>
        </div>
      </section>

      <section className="mt-12 border-y border-sky-200/30 bg-slate-900 px-6 py-28 text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Let&apos;s Create Your Next Engineering Success Story
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
          Our team is ready to design, fabricate, automate and deliver a
          solution tailored to your requirements.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/quotation"
            className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600"
          >
            Request a Quotation
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-sky-200/60 px-8 py-4 font-semibold transition hover:bg-slate-100 hover:text-slate-950"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
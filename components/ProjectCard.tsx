interface Props {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-xl border border-sky-200/60 bg-slate-900/90 shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800">
      <div
        className="h-48 bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="p-4">
        <p className="mb-2 text-sm text-blue-400">{category}</p>

        <h3 className="mb-2 text-lg font-bold">{title}</h3>

        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </article>
  );
}
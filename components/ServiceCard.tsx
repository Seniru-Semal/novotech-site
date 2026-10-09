export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="h-full rounded-2xl border border-sky-200/60 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/15 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>

      <p className="leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}

export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-900/80 backdrop-blur border border-sky-200/60 p-6 rounded-2xl border border-sky-200/60 hover:border-blue-500/30 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}
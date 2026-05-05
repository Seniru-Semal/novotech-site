export default function ProjectCard({
  title,
  description,
  category,
}: {
  title: string;
  description: string;
  category: string;
}) {
  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition transform hover:-translate-y-2">

      {/* IMAGE PLACEHOLDER */}
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
          Image/Video Placeholder
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="text-xs text-blue-400">{category}</span>

        <h3 className="text-lg font-semibold mt-2 mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
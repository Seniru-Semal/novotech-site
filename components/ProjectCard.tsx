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
    <div className="group bg-slate-900/80 backdrop-blur border border-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/40 transition">

      {/* IMAGE */}
      <div
        className="h-48 bg-cover bg-center group-hover:scale-105 transition duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* CONTENT */}
      <div className="p-4">

        <p className="text-blue-400 text-sm mb-2">
          {category}
        </p>

        <h3 className="font-bold text-lg mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {description}
        </p>

      </div>

    </div>
  );
}
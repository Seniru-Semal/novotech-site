export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
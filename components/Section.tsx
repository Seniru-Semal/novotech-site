export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
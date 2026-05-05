export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen py-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Services</h1>

      <p className="text-gray-400 max-w-2xl">
        Detailed breakdown of all engineering services offered by Novotech J.N. Pvt. Ltd.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl h-40"></div>
        <div className="bg-slate-900 p-6 rounded-xl h-40"></div>
        <div className="bg-slate-900 p-6 rounded-xl h-40"></div>
        <div className="bg-slate-900 p-6 rounded-xl h-40"></div>
      </div>
    </main>
  );
}
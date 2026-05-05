export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        <h2 className="text-lg font-semibold mb-4">Novotech J.N. Pvt. Ltd</h2>

        <p className="text-gray-400 text-sm mb-6">
          Automation • Fabrication • Electronics • Engineering Solutions
        </p>

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Novotech. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
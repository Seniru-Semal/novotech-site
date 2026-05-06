export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Quotation Submitted Successfully
        </h1>

        <p className="text-gray-400 mb-6">
          We will review your request and contact you soon.
        </p>

        <a
          href="/quotation"
          className="text-blue-400 underline"
        >
          Submit another quotation
        </a>
      </div>
    </main>
  );
}
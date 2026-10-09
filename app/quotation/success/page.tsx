export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Your Quotation Draft Is Ready
        </h1>

        <p className="text-slate-300 mb-6">
          Please complete the message in WhatsApp or your email application to
          send your request to our team.
        </p>

        <a href="/quotation" className="text-blue-400 underline">
          Return to quotation form
        </a>
      </div>
    </main>
  );
}
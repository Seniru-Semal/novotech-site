export default function QuotationPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen py-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Get a Quotation</h1>

      <form
        action="https://formspree.io/f/mojrwpkj"
        method="POST"
        className="max-w-2xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-slate-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full p-3 rounded bg-slate-900"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone / WhatsApp"
          className="w-full p-3 rounded bg-slate-900"
        />

        <select
          name="service"
          className="w-full p-3 rounded bg-slate-900"
        >
          <option>Automation</option>
          <option>Fabrication</option>
          <option>Electronics</option>
          <option>Custom Solution</option>
        </select>

        <textarea
          name="message"
          placeholder="Describe your project"
          rows={5}
          className="w-full p-3 rounded bg-slate-900"
        />

        <button
          type="submit"
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Request Quote
        </button>
        <input type="hidden" name="_redirect" value="https://novotech-site.vercel.app/quotation/success" />
      </form>
    </main>
  );
}
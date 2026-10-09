"use client";

import { useRef, useState } from "react";

type DeliveryChannel = "whatsapp" | "email";

const serviceOptions = [
  "Mechanical Design & Fabrication",
  "Precision Machining",
  "PLC & Automation",
  "Electro-Mechanical Systems",
  "Architectural & Designer Lighting",
  "Customized Engineering Solution",
  "Other",
];

function buildMessage(formData: FormData) {
  const field = (name: string) => String(formData.get(name) ?? "").trim();

  return [
    "Quotation request — Novotech J.N. Pvt. Ltd",
    "",
    `Name: ${field("name")}`,
    `Company: ${field("company") || "Not provided"}`,
    `Phone: ${field("phone")}`,
    `Email: ${field("email")}`,
    `Service required: ${field("service")}`,
    `Preferred contact: ${field("contactPreference")}`,
    "",
    "Project details:",
    field("details"),
  ].join("\n");
}

export default function QuotationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  function deliver(channel: DeliveryChannel) {
    const form = formRef.current;

    if (!form || !form.reportValidity()) {
      return;
    }

    const message = buildMessage(new FormData(form));

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/94710421421?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );

      setStatus(
        "A pre-filled WhatsApp message has opened. You can attach drawings or photos before sending it.",
      );
      return;
    }

    window.location.href = `mailto:info@novotechjn.lk?subject=${encodeURIComponent(
      "Quotation request — Novotech J.N. Pvt. Ltd",
    )}&body=${encodeURIComponent(message)}`;

    setStatus("Your email application is being opened with the completed request.");
  }

  return (
    <form
      ref={formRef}
      className="bg-slate-900 border border-sky-200/60 rounded-3xl p-6 md:p-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Your name *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">
            Company / organization
          </span>
          <input
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">Phone number *</span>
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">Email address *</span>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">
            Service required *
          </span>
          <select
            name="service"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          >
            <option value="" disabled>
              Select a service
            </option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">
            Preferred contact method *
          </span>
          <select
            name="contactPreference"
            required
            defaultValue="WhatsApp"
            className="mt-2 w-full rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
          >
            <option>WhatsApp</option>
            <option>Phone call</option>
            <option>Email</option>
          </select>
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-sm font-medium text-slate-200">
          Tell us about the project *
        </span>
        <textarea
          name="details"
          required
          rows={6}
          placeholder="Describe the scope, location, quantities, timelines, or any technical requirements."
          className="mt-2 w-full resize-y rounded-xl border border-sky-200/60 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-400"
        />
      </label>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        You will review the completed request in WhatsApp or your email application
        before sending it. Attach drawings, photos, or specifications there when
        relevant.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => deliver("whatsapp")}
          className="rounded-xl bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
        >
          Continue in WhatsApp
        </button>

        <button
          type="button"
          onClick={() => deliver("email")}
          className="rounded-xl border border-sky-200/60 px-6 py-4 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300"
        >
          Prepare Email Request
        </button>
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-yellow-300">
        {status}
      </p>
    </form>
  );
}
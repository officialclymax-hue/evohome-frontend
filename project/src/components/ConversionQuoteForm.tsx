import React, { useState } from "react";
import { sendLead } from "../lib/api";

export default function ConversionQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    setStatus("sending");
    try {
      await sendLead({
        name: String(f.get("name") || ""),
        email: String(f.get("email") || ""),
        phone: String(f.get("phone") || ""),
        message: String(f.get("message") || ""),
      });
      setStatus("ok");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} id="quote-form" className="space-y-4">
      {/* Keep your existing inputs' names exactly: name, email, phone, message */}
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" placeholder="Your name" required className="border rounded px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="border rounded px-3 py-2" />
        <input name="phone" placeholder="Phone" className="border rounded px-3 py-2 sm:col-span-2" />
        <textarea name="message" placeholder="Tell us about your project" rows={4} className="border rounded px-3 py-2 sm:col-span-2" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Free Quote"}
      </button>

      {status === "ok" && <p className="text-green-600">Thanks! We’ll be in touch shortly.</p>}
      {status === "err" && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

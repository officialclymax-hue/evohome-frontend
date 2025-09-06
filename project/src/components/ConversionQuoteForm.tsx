import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "https://evohome-backend-docker.onrender.com";

export default function ConversionQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrMsg("");
    const f = new FormData(e.currentTarget);

    const payload = {
      name: String(f.get("name") || ""),
      email: String(f.get("email") || ""),
      phone: String(f.get("phone") || ""),
      message: String(f.get("message") || ""),
    };

    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // show WHY (422 validation, 401 CORS, 500 etc.)
        const text = await res.text().catch(() => "");
        setErrMsg(`Error ${res.status}: ${text || "Request failed"}`);
        setStatus("err");
        return;
        }

      // ok
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err: any) {
      setErrMsg(err?.message || "Network error");
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} id="quote-form" className="space-y-4">
      {/* Keep these names exactly: name, email, phone, message */}
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
      {status === "err" && <p className="text-red-600">Something went wrong. {errMsg}</p>}
    </form>
  );
}

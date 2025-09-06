// src/components/ConversionQuoteForm.tsx
import React, { useState } from "react";
import { submitLead } from "../lib/api";

export default function ConversionQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitLead(form);
      setStatus("Thanks! Your request has been sent.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Request a Free Quote
      </h2>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {status && (
        <p className="text-center text-sm mt-2">
          {status}
        </p>
      )}
    </form>
  );
}

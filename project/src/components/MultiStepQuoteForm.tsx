import React, { useState } from "react";
import { sendLead } from "../lib/api";

/**
 * Drop-in multi-step → sends a single POST /lead with all answers in message.
 * Keep field names & layout simple so it fits your current design.
 */
export default function MultiStepQuoteForm() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string>("");

  // collected data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [marketing, setMarketing] = useState(true);
  const [consent, setConsent] = useState(true);

  const canNext =
    (step === 1 && service && postcode) ||
    (step === 2 && name && email) ||
    (step === 3 && consent);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setErr("");

    const messageLines = [
      `Service: ${service}`,
      `Postcode: ${postcode}`,
      `Budget: ${budget || "-"}`,
      `Timeline: ${timeline || "-"}`,
      `Details: ${details || "-"}`,
      `Marketing opt-in: ${marketing ? "Yes" : "No"}`,
      `Consent given: ${consent ? "Yes" : "No"}`
    ];
    const message = messageLines.join("\n");

    try {
      await sendLead({ name, email, phone, message });
      setDone(true);
    } catch (e: any) {
      setErr(e?.message || "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="p-6 rounded-xl bg-teal-50 border border-teal-200">
        <h3 className="text-xl font-semibold text-teal-800">Thanks! We’ve received your request.</h3>
        <p className="text-teal-700 mt-2">
          A member of the team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" id="quote-form">
      {/* Step indicators (optional) */}
      <div className="flex gap-2 text-sm">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={`px-3 py-1 rounded-full border ${
              step === s ? "bg-teal-600 text-white border-teal-600" : "border-gray-300 text-gray-600"
            }`}
          >
            Step {s}
          </span>
        ))}
      </div>

      {/* Step 1: project */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="border rounded px-3 py-2"
            >
              <option value="">What do you need?</option>
              <option>Solar Power</option>
              <option>Air Source Heat Pump</option>
              <option>Windows & Doors</option>
              <option>Roofing</option>
              <option>Kitchens</option>
              <option>Bathrooms</option>
              <option>Driveways</option>
              <option>Insulation & Rendering</option>
              <option>Garden & Outdoor</option>
              <option>Property Maintenance</option>
            </select>

            <input
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="Postcode"
              required
              className="border rounded px-3 py-2"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="">Budget (optional)</option>
              <option>£1k–£5k</option>
              <option>£5k–£15k</option>
              <option>£15k–£30k</option>
              <option>£30k+</option>
            </select>

            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="">Timeline (optional)</option>
              <option>ASAP</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6+ months</option>
            </select>
          </div>

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            placeholder="Anything else we should know? (optional)"
            className="border rounded px-3 py-2 w-full"
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="px-5 py-3 rounded-lg border"
              onClick={() => setStep(1)}
              disabled
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => canNext && setStep(2)}
              className={`px-5 py-3 rounded-lg text-white ${canNext ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-300"}`}
              disabled={!canNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: contact */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="border rounded px-3 py-2"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="border rounded px-3 py-2"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="border rounded px-3 py-2 sm:col-span-2"
            />
          </div>

          <div className="flex justify-between">
            <button type="button" className="px-5 py-3 rounded-lg border" onClick={() => setStep(1)}>
              Back
            </button>
            <button
              type="button"
              onClick={() => canNext && setStep(3)}
              className={`px-5 py-3 rounded-lg text-white ${canNext ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-300"}`}
              disabled={!canNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: privacy + submit */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              EvoHome Improvements Ltd is committed to protecting your privacy. We may use your information to provide the services
              you requested and to contact you about relevant products and services.
            </p>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
              I agree to receive marketing communications from EvoHome Improvements Ltd. (optional)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
              I agree to allow EvoHome Improvements Ltd to store and process my personal data for this enquiry. *
            </label>
          </div>

          {err && <p className="text-red-600">{err}</p>}

          <div className="flex justify-between">
            <button type="button" className="px-5 py-3 rounded-lg border" onClick={() => setStep(2)}>
              Back
            </button>
            <button
              type="submit"
              disabled={sending || !canNext}
              className={`px-5 py-3 rounded-lg text-white ${
                sending ? "bg-teal-400" : "bg-teal-600 hover:bg-teal-700"
              } disabled:opacity-60`}
            >
              {sending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

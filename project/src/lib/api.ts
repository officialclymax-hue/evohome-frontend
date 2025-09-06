export const API_BASE =
  import.meta.env.VITE_API_BASE || "https://evohome-backend-docker.onrender.com";

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

export async function sendLead(payload: LeadPayload) {
  const res = await fetch(`${API_BASE}/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${text}`);
  }
  return res.json().catch(() => ({}));
}

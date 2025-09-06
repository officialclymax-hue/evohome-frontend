// src/lib/api.ts
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

// Fetch homepage or other content
export async function getContent(key: string) {
  const res = await fetch(`${API_BASE}/content/${key}`);
  if (!res.ok) throw new Error(`Failed to fetch content: ${res.status}`);
  return res.json();
}

// Fetch services.json (detailed + catalogue)
export async function getServices() {
  const res = await fetch(`${API_BASE}/content/services`);
  if (!res.ok) throw new Error(`Failed to fetch services: ${res.status}`);
  return res.json();
}

// Fetch blogs.json
export async function getBlogs() {
  const res = await fetch(`${API_BASE}/content/blogs`);
  if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
  return res.json();
}

// Fetch gallery.json
export async function getGallery() {
  const res = await fetch(`${API_BASE}/content/gallery`);
  if (!res.ok) throw new Error(`Failed to fetch gallery: ${res.status}`);
  return res.json();
}

// Send lead form data to backend
export async function sendLead(payload: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}) {
  const res = await fetch(`${API_BASE}/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to send lead: ${res.status}`);
  return res.json();
}

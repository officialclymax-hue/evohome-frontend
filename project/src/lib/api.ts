// src/lib/api.ts

const API_BASE = import.meta.env.VITE_API_BASE || "https://evohome-backend-docker.onrender.com";

// ---- Lead form submission ----
export async function sendLead(data: any) {
  const res = await fetch(`${API_BASE}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to send lead: ${res.status}`);
  }
  return res.json();
}

// ---- Services ----
export async function getServices() {
  const res = await fetch(`${API_BASE}/content/services`);
  if (!res.ok) {
    throw new Error(`Failed to fetch services: ${res.status}`);
  }
  return res.json();
}

// ---- Blogs ----
export async function getBlogs() {
  const res = await fetch(`${API_BASE}/content/blogs`);
  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }
  return res.json();
}

// ---- Gallery ----
export async function getGallery() {
  const res = await fetch(`${API_BASE}/content/gallery`);
  if (!res.ok) {
    throw new Error(`Failed to fetch gallery: ${res.status}`);
  }
  return res.json();
}

const API_BASE = import.meta.env.VITE_API_BASE || "https://evohome-backend-docker.onrender.com";

async function j(path: string, init?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

export const getContent = (key: string) => j(`/content/${key}`);
export const getServices = () => j(`/services`);
export const getBlogs = () => j(`/blogs`);
export const getGallery = () => j(`/gallery`);

export function sendLead(payload: { name: string; email: string; phone?: string; message?: string }) {
  return j(`/lead`, { method: "POST", body: JSON.stringify(payload) });
}

// src/lib/api.ts
// Central API helpers to talk to your FastAPI backend

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://evohome-backend-docker.onrender.com";

// Simple helper to GET or POST
async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText} — ${text}`);
  }
  return res.json() as Promise<T>;
}

// -------- CONTENT (single pages like homepage, footer etc.) --------
export const getContent = (key: string) =>
  http(`/content/${encodeURIComponent(key)}`);

export const getHomepage = () => getContent("homepage");
export const getAbout = () => getContent("about");
export const getFooter = () => getContent("footer");
export const getHeader = () => getContent("header");
export const getSEO = () => getContent("seo");
export const getCoverage = () => getContent("coverage");
export const getContact = () => getContent("contact");
export const getForms = () => getContent("forms");
export const getRequestQuote = () => getContent("request-quote");
export const getChatbot = () => getContent("chatbot");
export const getFloatingButtons = () => getContent("floating-buttons");

// -------- COLLECTIONS (lists) --------
export const getServices = () => getContent("services");
export const getBlogs = () => getContent("blogs");
export const getGallery = () => getContent("gallery");

// -------- LEADS (form submission) --------
export async function submitLead(data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
}) {
  return http(`/lead`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

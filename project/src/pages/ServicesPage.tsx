// src/pages/ServicesPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../lib/api";

// Types that match our backend /content/services payload
type CatalogueItem = {
  slug: string;
  name: string;
  category?: string;
  images?: string[];
};

type Landing = {
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
  };
  hero?: {
    title?: string;
    subtitle?: string;
    supporting?: string;
    images?: string[];
  };
  whatToExpect?: string[];
};

type ServicesPayload =
  | {
      landing?: Landing;
      categories?: string[];
      catalogue?: CatalogueItem[];
      detailed?: any[];
    }
  | CatalogueItem[];

// Simple image helper (uses first image if present, otherwise a placeholder)
const imgOf = (images?: string[]) =>
  images && images.length > 0
    ? images[0]
    : "https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&h=400&w=600";

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState<ServicesPayload | null>(null);
  const [error, setError] = useState<string>("");

  // UI state
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await getServices();
        if (!mounted) return;
        setPayload(data);
        setError("");
      } catch (e: any) {
        setError(e?.message || "Failed to load services");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Normalize into a common shape
  const landing: Landing | undefined = useMemo(() => {
    if (!payload || Array.isArray(payload)) return undefined;
    return payload.landing;
  }, [payload]);

  const allCategories: string[] = useMemo(() => {
    if (!payload) return [];
    if (Array.isArray(payload)) {
      // derive categories from array items
      const set = new Set<string>();
      payload.forEach((p) => p.category && set.add(p.category));
      return ["All", ...Array.from(set)];
    } else {
      const fromJson = payload.categories || [];
      return ["All", ...fromJson];
    }
  }, [payload]);

  const allItems: CatalogueItem[] = useMemo(() => {
    if (!payload) return [];
    if (Array.isArray(payload)) return payload;
    return payload.catalogue || [];
  }, [payload]);

  const filtered: CatalogueItem[] = useMemo(() => {
    let items = allItems;
    if (activeCategory !== "All") {
      items = items.filter((i) => (i.category || "").toLowerCase() === activeCategory.toLowerCase());
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.category || "").toLowerCase().includes(q) ||
          i.slug.toLowerCase().includes(q)
      );
    }
    return items;
  }, [allItems, activeCategory, query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Page header / hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {landing?.hero?.title || "Home Improvement Services"}
          </h1>
          {landing?.hero?.subtitle && (
            <p className="mt-3 text-lg text-slate-700">{landing.hero.subtitle}</p>
          )}
          {landing?.hero?.supporting && (
            <p className="mt-2 text-slate-600">{landing.hero.supporting}</p>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="w-full md:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services…"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* What to expect (optional) */}
        {landing?.whatToExpect && landing.whatToExpect.length > 0 && (
          <div className="mb-8 rounded-xl bg-white border border-slate-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              What to expect with EvoHome
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-5 text-slate-700">
              {landing.whatToExpect.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Loading / Error */}
        {loading && (
          <div className="text-slate-600">Loading services…</div>
        )}
        {!loading && error && (
          <div className="text-red-600">Error: {error}</div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <div className="text-slate-600">No services match your filters.</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((svc) => (
                  <div
                    key={svc.slug}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={imgOf(svc.images)}
                        alt={svc.name}
                        className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs uppercase tracking-wide text-slate-500">
                        {svc.category || "Service"}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {svc.name}
                      </h3>
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          to={`/services/${encodeURIComponent(svc.slug)}`}
                          className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 font-medium"
                        >
                          View details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <a
                          href="/request-quote"
                          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-teal-600 text-white text-sm hover:bg-teal-700"
                        >
                          Get a quote
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

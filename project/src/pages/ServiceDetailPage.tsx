// src/pages/ServiceDetailPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getServices } from "../lib/api";

type CatalogueItem = {
  slug: string;
  name: string;
  category?: string;
  images?: string[];
};

type DetailedItem = {
  slug: string;
  name?: string;
  shortDescription?: string;
  longDescription?: string;
  averageSavings?: string;
  grant?: string;
  images?: string[];
  howItWorksSteps?: string[];
  faqs?: { q: string; a: string }[];
  seo?: {
    title?: string;
    description?: string;
    canonicalBase?: string;
  };
};

type ServicesJSON = {
  landing?: any;
  categories?: string[];
  catalogue?: CatalogueItem[];
  detailed?: DetailedItem[];
};

// fallback image
const fallbackImg =
  "https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&h=400&w=600";

export default function ServiceDetailPage() {
  const { slug = "" } = useParams();
  const [data, setData] = useState<ServicesJSON | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const json = (await getServices()) as ServicesJSON;
        if (!mounted) return;
        setData(json);
        setErr("");
      } catch (e: any) {
        setErr(e?.message || "Failed to load service");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [slug]);

  const detail: DetailedItem | null = useMemo(() => {
    if (!data) return null;
    const d = (data.detailed || []).find((x) => x.slug === slug);
    if (d) return d;

    // If not present in detailed, try to hydrate from catalogue item
    const c = (data.catalogue || []).find((x) => x.slug === slug);
    if (!c) return null;
    return {
      slug: c.slug,
      name: c.name,
      images: c.images || [],
    };
  }, [data, slug]);

  if (loading) {
    return <div className="p-10 text-center">Loading…</div>;
  }
  if (err) {
    return (
      <div className="p-10 text-center text-red-600">
        Error: {err}
      </div>
    );
  }
  if (!detail) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-4">Service not found</h1>
        <Link to="/services" className="text-teal-700 hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const imgs = detail.images && detail.images.length ? detail.images : [fallbackImg];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/services" className="text-teal-700 hover:underline">
          ← Back to Services
        </Link>

        <header className="mt-3 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {detail.name || slug.replace(/-/g, " ")}
          </h1>
          {detail.shortDescription && (
            <p className="mt-2 text-lg text-slate-700">{detail.shortDescription}</p>
          )}
        </header>

        {/* Images strip */}
        <div className="flex gap-4 overflow-x-auto pb-2 mb-8">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${detail.name || slug}-${i}`}
              className="h-48 w-auto rounded-xl object-cover border"
              loading="lazy"
            />
          ))}
        </div>

        {/* Content */}
        <section className="grid lg:grid-cols-3 gap-8">
          {/* Main copy */}
          <article className="lg:col-span-2 space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-slate-700 whitespace-pre-line">
                {detail.longDescription ||
                  detail.shortDescription ||
                  "Get a tailored quote and expert workmanship through EvoHome Improvements."}
              </p>
            </div>

            {detail.howItWorksSteps && detail.howItWorksSteps.length > 0 && (
              <div className="bg-white border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-3">How it works</h2>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  {detail.howItWorksSteps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            )}

            {detail.faqs && detail.faqs.length > 0 && (
              <div className="bg-white border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-3">FAQs</h2>
                <div className="space-y-4">
                  {detail.faqs.map((f, i) => (
                    <div key={i}>
                      <p className="font-medium text-slate-900">{f.q}</p>
                      <p className="text-slate-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Side info */}
          <aside className="space-y-6">
            {(detail.averageSavings || detail.grant) && (
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">At a glance</h3>
                <ul className="space-y-1 text-slate-700">
                  {detail.averageSavings && <li>Average Savings: {detail.averageSavings}</li>}
                  {detail.grant && <li>Grant: {detail.grant}</li>}
                </ul>
              </div>
            )}

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Get a free quote</h3>
              <p className="text-slate-700 mb-3">
                Tell us about your project and we’ll match you with trusted specialists.
              </p>
              <a
                href="/request-quote"
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
              >
                Request a Quote
              </a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

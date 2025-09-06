import React, { useEffect, useState } from "react";
import { getServices } from "../lib/api";

type Service = {
  slug: string;
  name: string;
  category?: string;
  data?: { images?: string[]; shortDescription?: string };
};

export default function ServicesPage() {
  const [items, setItems] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((arr) => setItems(arr))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container mx-auto p-6">Loading services…</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => {
          const img = s.data?.images?.[0] || "https://via.placeholder.com/640x400?text=Service";
          return (
            <a key={s.slug} href={`/services/${s.slug}`} className="block group rounded-xl overflow-hidden border hover:shadow-lg">
              <img src={img} alt={s.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="text-sm text-gray-500">{s.category}</div>
                <div className="text-lg font-semibold group-hover:text-teal-600">{s.name}</div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.data?.shortDescription || ""}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

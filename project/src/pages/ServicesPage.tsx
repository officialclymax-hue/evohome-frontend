// src/pages/ServicesPage.tsx
import React, { useEffect, useState } from "react";
import { getServices } from "../lib/api";

type Service = {
  slug: string;
  name: string;
  category: string;
  images: string[];
};

type ServicesData = {
  categories: string[];
  catalogue: Service[];
};

export default function ServicesPage() {
  const [data, setData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getServices()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading services…</div>;
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        Failed to load services: {error}
      </div>
    );
  }

  if (!data) {
    return <div className="p-10 text-center">No services found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      {data.categories.map((cat) => {
        const servicesInCat = data.catalogue.filter(
          (s) => s.category === cat
        );
        if (servicesInCat.length === 0) return null;

        return (
          <div key={cat} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
              {cat}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {servicesInCat.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  {service.images && service.images.length > 0 ? (
                    <img
                      src={service.images[0]}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{service.name}</h3>
                    <a
                      href={`/services/${service.slug}`}
                      className="text-blue-600 hover:underline mt-2 inline-block"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

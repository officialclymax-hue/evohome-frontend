import React, { useEffect, useState } from "react";
import { getGallery } from "../lib/api";

type GalleryItem = { title?: string; category?: string; data?: { src?: string; images?: string[] } };

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGallery().then(setItems).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container mx-auto p-6">Loading gallery…</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Project Gallery</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g, i) => {
          const src = g.data?.src || g.data?.images?.[0] || "https://via.placeholder.com/640x400?text=Gallery";
          return (
            <figure key={i} className="rounded-xl overflow-hidden border">
              <img src={src} alt={g.title || "Gallery"} className="w-full h-56 object-cover" />
              <figcaption className="p-3">
                <div className="font-semibold">{g.title || "Untitled"}</div>
                <div className="text-sm text-gray-500">{g.category || ""}</div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

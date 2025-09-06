import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../lib/api";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [svc, setSvc] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((arr) => setSvc(arr.find((x: any) => x.slug === slug)))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="container mx-auto p-6">Loading…</div>;
  if (!svc) return <div className="container mx-auto p-6">Not found.</div>;

  const images: string[] = svc.data?.images || [];
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{svc.name}</h1>
      {!!images.length && (
        <div className="flex gap-4 overflow-x-auto mb-6">
          {images.map((src: string, i: number) => (
            <img key={i} src={src} alt={`${svc.name}-${i}`} className="h-48 rounded-lg object-cover" />
          ))}
        </div>
      )}
      <p className="text-gray-700">{svc.data?.longDescription || svc.data?.shortDescription || ""}</p>
    </div>
  );
}

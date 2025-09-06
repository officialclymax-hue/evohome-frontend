import React, { useEffect, useState } from "react";
import { getBlogs } from "../lib/api";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs().then(setPosts).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container mx-auto p-6">Loading posts…</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const img = p.data?.images?.[0] || "https://via.placeholder.com/640x400?text=Blog";
          return (
            <a key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl overflow-hidden border hover:shadow-lg">
              <img src={img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="text-gray-600 line-clamp-2">{p.data?.excerpt || ""}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

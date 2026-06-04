import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ClaveHogar | Consejos para propietarios en Torrevieja",
  description:
    "Artículos sobre gestión de Airbnb, mantenimiento del hogar, alquiler vacacional y vida en Torrevieja.",
  openGraph: {
    title: "Blog — ClaveHogar",
    description:
      "Consejos prácticos para propietarios en Torrevieja: Airbnb, limpieza, mantenimiento y más.",
    url: "https://clavehogar.es/blog",
  },
};

const CAT_COLORS: Record<string, string> = {
  "Gestión Vacacional": "bg-amber-100 text-amber-700",
  "Mantenimiento": "bg-blue-100 text-blue-700",
  "Limpieza": "bg-green-100 text-green-700",
  "Airbnb": "bg-rose-100 text-rose-700",
  "Consejos": "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-400 to-amber-500 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            ✨ Recursos gratuitos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog de ClaveHogar
          </h1>
          <p className="text-amber-50 text-lg max-w-2xl mx-auto">
            Consejos prácticos para propietarios en Torrevieja: gestión de
            Airbnb, mantenimiento, limpieza y mucho más.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-slate-600 mb-2">
              Próximamente…
            </h2>
            <p>Nuevos artículos cada semana.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card image / emoji */}
                <div className="h-44 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-6xl">
                  {post.emoji}
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3 ${
                      CAT_COLORS[post.category] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {post.category}
                  </span>
                  <h2 className="font-bold text-slate-800 text-lg leading-snug mb-2 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          ¿Necesitas ayuda con tu propiedad?
        </h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Gestión de Airbnb, limpieza, mantenimiento — nos encargamos de todo.
        </p>
        <a
          href="https://wa.me/34693976311"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold px-7 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          💬 Hablar por WhatsApp
        </a>
      </div>
    </main>
  );
}

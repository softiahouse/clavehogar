import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — ClaveHogar`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://clavehogar.es/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-400 to-amber-500 pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">{post.emoji}</div>
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-amber-100 text-sm">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} min de lectura</span>
            <span>✍️ ClaveHogar</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 text-sm mb-8 transition-colors"
        >
          ← Volver al blog
        </Link>

        <article
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-800
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-7 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-800
            prose-li:text-slate-600
            prose-blockquote:border-l-4 prose-blockquote:border-amber-400
            prose-blockquote:bg-amber-50 prose-blockquote:rounded-r-xl
            prose-blockquote:px-6 prose-blockquote:py-4
            prose-blockquote:not-italic prose-blockquote:text-slate-700
            prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* CTA box */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Listo para despreocuparte de tu propiedad?
          </h3>
          <p className="text-slate-400 text-sm mb-5">
            Limpieza, gestión de Airbnb, mantenimiento — lo hacemos todo.
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

        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 text-sm transition-colors"
        >
          ← Ver todos los artículos
        </Link>
      </div>
    </main>
  );
}

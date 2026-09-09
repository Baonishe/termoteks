import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/catalog";

export const Route = createFileRoute("/blog/")({ component: BlogIndex });

function BlogIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Журнал</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Блог</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group overflow-hidden rounded-xl border border-line bg-surface"
          >
            <img src={post.image} alt="" className="aspect-[16/10] w-full object-cover" />
            <div className="p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-stone">{post.kicker}</p>
              <h2 className="mt-2 font-display text-xl leading-snug tracking-tight group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone">{post.excerpt}</p>
              <p className="mt-4 text-xs text-mist">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

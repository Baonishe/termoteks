import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/catalog";

export const Route = createFileRoute("/blog/$slug")({ component: PostPage });

function PostPage() {
  const { slug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Запись не найдена</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm underline">
          К блогу
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm text-stone">
        <Link to="/blog" className="hover:text-ink">
          Блог
        </Link>
        <span className="mx-2">/</span>
        {post.kicker}
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight">{post.title}</h1>
      <p className="mt-3 text-sm text-mist">{post.date}</p>
      <img src={post.image} alt="" className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />
      <div className="mt-8 space-y-4 text-base leading-relaxed text-stone">
        {post.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </article>
  );
}

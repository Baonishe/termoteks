import { createFileRoute, Link } from "@tanstack/react-router";
import { CatalogGrid } from "@/components/site/catalog-grid";
import { getCategory, type CategoryId } from "@/lib/catalog";

export const Route = createFileRoute("/catalog/$category")({
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const data = getCategory(category);
  if (!data) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Категория не найдена</h1>
        <Link to="/catalog" className="mt-4 inline-block text-sm underline">
          К ассортименту
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-paper">
        <img src={data.image} alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/65">{data.kicker}</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">{data.title}</h1>
          <p className="mt-4 max-w-xl text-base text-paper/80">{data.blurb}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <CatalogGrid category={data.id as CategoryId} />
      </div>
    </div>
  );
}

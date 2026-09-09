import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, relatedProducts, rollLabel, widthLabel } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";
import { AddToRequest } from "@/components/site/add-to-request";
import { ProductCard } from "@/components/site/product-card";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl">Материал не найден</h1>
        <Link to="/catalog" className="mt-4 inline-block text-sm underline">
          К ассортименту
        </Link>
      </div>
    );
  }

  const gallery = product.images;
  const related = relatedProducts(product);
  const img = gallery[Math.min(active, gallery.length - 1)] ?? product.image;

  const specs = [
    ["Артикул", product.sku],
    ["Основа", product.base],
    ["Плотность основы", `${product.density} г/м²`],
    product.glueGsm ? ["Клеевой привес", `${product.glueGsm} г/м²`] : null,
    ["Ширина", widthLabel(product)],
    ["Рулон", rollLabel(product)],
    product.thicknessMm ? ["Толщина", `${product.thicknessMm} мм`] : null,
    product.twoSided != null
      ? ["Нанесение", product.twoSided ? "Двухстороннее" : "Одностороннее"]
      : null,
    [
      "Наличие",
      product.onOrder ? "Под заказ" : "Со склада",
    ],
  ].filter(Boolean) as [string, string][];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <p className="text-sm text-stone">
        <Link to="/catalog" className="hover:text-ink">
          Ассортимент
        </Link>
        <span className="mx-2">/</span>
        <Link
          to="/catalog/$category"
          params={{ category: product.category }}
          className="hover:text-ink"
        >
          {product.base}
        </Link>
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-xl border border-line bg-paper-2">
            <img src={img} alt={product.name} className="aspect-[4/3] w-full object-cover" />
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-md border ${
                    i === active ? "border-ink" : "border-line"
                  }`}
                >
                  <img src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone">{product.sku}</p>
          <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-4 font-display text-3xl tabular-nums">
            {product.price != null
              ? formatPrice(product.price, product.priceUnit)
              : "Цена по запросу"}
          </p>
          {product.onOrder && (
            <p className="mt-2 text-sm text-stone">Позиция изготавливается под заказ.</p>
          )}

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {specs.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                <dt className="text-stone">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <AddToRequest product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">В той же линейке</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

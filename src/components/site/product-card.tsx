import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";
import { rollLabel } from "@/lib/catalog";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-ink/25",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
        />
        {product.onOrder && (
          <span className="absolute left-3 top-3 rounded-sm bg-paper/90 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-ink">
            Под заказ
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-stone">{product.sku}</p>
        <h3 className="font-sans text-base font-medium leading-snug text-ink">{product.name}</h3>
        <p className="text-sm text-stone">
          {product.density} г/м²
          {product.widthCm ? ` · ${product.widthCm} см` : ""}
          {` · ${rollLabel(product)}`}
        </p>
        <p className="mt-auto pt-2 text-sm font-medium tabular-nums">
          {product.price != null ? formatPrice(product.price, product.priceUnit) : "Цена по запросу"}
        </p>
      </div>
    </Link>
  );
}

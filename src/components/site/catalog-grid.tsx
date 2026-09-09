import { useMemo, useState } from "react";
import type { CategoryId } from "@/lib/catalog";
import { CATEGORIES, getProducts } from "@/lib/catalog";
import { ProductCard } from "./product-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

function filterClass(active: boolean) {
  return cn(
    "inline-flex h-10 items-center rounded-md border px-3 text-xs uppercase tracking-[0.12em] transition-colors",
    active
      ? "border-ink bg-ink text-paper"
      : "border-line bg-surface text-stone hover:border-ink/30 hover:text-ink",
  );
}

export function CatalogGrid({ category }: { category?: CategoryId }) {
  const [q, setQ] = useState("");
  const [availability, setAvailability] = useState<"all" | "stock" | "order">("all");
  const products = useMemo(
    () => getProducts({ category, q, availability }),
    [category, q, availability],
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <Link to="/catalog" className={filterClass(!category)}>
            Все
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to="/catalog/$category"
              params={{ category: c.id }}
              className={filterClass(category === c.id)}
            >
              {c.short}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-56 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mist" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Артикул или название"
              className="pl-10"
              aria-label="Поиск по каталогу"
            />
          </div>
          <div className="flex rounded-md border border-line bg-surface p-1">
            {(
              [
                ["all", "Все"],
                ["stock", "В наличии"],
                ["order", "Под заказ"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setAvailability(id)}
                className={cn(
                  "h-9 rounded-sm px-3 text-xs uppercase tracking-[0.12em] transition-colors",
                  availability === id ? "bg-ink text-paper" : "text-stone hover:text-ink",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <p className="rounded-xl border border-line bg-surface px-5 py-12 text-center text-stone">
          Ничего не нашли. Попробуйте другой запрос или напишите нам — подберём аналог.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

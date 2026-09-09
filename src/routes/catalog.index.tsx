import { createFileRoute } from "@tanstack/react-router";
import { CatalogGrid } from "@/components/site/catalog-grid";

export const Route = createFileRoute("/catalog/")({ component: CatalogIndex });

function CatalogIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Каталог</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Ассортимент</h1>
      <p className="mt-3 max-w-2xl text-base text-stone">
        Цены указаны за квадратный или погонный метр. Минимальная партия — один рулон.
        Скидки постоянным клиентам.
      </p>
      <div className="mt-10">
        <CatalogGrid />
      </div>
    </div>
  );
}

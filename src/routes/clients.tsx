import { createFileRoute, Link } from "@tanstack/react-router";
import { CLIENTS } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/clients")({ component: ClientsPage });

function ClientsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Сотрудничество</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Для клиентов</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
        С 1993 года материалы TERMOTEKS идут на российские обувные и швейные производства.
        Постоянным клиентам — скидки. Если хотите прислать фото изделий на витрину, напишите
        нам.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {CLIENTS.map((c) => (
          <li key={c.name} className="rounded-xl border border-line bg-surface px-5 py-8">
            <p className="font-display text-2xl tracking-tight">{c.name}</p>
            <p className="mt-2 text-sm text-stone">{c.note}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 overflow-hidden rounded-xl border border-line">
        <img src="/images/rolls-mixed.jpg" alt="Готовые рулоны на складе" className="aspect-[21/9] w-full object-cover" />
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/request">Оставить заявку</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/catalog">К ассортименту</Link>
        </Button>
      </div>
    </div>
  );
}

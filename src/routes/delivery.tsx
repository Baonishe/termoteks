import { createFileRoute } from "@tanstack/react-router";
import { CARRIERS, COMPANY } from "@/lib/catalog";

export const Route = createFileRoute("/delivery")({ component: DeliveryPage });

function DeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Логистика</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Доставка и оплата</h1>
      <p className="mt-6 text-base leading-relaxed text-stone">
        Компания ТЕРМОТЕКС сотрудничает с крупнейшими транспортными компаниями России. Мы
        оперативно отправим заказ в любой регион. Оплату до филиала ТК берём на себя — вы
        оплачиваете только доставку от филиала транспортной компании в Москве до вашего города.
      </p>

      <h2 className="mt-12 font-display text-2xl">Транспортные компании</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {CARRIERS.map((c) => (
          <li key={c} className="rounded-lg border border-line bg-surface px-4 py-4 text-sm">
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-stone">
        Стоимость плеча из Москвы можно узнать на сайте выбранной ТК или у нас:{" "}
        {COMPANY.phones[0].tel} ({COMPANY.phones[0].name}), {COMPANY.phones[1].tel} (
        {COMPANY.phones[1].name}), {COMPANY.email}.
      </p>

      <h2 className="mt-12 font-display text-2xl">Самовывоз</h2>
      <p className="mt-3 text-base leading-relaxed text-stone">
        {COMPANY.address}. Понедельник–пятница. Часы работы склада: {COMPANY.warehouseHours}.
      </p>

      <h2 className="mt-12 font-display text-2xl">Оплата</h2>
      <p className="mt-3 text-base leading-relaxed text-stone">
        Безналичный расчёт. Постоянным клиентам — скидки.
      </p>
    </div>
  );
}

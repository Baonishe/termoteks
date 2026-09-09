import { createFileRoute, Link } from "@tanstack/react-router";
import { CLIENTS, COMPANY } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-paper">
        <img src="/images/machine.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/65">С {COMPANY.founded} года</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            Производство термоклеевых прокладочных материалов
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl text-base leading-relaxed text-stone">
          <p>
            {COMPANY.legal} — один из крупнейших производителей термоклеевых прокладочных
            материалов в центральном районе России. Основатели компании одни из первых запустили
            собственное производство в России в {COMPANY.founded} году.
          </p>
          <p className="mt-4">
            Наши материалы уже тогда составили конкуренцию импортным аналогам. Подтверждение
            этому — сотрудничество с крупнейшими российскими обувными фабриками: Юничел,
            Вестфалика, Калужская обувная и другими. Мы не стоим на месте: внедряем новое и
            совершенствуем привычное.
          </p>
        </div>
        <figure>
          <img
            src="/images/factory.jpg"
            alt="Работа на линии нанесения клея"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </figure>
      </section>

      <section className="bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Производство и услуги</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight">
            Четыре типа основ и работа с давальческим сырьём
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone">
            Мы производим термоклеевые материалы на тканых, трикотажных, нетканых основах, а
            также на основе поролона. В производстве используются низкотемпературные клеи на
            основе сополимера этиленвинилацетата и только качественные материалы основ.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone">
            Оборудование позволяет нанести термоклеевой слой практически на любой материал по
            вашему желанию, а также дублировать и триплировать различные материалы друг с другом.
          </p>
          <Button asChild className="mt-8">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Узнать о дополнительных услугах
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {["/images/workshop.jpg", "/images/warehouse-2.jpg", "/images/about-2.jpg"].map((src) => (
            <img key={src} src={src} alt="" className="aspect-[4/3] w-full rounded-lg object-cover" />
          ))}
        </div>
        <div className="mt-12 max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Ценности</p>
          <p className="mt-3 font-display text-2xl tracking-tight">
            Это семейное дело, где соблюдаются традиции работы и передаются в поколениях.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {CLIENTS.map((c) => (
            <li key={c.name} className="rounded-xl border border-line bg-surface px-5 py-6">
              <p className="font-medium">{c.name}</p>
              <p className="mt-1 text-sm text-stone">{c.note}</p>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/contact">Связаться с производством</Link>
        </Button>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-paper">
        <img src="/images/workshop.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/65">Связь</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">Контакты</h1>
          <p className="mt-4 max-w-xl text-paper/80">
            Мы будем рады ответить на любой вопрос. Пишите, звоните или соберите заявку на сайте.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-3">
        <section className="rounded-xl border border-line bg-surface p-6">
          <h2 className="text-[11px] uppercase tracking-[0.16em] text-stone">По вопросам</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {COMPANY.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel.replace(/\s/g, "")}`} className="font-medium hover:underline">
                  {p.tel}
                </a>
                <p className="text-stone">
                  {p.name}
                  {p.role !== "общий" ? ` · ${p.role}` : ""}
                </p>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY.email}`} className="font-medium hover:underline">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </section>
        <section className="rounded-xl border border-line bg-surface p-6">
          <h2 className="text-[11px] uppercase tracking-[0.16em] text-stone">Адрес</h2>
          <p className="mt-4 text-sm leading-relaxed">{COMPANY.address}</p>
          <p className="mt-3 text-sm text-stone">
            Производство и склад в одном месте, {COMPANY.addressShort}.
          </p>
        </section>
        <section className="rounded-xl border border-line bg-surface p-6">
          <h2 className="text-[11px] uppercase tracking-[0.16em] text-stone">Часы работы</h2>
          <p className="mt-4 text-sm">Офис: {COMPANY.hours}</p>
          <p className="mt-2 text-sm text-stone">Склад: {COMPANY.warehouseHours}</p>
          <p className="mt-2 text-sm text-stone">Выходные: суббота, воскресенье</p>
        </section>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 pb-16">
        <Button asChild>
          <Link to="/request">Оставить заявку</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

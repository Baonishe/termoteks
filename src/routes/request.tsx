import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { lineProduct, useInquiry } from "@/lib/inquiries";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";

export const Route = createFileRoute("/request")({ component: RequestPage });

function RequestPage() {
  const { lines, sent, setRolls, remove, submit } = useInquiry();
  const [doneId, setDoneId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (lines.length === 0) {
      setError("Добавьте хотя бы одну позицию из каталога.");
      return;
    }
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setError("Укажите имя и телефон.");
      return;
    }
    const inquiry = submit({
      company: String(data.get("company") ?? "").trim(),
      name,
      phone,
      email: String(data.get("email") ?? "").trim(),
      city: String(data.get("city") ?? "").trim(),
      comment: String(data.get("comment") ?? "").trim(),
    });
    setDoneId(inquiry.id);
    toast.success("Заявка сохранена");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Заказ</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Заявка</h1>
      <p className="mt-3 max-w-2xl text-stone">
        Соберите позиции в каталоге, затем отправьте заявку. Менеджер подтвердит наличие, срок
        и стоимость доставки. Минимальная партия — 1 рулон.
      </p>

      {doneId && (
        <div className="mt-8 rounded-xl border border-line bg-surface px-5 py-6">
          <p className="font-medium">Заявка принята</p>
          <p className="mt-2 text-sm text-stone">
            Номер {doneId.slice(0, 8)}. Для отправки на производство позвоните или напишите —
            черновик сохранён в этом браузере.
          </p>
          <Button asChild className="mt-4" variant="outline">
            <Link to="/contact">Контакты</Link>
          </Button>
        </div>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <h2 className="font-display text-2xl">Позиции</h2>
          {lines.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-line px-5 py-10 text-sm text-stone">
              Пока пусто.{" "}
              <Link to="/catalog" className="text-ink underline">
                Открыть ассортимент
              </Link>
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {lines.map((line) => {
                const p = lineProduct(line);
                if (!p) return null;
                const color = p.colors?.find((c) => c.id === line.color);
                return (
                  <li key={`${p.id}-${line.color ?? ""}`} className="flex items-center gap-4 py-4">
                    <img src={color?.image ?? p.image} alt="" className="size-16 rounded-md object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-stone">
                        {p.sku}
                        {color ? ` · ${color.name}` : ""}
                        {p.price != null ? ` · ${formatPrice(p.price, p.priceUnit)}` : ""}
                      </p>
                    </div>
                    <Input
                      type="number"
                      min={1}
                      value={line.rolls}
                      aria-label="Рулоны"
                      className="w-20 tabular-nums"
                      onChange={(e) =>
                        setRolls(p.id, line.color, Math.max(1, Number(e.target.value) || 1))
                      }
                    />
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.12em] text-stone hover:text-ink"
                      onClick={() => remove(p.id, line.color)}
                    >
                      Убрать
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <form onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-6">
          <h2 className="font-display text-2xl">Контакт</h2>
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="company">Компания</Label>
              <Input id="company" name="company" />
            </div>
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+7" />
            </div>
            <div>
              <Label htmlFor="email">Эл. почта</Label>
              <Input id="email" name="email" type="email" />
            </div>
            <div>
              <Label htmlFor="city">Город доставки</Label>
              <Input id="city" name="city" />
            </div>
            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea id="comment" name="comment" />
            </div>
          </div>
          {error && <p className="mt-3 text-sm text-ink">{error}</p>}
          <Button type="submit" className="mt-6 w-full">
            Отправить заявку
          </Button>
        </form>
      </div>

      {sent.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl">Отправленные заявки</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            {sent.map((s) => (
              <li key={s.id} className="rounded-lg border border-line bg-surface px-4 py-3">
                {new Date(s.createdAt).toLocaleString("ru-RU")} · {s.name} · {s.lines.length} поз.
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

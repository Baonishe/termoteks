import { Link } from "@tanstack/react-router";
import { CATEGORIES, COMPANY } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl tracking-tight">{COMPANY.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">
            Термоклеевые прокладочные материалы с 1993 года. Производство и склад в одном месте.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Ассортимент</p>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link
                  to="/catalog/$category"
                  params={{ category: c.id }}
                  className="text-paper/80 transition-colors hover:text-paper"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Компания</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-paper/80 hover:text-paper">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-paper/80 hover:text-paper">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-paper/80 hover:text-paper">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/clients" className="text-paper/80 hover:text-paper">
                Для клиентов
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-paper/80 hover:text-paper">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-paper/45">Связь</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            {COMPANY.phones.slice(0, 2).map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel.replace(/\s/g, "")}`} className="hover:text-paper">
                  {p.tel}
                </a>
                <span className="text-paper/45"> · {p.name}</span>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-paper">
                {COMPANY.email}
              </a>
            </li>
            <li className="pt-2 text-paper/55">{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.legal}. Собственное производство в России.</p>
          <p>Скидки постоянным клиентам</p>
        </div>
      </div>
    </footer>
  );
}

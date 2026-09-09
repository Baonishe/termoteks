import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/catalog";
import { useInquiry } from "@/lib/inquiries";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/catalog", label: "Ассортимент" },
  { to: "/about", label: "О компании" },
  { to: "/clients", label: "Клиентам" },
  { to: "/delivery", label: "Доставка" },
  { to: "/blog", label: "Блог" },
  { to: "/contact", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useInquiry((s) => s.lines.reduce((n, l) => n + l.rolls, 0));

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur-md">
      <p className="hidden border-b border-line/70 bg-paper-2/60 px-4 py-2 text-center text-[11px] uppercase tracking-[0.22em] text-stone sm:block">
        {COMPANY.tagline}
      </p>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem]">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt={COMPANY.name}
            className="h-8 w-auto sm:h-9"
            width={160}
            height={36}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative text-[13px] uppercase tracking-[0.14em] text-stone transition-colors duration-150 hover:text-ink",
                  active && "text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/request">
              Заявка
              {count > 0 && (
                <span className="ml-1 tabular-nums text-paper-2">({count})</span>
              )}
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-paper lg:hidden transition-[max-height,opacity] duration-200 ease-[var(--ease-smooth-out)]",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/request"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-ink text-sm uppercase tracking-[0.14em] text-paper"
          >
            Заявка{count > 0 ? ` · ${count}` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

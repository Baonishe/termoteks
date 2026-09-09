import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/lib/catalog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Вопросы</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">FAQ</h1>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-base font-medium">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-stone transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-[var(--ease-out)]",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <p className="overflow-hidden pb-4 text-sm leading-relaxed text-stone">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

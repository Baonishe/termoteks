import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "@/lib/catalog";
import { useInquiry } from "@/lib/inquiries";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AddToRequest({ product }: { product: Product }) {
  const add = useInquiry((s) => s.add);
  const [rolls, setRolls] = useState(1);
  const [color, setColor] = useState(product.colors?.[0]?.id);

  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      {product.colors && product.colors.length > 1 && (
        <div className="mb-4">
          <Label>Цвет</Label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setColor(c.id)}
                className={cn(
                  "h-10 rounded-md border px-3 text-sm transition-colors",
                  color === c.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink hover:border-ink/30",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="mb-4">
        <Label htmlFor={`rolls-${product.id}`}>Количество рулонов</Label>
        <Input
          id={`rolls-${product.id}`}
          type="number"
          min={1}
          max={999}
          value={rolls}
          onChange={(e) => setRolls(Math.max(1, Number(e.target.value) || 1))}
          className="max-w-32 tabular-nums"
        />
      </div>
      <Button
        className="w-full"
        onClick={() => {
          add({ productId: product.id, rolls, color });
          toast.success("Добавлено в заявку", {
            description: `${product.sku} · ${rolls} рул.`,
          });
        }}
      >
        Добавить в заявку
      </Button>
      <p className="mt-3 text-xs leading-relaxed text-stone">
        Минимальная партия — 1 рулон. После сборки заявки менеджер подтвердит наличие и срок.
      </p>
    </div>
  );
}

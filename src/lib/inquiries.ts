import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS } from "./catalog";

export type InquiryLine = {
  productId: string;
  rolls: number;
  color?: string;
};

export type Inquiry = {
  id: string;
  createdAt: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  comment: string;
  lines: InquiryLine[];
};

type State = {
  lines: InquiryLine[];
  sent: Inquiry[];
  add: (line: InquiryLine) => void;
  setRolls: (productId: string, color: string | undefined, rolls: number) => void;
  remove: (productId: string, color?: string) => void;
  clear: () => void;
  submit: (meta: Omit<Inquiry, "id" | "createdAt" | "lines">) => Inquiry;
};

function lineKey(l: { productId: string; color?: string }) {
  return `${l.productId}::${l.color ?? ""}`;
}

export const useInquiry = create<State>()(
  persist(
    (set, get) => ({
      lines: [],
      sent: [],
      add: (line) => {
        const lines = get().lines.slice();
        const i = lines.findIndex((l) => lineKey(l) === lineKey(line));
        if (i >= 0) lines[i] = { ...lines[i], rolls: lines[i].rolls + line.rolls };
        else lines.push(line);
        set({ lines });
      },
      setRolls: (productId, color, rolls) => {
        set({
          lines: get().lines.map((l) =>
            lineKey(l) === lineKey({ productId, color }) ? { ...l, rolls } : l,
          ),
        });
      },
      remove: (productId, color) => {
        set({
          lines: get().lines.filter((l) => lineKey(l) !== lineKey({ productId, color })),
        });
      },
      clear: () => set({ lines: [] }),
      submit: (meta) => {
        const inquiry: Inquiry = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          lines: get().lines,
          ...meta,
        };
        set({ sent: [inquiry, ...get().sent], lines: [] });
        return inquiry;
      },
    }),
    { name: "termoteks-inquiry" },
  ),
);

export function lineProduct(line: InquiryLine) {
  return PRODUCTS.find((p) => p.id === line.productId);
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, unit: "m2" | "lm" = "m2") {
  const formatted = new Intl.NumberFormat("ru-RU").format(value);
  return unit === "lm" ? `${formatted} ₽/пог. м` : `${formatted} ₽/м²`;
}

export function formatPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

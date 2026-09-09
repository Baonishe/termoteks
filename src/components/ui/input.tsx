import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-line bg-surface px-3.5 text-sm text-ink placeholder:text-mist transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)] focus-visible:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-sm text-ink placeholder:text-mist transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)] focus-visible:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-stone",
        className,
      )}
      {...props}
    />
  );
}

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-[opacity,transform,background-color,color,border-color] duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-ink-soft",
        outline: "border border-ink/20 bg-transparent text-ink hover:bg-ink/5",
        ghost: "text-ink hover:bg-ink/5",
        invert: "bg-paper text-ink hover:bg-paper-2",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-3.5 text-xs",
        lg: "h-12 px-6 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };

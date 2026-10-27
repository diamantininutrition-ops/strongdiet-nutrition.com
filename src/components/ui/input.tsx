import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-hairline-dark bg-snow px-4 text-base text-ink-fg",
        "placeholder:text-muted",
        "outline-none",
        "focus-visible:border-forest focus-visible:shadow-[0_0_0_3px_rgb(0_107_63_/_0.18)]",
        className,
      )}
      {...props}
    />
  );
}

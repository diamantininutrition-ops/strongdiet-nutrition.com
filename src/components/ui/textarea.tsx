import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full rounded-lg border border-hairline-dark bg-snow px-4 py-3 text-base text-ink-fg",
        "placeholder:text-muted",
        "outline-none",
        "focus-visible:border-forest focus-visible:shadow-[0_0_0_3px_rgb(0_107_63_/_0.18)]",
        className,
      )}
      {...props}
    />
  );
}

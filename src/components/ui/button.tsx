import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        forest:
          "bg-forest text-fg hover:bg-forest-hover focus-visible:outline-gold",
        gold: "bg-gold text-ink hover:opacity-90 focus-visible:outline-gold",
        outline:
          "border border-hairline bg-transparent text-fg hover:bg-fg/5 focus-visible:outline-fg",
        ghost: "text-fg hover:opacity-70 focus-visible:outline-fg",
        ink: "bg-ink text-fg hover:opacity-90 focus-visible:outline-ink",
      },
      size: {
        md: "h-11 min-w-11 rounded-pill px-6 text-sm",
        lg: "h-12 min-w-12 rounded-pill px-7 text-base",
        xl: "h-14 min-w-14 rounded-pill px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "forest",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }
  return <button className={classes} {...props} />;
}

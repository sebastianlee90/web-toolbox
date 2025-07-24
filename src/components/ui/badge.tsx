import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { TooltipWrapper } from "./tooltip";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "text-red-600 border-red-600 bg-red-50 [a&]:hover:bg-red-100 [a&]:hover:text-red-600",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        success:
          "text-green-600 border-green-600 bg-green-50 [a&]:hover:bg-green-100 [a&]:hover:text-green-600",
        warning:
          "text-yellow-600 border-yellow-600 bg-yellow-50 [a&]:hover:bg-yellow-100 [a&]:hover:text-yellow-600",
        info: "text-blue-600 border-blue-600 bg-blue-50 [a&]:hover:bg-blue-100 [a&]:hover:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  tooltipSide,
  tooltipAlign,
  ...props
}: {
  tooltipSide?: "top" | "right" | "bottom" | "left";
  tooltipAlign?: "center" | "start" | "end";
} & React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <TooltipWrapper title={props.title} side={tooltipSide} align={tooltipAlign}>
      <Comp
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    </TooltipWrapper>
  );
}

export { Badge, badgeVariants };

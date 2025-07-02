import * as React from "react";

import { cn, toCamelCase } from "@/lib/utils";

function Textarea({
  label,
  labelClassName,
  name: propsName,
  className,
  ...props
}: React.ComponentProps<"textarea"> & {
  label?: string;
  labelClassName?: string;
}) {
  const name = label ? propsName ?? toCamelCase(label) : propsName;
  const titleText = props.title ?? label;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={`${name}-textarea`}
          className={cn(
            "flex text-sm text-gray-600 dark:text-gray-300 items-center text-nowrap ml-2",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <textarea
        title={titleText}
        id={`${name}-textarea`}
        data-slot="textarea"
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };

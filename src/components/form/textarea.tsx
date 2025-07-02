"use client";

import { cn, toCamelCase } from "@/lib/utils";
import { Textarea as TTextarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { copyToClipboard } from "@/hooks/common";

export function Textarea({
  label,
  labelClassName,
  name: propsName,
  copy,
  ...props
}: React.ComponentProps<typeof TTextarea> & {
  label?: string;
  labelClassName?: string;
  copy?: boolean;
}) {
  const name = label ? propsName ?? toCamelCase(label) : propsName;
  const titleText = props.title ?? label;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "flex flex-row gap-2",
          label && (copy || props.readOnly) ? "justify-between" : "justify-end"
        )}
      >
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
        <div className="flex flex-row gap-2">
          {copy && (
            <Button
              title="Copy"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => copyToClipboard(props.value?.toString() ?? "")}
            >
              <CopyIcon />
            </Button>
          )}
          {props.readOnly && <Badge>Read-Only</Badge>}
        </div>
      </div>
      <TTextarea name={name} title={titleText} {...props} />
    </div>
  );
}

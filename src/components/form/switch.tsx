"use client";

import { cn, toCamelCase } from "@/lib/utils";
import type { SwitchProps } from "@radix-ui/react-switch";
import { Root, Thumb } from "@radix-ui/react-switch";
import { TooltipWrapper } from "../ui/tooltip";

type Props = SwitchProps & {
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  tooltipSide?: "top" | "right" | "bottom" | "left";
  tooltipAlign?: "center" | "start" | "end";
};

/**
 * A switch component that toggles between two states.
 * Built on top of Radix UI's Switch primitive.
 *
 * Sample usage:
 * ```tsx
 * <Switch
 *   label="Switch Label"
 *   labelPosition="bottom"
 *   checked={checked}
 *   onCheckedChange={() => setChecked(!checked)}
 * />
 * ```
 */
export function Switch({
  labelPosition = "left",
  tooltipSide,
  tooltipAlign,
  ...props
}: Props) {
  const titleText = props.title ?? props.label;
  const name = props.label
    ? props.name ?? toCamelCase(props.label)
    : props.name;

  return (
    <TooltipWrapper title={titleText} side={tooltipSide} align={tooltipAlign}>
      <div
        className={cn(
          labelPosition === "top" && "flex-col",
          labelPosition === "left" && "flex-row",
          labelPosition === "bottom" && "flex-col-reverse",
          labelPosition === "right" && "flex-row-reverse",
          "flex items-center gap-2"
        )}
      >
        {props.label && (
          <label
            htmlFor={props.id ?? `${props.name}-switch`}
            className="flex text-sm text-gray-600 dark:text-gray-300"
          >
            {props.label}
          </label>
        )}
        <Root
          className={cn(
            "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2",
            "border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
            props.className
          )}
          {...props}
          id={props.id ?? `${props.name}-switch`}
          // title={titleText}
          name={name}
        >
          <Thumb
            className={cn(
              "pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0",
              "transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
            )}
          />
        </Root>
      </div>
    </TooltipWrapper>
  );
}

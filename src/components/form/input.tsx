import { cn, toCamelCase } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import { TooltipWrapper } from "../ui/tooltip";

export default function Input({
  title,
  label,
  labelClassName,
  labelPosition = "top",
  error,
  // required,
  loading,
  tooltipSide,
  tooltipAlign,
  ...props
}: {
  title?: string;
  label?: string;
  labelClassName?: string;
  labelPosition?: "top" | "left" | "bottom" | "right";
  error?: string;
  // required?: boolean;
  loading?: boolean;
  tooltipSide?: "top" | "right" | "bottom" | "left";
  tooltipAlign?: "center" | "start" | "end";
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  // const { label, loading, ...rest } = props;
  const { ...rest } = props;
  const titleText = title ?? label;
  const name = label ? props.name ?? toCamelCase(label) : props.name;

  return (
    <div
      className={cn(
        labelPosition === "top" && "flex-col",
        labelPosition === "left" && "flex-row items-center",
        labelPosition === "bottom" && "flex-col-reverse",
        labelPosition === "right" && "flex-row-reverse items-center",
        "relative flex gap-2"
      )}
    >
      {label && (
        <label
          htmlFor={`${name}-input`}
          className={cn(
            "flex text-sm text-gray-600 dark:text-gray-300 items-center text-nowrap",
            (labelPosition === "top" || labelPosition === "bottom") && "ml-2",
            labelClassName
          )}
        >
          {label}
          {/* {props.required && <span className="text-destructive">&nbsp;*</span>} */}
        </label>
      )}
      <div className="relative h-full">
        {loading ? (
          <div className="relative flex flex-col items-center">
            <div className="w-full">
              <Input disabled />
            </div>
            <LoaderIcon
              className={`absolute top-2 size-5 animate-spin text-gray-400`}
            />
          </div>
        ) : (
          <TooltipWrapper
            title={titleText}
            side={tooltipSide}
            align={tooltipAlign}
          >
            <input
              {...rest}
              className={cn(
                "block h-full w-full rounded-md border py-1 pl-2 text-base md:text-sm focus:border-slate-500 focus:outline-hidden focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800",
                error
                  ? "border-red-300 pr-10 text-destructive"
                  : "border-gray-300 pr-2 text-foreground",
                "disabled:border-disabled-foreground disabled:bg-disabled disabled:text-disabled-foreground disabled:shadow-none",
                "read-only:border-disabled-foreground read-only:bg-disabled read-only:text-disabled-foreground",
                props.className
              )}
              id={`${name}-input`}
              title={titleText}
            />
          </TooltipWrapper>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

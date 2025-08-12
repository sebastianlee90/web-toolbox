"use client";

import {
  SSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, toCamelCase } from "@/lib/utils";

export function Select({
  label,
  labelPosition = "top",
  labelClassName,
  name: propsName,
  options,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  title,
}: {
  label?: string;
  labelPosition?: "top" | "left" | "bottom" | "right";
  labelClassName?: string;
  name?: string;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
  title?: string;
}) {
  const name = label ? propsName ?? toCamelCase(label) : propsName;

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
          htmlFor={`${name}-select`}
          className={cn(
            "flex text-sm text-primary justify-start text-nowrap",
            (labelPosition === "top" || labelPosition === "bottom") && "ml-2",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <SSelect
        name={`${name}-select`}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-[130px]" title={title}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt, index) => (
            <SelectItem
              key={`slt${index}${opt.value}`}
              value={opt.value?.toString()}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SSelect>
    </div>
  );
}

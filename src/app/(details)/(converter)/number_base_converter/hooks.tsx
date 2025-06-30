"use client";

import { isScientificNotation } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export function useNumberBaseConverter() {
  type BaseKey = "binary" | "octal" | "decimal" | "hexadecimal";

  const bases: {
    label: BaseKey;
    base: number;
    format: (v: number) => string;
  }[] = [
    {
      label: "binary",
      base: 2,
      format: (v: number) => v.toString(2),
    },
    {
      label: "octal",
      base: 8,
      format: (v: number) => v.toString(8),
    },
    {
      label: "decimal",
      base: 10,
      format: (v: number) => v.toString(10),
    },
    {
      label: "hexadecimal",
      base: 16,
      format: (v: number) => v.toString(16).toUpperCase(),
    },
  ];

  const initialize: Record<BaseKey, string> = {
    binary: "",
    octal: "",
    decimal: "",
    hexadecimal: "",
  };

  const [input, setInput] = useState(initialize);
  const [alert, setAlert] = useState(false);

  function handleClear() {
    setInput(initialize);
  }

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  }

  function handleConvert(label: BaseKey, value: string) {
    const newInput = { ...input };
    newInput[label] = value;
    bases.forEach(({ label: baseLabel, format }) => {
      if (baseLabel !== label) {
        const parsedValue = parseInt(
          value,
          bases.find((b) => b.label === label)!.base
        );
        newInput[baseLabel] = isFinite(parsedValue) ? format(parsedValue) : "";
      }
    });
    setInput(newInput);
    setAlert(isScientificNotation(newInput.decimal));
  }

  return { bases, input, alert, handleCopy, handleClear, handleConvert };
}

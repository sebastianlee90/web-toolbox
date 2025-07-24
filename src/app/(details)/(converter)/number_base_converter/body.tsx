"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { copyToClipboard } from "@/hooks/common";
import { cn } from "@/lib/utils";
import { CopyIcon, EraserIcon, TriangleAlert } from "lucide-react";
import { useNumberBaseConverter } from "./hooks";

export function Body() {
  const { bases, input, alert, handleClear, handleConvert } =
    useNumberBaseConverter();

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 justify-end">
          {alert && (
            <div
              className={cn(
                "flex justify-start overflow-hidden w-full rounded-lg pl-2 gap-2 items-center ",
                "bg-orange-300/10 text-orange-300 ring ring-inset ring-warning/25"
              )}
            >
              <TriangleAlert />
              The value exceeds the limit that can be represented in decimal.
            </div>
          )}
          <Button
            title="Clear all"
            variant="outline"
            size="icon"
            onClick={handleClear}
          >
            <EraserIcon className="size-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          {bases.map(({ label }) => (
            <div
              key={label}
              className="flex items-center justify-between border rounded-xl p-2 gap-2 bg-slate-50 "
            >
              <p className="text-foreground dark:text-background font-mono font-bold">
                {label.charAt(0).toUpperCase() + label.slice(1)}:
              </p>
              <Input
                className="border-none"
                value={input[label]}
                onChange={(e) => {
                  handleConvert(label, e.currentTarget.value);
                }}
              />
              <Button
                title={`Copy ${label.charAt(0).toUpperCase() + label.slice(1)}`}
                variant="input"
                size="icon"
                onClick={() => copyToClipboard(input[label])}
              >
                <CopyIcon className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

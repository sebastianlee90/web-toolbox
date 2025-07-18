"use client";

import { Textarea } from "@/components/form/textarea";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/hooks/common";
import { CopyIcon, EraserIcon } from "lucide-react";
import { useState } from "react";

export function Body() {
  const initialize = {
    input: "",
  };
  const [form, setForm] = useState(initialize);

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="flex font-bold text-xl ml-2 text-gray-600 dark:text-gray-300 items-center">
            Enter UUID to validate (Multiple values allowed on line breaks)
          </label>
          <div className="flex items-end gap-2">
            <Button
              title="Copy"
              className="border-none size-8"
              variant="outline"
              type="button"
              onClick={() => copyToClipboard(form.input ?? "")}
            >
              <CopyIcon />
            </Button>
            <Button
              title="Clear"
              className="border-none size-8"
              variant="outline"
              type="button"
              onClick={() => setForm(initialize)}
            >
              <EraserIcon />
            </Button>
          </div>
        </div>
        <Textarea
          labelClassName="font-bold text-xl"
          className="h-[150px]"
          value={form.input ?? ""}
          onChange={(e) => setForm({ ...form, input: e.target.value })}
        />
      </div>
      <Button variant="default" type="button">
        Validate
      </Button>
    </div>
  );
}

"use client";

import { Switch } from "@/components/form/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { copyToClipboard } from "@/hooks/common";
import { CopyIcon, EraserIcon } from "lucide-react";
import { toast } from "sonner";
import { useBase64Decode } from "./hooks";

export function Body() {
  const { form, setForm, result } = useBase64Decode();

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-row gap-4 rounded-xl dark:bg-slate-200 bg-slate-100 p-4">
        <Switch
          label="Decode by line"
          labelPosition="right"
          checked={form.toDecodeByLine}
          onCheckedChange={() =>
            setForm((prevValue) => ({
              ...prevValue,
              toDecodeByLine: !prevValue.toDecodeByLine,
            }))
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-full h-100">
        {/* Left Panel */}
        <div className="flex flex-col gap-2">
          <p className="text-sm">Base64 data to be converted to text</p>
          <div className="flex flex-row gap-2 justify-end">
            <Button
              title="Copy"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => copyToClipboard(form.input)}
            >
              <CopyIcon />
            </Button>
            <Button
              title="Clear"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => {
                setForm((prevValue) => ({ ...prevValue, input: "" }));
                toast.success("Input cleared");
              }}
            >
              <EraserIcon />
            </Button>
          </div>
          <Textarea
            className="h-full"
            placeholder="Insert text here"
            value={form.input}
            onChange={(e) =>
              setForm((prevValue) => ({ ...prevValue, input: e.target.value }))
            }
          />
        </div>
        {/* Right Panel */}
        <div className="flex flex-col gap-2">
          <p className="text-sm">Text decoded data</p>
          <div className="flex flex-row gap-2 justify-end">
            <Button
              title="Copy"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => copyToClipboard(result)}
            >
              <CopyIcon />
            </Button>
            <Badge>Read-Only</Badge>
          </div>
          <Textarea
            className="h-full"
            placeholder="Result display here"
            readOnly
            value={result}
          />
        </div>
      </div>
    </div>
  );
}

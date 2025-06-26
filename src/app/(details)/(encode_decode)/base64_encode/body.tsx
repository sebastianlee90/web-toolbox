"use client";

import { Switch } from "@/components/form/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, EraserIcon } from "lucide-react";
import { toast } from "sonner";
import { useBase64Encode } from "./hooks";

export function Body() {
  const { form, setForm, conversion } = useBase64Encode();

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-row gap-4 rounded-xl bg-slate-100 p-4">
        <Switch
          label="Encode by line"
          labelPosition="right"
          checked={form.toEncodeByLine}
          onCheckedChange={() =>
            setForm((prevValue) => ({
              ...prevValue,
              toEncodeByLine: !prevValue.toEncodeByLine,
            }))
          }
        />
        <Switch
          label="Convert to URL Safe Format"
          labelPosition="right"
          checked={form.toUrlSafeFormat}
          onCheckedChange={() =>
            setForm((prevValue) => ({
              ...prevValue,
              toUrlSafeFormat: !prevValue.toUrlSafeFormat,
            }))
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-full h-100">
        {/* Left Panel */}
        <div className="flex flex-col gap-2">
          <p className="text-sm">Input data to be converted to Base64</p>
          <div className="flex flex-row gap-2 justify-end">
            <div className="flex flex-row gap-2">
              <Button
                title="Copy"
                className="border-none size-6"
                variant="outline"
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(form.input);
                  toast.success("Copied to clipboard");
                }}
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
          <p className="text-sm">Base64 decoded data</p>
          <div className="flex flex-row gap-2 justify-end">
            <Button
              title="Copy"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  conversion({
                    input: form.input,
                    toEncodeByLine: form.toEncodeByLine,
                    toUrlSafeFormat: form.toUrlSafeFormat,
                  })
                );
                toast.success("Copied to clipboard");
              }}
            >
              <CopyIcon />
            </Button>
            <Badge>Read-Only</Badge>
          </div>
          <Textarea
            className="h-full"
            placeholder="Result display here"
            readOnly
            value={conversion({
              input: form.input,
              toEncodeByLine: form.toEncodeByLine,
              toUrlSafeFormat: form.toUrlSafeFormat,
            })}
          />
        </div>
      </div>
    </div>
  );
}

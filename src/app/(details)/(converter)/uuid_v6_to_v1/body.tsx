"use client";

import Input from "@/components/form/input";
import { Textarea } from "@/components/form/textarea";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, EraserIcon } from "lucide-react";
import { useUuidV6ToV1 } from "./hooks";

export function Body() {
  const { form, setForm, validation, convert, handleClear } = useUuidV6ToV1();

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-4">
      <Input
        label="Namespace"
        labelClassName="flex font-bold text-xl ml-2 text-gray-600 dark:text-gray-300 items-center text-nowrap"
        placeholder="The namespace must be a valid UUIDs in the format 00000000-0000-0000-0000-000000000000."
        value={form.input ?? ""}
        onChange={(e) =>
          setForm((prevValue) => ({ ...prevValue, input: e.target.value }))
        }
      />

      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="flex gap-2">
          <Button
            title="Generate"
            variant="outline"
            className="flex-1"
            type="button"
            disabled={!validation.valid}
            onClick={convert}
          >
            Generate
          </Button>
          <Button
            title="Clear"
            variant="outline"
            type="button"
            onClick={handleClear}
          >
            <EraserIcon />
          </Button>
        </div>
        <div className="col-span-2 flex items-end h-6">
          {validation.valid === null ? (
            <div />
          ) : validation.valid ? (
            <p className="flex gap-2">
              <CircleCheck className="size-6 text-green-600" />
              <span className="text-green-600">Namespace is valid.</span>
            </p>
          ) : (
            <p className="flex gap-2">
              <CircleX className="size-6 text-red-600" />
              <span className="text-red-600">{validation.message}</span>
            </p>
          )}
        </div>
      </div>
      <Textarea
        label="Result"
        labelClassName="font-bold text-xl"
        className="h-[150px]"
        readOnly
        copy
        placeholder="Converted UUID will be displayed here..."
        value={form.output ?? ""}
      />
    </div>
  );
}

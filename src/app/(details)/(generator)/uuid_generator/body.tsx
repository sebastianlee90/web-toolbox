"use client";

import Input from "@/components/form/input";
import { Select } from "@/components/form/select";
import { Switch } from "@/components/form/switch";
import { Textarea } from "@/components/form/textarea";
import { Button } from "@/components/ui/button";
import { EraserIcon, ShuffleIcon } from "lucide-react";
import { useUuidGenerator } from "./hooks";

export function Body() {
  const {
    form,
    setForm,
    isNameBased,
    handleClear,
    disableGenerate,
    generateRandomUuid,
    generateUuid,
  } = useUuidGenerator();

  return (
    <div className="border border-black p-4 rounded-xl flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <Select
          title="UUID Version"
          label="UUID Version"
          labelPosition="left"
          options={[
            { label: "1", value: "1" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
          ]}
          value={form.version ?? ""}
          onChange={(v) =>
            setForm((prevValue) => ({
              ...prevValue,
              version: v,
              namespace: "",
              name: "",
              output: "",
            }))
          }
        />
        {!isNameBased ? (
          <Input
            label="Quantity"
            labelPosition="left"
            type="number"
            value={form.quantity ?? ""}
            onChange={(e) =>
              setForm((prevValue) => ({
                ...prevValue,
                quantity: e.target.value,
              }))
            }
          />
        ) : (
          <div />
        )}
        <div />
        <div className="flex gap-2">
          <Button
            title="Generate"
            className="flex-1"
            variant="outline"
            type="button"
            disabled={disableGenerate()}
            onClick={generateUuid}
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
        <div className="flex gap-2">
          <Switch
            label="Append"
            checked={form.append ?? false}
            onCheckedChange={(e) =>
              setForm((prevValue) => ({ ...prevValue, append: e }))
            }
          />
          <Switch
            label="Uppercase"
            checked={form.uppercase ?? false}
            onCheckedChange={(e) =>
              setForm((prevValue) => ({ ...prevValue, uppercase: e }))
            }
          />
        </div>
      </div>
      {isNameBased && (
        <>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <label
                htmlFor="namespace"
                className="flex font-bold text-xl ml-2 text-gray-600 dark:text-gray-300 items-center text-nowrap"
              >
                Enter Pre-defined Namespace
              </label>
              <Button
                title="Generate Random Namespace"
                variant="ghost"
                type="button"
                onClick={generateRandomUuid}
              >
                <ShuffleIcon className="size-4" />
              </Button>
            </div>
            <Input
              placeholder="The namespace must be a valid UUIDs in the format 00000000-0000-0000-0000-000000000000."
              required
              value={form.namespace ?? ""}
              onChange={(e) =>
                setForm((prevValue) => ({
                  ...prevValue,
                  namespace: e.target.value,
                }))
              }
            />
          </div>
          <Textarea
            label="Name"
            labelClassName="font-bold text-xl"
            className="h-[80px]"
            placeholder="Name can be anything. The same namespace with the same name will always produce the same UUID."
            value={form.name ?? ""}
            onChange={(e) =>
              setForm((prevValue) => ({
                ...prevValue,
                name: e.target.value,
              }))
            }
          />
        </>
      )}
      <Textarea
        label="Result"
        labelClassName="font-bold text-xl"
        className="h-[150px]"
        readOnly
        copy
        placeholder="Generated UUID will be displayed here..."
        value={form.output ?? ""}
      />
    </div>
  );
}

import { useState } from "react";
import { validate as uuidValidate, version as uuidVersion } from "uuid";
import type { validatedTable } from "./columns";

export function useUuidValidator() {
  const [form, setForm] = useState({
    input: "",
    output: [] as validatedTable[],
  });

  function validate(uuids: string) {
    const uuidArray = uuids.split("\n");
    setForm((prevValue) => ({
      ...prevValue,
      output: uuidArray.map((uuid) => ({
        uuid: uuid,
        valid: uuidValidate(uuid),
        version: uuidValidate(uuid) ? uuidVersion(uuid).toString() : "",
      })),
    }));
  }

  function handleClear() {
    setForm((prevValue) => ({
      ...prevValue,
      input: "",
    }));
  }

  return { form, setForm, validate, handleClear };
}

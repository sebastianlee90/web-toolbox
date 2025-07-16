"use client";

import { useState } from "react";
import { version as uuidVersion } from "uuid";
import { validate as uuidValidate } from "uuid";
import { v6ToV1 } from "uuid";

export function useUuidV6ToV1() {
  const [form, setForm] = useState({
    input: "",
    output: "",
  });
  const validation = uuidValidateV6(form.input);

  function uuidValidateV6(uuid: string) {
    if (uuid === "") {
      return {
        valid: null,
        message: "",
      };
    }

    if (!uuidValidate(uuid)) {
      return {
        valid: false,
        message: "Namespace is invalid",
      };
    }

    if (uuidVersion(uuid) !== 6 && uuidValidate(uuid)) {
      return {
        valid: false,
        message: "Namespace is not a Version 6 UUID",
      };
    }

    return {
      valid: true,
      message: "Namespace is valid",
    };
  }

  function convert() {
    setForm((prevValue) => ({
      ...prevValue,
      output: v6ToV1(form.input),
    }));
  }

  function handleClear() {
    setForm((prevValue) => ({
      ...prevValue,
      input: "",
      output: "",
    }));
  }

  return { form, setForm, validation, convert, handleClear };
}

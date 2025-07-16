"use client";

import { useState } from "react";
import { version as uuidVersion } from "uuid";
import { validate as uuidValidate } from "uuid";
import { v1ToV6 } from "uuid";

export function useUuidV1ToV6() {
  const [form, setForm] = useState({
    input: "",
    output: "",
  });
  const validation = uuidValidateV1(form.input);

  function uuidValidateV1(uuid: string) {
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

    if (uuidVersion(uuid) !== 1 && uuidValidate(uuid)) {
      return {
        valid: false,
        message: "Namespace is not a Version 1 UUID",
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
      output: v1ToV6(form.input),
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

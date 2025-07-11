import { useState } from "react";
import {
  v1 as uuidv1,
  v3 as uuidv3,
  v4 as uuidv4,
  v5 as uuidv5,
  v6 as uuidv6,
  v7 as uuidv7,
  validate,
} from "uuid";

export function useUuidGenerator() {
  const [form, setForm] = useState({
    version: "1",
    quantity: "1",
    append: false,
    uppercase: false,
    namespace: "",
    name: "",
    output: "",
  });
  const isNameBased = form.version === "3" || form.version === "5";

  function handleClear() {
    setForm((prevValue) => ({
      ...prevValue,
      namespace: "",
      name: "",
      output: "",
    }));
  }

  function disableGenerate() {
    if (!isNameBased) return false;

    return (
      form.namespace === "" || !validate(form.namespace) || form.name === ""
    );
  }

  function generateRandomUuid() {
    setForm((prevValue) => ({
      ...prevValue,
      namespace: uuidv4(),
    }));
  }

  function generateUuid() {
    const uuids: string[] = [];
    // For version 3 and 5, always generate only 1 UUID regardless of quantity
    const qty = isNameBased ? 1 : Math.max(1, parseInt(form.quantity, 10) || 1);

    for (let i = 0; i < qty; i++) {
      let uuid = "";
      switch (form.version) {
        case "1":
          uuid = uuidv1();
          break;
        case "3":
          uuid = uuidv3(form.name, form.namespace);
          break;
        case "4":
          uuid = uuidv4();
          break;
        case "5":
          uuid = uuidv5(form.name, form.namespace);
          break;
        case "6":
          uuid = uuidv6();
          break;
        case "7":
          uuid = uuidv7();
          break;
      }
      uuids.push(form.uppercase ? uuid.toUpperCase() : uuid);
    }

    setForm((prevValue) => ({
      ...prevValue,
      output:
        form.append && prevValue.output
          ? prevValue.output + "\n" + uuids.join("\n")
          : uuids.join("\n"),
    }));
  }

  return {
    form,
    setForm,
    isNameBased,
    handleClear,
    disableGenerate,
    generateRandomUuid,
    generateUuid,
  };
}

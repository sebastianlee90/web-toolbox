import { useState } from "react";

export function useBase64Decode() {
  const [form, setForm] = useState({
    input: "",
    toDecodeByLine: false,
  });

  // Always normalize to standard Base64
  function normalizeBase64(str: string) {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    return base64;
  }

  function conversion({
    input,
    toDecodeByLine,
  }: {
    input: string;
    toDecodeByLine: boolean;
  }) {
    const decode = (str: string) => {
      try {
        const base64 = normalizeBase64(str);
        return decodeURIComponent(
          Array.prototype.map
            .call(
              atob(base64),
              (c: string) =>
                "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
            )
            .join("")
        );
      } catch {
        return "⚠ Invalid Base64 or unsupported characters";
      }
    };

    if (toDecodeByLine) {
      return input.split("\n").map(decode).join("\n");
    } else {
      return decode(input);
    }
  }

  const result = conversion({
    input: form.input,
    toDecodeByLine: form.toDecodeByLine,
  });

  return { form, setForm, result };
}

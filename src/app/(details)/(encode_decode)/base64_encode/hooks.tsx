import { useState } from "react";

export function useBase64Encode() {
  const [form, setForm] = useState({
    input: "",
    toEncodeByLine: false,
    toUrlSafeFormat: false,
  });

  function toUrlSafeBase64(str: string) {
    return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function conversion({
    input,
    toEncodeByLine,
    toUrlSafeFormat,
  }: {
    input: string;
    toEncodeByLine: boolean;
    toUrlSafeFormat: boolean;
  }) {
    const encode = (str: string) => {
      try {
        // Convert Unicode string to UTF-8 bytes, then to Base64
        return btoa(unescape(encodeURIComponent(str)));
      } catch {
        return "⚠ Input contains unsupported characters";
      }
    };
    const urlSafe = (str: string) => toUrlSafeBase64(str);

    if (toEncodeByLine) {
      const lines = input.split("\n").map(encode);
      return toUrlSafeFormat ? lines.map(urlSafe).join("\n") : lines.join("\n");
    } else {
      const base64 = encode(input);
      return toUrlSafeFormat ? urlSafe(base64) : base64;
    }
  }

  const result = conversion({
    input: form.input,
    toEncodeByLine: form.toEncodeByLine,
    toUrlSafeFormat: form.toUrlSafeFormat,
  });

  return { form, setForm, result };
}

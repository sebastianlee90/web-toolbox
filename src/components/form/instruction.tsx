"use client";

import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { loadMarkdownByFilename } from "@/lib/markdown";

export default function Instruction() {
  const pathname = usePathname(); // e.g., "/base64_encode"
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (!pathname) return;

    const segments = pathname.split("/").filter(Boolean); // e.g., ['base64_encode']
    const filename = segments[segments.length - 1]; // gets 'base64_encode'

    (async () => {
      const documentContent = await loadMarkdownByFilename(filename);
      setMarkdown(documentContent);
    })();
  }, [pathname]);

  return (
    <div className="prose mx-auto dark:prose-invert">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

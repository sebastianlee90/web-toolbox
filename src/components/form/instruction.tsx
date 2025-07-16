"use client";

import { usePathname } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { loadMarkdownByFilename } from "@/lib/markdown";
import { cn } from "@/lib/utils";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "github-markdown-css/github-markdown.css";

export default function Instruction({ className }: { className?: string }) {
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
    <article
      className={cn(
        "w-full border border-black p-4 rounded-xl",
        "markdown-body",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        // components={
        //   {
        //     //   h1: ({ node, ...props }) => (
        //     //     <h1 className="text-3xl font-bold my-4" {...props} />
        //     //   ),
        //     //   h2: ({ node, ...props }) => (
        //     //     <h2 className="text-2xl font-semibold my-3" {...props} />
        //     //   ),
        //     //   ul: ({ node, ...props }) => (
        //     //     <ul className="list-disc ml-6 my-2" {...props} />
        //     //   ),
        //     //   li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        //     //   p: ({ node, ...props }) => <p className="my-2" {...props} />,
        //   }
        // }
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}

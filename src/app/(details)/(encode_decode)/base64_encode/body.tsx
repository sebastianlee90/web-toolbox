"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EraserIcon } from "lucide-react";
import { useState } from "react";

export function Body() {
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border border-black p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 min-w-full">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Input data to be converted to Base64</p>
          <div className="flex justify-end">
            <Button
              title="Clear"
              className="border-none size-6"
              variant="outline"
              type="button"
              onClick={() => setInput("")}
            >
              <EraserIcon />
            </Button>
          </div>
          <Textarea
            placeholder="Insert text here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Base64 decoded data</p>
          <div className="flex justify-end">
            <Badge>Read-Only</Badge>
          </div>
          <Textarea
            placeholder="Result display here"
            readOnly
            value={btoa(input)}
          />
        </div>
      </div>
    </div>
  );
}

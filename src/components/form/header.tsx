"use client";

import { toolsList } from "@/constants/toolsList";
import { cn } from "@/lib/utils";
import { CircleHelpIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function Header({ className }: { className?: string }) {
  const pathName = usePathname();
  const tool = toolsList
    .flatMap((item) => item.children ?? [])
    .find((child) => child.href === pathName);

  return (
    <div className="flex flex-col gap-4 min-h-40">
      <div className={cn("flex flex-row gap-2 text-5xl font-bold", className)}>
        {tool?.name}
      </div>
      <p className="text-primary">{tool?.desciption}</p>
      <div className="flex flex-row justify-end">
        <Button variant="outline" type="button">
          <CircleHelpIcon className="size-4" />
          How To
        </Button>
      </div>
    </div>
  );
}

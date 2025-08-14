"use client";

import { cn, toRenderBackground } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AuroraBackground } from "../ui/aurora-background";

export function Background({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const pathname = usePathname();
  const toRender = toRenderBackground(pathname);

  return (
    <div className={cn("relative", className)} {...props}>
      {toRender && <AuroraBackground />}
    </div>
  );
}

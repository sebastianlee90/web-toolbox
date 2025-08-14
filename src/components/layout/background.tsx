"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AuroraBackground } from "../ui/aurora-background";

export function Background({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  // List of URLs to exclude
  const excludeChildrenUrl = ["/about"];

  const pathname = usePathname();
  const toRender = !excludeChildrenUrl?.includes(pathname);

  return (
    <div className={cn("relative", className)} {...props}>
      {toRender && <AuroraBackground />}
    </div>
  );
}

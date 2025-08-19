"use client";

import { cn, toRenderBackground } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import myGif from "../../../public/Seen-Alone_In_The_Dark.gif";
import { AuroraBackground } from "../ui/aurora-background";

export function Background({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const pathname = usePathname();
  const toRender = toRenderBackground(pathname);

  return (
    <div className={cn("relative", className)} {...props}>
      {pathname === "/about" && ( // Only render the gif on the About page
        <div className="fixed w-full h-full">
          <Image
            className="w-full h-full"
            src={myGif}
            alt={"Profile_Background"}
          />
        </div>
      )}
      {toRender && <AuroraBackground />}
    </div>
  );
}

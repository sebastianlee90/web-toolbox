"use client";

import { toRenderSideBar } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./appSideBar";

export function SideBarWrapper({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const toRender = toRenderSideBar(pathName);

  return (
    <>
      {toRender ? (
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

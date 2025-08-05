"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appSideBarItems } from "./appSideBarItems";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row justify-between px-2 items-center text-base group-data-[collapsible=icon]:p-0.5">
          <p className="group-data-[collapsible=icon]:hidden font-medium flex flex-row gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="mt-0.5"
            />
            Web Toolbox
          </p>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {appSideBarItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

function NavItem({
  item,
  child,
}: {
  item: (typeof appSideBarItems)[0];
  child?: boolean;
}) {
  const pathname = usePathname();
  let isCurrent = false;
  switch (true) {
    case item.href === "/":
      isCurrent = pathname === item.href;
      break;
    case !!item.href:
      isCurrent = pathname.includes(item.href);
      break;
    default:
      isCurrent = false;
  }

  if (item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={item.name}>
          {!child && item.icon && <item.icon />}
          <span>{item.name}</span>
        </SidebarMenuButton>
        <SidebarMenuSub>
          {item.children.map((subItem) => (
            <NavItem key={subItem.name} item={subItem} child />
          ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
    );
  }
  return (
    <SidebarMenuItem>
      <Link href={item.href ?? "#"}>
        <SidebarMenuButton
          tooltip={item.name}
          tabIndex={-1}
          className={cn(child ? "pl-6" : "")}
          isActive={isCurrent && pathname === item.href}
        >
          {item.icon && <item.icon />}
          <span>{item.name}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}

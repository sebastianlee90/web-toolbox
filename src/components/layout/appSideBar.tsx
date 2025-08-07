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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";
import { appSideBarItems } from "./appSideBarItems";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row justify-between px-2 items-center text-base group-data-[collapsible=icon]:p-0.5">
          <p className="group-data-[collapsible=icon]:hidden font-medium flex flex-row gap-2">
            <Logo className="-mb-0.5 text-foreground" />
            <span className="mt-0.5">Web Toolbox</span>
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

  // If the item has children, render a submenu
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

  // If the item doesn't have children, render a button
  return (
    <SidebarMenuItem>
      <Link href={item.href ?? "#"}>
        <SidebarMenuButton
          tooltip={item.name}
          tabIndex={-1}
          className={cn(child ? "pl-6" : "")}
          isActive={isCurrent && pathname === item.href}
        >
          {item.name === "Home" && item.icon && <item.icon />}
          <span>{item.name}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}

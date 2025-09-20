"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BRAND } from "@/constants/brand";
import { cn, toRenderSideBar } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { aboutList } from "../../constants/layout/navMenuConstants";
import { Command } from "../form/command";
import { Logo } from "../icons/logo";
import { ListItem } from "./navMenuListItem";
import { ThemeChanger } from "./themeChanger";
// import { SidebarTrigger } from "../ui/sidebar";
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

export function NavigationMenu() {
  const pathName = usePathname();
  const renderIcon = toRenderSideBar(pathName);

  return (
    <NavigationMenuPrimitive
      className={cn(
        "sticky top-0 z-40 justify-between p-2",
        "border-b-2 rounded border-black dark:border-white", // Handles Border of Navigation Menu
        "backdrop-blur-sm dark:bg-zinc-900/50" // Handles Background of Navigation Menu
      )}
      viewport={false}
    >
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <SidebarTrigger />
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            {renderIcon ? (
              <HomeIcon className="size-6 text-accent-foreground" />
            ) : (
              <>
                <Logo className="mt-1 size-10 text-foreground" />
                <span className="mt-0.5 text-xl font-bold">{BRAND.name}</span>
              </>
            )}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <Command />
        <ThemeChanger />
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className="end-0">
            <ul className="flex gap-2">
              {aboutList.map((data) => (
                <ListItem key={data.title} title={data.title} href={data.href}>
                  {data.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenuPrimitive>
  );
}

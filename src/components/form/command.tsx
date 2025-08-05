"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { appSideBarItems } from "../layout/appSideBarItems";

export function Command() {
  const [open, setOpen] = useState(false);

  // This useEffect handles the keyboard shortcut for opening the command palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const searchContent = appSideBarItems
    .filter((item) => item.children) // Only include items with children
    .map((item) => (
      <CommandGroup key={item.name} heading={item.name}>
        {item.children?.map((subItem) => (
          <Link key={subItem.name} href={subItem.href}>
            <CommandItem onSelect={() => setOpen(false)}>
              {subItem.icon && <subItem.icon className="mr-2 size-4" />}
              <span>{subItem.name}</span>
            </CommandItem>
          </Link>
        ))}
      </CommandGroup>
    ));

  return (
    <>
      <div
        className="border border-accent-foreground rounded-md px-2 py-1.5 flex gap-4 items-center"
        onClick={() => setOpen(true)}
      >
        <p className="flex gap-2 items-center text-sm">
          <MagnifyingGlassIcon className="size-4" />
          Search...
        </p>
        <kbd className="bg-muted pointer-events-none inline-flex h-5 items-center gap-1 rounded-md border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none text-sm">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Find Tools..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchContent}
        </CommandList>
      </CommandDialog>
    </>
  );
}

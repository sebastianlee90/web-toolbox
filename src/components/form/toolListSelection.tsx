"use client";

import { toolsList } from "@/constants/toolsList";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export function ToolListSelection() {
  return (
    <>
      {toolsList.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            ref={ref}
            key={item.id}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.4, delay: index * 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* Category Header Section */}
            <div
              className={cn(
                "flex flex-row p-1 gap-2 w-fit items-center text-nowrap bg-secondary",
                "rounded-lg border-2 border-foreground"
              )}
            >
              {item.icon ? <item.icon className="size-6" /> : null}
              <span className="text-foreground text-lg font-bold">
                {item.name}
              </span>
            </div>
            {/* Tools List Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {item.children?.map((subItem, subIndex) => {
                const subRef = useRef(null);
                const isSubItemInView = useInView(subRef, {
                  once: true,
                });
                return (
                  <motion.div
                    ref={subRef}
                    key={subItem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isSubItemInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4, delay: subIndex * 0.4 }}
                  >
                    <Link
                      href={subItem.href}
                      className={cn(
                        "rounded-lg ring-4 ring-muted-foreground/60",
                        "hover:inset-ring-blue-500 hover:inset-ring-2",
                        "flex flex-1 p-4 gap-4 w-full h-full items-start bg-secondary",
                        "group"
                      )}
                    >
                      {subItem.icon ? (
                        <div
                          className={cn(
                            "ring-2 rounded-sm ring-muted-foreground/60",
                            "group-hover:inset-ring-blue-500 group-hover:inset-ring-1"
                          )}
                        >
                          <subItem.icon className="size-[50px] text-primary" />
                        </div>
                      ) : null}
                      <div className="flex flex-col gap-3">
                        <h1 className="text-foreground text-lg font-semibold">
                          {subItem.name}
                        </h1>
                        <h2 className="text-foreground/60 text-md">
                          {subItem.desciption}
                        </h2>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

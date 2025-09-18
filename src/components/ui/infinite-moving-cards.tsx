"use client";

import { toolsList, toolsType } from "@/constants/toolsList";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function InfiniteMovingCards({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const allTools = toolsList.reduce<toolsType[]>((acc, item) => {
    if (item.children) {
      return [...acc, ...item.children];
    }
    return acc;
  }, []);
  // .sort(() => Math.random() - 0.5); // Randomize the order of objects in the array

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {allTools.map((item) => (
          <Link
            key={item.id}
            className={cn(
              "relative shrink-0 p-3 flex flex-row gap-2 items-center text-nowrap min-w-[300px]",
              "ring-3 rounded-2xl ring-muted-foreground/60",
              "hover:inset-ring-blue-500 hover:inset-ring-2",
              "group"
            )}
            href={item.href}
          >
            {item.icon ? (
              <div
                className={cn(
                  "ring-2 rounded-sm ring-muted-foreground/60",
                  "group-hover:inset-ring-blue-500 group-hover:inset-ring-1"
                )}
              >
                <item.icon className="size-[50px] text-primary" />
              </div>
            ) : null}
            <span className="text-foreground text-lg font-semibold">
              {item.name}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";

export function CardSpotlight({
  children,
  radius = 250,
  color = "#a2a8eb",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="border-2 rounded-3xl border-muted-foreground p-1.5 backdrop-blur-xl">
      <div
        className={cn(
          "group/spotlight p-6 rounded-3xl relative border border-muted-foreground",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 group-hover/spotlight:opacity-50"
          style={{
            backgroundColor: color,
            maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          }}
        />
        {children}
      </div>
    </div>
  );
}

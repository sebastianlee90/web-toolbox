"use client";

import { useAnchor } from "@/hooks/anchor";
import { Header } from "../form/header";
import { Instruction } from "../form/instruction";

export function DetailsPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, scrollToAnchor } = useAnchor({
    targetAnchor: "instruction",
  });

  return (
    <div className="flex flex-col gap-4">
      <Header onHowToClick={scrollToAnchor} />
      {children}
      <Instruction ref={ref} />
    </div>
  );
}

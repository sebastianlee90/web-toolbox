import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { LockOpen } from "lucide-react";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <LockOpen className="size-12 border-4 p-0.5 " />
            Base64 Decode
          </>
        }
        description="Decode Base64 into text data in real time."
      />
      <Body />
      <Instruction />
    </div>
  );
}

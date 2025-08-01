import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { ArrowDown01 } from "lucide-react";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <ArrowDown01 className="size-12 border-4 p-0.5 " />
            UUID V6 to V1
          </>
        }
        description="Convert Version 6 UUIDs to Version 1 UUIDs"
      />
      <Body />
      <Instruction />
    </div>
  );
}

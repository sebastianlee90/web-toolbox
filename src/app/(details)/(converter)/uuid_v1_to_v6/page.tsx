import { Header } from "@/components/form/header";
import { ArrowUp01 } from "lucide-react";
import Instruction from "@/components/form/instruction";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <ArrowUp01 className="size-12 border-4 p-0.5 " />
            UUID V1 to V6
          </>
        }
        description="Convert Version 1 UUIDs to Version 6 UUIDs"
      />
      <Body />
      <Instruction />
    </div>
  );
}

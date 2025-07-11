import { Header } from "@/components/form/header";
import { FileDigit } from "lucide-react";
import Instruction from "@/components/form/instruction";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <FileDigit className="size-12 border-4 p-0.5 " />
            UUID Generator
          </>
        }
        description="Generate Version 1 to Version 6 UUIDs"
      />
      <Body />
      <Instruction />
    </div>
  );
}

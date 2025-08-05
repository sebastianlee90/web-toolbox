import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { Binary } from "lucide-react";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <Binary className="size-12 border-4 p-0.5 " />
            Number Base Converter
          </>
        }
        description="Convert between binary, octal, decimal, and hexadecimal numbers in real-time."
      />
      <Body />
      <Instruction />
    </div>
  );
}

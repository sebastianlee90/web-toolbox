import { Header } from "@/components/form/header";
import { ScanEye } from "lucide-react";
import Instruction from "@/components/form/instruction";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <ScanEye className="size-12 border-4 p-0.5 " />
            UUID Validator
          </>
        }
        description="Validate multiple UUIDs in bulk and quickly check their validity and versions."
      />
      <Body />
      <Instruction />
    </div>
  );
}

import { Header } from "@/components/form/header";
import { Body } from "./body";
import { LockIcon } from "lucide-react";
import Instruction from "@/components/form/instruction";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <LockIcon className="size-12 border-4 p-0.5 " />
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

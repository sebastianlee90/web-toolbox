import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { LockIcon } from "lucide-react";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        title={
          <>
            <LockIcon className="size-12 border-4 p-0.5 " />
            Base64 Encode
          </>
        }
        description="Encode text data into Base64 in real time."
      />
      <Body />
      <Instruction />
    </div>
  );
}

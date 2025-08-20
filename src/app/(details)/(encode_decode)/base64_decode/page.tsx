import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { Body } from "./body";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Body />
      <Instruction />
    </div>
  );
}

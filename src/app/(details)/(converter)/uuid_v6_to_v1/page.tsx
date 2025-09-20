import { Header } from "@/components/form/header";
import { Instruction } from "@/components/form/instruction";
import { Metadata } from "next";
import { Body } from "./body";

export const metadata: Metadata = {
  title: "UUID V6 to V1", // This will be inserted into the template
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Body />
      <Instruction />
    </div>
  );
}

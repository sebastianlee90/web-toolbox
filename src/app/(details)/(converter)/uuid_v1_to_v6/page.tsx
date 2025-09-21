import { DetailsPageWrapper } from "@/components/layout/detailsPageWrapper";
import { Metadata } from "next";
import { Body } from "./body";

export const metadata: Metadata = {
  title: "UUID V1 to V6", // This will be inserted into the template
};

export default function Page() {
  return (
    <DetailsPageWrapper>
      <Body />
    </DetailsPageWrapper>
  );
}

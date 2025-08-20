import { Faq } from "@/components/form/faq";
import { FAQ_QNA } from "@/constants/faqQnA";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
        Main Header Section
      </div>
      <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
        Quality Section
      </div>
      <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
        Featured Tools Section
      </div>
      <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
        Tools Section
      </div>
      {/* <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
        FAQ Section
      </div> */}
      <Faq
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={FAQ_QNA}
      />
    </div>
  );
}

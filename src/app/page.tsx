import { Faq } from "@/components/form/faq";
import { Logo } from "@/components/icons/logo";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FAQ_QNA } from "@/constants/faqQnA";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <BackgroundRippleEffect>
        <div className="flex flex-col items-center justify-center w-full z-10">
          <h2 className="flex gap-2 relative mx-auto max-w-4xl text-center text-2xl font-bold text-foreground md:text-4xl lg:text-7xl">
            <Logo className="text-foreground size-10 md:size-14 lg:size-24" />
            <span className="mt-1.5">Web Toolbox</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-center text-xs md:text-md lg:text-2xl text-muted-foreground">
            Simplifying tasks, one tool at a time
          </p>
        </div>
      </BackgroundRippleEffect>
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

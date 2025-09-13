import { Faq } from "@/components/form/faq";
import { Logo } from "@/components/icons/logo";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FAQ_QNA } from "@/constants/faqQnA";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <BackgroundRippleEffect>
        <div className="flex flex-col items-center justify-center w-full z-10">
          <h1 className="flex gap-2 relative mx-auto max-w-4xl text-center text-2xl font-bold text-foreground md:text-4xl lg:text-7xl">
            <Logo className="text-foreground size-10 md:size-14 lg:size-24" />
            <span className="mt-1.5">Web Toolbox</span>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-center text-xs md:text-md lg:text-2xl text-muted-foreground">
            Simplifying tasks, one tool at a time
          </p>
        </div>
      </BackgroundRippleEffect>
      {/* Quality Section */}
      {/* TODO: Finetune Content Displayed in the 3 cardspotlight section*/}
      <div className="grid grid-cols-3 items-center justify-center gap-4">
        <CardSpotlight className="h-[200px]">
          <p>
            🚀 Accelerate Your Development Dramatically boost your development
            speed and efficiency with over 50 ready-to-use tools.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-[200px]">
          <p>
            💻 Accessible Anytime, Anywhere Access from any device with just a
            browser. Seamlessly support your digital work without any hassle.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-[200px]">
          <p>
            🔐 Simple and Secure Utilize all features without registration. Use
            with confidence under high security standards.
          </p>
        </CardSpotlight>
      </div>
      {/* Featured Tools Section */}
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl">
          🔥Featured Tools🔥
        </h1>
        <InfiniteMovingCards direction="left" />
        {/* Tools Section */}
        <div className="flex items-center justify-center h-50 border border-foreground rounded-xl m-10">
          Tools Section
        </div>
      </div>
      {/* FAQ Section */}
      <Faq
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={FAQ_QNA}
      />
    </div>
  );
}

import { Faq } from "@/components/form/faq";
import { ToolListSelection } from "@/components/form/toolListSelection";
import { Logo } from "@/components/icons/logo";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FAQ_QNA } from "@/constants/faqQnA";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 font-semibold">
      {/* Hero Section */}
      <BackgroundRippleEffect>
        <div className="flex flex-col items-center justify-center w-full z-10">
          <h1 className="flex gap-2 relative mx-auto max-w-4xl text-center font-bold text-foreground text-7xl">
            <Logo className="text-foreground size-24" />
            <span className="mt-1.5">Web Toolbox</span>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-center text-2xl text-muted-foreground">
            Simplifying tasks, one tool at a time
          </p>
        </div>
      </BackgroundRippleEffect>
      {/* Quality Section */}
      {/* TODO: Finetune Content Displayed in the 3 cardspotlight section*/}
      <div className="">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-6">
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
              🔐 Simple and Secure Utilize all features without registration.
              Use with confidence under high security standards.
            </p>
          </CardSpotlight>
        </div>
      </div>
      {/* Featured Tools Section */}
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl">
          🔥Featured Tools🔥
        </h1>
        <InfiniteMovingCards />
      </div>
      {/* Tools Section */}
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl">
          🧰 All Tools 🛠️
        </h1>
        <h2 className="text-center text-sm md:text-md lg:text-xl">
          Collection of handcrafted tools
        </h2>
        <div className="flex flex-col gap-4 px-6">
          <ToolListSelection />
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

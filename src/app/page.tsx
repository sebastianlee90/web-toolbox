import { Faq } from "@/components/form/faq";
import { ToolListSelection } from "@/components/form/toolListSelection";
import { Logo } from "@/components/icons/logo";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BRAND } from "@/constants/brand";
import { FAQ_QNA } from "@/constants/faqQnA";
import { qualitySection } from "@/constants/qualitySection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 font-semibold">
      {/* Hero Section */}
      <BackgroundRippleEffect>
        <div className="flex flex-col items-center justify-center w-full z-10">
          <h1 className="flex gap-2 relative mx-auto max-w-4xl text-center font-bold text-foreground text-7xl">
            <Logo className="text-foreground size-24" />
            <span className="mt-1.5">{BRAND.name}</span>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-center text-2xl text-muted-foreground">
            {BRAND.description}
          </p>
        </div>
      </BackgroundRippleEffect>
      {/* Quality Section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-6">
        {qualitySection.map((item, i) => (
          <CardSpotlight
            key={i}
            index={i + 1}
            className="flex flex-col gap-2 h-full"
          >
            <p className="text-4xl">{item.icon}</p>
            <p>{item.description}</p>
          </CardSpotlight>
        ))}
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

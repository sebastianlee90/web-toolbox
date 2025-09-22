import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircleHeart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About", // This will be inserted into the template
};

export default function Page() {
  const headerClassName = "font-bold text-2xl pb-2 border-b border-foreground";

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "border border-foreground rounded-xl w-[60%]", // Border parameters
          "flex flex-col p-4 gap-10", // Content parameters
          "backdrop-blur-xl bg-zinc-900/30" // Background parameters
        )}
      >
        <div className="flex flex-col">
          <h1 className={headerClassName}>About the Developer</h1>
          <p className="mt-2">
            Hi there, Selean here!
            <br />
            <br />
            A late boomer that joined the web development world a little later
            than most, but I’m diving in headfirst—powered by curiosity,
            caffeine, and a love for creating.
            <br />
            <br />
            This site is my personal playground and portfolio, where I build
            practical (and sometimes just-for-fun) tools with the React
            framework. Each project here helps me learn, experiment, and
            hopefully make someone’s day a little easier.
            <br />
            <br />
            If you’ve got an idea for a tool—whether it’s something genuinely
            useful or wonderfully quirky—send it my way. I’m always up for the
            challenge.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className={headerClassName}>Tools Request Submission</h1>
          <Link
            className="flex justify-center"
            href="https://forms.gle/TAi6bDRF9zsdbKcTA"
          >
            <Button title="Submit Request">Submit Request</Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className={headerClassName}>Technology</h1>
          <p className="mt-2 flex flex-row gap-1">
            Built with
            <Link
              href="https://react.dev"
              className="font-semibold text-blue-600 hover:underline"
            >
              React
            </Link>
            {/* &
            <Link
              href="https://nodejs.org/en"
              className="font-semibold text-blue-600 hover:underline"
            >
              NodeJs
            </Link> */}
            <MessageCircleHeart className="ml-1 size-5" />
          </p>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { CircleHelpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function Header({
  title,
  className,
  description,
}: {
  title: React.ReactNode;
  className?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4 h-40">
      <div className={cn("flex flex-row gap-2 text-5xl font-bold", className)}>
        {title}
      </div>
      {description && <p className="text-primary">{description}</p>}
      <div className="flex flex-row justify-end">
        <Button variant="outline" type="button">
          <CircleHelpIcon className="size-4" />
          How To
        </Button>
      </div>
    </div>
  );
}

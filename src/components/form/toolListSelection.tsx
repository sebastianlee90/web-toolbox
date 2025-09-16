import { toolsList } from "@/constants/toolsList";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ToolListSelection() {
  return (
    <>
      {toolsList.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          {/* Category Header Section */}
          <div
            className={cn(
              "flex flex-row p-1 gap-2 w-fit items-center text-nowrap bg-secondary",
              "rounded-lg border-2 border-foreground"
            )}
          >
            {item.icon ? <item.icon className="size-6" /> : null}
            <span className="text-foreground text-lg font-bold">
              {item.name}
            </span>
          </div>
          {/* Tools List Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {item.children?.map((subItem) => (
              <Link
                key={subItem.id}
                href={subItem.href}
                className={cn(
                  "rounded-lg ring-4 ring-muted-foreground/60",
                  "hover:inset-ring-blue-500 hover:inset-ring-2",
                  "flex flex-1 p-4 gap-4 w-full h-full items-start bg-secondary",
                  "group"
                )}
              >
                {subItem.icon ? (
                  <div
                    className={cn(
                      "ring-2 rounded-sm ring-muted-foreground/60",
                      "group-hover:inset-ring-blue-500 group-hover:inset-ring-1"
                    )}
                  >
                    <subItem.icon className="size-[50px] text-primary" />
                  </div>
                ) : null}
                <div className="flex flex-col gap-3">
                  <h1 className="text-foreground text-lg font-semibold">
                    {subItem.name}
                  </h1>
                  <h2 className="text-muted-foreground text-md">
                    {subItem.desciption}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

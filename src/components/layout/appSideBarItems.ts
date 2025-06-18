import { CogIcon, HomeIcon, LucideIcon } from "lucide-react";

export type NavType = {
  id?: string;
  name: string;
  current?: boolean;
  icon?: LucideIcon;
  children?: NavType[];
  href: string;
};

export const appSideBarItems: NavType[] = [
  { id: "home", name: "Home", href: "/", icon: HomeIcon },
  {
    id: "converters",
    name: "Converters",
    href: "/converters",
    icon: CogIcon,
    children: [
      {
        id: "convert",
        name: "convert",
        href: "/convert",
      },
      //   {
      //     id: "patient-quick-registration",
      //     name: "Patient Quick Registration",
      //     href: "/dashboard/patient_management/patient_quick_registration",
      //   },
    ],
  },
];

import { FileCode2, HomeIcon, LucideIcon } from "lucide-react";

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
    id: "encodeDecode",
    name: "Encode/Decode",
    href: "/encode_decode",
    icon: FileCode2,
    children: [
      {
        id: "base64-encode",
        name: "Base64 Encode",
        href: "/base64_encode",
      },
      {
        id: "base64-decode",
        name: "Base64 Decode",
        href: "/base64_decode",
      },
    ],
  },
];

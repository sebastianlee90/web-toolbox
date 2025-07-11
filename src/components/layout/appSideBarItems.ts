import {
  Dna,
  FileCode2,
  HomeIcon,
  LucideIcon,
  // RemoveFormatting,
  Repeat,
} from "lucide-react";

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
    id: "converter",
    name: "Converter",
    href: "/converter",
    icon: Repeat,
    children: [
      {
        id: "number-base-converter",
        name: "Number Base Converter",
        href: "/number_base_converter",
      },
    ],
  },
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
  // {
  //   id: "formatter",
  //   name: "Formatter",
  //   href: "/formatter",
  //   icon: RemoveFormatting,
  //   children: [
  //     {
  //       id: "json-formatter",
  //       name: "JSON Formatter",
  //       href: "/json_formatter",
  //     },
  //   ],
  // },
  {
    id: "generator",
    name: "Generator",
    href: "/generator",
    icon: Dna,
    children: [
      {
        id: "uuid-generator",
        name: "UUID Generator",
        href: "/uuid_generator",
      },
    ],
  },
];

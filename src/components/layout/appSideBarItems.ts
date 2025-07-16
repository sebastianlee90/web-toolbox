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
      {
        id: "uuid-v1-to-v6",
        name: "UUID V1 to V6",
        href: "/uuid_v1_to_v6",
      },
      {
        id: "uuid-v6-to-v1",
        name: "UUID V6 to V1",
        href: "/uuid_v6_to_v1",
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

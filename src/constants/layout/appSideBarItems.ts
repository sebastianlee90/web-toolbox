import {
  ArrowDown01,
  ArrowUp01,
  BadgeCheck,
  Binary,
  Dna,
  FileCode2,
  FileDigit,
  LockIcon,
  LockOpen,
  LucideIcon,
  // RemoveFormatting,
  Repeat,
  ScanEye,
} from "lucide-react";

export type NavType = {
  id?: string;
  name: string;
  current?: boolean;
  icon?: LucideIcon;
  children?: NavType[];
  href: string;
  desciption?: string;
};

export const appSideBarItems: NavType[] = [
  // { id: "home", name: "Home", href: "/", icon: HomeIcon },
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
        icon: Binary,
        desciption:
          "Convert between binary, octal, decimal, and hexadecimal numbers in real-time",
      },
      {
        id: "uuid-v1-to-v6",
        name: "UUID V1 to V6",
        href: "/uuid_v1_to_v6",
        icon: ArrowUp01,
        desciption: "Convert Version 1 UUIDs to Version 6 UUIDs",
      },
      {
        id: "uuid-v6-to-v1",
        name: "UUID V6 to V1",
        href: "/uuid_v6_to_v1",
        icon: ArrowDown01,
        desciption: "Convert Version 6 UUIDs to Version 1 UUIDs",
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
        icon: LockIcon,
        desciption: "Encode text data into Base64 in real time",
      },
      {
        id: "base64-decode",
        name: "Base64 Decode",
        href: "/base64_decode",
        icon: LockOpen,
        desciption: "Decode Base64 into text data in real time",
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
        icon: FileDigit,
        desciption: "Generate Version 1 to Version 6 UUIDs",
      },
    ],
  },
  {
    id: "validator",
    name: "Validator",
    href: "/validator",
    icon: BadgeCheck,
    children: [
      {
        id: "uuid-validator",
        name: "UUID Validator",
        href: "/uuid_validator",
        icon: ScanEye,
        desciption:
          "Validate multiple UUIDs in bulk and quickly check their validity and versions",
      },
    ],
  },
];

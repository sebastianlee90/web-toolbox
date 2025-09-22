import {
  BACKGROUND_TO_NOT_RENDER,
  SIDE_BAR_TO_NOT_RENDER,
} from "@/constants/pages/render";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const makeSpace = (str: string) => {
  return str.replace(/([A-Z])/g, " $1").trim();
};

export function toCamelCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/[-_&().]/g, " ") // Replace all separators (- _ & ( ) .) with space
    .replace(/\s+(.)/g, (_, char: string) => char.toUpperCase()) // Capitalize letters after spaces
    .replace(/\s/g, ""); // Remove remaining spaces
}

export function isScientificNotation(str: string) {
  const regex = /^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/;
  return regex.test(str);
}

export function toRenderBackground(pathname: string) {
  const excludeChildrenUrl = BACKGROUND_TO_NOT_RENDER;
  const toRender = !excludeChildrenUrl?.includes(pathname);
  return toRender;
}

export function toRenderSideBar(pathname: string) {
  const excludeChildrenUrl = SIDE_BAR_TO_NOT_RENDER;
  const toRender = !excludeChildrenUrl?.includes(pathname);
  return toRender;
}

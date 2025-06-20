"use server";

import fs from "fs";
import path from "path";

export async function loadMarkdownByFilename(filename: string) {
  const filePath = path.join(process.cwd(), "src", "readme", `${filename}.md`);

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`[Markdown Loader] Failed to load ${filename}.md`, error);
    return "# 📄 Instruction\n\nNo instruction file found.";
  }
}

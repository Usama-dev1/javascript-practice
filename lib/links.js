import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "data", "links.json");

export function getLinks() {
  const file = readFileSync(filePath, "utf8");
  return JSON.parse(file);
}

export function saveLinks(links) {
  writeFileSync(filePath, JSON.stringify(links, null, 2));
}

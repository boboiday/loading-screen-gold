import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Loading: 97%. The last 3% is the compiler deciding whether your semicolon was a cry for help.";

if (LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, over the 200-char limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

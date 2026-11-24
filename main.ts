// Angry Judge: The Short Rant Contest — entry program.
// Writes one funny rant (1-400 chars) about an everyday annoyance to /output/entry.txt.
// The rant: Dave from Sales keeps "circling back" — nine minutes after his own email.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Dave from Sales 'circled back' on his own email nine minutes after sending it. I replied. He circled back again. I have now written 'per my last email' so many times that my keyboard has filed a restraining order against the phrase, and Dave is still circling, somewhere out there, like a shark that learned Outlook.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch");
}
console.log(`Wrote ${chars.length} characters, 4 sentences`);
